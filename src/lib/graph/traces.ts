import type { EdgeType, ExploreMode, GraphEdge, GraphNode, TraceDepth } from "./types";

const MODE_EDGES: Record<Exclude<ExploreMode, "explore" | "evidence">, EdgeType[]> = {
  money: ["money", "ownership"],
  data: ["data", "information"],
  power: ["influence", "regulation", "ownership", "dependency"],
  incentive: ["incentive", "money", "causal", "feedback"],
};

export interface TraceResult {
  nodeIds: Set<string>;
  edgeIds: Set<string>;
  hops: Map<string, number>;
  steps: { nodeId: string; via: string | null; hop: number }[];
}

export function traceFrom(
  startId: string,
  mode: ExploreMode,
  depth: TraceDepth,
  edges: GraphEdge[],
  nodes: GraphNode[],
): TraceResult {
  const nodeIds = new Set<string>([startId]);
  const edgeIds = new Set<string>();
  const hops = new Map<string, number>([[startId, 0]]);
  const steps: TraceResult["steps"] = [{ nodeId: startId, via: null, hop: 0 }];
  if (mode === "explore" || mode === "evidence") {
    return { nodeIds, edgeIds, hops, steps };
  }

  const allowed = new Set(MODE_EDGES[mode]);
  const max = depth === 99 ? 12 : depth;
  const byId = new Map(nodes.map((n) => [n.id, n]));
  if (!byId.has(startId)) return { nodeIds, edgeIds, hops, steps };

  const outgoing = new Map<string, GraphEdge[]>();
  const incoming = new Map<string, GraphEdge[]>();
  for (const e of edges) {
    if (!allowed.has(e.type) && e.type !== "feedback") continue;
    const o = outgoing.get(e.source) ?? [];
    o.push(e);
    outgoing.set(e.source, o);
    const i = incoming.get(e.target) ?? [];
    i.push(e);
    incoming.set(e.target, i);
  }

  const queue: { id: string; hop: number }[] = [{ id: startId, hop: 0 }];
  while (queue.length) {
    const { id, hop } = queue.shift()!;
    if (hop >= max) continue;
    const nextEdges = [...(outgoing.get(id) ?? []), ...(incoming.get(id) ?? [])];
    for (const e of nextEdges) {
      const other = e.source === id ? e.target : e.source;
      if (!byId.has(other)) continue;
      edgeIds.add(e.id);
      if (!nodeIds.has(other)) {
        nodeIds.add(other);
        hops.set(other, hop + 1);
        steps.push({ nodeId: other, via: e.label, hop: hop + 1 });
        queue.push({ id: other, hop: hop + 1 });
      }
    }
  }
  return { nodeIds, edgeIds, hops, steps };
}

export function neighborhood(
  id: string,
  edges: GraphEdge[],
  hops = 1,
): { nodeIds: Set<string>; edgeIds: Set<string> } {
  const nodeIds = new Set<string>([id]);
  const edgeIds = new Set<string>();
  let frontier = new Set<string>([id]);
  for (let h = 0; h < hops; h++) {
    const next = new Set<string>();
    for (const e of edges) {
      const a = frontier.has(e.source);
      const b = frontier.has(e.target);
      if (a || b) {
        edgeIds.add(e.id);
        nodeIds.add(e.source);
        nodeIds.add(e.target);
        if (!a) next.add(e.source);
        if (!b) next.add(e.target);
      }
    }
    frontier = next;
  }
  return { nodeIds, edgeIds };
}

export function removalCascade(
  removedId: string,
  edges: GraphEdge[],
  nodes: GraphNode[],
): { first: string[]; second: string[]; third: string[]; brokenEdgeIds: string[] } {
  const dependents = new Map<string, string[]>();
  for (const e of edges) {
    const list = dependents.get(e.source) ?? [];
    list.push(e.target);
    dependents.set(e.source, list);
  }
  const first = new Set<string>();
  const second = new Set<string>();
  const third = new Set<string>();
  for (const t of dependents.get(removedId) ?? []) {
    if (t !== removedId) first.add(t);
  }
  for (const n of first) {
    for (const t of dependents.get(n) ?? []) {
      if (t !== removedId && !first.has(t)) second.add(t);
    }
  }
  for (const n of second) {
    for (const t of dependents.get(n) ?? []) {
      if (t !== removedId && !first.has(t) && !second.has(t)) third.add(t);
    }
  }
  const broken = edges
    .filter((e) => e.source === removedId || e.target === removedId)
    .map((e) => e.id);
  const known = new Set(nodes.map((n) => n.id));
  return {
    first: [...first].filter((id) => known.has(id)),
    second: [...second].filter((id) => known.has(id)),
    third: [...third].filter((id) => known.has(id)),
    brokenEdgeIds: broken,
  };
}
