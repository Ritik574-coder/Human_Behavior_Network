import type { Category, EdgeType, EvidenceLevel, Layer } from "./types";

/** Canvas / data-encoding colors. UI chrome uses CSS tokens, not these. */
export const GRAPH_THEME = {
  bg: "#08090b",
  grid: "rgba(232,234,238,0.035)",
  vignette: "rgba(0,0,0,0.45)",
  label: "rgba(232,234,238,0.88)",
  labelMuted: "rgba(232,234,238,0.42)",
  labelDim: "rgba(232,234,238,0.18)",
  nodeFill: "#14161c",
  nodeStroke: "rgba(232,234,238,0.22)",
  selectedRing: "#e8eaee",
  hoverRing: "rgba(158,176,196,0.9)",
  particle: "rgba(232,234,238,0.85)",
  loopGlow: "rgba(196,184,150,0.35)",
} as const;

export const LAYER_COLOR: Record<Layer, string> = {
  money: "#c4b896",
  information: "#8aadc4",
  data: "#7a9a8a",
  ai: "#8a9ab0",
  psychology: "#c4b0a4",
  business: "#9aa4b0",
  power: "#8a9a8b",
  supply: "#a09078",
  labor: "#b0a090",
};

export const CATEGORY_COLOR: Record<Category, string> = {
  human: "#d2c4b0",
  company: "#7d9bb8",
  government: "#8a9a8b",
  institution: "#9a8b7d",
  technology: "#6b9aa0",
  market: "#a09078",
  psychological: "#c4b0a8",
  resource: "#8b9a7a",
  infrastructure: "#7a8a9a",
  economic: "#b8b09a",
  "information-system": "#8a9aaa",
};

export const EVIDENCE_COLOR: Record<EvidenceLevel, string> = {
  established: "#5d9a6e",
  observed: "#5d8ab8",
  plausible: "#b8a05d",
  contested: "#c4885d",
  speculative: "#b85d5d",
};

export const EDGE_COLOR: Record<EdgeType, string> = {
  money: "#c4b896",
  information: "#8aadc4",
  data: "#7aa090",
  incentive: "#c4a080",
  dependency: "#8a8e96",
  ownership: "#b8b0a0",
  influence: "#9aa8b8",
  regulation: "#8a9a8b",
  competition: "#b89090",
  feedback: "#c4b896",
  causal: "#a8b0b8",
  correlation: "#6a7078",
  supply: "#a09078",
};

export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}
