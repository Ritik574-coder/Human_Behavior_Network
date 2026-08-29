import type { ReactNode } from "react";
import { GitBranch, Layers, Search, SlidersHorizontal, Waypoints } from "lucide-react";
import { Drawer } from "vaul";
import { useGraphStore } from "@/store/graph-store";
import { cn } from "@/lib/utils";
import { Inspector } from "./Inspector";
import { SystemPanel } from "./SystemPanel";
import { ScenarioPanel } from "./ScenarioPanel";
import { SearchBox } from "./SearchBox";
import { LAYER_META, LAYERS, EVIDENCE_LEVELS, EVIDENCE_META } from "@/lib/graph/types";
import { EvidenceDot } from "./EvidenceDot";
import { COMPLEXITY_LEVELS } from "@/lib/graph/types";

export function MobileDock() {
  const sheet = useGraphStore((s) => s.mobileSheet);
  const setMobileSheet = useGraphStore((s) => s.setMobileSheet);
  const open = sheet !== "none";

  return (
    <div className="lg:hidden">
      <nav className="pointer-events-auto absolute inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm">
        <div className="flex items-stretch">
          <Tab
            label="Search"
            icon={<Search className="size-4" />}
            active={sheet === "search"}
            onClick={() => setMobileSheet(sheet === "search" ? "none" : "search")}
          />
          <Tab
            label="Layers"
            icon={<Layers className="size-4" />}
            active={sheet === "layers"}
            onClick={() => setMobileSheet(sheet === "layers" ? "none" : "layers")}
          />
          <Tab
            label="Inspect"
            icon={<Waypoints className="size-4" />}
            active={sheet === "inspect"}
            onClick={() => setMobileSheet(sheet === "inspect" ? "none" : "inspect")}
          />
          <Tab
            label="System"
            icon={<GitBranch className="size-4" />}
            active={sheet === "system"}
            onClick={() => setMobileSheet(sheet === "system" ? "none" : "system")}
          />
          <Tab
            label="More"
            icon={<SlidersHorizontal className="size-4" />}
            active={sheet === "scenario"}
            onClick={() => setMobileSheet(sheet === "scenario" ? "none" : "scenario")}
          />
        </div>
      </nav>

      <Drawer.Root
        open={open}
        onOpenChange={(v) => {
          if (!v) setMobileSheet("none");
        }}
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-bg/50" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex h-[78dvh] flex-col rounded-t-xl border border-border bg-surface">
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-border-strong" />
            <Drawer.Title className="sr-only">Panel</Drawer.Title>
            <div className="min-h-0 flex-1 overflow-hidden pb-16">
              {sheet === "search" && (
                <div className="p-3">
                  <SearchBox compact />
                </div>
              )}
              {sheet === "inspect" && <Inspector />}
              {sheet === "system" && <SystemPanel />}
              {sheet === "scenario" && <ScenarioPanel />}
              {sheet === "layers" && <MobileLayers />}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}

function Tab({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[0.625rem]",
        active ? "text-fg" : "text-subtle",
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function MobileLayers() {
  const layers = useGraphStore((s) => s.layers);
  const toggleLayer = useGraphStore((s) => s.toggleLayer);
  const evidence = useGraphStore((s) => s.evidence);
  const toggleEvidence = useGraphStore((s) => s.toggleEvidence);
  const complexity = useGraphStore((s) => s.complexity);
  const setComplexity = useGraphStore((s) => s.setComplexity);

  return (
    <div className="overflow-auto p-4">
      <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
        Complexity
      </p>
      <div className="mt-2 mb-4 flex gap-1">
        {COMPLEXITY_LEVELS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setComplexity(c)}
            className={cn(
              "h-9 flex-1 rounded-md text-xs capitalize",
              complexity === c ? "bg-elevated text-fg" : "text-muted",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
        Layers
      </p>
      <div className="mt-2 flex flex-col">
        {LAYERS.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => toggleLayer(l)}
            className="flex h-11 items-center gap-2 text-left text-sm"
          >
            <span
              className="size-2 rounded-full"
              style={{
                background: `var(--color-layer-${l})`,
                opacity: layers[l] ? 1 : 0.25,
              }}
            />
            <span className={layers[l] ? "text-fg" : "text-subtle"}>{LAYER_META[l].label}</span>
          </button>
        ))}
      </div>
      <p className="mt-4 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
        Evidence
      </p>
      <div className="mt-2 flex flex-col">
        {EVIDENCE_LEVELS.map((e) => (
          <button
            key={e}
            type="button"
            onClick={() => toggleEvidence(e)}
            className="flex h-11 items-center gap-2 text-left text-sm"
          >
            <EvidenceDot level={e} />
            <span className={evidence[e] ? "text-fg" : "text-subtle"}>
              {EVIDENCE_META[e].short}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
