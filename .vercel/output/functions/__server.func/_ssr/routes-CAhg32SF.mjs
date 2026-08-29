import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { S as CircleHelp, _ as FileJson, a as SlidersHorizontal, b as Download, c as RotateCcw, d as Pause, f as PanelRight, g as Focus, h as GitBranch, i as Tag, l as Repeat, m as Layers, n as Waypoints, o as Search, p as PanelLeft, s as Scan, t as X, u as Play, v as Eye, x as Crosshair, y as EyeOff } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CAhg32SF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function e(source, target, type, label, evidenceLevel, layers, description, loopId) {
	return {
		id: `${source}>${target}:${type}:${label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48)}`,
		source,
		target,
		type,
		label,
		description,
		evidenceLevel,
		layers,
		loopId
	};
}
/** Directed relationships in the educational model. Labels are mechanisms, not verdicts. */
var EDGES = [
	e("human-behavior", "attention", "causal", "Allocates scarce focus", "established", ["psychology"], "People spend limited attention on competing stimuli."),
	e("human-behavior", "data", "data", "Leaves traces", "established", ["data"], "Actions are recorded by products, states, and sensors."),
	e("human-behavior", "labor", "dependency", "Supplies work", "established", ["labor"], "Production still requires human time and skill in most sectors."),
	e("human-behavior", "consumption", "causal", "Chooses and spends", "established", ["money", "psychology"], "Households turn income and credit into purchases."),
	e("attention", "human-behavior", "influence", "Steers what is done next", "observed", ["psychology"], "What is noticed is more likely to be chosen."),
	e("data", "ai-systems", "data", "Trains and evaluates models", "established", ["ai", "data"], "Modern AI systems are fit to recorded data."),
	e("technology", "business-firms", "dependency", "Changes what is cheap to offer", "established", ["business"], "Tools shift cost curves and product possibility."),
	e("business-firms", "human-behavior", "incentive", "Prices, defaults, jobs", "observed", ["business"], "Firms structure options people face."),
	e("capital", "business-firms", "money", "Funds operations and assets", "established", ["money"], "Equity and credit purchase capacity."),
	e("government", "business-firms", "regulation", "Sets legal constraints", "established", ["power"], "Licenses, tax, labor, and product rules."),
	e("media", "human-behavior", "information", "Frames events", "observed", ["information"], "Packaged stories reach people through attention."),
	e("ai-systems", "human-behavior", "influence", "Recommendations and tools", "observed", ["ai", "psychology"], "Model outputs enter choices and workflows."),
	e("labor", "business-firms", "dependency", "Produces output", "established", ["labor"], "Firms combine labor with capital."),
	e("consumption", "business-firms", "money", "Purchases / revenue", "established", ["money"], "Customer spending is the cash validation of production."),
	e("capital", "investors", "ownership", "Claims on residual cash flows", "established", ["money"], "Ownership is a legal claim, not a physical pile of cash."),
	e("investors", "capital", "money", "Allocated funds", "established", ["money"], "Savings and mandates become investable capital."),
	e("investors", "business-firms", "money", "Capital", "established", ["money"], "Equity and some credit from investors to firms."),
	e("business-firms", "employees", "money", "Wages", "established", ["money", "labor"], "Payroll is a primary distribution of firm cash."),
	e("employees", "consumers", "causal", "Households overlap workers", "established", ["labor", "money"], "The same people often work and buy."),
	e("consumers", "business-firms", "money", "Purchases", "established", ["money"], "Retail and B2C cash flow."),
	e("business-firms", "revenue", "money", "Sales recorded", "established", ["money", "business"], "Accounting identity: sales become revenue."),
	e("revenue", "profit", "money", "After costs", "established", ["money"], "Profit is residual, definition-dependent."),
	e("profit", "investors", "money", "Expected financial return", "observed", ["money"], "Distributions and valuation depend on expected residual cash."),
	e("profit", "shareholder-returns", "money", "Dividends and buybacks", "observed", ["money"], "One use of surplus, not mandatory."),
	e("shareholder-returns", "investors", "money", "Cash returned", "established", ["money"], "Closes the owner loop."),
	e("profit", "reinvestment", "money", "Retained earnings", "established", ["money", "business"], "Internal capital allocation.", "capital-loop"),
	e("reinvestment", "growth", "money", "Capacity and product spend", "observed", ["business"], "Reinvestment aims at a larger future firm.", "capital-loop"),
	e("growth", "revenue", "money", "Larger top line", "plausible", ["business", "money"], "Scale can raise sales if demand exists.", "capital-loop"),
	e("revenue", "profit", "feedback", "More residual if costs lag", "plausible", ["money"], "Reinforcing when unit economics hold.", "capital-loop"),
	e("banks", "credit", "money", "Loan origination", "established", ["money"], "Banks extend purchasing power under constraints."),
	e("credit", "business-firms", "money", "Borrowed funds", "established", ["money"], "Credit finances working capital and investment."),
	e("credit", "consumption", "money", "Household borrowing", "established", ["money"], "Mortgages, cards, and installment credit."),
	e("credit", "debt", "money", "Liability created", "established", ["money"], "Flow of credit becomes a stock of debt."),
	e("debt", "banks", "money", "Servicing", "established", ["money"], "Interest and principal return to lenders."),
	e("business-firms", "banks", "money", "Interest and fees", "established", ["money"], "Firms pay for credit and payments."),
	e("interest-rates", "credit", "influence", "Price of borrowing", "established", ["money"], "Higher rates ration credit, all else equal."),
	e("interest-rates", "capital", "influence", "Discount rates", "established", ["money"], "Asset prices embed expected rates."),
	e("markets", "capital", "information", "Price discovery", "established", ["money"], "Quoted prices inform allocation."),
	e("business-firms", "markets", "information", "Earnings and guidance", "observed", ["money"], "Disclosures move prices."),
	e("revenue", "taxes", "money", "Corporate and sales tax base", "established", ["money", "power"], "Taxable events follow commerce."),
	e("consumers", "taxes", "money", "Income and consumption tax", "established", ["money", "power"], "Households fund the fiscal state."),
	e("taxes", "government", "money", "Fiscal revenue", "established", ["money", "power"], "States spend what they can tax, borrow, or create."),
	e("wages", "consumption", "money", "Purchasing power", "established", ["labor", "money"], "Pay funds household demand."),
	e("profit", "wages", "incentive", "Bargain over surplus", "observed", ["labor", "money"], "How residual splits is institutional, not automatic."),
	e("users", "social-platforms", "data", "Attention / behavioral data", "established", ["information", "data"], "Use produces logs and inventory.", "attention-loop"),
	e("social-platforms", "users", "information", "Recommendation / content ranking", "established", ["information"], "Platforms return a ranked experience.", "attention-loop"),
	e("social-platforms", "recommendation-algorithms", "data", "Interaction logs", "established", ["information", "ai"], "Rankers train and score on traces."),
	e("recommendation-algorithms", "content", "information", "Ranked inventory", "established", ["information", "ai"], "The algorithm orders what can be seen.", "attention-loop"),
	e("content", "attention", "information", "Competes for focus", "established", ["information", "psychology"], "Messages must pass the attention bottleneck.", "attention-loop"),
	e("attention", "engagement", "causal", "Time and interaction", "observed", ["psychology"], "Noticing is a precondition for clicking and lingering.", "attention-loop"),
	e("engagement", "data-collection", "data", "Behavioral traces", "established", ["data"], "Interactions are logged.", "attention-loop"),
	e("data-collection", "personalization", "data", "Preference model inputs", "observed", ["data", "ai"], "Logs become features.", "attention-loop"),
	e("personalization", "recommendation-algorithms", "data", "User-specific scores", "observed", ["ai"], "Personalization is often implemented as ranking.", "attention-loop"),
	e("personalization", "engagement", "feedback", "More relevant stimuli", "observed", ["psychology", "ai"], "Better targeting can raise measured engagement.", "attention-loop"),
	e("journalists", "news-ecosystem", "information", "Reported stories", "established", ["information"], "Original reporting enters the wider news system."),
	e("news-ecosystem", "media", "information", "Packaged news", "observed", ["information"], "Outlets select and frame."),
	e("media", "public-opinion", "information", "Agenda and framing", "observed", ["information", "power"], "Coverage shapes what is thinkable as 'the issue'."),
	e("public-opinion", "government", "influence", "Electoral and legitimacy pressure", "observed", ["power"], "Office-holders respond, imperfectly, to publics."),
	e("public-opinion", "political-influence", "influence", "Voter and donor signals", "observed", ["power"], "Opinion is an input to organized politics."),
	e("researchers", "publications", "information", "Papers and preprints", "established", ["information"], "The formal knowledge channel."),
	e("publications", "ai-laboratories", "information", "Methods and results", "observed", ["ai"], "Labs absorb and extend published methods."),
	e("publications", "products", "information", "Applied research", "plausible", ["business", "ai"], "Some papers become product features, with lag."),
	e("researchers", "universities", "dependency", "Appointments and grants", "established", ["labor"], "Much research labor is hosted in universities."),
	e("universities", "researchers", "dependency", "Employment and students", "established", ["labor"], "Two-way: institutions need faculty; faculty need posts."),
	e("content", "media", "information", "Stories and clips", "observed", ["information"], "User and professional content feed outlets."),
	e("media", "attention", "information", "Headlines and packages", "observed", ["information", "psychology"], "News competes in the same attention market."),
	e("search-platforms", "distribution", "information", "Query-based discovery", "observed", ["information", "business"], "Search is a major path to products and publishers."),
	e("social-platforms", "distribution", "information", "Feed-based discovery", "observed", ["information", "business"], "Feeds allocate attention among offers."),
	e("media", "information-power", "influence", "Agenda control", "plausible", ["power", "information"], "Who is heard is a form of power."),
	e("social-platforms", "information-power", "influence", "Ranking is allocation", "plausible", ["power", "information"], "Ordering content is a political-economic act even when not intended as such."),
	e("human-behavior", "data-collection", "data", "Observed actions", "established", ["data"], "Instrumentation captures behavior."),
	e("data-collection", "data-storage", "data", "Logged records", "established", ["data"], "Collection implies retention unless deleted."),
	e("data-storage", "datasets", "data", "Assembled corpora", "established", ["data", "ai"], "Stored logs are sliced into training and analytics sets."),
	e("data-collection", "data-brokers", "data", "Sold or shared records", "observed", ["data"], "Some traces leave the first party."),
	e("data-brokers", "datasets", "data", "Appended attributes", "observed", ["data"], "Brokers enrich profiles."),
	e("datasets", "machine-learning", "data", "Training inputs", "established", ["ai", "data"], "Learning consumes packaged data."),
	e("machine-learning", "predictions", "data", "Scores and forecasts", "established", ["ai"], "Fitted functions emit decisions support."),
	e("predictions", "business-firms", "causal", "Operational decisions", "observed", ["business", "data"], "Scores change who is hired, priced, shown, or funded."),
	e("predictions", "advertising", "data", "Targeting", "observed", ["business", "data"], "Predicted conversion allocates ad spend."),
	e("predictions", "human-behavior", "influence", "Interventions and defaults", "plausible", ["psychology", "data"], "Acting on a score changes the environment of choice."),
	e("data", "datasets", "data", "Structured for training", "established", ["data", "ai"], "Raw traces are cleaned and labeled."),
	e("privacy", "data-collection", "regulation", "Consent and limits", "observed", ["data", "power"], "Rules and norms constrain capture."),
	e("users", "data", "data", "Generated traces", "established", ["data"], "Use is the source of much behavioral data."),
	e("data", "data-brokers", "money", "Data as asset", "observed", ["data", "money"], "Records are bought and sold."),
	e("data-brokers", "advertisers", "data", "Audience segments", "observed", ["data", "business"], "Targeting inventory is a broker product."),
	e("privacy", "trust", "causal", "Expectation of boundaries", "plausible", ["psychology", "data"], "Perceived respect for boundaries supports trust."),
	e("content", "data", "data", "Human-generated information", "established", ["ai", "information"], "Text and media become training material."),
	e("datasets", "training-infrastructure", "data", "Job inputs", "established", ["ai"], "Clusters consume packaged data."),
	e("gpus", "training-infrastructure", "supply", "Accelerators", "established", ["ai", "supply"], "Training is bottlenecked on specialized chips."),
	e("training-infrastructure", "neural-networks", "dependency", "Compute for training", "established", ["ai"], "Weights are the output of long jobs."),
	e("neural-networks", "llms", "dependency", "Trained weights", "established", ["ai"], "LLMs are a scaled neural product."),
	e("neural-networks", "ai-systems", "dependency", "Model family", "established", ["ai"], "Most deployed 'AI' is neural."),
	e("llms", "inference", "dependency", "Serving", "established", ["ai"], "Products call trained models."),
	e("inference", "applications", "dependency", "API / product calls", "established", ["ai"], "Apps are the wrapper.", "ai-loop"),
	e("applications", "users", "information", "Model outputs", "observed", ["ai"], "People meet models in products.", "ai-loop"),
	e("users", "data", "data", "New interaction signals", "observed", ["ai", "data"], "Use creates the next corpus.", "ai-loop"),
	e("data", "datasets", "feedback", "Updated corpora", "observed", ["ai", "data"], "The flywheel of product data.", "ai-loop"),
	e("ai-laboratories", "neural-networks", "causal", "Research and training runs", "observed", ["ai"], "Labs choose architectures and spends."),
	e("ai-laboratories", "llms", "causal", "Frontier training", "observed", ["ai"], "A few orgs train the largest models."),
	e("developers", "applications", "causal", "Productization", "established", ["ai", "labor"], "Engineers wrap models."),
	e("agents", "automation", "causal", "Task execution", "plausible", ["ai", "labor"], "Agents aim to take multi-step actions."),
	e("inference", "agents", "dependency", "Runtime", "plausible", ["ai"], "Agents are loops around inference."),
	e("cloud-infrastructure", "training-infrastructure", "supply", "Cluster hosting", "established", ["ai", "supply"], "Most training runs on rented or owned cloud."),
	e("data-centers", "cloud-infrastructure", "supply", "Buildings, power, cooling", "established", ["supply"], "Cloud is a business model on top of buildings."),
	e("semiconductors", "gpus", "supply", "Fabricated chips", "established", ["supply", "ai"], "Accelerators are silicon."),
	e("chip-foundries", "semiconductors", "supply", "Wafer production", "established", ["supply"], "Fabs turn designs into chips."),
	e("chip-foundries", "gpus", "supply", "Advanced nodes", "established", ["supply", "ai"], "Leading GPUs need leading processes."),
	e("energy", "data-centers", "supply", "Electricity", "established", ["supply"], "Compute is an energy story."),
	e("hardware", "data-centers", "supply", "Servers", "established", ["supply"], "Racks of machines."),
	e("ai-systems", "applications", "dependency", "Embedded models", "observed", ["ai"], "Products hide models behind UX."),
	e("llms", "content", "information", "Generated media", "observed", ["ai", "information"], "Models now produce some of the corpus."),
	e("machine-learning", "recommendation-algorithms", "dependency", "Scoring functions", "established", ["ai"], "Rankers are ML systems."),
	e("ai-systems", "automation", "causal", "Cognitive automation", "observed", ["ai", "labor"], "Prediction and generation substitute for some tasks."),
	e("attention", "curiosity", "causal", "Information gap", "plausible", ["psychology"], "Gaps in knowledge pull exploration."),
	e("curiosity", "engagement", "causal", "Exploration clicks", "plausible", ["psychology"], "Curiosity is monetizable."),
	e("engagement", "reward", "causal", "Variable reinforcement", "observed", ["psychology"], "Likes, novelty, and completion pings."),
	e("reward", "habit", "causal", "Repeated cue-routine", "observed", ["psychology"], "Payoffs stamp in routines."),
	e("habit", "human-behavior", "causal", "Automatic repetition", "observed", ["psychology"], "Habits reduce deliberation."),
	e("attention", "social-platforms", "incentive", "Inventory for ads", "established", ["business", "psychology"], "Attention is what many platforms sell."),
	e("social-status", "identity", "causal", "Self-presentation", "plausible", ["psychology"], "Status work is identity work."),
	e("social-proof", "engagement", "influence", "What others do", "observed", ["psychology"], "Counts and faces raise interaction."),
	e("novelty", "attention", "causal", "Salience", "observed", ["psychology"], "Newness is a cheap way to be noticed."),
	e("fear", "attention", "causal", "Threat monitoring", "observed", ["psychology"], "Threat cues are sticky."),
	e("loss-aversion", "consumption", "incentive", "Avoiding perceived loss", "plausible", ["psychology", "business"], "Framing losses can move purchases."),
	e("trust", "business-firms", "dependency", "Willingness to transact", "established", ["business", "psychology"], "Exchange needs expected performance."),
	e("trust", "media", "dependency", "Believed sources", "observed", ["information"], "Outlets live on residual credibility."),
	e("identity", "tribal-behavior", "causal", "In-group signaling", "plausible", ["psychology"], "Identity can polarize information diets."),
	e("scarcity", "attention", "causal", "Urgency", "observed", ["psychology"], "Limited-time cues spike focus."),
	e("convenience", "habit", "causal", "Lower friction", "observed", ["psychology"], "Ease is a habit ingredient."),
	e("authority", "trust", "influence", "Credentialed cues", "observed", ["psychology", "power"], "Titles and institutions shortcut evaluation."),
	e("social-status", "consumption", "incentive", "Positional goods", "observed", ["psychology", "money"], "Some demand is rank-seeking."),
	e("habit", "retention", "causal", "Psychological lock-in", "observed", ["business", "psychology"], "Habits raise the cost of leaving."),
	e("products", "distribution", "dependency", "Go-to-market", "established", ["business"], "Offers need a path to customers."),
	e("distribution", "customer-acquisition", "causal", "Reach", "established", ["business"], "Channels produce candidates."),
	e("customer-acquisition", "conversion", "causal", "Funnel", "established", ["business"], "Not all reach pays."),
	e("conversion", "revenue", "money", "Paid conversion", "established", ["business", "money"], "The cash event."),
	e("customer-acquisition", "cac", "money", "Acquisition cost", "established", ["business"], "Fully loaded cost per customer."),
	e("retention", "ltv", "money", "Lifetime value", "observed", ["business"], "Duration and margin make LTV."),
	e("cac", "ltv", "correlation", "Unit-economics ratio", "observed", ["business"], "Sustainable paid growth needs LTV above CAC — a rule of thumb, not a law."),
	e("advertising", "customer-acquisition", "information", "Paid reach", "established", ["business"], "Ads buy attention in channels."),
	e("advertisers", "advertising", "money", "Ad spend", "established", ["business", "money"], "Budgets are the fuel."),
	e("advertising", "social-platforms", "money", "Platform revenue", "established", ["business", "money"], "A primary cash engine of consumer platforms."),
	e("social-platforms", "advertisers", "information", "Audience access", "established", ["business"], "The other side of the market."),
	e("advertising", "search-platforms", "money", "Intent inventory", "established", ["business", "money"], "Query ads sell high-intent attention."),
	e("business-firms", "products", "causal", "Offers", "established", ["business"], "Firms package solutions."),
	e("products", "consumers", "information", "Value proposition", "observed", ["business"], "Messaging and use."),
	e("innovation", "products", "causal", "New offers", "observed", ["business"], "Successful novelty becomes SKUs.", "competition-loop"),
	e("competition", "innovation", "incentive", "Response to rivals", "observed", ["business"], "Rivalry can force product change.", "competition-loop"),
	e("innovation", "competition", "feedback", "Raised bar", "plausible", ["business"], "New tech resets expectations.", "competition-loop"),
	e("competition", "products", "causal", "Differentiation pressure", "observed", ["business"], "Samelessness is punished when alternatives exist."),
	e("competition", "advertising", "incentive", "Share of voice", "observed", ["business"], "Rivals bid up attention."),
	e("network-effects", "moats", "causal", "Winner-take-most dynamics", "plausible", ["business"], "When they hold, they entrench."),
	e("switching-costs", "moats", "causal", "Lock-in", "observed", ["business"], "Friction is a defensive asset."),
	e("moats", "pricing-power", "causal", "Ability to hold price", "plausible", ["business"], "Advantage can become margin."),
	e("pricing-power", "margins", "money", "Unit economics", "observed", ["business", "money"], "Price over cost."),
	e("economies-of-scale", "margins", "money", "Falling average cost", "established", ["business"], "Volume can dilute fixed cost."),
	e("network-effects", "social-platforms", "causal", "Value with more users", "observed", ["business"], "Communication products often scale this way."),
	e("growth", "market-power", "causal", "Share can weaken rivalry", "plausible", ["business", "power"], "Size is not automatically power, but it can be."),
	e("market-power", "pricing-power", "causal", "Set terms", "observed", ["business"], "Weak alternatives raise prices."),
	e("reinvestment", "products", "money", "Roadmap funding", "observed", ["business"], "R&D and production."),
	e("revenue", "employees", "money", "Payroll funding", "established", ["business", "labor"], "People are paid from operations or capital."),
	e("government", "regulators", "regulation", "Statutory mandate", "established", ["power"], "Agencies exist by law."),
	e("regulators", "business-firms", "regulation", "Rules and licenses", "established", ["power"], "Permitted activity is a legal fact."),
	e("business-firms", "lobbying", "money", "Advocacy spend", "observed", ["power"], "Legal organized persuasion is budgeted."),
	e("lobbying", "government", "influence", "Legal persuasion", "observed", ["power"], "Access and argument, not automatically capture."),
	e("lobbying", "regulators", "influence", "Comment and access", "observed", ["power"], "Rule-making is a documented channel."),
	e("public-opinion", "public-pressure", "causal", "Mobilization", "observed", ["power"], "Attitudes become costly when organized."),
	e("public-pressure", "government", "influence", "Political cost of inaction", "observed", ["power"], "Protests, virality, and voting blocs."),
	e("public-pressure", "regulators", "influence", "Enforcement priorities", "plausible", ["power"], "Salient scandals move dockets."),
	e("media", "public-pressure", "information", "Amplifies campaigns", "observed", ["information", "power"], "Coverage is oxygen."),
	e("government", "courts", "regulation", "Appointment and statute", "established", ["power"], "Judiciaries are constituted by law."),
	e("courts", "business-firms", "regulation", "Adjudication", "established", ["power"], "Contracts and liability."),
	e("courts", "regulators", "regulation", "Judicial review", "established", ["power"], "Agencies can be checked."),
	e("government", "taxes", "regulation", "Tax code", "established", ["power", "money"], "The schedule of compulsory transfer."),
	e("banks", "government", "influence", "Systemic importance", "observed", ["power", "money"], "Crisis backstops create a political channel."),
	e("government", "banks", "regulation", "Prudential rules", "established", ["power", "money"], "Capital, liquidity, conduct."),
	e("business-firms", "political-influence", "money", "Donations and PACs", "observed", ["power"], "Legal political spending in some jurisdictions — not a claim of hidden control."),
	e("political-influence", "government", "influence", "Campaign and coalition", "observed", ["power"], "Organized interests seek office-holder attention."),
	e("capital", "political-influence", "influence", "Resource advantage", "plausible", ["power", "money"], "Money is one input to politics, not the only one."),
	e("government", "labor", "regulation", "Labor law", "established", ["power", "labor"], "Hours, unions, migration, safety."),
	e("regulators", "privacy", "regulation", "Data protection rules", "observed", ["power", "data"], "A growing domain of administrative law."),
	e("courts", "privacy", "regulation", "Case law on data and speech", "observed", ["power", "data"], "Disputes refine the boundary."),
	e("natural-resources", "raw-materials", "supply", "Extraction", "established", ["supply"], "Ores, fuels, water, biomass."),
	e("raw-materials", "manufacturing", "supply", "Industrial inputs", "established", ["supply"], "Chemicals, metals, substrates."),
	e("manufacturing", "semiconductors", "supply", "Tools and materials", "established", ["supply"], "Fabs sit inside a wider industrial web."),
	e("semiconductors", "hardware", "supply", "Chips in devices", "established", ["supply"], "Every computer is a materials story."),
	e("hardware", "software", "dependency", "Where code runs", "established", ["supply"], "Software assumes a machine."),
	e("software", "distribution", "dependency", "Delivery of capability", "observed", ["supply", "business"], "Bits still need a channel."),
	e("distribution", "business-firms", "dependency", "Channel access", "observed", ["business"], "Firms without distribution stall."),
	e("business-firms", "consumers", "supply", "Goods and services", "established", ["supply", "business"], "The last hop."),
	e("energy", "manufacturing", "supply", "Industrial power", "established", ["supply"], "Heat and work."),
	e("energy", "hardware", "supply", "Use-phase electricity", "established", ["supply"], "Devices draw power."),
	e("supply-chains", "manufacturing", "dependency", "Logistics", "established", ["supply"], "Parts must arrive."),
	e("semiconductors", "technology", "supply", "Physical basis of compute", "established", ["supply"], "Digital technology is embodied."),
	e("manufacturing", "hardware", "supply", "Assembly", "established", ["supply"], "Boards and boxes."),
	e("cloud-infrastructure", "software", "dependency", "Hosted runtime", "observed", ["supply", "business"], "Much software now assumes the cloud."),
	e("labor", "employees", "dependency", "Contractual form", "established", ["labor"], "Employment is one institution of labor."),
	e("workers", "labor", "dependency", "Labor supply", "established", ["labor"], "People available to work."),
	e("employees", "productivity", "causal", "Output of work", "established", ["labor"], "Hours and skill become goods."),
	e("automation", "productivity", "causal", "Output per hour", "observed", ["labor", "ai"], "Machines can raise measured productivity."),
	e("productivity", "profit", "money", "Lower unit cost / more output", "plausible", ["labor", "money"], "Gains may accrue to owners if prices and wages do not absorb them."),
	e("automation", "job-transformation", "causal", "Task mix change", "observed", ["labor", "ai"], "Tasks are rewritten; occupations lag."),
	e("job-transformation", "skills", "causal", "New skill demand", "observed", ["labor"], "Complements to new tools become valuable."),
	e("skills", "wages", "causal", "Skill premium", "contested", ["labor"], "Premiums exist; how much is skill versus bargaining is debated."),
	e("skills", "employees", "dependency", "Capability", "established", ["labor"], "Hiring screens for skills."),
	e("automation", "wages", "influence", "Pressure on routine pay", "contested", ["labor"], "Direction and magnitude vary by task and country."),
	e("job-transformation", "workers", "causal", "Occupational change", "observed", ["labor"], "People must switch tasks or roles."),
	e("universities", "skills", "information", "Credentials and training", "observed", ["labor"], "One of several skill factories."),
	e("growth", "labor", "incentive", "Hiring", "observed", ["labor", "business"], "Expanding firms demand hours."),
	e("productivity", "wages", "causal", "Room to pay more", "contested", ["labor"], "Long-run link is real in aggregates; short-run pass-through is not guaranteed."),
	e("ai-systems", "job-transformation", "causal", "Cognitive task rewrite", "plausible", ["ai", "labor"], "Language and vision models change office task mix."),
	e("wages", "inequality", "causal", "Pay dispersion", "observed", ["labor"], "Wage structure is one component of inequality."),
	e("capital", "inequality", "causal", "Ownership of claims", "observed", ["money"], "Return on capital is unevenly held."),
	e("inequality", "political-influence", "influence", "Uneven voice", "plausible", ["power"], "Resources can buy organization — a mechanism, not a hidden plot."),
	e("advertisers", "revenue", "money", "A demand source for media", "established", ["money", "business"], "Ad budgets are revenue for platforms and publishers."),
	e("recommendation-algorithms", "advertising", "incentive", "Maximize yield", "observed", ["business", "ai"], "Some rankers directly optimize ad value."),
	e("cloud-infrastructure", "economies-of-scale", "causal", "Fixed cost dilution", "observed", ["business", "supply"], "Hyperscale spreads capex."),
	e("gpus", "inference", "supply", "Serving hardware", "established", ["ai", "supply"], "Inference also consumes accelerators."),
	e("energy", "ai-systems", "dependency", "Training and serving power", "established", ["ai", "supply"], "The stack is thermodynamic."),
	e("trust", "consumption", "dependency", "Willingness to pay", "observed", ["business", "psychology"], "Scams and failures tax demand."),
	e("regulators", "competition", "regulation", "Antitrust and merger review", "established", ["power", "business"], "A legal attempt to preserve rivalry."),
	e("public-opinion", "business-firms", "influence", "Brand and license to operate", "observed", ["power", "business"], "Boycotts and hiring markets."),
	e("developers", "software", "causal", "Implementation", "established", ["labor"], "Code is written and maintained by people — still."),
	e("software", "applications", "dependency", "Product is software", "established", ["ai", "business"], "Wrappers are programs."),
	e("applications", "revenue", "money", "Subscriptions and usage", "observed", ["business"], "Many AI apps charge seats or tokens."),
	e("inference", "revenue", "money", "Metered cost passed through", "plausible", ["ai", "money"], "Cheaper inference can expand or cheapen products.")
];
function N(d) {
	return {
		importance: d.tier === 0 ? 9 : d.tier === 1 ? 6 : 4,
		evidenceLevel: "observed",
		incentives: [],
		inputs: [],
		outputs: [],
		dependencies: [],
		whoBenefits: [],
		whoBearsCosts: [],
		relatedSystems: [],
		uncertainties: [],
		positiveEffects: [],
		negativeExternalities: [],
		unintendedConsequences: [],
		optimizesFor: d.role,
		resources: [],
		gains: [],
		risks: [],
		whoPays: [],
		encouragedBehavior: "",
		unintendedBehavior: "",
		...d
	};
}
/** Simplified educational model of archetypal systems — not a census of firms. */
var NODES = [
	N({
		id: "human-behavior",
		name: "Human behavior",
		category: "human",
		layers: [
			"psychology",
			"data",
			"labor"
		],
		tier: 0,
		importance: 10,
		evidenceLevel: "established",
		aliases: [
			"people",
			"humans",
			"behavior"
		],
		description: "The observable actions, choices, and habits of people. In this model it is the hub: behavior generates data, spends money, supplies labor, and responds to incentives, rankings, and institutions.",
		role: "Source of demand, labor, attention, and the traces that other systems learn from.",
		incentives: ["Seek reward, status, belonging, and reduced effort", "Avoid loss, uncertainty, and social exclusion"],
		inputs: [
			"Incentives",
			"Information",
			"Prices",
			"Defaults",
			"Social cues"
		],
		outputs: [
			"Purchases",
			"Labor",
			"Attention",
			"Data traces",
			"Political signals"
		],
		dependencies: [
			"Biological needs",
			"Social context",
			"Available options"
		],
		whoBenefits: ["Whoever can predict or shape behavior"],
		whoBearsCosts: ["Individuals when externalities are unpaid"],
		relatedSystems: [
			"attention",
			"data",
			"labor",
			"consumption",
			"trust"
		],
		uncertainties: ["How stable preferences are versus how much they are constructed by context", "How much of observed behavior is choice versus constraint"],
		positiveEffects: ["Coordination, learning, production, care"],
		negativeExternalities: ["Herding, addiction-like loops, polarized attention"],
		unintendedConsequences: ["Systems that optimize a proxy of behavior can distort the behavior itself"],
		optimizesFor: "Local goals under limited attention — not a single global utility",
		resources: [
			"Time",
			"Attention",
			"Income",
			"Social standing"
		],
		gains: ["Goods, status, belonging, reduced friction"],
		risks: ["Manipulation, lock-in, misinformation, precarity"],
		whoPays: ["The person, and sometimes third parties via externalities"],
		encouragedBehavior: "Repeat what is rewarded and easy",
		unintendedBehavior: "Over-optimize for short-term cues at the expense of longer-term aims",
		claims: [{
			text: "People respond to prices, defaults, and social information — a robust finding, not a complete theory of mind.",
			evidence: "established"
		}, {
			text: "Digital environments can reshape habits by changing feedback speed and social visibility.",
			evidence: "observed"
		}],
		tensions: [{
			a: "Autonomy",
			b: "Designed choice architecture"
		}, {
			a: "Short-term reward",
			b: "Long-term wellbeing"
		}]
	}),
	N({
		id: "attention",
		name: "Attention",
		category: "psychological",
		layers: [
			"psychology",
			"information",
			"business"
		],
		tier: 0,
		importance: 10,
		evidenceLevel: "established",
		aliases: ["focus", "eyeballs"],
		description: "A scarce cognitive resource. Many information businesses treat it as inventory: time and focus that can be allocated, measured, and sold to advertisers or used to train ranking systems.",
		role: "Bottleneck through which information, products, and political messages must pass.",
		incentives: ["Orient to novelty, threat, social relevance, and unfinished tasks"],
		inputs: [
			"Stimuli",
			"Goals",
			"Arousal",
			"Social cues"
		],
		outputs: [
			"Engagement",
			"Memory traces",
			"What gets decided"
		],
		dependencies: ["Human nervous system", "Interface design"],
		whoBenefits: ["Attention merchants", "Anyone whose message is selected"],
		whoBearsCosts: ["People whose goals are interrupted", "Unranked speakers"],
		relatedSystems: [
			"engagement",
			"content",
			"advertising",
			"recommendation-algorithms"
		],
		uncertainties: ["How to measure 'quality' of attention versus duration"],
		positiveEffects: ["Learning, coordination, safety monitoring"],
		negativeExternalities: ["Distraction, anxiety, crowding-out of slower thought"],
		unintendedConsequences: ["Optimizing for time-on-task can reward outrage or novelty over accuracy"],
		optimizesFor: "Salience relative to current goals and threats",
		resources: ["Limited waking hours", "Working memory"],
		gains: ["Information, entertainment, social connection"],
		risks: ["Capture by high-arousal content"],
		whoPays: ["The attending person (time); sometimes advertisers (cash)"],
		encouragedBehavior: "Click, linger, return",
		unintendedBehavior: "Compulsive checking",
		tensions: [{
			a: "User goals",
			b: "Platform engagement objectives"
		}]
	}),
	N({
		id: "data",
		name: "Data",
		category: "resource",
		layers: [
			"data",
			"ai",
			"business"
		],
		tier: 0,
		importance: 9,
		evidenceLevel: "established",
		aliases: [
			"records",
			"logs",
			"behavioral data"
		],
		description: "Recorded traces of the world and of people. In this model data is treated as an economic asset — costly to collect and store, valuable when it improves prediction — not merely a technical byproduct.",
		role: "Raw material for prediction, targeting, operations, and model training.",
		incentives: ["Collect more, keep longer, combine across sources"],
		inputs: [
			"Human behavior",
			"Sensors",
			"Transactions",
			"Public text"
		],
		outputs: [
			"Datasets",
			"Predictions",
			"Audit trails"
		],
		dependencies: [
			"Collection infrastructure",
			"Legal permission",
			"Storage"
		],
		whoBenefits: ["Holders who can act on it", "Buyers of targeting and risk scores"],
		whoBearsCosts: ["Subjects of collection (privacy, scoring)", "Firms that store it (liability)"],
		relatedSystems: [
			"data-collection",
			"privacy",
			"datasets",
			"machine-learning"
		],
		uncertainties: ["How much of the economic value of data is concentrated versus widely shared"],
		positiveEffects: ["Better logistics, medicine, fraud detection, search"],
		negativeExternalities: ["Surveillance, leakage, biased scoring"],
		unintendedConsequences: ["Once collected, reuse can exceed the original consent story"],
		optimizesFor: "Predictive value per record, subject to cost and law",
		resources: [
			"Behavior",
			"Instrumentation",
			"Compute"
		],
		gains: ["Prediction rents", "Product improvement"],
		risks: ["Breach, regulation, model poisoning, public backlash"],
		whoPays: ["Users (privacy), firms (capex), sometimes the public (externalities)"],
		encouragedBehavior: "Instrument everything that might later be useful",
		unintendedBehavior: "Hoarding low-quality data that still creates risk",
		claims: [{
			text: "Many digital products are financed by turning behavior into targeting or training inputs.",
			evidence: "observed"
		}],
		tensions: [{
			a: "Personalization",
			b: "Privacy"
		}, {
			a: "Data as asset",
			b: "Data as liability"
		}]
	}),
	N({
		id: "technology",
		name: "Technology",
		category: "technology",
		layers: [
			"ai",
			"supply",
			"business"
		],
		tier: 0,
		evidenceLevel: "established",
		aliases: ["tech", "tools"],
		description: "Artifacts and methods that change what is cheap to do. Includes software, hardware, and techniques. Technology here is not autonomous — it is funded, regulated, and adopted inside other systems.",
		role: "Changes production functions: lowers some costs, creates new products, and shifts skill demand.",
		incentives: ["Adoption where it raises profit, status, or capability"],
		inputs: [
			"Research",
			"Capital",
			"Skills",
			"Components"
		],
		outputs: [
			"Products",
			"Productivity",
			"New failure modes"
		],
		dependencies: [
			"Energy",
			"Manufacturing",
			"Human operators and maintainers"
		],
		whoBenefits: ["Early adopters with complementary assets", "Inventors and owners of IP"],
		whoBearsCosts: ["Displaced task-holders", "Those exposed to new risks"],
		relatedSystems: [
			"innovation",
			"automation",
			"hardware",
			"software"
		],
		uncertainties: ["Pace and distribution of gains versus losses"],
		positiveEffects: ["Higher output per hour, new capabilities"],
		negativeExternalities: ["E-waste, energy use, skill obsolescence"],
		unintendedConsequences: ["Tools built for one goal get used for others"],
		optimizesFor: "Problem-solving under cost constraints — as defined by funders",
		resources: [
			"Capital",
			"Talent",
			"Infrastructure"
		],
		gains: ["Rents from better methods"],
		risks: ["Failed bets, regulation, commodity price collapse"],
		whoPays: ["Customers, workers in transition, taxpayers for public R&D"],
		encouragedBehavior: "Automate, scale, copy what works",
		unintendedBehavior: "Solutionism — applying a tool because it exists"
	}),
	N({
		id: "business-firms",
		name: "Companies",
		category: "company",
		layers: [
			"business",
			"money",
			"labor"
		],
		tier: 0,
		importance: 9,
		evidenceLevel: "established",
		aliases: [
			"firms",
			"corporations",
			"business",
			"company"
		],
		description: "Organizations that combine capital, labor, and technology to sell goods or services. This node is an archetype — not a specific firm. Legal form, governance, and market power vary widely.",
		role: "Convert inputs into products, capture revenue, and allocate surplus among workers, owners, and reinvestment.",
		incentives: ["Profit, growth, survival, and — for public firms — expected returns"],
		inputs: [
			"Capital",
			"Labor",
			"Materials",
			"Data",
			"Licenses"
		],
		outputs: [
			"Products",
			"Jobs",
			"Taxes",
			"Externalities"
		],
		dependencies: [
			"Customers",
			"Rule of law",
			"Infrastructure",
			"Suppliers"
		],
		whoBenefits: [
			"Owners when profitable",
			"Employees with good matches",
			"Customers when surplus is shared"
		],
		whoBearsCosts: ["Workers in bad matches", "Communities absorbing externalities"],
		relatedSystems: [
			"revenue",
			"profit",
			"employees",
			"investors",
			"competition"
		],
		uncertainties: ["How much observed 'purpose' talk changes capital allocation"],
		positiveEffects: ["Coordination of production at scale"],
		negativeExternalities: ["Pollution, market power, political spending"],
		unintendedConsequences: ["Metrics used internally can become the product"],
		optimizesFor: "A mix of profit, growth, and managerial goals — not a single function",
		resources: [
			"Capital",
			"Talent",
			"Distribution",
			"Reputation"
		],
		gains: ["Residual cash flow", "Strategic options"],
		risks: ["Competition, regulation, demand shocks, key-person and key-supplier risk"],
		whoPays: ["Customers (prices), workers (effort), sometimes the public"],
		encouragedBehavior: "Grow share, defend margins, reduce unit cost",
		unintendedBehavior: "Short-term earnings management; regulatory arbitrage",
		tensions: [{
			a: "Customer value",
			b: "Shareholder return"
		}, {
			a: "Growth",
			b: "Resilience"
		}]
	}),
	N({
		id: "capital",
		name: "Capital",
		category: "economic",
		layers: [
			"money",
			"business",
			"power"
		],
		tier: 0,
		importance: 9,
		evidenceLevel: "established",
		aliases: ["investment", "finance"],
		description: "Claims on future cash flows and the funds used to buy productive assets. Includes equity, credit, and retained earnings. Capital is not 'money in a vault' — it is a set of expectations and contracts.",
		role: "Allocate purchasing power toward projects, firms, and states that can promise a return or a public mandate.",
		incentives: ["Seek return adjusted for risk, liquidity, and control"],
		inputs: [
			"Savings",
			"Credit creation",
			"Profit"
		],
		outputs: [
			"Investment",
			"Ownership claims",
			"Discipline via cost of capital"
		],
		dependencies: [
			"Property rights",
			"Payment systems",
			"Credible accounting"
		],
		whoBenefits: ["Owners of scarce, productive, or legally protected claims"],
		whoBearsCosts: ["Borrowers in distress", "Those without access to cheap capital"],
		relatedSystems: [
			"investors",
			"credit",
			"markets",
			"interest-rates",
			"profit"
		],
		uncertainties: ["How much of return is productive contribution versus market power or luck"],
		positiveEffects: ["Funds long-horizon projects"],
		negativeExternalities: ["Boom-bust credit cycles", "Concentration of control"],
		unintendedConsequences: ["Fiduciary duty can crowd out unpriced goods"],
		optimizesFor: "Expected risk-adjusted return, as perceived by allocators",
		resources: [
			"Savings",
			"Collateral",
			"Legal enforceability"
		],
		gains: ["Interest, dividends, capital gains, control"],
		risks: ["Default, inflation, expropriation, illiquidity"],
		whoPays: ["Future cash-flow generators; sometimes taxpayers in crises"],
		encouragedBehavior: "Fund what screens well on return metrics",
		unintendedBehavior: "Underfund slow public goods; overfund fashionable trades",
		claims: [{
			text: "In market economies, investment is steered by expected return and the cost of capital.",
			evidence: "established"
		}]
	}),
	N({
		id: "government",
		name: "Governments",
		category: "government",
		layers: ["power", "money"],
		tier: 0,
		importance: 9,
		evidenceLevel: "established",
		aliases: ["state", "public sector"],
		description: "Organizations with a claim to legitimate coercion in a territory: tax, regulate, spend, and provide or mandate public goods. This is an archetype covering democracies and other forms; incentives differ by regime.",
		role: "Set the rules of markets, provide security and some insurance, and respond to public and elite pressure.",
		incentives: [
			"Remain in power",
			"Fiscal capacity",
			"Perceived legitimacy",
			"Geopolitical position"
		],
		inputs: [
			"Taxes",
			"Information",
			"Votes or elite support",
			"Bureaucratic capacity"
		],
		outputs: [
			"Law",
			"Public spending",
			"Diplomacy",
			"Licenses"
		],
		dependencies: [
			"Compliance",
			"Administrative capacity",
			"Currency and debt markets"
		],
		whoBenefits: ["Coalitions that win office", "Recipients of spending and protection"],
		whoBearsCosts: [
			"Taxpayers",
			"Regulated parties",
			"Those outside the winning coalition"
		],
		relatedSystems: [
			"regulators",
			"courts",
			"taxes",
			"public-opinion",
			"lobbying"
		],
		uncertainties: ["How much policy is public-interest versus organized-interest"],
		positiveEffects: ["Public goods, rights enforcement, macroeconomic stabilization (contested in design)"],
		negativeExternalities: [
			"Corruption risk",
			"Poorly designed rules",
			"Conflict"
		],
		unintendedConsequences: ["Rules create niches for avoidance and lobbying"],
		optimizesFor: "A blend of public mandate and political survival — not a unified mind",
		resources: [
			"Legitimacy",
			"Force",
			"Fiscal base",
			"Information"
		],
		gains: [
			"Authority",
			"Revenue",
			"International standing"
		],
		risks: [
			"Electoral or elite overthrow",
			"Fiscal crisis",
			"Loss of legitimacy"
		],
		whoPays: ["Residents via tax, inflation, or reduced services"],
		encouragedBehavior: "Comply, petition, organize",
		unintendedBehavior: "Capture of agencies by the best-organized interests",
		tensions: [{
			a: "Legal influence",
			b: "Equal voice"
		}, {
			a: "Growth",
			b: "Distribution"
		}]
	}),
	N({
		id: "media",
		name: "Media",
		category: "information-system",
		layers: [
			"information",
			"power",
			"psychology"
		],
		tier: 0,
		evidenceLevel: "observed",
		aliases: ["press", "news media"],
		description: "Organizations and platforms that select, package, and distribute stories to a public. Includes legacy newsrooms and digital publishers. Business models (ads, subscriptions, patronage) shape what is cheap to produce.",
		role: "Filter and frame events for publics and elites; an input to opinion and to political incentives.",
		incentives: [
			"Audience",
			"Credibility (for some brands)",
			"Revenue",
			"Access to sources"
		],
		inputs: [
			"Events",
			"Leaks",
			"Journalism",
			"Audience metrics"
		],
		outputs: [
			"Stories",
			"Agendas",
			"Reputational rewards and punishments"
		],
		dependencies: [
			"Attention",
			"Legal speech rules",
			"Distribution platforms"
		],
		whoBenefits: ["Outlets with reach", "Actors who can stage newsworthy events"],
		whoBearsCosts: ["Subjects of coverage", "Audiences fed a skewed sample of the world"],
		relatedSystems: [
			"journalists",
			"news-ecosystem",
			"public-opinion",
			"attention",
			"advertising"
		],
		uncertainties: ["Net effect of digital distribution on accuracy versus speed"],
		positiveEffects: ["Accountability journalism", "Shared factual baselines (when they hold)"],
		negativeExternalities: ["Outrage cycles", "Under-covered slow risks"],
		unintendedConsequences: ["Metrics can pull coverage toward what spreads"],
		optimizesFor: "A mix of civic mission and audience capture — weights vary by outlet",
		resources: [
			"Talent",
			"Access",
			"Distribution",
			"Trust"
		],
		gains: [
			"Influence",
			"Revenue",
			"Status"
		],
		risks: [
			"Lawsuits",
			"Platform ranking changes",
			"Loss of trust"
		],
		whoPays: ["Audiences, advertisers, or patrons"],
		encouragedBehavior: "Publish what is timely and shareable",
		unintendedBehavior: "Horse-race and conflict frames crowding out mechanisms",
		tensions: [{
			a: "Accuracy",
			b: "Speed and reach"
		}, {
			a: "Independence",
			b: "Access to power"
		}]
	}),
	N({
		id: "ai-systems",
		name: "AI systems",
		category: "technology",
		layers: [
			"ai",
			"data",
			"business"
		],
		tier: 0,
		importance: 9,
		evidenceLevel: "observed",
		aliases: [
			"artificial intelligence",
			"AI",
			"models"
		],
		description: "Statistical and algorithmic systems that infer patterns and produce predictions, rankings, or generated content. In this model AI is embedded in firms, labs, clouds, and products — not a free-floating agent.",
		role: "Lower the cost of prediction, generation, and some kinds of decision support, which then feeds back into behavior and data.",
		incentives: ["Capability, product adoption, research prestige, and (for vendors) usage revenue"],
		inputs: [
			"Datasets",
			"Compute",
			"Energy",
			"Human feedback",
			"Research"
		],
		outputs: [
			"Predictions",
			"Generated media",
			"Automation",
			"New data"
		],
		dependencies: [
			"Chips",
			"Data centers",
			"Laboratories",
			"Electricity"
		],
		whoBenefits: [
			"Vendors and labs",
			"Users of cheaper inference",
			"Owners of complementary data and distribution"
		],
		whoBearsCosts: [
			"Workers in automated tasks",
			"People scored by models",
			"Energy systems"
		],
		relatedSystems: [
			"neural-networks",
			"llms",
			"gpus",
			"automation",
			"inference"
		],
		uncertainties: ["How far current methods scale", "Net labor demand after task automation"],
		positiveEffects: ["Cheaper analysis, accessibility tools, scientific assistance"],
		negativeExternalities: [
			"Error at scale",
			"Copyright disputes",
			"Energy and water use"
		],
		unintendedConsequences: ["Synthetic content polluting future training data (hypothesis)"],
		optimizesFor: "Training and product objectives set by labs and buyers — not 'intelligence' in the abstract",
		resources: [
			"Data",
			"GPUs",
			"Researchers",
			"Capital"
		],
		gains: [
			"Product differentiation",
			"Cost reduction",
			"Strategic option value"
		],
		risks: [
			"Safety failures",
			"Regulation",
			"Commodity inference",
			"Reputational shocks"
		],
		whoPays: ["Customers of AI products; the public via externalities"],
		encouragedBehavior: "Delegate routine cognitive tasks to models",
		unintendedBehavior: "Over-trust fluent outputs; deskilling",
		claims: [{
			text: "Modern AI products sit on a stack of chips, energy, data, and distribution — not on algorithms alone.",
			evidence: "established"
		}, {
			text: "Cheaper inference will reshape which tasks are automated; the net job effect is contested.",
			evidence: "contested"
		}],
		tensions: [{
			a: "Capability",
			b: "Control and evaluation"
		}, {
			a: "Open publication",
			b: "Safety and advantage"
		}],
		geographicNote: "Design, capital, and cloud capacity are concentrated in a few countries; leading-edge fabrication is even more concentrated."
	}),
	N({
		id: "labor",
		name: "Labor",
		category: "economic",
		layers: [
			"labor",
			"money",
			"business"
		],
		tier: 0,
		evidenceLevel: "established",
		aliases: ["work", "jobs"],
		description: "Human time and skill applied to production. Distinct from 'jobs' as legal positions. Automation can raise output per hour while reducing demand for particular tasks — both can be true.",
		role: "The human input to firms and public services; also a source of income that funds consumption.",
		incentives: ["Wages, meaning, status, security"],
		inputs: [
			"Skills",
			"Health",
			"Tools",
			"Management"
		],
		outputs: [
			"Goods and services",
			"On-the-job learning",
			"Workplace data"
		],
		dependencies: ["Demand for output", "Complementary capital"],
		whoBenefits: ["Workers with scarce complementary skills", "Employers of those workers"],
		whoBearsCosts: ["Workers in shrinking task bundles"],
		relatedSystems: [
			"employees",
			"wages",
			"skills",
			"automation",
			"productivity"
		],
		uncertainties: ["Elasticity of new task creation versus displacement"],
		positiveEffects: ["Livelihoods, skill formation, social structure"],
		negativeExternalities: ["Burnout, occupational injury, unpaid care work outside GDP"],
		unintendedConsequences: ["Productivity gains may accrue to owners unless bargaining or competition redistributes them"],
		optimizesFor: "A bargain among pay, effort, and outside options",
		resources: [
			"Time",
			"Skill",
			"Bargaining power"
		],
		gains: [
			"Income",
			"Identity",
			"Insurance via employment (where it exists)"
		],
		risks: [
			"Unemployment",
			"Skill obsolescence",
			"Unsafe conditions"
		],
		whoPays: ["Employers (wages); workers (effort); public (safety nets)"],
		encouragedBehavior: "Specialize where wages are high",
		unintendedBehavior: "Underinvestment in unpaid but valuable work",
		tensions: [{
			a: "Productivity",
			b: "Task-level employment"
		}, {
			a: "Flexibility",
			b: "Security"
		}]
	}),
	N({
		id: "consumption",
		name: "Consumption",
		category: "economic",
		layers: [
			"money",
			"business",
			"psychology"
		],
		tier: 0,
		evidenceLevel: "established",
		aliases: ["demand", "spending"],
		description: "Household and institutional purchasing. Closes the money loop: wages and transfers become revenue. Shaped by prices, credit, status, and convenience — not only by 'needs'.",
		role: "The demand side of markets; the cash that validates production.",
		incentives: ["Need, desire, status, habit, credit availability"],
		inputs: [
			"Income",
			"Credit",
			"Prices",
			"Marketing",
			"Identity"
		],
		outputs: [
			"Revenue for firms",
			"Waste",
			"Price signals"
		],
		dependencies: [
			"Distribution",
			"Payments",
			"Trust in sellers"
		],
		whoBenefits: ["Sellers of desired goods", "Consumers when surplus is large"],
		whoBearsCosts: ["Over-indebted households", "Environments absorbing waste"],
		relatedSystems: [
			"consumers",
			"revenue",
			"advertising",
			"credit",
			"identity"
		],
		uncertainties: ["How much of demand is 'manufactured' by marketing versus revealed preference"],
		positiveEffects: ["Material welfare", "Market feedback"],
		negativeExternalities: ["Resource use", "Status races"],
		unintendedConsequences: ["Credit-fueled consumption can mask wage stagnation for a time"],
		optimizesFor: "Perceived value under budget and attention constraints",
		resources: [
			"Income",
			"Credit",
			"Time to shop"
		],
		gains: ["Use value", "Signaling"],
		risks: [
			"Debt",
			"Addiction-like purchasing",
			"Regret"
		],
		whoPays: ["The buyer, sometimes future selves via debt"],
		encouragedBehavior: "Buy, upgrade, subscribe",
		unintendedBehavior: "Consume for identity rather than use"
	}),
	N({
		id: "engagement",
		name: "Engagement",
		category: "psychological",
		layers: [
			"psychology",
			"information",
			"data"
		],
		tier: 1,
		aliases: ["interaction", "time on site"],
		description: "Measurable interactions: clicks, dwell, shares, comments. A convenient proxy for attention — and a common training target for ranking systems.",
		role: "The operational stand-in for 'the user found this worth responding to'.",
		incentives: ["Platforms: maximize a chosen engagement metric; users: respond to salient content"],
		inputs: [
			"Content",
			"Rankings",
			"Notifications",
			"Social cues"
		],
		outputs: [
			"Data",
			"Ad inventory",
			"Habit"
		],
		dependencies: ["Attention", "Interface"],
		whoBenefits: ["Platforms selling ads or retention", "Creators who win the ranking"],
		whoBearsCosts: ["Users when the metric diverges from their goals"],
		relatedSystems: [
			"attention",
			"recommendation-algorithms",
			"advertising",
			"habit"
		],
		uncertainties: ["When engagement tracks satisfaction versus compulsion"],
		positiveEffects: ["Useful discovery", "Community"],
		negativeExternalities: ["Rage-bait, spam, sleep loss"],
		unintendedConsequences: ["Goodhart: the metric becomes the product"],
		optimizesFor: "Whatever the ranking objective encodes",
		resources: ["User time"],
		gains: ["Retention, data, revenue"],
		risks: ["Trust collapse", "Regulation of dark patterns"],
		whoPays: ["Users (time); advertisers (cash)"],
		encouragedBehavior: "Interact now",
		unintendedBehavior: "Performative conflict",
		tensions: [{
			a: "Satisfaction",
			b: "Time-on-task"
		}],
		claims: [{
			text: "Engagement is a proxy, not identical to wellbeing or informedness.",
			evidence: "established"
		}]
	}),
	N({
		id: "habit",
		name: "Habit",
		category: "psychological",
		layers: ["psychology"],
		tier: 1,
		description: "Cue–routine–reward loops that make behavior automatic. Product design often aims to become a habit because habits lower the cost of re-acquisition.",
		role: "Stabilizes repeated behavior, which stabilizes data and revenue.",
		incentives: ["Reduce cognitive effort; for firms, lock in recurrence"],
		inputs: [
			"Rewards",
			"Cues",
			"Ease"
		],
		outputs: ["Repeated behavior", "Switching costs of a psychological kind"],
		relatedSystems: [
			"reward",
			"convenience",
			"engagement",
			"retention"
		],
		uncertainties: ["How freely formed versus designed"],
		positiveEffects: ["Skill, reliability"],
		negativeExternalities: ["Compulsion"],
		unintendedConsequences: ["Hard-to-quit products even when users report regret"],
		optimizesFor: "Prediction error reduction in the brain; recurrence in the product",
		resources: ["Repetition", "Stable cues"],
		gains: ["Ease"],
		risks: ["Inflexibility"],
		whoPays: ["The person whose time is committed"],
		encouragedBehavior: "Open the app without deliberation",
		unintendedBehavior: "Checking as displacement of other goals",
		evidenceLevel: "observed"
	}),
	N({
		id: "trust",
		name: "Trust",
		category: "psychological",
		layers: [
			"psychology",
			"business",
			"power"
		],
		tier: 1,
		evidenceLevel: "observed",
		description: "Willingness to accept vulnerability based on expected behavior of people or institutions. Markets and media run on it; it is slow to build and can fail suddenly.",
		role: "Reduces transaction costs; its absence forces verification, law, or exit.",
		incentives: ["Appear reliable; sometimes, exploit residual trust"],
		inputs: [
			"Reputation",
			"Experience",
			"Institutions",
			"Social proof"
		],
		outputs: [
			"Exchange",
			"Compliance",
			"Attention to sources"
		],
		relatedSystems: [
			"media",
			"business-firms",
			"authority",
			"courts"
		],
		uncertainties: ["How much digital ratings substitute for thick trust"],
		positiveEffects: ["Trade, cooperation"],
		negativeExternalities: ["Trust in the untrustworthy"],
		unintendedConsequences: ["Brands harvest trust then spend it"],
		optimizesFor: "Expected reliability",
		whoBenefits: ["High-trust counterparties"],
		whoBearsCosts: ["The betrayed"],
		encouragedBehavior: "Transact without full inspection",
		unintendedBehavior: "Fraud at scale",
		tensions: [{
			a: "Openness",
			b: "Verification"
		}]
	}),
	N({
		id: "social-status",
		name: "Social status",
		category: "psychological",
		layers: ["psychology", "business"],
		tier: 1,
		aliases: ["status", "prestige"],
		description: "Relative standing in a group. Drives consumption, career choice, and online performance. Not a universal law of every act — a recurring motive.",
		role: "A non-cash incentive that markets and platforms can attach metrics to (followers, titles, brands).",
		inputs: [
			"Audience",
			"Symbols",
			"Credentials"
		],
		outputs: [
			"Effort",
			"Consumption",
			"Coalition behavior"
		],
		relatedSystems: [
			"identity",
			"consumption",
			"social-proof"
		],
		uncertainties: ["How much status-seeking is culturally specific"],
		positiveEffects: ["Ambition, excellence"],
		negativeExternalities: ["Zero-sum races", "exclusion"],
		unintendedConsequences: ["Metrics of status crowd out unmeasured virtues"],
		optimizesFor: "Rank in a relevant audience",
		whoPays: ["Those who lose the race; audiences who subsidize display"],
		encouragedBehavior: "Signal success",
		unintendedBehavior: "Fraudulent signaling",
		evidenceLevel: "observed"
	}),
	N({
		id: "personalization",
		name: "Personalization",
		category: "technology",
		layers: [
			"data",
			"psychology",
			"ai"
		],
		tier: 1,
		description: "Adapting rankings, prices, or creative to a predicted individual. Relies on data and models; sold as relevance, criticized as manipulation or fragmentation.",
		role: "Closes the loop from behavior to future stimuli.",
		incentives: ["Raise conversion or engagement versus a generic baseline"],
		inputs: [
			"Profiles",
			"Context",
			"Inventory"
		],
		outputs: [
			"Ranked items",
			"Prices",
			"Messages"
		],
		relatedSystems: [
			"recommendation-algorithms",
			"privacy",
			"predictions"
		],
		uncertainties: ["Net civic effect of fragmented information diets"],
		positiveEffects: ["Less irrelevant noise", "Accessibility"],
		negativeExternalities: ["Filter effects", "Price discrimination"],
		unintendedConsequences: ["People cannot see the counterfactual feed"],
		optimizesFor: "A predicted individual objective (click, buy, watch)",
		tensions: [{
			a: "Relevance",
			b: "Shared reality"
		}, {
			a: "Personalization",
			b: "Privacy"
		}],
		evidenceLevel: "observed",
		claims: [{
			text: "Personalization can increase measured engagement; whether it increases filter bubbles is contested and context-dependent.",
			evidence: "contested"
		}]
	}),
	N({
		id: "users",
		name: "Users",
		category: "human",
		layers: [
			"information",
			"data",
			"psychology"
		],
		tier: 1,
		aliases: ["end users"],
		description: "People in their role as operators of products and platforms. Overlaps with consumers and workers but emphasizes interaction and data generation.",
		role: "Supply attention and behavioral data; receive rankings, prices, and model outputs.",
		incentives: ["Get a job done with low friction; sometimes, seek entertainment or status"],
		inputs: [
			"Interfaces",
			"Recommendations",
			"Social context"
		],
		outputs: [
			"Clicks",
			"Content",
			"Payments",
			"Traces"
		],
		relatedSystems: [
			"social-platforms",
			"attention",
			"data-collection",
			"applications"
		],
		whoBenefits: ["Platforms with more users", "Users when the product fits"],
		whoBearsCosts: ["Users when the real product is the trace"],
		tensions: [{
			a: "User wellbeing",
			b: "Engagement optimization"
		}, {
			a: "Free access",
			b: "Data extraction"
		}],
		evidenceLevel: "established"
	}),
	N({
		id: "social-platforms",
		name: "Social platforms",
		category: "company",
		layers: [
			"information",
			"data",
			"business"
		],
		tier: 1,
		importance: 8,
		aliases: ["social media", "social networks"],
		description: "Multi-sided services that host user connections and content, typically ranked by algorithms and often financed by advertising. Named firms are examples of the type, not separately modeled here.",
		role: "Match people to people and to content; convert attention into inventory.",
		incentives: ["Retention, daily actives, ad yield, and regulatory survival"],
		inputs: [
			"Users",
			"Content",
			"Capital",
			"Cloud"
		],
		outputs: [
			"Feeds",
			"Ad slots",
			"Data",
			"Public discourse venues"
		],
		relatedSystems: [
			"recommendation-algorithms",
			"advertising",
			"users",
			"network-effects"
		],
		geographicNote: "A handful of large consumer platforms are headquartered in the US and China; usage is global.",
		tensions: [{
			a: "User wellbeing",
			b: "Engagement optimization"
		}, {
			a: "Moderation",
			b: "Speech and growth"
		}],
		evidenceLevel: "observed",
		claims: [{
			text: "Advertising-supported consumer platforms typically monetize attention and targeting, not the social graph alone.",
			evidence: "established"
		}],
		optimizesFor: "A product objective such as engagement, retention, or revenue per user",
		resources: [
			"Network of users",
			"Data",
			"Ranking systems"
		],
		gains: [
			"Ad revenue",
			"Data advantages",
			"Distribution power"
		],
		risks: [
			"Attention recession",
			"Regulation",
			"Creator or user exodus"
		],
		whoPays: ["Advertisers in cash; users in attention and data"],
		whoBenefits: [
			"Shareholders",
			"Advertisers who convert",
			"Users who find value"
		],
		whoBearsCosts: ["Users harmed by ranking side-effects", "Publishers dependent on referral traffic"],
		encouragedBehavior: "Post, react, return",
		unintendedBehavior: "Performative conflict; professionalized influence"
	}),
	N({
		id: "recommendation-algorithms",
		name: "Recommendation algorithms",
		category: "technology",
		layers: [
			"ai",
			"information",
			"psychology"
		],
		tier: 1,
		importance: 8,
		aliases: [
			"ranking",
			"recommender",
			"feed ranking"
		],
		description: "Systems that score and order content, products, or people for a user. Objectives vary: engagement, retention, satisfaction, diversity, or revenue. The objective is a design choice, not a law of nature.",
		role: "Maximize a platform objective such as engagement, retention, satisfaction, or another optimization target.",
		inputs: [
			"User behavior",
			"Content",
			"Context",
			"Historical interactions"
		],
		outputs: [
			"Ranked content",
			"Recommendations",
			"Predictions"
		],
		incentives: ["Hit the chosen metric; remain cheap enough to serve"],
		dependencies: [
			"Data pipelines",
			"Compute",
			"Content inventory"
		],
		whoBenefits: ["Platforms", "Items that the model favors"],
		whoBearsCosts: ["Unranked speakers and products", "Users if the objective is misaligned"],
		relatedSystems: [
			"engagement",
			"personalization",
			"content",
			"machine-learning"
		],
		uncertainties: ["Long-run civic and mental-health effects of particular objectives"],
		positiveEffects: ["Increased relevance", "Discovery in huge catalogs"],
		negativeExternalities: [
			"Filter effects",
			"Popularity bias",
			"Incentives for spam"
		],
		unintendedConsequences: ["Behavioral feedback loops; creators chasing the ranking"],
		optimizesFor: "The specified platform objective — often a proxy",
		resources: [
			"Logs",
			"Features",
			"Serving infrastructure"
		],
		gains: ["Retention and yield"],
		risks: [
			"Metric gaming",
			"Scandal",
			"Regulatory transparency mandates"
		],
		whoPays: ["Users (attention allocation); sometimes advertisers"],
		encouragedBehavior: "Consume what scores well",
		unintendedBehavior: "Produce what scores well even if it is misleading",
		evidenceLevel: "observed",
		claims: [
			{
				text: "Recommenders increase measured engagement in many products.",
				evidence: "observed"
			},
			{
				text: "They can create filter bubbles; magnitude depends on product and audience.",
				evidence: "contested"
			},
			{
				text: "Feedback loops between ranking and behavior are a recognized mechanism.",
				evidence: "plausible"
			}
		],
		tensions: [{
			a: "Relevance",
			b: "Diversity of exposure"
		}, {
			a: "Short-term engagement",
			b: "Long-term trust"
		}]
	}),
	N({
		id: "content",
		name: "Content",
		category: "information-system",
		layers: ["information", "psychology"],
		tier: 1,
		aliases: ["media content", "posts"],
		description: "Messages, video, text, and images competing for attention. Produced by professionals, users, and increasingly by models.",
		role: "The payload that ranking systems order and that attention selects.",
		inputs: [
			"Creators",
			"Events",
			"Models"
		],
		outputs: [
			"Attention",
			"Opinion",
			"Training text"
		],
		relatedSystems: [
			"media",
			"recommendation-algorithms",
			"llms"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "journalists",
		name: "Journalists",
		category: "human",
		layers: ["information", "power"],
		tier: 1,
		description: "People whose job is to report and verify. Incentives include scoops, audience, professional norms, and employment in shrinking or shifting newsrooms.",
		role: "Produce accounts of events that feed media and public opinion.",
		inputs: [
			"Sources",
			"Documents",
			"Time"
		],
		outputs: ["Stories"],
		relatedSystems: [
			"news-ecosystem",
			"media",
			"public-opinion"
		],
		evidenceLevel: "observed",
		uncertainties: ["How much original reporting survives platform distribution"],
		whoBearsCosts: ["Reporters under threat or precarity"],
		whoBenefits: ["Publics that receive accurate accounts"]
	}),
	N({
		id: "news-ecosystem",
		name: "News ecosystem",
		category: "information-system",
		layers: ["information", "power"],
		tier: 1,
		description: "The overlapping set of newsrooms, wire services, aggregators, and influencers through which 'what happened' is constructed for a public.",
		role: "Aggregate and recirculate reports; set a rough agenda.",
		relatedSystems: [
			"journalists",
			"media",
			"social-platforms"
		],
		evidenceLevel: "observed",
		tensions: [{
			a: "Verification",
			b: "Virality"
		}]
	}),
	N({
		id: "public-opinion",
		name: "Public opinion",
		category: "human",
		layers: [
			"information",
			"power",
			"psychology"
		],
		tier: 1,
		aliases: ["the public"],
		description: "Aggregate attitudes as measured by polls, votes, protests, and online traces. Noisy, constructed, and still politically consequential.",
		role: "Constrains and enables governments and brands.",
		inputs: [
			"Media",
			"Experience",
			"Identity",
			"Events"
		],
		outputs: [
			"Votes",
			"Boycotts",
			"Legitimacy"
		],
		relatedSystems: [
			"government",
			"media",
			"political-influence"
		],
		evidenceLevel: "observed",
		uncertainties: ["How well online samples represent publics"]
	}),
	N({
		id: "researchers",
		name: "Researchers",
		category: "human",
		layers: [
			"ai",
			"information",
			"labor"
		],
		tier: 1,
		aliases: ["scientists"],
		description: "People who produce public or proprietary knowledge. Includes university and industry labs. Career incentives (publication, grants, equity) shape topics.",
		role: "Generate methods and findings that later become products and policy inputs.",
		inputs: [
			"Prior work",
			"Funding",
			"Data",
			"Compute"
		],
		outputs: [
			"Publications",
			"Prototypes",
			"Talent"
		],
		relatedSystems: [
			"publications",
			"universities",
			"ai-laboratories"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "data-collection",
		name: "Data collection",
		category: "infrastructure",
		layers: ["data", "business"],
		tier: 1,
		aliases: ["tracking", "instrumentation"],
		description: "The act of capturing behavior, sensors, and transactions. Spans first-party product logs, pixels, SDKs, and public scraping.",
		role: "Turn human activity into records.",
		inputs: [
			"Behavior",
			"Consent or legal basis",
			"SDKs"
		],
		outputs: ["Logs", "Broker feeds"],
		relatedSystems: [
			"privacy",
			"data-brokers",
			"users"
		],
		evidenceLevel: "established",
		tensions: [{
			a: "Product improvement",
			b: "Minimization"
		}]
	}),
	N({
		id: "data-brokers",
		name: "Data brokers",
		category: "company",
		layers: ["data", "business"],
		tier: 1,
		description: "Firms that buy, infer, and sell attributes about people and companies. Often invisible to the subjects of the data.",
		role: "Make data liquid across organizational boundaries.",
		incentives: ["Coverage, freshness, exclusivity of attributes"],
		relatedSystems: [
			"data",
			"privacy",
			"advertising",
			"predictions"
		],
		evidenceLevel: "observed",
		whoBearsCosts: ["People who cannot see or contest the file"],
		uncertainties: ["Full graph of who sells what to whom is partly opaque"],
		geographicNote: "Large broker markets exist in the US; legal regimes differ sharply by jurisdiction."
	}),
	N({
		id: "datasets",
		name: "Datasets",
		category: "resource",
		layers: ["data", "ai"],
		tier: 1,
		aliases: ["corpora", "training data"],
		description: "Assembled collections used for analytics or model training. Provenance, consent, and representativeness are often incomplete.",
		role: "The packaged form of data that machine learning actually consumes.",
		inputs: [
			"Collection",
			"Licensing",
			"Labeling"
		],
		outputs: ["Trained models", "Benchmarks"],
		relatedSystems: [
			"machine-learning",
			"llms",
			"privacy"
		],
		evidenceLevel: "established",
		uncertainties: ["Legal status of web-scale training corpora in multiple jurisdictions"]
	}),
	N({
		id: "machine-learning",
		name: "Machine learning",
		category: "technology",
		layers: ["ai", "data"],
		tier: 1,
		aliases: ["ML", "statistical learning"],
		description: "Methods that fit predictive functions to data. Broader than neural networks; includes the operational practice of training, evaluating, and deploying models.",
		role: "Convert datasets into predictors and generators.",
		relatedSystems: [
			"neural-networks",
			"predictions",
			"datasets"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "predictions",
		name: "Predictions",
		category: "information-system",
		layers: [
			"data",
			"ai",
			"business"
		],
		tier: 1,
		aliases: ["scores", "forecasts"],
		description: "Outputs of models used to decide: credit, ranking, staffing, policing, inventory. A prediction is not a cause — acting on it can change the world it describes.",
		role: "Interface between data and decisions.",
		relatedSystems: [
			"machine-learning",
			"human-behavior",
			"credit"
		],
		evidenceLevel: "observed",
		tensions: [{
			a: "Accuracy",
			b: "Fairness and contestability"
		}],
		unintendedConsequences: ["Performativity: people game the score"]
	}),
	N({
		id: "privacy",
		name: "Privacy",
		category: "institution",
		layers: [
			"data",
			"power",
			"psychology"
		],
		tier: 1,
		description: "Norms and rules about who may know what about whom. Simultaneously a right, a preference, and a compliance industry.",
		role: "Constraint on collection, retention, and cross-context use.",
		relatedSystems: [
			"data-collection",
			"regulators",
			"trust"
		],
		evidenceLevel: "observed",
		tensions: [{
			a: "Privacy",
			b: "Personalization"
		}],
		geographicNote: "Legal baselines differ (e.g. EU GDPR versus more sectoral US rules) — a fact of law, not a ranking of virtue."
	}),
	N({
		id: "neural-networks",
		name: "Neural networks",
		category: "technology",
		layers: ["ai"],
		tier: 1,
		aliases: ["deep learning"],
		description: "A class of models whose cost and capability have scaled with data and compute. The current backbone of most 'AI' products.",
		role: "Learnable function approximators sitting between datasets and inference.",
		relatedSystems: [
			"llms",
			"gpus",
			"training-infrastructure"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "llms",
		name: "Large language models",
		category: "technology",
		layers: ["ai", "information"],
		tier: 1,
		aliases: ["LLM", "foundation models"],
		description: "Large neural models trained on text (and often more) that generate and transform language. Products wrap them with tools, retrieval, and policy.",
		role: "General-purpose linguistic interface and reasoning aid — with well-known failure modes (hallucination, bias).",
		relatedSystems: [
			"neural-networks",
			"datasets",
			"inference",
			"applications"
		],
		evidenceLevel: "observed",
		claims: [{
			text: "Quality has improved with scale of data, compute, and methods.",
			evidence: "observed"
		}, {
			text: "They reliably 'understand' in the human sense.",
			evidence: "contested"
		}]
	}),
	N({
		id: "gpus",
		name: "GPUs",
		category: "infrastructure",
		layers: ["ai", "supply"],
		tier: 1,
		importance: 8,
		aliases: ["accelerators", "AI chips"],
		description: "Specialized processors that made large-scale neural training economically thinkable. Supply is tight, capital-intensive, and geographically concentrated at the leading edge.",
		role: "The scarce physical bottleneck for training and, increasingly, inference.",
		relatedSystems: [
			"semiconductors",
			"training-infrastructure",
			"chip-foundries"
		],
		evidenceLevel: "established",
		geographicNote: "Leading-edge logic fabrication is concentrated in Taiwan, with critical equipment from the Netherlands and materials/tools from Japan, the US, and others.",
		whoBenefits: [
			"Designers of scarce accelerators",
			"Cloud resellers",
			"Customers who get access"
		],
		whoBearsCosts: ["Buyers facing allocation", "Anyone whose roadmap assumes unlimited compute"]
	}),
	N({
		id: "training-infrastructure",
		name: "Training infrastructure",
		category: "infrastructure",
		layers: ["ai", "supply"],
		tier: 1,
		aliases: ["clusters", "superpods"],
		description: "Networked accelerators, storage, and software used to train large models. A capital and energy project as much as a software one.",
		role: "Turn electricity, chips, and data into weights.",
		relatedSystems: [
			"gpus",
			"data-centers",
			"energy",
			"ai-laboratories"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "ai-laboratories",
		name: "AI laboratories",
		category: "institution",
		layers: ["ai", "labor"],
		tier: 1,
		aliases: ["AI labs", "frontier labs"],
		description: "Organizations that train frontier models and publish or productize them. Mix of nonprofit, corporate, and hybrid forms. Competitive and collaborative at once.",
		role: "Concentrate talent, compute, and data to produce new model generations.",
		relatedSystems: [
			"researchers",
			"llms",
			"capital",
			"developers"
		],
		evidenceLevel: "observed",
		tensions: [{
			a: "Publication",
			b: "Advantage and safety"
		}]
	}),
	N({
		id: "agents",
		name: "Software agents",
		category: "technology",
		layers: ["ai", "labor"],
		tier: 1,
		aliases: ["agents", "AI agents"],
		description: "Systems that call tools and take multi-step actions on a user's or firm's behalf. Early, uneven, and easy to over-claim.",
		role: "Move models from answering to doing.",
		relatedSystems: [
			"llms",
			"automation",
			"applications"
		],
		evidenceLevel: "plausible",
		uncertainties: ["Reliability in open-ended environments"]
	}),
	N({
		id: "automation",
		name: "Automation",
		category: "economic",
		layers: [
			"labor",
			"ai",
			"business"
		],
		tier: 1,
		importance: 7,
		description: "Substitution of machine processes for human tasks. Can raise productivity and shrink particular job categories at the same time. This model does not pick a single ideological conclusion.",
		role: "Change the mix of tasks inside production.",
		relatedSystems: [
			"productivity",
			"job-transformation",
			"ai-systems",
			"wages"
		],
		evidenceLevel: "observed",
		claims: [{
			text: "Automation raises output per hour in adopting firms, on average.",
			evidence: "observed"
		}, {
			text: "It reduces demand for some tasks while creating others; net employment is contested.",
			evidence: "contested"
		}],
		tensions: [{
			a: "Productivity",
			b: "Demand for particular tasks"
		}],
		optimizesFor: "Lower unit cost or higher quality for the adopter",
		whoBenefits: ["Adopting owners and remaining complementary workers"],
		whoBearsCosts: ["Workers whose tasks are removed faster than they can switch"]
	}),
	N({
		id: "inference",
		name: "Inference",
		category: "technology",
		layers: ["ai"],
		tier: 1,
		aliases: ["model serving"],
		description: "Running a trained model to produce an output. Cost per token or query is a central economic variable for product design.",
		role: "The moment models meet users and other software.",
		relatedSystems: [
			"llms",
			"applications",
			"gpus",
			"cloud-infrastructure"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "products",
		name: "Products",
		category: "economic",
		layers: ["business"],
		tier: 1,
		aliases: ["offers", "services"],
		description: "The packaged solution a firm sells. Sits between a problem and a distribution channel.",
		role: "Carry value to a customer and return revenue.",
		relatedSystems: [
			"distribution",
			"innovation",
			"consumers"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "distribution",
		name: "Distribution",
		category: "economic",
		layers: ["business", "supply"],
		tier: 1,
		aliases: ["channels", "go to market"],
		description: "How an offer reaches a customer: stores, sales teams, app stores, search, feeds, partnerships. Often a harder problem than the product.",
		role: "The scarce path to demand.",
		relatedSystems: [
			"customer-acquisition",
			"social-platforms",
			"search-platforms"
		],
		evidenceLevel: "observed",
		whoBenefits: ["Owners of scarce channels"]
	}),
	N({
		id: "customer-acquisition",
		name: "Customer acquisition",
		category: "economic",
		layers: ["business"],
		tier: 1,
		aliases: ["CAC", "growth marketing"],
		description: "The process and cost of gaining a paying (or engaged) customer. Constrained by channel prices and conversion.",
		role: "Turn distribution into customers.",
		relatedSystems: [
			"advertising",
			"conversion",
			"cac"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "revenue",
		name: "Revenue",
		category: "economic",
		layers: ["money", "business"],
		tier: 1,
		evidenceLevel: "established",
		description: "Cash in from customers. The beginning of the accounting identity that leads to profit or loss.",
		role: "Validate that someone paid.",
		relatedSystems: [
			"consumption",
			"profit",
			"business-firms"
		]
	}),
	N({
		id: "profit",
		name: "Profit",
		category: "economic",
		layers: ["money", "business"],
		tier: 1,
		evidenceLevel: "established",
		aliases: ["earnings", "surplus"],
		description: "Revenue minus costs (definitions vary). Residual that can be reinvested, distributed, or wasted.",
		role: "Signal and fuel for capital allocation inside the firm.",
		relatedSystems: [
			"revenue",
			"reinvestment",
			"shareholder-returns",
			"wages"
		],
		tensions: [{
			a: "Wages and capex",
			b: "Distributions"
		}]
	}),
	N({
		id: "network-effects",
		name: "Network effects",
		category: "economic",
		layers: ["business"],
		tier: 1,
		description: "Value of a service rising with the number of compatible users. A common source of concentration — not automatic, and sometimes reversible.",
		role: "Can create winner-take-most dynamics and high switching costs.",
		relatedSystems: [
			"moats",
			"social-platforms",
			"competition"
		],
		evidenceLevel: "observed",
		claims: [{
			text: "Many communication and marketplace products exhibit network effects.",
			evidence: "established"
		}, {
			text: "They always produce durable monopolies.",
			evidence: "contested"
		}]
	}),
	N({
		id: "competition",
		name: "Competition",
		category: "market",
		layers: ["business"],
		tier: 1,
		description: "Rivalry for customers, talent, capital, or attention. Disciplines prices and spurs innovation — when it is real. Market power is the weakening of this node.",
		role: "A process, not a guarantee of consumer welfare.",
		relatedSystems: [
			"innovation",
			"pricing-power",
			"markets"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "advertising",
		name: "Advertising",
		category: "economic",
		layers: [
			"business",
			"information",
			"money"
		],
		tier: 1,
		importance: 7,
		aliases: ["ads", "marketing"],
		description: "Paid influence over attention. Finances much of the consumer internet and a large share of media. Effectiveness is real and also routinely overstated.",
		role: "Convert attention into a budget that funds 'free' products and paid media.",
		relatedSystems: [
			"advertisers",
			"attention",
			"social-platforms",
			"customer-acquisition"
		],
		evidenceLevel: "observed",
		tensions: [{
			a: "Free access",
			b: "Targeting"
		}, {
			a: "Brand safety",
			b: "Reach"
		}],
		whoPays: ["Advertisers, ultimately via prices of advertised goods"],
		whoBenefits: ["Platforms and publishers", "Advertisers when incrementality is real"]
	}),
	N({
		id: "investors",
		name: "Investors",
		category: "human",
		layers: ["money", "power"],
		tier: 1,
		aliases: [
			"shareholders",
			"VCs",
			"asset managers"
		],
		description: "People and institutions that supply capital in exchange for claims. Includes retail, funds, and states. Time horizon and fiduciary rules vary.",
		role: "Price risk and allocate capital; exercise governance where ownership confers it.",
		relatedSystems: [
			"capital",
			"markets",
			"shareholder-returns",
			"business-firms"
		],
		evidenceLevel: "established",
		optimizesFor: "Return for a mandate (pension, endowment, speculator) — not 'the economy'",
		whoPays: ["Entrepreneurs and workers via the cost of capital; LPs via fees"]
	}),
	N({
		id: "banks",
		name: "Banks",
		category: "institution",
		layers: ["money", "power"],
		tier: 1,
		aliases: ["lenders"],
		description: "Institutions that take deposits or wholesale funding and extend credit. They create purchasing power when they lend, within regulatory and capital constraints.",
		role: "Operate the credit channel and payment rails.",
		relatedSystems: [
			"credit",
			"debt",
			"government",
			"interest-rates"
		],
		evidenceLevel: "established",
		claims: [{
			text: "Bank lending is a primary way new deposit balances appear in modern monetary systems.",
			evidence: "established"
		}]
	}),
	N({
		id: "credit",
		name: "Credit",
		category: "economic",
		layers: ["money"],
		tier: 1,
		aliases: ["loans"],
		description: "Purchasing power now against a promise to pay later. Enables investment and consumption smoothing; also leverage and crises.",
		role: "Time-shift spending.",
		relatedSystems: [
			"banks",
			"debt",
			"interest-rates",
			"consumption"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "markets",
		name: "Markets",
		category: "market",
		layers: ["money", "business"],
		tier: 1,
		aliases: ["financial markets", "exchanges"],
		description: "Venues where claims and goods are priced. 'The market' is not a person; it is an aggregation of orders under rules.",
		role: "Discover prices and reallocate risk — imperfectly.",
		relatedSystems: [
			"investors",
			"capital",
			"media"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "debt",
		name: "Debt",
		category: "economic",
		layers: ["money", "power"],
		tier: 1,
		description: "Outstanding credit. A claim that does not share upside the way equity does. High aggregate debt raises fragility to rate and income shocks.",
		role: "Stock counterpart to the credit flow.",
		relatedSystems: [
			"credit",
			"banks",
			"interest-rates"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "regulators",
		name: "Regulators",
		category: "government",
		layers: ["power"],
		tier: 1,
		description: "Agencies that write and enforce rules under statute. Not identical to 'the government' and not automatically captured or public-spirited.",
		role: "Translate law into licenses, standards, and penalties.",
		relatedSystems: [
			"government",
			"lobbying",
			"courts",
			"business-firms"
		],
		evidenceLevel: "established",
		tensions: [{
			a: "Expertise",
			b: "Democratic control"
		}]
	}),
	N({
		id: "lobbying",
		name: "Lobbying",
		category: "institution",
		layers: ["power", "business"],
		tier: 1,
		description: "Legal organized persuasion of officials. Includes advocacy by firms, unions, and NGOs. Distinct from bribery; still a channel of unequal voice.",
		role: "Transmit organized preferences into the rule-making process.",
		relatedSystems: [
			"government",
			"regulators",
			"political-influence",
			"business-firms"
		],
		evidenceLevel: "observed",
		claims: [{
			text: "Lobbying is a lawful and documented practice in many democracies.",
			evidence: "established"
		}, {
			text: "It systematically determines policy against median voters.",
			evidence: "contested"
		}]
	}),
	N({
		id: "courts",
		name: "Courts",
		category: "institution",
		layers: ["power"],
		tier: 1,
		description: "Adjudicative bodies that interpret law, resolve disputes, and constrain other institutions — to the degree independence and capacity hold.",
		role: "Settle conflicts and review agency action.",
		relatedSystems: [
			"government",
			"regulators",
			"business-firms"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "political-influence",
		name: "Political influence",
		category: "economic",
		layers: ["power"],
		tier: 1,
		description: "Ability to shape collective decisions without necessarily holding office: money, media, networks, expertise, street presence. Not a synonym for conspiracy.",
		role: "A family of mechanisms between private actors and public authority.",
		relatedSystems: [
			"lobbying",
			"media",
			"public-opinion",
			"capital"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "public-pressure",
		name: "Public pressure",
		category: "human",
		layers: ["power", "information"],
		tier: 1,
		aliases: ["protest", "backlash"],
		description: "Organized or viral public demand that officials or firms change course. A counterweight to quiet lobbying — when it can sustain attention.",
		role: "Raise the political cost of inaction or of a policy.",
		relatedSystems: [
			"public-opinion",
			"media",
			"government"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "semiconductors",
		name: "Semiconductors",
		category: "resource",
		layers: ["supply", "ai"],
		tier: 1,
		importance: 8,
		aliases: ["chips"],
		description: "The physical substrate of computing. Design, equipment, materials, and fabrication are specialized and globally split.",
		role: "Bind software ambition to a slow, expensive, geographic supply chain.",
		relatedSystems: [
			"gpus",
			"chip-foundries",
			"hardware",
			"manufacturing"
		],
		evidenceLevel: "established",
		geographicNote: "Leading-edge manufacturing is concentrated in East Asia; lithography equipment is concentrated in Europe; design is concentrated in the US and elsewhere."
	}),
	N({
		id: "hardware",
		name: "Hardware",
		category: "infrastructure",
		layers: ["supply", "ai"],
		tier: 1,
		aliases: ["devices", "servers"],
		description: "Physical machines: phones, PCs, servers, networking. The body software inhabits.",
		role: "Deliver compute and interfaces to people and data centers.",
		relatedSystems: [
			"semiconductors",
			"manufacturing",
			"data-centers"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "data-centers",
		name: "Data centers",
		category: "infrastructure",
		layers: [
			"supply",
			"ai",
			"data"
		],
		tier: 1,
		description: "Buildings that pack compute, storage, and networking with power and cooling. The physical form of 'the cloud'.",
		role: "Host other people's software and models.",
		relatedSystems: [
			"cloud-infrastructure",
			"energy",
			"hardware"
		],
		evidenceLevel: "established",
		geographicNote: "Sited where power, land, fiber, and permits align — often clustered."
	}),
	N({
		id: "cloud-infrastructure",
		name: "Cloud infrastructure",
		category: "infrastructure",
		layers: [
			"supply",
			"ai",
			"business"
		],
		tier: 1,
		aliases: ["cloud", "hyperscalers"],
		description: "On-demand compute, storage, and networking sold as a service. A few large providers dominate many markets. This node is the type, not a named vendor.",
		role: "Rent the factory in which software and training run.",
		relatedSystems: [
			"data-centers",
			"training-infrastructure",
			"software"
		],
		evidenceLevel: "observed",
		whoBenefits: ["Providers with scale", "Startups that avoid capex"],
		tensions: [{
			a: "Convenience",
			b: "Concentration and lock-in"
		}]
	}),
	N({
		id: "energy",
		name: "Energy",
		category: "resource",
		layers: ["supply", "ai"],
		tier: 1,
		aliases: ["electricity", "power"],
		description: "Work in physical form. Binding constraint for data centers, manufacturing, and households. Mix and carbon intensity vary by place.",
		role: "Ultimate input to computation and industry.",
		relatedSystems: ["data-centers", "manufacturing"],
		evidenceLevel: "established"
	}),
	N({
		id: "manufacturing",
		name: "Manufacturing",
		category: "infrastructure",
		layers: ["supply", "labor"],
		tier: 1,
		description: "Transformation of materials into components and goods. Still the base of hardware and many consumer products.",
		role: "Make the physical world of the graph.",
		relatedSystems: [
			"raw-materials",
			"semiconductors",
			"labor"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "employees",
		name: "Employees",
		category: "human",
		layers: ["labor", "business"],
		tier: 1,
		aliases: ["staff"],
		description: "People in a wage or salary relationship with a firm. Receive pay; produce output; generate workplace data.",
		role: "The contractual form of much labor.",
		relatedSystems: [
			"labor",
			"wages",
			"productivity",
			"business-firms"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "skills",
		name: "Skills",
		category: "resource",
		layers: ["labor"],
		tier: 1,
		aliases: ["human capital"],
		description: "Learned capabilities that make labor productive in particular tasks. Depreciate when tools change.",
		role: "Complement or substitute relative to automation.",
		relatedSystems: [
			"universities",
			"job-transformation",
			"wages"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "job-transformation",
		name: "Job transformation",
		category: "economic",
		layers: ["labor", "ai"],
		tier: 1,
		aliases: ["task change", "displacement"],
		description: "The rewriting of task bundles inside occupations. Distinct from 'jobs disappearing' as a headline. Some tasks vanish, some appear, many mix.",
		role: "The labor-market expression of automation and demand shifts.",
		relatedSystems: [
			"automation",
			"skills",
			"workers"
		],
		evidenceLevel: "observed",
		claims: [{
			text: "Task content of occupations changes continuously.",
			evidence: "established"
		}, {
			text: "AI will eliminate most jobs in a short period.",
			evidence: "speculative"
		}]
	}),
	N({
		id: "productivity",
		name: "Productivity",
		category: "economic",
		layers: ["labor", "business"],
		tier: 1,
		description: "Output per input, usually per hour. Raised by tools, organization, and skill. Distribution of the gains is a separate question.",
		role: "The real resource that wages, profits, and prices ultimately draw on.",
		relatedSystems: [
			"automation",
			"profit",
			"wages"
		],
		evidenceLevel: "established",
		tensions: [{
			a: "Measured output",
			b: "Unmeasured quality and care"
		}]
	}),
	N({
		id: "consumers",
		name: "Consumers",
		category: "human",
		layers: [
			"money",
			"business",
			"psychology"
		],
		tier: 1,
		aliases: ["customers", "buyers"],
		description: "People in their role as purchasers. Overlap with users and workers, but the cash register is the point.",
		role: "Close the revenue loop.",
		relatedSystems: [
			"consumption",
			"products",
			"advertising"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "curiosity",
		name: "Curiosity",
		category: "psychological",
		layers: ["psychology"],
		tier: 2,
		description: "Drive to close information gaps. Feeds exploration and also clickbait that fakes a gap.",
		role: "A mechanism that attention systems can hook.",
		relatedSystems: ["attention", "novelty"],
		evidenceLevel: "observed"
	}),
	N({
		id: "reward",
		name: "Reward",
		category: "psychological",
		layers: ["psychology"],
		tier: 2,
		description: "Experienced payoff that reinforces behavior. Variable schedules are widely used in product design.",
		role: "Glue of habit loops.",
		relatedSystems: ["habit", "engagement"],
		evidenceLevel: "observed"
	}),
	N({
		id: "fear",
		name: "Fear",
		category: "psychological",
		layers: ["psychology", "information"],
		tier: 2,
		description: "Threat response that commandeers attention. Useful for survival; expensive as a media diet.",
		role: "High-salience input to attention.",
		relatedSystems: ["attention", "media"],
		evidenceLevel: "observed"
	}),
	N({
		id: "identity",
		name: "Identity",
		category: "psychological",
		layers: ["psychology"],
		tier: 2,
		description: "Stories of who we are, including group membership. Shapes consumption, media, and politics.",
		role: "A filter on what counts as 'for people like me'.",
		relatedSystems: [
			"tribal-behavior",
			"consumption",
			"public-opinion"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "tribal-behavior",
		name: "Tribal behavior",
		category: "psychological",
		layers: ["psychology", "power"],
		tier: 2,
		aliases: ["in-group", "coalition"],
		description: "Coalition and in-group/out-group dynamics. A recurring pattern in politics and online crowds — not a claim that humans are only tribal.",
		role: "Shapes which information is trusted and which groups can mobilize.",
		relatedSystems: [
			"identity",
			"public-opinion",
			"social-proof"
		],
		evidenceLevel: "observed",
		uncertainties: ["How much of online polarization is tribal versus incentive-driven content supply"]
	}),
	N({
		id: "social-proof",
		name: "Social proof",
		category: "psychological",
		layers: ["psychology"],
		tier: 2,
		description: "Using others' behavior as evidence. Rankings, reviews, and like-counts industrialize it.",
		role: "Cheap heuristic; also a manipulation surface.",
		relatedSystems: ["engagement", "trust"],
		evidenceLevel: "observed"
	}),
	N({
		id: "novelty",
		name: "Novelty",
		category: "psychological",
		layers: ["psychology"],
		tier: 2,
		description: "Newness as a salience cue. Feeds both learning and infinite-scroll design.",
		role: "Competes with habit for attention.",
		relatedSystems: ["attention", "curiosity"],
		evidenceLevel: "observed"
	}),
	N({
		id: "loss-aversion",
		name: "Loss aversion",
		category: "psychological",
		layers: ["psychology", "business"],
		tier: 2,
		description: "Losses often loom larger than equal gains in experimental settings. Used in pricing and retention; not a universal law of every decision.",
		role: "A pricing and UX lever.",
		relatedSystems: ["consumption", "retention"],
		evidenceLevel: "observed",
		uncertainties: ["Effect sizes vary by context; replication debates exist in parts of the literature"]
	}),
	N({
		id: "scarcity",
		name: "Scarcity",
		category: "psychological",
		layers: ["psychology", "business"],
		tier: 2,
		description: "Perceived shortage that raises urgency. Sometimes real, sometimes staged.",
		role: "Accelerant for attention and purchase.",
		relatedSystems: ["attention", "consumption"],
		evidenceLevel: "observed"
	}),
	N({
		id: "publications",
		name: "Publications",
		category: "information-system",
		layers: ["information", "ai"],
		tier: 2,
		aliases: ["papers", "journals"],
		description: "The formal record of research. Slow, status-bearing, and increasingly paralleled by preprints and blogs.",
		role: "Move ideas from labs toward industry and policy.",
		relatedSystems: [
			"researchers",
			"universities",
			"ai-laboratories"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "data-storage",
		name: "Data storage",
		category: "infrastructure",
		layers: ["data"],
		tier: 2,
		description: "Retention of records. Creates option value and breach surface.",
		role: "Hold collection until analysis.",
		relatedSystems: [
			"data-collection",
			"cloud-infrastructure",
			"privacy"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "applications",
		name: "Applications",
		category: "technology",
		layers: ["ai", "business"],
		tier: 2,
		aliases: ["apps", "products wrapping models"],
		description: "Software products that wrap models, data, and UX. Where most people meet AI.",
		role: "Deliver inference into a workflow.",
		relatedSystems: [
			"inference",
			"developers",
			"users"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "advertisers",
		name: "Advertisers",
		category: "company",
		layers: ["business", "money"],
		tier: 2,
		description: "Organizations that buy attention. Their budgets are the cash engine of ad-supported media and platforms.",
		role: "Pay for inventory.",
		relatedSystems: [
			"advertising",
			"social-platforms",
			"revenue"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "developers",
		name: "Developers",
		category: "human",
		layers: ["labor", "ai"],
		tier: 2,
		aliases: ["software engineers"],
		description: "People who build and maintain software and model integrations.",
		role: "Translate models and requirements into running systems.",
		relatedSystems: [
			"software",
			"applications",
			"ai-laboratories"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "software",
		name: "Software",
		category: "technology",
		layers: [
			"supply",
			"business",
			"ai"
		],
		tier: 2,
		description: "Instructions that run on hardware. High fixed cost, low marginal copy cost — a core economic peculiarity of the digital world.",
		role: "Encode processes; sit on top of chips and clouds.",
		relatedSystems: [
			"hardware",
			"cloud-infrastructure",
			"developers"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "shareholder-returns",
		name: "Shareholder returns",
		category: "economic",
		layers: ["money"],
		tier: 2,
		aliases: ["dividends", "buybacks"],
		description: "Cash or price appreciation delivered to owners. One use of profit, not the only one.",
		role: "Close the investor loop.",
		relatedSystems: [
			"profit",
			"investors",
			"capital"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "taxes",
		name: "Taxes",
		category: "economic",
		layers: ["money", "power"],
		tier: 2,
		description: "Compulsory transfers to government. Fund public goods and reshape after-tax incentives.",
		role: "Link private cash flows to public capacity.",
		relatedSystems: [
			"government",
			"revenue",
			"consumers"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "interest-rates",
		name: "Interest rates",
		category: "economic",
		layers: ["money", "power"],
		tier: 2,
		aliases: ["cost of capital", "policy rate"],
		description: "The price of time and risk in credit markets, strongly influenced by central banks in many economies. A high-leverage node for housing, investment, and valuations.",
		role: "Discount the future.",
		relatedSystems: [
			"credit",
			"capital",
			"banks"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "universities",
		name: "Universities",
		category: "institution",
		layers: [
			"labor",
			"information",
			"ai"
		],
		tier: 2,
		aliases: ["higher education"],
		description: "Institutions that credential, teach, and host much basic research. Funded by a mix of states, students, donors, and industry.",
		role: "Produce skills and publications; a talent pipeline for labs and firms.",
		relatedSystems: [
			"researchers",
			"skills",
			"publications"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "natural-resources",
		name: "Natural resources",
		category: "resource",
		layers: ["supply"],
		tier: 2,
		aliases: ["minerals", "fuels"],
		description: "Extracted inputs: energy minerals, metals, water, land. Geography is not optional.",
		role: "Start of many supply chains.",
		relatedSystems: ["raw-materials", "energy"],
		evidenceLevel: "established",
		geographicNote: "Deposits and water are unevenly distributed; processing is often elsewhere."
	}),
	N({
		id: "chip-foundries",
		name: "Chip foundries",
		category: "company",
		layers: ["supply", "ai"],
		tier: 2,
		aliases: ["fabs", "foundries"],
		description: "Plants that fabricate chips for designers. Leading-edge capacity is scarce and slow to copy. Archetype, not a named company node.",
		role: "Turn designs and materials into working silicon.",
		relatedSystems: [
			"semiconductors",
			"gpus",
			"manufacturing"
		],
		evidenceLevel: "established",
		geographicNote: "A very small number of firms operate at the leading process nodes, with sites concentrated in East Asia."
	}),
	N({
		id: "supply-chains",
		name: "Supply chains",
		category: "infrastructure",
		layers: ["supply"],
		tier: 2,
		description: "The networked logistics of making and moving goods. Efficiency often traded against redundancy.",
		role: "Connect resources to consumers through many hands.",
		relatedSystems: ["manufacturing", "distribution"],
		evidenceLevel: "established",
		tensions: [{
			a: "Just-in-time cost",
			b: "Resilience"
		}]
	}),
	N({
		id: "switching-costs",
		name: "Switching costs",
		category: "economic",
		layers: ["business"],
		tier: 2,
		description: "Friction of leaving a product: data, habits, contracts, retraining. A quiet form of power.",
		role: "Support retention and pricing power.",
		relatedSystems: [
			"moats",
			"habit",
			"cloud-infrastructure"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "moats",
		name: "Moats",
		category: "economic",
		layers: ["business"],
		tier: 2,
		aliases: ["barriers to entry"],
		description: "Durable advantages: network effects, scale, switching costs, IP, regulation. A metaphor from investors, not a physical wall.",
		role: "Protect returns from competition — when they actually exist.",
		relatedSystems: [
			"network-effects",
			"switching-costs",
			"pricing-power"
		],
		evidenceLevel: "plausible",
		uncertainties: ["Many claimed moats are temporary"]
	}),
	N({
		id: "pricing-power",
		name: "Pricing power",
		category: "economic",
		layers: ["business", "money"],
		tier: 2,
		description: "Ability to raise price without losing the business. A symptom of scarce alternatives or strong brands.",
		role: "Translate advantage into margin.",
		relatedSystems: [
			"moats",
			"competition",
			"margins"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "economies-of-scale",
		name: "Economies of scale",
		category: "economic",
		layers: ["business", "supply"],
		tier: 2,
		description: "Unit cost falling as volume rises. Software and fabs both show versions of this, for different reasons.",
		role: "Reward size; can entrench leaders.",
		relatedSystems: [
			"cloud-infrastructure",
			"manufacturing",
			"margins"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "innovation",
		name: "Innovation",
		category: "economic",
		layers: ["business", "ai"],
		tier: 2,
		description: "New combinations that customers or processes adopt. Not the same as patents or press releases.",
		role: "Reset products and cost curves; raise the competitive bar.",
		relatedSystems: [
			"competition",
			"products",
			"researchers"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "inequality",
		name: "Inequality",
		category: "economic",
		layers: [
			"labor",
			"money",
			"power"
		],
		tier: 2,
		description: "Uneven distribution of income, wealth, or capability. Causes and remedies are contested; the fact of dispersion is not.",
		role: "An outcome of markets, policy, and inheritance that then feeds back into power and demand.",
		relatedSystems: [
			"wages",
			"capital",
			"political-influence"
		],
		evidenceLevel: "observed",
		claims: [{
			text: "Income and wealth are unevenly distributed in measured economies.",
			evidence: "established"
		}, {
			text: "A single cause (technology, trade, policy) dominates.",
			evidence: "contested"
		}]
	}),
	N({
		id: "reinvestment",
		name: "Reinvestment",
		category: "economic",
		layers: ["money", "business"],
		tier: 2,
		description: "Plowing surplus back into capacity, R&D, or acquisitions rather than distributing it.",
		role: "The firm's internal capital market.",
		relatedSystems: [
			"profit",
			"growth",
			"innovation"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "growth",
		name: "Growth",
		category: "economic",
		layers: ["business", "money"],
		tier: 2,
		description: "Expansion of output, users, or revenue. A goal for many firms and states; not identical to welfare.",
		role: "Scale that can improve unit economics or merely inflate.",
		relatedSystems: [
			"reinvestment",
			"revenue",
			"labor"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "workers",
		name: "Workers",
		category: "human",
		layers: ["labor"],
		tier: 2,
		description: "People who sell labor, including contractors and informal work — broader than 'employees'.",
		role: "The human supply of labor.",
		relatedSystems: [
			"labor",
			"employees",
			"job-transformation"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "wages",
		name: "Wages",
		category: "economic",
		layers: ["labor", "money"],
		tier: 2,
		aliases: ["pay", "compensation"],
		description: "The price of labor. Set by bargaining, productivity, law, and outside options.",
		role: "Link production to household consumption.",
		relatedSystems: [
			"employees",
			"consumption",
			"inequality"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "convenience",
		name: "Convenience",
		category: "psychological",
		layers: ["psychology", "business"],
		tier: 2,
		description: "Low friction. A dominant consumer preference and a competitive weapon.",
		role: "Makes habit and lock-in easier.",
		relatedSystems: ["habit", "distribution"],
		evidenceLevel: "observed"
	}),
	N({
		id: "authority",
		name: "Authority",
		category: "psychological",
		layers: ["psychology", "power"],
		tier: 2,
		description: "Deference to credentialed or official sources. Can transmit expertise or launder error.",
		role: "A shortcut for trust.",
		relatedSystems: [
			"trust",
			"government",
			"media"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "conversion",
		name: "Conversion",
		category: "economic",
		layers: ["business"],
		tier: 2,
		description: "Turning a visitor or lead into a desired action, often a purchase.",
		role: "The hinge of the funnel.",
		relatedSystems: ["customer-acquisition", "revenue"],
		evidenceLevel: "established"
	}),
	N({
		id: "retention",
		name: "Retention",
		category: "economic",
		layers: ["business", "psychology"],
		tier: 2,
		description: "Keeping a customer or user. Usually cheaper than acquiring another — hence habit and switching-cost design.",
		role: "Stabilize revenue.",
		relatedSystems: [
			"habit",
			"ltv",
			"switching-costs"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "cac",
		name: "CAC",
		category: "economic",
		layers: ["business"],
		tier: 2,
		aliases: ["customer acquisition cost"],
		description: "Fully loaded cost to acquire a customer. A constraint on paid growth.",
		role: "Price of the funnel.",
		relatedSystems: [
			"customer-acquisition",
			"ltv",
			"advertising"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "ltv",
		name: "LTV",
		category: "economic",
		layers: ["business"],
		tier: 2,
		aliases: ["lifetime value"],
		description: "Expected discounted gross profit from a customer. Often estimated badly; still a governing ratio with CAC.",
		role: "Ceiling on what acquisition may cost.",
		relatedSystems: [
			"retention",
			"cac",
			"profit"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "margins",
		name: "Margins",
		category: "economic",
		layers: ["business", "money"],
		tier: 2,
		description: "Profit as a share of revenue. Encode pricing power and cost structure.",
		role: "A compact health metric of the offer.",
		relatedSystems: [
			"profit",
			"pricing-power",
			"economies-of-scale"
		],
		evidenceLevel: "established"
	}),
	N({
		id: "search-platforms",
		name: "Search platforms",
		category: "company",
		layers: ["information", "business"],
		tier: 2,
		aliases: ["search engines"],
		description: "Services that rank the web or an app corpus in response to a query. A major distribution chokepoint. Archetype, not a named firm.",
		role: "Allocate discovery; sell intent-rich ads.",
		relatedSystems: [
			"advertising",
			"distribution",
			"recommendation-algorithms"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "information-power",
		name: "Information power",
		category: "economic",
		layers: ["power", "information"],
		tier: 2,
		description: "Ability to shape what others know, see, or believe. Distinct from formal authority and from capital, though often correlated.",
		role: "A mechanism of influence via agenda and framing.",
		relatedSystems: [
			"media",
			"social-platforms",
			"political-influence"
		],
		evidenceLevel: "plausible"
	}),
	N({
		id: "market-power",
		name: "Market power",
		category: "economic",
		layers: ["business", "power"],
		tier: 2,
		description: "Ability to set terms without losing the market. The economic name for weak competition.",
		role: "Translate structure into price and politics.",
		relatedSystems: [
			"competition",
			"pricing-power",
			"regulators"
		],
		evidenceLevel: "observed"
	}),
	N({
		id: "raw-materials",
		name: "Raw materials",
		category: "resource",
		layers: ["supply"],
		tier: 2,
		description: "Processed resources ready for manufacturing: chemicals, metals, substrates, gases.",
		role: "Mid-chain between extraction and fabrication.",
		relatedSystems: ["natural-resources", "manufacturing"],
		evidenceLevel: "established"
	})
];
var LOOPS = [
	{
		id: "attention-loop",
		name: "Attention loop",
		summary: "Content wins attention, which becomes engagement data, which improves targeting, which wins more attention.",
		nodeIds: [
			"content",
			"attention",
			"engagement",
			"data-collection",
			"personalization",
			"recommendation-algorithms",
			"users",
			"social-platforms"
		],
		interpretation: "A reinforcing loop observed in many consumer products. Whether it improves wellbeing depends on the ranking objective — an interpretation, not a law.",
		evidenceLevel: "observed"
	},
	{
		id: "capital-loop",
		name: "Capital loop",
		summary: "Revenue can become profit, which is reinvested into capacity and products, which can produce more revenue.",
		nodeIds: [
			"revenue",
			"profit",
			"reinvestment",
			"growth",
			"investors",
			"capital",
			"business-firms"
		],
		interpretation: "The textbook firm flywheel. It fails when demand, credit, or competition break the residual. Not every firm is in this loop.",
		evidenceLevel: "established"
	},
	{
		id: "ai-loop",
		name: "AI data loop",
		summary: "Users interact, generating data that improves models and products, which attract more users.",
		nodeIds: [
			"users",
			"data",
			"datasets",
			"applications",
			"inference",
			"llms"
		],
		interpretation: "A classic data-network story. It is empirically visible in some products and over-claimed in others. New synthetic data may also pollute the loop (hypothesis).",
		evidenceLevel: "observed"
	},
	{
		id: "competition-loop",
		name: "Competition loop",
		summary: "Rival innovation forces a response, which raises the technological bar and the market's expectations.",
		nodeIds: [
			"competition",
			"innovation",
			"products"
		],
		interpretation: "Can raise consumer surplus or burn cash in an arms race. Outcome depends on entry conditions and capital access.",
		evidenceLevel: "observed"
	}
];
var SCENARIOS = [
	{
		id: "cheap-inference",
		title: "AI inference becomes 10× cheaper",
		prompt: "What if serving a model costs an order of magnitude less?",
		summary: "Lower unit cost tends to expand use, wrap more workflows, and pressure labor in routine cognitive tasks — while also inviting new products. Not a forecast of 'full automation'.",
		shocks: [{
			nodeId: "inference",
			direction: "down",
			label: "Unit cost of serving drops"
		}, {
			nodeId: "gpus",
			direction: "down",
			label: "Effective compute per dollar rises"
		}],
		effects: [
			{
				nodeId: "applications",
				order: 1,
				text: "More features can sit on always-on models; new wrappers appear.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "automation",
				order: 1,
				text: "A wider set of tasks clears the cost bar for machine substitution or complement.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "job-transformation",
				order: 2,
				text: "Task bundles in offices and support work rewrite faster; net jobs remain contested.",
				evidenceLevel: "contested"
			},
			{
				nodeId: "energy",
				order: 2,
				text: "Cheaper serving can increase total energy via rebound even if each query is leaner.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "revenue",
				order: 3,
				text: "Vendors may grow volume while price per unit falls — margin direction is not determined.",
				evidenceLevel: "speculative"
			}
		],
		tensions: [{
			a: "Abundance of generation",
			b: "Evaluation and trust"
		}, {
			a: "Productivity",
			b: "Demand for particular tasks"
		}]
	},
	{
		id: "chip-shock",
		title: "Semiconductor supply tightens",
		prompt: "What if leading-edge chip supply falls?",
		summary: "Training and some inference are physically gated. A supply shock hits labs, clouds, and device makers before it hits slogans about 'software eating the world'.",
		shocks: [{
			nodeId: "semiconductors",
			direction: "down",
			label: "Output or export of advanced chips falls"
		}, {
			nodeId: "chip-foundries",
			direction: "break",
			label: "Capacity or access interrupted"
		}],
		effects: [
			{
				nodeId: "gpus",
				order: 1,
				text: "Allocation tightens; prices and wait times rise.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "training-infrastructure",
				order: 1,
				text: "New clusters slip; existing owners gain relative advantage.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "ai-laboratories",
				order: 2,
				text: "Frontier runs concentrate further among those with inventory.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "hardware",
				order: 2,
				text: "Device and server bills of materials inflate or spec down.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "cloud-infrastructure",
				order: 3,
				text: "Cloud GPU prices and reserved capacity become a strategic chokepoint.",
				evidenceLevel: "plausible"
			}
		],
		tensions: [{
			a: "Geographic concentration",
			b: "Demand for resilience"
		}, {
			a: "National industrial policy",
			b: "Open trade in tools"
		}]
	},
	{
		id: "ad-collapse",
		title: "Advertising revenue collapses",
		prompt: "What if advertisers sharply cut digital spend?",
		summary: "Many 'free' information products are ad-financed. A demand shock in ads is a supply shock in journalism and consumer platforms.",
		shocks: [{
			nodeId: "advertising",
			direction: "down",
			label: "Ad budgets contract"
		}],
		effects: [
			{
				nodeId: "social-platforms",
				order: 1,
				text: "Primary cash engine weakens; product and headcount respond.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "media",
				order: 1,
				text: "Ad-funded newsrooms shrink or seek patrons and paywalls.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "advertisers",
				order: 1,
				text: "Spend reallocates to performance channels or stops.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "journalists",
				order: 2,
				text: "Employment in original reporting is pressured where ads paid the bills.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "users",
				order: 3,
				text: "More paywalls, more aggressive remaining ads, or product sunsets.",
				evidenceLevel: "plausible"
			}
		],
		tensions: [{
			a: "Free access",
			b: "Sustainable reporting"
		}, {
			a: "Attention inventory",
			b: "Advertiser ROI"
		}]
	},
	{
		id: "platform-exodus",
		title: "A major platform loses users",
		prompt: "What if a large social platform's user base breaks?",
		summary: "Network effects run in reverse. Advertisers, creators, and ranking data follow the people — with lags and stranded habits.",
		shocks: [{
			nodeId: "social-platforms",
			direction: "down",
			label: "Active users fall sharply"
		}],
		effects: [
			{
				nodeId: "network-effects",
				order: 1,
				text: "Value of remaining connections drops; exit can accelerate.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "advertising",
				order: 1,
				text: "Inventory and targeting quality decline with the audience.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "recommendation-algorithms",
				order: 2,
				text: "Less fresh interaction data; cold-start and spam problems worsen.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "content",
				order: 2,
				text: "Creators reallocate effort to remaining venues.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "public-opinion",
				order: 3,
				text: "The public square fragments further; measurement of 'the public' gets noisier.",
				evidenceLevel: "plausible"
			}
		],
		tensions: [{
			a: "Multi-homing freedom",
			b: "Lost shared context"
		}, {
			a: "Creator livelihoods",
			b: "Platform dependence"
		}]
	},
	{
		id: "automation-productivity",
		title: "Automation raises productivity 30%",
		prompt: "What if automation lifts output per hour by about a third in adopting sectors?",
		summary: "Productivity is not employment. Gains can show up as cheaper goods, higher profits, higher wages, fewer hours, or some mix — institutions decide.",
		shocks: [{
			nodeId: "automation",
			direction: "up",
			label: "Task automation accelerates"
		}],
		effects: [
			{
				nodeId: "productivity",
				order: 1,
				text: "Measured output per hour rises in adopting firms.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "profit",
				order: 1,
				text: "Unit costs fall unless prices or wages fully absorb the gain.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "job-transformation",
				order: 2,
				text: "Some tasks vanish, some are created, many are mixed; occupation labels lag.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "wages",
				order: 2,
				text: "Complements may see premiums; substitutes see pressure. Net is contested.",
				evidenceLevel: "contested"
			},
			{
				nodeId: "consumption",
				order: 3,
				text: "If prices fall or incomes rise, real consumption can expand.",
				evidenceLevel: "plausible"
			}
		],
		tensions: [{
			a: "Productivity",
			b: "Demand for particular tasks"
		}, {
			a: "Owner residual",
			b: "Worker residual"
		}]
	},
	{
		id: "rate-hike",
		title: "Interest rates rise",
		prompt: "What if the cost of borrowing and the discount rate jump?",
		summary: "Rates reprice long-duration claims: housing, venture, and growth stocks first. Credit-dependent consumption and investment slow.",
		shocks: [{
			nodeId: "interest-rates",
			direction: "up",
			label: "Policy and market rates step up"
		}],
		effects: [
			{
				nodeId: "credit",
				order: 1,
				text: "New borrowing becomes more expensive; some projects fail screens.",
				evidenceLevel: "established"
			},
			{
				nodeId: "capital",
				order: 1,
				text: "Present value of distant cash flows falls.",
				evidenceLevel: "established"
			},
			{
				nodeId: "debt",
				order: 2,
				text: "Floating-rate and refinancing borrowers feel income stress.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "growth",
				order: 2,
				text: "Rate-sensitive expansion (construction, unprofitable growth firms) cools.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "consumption",
				order: 3,
				text: "Credit-funded durables and housing demand typically soften.",
				evidenceLevel: "observed"
			}
		],
		tensions: [{
			a: "Inflation control",
			b: "Debt-service stress"
		}, {
			a: "Savers",
			b: "Borrowers"
		}]
	},
	{
		id: "data-lockdown",
		title: "Data access is heavily restricted",
		prompt: "What if collection, brokerage, and training use of personal and web data are sharply limited?",
		summary: "Prediction businesses that assumed cheap traces must retool. Privacy rises as a constraint; some products get worse, some get more consensual.",
		shocks: [{
			nodeId: "data-collection",
			direction: "down",
			label: "Legal and technical limits bind"
		}, {
			nodeId: "data-brokers",
			direction: "break",
			label: "Secondary markets freeze"
		}],
		effects: [
			{
				nodeId: "privacy",
				order: 1,
				text: "Default collection shrinks; compliance becomes a product feature.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "advertising",
				order: 1,
				text: "Targeting precision falls; contextual and first-party strategies gain.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "datasets",
				order: 2,
				text: "Web-scale corpora face licensing or exclusion; quality and bias shift.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "machine-learning",
				order: 2,
				text: "Models trained on less surveillance data; synthetic and licensed data fill some gaps.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "personalization",
				order: 3,
				text: "Feeds and prices become less individually fitted — for better and worse.",
				evidenceLevel: "plausible"
			}
		],
		tensions: [{
			a: "Privacy",
			b: "Personalization"
		}, {
			a: "Open research data",
			b: "Consent"
		}]
	},
	{
		id: "supply-break",
		title: "A critical supply-chain node disappears",
		prompt: "What if a key physical chokepoint — energy, a material, or a fab class — goes offline?",
		summary: "Digital systems sit on slow atoms. Removing a bottleneck node breaks dependents in order: first physical, then compute, then products.",
		shocks: [{
			nodeId: "supply-chains",
			direction: "break",
			label: "A critical hop fails"
		}],
		effects: [
			{
				nodeId: "manufacturing",
				order: 1,
				text: "Lines stop when a unique input is missing.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "semiconductors",
				order: 1,
				text: "If the hop is lithography, chemicals, or a fab, chip output falls.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "hardware",
				order: 2,
				text: "Device and server lead times blow out.",
				evidenceLevel: "observed"
			},
			{
				nodeId: "data-centers",
				order: 2,
				text: "Expansion pauses; existing capacity is hoarded.",
				evidenceLevel: "plausible"
			},
			{
				nodeId: "consumers",
				order: 3,
				text: "Prices rise or goods vanish; substitution is slow for specialized parts.",
				evidenceLevel: "observed"
			}
		],
		tensions: [{
			a: "Efficiency",
			b: "Redundancy"
		}, {
			a: "Global specialization",
			b: "National buffering"
		}]
	}
];
function norm(s) {
	return s.toLowerCase().trim();
}
function subsequenceScore(q, text) {
	let i = 0;
	for (const ch of text) {
		if (ch === q[i]) i++;
		if (i === q.length) return .35;
	}
	return 0;
}
function scoreText(q, text) {
	const t = norm(text);
	if (!t) return 0;
	if (t === q) return 1;
	if (t.startsWith(q)) return .92;
	if (t.includes(q)) return .78;
	const tokens = t.split(/[\s/&,]+/);
	for (const tok of tokens) if (tok.startsWith(q)) return .7;
	return subsequenceScore(q, t);
}
function searchGraph(query, nodes, edges, limit = 12) {
	const q = norm(query);
	if (q.length < 1) return [];
	const hits = [];
	for (const n of nodes) {
		let best = scoreText(q, n.name);
		let why = "name";
		const aliasHit = (n.aliases ?? []).reduce((m, a) => Math.max(m, scoreText(q, a)), 0);
		if (aliasHit > best) {
			best = aliasHit * .98;
			why = "alias";
		}
		const cat = scoreText(q, n.category) * .55;
		if (cat > best) {
			best = cat;
			why = "category";
		}
		const desc = n.description.toLowerCase().includes(q) ? .42 : 0;
		if (desc > best) {
			best = desc;
			why = "description";
		}
		const role = n.role.toLowerCase().includes(q) ? .4 : 0;
		if (role > best) {
			best = role;
			why = "role";
		}
		if (best >= .35) hits.push({
			id: n.id,
			name: n.name,
			category: n.category,
			score: best,
			why
		});
	}
	for (const e of edges) {
		const s = scoreText(q, e.label);
		if (s >= .7) {
			if (!hits.find((h) => h.id === e.source || h.id === e.target)) hits.push({
				id: e.source,
				name: e.label,
				category: "relationship",
				score: s * .6,
				why: "relationship"
			});
		}
	}
	hits.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
	const seen = /* @__PURE__ */ new Set();
	const unique = [];
	for (const h of hits) {
		if (seen.has(h.id)) continue;
		seen.add(h.id);
		unique.push(h);
		if (unique.length >= limit) break;
	}
	return unique;
}
function shortestPath(source, target, edges, allowed) {
	if (source === target) return {
		nodes: [source],
		edges: []
	};
	const adj = /* @__PURE__ */ new Map();
	for (const e of edges) {
		if (!allowed.has(e.source) || !allowed.has(e.target)) continue;
		const a = adj.get(e.source) ?? [];
		a.push({
			to: e.target,
			edgeId: e.id
		});
		adj.set(e.source, a);
		const b = adj.get(e.target) ?? [];
		b.push({
			to: e.source,
			edgeId: e.id
		});
		adj.set(e.target, b);
	}
	const q = [source];
	const prev = /* @__PURE__ */ new Map();
	const seen = /* @__PURE__ */ new Set([source]);
	while (q.length) {
		const cur = q.shift();
		for (const nb of adj.get(cur) ?? []) {
			if (seen.has(nb.to)) continue;
			seen.add(nb.to);
			prev.set(nb.to, {
				from: cur,
				edgeId: nb.edgeId
			});
			if (nb.to === target) {
				const nodes = [target];
				const edgeIds = [];
				let walk = target;
				while (walk !== source) {
					const p = prev.get(walk);
					edgeIds.push(p.edgeId);
					walk = p.from;
					nodes.push(walk);
				}
				nodes.reverse();
				edgeIds.reverse();
				return {
					nodes,
					edges: edgeIds
				};
			}
			q.push(nb.to);
		}
	}
	return null;
}
var MODE_EDGES = {
	money: ["money", "ownership"],
	data: ["data", "information"],
	power: [
		"influence",
		"regulation",
		"ownership",
		"dependency"
	],
	incentive: [
		"incentive",
		"money",
		"causal",
		"feedback"
	]
};
function traceFrom(startId, mode, depth, edges, nodes) {
	const nodeIds = /* @__PURE__ */ new Set([startId]);
	const edgeIds = /* @__PURE__ */ new Set();
	const hops = /* @__PURE__ */ new Map([[startId, 0]]);
	const steps = [{
		nodeId: startId,
		via: null,
		hop: 0
	}];
	if (mode === "explore" || mode === "evidence") return {
		nodeIds,
		edgeIds,
		hops,
		steps
	};
	const allowed = new Set(MODE_EDGES[mode]);
	const max = depth === 99 ? 12 : depth;
	const byId = new Map(nodes.map((n) => [n.id, n]));
	if (!byId.has(startId)) return {
		nodeIds,
		edgeIds,
		hops,
		steps
	};
	const outgoing = /* @__PURE__ */ new Map();
	const incoming = /* @__PURE__ */ new Map();
	for (const e of edges) {
		if (!allowed.has(e.type) && e.type !== "feedback") continue;
		const o = outgoing.get(e.source) ?? [];
		o.push(e);
		outgoing.set(e.source, o);
		const i = incoming.get(e.target) ?? [];
		i.push(e);
		incoming.set(e.target, i);
	}
	const queue = [{
		id: startId,
		hop: 0
	}];
	while (queue.length) {
		const { id, hop } = queue.shift();
		if (hop >= max) continue;
		const nextEdges = [...outgoing.get(id) ?? [], ...incoming.get(id) ?? []];
		for (const e of nextEdges) {
			const other = e.source === id ? e.target : e.source;
			if (!byId.has(other)) continue;
			edgeIds.add(e.id);
			if (!nodeIds.has(other)) {
				nodeIds.add(other);
				hops.set(other, hop + 1);
				steps.push({
					nodeId: other,
					via: e.label,
					hop: hop + 1
				});
				queue.push({
					id: other,
					hop: hop + 1
				});
			}
		}
	}
	return {
		nodeIds,
		edgeIds,
		hops,
		steps
	};
}
function neighborhood(id, edges, hops = 1) {
	const nodeIds = /* @__PURE__ */ new Set([id]);
	const edgeIds = /* @__PURE__ */ new Set();
	let frontier = /* @__PURE__ */ new Set([id]);
	for (let h = 0; h < hops; h++) {
		const next = /* @__PURE__ */ new Set();
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
	return {
		nodeIds,
		edgeIds
	};
}
function removalCascade(removedId, edges, nodes) {
	const dependents = /* @__PURE__ */ new Map();
	for (const e of edges) {
		const list = dependents.get(e.source) ?? [];
		list.push(e.target);
		dependents.set(e.source, list);
	}
	const first = /* @__PURE__ */ new Set();
	const second = /* @__PURE__ */ new Set();
	const third = /* @__PURE__ */ new Set();
	for (const t of dependents.get(removedId) ?? []) if (t !== removedId) first.add(t);
	for (const n of first) for (const t of dependents.get(n) ?? []) if (t !== removedId && !first.has(t)) second.add(t);
	for (const n of second) for (const t of dependents.get(n) ?? []) if (t !== removedId && !first.has(t) && !second.has(t)) third.add(t);
	const broken = edges.filter((e) => e.source === removedId || e.target === removedId).map((e) => e.id);
	const known = new Set(nodes.map((n) => n.id));
	return {
		first: [...first].filter((id) => known.has(id)),
		second: [...second].filter((id) => known.has(id)),
		third: [...third].filter((id) => known.has(id)),
		brokenEdgeIds: broken
	};
}
var LAYERS = [
	"money",
	"information",
	"data",
	"ai",
	"psychology",
	"business",
	"power",
	"supply",
	"labor"
];
var EVIDENCE_LEVELS = [
	"established",
	"observed",
	"plausible",
	"contested",
	"speculative"
];
var EDGE_TYPES = [
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
	"supply"
];
var COMPLEXITY_LEVELS = [
	"core",
	"standard",
	"full"
];
var TRACE_DEPTHS = [
	1,
	2,
	3,
	5,
	99
];
var LAYER_META = {
	money: {
		label: "Money",
		short: "Capital, credit, returns",
		blurb: "How capital, credit, revenue, and returns circulate."
	},
	information: {
		label: "Information",
		short: "Media, content, attention",
		blurb: "How stories, signals, and rankings reach people."
	},
	data: {
		label: "Data",
		short: "Collection, assets, prediction",
		blurb: "Behavior captured, stored, and turned into decisions."
	},
	ai: {
		label: "AI / Models",
		short: "Compute, models, inference",
		blurb: "The stack from chips and data to models and agents."
	},
	psychology: {
		label: "Psychology",
		short: "Attention, habit, status",
		blurb: "Mechanisms of attention, habit, trust, and identity."
	},
	business: {
		label: "Business",
		short: "Products, growth, moats",
		blurb: "How firms acquire customers, earn, and reinvest."
	},
	power: {
		label: "Power",
		short: "States, law, influence",
		blurb: "Institutional authority, lobbying, and public pressure."
	},
	supply: {
		label: "Supply chain",
		short: "Materials, chips, energy",
		blurb: "Physical dependencies from resources to devices."
	},
	labor: {
		label: "Labor",
		short: "Work, skills, automation",
		blurb: "Human work, productivity, and task transformation."
	}
};
var CATEGORY_META = {
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
	"information-system": { label: "Information system" }
};
var EVIDENCE_META = {
	established: {
		label: "Established / strongly supported",
		short: "Established",
		detail: "Widely documented with converging evidence."
	},
	observed: {
		label: "Empirically observed",
		short: "Observed",
		detail: "Repeatedly seen in markets or studies; mechanism may vary."
	},
	plausible: {
		label: "Plausible mechanism",
		short: "Plausible",
		detail: "A coherent causal story; limited or mixed measurement."
	},
	contested: {
		label: "Contested interpretation",
		short: "Contested",
		detail: "Serious disagreement about magnitude, direction, or meaning."
	},
	speculative: {
		label: "Speculative hypothesis",
		short: "Speculative",
		detail: "Forward-looking or weakly evidenced — not a fact."
	}
};
var EDGE_TYPE_META = {
	money: {
		label: "Money flow",
		blurb: "Capital, revenue, credit, or returns."
	},
	information: {
		label: "Information flow",
		blurb: "Messages, rankings, or published claims."
	},
	data: {
		label: "Data flow",
		blurb: "Captured, stored, or derived records."
	},
	incentive: {
		label: "Incentive",
		blurb: "A payoff that encourages a behavior."
	},
	dependency: {
		label: "Dependency",
		blurb: "One system requires another to function."
	},
	ownership: {
		label: "Ownership",
		blurb: "Control of equity, assets, or rights."
	},
	influence: {
		label: "Influence",
		blurb: "Ability to shape decisions without formal command."
	},
	regulation: {
		label: "Regulation",
		blurb: "Legal constraint, license, or mandate."
	},
	competition: {
		label: "Competition",
		blurb: "Rivalry for customers, talent, or capital."
	},
	feedback: {
		label: "Feedback loop",
		blurb: "Output that re-enters as input."
	},
	causal: {
		label: "Causal mechanism",
		blurb: "A proposed cause-and-effect path."
	},
	correlation: {
		label: "Correlation",
		blurb: "Moves together; cause not asserted."
	},
	supply: {
		label: "Supply-chain dependency",
		blurb: "Physical or logistical input."
	}
};
var MODE_META = {
	explore: {
		label: "Explore",
		kicker: "Inspect nodes and relationships."
	},
	incentive: {
		label: "Follow the incentive",
		kicker: "What is being optimized, and who pays?"
	},
	money: {
		label: "Follow the money",
		kicker: "Trace capital, revenue, and returns."
	},
	data: {
		label: "Follow the data",
		kicker: "Who generates, collects, and uses it?"
	},
	power: {
		label: "Follow the power",
		kicker: "Decisions, infrastructure, and access."
	},
	evidence: {
		label: "Evidence",
		kicker: "Filter by how strongly a link is supported."
	}
};
var TIER = {
	core: 0,
	standard: 1,
	full: 2
};
function allTrue(keys) {
	return Object.fromEntries(keys.map((k) => [k, true]));
}
var useGraphStore = create((set, get) => ({
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
	select: (id) => set({
		selectedId: id,
		rightPanel: id ? "inspect" : get().rightPanel,
		rightOpen: id ? true : get().rightOpen,
		mobileSheet: id ? "inspect" : get().mobileSheet,
		removedId: get().mode === "explore" ? get().removedId : get().removedId
	}),
	hover: (id) => set({ hoveredId: id }),
	setMode: (mode) => set({
		mode,
		rightPanel: mode === "evidence" ? get().rightPanel : "inspect",
		activeScenario: mode === "explore" ? get().activeScenario : get().activeScenario
	}),
	setComplexity: (complexity) => set({
		complexity,
		reheatToken: get().reheatToken + 1
	}),
	toggleLayer: (l) => set({ layers: {
		...get().layers,
		[l]: !get().layers[l]
	} }),
	toggleEvidence: (e) => set({ evidence: {
		...get().evidence,
		[e]: !get().evidence[e]
	} }),
	toggleEdgeType: (t) => set({ edgeTypes: {
		...get().edgeTypes,
		[t]: !get().edgeTypes[t]
	} }),
	setQuery: (query) => set({
		query,
		searchIndex: 0
	}),
	setSearchIndex: (searchIndex) => set({ searchIndex }),
	commitSearch: () => {
		const hits = searchGraph(get().query, NODES, EDGES);
		const hit = hits[get().searchIndex] ?? hits[0];
		if (hit) set({
			selectedId: hit.id,
			rightPanel: "inspect",
			mobileSheet: "inspect"
		});
	},
	expandNeighborhood: () => {
		const id = get().selectedId;
		if (!id) return;
		const nb = neighborhood(id, EDGES, 1);
		const extra = [...nb.nodeIds].filter((n) => !get().expandedIds.includes(n));
		set({
			expandedIds: [...get().expandedIds, ...extra],
			collapsedIds: get().collapsedIds.filter((c) => !nb.nodeIds.has(c)),
			reheatToken: get().reheatToken + 1
		});
	},
	collapseNeighborhood: () => {
		const id = get().selectedId;
		if (!id) return;
		const others = [...neighborhood(id, EDGES, 1).nodeIds].filter((n) => n !== id);
		set({
			collapsedIds: [.../* @__PURE__ */ new Set([...get().collapsedIds, ...others])],
			expandedIds: get().expandedIds.filter((e) => !others.includes(e))
		});
	},
	setRemoved: (removedId) => set({
		removedId,
		rightPanel: "system"
	}),
	setScenario: (activeScenario) => set({
		activeScenario,
		rightPanel: "scenario",
		mobileSheet: "scenario"
	}),
	setLoop: (activeLoop) => set({ activeLoop }),
	setTraceDepth: (traceDepth) => set({ traceDepth }),
	setRightPanel: (rightPanel) => set({
		rightPanel,
		rightOpen: true
	}),
	setRightOpen: (rightOpen) => set({ rightOpen }),
	toggleRightOpen: () => set({ rightOpen: !get().rightOpen }),
	toggleZenMode: () => set({ zenMode: !get().zenMode }),
	setControlsOpen: (controlsOpen) => set({ controlsOpen }),
	toggleControlsOpen: () => set({ controlsOpen: !get().controlsOpen }),
	setMobileSheet: (mobileSheet) => set({ mobileSheet }),
	dismissIntro: () => {
		try {
			localStorage.setItem("reality-graph-intro-v1", "1");
		} catch {}
		set({
			introOpen: false,
			fitToken: get().fitToken + 1
		});
	},
	toggleFrozen: () => set({ frozen: !get().frozen }),
	reheat: () => set({
		frozen: false,
		reheatToken: get().reheatToken + 1
	}),
	fit: () => set({ fitToken: get().fitToken + 1 }),
	centerSelected: () => set({ centerToken: get().centerToken + 1 }),
	toggleLabels: () => set({ showLabels: !get().showLabels }),
	toggleLoops: () => set({ showLoops: !get().showLoops }),
	setNodeSizeScale: (nodeSizeScale) => set({ nodeSizeScale }),
	setEdgeStrength: (edgeStrength) => set({
		edgeStrength,
		reheatToken: get().reheatToken + 1
	}),
	setSimStrength: (simStrength) => set({
		simStrength,
		reheatToken: get().reheatToken + 1
	}),
	setLeftOpen: (leftOpen) => set({ leftOpen }),
	setHelpOpen: (helpOpen) => set({
		helpOpen,
		rightPanel: helpOpen ? "help" : get().rightPanel
	}),
	setPathTarget: (pathTargetId) => set({ pathTargetId }),
	resetFilters: () => set({
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
		mode: "explore"
	})
}));
function nodeById(id) {
	return NODES.find((n) => n.id === id);
}
function visibleNodeSet(state) {
	const maxTier = TIER[state.complexity];
	const expanded = new Set(state.expandedIds);
	const collapsed = new Set(state.collapsedIds);
	const ids = /* @__PURE__ */ new Set();
	for (const n of NODES) {
		if (state.removedId && n.id === state.removedId) continue;
		if (collapsed.has(n.id) && n.tier > 0) continue;
		if (!(n.tier <= maxTier || expanded.has(n.id))) continue;
		if (!n.layers.some((l) => state.layers[l])) continue;
		if (!state.evidence[n.evidenceLevel]) continue;
		ids.add(n.id);
	}
	if (state.selectedId && NODES.some((n) => n.id === state.selectedId)) ids.add(state.selectedId);
	return ids;
}
function visibleEdges(state, nodes) {
	return EDGES.filter((e) => {
		if (!nodes.has(e.source) || !nodes.has(e.target)) return false;
		if (!state.edgeTypes[e.type]) return false;
		if (!state.evidence[e.evidenceLevel]) return false;
		if (!e.layers.some((l) => state.layers[l])) return false;
		return true;
	});
}
function searchHits(state) {
	return searchGraph(state.query, NODES, EDGES);
}
/** Canvas / data-encoding colors. UI chrome uses CSS tokens, not these. */
var GRAPH_THEME = {
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
	loopGlow: "rgba(196,184,150,0.35)"
};
var CATEGORY_COLOR = {
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
	"information-system": "#8a9aaa"
};
var EVIDENCE_COLOR = {
	established: "#5d9a6e",
	observed: "#5d8ab8",
	plausible: "#b8a05d",
	contested: "#c4885d",
	speculative: "#b85d5d"
};
var EDGE_COLOR = {
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
	supply: "#a09078"
};
function hexToRgba(hex, alpha) {
	const h = hex.replace("#", "");
	const n = parseInt(h, 16);
	return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${alpha})`;
}
var LAYER_HOME = {
	psychology: {
		x: 0,
		y: -420
	},
	information: {
		x: 380,
		y: -260
	},
	data: {
		x: 480,
		y: 20
	},
	ai: {
		x: 360,
		y: 300
	},
	business: {
		x: 0,
		y: 440
	},
	money: {
		x: -360,
		y: 300
	},
	power: {
		x: -480,
		y: 20
	},
	labor: {
		x: -360,
		y: -260
	},
	supply: {
		x: 40,
		y: 680
	}
};
function hashJitter(id) {
	let h = 2166136261;
	for (let i = 0; i < id.length; i++) {
		h ^= id.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	const a = (h >>> 0) % 1e3 / 1e3;
	const b = (h >>> 8) % 1e3 / 1e3;
	return {
		x: (a - .5) * 180,
		y: (b - .5) * 180
	};
}
function homeFor(node) {
	if (node.id === "human-behavior") return {
		x: 0,
		y: 0
	};
	let x = 0;
	let y = 0;
	for (const layer of node.layers) {
		x += LAYER_HOME[layer].x;
		y += LAYER_HOME[layer].y;
	}
	const n = Math.max(1, node.layers.length);
	const j = hashJitter(node.id);
	const radial = .55 + node.tier * .22;
	return {
		x: x / n * radial + j.x,
		y: y / n * radial + j.y
	};
}
var ForceSim = class {
	nodes = [];
	links = [];
	alpha = 1;
	alphaMin = .001;
	alphaDecay = .022;
	velocityDecay = .35;
	charge = -420;
	linkDistance = 92;
	linkStrength = .045;
	homeStrength = .018;
	collidePad = 4;
	centerStrength = .012;
	index = /* @__PURE__ */ new Map();
	setGraph(nodes, edges, radiusOf, keep) {
		const next = [];
		const map = /* @__PURE__ */ new Map();
		for (const n of nodes) {
			const home = homeFor(n);
			const prev = keep?.get(n.id);
			const sn = prev ? {
				...prev,
				r: radiusOf(n),
				homeX: home.x,
				homeY: home.y
			} : {
				id: n.id,
				x: home.x,
				y: home.y,
				vx: 0,
				vy: 0,
				fx: null,
				fy: null,
				r: radiusOf(n),
				homeX: home.x,
				homeY: home.y
			};
			next.push(sn);
			map.set(n.id, sn);
		}
		this.nodes = next;
		this.index = map;
		const links = [];
		for (const e of edges) {
			const s = map.get(e.source);
			const t = map.get(e.target);
			if (!s || !t) continue;
			const loopBoost = e.loopId ? .02 : 0;
			links.push({
				source: s,
				target: t,
				strength: this.linkStrength + loopBoost
			});
		}
		this.links = links;
	}
	node(id) {
		return this.index.get(id);
	}
	reheat(value = .9) {
		this.alpha = Math.max(this.alpha, value);
	}
	tick(iterations = 1) {
		if (this.alpha < this.alphaMin) return false;
		for (let k = 0; k < iterations; k++) this.step();
		return true;
	}
	step() {
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
				if (dist2 < .01) {
					dx = (Math.random() - .5) * .4;
					dy = (Math.random() - .5) * .4;
					dist2 = dx * dx + dy * dy;
				}
				const dist = Math.sqrt(dist2);
				const force = charge / dist2;
				const fx = dx / dist * force;
				const fy = dy / dist * force;
				a.vx += fx;
				a.vy += fy;
				b.vx -= fx;
				b.vy -= fy;
				const minDist = a.r + b.r + this.collidePad;
				if (dist < minDist) {
					const overlap = (minDist - dist) / dist;
					const ox = dx * overlap * .5;
					const oy = dy * overlap * .5;
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
			const dist = Math.sqrt(dx * dx + dy * dy) || .01;
			const k = (dist - rest) / dist * link.strength * alpha * (ls / .045);
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
};
var MIN_K = .18;
var MAX_K = 3.2;
var GraphEngine = class {
	canvas;
	ctx;
	hooks;
	sim = new ForceSim();
	cam = {
		x: 0,
		y: 0,
		k: .85
	};
	raf = 0;
	dpr = 1;
	w = 0;
	h = 0;
	dragging = null;
	panning = false;
	lastX = 0;
	lastY = 0;
	moved = false;
	pointers = /* @__PURE__ */ new Map();
	pinchDist = 0;
	particles = [];
	lastReheat = -1;
	lastFit = -1;
	lastCenter = -1;
	lastSig = "";
	reduced = false;
	running = false;
	hoverId = null;
	constructor(canvas, hooks) {
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
	bind() {
		this.canvas.addEventListener("pointerdown", this.onDown);
		this.canvas.addEventListener("pointermove", this.onMove);
		this.canvas.addEventListener("pointerup", this.onUp);
		this.canvas.addEventListener("pointercancel", this.onUp);
		this.canvas.addEventListener("pointerleave", this.onLeave);
		this.canvas.addEventListener("wheel", this.onWheel, { passive: false });
		this.canvas.addEventListener("dblclick", this.onDbl);
		window.addEventListener("resize", this.onResize);
	}
	unbind() {
		this.canvas.removeEventListener("pointerdown", this.onDown);
		this.canvas.removeEventListener("pointermove", this.onMove);
		this.canvas.removeEventListener("pointerup", this.onUp);
		this.canvas.removeEventListener("pointercancel", this.onUp);
		this.canvas.removeEventListener("pointerleave", this.onLeave);
		this.canvas.removeEventListener("wheel", this.onWheel);
		this.canvas.removeEventListener("dblclick", this.onDbl);
		window.removeEventListener("resize", this.onResize);
	}
	onResize = () => this.resize();
	world(sx, sy) {
		return {
			x: (sx - this.cam.x) / this.cam.k,
			y: (sy - this.cam.y) / this.cam.k
		};
	}
	screen(wx, wy) {
		return {
			x: wx * this.cam.k + this.cam.x,
			y: wy * this.cam.k + this.cam.y
		};
	}
	hit(sx, sy) {
		const { x, y } = this.world(sx, sy);
		let best = null;
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
	onDown = (ev) => {
		this.canvas.setPointerCapture(ev.pointerId);
		this.pointers.set(ev.pointerId, {
			x: ev.offsetX,
			y: ev.offsetY
		});
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
		} else this.panning = true;
	};
	onMove = (ev) => {
		if (this.pointers.has(ev.pointerId)) this.pointers.set(ev.pointerId, {
			x: ev.offsetX,
			y: ev.offsetY
		});
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
			this.sim.reheat(.25);
			return;
		}
		if (this.panning) {
			this.cam.x += dx;
			this.cam.y += dy;
			return;
		}
		const id = this.hit(ev.offsetX, ev.offsetY)?.id ?? null;
		if (id !== this.hoverId) {
			this.hoverId = id;
			this.hooks.onHover(id);
			this.canvas.style.cursor = id ? "pointer" : "grab";
		}
	};
	onUp = (ev) => {
		this.pointers.delete(ev.pointerId);
		if (this.dragging) {
			if (!this.moved) this.hooks.onSelect(this.dragging.id, ev.shiftKey);
			this.dragging.fx = null;
			this.dragging.fy = null;
			this.dragging = null;
			this.sim.reheat(.2);
		} else if (this.panning && !this.moved) this.hooks.onSelect(null, false);
		this.panning = false;
		this.pinchDist = 0;
		try {
			this.canvas.releasePointerCapture(ev.pointerId);
		} catch {}
	};
	onLeave = () => {
		if (this.hoverId) {
			this.hoverId = null;
			this.hooks.onHover(null);
		}
	};
	onWheel = (ev) => {
		ev.preventDefault();
		const factor = ev.deltaY < 0 ? 1.08 : .92;
		this.zoomAt(ev.offsetX, ev.offsetY, factor);
	};
	onDbl = (ev) => {
		const node = this.hit(ev.offsetX, ev.offsetY);
		if (node) this.centerOn(node.id);
	};
	zoomAt(sx, sy, factor) {
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
		let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
		for (const n of nodes) {
			minX = Math.min(minX, n.x - n.r);
			minY = Math.min(minY, n.y - n.r);
			maxX = Math.max(maxX, n.x + n.r);
			maxY = Math.max(maxY, n.y + n.r);
		}
		const bw = Math.max(80, maxX - minX);
		const bh = Math.max(80, maxY - minY);
		const k = Math.min((this.w - 176) / bw, (this.h - 176) / bh);
		const nk = Math.min(MAX_K, Math.max(MIN_K, k));
		const cx = (minX + maxX) / 2;
		const cy = (minY + maxY) / 2;
		const tx = this.w / 2 - cx * nk;
		const ty = this.h / 2 - cy * nk;
		if (instant) this.cam = {
			x: tx,
			y: ty,
			k: nk
		};
		else {
			this.cam.k = nk;
			this.cam.x = tx;
			this.cam.y = ty;
		}
	}
	centerOn(id) {
		const n = this.sim.node(id);
		if (!n) return;
		this.cam.x = this.w / 2 - n.x * this.cam.k;
		this.cam.y = this.h / 2 - n.y * this.cam.k;
	}
	radiusOf = (n) => {
		const s = this.hooks.getState().nodeSizeScale;
		return (5.5 + n.importance * 1.15 + (n.tier === 0 ? 3 : 0)) * s;
	};
	rebuild(force = false) {
		const state = this.hooks.getState();
		const vis = visibleNodeSet(state);
		const edges = visibleEdges(state, vis);
		const nodes = this.hooks.nodes.filter((n) => vis.has(n.id));
		const sig = `${[...vis].sort().join(",")}|${edges.length}|${state.nodeSizeScale}|${state.edgeStrength}|${state.simStrength}`;
		if (!force && sig === this.lastSig) return;
		this.lastSig = sig;
		const keep = new Map(this.sim.nodes.map((n) => [n.id, n]));
		this.sim.linkStrength = .045 * state.edgeStrength;
		this.sim.charge = -420 * state.simStrength;
		this.sim.homeStrength = .018 * state.simStrength;
		this.sim.setGraph(nodes, edges, this.radiusOf, keep);
		if (force) this.sim.alpha = 1;
		else this.sim.reheat(.45);
	}
	loop = () => {
		if (!this.running) return;
		const state = this.hooks.getState();
		if (state.reheatToken !== this.lastReheat) {
			this.lastReheat = state.reheatToken;
			this.rebuild(true);
			this.sim.reheat(1);
		} else this.rebuild(false);
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
	draw(state) {
		const ctx = this.ctx;
		const { w, h, dpr, cam } = this;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.fillStyle = GRAPH_THEME.bg;
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
		if (!this.reduced && highlight.active) this.drawParticles(ctx, edges, highlight.edges, state);
		const labels = [];
		for (const n of this.sim.nodes) {
			const data = nodeMap.get(n.id);
			if (!data) continue;
			const on = highlight.nodes.has(n.id);
			const dim = highlight.active && !on;
			const selected = state.selectedId === n.id;
			const hovered = state.hoveredId === n.id;
			this.drawNode(ctx, n, data, selected, hovered, dim, state);
			if (state.showLabels && !dim && (selected || hovered || data.tier === 0 || cam.k > .72 || cam.k > .48 && data.importance >= 7)) labels.push({
				x: n.x,
				y: n.y + n.r + 10 / cam.k,
				text: data.name,
				alpha: dim ? .2 : selected || hovered ? 1 : .78,
				core: data.tier === 0
			});
		}
		this.drawLabels(ctx, labels, cam.k);
		ctx.restore();
		const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * .2, w / 2, h / 2, Math.max(w, h) * .72);
		g.addColorStop(0, "rgba(0,0,0,0)");
		g.addColorStop(1, GRAPH_THEME.vignette);
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, w, h);
	}
	highlight(state, vis, edges) {
		const nodes = /* @__PURE__ */ new Set();
		const eids = /* @__PURE__ */ new Set();
		let active = false;
		if (state.query.trim().length >= 1) {
			active = true;
			const q = state.query.toLowerCase();
			for (const n of this.hooks.nodes) {
				if (!vis.has(n.id)) continue;
				if (`${n.name} ${(n.aliases ?? []).join(" ")} ${n.category}`.toLowerCase().includes(q) || n.id.includes(q.replace(/\s+/g, "-"))) nodes.add(n.id);
			}
			for (const e of edges) if (nodes.has(e.source) && nodes.has(e.target)) eids.add(e.id);
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
		return {
			nodes,
			edges: eids,
			active
		};
	}
	drawGrid(ctx, w, h) {
		const step = 48 * this.cam.k;
		if (step < 18) return;
		ctx.strokeStyle = GRAPH_THEME.grid;
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
	drawEdge(ctx, s, t, e, on, dim, state) {
		const color = EDGE_COLOR[e.type];
		const alpha = dim ? .06 : on ? .72 : .22;
		ctx.strokeStyle = hexToRgba(color, alpha);
		const loop = Boolean(e.loopId) && state.showLoops;
		ctx.lineWidth = (loop ? 1.8 : 1.05) / this.cam.k;
		if (e.type === "correlation" || e.evidenceLevel === "speculative") ctx.setLineDash([6 / this.cam.k, 5 / this.cam.k]);
		else if (loop) {
			const off = this.reduced ? 0 : performance.now() / 80 % 20;
			ctx.setLineDash([7 / this.cam.k, 5 / this.cam.k]);
			ctx.lineDashOffset = -off / this.cam.k;
		} else ctx.setLineDash([]);
		ctx.beginPath();
		ctx.moveTo(s.x, s.y);
		ctx.lineTo(t.x, t.y);
		ctx.stroke();
		ctx.setLineDash([]);
		ctx.lineDashOffset = 0;
		if (!dim && (on || this.cam.k > .85)) this.arrow(ctx, s, t, color, alpha);
		if (on && this.cam.k > .7 && e.label) {
			const mx = (s.x + t.x) / 2;
			const my = (s.y + t.y) / 2;
			ctx.save();
			ctx.font = `${11 / this.cam.k}px "IBM Plex Sans", sans-serif`;
			ctx.fillStyle = hexToRgba(color, .85);
			ctx.textAlign = "center";
			ctx.textBaseline = "bottom";
			ctx.fillText(e.label, mx, my - 3 / this.cam.k);
			ctx.restore();
		}
	}
	arrow(ctx, s, t, color, alpha) {
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
		ctx.lineTo(ax - ux * size - uy * size * .55, ay - uy * size + ux * size * .55);
		ctx.lineTo(ax - ux * size + uy * size * .55, ay - uy * size - ux * size * .55);
		ctx.closePath();
		ctx.fill();
	}
	drawNode(ctx, n, data, selected, hovered, dim, state) {
		const color = state.mode === "evidence" ? EVIDENCE_COLOR[data.evidenceLevel] : CATEGORY_COLOR[data.category];
		const alpha = dim ? .14 : 1;
		ctx.beginPath();
		ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
		ctx.fillStyle = hexToRgba(color, .16 * alpha);
		ctx.fill();
		ctx.lineWidth = (selected ? 2.4 : hovered ? 1.8 : data.tier === 0 ? 1.5 : 1.1) / this.cam.k;
		ctx.strokeStyle = selected ? GRAPH_THEME.selectedRing : hovered ? GRAPH_THEME.hoverRing : hexToRgba(color, .85 * alpha);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(n.x, n.y, Math.max(1.4, n.r * .28), 0, Math.PI * 2);
		ctx.fillStyle = hexToRgba(color, (dim ? .2 : .9) * alpha);
		ctx.fill();
		if (data.id === "human-behavior" && !dim) {
			ctx.beginPath();
			ctx.arc(n.x, n.y, n.r + 5 / this.cam.k, 0, Math.PI * 2);
			ctx.strokeStyle = hexToRgba(color, .35);
			ctx.lineWidth = 1 / this.cam.k;
			ctx.stroke();
		}
	}
	drawLabels(ctx, labels, k) {
		const placed = [];
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		for (const lb of labels) {
			const size = (lb.core ? 12 : 10.5) / k;
			ctx.font = `${lb.core ? 500 : 400} ${size}px "IBM Plex Sans", sans-serif`;
			const w = ctx.measureText(lb.text).width;
			const h = size * 1.3;
			const box = {
				x: lb.x - w / 2,
				y: lb.y,
				w,
				h
			};
			if (placed.some((p) => box.x < p.x + p.w && box.x + box.w > p.x && box.y < p.y + p.h && box.y + box.h > p.y) && !lb.core) continue;
			placed.push(box);
			ctx.fillStyle = `rgba(8,9,11,${.55 * lb.alpha})`;
			ctx.fillRect(box.x - 3 / k, box.y - 1 / k, w + 6 / k, h);
			ctx.fillStyle = lb.alpha > .9 ? GRAPH_THEME.label : lb.alpha > .5 ? GRAPH_THEME.labelMuted : GRAPH_THEME.labelDim;
			ctx.fillText(lb.text, lb.x, lb.y);
		}
	}
	drawParticles(ctx, edges, highlight, state) {
		const flowing = edges.filter((e) => highlight.has(e.id));
		if (!flowing.length) {
			this.particles = [];
			return;
		}
		if (this.particles.length < flowing.length * 2) for (const e of flowing) this.particles.push({
			edgeId: e.id,
			t: Math.random(),
			speed: .002 + Math.random() * .003
		});
		const byId = new Map(edges.map((e) => [e.id, e]));
		const next = [];
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
			ctx.fillStyle = hexToRgba(EDGE_COLOR[e.type], .9);
			ctx.fill();
			next.push(p);
		}
		this.particles = next.slice(0, 220);
	}
};
function GraphCanvas() {
	const ref = (0, import_react.useRef)(null);
	const engineRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const engine = new GraphEngine(canvas, {
			getState: () => useGraphStore.getState(),
			nodes: NODES,
			edges: EDGES,
			onSelect: (id, additive) => {
				const s = useGraphStore.getState();
				if (additive && s.selectedId && id) {
					s.setPathTarget(id);
					s.select(s.selectedId);
				} else {
					s.setPathTarget(null);
					s.select(id);
				}
			},
			onHover: (id) => useGraphStore.getState().hover(id)
		});
		engineRef.current = engine;
		engine.start();
		const ro = new ResizeObserver(() => engine.resize());
		if (canvas.parentElement) ro.observe(canvas.parentElement);
		return () => {
			ro.disconnect();
			engine.stop();
			engineRef.current = null;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "absolute inset-0 h-full w-full touch-none",
		"aria-label": "Reality graph canvas"
	});
}
function degreeMaps(edges, ids) {
	const deg = /* @__PURE__ */ new Map();
	const inDeg = /* @__PURE__ */ new Map();
	const outDeg = /* @__PURE__ */ new Map();
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
	return {
		deg,
		inDeg,
		outDeg
	};
}
function topN(scores, names, n) {
	return [...scores.entries()].sort((a, b) => b[1] - a[1]).slice(0, n).map(([id, degree]) => ({
		id,
		name: names.get(id) ?? id,
		degree
	}));
}
/** Brandes betweenness on the undirected projection — fine for <200 nodes. */
function betweenness(ids, edges) {
	const adj = /* @__PURE__ */ new Map();
	for (const id of ids) adj.set(id, []);
	const idset = new Set(ids);
	for (const e of edges) {
		if (!idset.has(e.source) || !idset.has(e.target)) continue;
		adj.get(e.source).push(e.target);
		adj.get(e.target).push(e.source);
	}
	const cb = /* @__PURE__ */ new Map();
	for (const id of ids) cb.set(id, 0);
	for (const s of ids) {
		const stack = [];
		const pred = /* @__PURE__ */ new Map();
		const sigma = /* @__PURE__ */ new Map();
		const dist = /* @__PURE__ */ new Map();
		for (const v of ids) {
			pred.set(v, []);
			sigma.set(v, 0);
			dist.set(v, -1);
		}
		sigma.set(s, 1);
		dist.set(s, 0);
		const q = [s];
		while (q.length) {
			const v = q.shift();
			stack.push(v);
			for (const w of adj.get(v) ?? []) {
				if (dist.get(w) === -1) {
					dist.set(w, (dist.get(v) ?? 0) + 1);
					q.push(w);
				}
				if (dist.get(w) === (dist.get(v) ?? 0) + 1) {
					sigma.set(w, (sigma.get(w) ?? 0) + (sigma.get(v) ?? 0));
					pred.get(w).push(v);
				}
			}
		}
		const delta = /* @__PURE__ */ new Map();
		for (const v of ids) delta.set(v, 0);
		while (stack.length) {
			const w = stack.pop();
			for (const v of pred.get(w) ?? []) {
				const add = (sigma.get(v) ?? 0) / Math.max(1, sigma.get(w) ?? 1) * (1 + (delta.get(w) ?? 0));
				delta.set(v, (delta.get(v) ?? 0) + add);
			}
			if (w !== s) cb.set(w, (cb.get(w) ?? 0) + (delta.get(w) ?? 0));
		}
	}
	return cb;
}
function computeMetrics(nodes, edges, visible) {
	const visNodes = nodes.filter((n) => visible.has(n.id));
	const visEdges = edges.filter((e) => visible.has(e.source) && visible.has(e.target));
	const names = new Map(visNodes.map((n) => [n.id, n.name]));
	const ids = visNodes.map((n) => n.id);
	const { deg, inDeg } = degreeMaps(visEdges, visible);
	const bet = ids.length > 0 ? betweenness(ids, visEdges) : /* @__PURE__ */ new Map();
	const leverage = /* @__PURE__ */ new Map();
	for (const n of visNodes) leverage.set(n.id, (deg.get(n.id) ?? 0) * .6 + (bet.get(n.id) ?? 0) * .05 + n.importance);
	const uncertain = visEdges.filter((e) => e.evidenceLevel === "contested" || e.evidenceLevel === "speculative").length;
	const denom = Math.max(1, visEdges.length);
	return {
		entityCount: visNodes.length,
		relationshipCount: visEdges.length,
		hubs: topN(deg, names, 5),
		highDependency: topN(inDeg, names, 5),
		bottlenecks: topN(bet, names, 5),
		highLeverage: topN(leverage, names, 5),
		uncertainty: uncertain / denom,
		concentration: topN(inDeg, names, 4)
	};
}
function loopsTouching(loops, nodeId) {
	if (!nodeId) return loops;
	return loops.filter((l) => l.nodeIds.includes(nodeId));
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Slider({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
		className: cn("relative flex h-5 w-full touch-none items-center select-none", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
			className: "relative h-1 w-full grow overflow-hidden rounded-full bg-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-accent/70" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-3.5 rounded-full bg-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40" })]
	});
}
function GraphControls() {
	const frozen = useGraphStore((s) => s.frozen);
	const toggleFrozen = useGraphStore((s) => s.toggleFrozen);
	const reheat = useGraphStore((s) => s.reheat);
	const fit = useGraphStore((s) => s.fit);
	const centerSelected = useGraphStore((s) => s.centerSelected);
	const showLabels = useGraphStore((s) => s.showLabels);
	const toggleLabels = useGraphStore((s) => s.toggleLabels);
	const showLoops = useGraphStore((s) => s.showLoops);
	const toggleLoops = useGraphStore((s) => s.toggleLoops);
	const complexity = useGraphStore((s) => s.complexity);
	const setComplexity = useGraphStore((s) => s.setComplexity);
	const nodeSizeScale = useGraphStore((s) => s.nodeSizeScale);
	const setNodeSizeScale = useGraphStore((s) => s.setNodeSizeScale);
	const edgeStrength = useGraphStore((s) => s.edgeStrength);
	const setEdgeStrength = useGraphStore((s) => s.setEdgeStrength);
	const simStrength = useGraphStore((s) => s.simStrength);
	const setSimStrength = useGraphStore((s) => s.setSimStrength);
	const setRightPanel = useGraphStore((s) => s.setRightPanel);
	const rightPanel = useGraphStore((s) => s.rightPanel);
	if (useGraphStore((s) => s.zenMode)) return null;
	const downloadSnapshot = () => {
		const canvas = document.querySelector("canvas");
		if (!canvas) return;
		try {
			const url = canvas.toDataURL("image/png");
			const a = document.createElement("a");
			a.href = url;
			a.download = `reality-graph-snapshot-${Date.now()}.png`;
			a.click();
		} catch {}
	};
	const downloadData = () => {
		const s = useGraphStore.getState();
		const payload = {
			timestamp: (/* @__PURE__ */ new Date()).toISOString(),
			builder: "Ritik",
			project: "Human Behavior Pattern / Reality Graph",
			mode: s.mode,
			complexity: s.complexity,
			selectedId: s.selectedId,
			pathTargetId: s.pathTargetId,
			removedId: s.removedId,
			activeScenario: s.activeScenario,
			nodesCount: NODES.length,
			edgesCount: EDGES.length
		};
		const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `reality-graph-data-${Date.now()}.json`;
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto absolute bottom-3 left-3 z-20 flex max-w-[min(100%-1.5rem,22rem)] flex-col gap-2 pb-[env(safe-area-inset-bottom)] md:bottom-4 md:left-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden rounded-lg border border-border bg-surface/92 p-3 backdrop-blur-sm md:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 flex gap-1",
					children: COMPLEXITY_LEVELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setComplexity(c),
						className: cn("h-7 flex-1 rounded-sm text-[0.6875rem] capitalize", complexity === c ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 py-1 text-[0.6875rem] text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-16",
						children: "Node size"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: .6,
						max: 1.8,
						step: .05,
						value: [nodeSizeScale],
						onValueChange: (v) => setNodeSizeScale(v[0] ?? 1)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 py-1 text-[0.6875rem] text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-16",
						children: "Edges"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: .4,
						max: 2,
						step: .05,
						value: [edgeStrength],
						onValueChange: (v) => setEdgeStrength(v[0] ?? 1)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 py-1 text-[0.6875rem] text-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-16",
						children: "Forces"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
						min: .4,
						max: 2,
						step: .05,
						value: [simStrength],
						onValueChange: (v) => setSimStrength(v[0] ?? 1)
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1 rounded-lg border border-border bg-surface/92 p-1 backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: frozen ? "Run simulation" : "Freeze",
					onClick: toggleFrozen,
					children: frozen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Reheat simulation",
					onClick: reheat,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Fit graph",
					onClick: fit,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scan, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Center selected",
					onClick: centerSelected,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Toggle labels",
					onClick: toggleLabels,
					active: showLabels,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Highlight feedback loops",
					onClick: toggleLoops,
					active: showLoops,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "System state",
					onClick: () => setRightPanel("system"),
					active: rightPanel === "system",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Export PNG Snapshot",
					onClick: downloadSnapshot,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					label: "Export System Data JSON",
					onClick: downloadData,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileJson, { className: "size-3.5" })
				})
			]
		})]
	});
}
function IconBtn({ children, onClick, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		title: label,
		"aria-label": label,
		onClick,
		className: cn("flex size-9 items-center justify-center rounded-sm", active ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
		children
	});
}
function IntroOverlay() {
	const open = useGraphStore((s) => s.introOpen);
	const dismiss = useGraphStore((s) => s.dismissIntro);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end justify-center bg-bg/80 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-xl px-6 pb-[calc(env(safe-area-inset-bottom)+2.5rem)] pt-16 sm:pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "intro-rise font-mono text-[0.6875rem] tracking-[0.22em] text-subtle uppercase",
					children: "Educational model"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "intro-rise mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-fg sm:text-5xl",
					style: { animationDelay: "40ms" },
					children: "Reality Graph"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "intro-rise mt-2 font-display text-lg italic text-muted sm:text-xl",
					style: { animationDelay: "80ms" },
					children: "How the modern world actually works"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "intro-rise mt-5 max-w-md text-sm leading-relaxed text-muted",
					style: { animationDelay: "120ms" },
					children: "Follow the money. Follow the data. Follow the incentives. Follow the power."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "intro-rise mt-4 max-w-md text-sm leading-relaxed text-subtle",
					style: { animationDelay: "160ms" },
					children: "This is one evidence-weighted model of interconnected systems. Explore the relationships, inspect the incentives, follow the flows, and challenge the assumptions. It is not a forecast, and not a claim that every link is proven cause."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-rise mt-8 flex flex-wrap items-center gap-3",
					style: { animationDelay: "200ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: dismiss,
						className: "h-11 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90",
						children: "Enter the model"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.6875rem] text-subtle",
						children: "Centered on human behavior"
					})]
				})
			]
		})
	});
}
var TONE = {
	established: "bg-evidence-established",
	observed: "bg-evidence-observed",
	plausible: "bg-evidence-plausible",
	contested: "bg-evidence-contested",
	speculative: "bg-evidence-speculative"
};
function EvidenceDot({ level, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block size-1.5 shrink-0 rounded-full", TONE[level], className),
		"aria-hidden": true
	});
}
function ScrollArea({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
		className: cn("overflow-hidden", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
			className: "h-full w-full rounded-[inherit]",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
			orientation: "vertical",
			className: "flex w-2 touch-none select-none p-0.5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border-strong" })
		})]
	});
}
function Separator({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("h-px w-full bg-border", className),
		role: "separator"
	});
}
function LayerRail() {
	const layers = useGraphStore((s) => s.layers);
	const toggleLayer = useGraphStore((s) => s.toggleLayer);
	const evidence = useGraphStore((s) => s.evidence);
	const toggleEvidence = useGraphStore((s) => s.toggleEvidence);
	const edgeTypes = useGraphStore((s) => s.edgeTypes);
	const toggleEdgeType = useGraphStore((s) => s.toggleEdgeType);
	const resetFilters = useGraphStore((s) => s.resetFilters);
	const leftOpen = useGraphStore((s) => s.leftOpen);
	const setLeftOpen = useGraphStore((s) => s.setLeftOpen);
	if (useGraphStore((s) => s.zenMode)) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("pointer-events-auto absolute top-24 bottom-24 left-3 z-20 hidden w-56 flex-col overflow-hidden rounded-xl border border-border bg-surface/92 backdrop-blur-sm md:flex", "transition-opacity duration-200", leftOpen ? "opacity-100" : "pointer-events-none opacity-0"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-3 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
					children: "Layers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-[0.6875rem] text-muted hover:text-fg",
						onClick: resetFilters,
						children: "Reset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-muted hover:text-fg",
						onClick: () => setLeftOpen(false),
						title: "Hide layers",
						"aria-label": "Hide layers",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-0.5 p-2",
						children: LAYERS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleLayer(l),
							className: cn("flex items-start gap-2 rounded-md px-2 py-1.5 text-left", layers[l] ? "text-fg" : "text-subtle"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 size-2 shrink-0 rounded-full",
								style: {
									background: `var(--color-layer-${l})`,
									opacity: layers[l] ? 1 : .25
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs font-medium",
									children: LAYER_META[l].label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[0.625rem] text-subtle",
									children: LAYER_META[l].short
								})]
							})]
						}, l))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pt-3 pb-1 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "Evidence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-0.5 p-2",
						children: EVIDENCE_LEVELS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleEvidence(e),
							className: cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs", evidence[e] ? "text-fg" : "text-subtle"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, {
								level: e,
								className: evidence[e] ? "opacity-100" : "opacity-30"
							}), EVIDENCE_META[e].short]
						}, e))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 pt-3 pb-1 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "Relationship"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-0.5 p-2 pb-3",
						children: EDGE_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => toggleEdgeType(t),
							className: cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs", edgeTypes[t] ? "text-fg" : "text-subtle"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-1.5 rounded-full",
								style: {
									background: `var(--color-layer-${t === "money" || t === "data" || t === "information" ? t : "business"})`,
									opacity: edgeTypes[t] ? .9 : .25
								}
							}), EDGE_TYPE_META[t].label]
						}, t))
					})
				]
			})
		]
	});
}
var badgeVariants = cva("inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-elevated text-muted",
		accent: "bg-accent/15 text-accent",
		outline: "border border-border text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
			children: title
		}), children]
	});
}
function List({ items }) {
	if (!items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-subtle",
		children: "None recorded in this model."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-1",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "text-xs leading-relaxed text-muted",
			children: item
		}, item))
	});
}
function Related({ ids }) {
	const select = useGraphStore((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: ids.map((id) => {
			const n = nodeById(id) ?? NODES.find((x) => x.name.toLowerCase() === id.toLowerCase());
			const label = n?.name ?? id;
			const nid = n?.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: !nid,
				onClick: () => nid && select(nid),
				className: "rounded-sm border border-border bg-elevated px-2 py-1 text-[0.6875rem] text-muted hover:text-fg disabled:opacity-50",
				children: label
			}, id);
		})
	});
}
function Inspector() {
	const selectedId = useGraphStore((s) => s.selectedId);
	const mode = useGraphStore((s) => s.mode);
	const traceDepth = useGraphStore((s) => s.traceDepth);
	const setTraceDepth = useGraphStore((s) => s.setTraceDepth);
	const expandNeighborhood = useGraphStore((s) => s.expandNeighborhood);
	const collapseNeighborhood = useGraphStore((s) => s.collapseNeighborhood);
	const setRemoved = useGraphStore((s) => s.setRemoved);
	const node = selectedId ? nodeById(selectedId) : void 0;
	if (!node) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col justify-center px-5 text-sm text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-fg",
			children: "Select a node"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs leading-relaxed text-subtle",
			children: "Click any entity to inspect its role, incentives, evidence, and externalities. Shift-click a second node to trace a path."
		})]
	});
	const relatedEdges = EDGES.filter((e) => e.source === node.id || e.target === node.id).slice(0, 12);
	const tracing = mode === "incentive" || mode === "money" || mode === "data" || mode === "power";
	const trace = tracing ? traceFrom(node.id, mode, traceDepth, EDGES, NODES) : null;
	const pathTargetId = useGraphStore((s) => s.pathTargetId);
	const setPathTarget = useGraphStore((s) => s.setPathTarget);
	const removedId = useGraphStore((s) => s.removedId);
	const pathTargetNode = pathTargetId ? nodeById(pathTargetId) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
		className: "h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: CATEGORY_META[node.category].label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl leading-tight text-fg",
						children: node.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-sm border border-border px-2 py-0.5 text-[0.6875rem] text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, { level: node.evidenceLevel }), EVIDENCE_META[node.evidenceLevel].short]
						}), node.layers.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: LAYER_META[l].label
						}, l))]
					}),
					pathTargetNode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2.5 flex items-center justify-between rounded border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Tracing causality to: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: pathTargetNode.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setPathTarget(null),
							className: "text-[0.625rem] text-subtle hover:text-fg",
							children: "Clear"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Role in the system",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-fg",
					children: node.role
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs leading-relaxed text-muted",
					children: node.description
				})]
			}),
			tracing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: MODE_META[mode].label,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-xs text-subtle",
						children: MODE_META[mode].kicker
					}),
					tracing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex flex-wrap gap-1",
						children: TRACE_DEPTHS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTraceDepth(d),
							className: traceDepth === d ? "h-7 rounded-sm bg-elevated px-2 font-mono text-[0.6875rem] text-fg" : "h-7 rounded-sm px-2 font-mono text-[0.6875rem] text-muted hover:text-fg",
							children: d === 99 ? "Full" : `Depth ${d}`
						}, d))
					}),
					mode === "incentive" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Optimizes for",
								v: node.optimizesFor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Depends on",
								v: node.resources.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Gains",
								v: node.gains.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Risks",
								v: node.risks.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Who pays",
								v: node.whoPays.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Who benefits",
								v: node.whoBenefits.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Encouraged behavior",
								v: node.encouragedBehavior
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
								k: "Unintended behavior",
								v: node.unintendedBehavior
							})
						]
					}),
					trace && mode !== "incentive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "flex flex-col gap-1.5",
						children: trace.steps.slice(0, 18).map((s) => {
							const n = nodeById(s.nodeId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-xs text-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-subtle",
										children: s.hop
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-fg",
										children: n?.name ?? s.nodeId
									}),
									s.via ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-subtle",
										children: [" — ", s.via]
									}) : null
								]
							}, `${s.nodeId}-${s.hop}`);
						})
					})
				]
			})] }),
			node.tensions && node.tensions.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Tensions",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: node.tensions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-xs leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: t.a
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1.5 text-subtle",
								children: "vs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: t.b
							})
						]
					}, `${t.a}-${t.b}`))
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Main incentives",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.incentives })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Inputs / outputs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-[0.6875rem] text-subtle",
						children: "Inputs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.inputs }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 mb-1 text-[0.6875rem] text-subtle",
						children: "Outputs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.outputs })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Dependencies",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.dependencies })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Who benefits / who bears costs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-[0.6875rem] text-subtle",
						children: "Benefits"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.whoBenefits }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 mb-1 text-[0.6875rem] text-subtle",
						children: "Costs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.whoBearsCosts })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Effects",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-[0.6875rem] text-subtle",
						children: "Positive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.positiveEffects }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 mb-1 text-[0.6875rem] text-subtle",
						children: "Negative externalities"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.negativeExternalities }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 mb-1 text-[0.6875rem] text-subtle",
						children: "Unintended consequences"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.unintendedConsequences })
				]
			}),
			node.claims && node.claims.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Claims & evidence",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: node.claims.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 text-xs leading-relaxed text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, {
							level: c.evidence,
							className: "mt-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							c.text,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-subtle",
								children: [
									"(",
									EVIDENCE_META[c.evidence].short,
									")"
								]
							})
						] })]
					}, c.text))
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Known uncertainties",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, { items: node.uncertainties })
			}),
			node.geographicNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Geographic note",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted",
					children: node.geographicNote
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Related systems",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Related, { ids: node.relatedSystems })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Relationships in this model",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1.5",
					children: relatedEdges.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, {
							level: e.evidenceLevel,
							className: "mt-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: nodeById(e.source)?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-subtle",
								children: " → "
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: nodeById(e.target)?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-subtle",
								children: e.label
							})
						] })]
					}, e.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: expandNeighborhood,
						className: "h-9 rounded-md border border-border bg-elevated text-xs text-fg hover:bg-elevated/80",
						children: "Expand neighborhood"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: collapseNeighborhood,
						className: "h-9 rounded-md border border-border text-xs text-muted hover:text-fg",
						children: "Collapse neighborhood"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRemoved(removedId === node.id ? null : node.id),
						className: removedId === node.id ? "h-9 rounded-md border border-amber-500/50 bg-amber-500/20 text-xs font-medium text-amber-200" : "h-9 rounded-md border border-border text-xs text-muted hover:text-fg",
						children: removedId === node.id ? "Restore node to system" : "Simulate removal"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pb-5 text-[0.625rem] leading-relaxed text-subtle",
				children: "Evidence describes this model, not a complete literature review. Challenge the assumptions."
			})
		]
	});
}
function Item({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[0.6875rem] text-subtle",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "text-xs leading-relaxed text-fg",
		children: v
	})] });
}
function Metric({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-elevated/60 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[0.625rem] tracking-wide text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 font-mono text-sm tabular-nums text-fg",
			children: value
		})]
	});
}
function SystemPanel() {
	const select = useGraphStore((s) => s.select);
	const setLoop = useGraphStore((s) => s.setLoop);
	const activeLoop = useGraphStore((s) => s.activeLoop);
	const removedId = useGraphStore((s) => s.removedId);
	const setRemoved = useGraphStore((s) => s.setRemoved);
	const selectedId = useGraphStore((s) => s.selectedId);
	const complexity = useGraphStore((s) => s.complexity);
	const layerSig = useGraphStore((s) => Object.values(s.layers).map((v) => v ? "1" : "0").join(""));
	const evidenceSig = useGraphStore((s) => Object.values(s.evidence).map((v) => v ? "1" : "0").join(""));
	const edgeSig = useGraphStore((s) => Object.values(s.edgeTypes).map((v) => v ? "1" : "0").join(""));
	const expandedLen = useGraphStore((s) => s.expandedIds.length);
	const collapsedLen = useGraphStore((s) => s.collapsedIds.length);
	const loops = loopsTouching(LOOPS, selectedId);
	const metrics = (0, import_react.useMemo)(() => {
		const s = useGraphStore.getState();
		const vis = visibleNodeSet(s);
		return computeMetrics(NODES, visibleEdges(s, vis), vis);
	}, [
		selectedId,
		removedId,
		complexity,
		layerSig,
		evidenceSig,
		edgeSig,
		expandedLen,
		collapsedLen
	]);
	const cascade = removedId ? removalCascade(removedId, EDGES, NODES) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
		className: "h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "System state"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-fg",
						children: "Live model"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-subtle",
						children: "Computed from the currently visible graph — not a measurement of the world."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 px-4 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Entities",
						value: String(metrics.entityCount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Relationships",
						value: String(metrics.relationshipCount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Uncertainty",
						value: `${Math.round(metrics.uncertainty * 100)}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Loops",
						value: String(LOOPS.length)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Strongest hubs",
				items: metrics.hubs,
				onPick: select
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Highest dependency",
				items: metrics.highDependency,
				onPick: select
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "Bottlenecks",
				items: metrics.bottlenecks,
				onPick: select
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
				title: "High-leverage nodes",
				items: metrics.highLeverage,
				onPick: select
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
					children: "Major feedback loops"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: (selectedId ? loops : LOOPS).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setLoop(activeLoop === l.id ? null : l.id),
						className: "w-full rounded-md border border-border px-2.5 py-2 text-left hover:bg-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-xs text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, { level: l.evidenceLevel }), l.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-[0.6875rem] leading-relaxed text-subtle",
							children: l.summary
						})]
					}) }, l.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "What if this node disappears?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-[0.6875rem] text-subtle",
						children: "Modelled cascade — not a real-world forecast. Uses outgoing dependencies in this graph."
					}),
					removedId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-fg",
								children: ["Removed: ", nodeById(removedId)?.name ?? removedId]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cascade, {
								label: "Broken links",
								ids: [],
								extra: `${cascade?.brokenEdgeIds.length ?? 0} edges`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cascade, {
								label: "First-order",
								ids: cascade?.first ?? []
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cascade, {
								label: "Second-order",
								ids: cascade?.second ?? []
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cascade, {
								label: "Third-order",
								ids: cascade?.third ?? []
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-8 rounded-sm border border-border text-xs text-muted hover:text-fg",
								onClick: () => setRemoved(null),
								children: "Restore node"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Select a node, then choose Simulate removal in the inspector."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pb-5 text-[0.625rem] leading-relaxed text-subtle",
				children: "Hubs and bottlenecks are graph statistics on this simplified model. High betweenness is not the same as political power."
			})
		]
	});
}
function Block({ title, items, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-1",
			children: items.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPick(h.id),
				className: "flex w-full items-baseline justify-between gap-2 rounded-sm px-1 py-1 text-left text-xs hover:bg-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-fg",
					children: h.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono tabular-nums text-subtle",
					children: Number.isInteger(h.degree) ? h.degree : h.degree.toFixed(1)
				})]
			}) }, h.id))
		})]
	});
}
function Cascade({ label, ids, extra }) {
	const select = useGraphStore((s) => s.select);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-[0.6875rem] text-subtle",
		children: [label, extra ? ` · ${extra}` : ids.length ? ` · ${ids.length}` : " · none"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 flex flex-wrap gap-1",
		children: ids.slice(0, 8).map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => select(id),
			className: "rounded-sm border border-border px-1.5 py-0.5 text-[0.6875rem] text-muted hover:text-fg",
			children: nodeById(id)?.name ?? id
		}, id))
	})] });
}
function ScenarioPanel() {
	const active = useGraphStore((s) => s.activeScenario);
	const setScenario = useGraphStore((s) => s.setScenario);
	const select = useGraphStore((s) => s.select);
	const scenario = SCENARIOS.find((s) => s.id === active) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
		className: "h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "Scenario simulator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-fg",
						children: "Hypotheticals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 rounded-md border border-border bg-elevated/50 px-2.5 py-2 font-mono text-[0.625rem] leading-relaxed tracking-wide text-muted uppercase",
						children: "Modelled scenario — not a real-world forecast"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1 px-3 pb-3",
				children: SCENARIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setScenario(active === s.id ? null : s.id),
					className: cn("rounded-md border px-3 py-2 text-left text-xs leading-snug", active === s.id ? "border-border-strong bg-elevated text-fg" : "border-border text-muted hover:text-fg"),
					children: s.title
				}, s.id))
			}),
			scenario && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-fg",
						children: scenario.prompt
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted",
						children: scenario.summary
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "Shocks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-1.5",
						children: scenario.shocks.map((sh) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => select(sh.nodeId),
							className: "text-left text-xs text-muted hover:text-fg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-subtle",
									children: sh.direction
								}),
								" ",
								nodeById(sh.nodeId)?.name ?? sh.nodeId,
								" — ",
								sh.label
							]
						}) }, sh.nodeId))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "Propagated effects"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: scenario.effects.map((ef, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2 text-xs leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, {
								level: ef.evidenceLevel,
								className: "mt-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-subtle",
									children: ["L", ef.order]
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-fg hover:underline",
									onClick: () => select(ef.nodeId),
									children: nodeById(ef.nodeId)?.name ?? ef.nodeId
								}),
								" — ",
								ef.text,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-subtle",
									children: [
										"(",
										EVIDENCE_META[ef.evidenceLevel].short,
										")"
									]
								})
							] })]
						}, `${ef.nodeId}-${i}`))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "px-4 py-3 pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "Tensions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: scenario.tensions.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: t.a
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-1.5 text-subtle",
									children: "vs"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-fg",
									children: t.b
								})
							]
						}, `${t.a}-${t.b}`))
					})]
				})
			] })
		]
	});
}
function SearchBox({ compact = false }) {
	const query = useGraphStore((s) => s.query);
	const setQuery = useGraphStore((s) => s.setQuery);
	const searchIndex = useGraphStore((s) => s.searchIndex);
	const setSearchIndex = useGraphStore((s) => s.setSearchIndex);
	const commitSearch = useGraphStore((s) => s.commitSearch);
	const select = useGraphStore((s) => s.select);
	const inputRef = (0, import_react.useRef)(null);
	const hits = query.trim() ? searchHits(useGraphStore.getState()) : [];
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
				e.preventDefault();
				inputRef.current?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", compact ? "w-full" : "w-full max-w-md"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				value: query,
				onChange: (e) => setQuery(e.target.value),
				onKeyDown: (e) => {
					if (e.key === "ArrowDown") {
						e.preventDefault();
						setSearchIndex(Math.min(hits.length - 1, searchIndex + 1));
					} else if (e.key === "ArrowUp") {
						e.preventDefault();
						setSearchIndex(Math.max(0, searchIndex - 1));
					} else if (e.key === "Enter") {
						e.preventDefault();
						const hit = hits[searchIndex] ?? hits[0];
						if (hit) {
							select(hit.id);
							commitSearch();
						}
					} else if (e.key === "Escape") {
						setQuery("");
						inputRef.current?.blur();
					}
				},
				placeholder: "Search systems, incentives, flows",
				className: "h-10 w-full rounded-md border border-border bg-elevated/80 pr-9 pl-9 text-sm text-fg placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none",
				"aria-label": "Search the graph",
				autoComplete: "off"
			}),
			query ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center text-subtle hover:text-fg",
				onClick: () => setQuery(""),
				"aria-label": "Clear search",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
				className: "pointer-events-none absolute top-1/2 right-2.5 hidden -translate-y-1/2 rounded-sm border border-border px-1.5 font-mono text-[0.625rem] text-subtle sm:block",
				children: "/"
			}),
			hits.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "absolute top-[calc(100%+6px)] right-0 left-0 z-30 max-h-72 overflow-auto rounded-lg border border-border bg-surface py-1 shadow-[var(--shadow-border)]",
				role: "listbox",
				children: hits.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: cn("flex w-full items-baseline justify-between gap-3 px-3 py-2 text-left text-sm", i === searchIndex ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg"),
					onMouseEnter: () => setSearchIndex(i),
					onClick: () => {
						select(h.id);
						setQuery(h.name);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[0.625rem] tracking-wide text-subtle uppercase",
						children: h.category in CATEGORY_META ? CATEGORY_META[h.category].label : h.why
					})]
				}) }, h.id))
			})
		]
	});
}
function MobileDock() {
	const sheet = useGraphStore((s) => s.mobileSheet);
	const setMobileSheet = useGraphStore((s) => s.setMobileSheet);
	const open = sheet !== "none";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "pointer-events-auto absolute inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-stretch",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						label: "Search",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
						active: sheet === "search",
						onClick: () => setMobileSheet(sheet === "search" ? "none" : "search")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						label: "Layers",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }),
						active: sheet === "layers",
						onClick: () => setMobileSheet(sheet === "layers" ? "none" : "layers")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						label: "Inspect",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waypoints, { className: "size-4" }),
						active: sheet === "inspect",
						onClick: () => setMobileSheet(sheet === "inspect" ? "none" : "inspect")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						label: "System",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-4" }),
						active: sheet === "system",
						onClick: () => setMobileSheet(sheet === "system" ? "none" : "system")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
						label: "More",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }),
						active: sheet === "scenario",
						onClick: () => setMobileSheet(sheet === "scenario" ? "none" : "scenario")
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
			open,
			onOpenChange: (v) => {
				if (!v) setMobileSheet("none");
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { className: "fixed inset-0 z-40 bg-bg/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
				className: "fixed inset-x-0 bottom-0 z-50 flex h-[78dvh] flex-col rounded-t-xl border border-border bg-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-2 h-1 w-10 rounded-full bg-border-strong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
						className: "sr-only",
						children: "Panel"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-h-0 flex-1 overflow-hidden pb-16",
						children: [
							sheet === "search" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, { compact: true })
							}),
							sheet === "inspect" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, {}),
							sheet === "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemPanel, {}),
							sheet === "scenario" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioPanel, {}),
							sheet === "layers" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileLayers, {})
						]
					})
				]
			})] })
		})]
	});
}
function Tab({ label, icon, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[0.625rem]", active ? "text-fg" : "text-subtle"),
		children: [icon, label]
	});
}
function MobileLayers() {
	const layers = useGraphStore((s) => s.layers);
	const toggleLayer = useGraphStore((s) => s.toggleLayer);
	const evidence = useGraphStore((s) => s.evidence);
	const toggleEvidence = useGraphStore((s) => s.toggleEvidence);
	const complexity = useGraphStore((s) => s.complexity);
	const setComplexity = useGraphStore((s) => s.setComplexity);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-auto p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
				children: "Complexity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 mb-4 flex gap-1",
				children: COMPLEXITY_LEVELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setComplexity(c),
					className: cn("h-9 flex-1 rounded-md text-xs capitalize", complexity === c ? "bg-elevated text-fg" : "text-muted"),
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
				children: "Layers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-col",
				children: LAYERS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggleLayer(l),
					className: "flex h-11 items-center gap-2 text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-2 rounded-full",
						style: {
							background: `var(--color-layer-${l})`,
							opacity: layers[l] ? 1 : .25
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: layers[l] ? "text-fg" : "text-subtle",
						children: LAYER_META[l].label
					})]
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
				children: "Evidence"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-col",
				children: EVIDENCE_LEVELS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggleEvidence(e),
					className: "flex h-11 items-center gap-2 text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceDot, { level: e }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: evidence[e] ? "text-fg" : "text-subtle",
						children: EVIDENCE_META[e].short
					})]
				}, e))
			})
		]
	});
}
var SHORTCUTS = [
	["/", "Focus search"],
	["Esc", "Clear selection / close"],
	["F", "Fit graph"],
	["Space", "Freeze or run layout"],
	["L", "Toggle labels"],
	["1–4", "Money / data / incentives / power"],
	["Shift-click", "Trace path from selection"]
];
function HelpPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScrollArea, {
		className: "h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-4 pb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
						children: "How to read this"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl text-fg",
						children: "A model, not a map of truth"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Every node and edge answers four questions: what do we know, how do we know it, what is interpretation, and what remains uncertain. Nothing here is a prediction of reality."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
					children: "Evidence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-col gap-1.5 text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Established — accounting identities and strongly supported facts." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Observed — repeated industry or social patterns." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plausible — coherent mechanism, thinner measurement." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Contested — serious disagreement on meaning or magnitude." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Speculative — hypothesis. Never treat as fact." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase",
					children: "Shortcuts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-1.5",
					children: SHORTCUTS.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
							className: "rounded-sm border border-border px-1.5 py-0.5 font-mono text-[0.625rem] text-subtle",
							children: k
						})]
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-4 pt-2 pb-5 text-[0.625rem] leading-relaxed text-subtle",
				children: "Dataset is a simplified educational model of archetypal systems. It does not assert hidden coordination among named firms."
			})
		]
	});
}
var TABS = [
	{
		id: "inspect",
		label: "Inspect"
	},
	{
		id: "system",
		label: "System"
	},
	{
		id: "scenario",
		label: "Scenarios"
	},
	{
		id: "help",
		label: "Notes"
	}
];
function RightDock() {
	const panel = useGraphStore((s) => s.rightPanel);
	const setRightPanel = useGraphStore((s) => s.setRightPanel);
	const rightOpen = useGraphStore((s) => s.rightOpen);
	const toggleRightOpen = useGraphStore((s) => s.toggleRightOpen);
	const zenMode = useGraphStore((s) => s.zenMode);
	const active = useGraphStore((s) => s.helpOpen) ? "help" : panel;
	if (!rightOpen || zenMode) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "pointer-events-auto absolute top-24 right-3 bottom-4 z-20 hidden w-[22.5rem] flex-col overflow-hidden rounded-xl border border-border bg-surface/92 backdrop-blur-sm transition-all duration-200 lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-0.5 p-1 border-b border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-1 gap-0.5",
				children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						useGraphStore.getState().setHelpOpen(t.id === "help");
						setRightPanel(t.id);
					},
					className: cn("h-8 flex-1 rounded-sm text-[0.6875rem] font-medium transition-colors", active === t.id ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
					children: t.label
				}, t.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: toggleRightOpen,
				className: "flex size-8 shrink-0 items-center justify-center rounded-sm text-muted hover:bg-elevated hover:text-fg",
				title: "Hide panel",
				"aria-label": "Hide panel",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-0 flex-1",
			children: [
				active === "inspect" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, {}),
				active === "system" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemPanel, {}),
				active === "scenario" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScenarioPanel, {}),
				active === "help" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HelpPanel, {})
			]
		})]
	});
}
var MODES = [
	"explore",
	"incentive",
	"money",
	"data",
	"power",
	"evidence"
];
function TopBar() {
	const mode = useGraphStore((s) => s.mode);
	const setMode = useGraphStore((s) => s.setMode);
	const leftOpen = useGraphStore((s) => s.leftOpen);
	const setLeftOpen = useGraphStore((s) => s.setLeftOpen);
	const rightOpen = useGraphStore((s) => s.rightOpen);
	const toggleRightOpen = useGraphStore((s) => s.toggleRightOpen);
	const zenMode = useGraphStore((s) => s.zenMode);
	const toggleZenMode = useGraphStore((s) => s.toggleZenMode);
	const helpOpen = useGraphStore((s) => s.helpOpen);
	const setHelpOpen = useGraphStore((s) => s.setHelpOpen);
	const removedId = useGraphStore((s) => s.removedId);
	const setRemoved = useGraphStore((s) => s.setRemoved);
	const removedNode = removedId ? nodeById(removedId) : null;
	if (zenMode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "pointer-events-none absolute inset-x-0 top-3 z-30 flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-auto flex items-center gap-3 rounded-full border border-border/80 bg-surface/95 px-4 py-1.5 shadow-lg backdrop-blur-md animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-xs font-medium text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-accent" }), "Full Overview (Zen Mode)"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: toggleZenMode,
				className: "rounded-full bg-elevated px-2.5 py-0.5 font-mono text-[0.625rem] text-muted hover:text-fg hover:bg-elevated/80",
				children: "Exit Zen Mode (Z)"
			})]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col gap-2 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:flex-row md:items-start md:justify-between",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto flex min-w-0 items-start gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("mt-0.5 flex size-10 items-center justify-center rounded-md border border-border bg-surface text-muted hover:text-fg md:hidden", leftOpen && "text-fg bg-elevated"),
						onClick: () => setLeftOpen(!leftOpen),
						"aria-label": "Toggle layers",
						title: "Toggle layers",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("mt-0.5 hidden size-10 items-center justify-center rounded-md border border-border bg-surface text-muted hover:text-fg md:flex transition-colors", leftOpen ? "bg-elevated text-fg" : "text-muted"),
						onClick: () => setLeftOpen(!leftOpen),
						"aria-label": "Toggle layers panel",
						title: leftOpen ? "Hide layers panel" : "Show layers panel",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeft, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-surface/90 px-3 py-2 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-base font-medium tracking-tight text-fg",
								children: "Reality Graph"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden font-mono text-[0.625rem] tracking-[0.14em] text-subtle uppercase sm:inline",
								children: "Model"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-xs text-[0.6875rem] leading-snug text-subtle sm:block",
							children: "Follow the money. Follow the data. Follow the incentives. Follow the power."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto flex flex-col items-center gap-1.5 min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden min-w-0 w-full max-w-md justify-center md:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {})
				}), removedNode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs text-amber-200 backdrop-blur-sm animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Simulating Removal: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: removedNode.name })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setRemoved(null),
						className: "rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[0.625rem] hover:bg-amber-500/30 text-amber-100",
						children: "Restore"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto flex items-center gap-1 overflow-x-auto rounded-lg border border-border bg-surface/90 p-1 backdrop-blur-sm",
				children: [
					MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						title: MODE_META[m].kicker,
						onClick: () => setMode(m),
						className: cn("h-8 shrink-0 rounded-sm px-2.5 text-[0.6875rem] font-medium whitespace-nowrap transition-colors duration-150", mode === m ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						children: m === "explore" ? "Explore" : m === "incentive" ? "Incentives" : m === "money" ? "Money" : m === "data" ? "Data" : m === "power" ? "Power" : "Evidence"
					}, m)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("flex size-8 items-center justify-center rounded-sm transition-colors", rightOpen ? "bg-elevated text-fg" : "text-muted hover:text-fg"),
						onClick: toggleRightOpen,
						"aria-label": "Toggle inspector dock",
						title: rightOpen ? "Hide inspector dock" : "Show inspector dock",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelRight, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-8 items-center justify-center rounded-sm text-muted hover:text-fg hover:bg-elevated transition-colors",
						onClick: toggleZenMode,
						"aria-label": "Full Overview Mode (Zen)",
						title: "Full Overview Mode (Hide all UI)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("flex size-8 items-center justify-center rounded-sm", helpOpen ? "text-fg" : "text-muted hover:text-fg"),
						onClick: () => setHelpOpen(!helpOpen),
						"aria-label": "Help",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleHelp, { className: "size-3.5" })
					})
				]
			})
		]
	});
}
function AppShell() {
	(0, import_react.useEffect)(() => {
		try {
			if (localStorage.getItem("reality-graph-intro-v1") === "1") useGraphStore.setState({ introOpen: false });
		} catch {}
		const onKey = (e) => {
			const tag = e.target?.tagName;
			const typing = tag === "INPUT" || tag === "TEXTAREA";
			const s = useGraphStore.getState();
			if (e.key === "Escape") {
				if (s.zenMode) s.toggleZenMode();
				else if (s.query) s.setQuery("");
				else if (s.mobileSheet !== "none") s.setMobileSheet("none");
				else if (s.helpOpen) s.setHelpOpen(false);
				else if (s.introOpen) s.dismissIntro();
				else s.select(null);
				return;
			}
			if (typing) return;
			if (e.key === "z" || e.key === "Z") s.toggleZenMode();
			else if (e.key === " " || e.code === "Space") {
				e.preventDefault();
				s.toggleFrozen();
			} else if (e.key === "f" || e.key === "F") s.fit();
			else if (e.key === "l" || e.key === "L") s.toggleLabels();
			else if (e.key === "1") s.setMode("money");
			else if (e.key === "2") s.setMode("data");
			else if (e.key === "3") s.setMode("incentive");
			else if (e.key === "4") s.setMode("power");
			else if (e.key === "?") s.setHelpOpen(!s.helpOpen);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-dvh w-full overflow-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeHint, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerRail, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightDock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraphControls, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute right-3 bottom-3 hidden max-w-xs text-right font-mono text-[0.625rem] leading-relaxed text-subtle lg:right-[24.5rem] lg:block",
				children: "Simplified educational model — not a complete or predictive map of reality."
			})
		]
	});
}
function ModeHint() {
	const mode = useGraphStore((s) => s.mode);
	const selectedId = useGraphStore((s) => s.selectedId);
	const node = selectedId ? nodeById(selectedId) : void 0;
	if (mode === "explore") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute top-[5.25rem] left-1/2 z-20 hidden -translate-x-1/2 md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "rounded-md border border-border bg-surface/90 px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.14em] text-muted uppercase backdrop-blur-sm",
			children: [MODE_META[mode].label, node ? ` · ${node.name}` : " · select a node to trace"]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
