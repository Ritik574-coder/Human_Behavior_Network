import {
  EDGE_TYPE_META,
  EDGE_TYPES,
  EVIDENCE_LEVELS,
  EVIDENCE_META,
  LAYER_META,
  LAYERS,
} from "@/lib/graph/types";
import { useGraphStore } from "@/store/graph-store";
import { cn } from "@/lib/utils";
import { EvidenceDot } from "./EvidenceDot";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { X } from "lucide-react";

export function LayerRail() {
  const layers = useGraphStore((s) => s.layers);
  const toggleLayer = useGraphStore((s) => s.toggleLayer);
  const evidence = useGraphStore((s) => s.evidence);
  const toggleEvidence = useGraphStore((s) => s.toggleEvidence);
  const edgeTypes = useGraphStore((s) => s.edgeTypes);
  const toggleEdgeType = useGraphStore((s) => s.toggleEdgeType);
  const resetFilters = useGraphStore((s) => s.resetFilters);
  const leftOpen = useGraphStore((s) => s.leftOpen);
  const setLeftOpen = useGraphStore((s) => s.setLeftOpen);
  const zenMode = useGraphStore((s) => s.zenMode);

  if (zenMode) return null;

  return (
    <aside
      className={cn(
        "pointer-events-auto absolute top-24 bottom-24 left-3 z-20 hidden w-56 flex-col overflow-hidden rounded-xl border border-border bg-surface/92 backdrop-blur-sm md:flex",
        "transition-opacity duration-200",
        leftOpen ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="flex items-center justify-between px-3 py-2.5">
        <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Layers
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-[0.6875rem] text-muted hover:text-fg"
            onClick={resetFilters}
          >
            Reset
          </button>
          <button
            type="button"
            className="text-muted hover:text-fg"
            onClick={() => setLeftOpen(false)}
            title="Hide layers"
            aria-label="Hide layers"
          >
            <X className="size-3.5" />
          </button>
        </div>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-0.5 p-2">
          {LAYERS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => toggleLayer(l)}
              className={cn(
                "flex items-start gap-2 rounded-md px-2 py-1.5 text-left",
                layers[l] ? "text-fg" : "text-subtle",
              )}
            >
              <span
                className="mt-1 size-2 shrink-0 rounded-full"
                style={{
                  background: `var(--color-layer-${l})`,
                  opacity: layers[l] ? 1 : 0.25,
                }}
              />
              <span className="min-w-0">
                <span className="block text-xs font-medium">{LAYER_META[l].label}</span>
                <span className="block text-[0.625rem] text-subtle">{LAYER_META[l].short}</span>
              </span>
            </button>
          ))}
        </div>
        <Separator />
        <p className="px-3 pt-3 pb-1 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Evidence
        </p>
        <div className="flex flex-col gap-0.5 p-2">
          {EVIDENCE_LEVELS.map((e) => (
            <button
              key={e}
              type="button"
              onClick={() => toggleEvidence(e)}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs",
                evidence[e] ? "text-fg" : "text-subtle",
              )}
            >
              <EvidenceDot level={e} className={evidence[e] ? "opacity-100" : "opacity-30"} />
              {EVIDENCE_META[e].short}
            </button>
          ))}
        </div>
        <Separator />
        <p className="px-3 pt-3 pb-1 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Relationship
        </p>
        <div className="flex flex-col gap-0.5 p-2 pb-3">
          {EDGE_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => toggleEdgeType(t)}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs",
                edgeTypes[t] ? "text-fg" : "text-subtle",
              )}
            >
              <span
                className="size-1.5 rounded-full"
                style={{
                  background: `var(--color-layer-${t === "money" || t === "data" || t === "information" ? t : "business"})`,
                  opacity: edgeTypes[t] ? 0.9 : 0.25,
                }}
              />
              {EDGE_TYPE_META[t].label}
            </button>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}
