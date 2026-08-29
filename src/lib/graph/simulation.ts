import type { GraphEdge, GraphNode, Layer } from "./types";

export interface SimNode {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  fx: number | null;
  fy: number | null;
  r: number;
  homeX: number;
  homeY: number;
}

export interface SimLink {
  source: SimNode;
  target: SimNode;
  strength: number;
}

const LAYER_HOME: Record<Layer, { x: number; y: number }> = {
  psychology: { x: 0, y: -420 },
  information: { x: 380, y: -260 },
  data: { x: 480, y: 20 },
  ai: { x: 360, y: 300 },
  business: { x: 0, y: 440 },
  money: { x: -360, y: 300 },
  power: { x: -480, y: 20 },
  labor: { x: -360, y: -260 },
  supply: { x: 40, y: 680 },
};

function hashJitter(id: string): { x: number; y: number } {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const a = ((h >>> 0) % 1000) / 1000;
  const b = (((h >>> 8) % 1000) / 1000);
  return { x: (a - 0.5) * 180, y: (b - 0.5) * 180 };
}

export function homeFor(node: GraphNode): { x: number; y: number } {
  if (node.id === "human-behavior") return { x: 0, y: 0 };
  let x = 0;
  let y = 0;
  for (const layer of node.layers) {
    x += LAYER_HOME[layer].x;
    y += LAYER_HOME[layer].y;
  }
  const n = Math.max(1, node.layers.length);
  const j = hashJitter(node.id);
  const radial = 0.55 + node.tier * 0.22;
  return { x: (x / n) * radial + j.x, y: (y / n) * radial + j.y };
}

export class ForceSim {
  nodes: SimNode[] = [];
  links: SimLink[] = [];
  alpha = 1;
  alphaMin = 0.001;
  alphaDecay = 0.022;
  velocityDecay = 0.35;
  charge = -420;
  linkDistance = 92;
  linkStrength = 0.045;
  homeStrength = 0.018;
  collidePad = 4;
  centerStrength = 0.012;
  private index = new Map<string, SimNode>();

  setGraph(
    nodes: GraphNode[],
    edges: GraphEdge[],
    radiusOf: (n: GraphNode) => number,
    keep: Map<string, SimNode> | null,
  ) {
    const next: SimNode[] = [];
    const map = new Map<string, SimNode>();
    for (const n of nodes) {
      const home = homeFor(n);
      const prev = keep?.get(n.id);
      const sn: SimNode = prev
        ? {
            ...prev,
            r: radiusOf(n),
            homeX: home.x,
            homeY: home.y,
          }
        : {
            id: n.id,
            x: home.x,
            y: home.y,
            vx: 0,
            vy: 0,
            fx: null,
            fy: null,
            r: radiusOf(n),
            homeX: home.x,
            homeY: home.y,
          };
      next.push(sn);
      map.set(n.id, sn);
    }
    this.nodes = next;
    this.index = map;
    const links: SimLink[] = [];
    for (const e of edges) {
      const s = map.get(e.source);
      const t = map.get(e.target);
      if (!s || !t) continue;
      const loopBoost = e.loopId ? 0.02 : 0;
      links.push({
        source: s,
        target: t,
        strength: this.linkStrength + loopBoost,
      });
    }
    this.links = links;
  }

  node(id: string): SimNode | undefined {
    return this.index.get(id);
  }

  reheat(value = 0.9) {
    this.alpha = Math.max(this.alpha, value);
  }

  tick(iterations = 1) {
    if (this.alpha < this.alphaMin) return false;
    for (let k = 0; k < iterations; k++) {
      this.step();
    }
    return true;
  }

  private step() {
    const { nodes, links, alpha } = this;
    const n = nodes.length;
    const charge = this.charge * alpha;

    for (let i = 0; i < n; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < n; j++) {
        const b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist2 = dx * dx + dy * dy;
        if (dist2 < 0.01) {
          dx = (Math.random() - 0.5) * 0.4;
          dy = (Math.random() - 0.5) * 0.4;
          dist2 = dx * dx + dy * dy;
        }
        const dist = Math.sqrt(dist2);
        const force = charge / dist2;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx += fx;
        a.vy += fy;
        b.vx -= fx;
        b.vy -= fy;

        const minDist = a.r + b.r + this.collidePad;
        if (dist < minDist) {
          const overlap = (minDist - dist) / dist;
          const ox = dx * overlap * 0.5;
          const oy = dy * overlap * 0.5;
          a.x -= ox;
          a.y -= oy;
          b.x += ox;
          b.y += oy;
        }
      }
    }

    const ls = this.linkStrength;
    const rest = this.linkDistance;
    for (const link of links) {
      const s = link.source;
      const t = link.target;
      let dx = t.x - s.x;
      let dy = t.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const k = ((dist - rest) / dist) * link.strength * alpha * (ls / 0.045);
      dx *= k;
      dy *= k;
      s.vx += dx;
      s.vy += dy;
      t.vx -= dx;
      t.vy -= dy;
    }

    const hs = this.homeStrength * alpha;
    const cs = this.centerStrength * alpha;
    const decay = 1 - this.velocityDecay;
    for (const node of nodes) {
      node.vx += (node.homeX - node.x) * hs;
      node.vy += (node.homeY - node.y) * hs;
      node.vx += -node.x * cs;
      node.vy += -node.y * cs;
      if (node.fx != null) {
        node.x = node.fx;
        node.vx = 0;
      } else {
        node.vx *= decay;
        node.x += node.vx;
      }
      if (node.fy != null) {
        node.y = node.fy;
        node.vy = 0;
      } else {
        node.vy *= decay;
        node.y += node.vy;
      }
    }

    this.alpha *= 1 - this.alphaDecay;
  }
}
