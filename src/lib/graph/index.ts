import { EDGES } from "./edges";
import { LOOPS } from "./loops";
import { NODES } from "./nodes";
import { SCENARIOS } from "./scenarios";

export * from "./types";
export * from "./theme";
export * from "./nodes";
export * from "./edges";
export * from "./loops";
export * from "./scenarios";
export * from "./analytics";
export * from "./traces";
export * from "./search";
export * from "./simulation";

const ids = new Set(NODES.map((n) => n.id));
if (ids.size !== NODES.length) {
  throw new Error("Duplicate node ids in Reality Graph dataset");
}
for (const e of EDGES) {
  if (!ids.has(e.source) || !ids.has(e.target)) {
    throw new Error(`Dangling edge ${e.id} (${e.source} → ${e.target})`);
  }
}
const edgeIds = new Set(EDGES.map((e) => e.id));
if (edgeIds.size !== EDGES.length) {
  throw new Error("Duplicate edge ids in Reality Graph dataset");
}
for (const loop of LOOPS) {
  for (const id of loop.nodeIds) {
    if (!ids.has(id)) throw new Error(`Loop ${loop.id} references missing node ${id}`);
  }
}
for (const sc of SCENARIOS) {
  for (const sh of sc.shocks) {
    if (!ids.has(sh.nodeId)) throw new Error(`Scenario ${sc.id} shock missing node ${sh.nodeId}`);
  }
  for (const ef of sc.effects) {
    if (!ids.has(ef.nodeId)) throw new Error(`Scenario ${sc.id} effect missing node ${ef.nodeId}`);
  }
}
