import {
  CATEGORY_COLOR,
  EDGE_COLOR,
  EVIDENCE_COLOR,
  GRAPH_THEME as T,
  hexToRgba,
} from "@/lib/graph/theme";
import { ForceSim, type SimNode } from "@/lib/graph/simulation";
import { shortestPath } from "@/lib/graph/search";
import { SCENARIOS } from "@/lib/graph/scenarios";
import { neighborhood, removalCascade, traceFrom } from "@/lib/graph/traces";
import type { GraphEdge, GraphNode } from "@/lib/graph/types";
import {
  type GraphState,
  visibleEdges,
  visibleNodeSet,
} from "@/store/graph-store";

export interface EngineHooks {
  getState: () => GraphState;
  nodes: GraphNode[];
  edges: GraphEdge[];
  onSelect: (id: string | null, additive: boolean) => void;
  onHover: (id: string | null) => void;
}

interface Particle {
  edgeId: string;
  t: number;
  speed: number;
}

interface Camera {
  x: number;
  y: number;
  k: number;
}

const MIN_K = 0.18;
const MAX_K = 3.2;

export class GraphEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private hooks: EngineHooks;
  private sim = new ForceSim();
  private cam: Camera = { x: 0, y: 0, k: 0.85 };
  private raf = 0;
  private dpr = 1;
  private w = 0;
  private h = 0;
  private dragging: SimNode | null = null;
  private panning = false;
  private lastX = 0;
  private lastY = 0;
  private moved = false;
  private pointers = new Map<number, { x: number; y: number }>();
  private pinchDist = 0;
  private particles: Particle[] = [];
  private lastReheat = -1;
  private lastFit = -1;
  private lastCenter = -1;
  private lastSig = "";
  private reduced = false;
  private running = false;
  private hoverId: string | null = null;

  constructor(canvas: HTMLCanvasElement, hooks: EngineHooks) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("Canvas 2D unavailable");
    this.ctx = ctx;
    this.hooks = hooks;
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.bind();
  }

  start() {
    this.running = true;
    this.resize();
    this.rebuild(true);
    this.fit(true);
    this.loop();
  }

  stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.unbind();
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    this.w = rect.width;
    this.h = rect.height;
    this.canvas.width = Math.max(1, Math.floor(rect.width * this.dpr));
    this.canvas.height = Math.max(1, Math.floor(rect.height * this.dpr));
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;
  }

  private bind() {
    this.canvas.addEventListener("pointerdown", this.onDown);
    this.canvas.addEventListener("pointermove", this.onMove);
    this.canvas.addEventListener("pointerup", this.onUp);
    this.canvas.addEventListener("pointercancel", this.onUp);
    this.canvas.addEventListener("pointerleave", this.onLeave);
    this.canvas.addEventListener("wheel", this.onWheel, { passive: false });
    this.canvas.addEventListener("dblclick", this.onDbl);
    window.addEventListener("resize", this.onResize);
  }

  private unbind() {
    this.canvas.removeEventListener("pointerdown", this.onDown);
    this.canvas.removeEventListener("pointermove", this.onMove);
    this.canvas.removeEventListener("pointerup", this.onUp);
    this.canvas.removeEventListener("pointercancel", this.onUp);
    this.canvas.removeEventListener("pointerleave", this.onLeave);
    this.canvas.removeEventListener("wheel", this.onWheel);
    this.canvas.removeEventListener("dblclick", this.onDbl);
    window.removeEventListener("resize", this.onResize);
  }

  private onResize = () => this.resize();

  private world(sx: number, sy: number) {
    return { x: (sx - this.cam.x) / this.cam.k, y: (sy - this.cam.y) / this.cam.k };
  }

  private screen(wx: number, wy: number) {
    return { x: wx * this.cam.k + this.cam.x, y: wy * this.cam.k + this.cam.y };
  }

  private hit(sx: number, sy: number): SimNode | null {
    const { x, y } = this.world(sx, sy);
    let best: SimNode | null = null;
    let bestD = Infinity;
    for (const n of this.sim.nodes) {
      const dx = n.x - x;
      const dy = n.y - y;
      const d = Math.sqrt(dx * dx + dy * dy);
      const pad = 10 / this.cam.k;
      if (d <= n.r + pad && d < bestD) {
        best = n;
        bestD = d;
      }
    }
    return best;
  }

  private onDown = (ev: PointerEvent) => {
    this.canvas.setPointerCapture(ev.pointerId);
    this.pointers.set(ev.pointerId, { x: ev.offsetX, y: ev.offsetY });
    this.moved = false;
    this.lastX = ev.offsetX;
    this.lastY = ev.offsetY;
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      this.pinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      this.dragging = null;
      this.panning = false;
      return;
    }
    const node = this.hit(ev.offsetX, ev.offsetY);
    if (node) {
      this.dragging = node;
      node.fx = node.x;
      node.fy = node.y;
    } else {
      this.panning = true;
    }
  };

  private onMove = (ev: PointerEvent) => {
    if (this.pointers.has(ev.pointerId)) {
      this.pointers.set(ev.pointerId, { x: ev.offsetX, y: ev.offsetY });
    }
    if (this.pointers.size === 2) {
      const pts = [...this.pointers.values()];
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (this.pinchDist > 0 && dist > 0) {
        const mx = (pts[0].x + pts[1].x) / 2;
        const my = (pts[0].y + pts[1].y) / 2;
        this.zoomAt(mx, my, dist / this.pinchDist);
      }
      this.pinchDist = dist;
      return;
    }
    const dx = ev.offsetX - this.lastX;
    const dy = ev.offsetY - this.lastY;
    if (Math.abs(dx) + Math.abs(dy) > 3) this.moved = true;
    this.lastX = ev.offsetX;
    this.lastY = ev.offsetY;
    if (this.dragging) {
      const w = this.world(ev.offsetX, ev.offsetY);
      this.dragging.fx = w.x;
      this.dragging.fy = w.y;
      this.dragging.x = w.x;
      this.dragging.y = w.y;
      this.sim.reheat(0.25);
      return;
    }
    if (this.panning) {
      this.cam.x += dx;
      this.cam.y += dy;
      return;
    }
    const node = this.hit(ev.offsetX, ev.offsetY);
    const id = node?.id ?? null;
    if (id !== this.hoverId) {
      this.hoverId = id;
      this.hooks.onHover(id);
      this.canvas.style.cursor = id ? "pointer" : "grab";
    }
  };

  private onUp = (ev: PointerEvent) => {
    this.pointers.delete(ev.pointerId);
    if (this.dragging) {
      if (!this.moved) {
        this.hooks.onSelect(this.dragging.id, ev.shiftKey);
      }
      this.dragging.fx = null;
      this.dragging.fy = null;
      this.dragging = null;
      this.sim.reheat(0.2);
    } else if (this.panning && !this.moved) {
      this.hooks.onSelect(null, false);
    }
    this.panning = false;
    this.pinchDist = 0;
    try {
      this.canvas.releasePointerCapture(ev.pointerId);
    } catch {
      /* ignore */
    }
  };

  private onLeave = () => {
    if (this.hoverId) {
      this.hoverId = null;
      this.hooks.onHover(null);
    }
  };

  private onWheel = (ev: WheelEvent) => {
    ev.preventDefault();
    const factor = ev.deltaY < 0 ? 1.08 : 0.92;
    this.zoomAt(ev.offsetX, ev.offsetY, factor);
  };

  private onDbl = (ev: MouseEvent) => {
    const node = this.hit(ev.offsetX, ev.offsetY);
    if (node) this.centerOn(node.id);
  };

  private zoomAt(sx: number, sy: number, factor: number) {
    const k0 = this.cam.k;
    const k1 = Math.min(MAX_K, Math.max(MIN_K, k0 * factor));
    const wx = (sx - this.cam.x) / k0;
    const wy = (sy - this.cam.y) / k0;
    this.cam.k = k1;
    this.cam.x = sx - wx * k1;
    this.cam.y = sy - wy * k1;
  }

  fit(instant = false) {
    const nodes = this.sim.nodes;
    if (!nodes.length) return;
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;
    for (const n of nodes) {
      minX = Math.min(minX, n.x - n.r);
      minY = Math.min(minY, n.y - n.r);
      maxX = Math.max(maxX, n.x + n.r);
      maxY = Math.max(maxY, n.y + n.r);
    }
    const bw = Math.max(80, maxX - minX);
    const bh = Math.max(80, maxY - minY);
    const pad = 88;
    const k = Math.min((this.w - pad * 2) / bw, (this.h - pad * 2) / bh);
    const nk = Math.min(MAX_K, Math.max(MIN_K, k));
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const tx = this.w / 2 - cx * nk;
    const ty = this.h / 2 - cy * nk;
    if (instant) {
      this.cam = { x: tx, y: ty, k: nk };
    } else {
      this.cam.k = nk;
      this.cam.x = tx;
      this.cam.y = ty;
    }
  }

  centerOn(id: string) {
    const n = this.sim.node(id);
    if (!n) return;
    this.cam.x = this.w / 2 - n.x * this.cam.k;
    this.cam.y = this.h / 2 - n.y * this.cam.k;
  }

  private radiusOf = (n: GraphNode) => {
    const s = this.hooks.getState().nodeSizeScale;
    return (5.5 + n.importance * 1.15 + (n.tier === 0 ? 3 : 0)) * s;
  };

  private rebuild(force = false) {
    const state = this.hooks.getState();
    const vis = visibleNodeSet(state);
    const edges = visibleEdges(state, vis);
    const nodes = this.hooks.nodes.filter((n) => vis.has(n.id));
    const sig = `${[...vis].sort().join(",")}|${edges.length}|${state.nodeSizeScale}|${state.edgeStrength}|${state.simStrength}`;
    if (!force && sig === this.lastSig) return;
    this.lastSig = sig;
    const keep = new Map(this.sim.nodes.map((n) => [n.id, n]));
    this.sim.linkStrength = 0.045 * state.edgeStrength;
    this.sim.charge = -420 * state.simStrength;
    this.sim.homeStrength = 0.018 * state.simStrength;
    this.sim.setGraph(nodes, edges, this.radiusOf, keep);
    if (force) this.sim.alpha = 1;
    else this.sim.reheat(0.45);
  }

  private loop = () => {
    if (!this.running) return;
    const state = this.hooks.getState();
    if (state.reheatToken !== this.lastReheat) {
      this.lastReheat = state.reheatToken;
      this.rebuild(true);
      this.sim.reheat(1);
    } else {
      this.rebuild(false);
    }
    if (state.fitToken !== this.lastFit) {
      this.lastFit = state.fitToken;
      this.fit();
    }
    if (state.centerToken !== this.lastCenter) {
      this.lastCenter = state.centerToken;
      if (state.selectedId) this.centerOn(state.selectedId);
    }
    if (!state.frozen) this.sim.tick(1);
    this.draw(state);
    this.raf = requestAnimationFrame(this.loop);
  };

  private draw(state: GraphState) {
    const ctx = this.ctx;
    const { w, h, dpr, cam } = this;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = T.bg;
    ctx.fillRect(0, 0, w, h);

    this.drawGrid(ctx, w, h);
    ctx.save();
    ctx.translate(cam.x, cam.y);
    ctx.scale(cam.k, cam.k);

    const vis = visibleNodeSet(state);
    const edges = visibleEdges(state, vis);
    const nodeMap = new Map(this.hooks.nodes.map((n) => [n.id, n]));
    const highlight = this.highlight(state, vis, edges);

    for (const e of edges) {
      const s = this.sim.node(e.source);
      const t = this.sim.node(e.target);
      if (!s || !t) continue;
      const on = highlight.edges.has(e.id);
      const dim = highlight.active && !on;
      this.drawEdge(ctx, s, t, e, on, dim, state);
    }

    if (!this.reduced && highlight.active) {
      this.drawParticles(ctx, edges, highlight.edges, state);
    }

    const labels: { x: number; y: number; text: string; alpha: number; core: boolean }[] = [];
    for (const n of this.sim.nodes) {
      const data = nodeMap.get(n.id);
      if (!data) continue;
      const on = highlight.nodes.has(n.id);
      const dim = highlight.active && !on;
      const selected = state.selectedId === n.id;
      const hovered = state.hoveredId === n.id;
      this.drawNode(ctx, n, data, selected, hovered, dim, state);
      const show =
        state.showLabels &&
        !dim &&
        (selected ||
          hovered ||
          data.tier === 0 ||
          cam.k > 0.72 ||
          (cam.k > 0.48 && data.importance >= 7));
      if (show) {
        labels.push({
          x: n.x,
          y: n.y + n.r + 10 / cam.k,
          text: data.name,
          alpha: dim ? 0.2 : selected || hovered ? 1 : 0.78,
          core: data.tier === 0,
        });
      }
    }

    this.drawLabels(ctx, labels, cam.k);
    ctx.restore();

    const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.72);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, T.vignette);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }

  private highlight(state: GraphState, vis: Set<string>, edges: GraphEdge[]) {
    const nodes = new Set<string>();
    const eids = new Set<string>();
    let active = false;

    if (state.query.trim().length >= 1) {
      active = true;
      const q = state.query.toLowerCase();
      for (const n of this.hooks.nodes) {
        if (!vis.has(n.id)) continue;
        const blob = `${n.name} ${(n.aliases ?? []).join(" ")} ${n.category}`.toLowerCase();
        if (blob.includes(q) || n.id.includes(q.replace(/\s+/g, "-"))) nodes.add(n.id);
      }
      for (const e of edges) {
        if (nodes.has(e.source) && nodes.has(e.target)) eids.add(e.id);
      }
    }

    if (state.mode !== "explore" && state.mode !== "evidence" && state.selectedId) {
      active = true;
      const tr = traceFrom(state.selectedId, state.mode, state.traceDepth, this.hooks.edges, this.hooks.nodes);
      for (const id of tr.nodeIds) if (vis.has(id)) nodes.add(id);
      for (const id of tr.edgeIds) eids.add(id);
    }

    if (state.activeLoop) {
      active = true;
      const loopEdges = this.hooks.edges.filter((e) => e.loopId === state.activeLoop);
      for (const e of loopEdges) {
        eids.add(e.id);
        nodes.add(e.source);
        nodes.add(e.target);
      }
    }

    if (state.activeScenario) {
      active = true;
      const sc = SCENARIOS.find((s) => s.id === state.activeScenario);
      if (sc) {
        for (const sh of sc.shocks) nodes.add(sh.nodeId);
        for (const ef of sc.effects) nodes.add(ef.nodeId);
      }
    }

    if (state.removedId) {
      active = true;
      const cascade = removalCascade(state.removedId, this.hooks.edges, this.hooks.nodes);
      nodes.add(state.removedId);
      for (const id of cascade.first) nodes.add(id);
      for (const id of cascade.second) nodes.add(id);
      for (const id of cascade.third) nodes.add(id);
      for (const id of cascade.brokenEdgeIds) eids.add(id);
    }

    if (state.pathTargetId && state.selectedId) {
      const path = shortestPath(state.selectedId, state.pathTargetId, edges, vis);
      if (path) {
        active = true;
        for (const id of path.nodes) nodes.add(id);
        for (const id of path.edges) eids.add(id);
      }
    }

    if (!active && state.selectedId) {
      const nb = neighborhood(state.selectedId, edges, 1);
      for (const id of nb.nodeIds) nodes.add(id);
      for (const id of nb.edgeIds) eids.add(id);
      active = true;
    }

    if (state.hoveredId) nodes.add(state.hoveredId);
    if (state.selectedId) nodes.add(state.selectedId);

    return { nodes, edges: eids, active };
  }

  private drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const step = 48 * this.cam.k;
    if (step < 18) return;
    ctx.strokeStyle = T.grid;
    ctx.lineWidth = 1;
    ctx.beginPath();
    const ox = this.cam.x % step;
    const oy = this.cam.y % step;
    for (let x = ox; x < w; x += step) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    for (let y = oy; y < h; y += step) {
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
    }
    ctx.stroke();
  }

  private drawEdge(
    ctx: CanvasRenderingContext2D,
    s: SimNode,
    t: SimNode,
    e: GraphEdge,
    on: boolean,
    dim: boolean,
    state: GraphState,
  ) {
    const color = EDGE_COLOR[e.type];
    const alpha = dim ? 0.06 : on ? 0.72 : 0.22;
    ctx.strokeStyle = hexToRgba(color, alpha);
    const loop = Boolean(e.loopId) && state.showLoops;
    ctx.lineWidth = (loop ? 1.8 : 1.05) / this.cam.k;
    if (e.type === "correlation" || e.evidenceLevel === "speculative") {
      ctx.setLineDash([6 / this.cam.k, 5 / this.cam.k]);
    } else if (loop) {
      const off = this.reduced ? 0 : (performance.now() / 80) % 20;
      ctx.setLineDash([7 / this.cam.k, 5 / this.cam.k]);
      ctx.lineDashOffset = -off / this.cam.k;
    } else {
      ctx.setLineDash([]);
    }
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(t.x, t.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;

    if (!dim && (on || this.cam.k > 0.85)) {
      this.arrow(ctx, s, t, color, alpha);
    }

    if (on && this.cam.k > 0.7 && e.label) {
      const mx = (s.x + t.x) / 2;
      const my = (s.y + t.y) / 2;
      ctx.save();
      ctx.font = `${11 / this.cam.k}px "IBM Plex Sans", sans-serif`;
      ctx.fillStyle = hexToRgba(color, 0.85);
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillText(e.label, mx, my - 3 / this.cam.k);
      ctx.restore();
    }
  }

  private arrow(ctx: CanvasRenderingContext2D, s: SimNode, t: SimNode, color: string, alpha: number) {
    const dx = t.x - s.x;
    const dy = t.y - s.y;
    const dist = Math.hypot(dx, dy) || 1;
    const ux = dx / dist;
    const uy = dy / dist;
    const ax = t.x - ux * (t.r + 2);
    const ay = t.y - uy * (t.r + 2);
    const size = 5.5 / this.cam.k;
    ctx.fillStyle = hexToRgba(color, alpha);
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax - ux * size - uy * size * 0.55, ay - uy * size + ux * size * 0.55);
    ctx.lineTo(ax - ux * size + uy * size * 0.55, ay - uy * size - ux * size * 0.55);
    ctx.closePath();
    ctx.fill();
  }

  private drawNode(
    ctx: CanvasRenderingContext2D,
    n: SimNode,
    data: GraphNode,
    selected: boolean,
    hovered: boolean,
    dim: boolean,
    state: GraphState,
  ) {
    const color =
      state.mode === "evidence" ? EVIDENCE_COLOR[data.evidenceLevel] : CATEGORY_COLOR[data.category];
    const alpha = dim ? 0.14 : 1;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(color, 0.16 * alpha);
    ctx.fill();
    ctx.lineWidth = (selected ? 2.4 : hovered ? 1.8 : data.tier === 0 ? 1.5 : 1.1) / this.cam.k;
    ctx.strokeStyle = selected
      ? T.selectedRing
      : hovered
        ? T.hoverRing
        : hexToRgba(color, 0.85 * alpha);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(n.x, n.y, Math.max(1.4, n.r * 0.28), 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(color, (dim ? 0.2 : 0.9) * alpha);
    ctx.fill();

    if (data.id === "human-behavior" && !dim) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r + 5 / this.cam.k, 0, Math.PI * 2);
      ctx.strokeStyle = hexToRgba(color, 0.35);
      ctx.lineWidth = 1 / this.cam.k;
      ctx.stroke();
    }
  }

  private drawLabels(
    ctx: CanvasRenderingContext2D,
    labels: { x: number; y: number; text: string; alpha: number; core: boolean }[],
    k: number,
  ) {
    const placed: { x: number; y: number; w: number; h: number }[] = [];
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (const lb of labels) {
      const size = (lb.core ? 12 : 10.5) / k;
      ctx.font = `${lb.core ? 500 : 400} ${size}px "IBM Plex Sans", sans-serif`;
      const w = ctx.measureText(lb.text).width;
      const h = size * 1.3;
      const box = { x: lb.x - w / 2, y: lb.y, w, h };
      const overlap = placed.some(
        (p) => box.x < p.x + p.w && box.x + box.w > p.x && box.y < p.y + p.h && box.y + box.h > p.y,
      );
      if (overlap && !lb.core) continue;
      placed.push(box);
      ctx.fillStyle = `rgba(8,9,11,${0.55 * lb.alpha})`;
      ctx.fillRect(box.x - 3 / k, box.y - 1 / k, w + 6 / k, h);
      ctx.fillStyle =
        lb.alpha > 0.9 ? T.label : lb.alpha > 0.5 ? T.labelMuted : T.labelDim;
      ctx.fillText(lb.text, lb.x, lb.y);
    }
  }

  private drawParticles(
    ctx: CanvasRenderingContext2D,
    edges: GraphEdge[],
    highlight: Set<string>,
    state: GraphState,
  ) {
    const flowing = edges.filter((e) => highlight.has(e.id));
    if (!flowing.length) {
      this.particles = [];
      return;
    }
    if (this.particles.length < flowing.length * 2) {
      for (const e of flowing) {
        this.particles.push({
          edgeId: e.id,
          t: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
        });
      }
    }
    const byId = new Map(edges.map((e) => [e.id, e]));
    const next: Particle[] = [];
    for (const p of this.particles) {
      const e = byId.get(p.edgeId);
      if (!e || !highlight.has(p.edgeId)) continue;
      const s = this.sim.node(e.source);
      const t = this.sim.node(e.target);
      if (!s || !t) continue;
      p.t += p.speed * (state.mode === "money" || state.mode === "data" ? 1.4 : 1);
      if (p.t > 1) p.t -= 1;
      const x = s.x + (t.x - s.x) * p.t;
      const y = s.y + (t.y - s.y) * p.t;
      ctx.beginPath();
      ctx.arc(x, y, 2.1 / this.cam.k, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(EDGE_COLOR[e.type], 0.9);
      ctx.fill();
      next.push(p);
    }
    this.particles = next.slice(0, 220);
  }
}
