import { create } from "zustand";
import { EDGES } from "@/lib/graph/edges";
import { LOOPS } from "@/lib/graph/loops";
import { NODES } from "@/lib/graph/nodes";
import { SCENARIOS } from "@/lib/graph/scenarios";
import { searchGraph } from "@/lib/graph/search";
import { neighborhood, removalCascade, traceFrom } from "@/lib/graph/traces";
import type {
  Complexity,
  EdgeType,
  EvidenceLevel,
  ExploreMode,
  GraphEdge,
  GraphNode,
  Layer,
  TraceDepth,
} from "@/lib/graph/types";
import {
  COMPLEXITY_LEVELS,
  EDGE_TYPES,
  EVIDENCE_LEVELS,
  LAYERS,
} from "@/lib/graph/types";

const TIER: Record<Complexity, number> = { core: 0, standard: 1, full: 2 };

export type RightPanel = "inspect" | "system" | "scenario" | "help";
export type MobileSheet = "none" | "inspect" | "layers" | "system" | "scenario" | "search";

function allTrue<T extends string>(keys: readonly T[]): Record<T, boolean> {
  return Object.fromEntries(keys.map((k) => [k, true])) as Record<T, boolean>;
}

export interface GraphState {
  complexity: Complexity;
  layers: Record<Layer, boolean>;
  evidence: Record<EvidenceLevel, boolean>;
  edgeTypes: Record<EdgeType, boolean>;
  showLabels: boolean;
  showLoops: boolean;
  nodeSizeScale: number;
  edgeStrength: number;
  simStrength: number;
  frozen: boolean;
  reheatToken: number;
  fitToken: number;
  centerToken: number;
  selectedId: string | null;
  hoveredId: string | null;
  expandedIds: string[];
  collapsedIds: string[];
  mode: ExploreMode;
  traceDepth: TraceDepth;
  removedId: string | null;
  activeScenario: string | null;
  activeLoop: string | null;
  query: string;
  searchIndex: number;
  rightPanel: RightPanel;
  leftOpen: boolean;
  rightOpen: boolean;
  zenMode: boolean;
  controlsOpen: boolean;
  introOpen: boolean;
  helpOpen: boolean;
  mobileSheet: MobileSheet;
  pathTargetId: string | null;

  select: (id: string | null) => void;
  hover: (id: string | null) => void;
  setMode: (mode: ExploreMode) => void;
  setComplexity: (c: Complexity) => void;
  toggleLayer: (l: Layer) => void;
  toggleEvidence: (e: EvidenceLevel) => void;
  toggleEdgeType: (t: EdgeType) => void;
  setQuery: (q: string) => void;
  setSearchIndex: (i: number) => void;
  commitSearch: () => void;
  expandNeighborhood: () => void;
  collapseNeighborhood: () => void;
  setRemoved: (id: string | null) => void;
  setScenario: (id: string | null) => void;
  setLoop: (id: string | null) => void;
  setTraceDepth: (d: TraceDepth) => void;
  setRightPanel: (p: RightPanel) => void;
  setRightOpen: (open: boolean) => void;
  toggleRightOpen: () => void;
  toggleZenMode: () => void;
  setControlsOpen: (open: boolean) => void;
  toggleControlsOpen: () => void;
  setMobileSheet: (s: MobileSheet) => void;
  dismissIntro: () => void;
  toggleFrozen: () => void;
  reheat: () => void;
  fit: () => void;
  centerSelected: () => void;
  toggleLabels: () => void;
  toggleLoops: () => void;
  setNodeSizeScale: (n: number) => void;
  setEdgeStrength: (n: number) => void;
  setSimStrength: (n: number) => void;
  setLeftOpen: (v: boolean) => void;
  setHelpOpen: (v: boolean) => void;
  setPathTarget: (id: string | null) => void;
  resetFilters: () => void;
}

export const useGraphStore = create<GraphState>((set, get) => ({
  complexity: "standard",
  layers: allTrue(LAYERS),
  evidence: allTrue(EVIDENCE_LEVELS),
  edgeTypes: allTrue(EDGE_TYPES),
  showLabels: true,
  showLoops: true,
  nodeSizeScale: 1,
  edgeStrength: 1,
  simStrength: 1,
  frozen: false,
  reheatToken: 0,
  fitToken: 0,
  centerToken: 0,
  selectedId: "human-behavior",
  hoveredId: null,
  expandedIds: [],
  collapsedIds: [],
  mode: "explore",
  traceDepth: 2,
  removedId: null,
  activeScenario: null,
  activeLoop: null,
  query: "",
  searchIndex: 0,
  rightPanel: "inspect",
  leftOpen: true,
  rightOpen: true,
  zenMode: false,
  controlsOpen: true,
  introOpen: true,
  helpOpen: false,
  mobileSheet: "none",
  pathTargetId: null,

  select: (id) =>
    set({
      selectedId: id,
      rightPanel: id ? "inspect" : get().rightPanel,
      rightOpen: id ? true : get().rightOpen,
      mobileSheet: id ? "inspect" : get().mobileSheet,
      removedId: get().mode === "explore" ? get().removedId : get().removedId,
    }),
  hover: (id) => set({ hoveredId: id }),
  setMode: (mode) =>
    set({
      mode,
      rightPanel: mode === "evidence" ? get().rightPanel : "inspect",
      activeScenario: mode === "explore" ? get().activeScenario : get().activeScenario,
    }),
  setComplexity: (complexity) => set({ complexity, reheatToken: get().reheatToken + 1 }),
  toggleLayer: (l) => set({ layers: { ...get().layers, [l]: !get().layers[l] } }),
  toggleEvidence: (e) => set({ evidence: { ...get().evidence, [e]: !get().evidence[e] } }),
  toggleEdgeType: (t) => set({ edgeTypes: { ...get().edgeTypes, [t]: !get().edgeTypes[t] } }),
  setQuery: (query) => set({ query, searchIndex: 0 }),
  setSearchIndex: (searchIndex) => set({ searchIndex }),
  commitSearch: () => {
    const hits = searchGraph(get().query, NODES, EDGES);
    const hit = hits[get().searchIndex] ?? hits[0];
    if (hit) set({ selectedId: hit.id, rightPanel: "inspect", mobileSheet: "inspect" });
  },
  expandNeighborhood: () => {
    const id = get().selectedId;
    if (!id) return;
    const nb = neighborhood(id, EDGES, 1);
    const extra = [...nb.nodeIds].filter((n) => !get().expandedIds.includes(n));
    set({
      expandedIds: [...get().expandedIds, ...extra],
      collapsedIds: get().collapsedIds.filter((c) => !nb.nodeIds.has(c)),
      reheatToken: get().reheatToken + 1,
    });
  },
  collapseNeighborhood: () => {
    const id = get().selectedId;
    if (!id) return;
    const nb = neighborhood(id, EDGES, 1);
    const others = [...nb.nodeIds].filter((n) => n !== id);
    set({
      collapsedIds: [...new Set([...get().collapsedIds, ...others])],
      expandedIds: get().expandedIds.filter((e) => !others.includes(e)),
    });
  },
  setRemoved: (removedId) => set({ removedId, rightPanel: "system" }),
  setScenario: (activeScenario) =>
    set({ activeScenario, rightPanel: "scenario", mobileSheet: "scenario" }),
  setLoop: (activeLoop) => set({ activeLoop }),
  setTraceDepth: (traceDepth) => set({ traceDepth }),
  setRightPanel: (rightPanel) => set({ rightPanel, rightOpen: true }),
  setRightOpen: (rightOpen) => set({ rightOpen }),
  toggleRightOpen: () => set({ rightOpen: !get().rightOpen }),
  toggleZenMode: () => set({ zenMode: !get().zenMode }),
  setControlsOpen: (controlsOpen) => set({ controlsOpen }),
  toggleControlsOpen: () => set({ controlsOpen: !get().controlsOpen }),
  setMobileSheet: (mobileSheet) => set({ mobileSheet }),
  dismissIntro: () => {
    try {
      localStorage.setItem("reality-graph-intro-v1", "1");
    } catch {
      /* ignore */
    }
    set({ introOpen: false, fitToken: get().fitToken + 1 });
  },
  toggleFrozen: () => set({ frozen: !get().frozen }),
  reheat: () => set({ frozen: false, reheatToken: get().reheatToken + 1 }),
  fit: () => set({ fitToken: get().fitToken + 1 }),
  centerSelected: () => set({ centerToken: get().centerToken + 1 }),
  toggleLabels: () => set({ showLabels: !get().showLabels }),
  toggleLoops: () => set({ showLoops: !get().showLoops }),
  setNodeSizeScale: (nodeSizeScale) => set({ nodeSizeScale }),
  setEdgeStrength: (edgeStrength) => set({ edgeStrength, reheatToken: get().reheatToken + 1 }),
  setSimStrength: (simStrength) => set({ simStrength, reheatToken: get().reheatToken + 1 }),
  setLeftOpen: (leftOpen) => set({ leftOpen }),
  setHelpOpen: (helpOpen) => set({ helpOpen, rightPanel: helpOpen ? "help" : get().rightPanel }),
  setPathTarget: (pathTargetId) => set({ pathTargetId }),
  resetFilters: () =>
    set({
      layers: allTrue(LAYERS),
      evidence: allTrue(EVIDENCE_LEVELS),
      edgeTypes: allTrue(EDGE_TYPES),
      complexity: "standard",
      query: "",
      removedId: null,
      activeScenario: null,
      activeLoop: null,
      pathTargetId: null,
      expandedIds: [],
      collapsedIds: [],
      mode: "explore",
    }),
}));

export function nodeById(id: string): GraphNode | undefined {
  return NODES.find((n) => n.id === id);
}

export function visibleNodeSet(state: GraphState): Set<string> {
  const maxTier = TIER[state.complexity];
  const expanded = new Set(state.expandedIds);
  const collapsed = new Set(state.collapsedIds);
  const ids = new Set<string>();
  for (const n of NODES) {
    if (state.removedId && n.id === state.removedId) continue;
    if (collapsed.has(n.id) && n.tier > 0) continue;
    const tierOk = n.tier <= maxTier || expanded.has(n.id);
    if (!tierOk) continue;
    if (!n.layers.some((l) => state.layers[l])) continue;
    if (!state.evidence[n.evidenceLevel]) continue;
    ids.add(n.id);
  }
  if (state.selectedId && NODES.some((n) => n.id === state.selectedId)) {
    ids.add(state.selectedId);
  }
  return ids;
}

export function visibleEdges(state: GraphState, nodes: Set<string>): GraphEdge[] {
  return EDGES.filter((e) => {
    if (!nodes.has(e.source) || !nodes.has(e.target)) return false;
    if (!state.edgeTypes[e.type]) return false;
    if (!state.evidence[e.evidenceLevel]) return false;
    if (!e.layers.some((l) => state.layers[l])) return false;
    return true;
  });
}

export function searchHits(state: GraphState) {
  return searchGraph(state.query, NODES, EDGES);
}

export { NODES, EDGES, LOOPS, SCENARIOS, COMPLEXITY_LEVELS };
