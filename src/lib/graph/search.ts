import type { GraphEdge, GraphNode } from "./types";

export interface SearchHit {
  id: string;
  name: string;
  category: string;
  score: number;
  why: string;
}

function norm(s: string): string {
  return s.toLowerCase().trim();
}

function subsequenceScore(q: string, text: string): number {
  let i = 0;
  for (const ch of text) {
    if (ch === q[i]) i++;
    if (i === q.length) return 0.35;
  }
  return 0;
}

function scoreText(q: string, text: string): number {
  const t = norm(text);
  if (!t) return 0;
  if (t === q) return 1;
  if (t.startsWith(q)) return 0.92;
  if (t.includes(q)) return 0.78;
  const tokens = t.split(/[\s/&,]+/);
  for (const tok of tokens) {
    if (tok.startsWith(q)) return 0.7;
  }
  return subsequenceScore(q, t);
}

export function searchGraph(
  query: string,
  nodes: GraphNode[],
  edges: GraphEdge[],
  limit = 12,
): SearchHit[] {
  const q = norm(query);
  if (q.length < 1) return [];
  const hits: SearchHit[] = [];
  for (const n of nodes) {
    let best = scoreText(q, n.name);
    let why = "name";
    const aliasHit = (n.aliases ?? []).reduce((m, a) => Math.max(m, scoreText(q, a)), 0);
    if (aliasHit > best) {
      best = aliasHit * 0.98;
      why = "alias";
    }
    const cat = scoreText(q, n.category) * 0.55;
    if (cat > best) {
      best = cat;
      why = "category";
    }
    const desc = n.description.toLowerCase().includes(q) ? 0.42 : 0;
    if (desc > best) {
      best = desc;
      why = "description";
    }
    const role = n.role.toLowerCase().includes(q) ? 0.4 : 0;
    if (role > best) {
      best = role;
      why = "role";
    }
    if (best >= 0.35) {
      hits.push({ id: n.id, name: n.name, category: n.category, score: best, why });
    }
  }
  for (const e of edges) {
    const s = scoreText(q, e.label);
    if (s >= 0.7) {
      const already = hits.find((h) => h.id === e.source || h.id === e.target);
      if (!already) {
        hits.push({
          id: e.source,
          name: e.label,
          category: "relationship",
          score: s * 0.6,
          why: "relationship",
        });
      }
    }
  }
  hits.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  const seen = new Set<string>();
  const unique: SearchHit[] = [];
  for (const h of hits) {
    if (seen.has(h.id)) continue;
    seen.add(h.id);
    unique.push(h);
    if (unique.length >= limit) break;
  }
  return unique;
}

export function shortestPath(
  source: string,
  target: string,
  edges: GraphEdge[],
  allowed: Set<string>,
): { nodes: string[]; edges: string[] } | null {
  if (source === target) return { nodes: [source], edges: [] };
  const adj = new Map<string, { to: string; edgeId: string }[]>();
  for (const e of edges) {
    if (!allowed.has(e.source) || !allowed.has(e.target)) continue;
    const a = adj.get(e.source) ?? [];
    a.push({ to: e.target, edgeId: e.id });
    adj.set(e.source, a);
    const b = adj.get(e.target) ?? [];
    b.push({ to: e.source, edgeId: e.id });
    adj.set(e.target, b);
  }
  const q: string[] = [source];
  const prev = new Map<string, { from: string; edgeId: string }>();
  const seen = new Set([source]);
  while (q.length) {
    const cur = q.shift()!;
    for (const nb of adj.get(cur) ?? []) {
      if (seen.has(nb.to)) continue;
      seen.add(nb.to);
      prev.set(nb.to, { from: cur, edgeId: nb.edgeId });
      if (nb.to === target) {
        const nodes = [target];
        const edgeIds: string[] = [];
        let walk = target;
        while (walk !== source) {
          const p = prev.get(walk)!;
          edgeIds.push(p.edgeId);
          walk = p.from;
          nodes.push(walk);
        }
        nodes.reverse();
        edgeIds.reverse();
        return { nodes, edges: edgeIds };
      }
      q.push(nb.to);
    }
  }
  return null;
}
