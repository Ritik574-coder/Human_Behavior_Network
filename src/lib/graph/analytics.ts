import type { FeedbackLoop, GraphEdge, GraphNode } from "./types";

export interface HubScore {
  id: string;
  name: string;
  degree: number;
}

export interface GraphMetrics {
  entityCount: number;
  relationshipCount: number;
  hubs: HubScore[];
  highDependency: HubScore[];
  bottlenecks: HubScore[];
  highLeverage: HubScore[];
  uncertainty: number;
  concentration: HubScore[];
}

export function degreeMaps(edges: GraphEdge[], ids: Set<string>) {
  const deg = new Map<string, number>();
  const inDeg = new Map<string, number>();
  const outDeg = new Map<string, number>();
  for (const id of ids) {
    deg.set(id, 0);
    inDeg.set(id, 0);
    outDeg.set(id, 0);
  }
  for (const e of edges) {
    if (!ids.has(e.source) || !ids.has(e.target)) continue;
    deg.set(e.source, (deg.get(e.source) ?? 0) + 1);
    deg.set(e.target, (deg.get(e.target) ?? 0) + 1);
    outDeg.set(e.source, (outDeg.get(e.source) ?? 0) + 1);
    inDeg.set(e.target, (inDeg.get(e.target) ?? 0) + 1);
  }
  return { deg, inDeg, outDeg };
}

function topN(
  scores: Map<string, number>,
  names: Map<string, string>,
  n: number,
): HubScore[] {
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([id, degree]) => ({ id, name: names.get(id) ?? id, degree }));
}

/** Brandes betweenness on the undirected projection — fine for <200 nodes. */
export function betweenness(ids: string[], edges: GraphEdge[]): Map<string, number> {
  const adj = new Map<string, string[]>();
  for (const id of ids) adj.set(id, []);
  const idset = new Set(ids);
  for (const e of edges) {
    if (!idset.has(e.source) || !idset.has(e.target)) continue;
    adj.get(e.source)!.push(e.target);
    adj.get(e.target)!.push(e.source);
  }
  const cb = new Map<string, number>();
  for (const id of ids) cb.set(id, 0);

  for (const s of ids) {
    const stack: string[] = [];
    const pred = new Map<string, string[]>();
    const sigma = new Map<string, number>();
    const dist = new Map<string, number>();
    for (const v of ids) {
      pred.set(v, []);
      sigma.set(v, 0);
      dist.set(v, -1);
    }
    sigma.set(s, 1);
    dist.set(s, 0);
    const q = [s];
    while (q.length) {
      const v = q.shift()!;
      stack.push(v);
      for (const w of adj.get(v) ?? []) {
        if (dist.get(w) === -1) {
          dist.set(w, (dist.get(v) ?? 0) + 1);
          q.push(w);
        }
        if (dist.get(w) === (dist.get(v) ?? 0) + 1) {
          sigma.set(w, (sigma.get(w) ?? 0) + (sigma.get(v) ?? 0));
          pred.get(w)!.push(v);
        }
      }
    }
    const delta = new Map<string, number>();
    for (const v of ids) delta.set(v, 0);
    while (stack.length) {
      const w = stack.pop()!;
      for (const v of pred.get(w) ?? []) {
        const add =
          ((sigma.get(v) ?? 0) / Math.max(1, sigma.get(w) ?? 1)) * (1 + (delta.get(w) ?? 0));
        delta.set(v, (delta.get(v) ?? 0) + add);
      }
      if (w !== s) cb.set(w, (cb.get(w) ?? 0) + (delta.get(w) ?? 0));
    }
  }
  return cb;
}

export function computeMetrics(
  nodes: GraphNode[],
  edges: GraphEdge[],
  visible: Set<string>,
): GraphMetrics {
  const visNodes = nodes.filter((n) => visible.has(n.id));
  const visEdges = edges.filter((e) => visible.has(e.source) && visible.has(e.target));
  const names = new Map(visNodes.map((n) => [n.id, n.name]));
  const ids = visNodes.map((n) => n.id);
  const { deg, inDeg } = degreeMaps(visEdges, visible);
  const bet = ids.length > 0 ? betweenness(ids, visEdges) : new Map<string, number>();
  const leverage = new Map<string, number>();
  for (const n of visNodes) {
    leverage.set(n.id, (deg.get(n.id) ?? 0) * 0.6 + (bet.get(n.id) ?? 0) * 0.05 + n.importance);
  }
  const uncertain = visEdges.filter(
    (e) => e.evidenceLevel === "contested" || e.evidenceLevel === "speculative",
  ).length;
  const denom = Math.max(1, visEdges.length);
  return {
    entityCount: visNodes.length,
    relationshipCount: visEdges.length,
    hubs: topN(deg, names, 5),
    highDependency: topN(inDeg, names, 5),
    bottlenecks: topN(bet, names, 5),
    highLeverage: topN(leverage, names, 5),
    uncertainty: uncertain / denom,
    concentration: topN(inDeg, names, 4),
  };
}

export function loopsTouching(
  loops: FeedbackLoop[],
  nodeId: string | null,
): FeedbackLoop[] {
  if (!nodeId) return loops;
  return loops.filter((l) => l.nodeIds.includes(nodeId));
}
