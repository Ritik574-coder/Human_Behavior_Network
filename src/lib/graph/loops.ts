import type { FeedbackLoop } from "./types";

export const LOOPS: FeedbackLoop[] = [
  {
    id: "attention-loop",
    name: "Attention loop",
    summary:
      "Content wins attention, which becomes engagement data, which improves targeting, which wins more attention.",
    nodeIds: [
      "content",
      "attention",
      "engagement",
      "data-collection",
      "personalization",
      "recommendation-algorithms",
      "users",
      "social-platforms",
    ],
    interpretation:
      "A reinforcing loop observed in many consumer products. Whether it improves wellbeing depends on the ranking objective — an interpretation, not a law.",
    evidenceLevel: "observed",
  },
  {
    id: "capital-loop",
    name: "Capital loop",
    summary:
      "Revenue can become profit, which is reinvested into capacity and products, which can produce more revenue.",
    nodeIds: ["revenue", "profit", "reinvestment", "growth", "investors", "capital", "business-firms"],
    interpretation:
      "The textbook firm flywheel. It fails when demand, credit, or competition break the residual. Not every firm is in this loop.",
    evidenceLevel: "established",
  },
  {
    id: "ai-loop",
    name: "AI data loop",
    summary:
      "Users interact, generating data that improves models and products, which attract more users.",
    nodeIds: ["users", "data", "datasets", "applications", "inference", "llms"],
    interpretation:
      "A classic data-network story. It is empirically visible in some products and over-claimed in others. New synthetic data may also pollute the loop (hypothesis).",
    evidenceLevel: "observed",
  },
  {
    id: "competition-loop",
    name: "Competition loop",
    summary:
      "Rival innovation forces a response, which raises the technological bar and the market's expectations.",
    nodeIds: ["competition", "innovation", "products"],
    interpretation:
      "Can raise consumer surplus or burn cash in an arms race. Outcome depends on entry conditions and capital access.",
    evidenceLevel: "observed",
  },
];
