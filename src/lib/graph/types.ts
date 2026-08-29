export const LAYERS = [
  "money",
  "information",
  "data",
  "ai",
  "psychology",
  "business",
  "power",
  "supply",
  "labor",
] as const;

export type Layer = (typeof LAYERS)[number];

export const CATEGORIES = [
  "human",
  "company",
  "government",
  "institution",
  "technology",
  "market",
  "psychological",
  "resource",
  "infrastructure",
  "economic",
  "information-system",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const EVIDENCE_LEVELS = [
  "established",
  "observed",
  "plausible",
  "contested",
  "speculative",
] as const;

export type EvidenceLevel = (typeof EVIDENCE_LEVELS)[number];

export const EDGE_TYPES = [
  "money",
  "information",
  "data",
  "incentive",
  "dependency",
  "ownership",
  "influence",
  "regulation",
  "competition",
  "feedback",
  "causal",
  "correlation",
  "supply",
] as const;

export type EdgeType = (typeof EDGE_TYPES)[number];

export const COMPLEXITY_LEVELS = ["core", "standard", "full"] as const;
export type Complexity = (typeof COMPLEXITY_LEVELS)[number];

export const TRACE_DEPTHS = [1, 2, 3, 5, 99] as const;
export type TraceDepth = (typeof TRACE_DEPTHS)[number];

export type ExploreMode =
  | "explore"
  | "incentive"
  | "money"
  | "data"
  | "power"
  | "evidence";

export interface Claim {
  text: string;
  evidence: EvidenceLevel;
}

export interface Tension {
  a: string;
  b: string;
}

export interface GraphNode {
  id: string;
  name: string;
  category: Category;
  layers: Layer[];
  /** 0 = always visible, 1 = standard view, 2 = full system */
  tier: 0 | 1 | 2;
  importance: number;
  evidenceLevel: EvidenceLevel;
  description: string;
  role: string;
  incentives: string[];
  inputs: string[];
  outputs: string[];
  dependencies: string[];
  whoBenefits: string[];
  whoBearsCosts: string[];
  relatedSystems: string[];
  uncertainties: string[];
  positiveEffects: string[];
  negativeExternalities: string[];
  unintendedConsequences: string[];
  optimizesFor: string;
  resources: string[];
  gains: string[];
  risks: string[];
  whoPays: string[];
  encouragedBehavior: string;
  unintendedBehavior: string;
  aliases?: string[];
  claims?: Claim[];
  tensions?: Tension[];
  geographicNote?: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  label: string;
  description: string;
  evidenceLevel: EvidenceLevel;
  layers: Layer[];
  loopId?: string;
}

export interface FeedbackLoop {
  id: string;
  name: string;
  summary: string;
  nodeIds: string[];
  interpretation: string;
  evidenceLevel: EvidenceLevel;
}

export interface ScenarioShock {
  nodeId: string;
  direction: "up" | "down" | "break";
  label: string;
}

export interface ScenarioEffect {
  nodeId: string;
  order: 1 | 2 | 3;
  text: string;
  evidenceLevel: EvidenceLevel;
}

export interface Scenario {
  id: string;
  title: string;
  prompt: string;
  summary: string;
  shocks: ScenarioShock[];
  effects: ScenarioEffect[];
  tensions: Tension[];
}

export const LAYER_META: Record<
  Layer,
  { label: string; short: string; blurb: string }
> = {
  money: {
    label: "Money",
    short: "Capital, credit, returns",
    blurb: "How capital, credit, revenue, and returns circulate.",
  },
  information: {
    label: "Information",
    short: "Media, content, attention",
    blurb: "How stories, signals, and rankings reach people.",
  },
  data: {
    label: "Data",
    short: "Collection, assets, prediction",
    blurb: "Behavior captured, stored, and turned into decisions.",
  },
  ai: {
    label: "AI / Models",
    short: "Compute, models, inference",
    blurb: "The stack from chips and data to models and agents.",
  },
  psychology: {
    label: "Psychology",
    short: "Attention, habit, status",
    blurb: "Mechanisms of attention, habit, trust, and identity.",
  },
  business: {
    label: "Business",
    short: "Products, growth, moats",
    blurb: "How firms acquire customers, earn, and reinvest.",
  },
  power: {
    label: "Power",
    short: "States, law, influence",
    blurb: "Institutional authority, lobbying, and public pressure.",
  },
  supply: {
    label: "Supply chain",
    short: "Materials, chips, energy",
    blurb: "Physical dependencies from resources to devices.",
  },
  labor: {
    label: "Labor",
    short: "Work, skills, automation",
    blurb: "Human work, productivity, and task transformation.",
  },
};

export const CATEGORY_META: Record<Category, { label: string }> = {
  human: { label: "Human" },
  company: { label: "Company / firm" },
  government: { label: "Government" },
  institution: { label: "Institution" },
  technology: { label: "Technology" },
  market: { label: "Market" },
  psychological: { label: "Psychological mechanism" },
  resource: { label: "Resource" },
  infrastructure: { label: "Infrastructure" },
  economic: { label: "Economic mechanism" },
  "information-system": { label: "Information system" },
};

export const EVIDENCE_META: Record<
  EvidenceLevel,
  { label: string; short: string; detail: string }
> = {
  established: {
    label: "Established / strongly supported",
    short: "Established",
    detail: "Widely documented with converging evidence.",
  },
  observed: {
    label: "Empirically observed",
    short: "Observed",
    detail: "Repeatedly seen in markets or studies; mechanism may vary.",
  },
  plausible: {
    label: "Plausible mechanism",
    short: "Plausible",
    detail: "A coherent causal story; limited or mixed measurement.",
  },
  contested: {
    label: "Contested interpretation",
    short: "Contested",
    detail: "Serious disagreement about magnitude, direction, or meaning.",
  },
  speculative: {
    label: "Speculative hypothesis",
    short: "Speculative",
    detail: "Forward-looking or weakly evidenced — not a fact.",
  },
};

export const EDGE_TYPE_META: Record<
  EdgeType,
  { label: string; blurb: string }
> = {
  money: { label: "Money flow", blurb: "Capital, revenue, credit, or returns." },
  information: {
    label: "Information flow",
    blurb: "Messages, rankings, or published claims.",
  },
  data: { label: "Data flow", blurb: "Captured, stored, or derived records." },
  incentive: {
    label: "Incentive",
    blurb: "A payoff that encourages a behavior.",
  },
  dependency: {
    label: "Dependency",
    blurb: "One system requires another to function.",
  },
  ownership: { label: "Ownership", blurb: "Control of equity, assets, or rights." },
  influence: {
    label: "Influence",
    blurb: "Ability to shape decisions without formal command.",
  },
  regulation: {
    label: "Regulation",
    blurb: "Legal constraint, license, or mandate.",
  },
  competition: {
    label: "Competition",
    blurb: "Rivalry for customers, talent, or capital.",
  },
  feedback: {
    label: "Feedback loop",
    blurb: "Output that re-enters as input.",
  },
  causal: {
    label: "Causal mechanism",
    blurb: "A proposed cause-and-effect path.",
  },
  correlation: {
    label: "Correlation",
    blurb: "Moves together; cause not asserted.",
  },
  supply: {
    label: "Supply-chain dependency",
    blurb: "Physical or logistical input.",
  },
};

export const MODE_META: Record<
  ExploreMode,
  { label: string; kicker: string }
> = {
  explore: {
    label: "Explore",
    kicker: "Inspect nodes and relationships.",
  },
  incentive: {
    label: "Follow the incentive",
    kicker: "What is being optimized, and who pays?",
  },
  money: {
    label: "Follow the money",
    kicker: "Trace capital, revenue, and returns.",
  },
  data: {
    label: "Follow the data",
    kicker: "Who generates, collects, and uses it?",
  },
  power: {
    label: "Follow the power",
    kicker: "Decisions, infrastructure, and access.",
  },
  evidence: {
    label: "Evidence",
    kicker: "Filter by how strongly a link is supported.",
  },
};
