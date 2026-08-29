import type { Scenario } from "./types";

export const SCENARIOS: Scenario[] = [
  {
    id: "cheap-inference",
    title: "AI inference becomes 10× cheaper",
    prompt: "What if serving a model costs an order of magnitude less?",
    summary:
      "Lower unit cost tends to expand use, wrap more workflows, and pressure labor in routine cognitive tasks — while also inviting new products. Not a forecast of 'full automation'.",
    shocks: [
      { nodeId: "inference", direction: "down", label: "Unit cost of serving drops" },
      { nodeId: "gpus", direction: "down", label: "Effective compute per dollar rises" },
    ],
    effects: [
      {
        nodeId: "applications",
        order: 1,
        text: "More features can sit on always-on models; new wrappers appear.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "automation",
        order: 1,
        text: "A wider set of tasks clears the cost bar for machine substitution or complement.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "job-transformation",
        order: 2,
        text: "Task bundles in offices and support work rewrite faster; net jobs remain contested.",
        evidenceLevel: "contested",
      },
      {
        nodeId: "energy",
        order: 2,
        text: "Cheaper serving can increase total energy via rebound even if each query is leaner.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "revenue",
        order: 3,
        text: "Vendors may grow volume while price per unit falls — margin direction is not determined.",
        evidenceLevel: "speculative",
      },
    ],
    tensions: [
      { a: "Abundance of generation", b: "Evaluation and trust" },
      { a: "Productivity", b: "Demand for particular tasks" },
    ],
  },
  {
    id: "chip-shock",
    title: "Semiconductor supply tightens",
    prompt: "What if leading-edge chip supply falls?",
    summary:
      "Training and some inference are physically gated. A supply shock hits labs, clouds, and device makers before it hits slogans about 'software eating the world'.",
    shocks: [
      { nodeId: "semiconductors", direction: "down", label: "Output or export of advanced chips falls" },
      { nodeId: "chip-foundries", direction: "break", label: "Capacity or access interrupted" },
    ],
    effects: [
      {
        nodeId: "gpus",
        order: 1,
        text: "Allocation tightens; prices and wait times rise.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "training-infrastructure",
        order: 1,
        text: "New clusters slip; existing owners gain relative advantage.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "ai-laboratories",
        order: 2,
        text: "Frontier runs concentrate further among those with inventory.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "hardware",
        order: 2,
        text: "Device and server bills of materials inflate or spec down.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "cloud-infrastructure",
        order: 3,
        text: "Cloud GPU prices and reserved capacity become a strategic chokepoint.",
        evidenceLevel: "plausible",
      },
    ],
    tensions: [
      { a: "Geographic concentration", b: "Demand for resilience" },
      { a: "National industrial policy", b: "Open trade in tools" },
    ],
  },
  {
    id: "ad-collapse",
    title: "Advertising revenue collapses",
    prompt: "What if advertisers sharply cut digital spend?",
    summary:
      "Many 'free' information products are ad-financed. A demand shock in ads is a supply shock in journalism and consumer platforms.",
    shocks: [{ nodeId: "advertising", direction: "down", label: "Ad budgets contract" }],
    effects: [
      {
        nodeId: "social-platforms",
        order: 1,
        text: "Primary cash engine weakens; product and headcount respond.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "media",
        order: 1,
        text: "Ad-funded newsrooms shrink or seek patrons and paywalls.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "advertisers",
        order: 1,
        text: "Spend reallocates to performance channels or stops.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "journalists",
        order: 2,
        text: "Employment in original reporting is pressured where ads paid the bills.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "users",
        order: 3,
        text: "More paywalls, more aggressive remaining ads, or product sunsets.",
        evidenceLevel: "plausible",
      },
    ],
    tensions: [
      { a: "Free access", b: "Sustainable reporting" },
      { a: "Attention inventory", b: "Advertiser ROI" },
    ],
  },
  {
    id: "platform-exodus",
    title: "A major platform loses users",
    prompt: "What if a large social platform's user base breaks?",
    summary:
      "Network effects run in reverse. Advertisers, creators, and ranking data follow the people — with lags and stranded habits.",
    shocks: [{ nodeId: "social-platforms", direction: "down", label: "Active users fall sharply" }],
    effects: [
      {
        nodeId: "network-effects",
        order: 1,
        text: "Value of remaining connections drops; exit can accelerate.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "advertising",
        order: 1,
        text: "Inventory and targeting quality decline with the audience.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "recommendation-algorithms",
        order: 2,
        text: "Less fresh interaction data; cold-start and spam problems worsen.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "content",
        order: 2,
        text: "Creators reallocate effort to remaining venues.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "public-opinion",
        order: 3,
        text: "The public square fragments further; measurement of 'the public' gets noisier.",
        evidenceLevel: "plausible",
      },
    ],
    tensions: [
      { a: "Multi-homing freedom", b: "Lost shared context" },
      { a: "Creator livelihoods", b: "Platform dependence" },
    ],
  },
  {
    id: "automation-productivity",
    title: "Automation raises productivity 30%",
    prompt: "What if automation lifts output per hour by about a third in adopting sectors?",
    summary:
      "Productivity is not employment. Gains can show up as cheaper goods, higher profits, higher wages, fewer hours, or some mix — institutions decide.",
    shocks: [{ nodeId: "automation", direction: "up", label: "Task automation accelerates" }],
    effects: [
      {
        nodeId: "productivity",
        order: 1,
        text: "Measured output per hour rises in adopting firms.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "profit",
        order: 1,
        text: "Unit costs fall unless prices or wages fully absorb the gain.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "job-transformation",
        order: 2,
        text: "Some tasks vanish, some are created, many are mixed; occupation labels lag.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "wages",
        order: 2,
        text: "Complements may see premiums; substitutes see pressure. Net is contested.",
        evidenceLevel: "contested",
      },
      {
        nodeId: "consumption",
        order: 3,
        text: "If prices fall or incomes rise, real consumption can expand.",
        evidenceLevel: "plausible",
      },
    ],
    tensions: [
      { a: "Productivity", b: "Demand for particular tasks" },
      { a: "Owner residual", b: "Worker residual" },
    ],
  },
  {
    id: "rate-hike",
    title: "Interest rates rise",
    prompt: "What if the cost of borrowing and the discount rate jump?",
    summary:
      "Rates reprice long-duration claims: housing, venture, and growth stocks first. Credit-dependent consumption and investment slow.",
    shocks: [{ nodeId: "interest-rates", direction: "up", label: "Policy and market rates step up" }],
    effects: [
      {
        nodeId: "credit",
        order: 1,
        text: "New borrowing becomes more expensive; some projects fail screens.",
        evidenceLevel: "established",
      },
      {
        nodeId: "capital",
        order: 1,
        text: "Present value of distant cash flows falls.",
        evidenceLevel: "established",
      },
      {
        nodeId: "debt",
        order: 2,
        text: "Floating-rate and refinancing borrowers feel income stress.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "growth",
        order: 2,
        text: "Rate-sensitive expansion (construction, unprofitable growth firms) cools.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "consumption",
        order: 3,
        text: "Credit-funded durables and housing demand typically soften.",
        evidenceLevel: "observed",
      },
    ],
    tensions: [
      { a: "Inflation control", b: "Debt-service stress" },
      { a: "Savers", b: "Borrowers" },
    ],
  },
  {
    id: "data-lockdown",
    title: "Data access is heavily restricted",
    prompt: "What if collection, brokerage, and training use of personal and web data are sharply limited?",
    summary:
      "Prediction businesses that assumed cheap traces must retool. Privacy rises as a constraint; some products get worse, some get more consensual.",
    shocks: [
      { nodeId: "data-collection", direction: "down", label: "Legal and technical limits bind" },
      { nodeId: "data-brokers", direction: "break", label: "Secondary markets freeze" },
    ],
    effects: [
      {
        nodeId: "privacy",
        order: 1,
        text: "Default collection shrinks; compliance becomes a product feature.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "advertising",
        order: 1,
        text: "Targeting precision falls; contextual and first-party strategies gain.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "datasets",
        order: 2,
        text: "Web-scale corpora face licensing or exclusion; quality and bias shift.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "machine-learning",
        order: 2,
        text: "Models trained on less surveillance data; synthetic and licensed data fill some gaps.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "personalization",
        order: 3,
        text: "Feeds and prices become less individually fitted — for better and worse.",
        evidenceLevel: "plausible",
      },
    ],
    tensions: [
      { a: "Privacy", b: "Personalization" },
      { a: "Open research data", b: "Consent" },
    ],
  },
  {
    id: "supply-break",
    title: "A critical supply-chain node disappears",
    prompt: "What if a key physical chokepoint — energy, a material, or a fab class — goes offline?",
    summary:
      "Digital systems sit on slow atoms. Removing a bottleneck node breaks dependents in order: first physical, then compute, then products.",
    shocks: [{ nodeId: "supply-chains", direction: "break", label: "A critical hop fails" }],
    effects: [
      {
        nodeId: "manufacturing",
        order: 1,
        text: "Lines stop when a unique input is missing.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "semiconductors",
        order: 1,
        text: "If the hop is lithography, chemicals, or a fab, chip output falls.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "hardware",
        order: 2,
        text: "Device and server lead times blow out.",
        evidenceLevel: "observed",
      },
      {
        nodeId: "data-centers",
        order: 2,
        text: "Expansion pauses; existing capacity is hoarded.",
        evidenceLevel: "plausible",
      },
      {
        nodeId: "consumers",
        order: 3,
        text: "Prices rise or goods vanish; substitution is slow for specialized parts.",
        evidenceLevel: "observed",
      },
    ],
    tensions: [
      { a: "Efficiency", b: "Redundancy" },
      { a: "Global specialization", b: "National buffering" },
    ],
  },
];
