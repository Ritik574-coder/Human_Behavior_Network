import { CircleHelp, Eye, EyeOff, Layers, PanelLeft, PanelRight } from "lucide-react";
import type { ExploreMode } from "@/lib/graph/types";
import { MODE_META } from "@/lib/graph/types";
import { nodeById, useGraphStore } from "@/store/graph-store";
import { cn } from "@/lib/utils";
import { SearchBox } from "./SearchBox";

const MODES: ExploreMode[] = ["explore", "incentive", "money", "data", "power", "evidence"];

export function TopBar() {
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

  if (zenMode) {
    return (
      <header className="pointer-events-none absolute inset-x-0 top-3 z-30 flex justify-center">
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-border/80 bg-surface/95 px-4 py-1.5 shadow-lg backdrop-blur-md animate-fade-in">
          <span className="flex items-center gap-2 text-xs font-medium text-fg">
            <Eye className="size-3.5 text-accent" />
            Full Overview (Zen Mode)
          </span>
          <button
            type="button"
            onClick={toggleZenMode}
            className="rounded-full bg-elevated px-2.5 py-0.5 font-mono text-[0.625rem] text-muted hover:text-fg hover:bg-elevated/80"
          >
            Exit Zen Mode (Z)
          </button>
        </div>
      </header>
    );
  }

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex flex-col gap-2 p-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:flex-row md:items-start md:justify-between">
      <div className="pointer-events-auto flex min-w-0 items-start gap-2">
        <button
          type="button"
          className={cn(
            "mt-0.5 flex size-10 items-center justify-center rounded-md border border-border bg-surface text-muted hover:text-fg md:hidden",
            leftOpen && "text-fg bg-elevated",
          )}
          onClick={() => setLeftOpen(!leftOpen)}
          aria-label="Toggle layers"
          title="Toggle layers"
        >
          <Layers className="size-4" />
        </button>
        <button
          type="button"
          className={cn(
            "mt-0.5 hidden size-10 items-center justify-center rounded-md border border-border bg-surface text-muted hover:text-fg md:flex transition-colors",
            leftOpen ? "bg-elevated text-fg" : "text-muted",
          )}
          onClick={() => setLeftOpen(!leftOpen)}
          aria-label="Toggle layers panel"
          title={leftOpen ? "Hide layers panel" : "Show layers panel"}
        >
          <PanelLeft className="size-4" />
        </button>
        <div className="rounded-lg border border-border bg-surface/90 px-3 py-2 backdrop-blur-sm">
          <div className="flex items-baseline gap-2">
            <h1 className="font-display text-base font-medium tracking-tight text-fg">
              Reality Graph
            </h1>
            <span className="hidden font-mono text-[0.625rem] tracking-[0.14em] text-subtle uppercase sm:inline">
              Model
            </span>
          </div>
          <p className="hidden max-w-xs text-[0.6875rem] leading-snug text-subtle sm:block">
            Follow the money. Follow the data. Follow the incentives. Follow the power.
          </p>
        </div>
      </div>

      <div className="pointer-events-auto flex flex-col items-center gap-1.5 min-w-0 flex-1">
        <div className="hidden min-w-0 w-full max-w-md justify-center md:flex">
          <SearchBox />
        </div>
        {removedNode && (
          <div className="flex items-center gap-2 rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs text-amber-200 backdrop-blur-sm animate-fade-in">
            <span>Simulating Removal: <strong>{removedNode.name}</strong></span>
            <button
              type="button"
              onClick={() => setRemoved(null)}
              className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[0.625rem] hover:bg-amber-500/30 text-amber-100"
            >
              Restore
            </button>
          </div>
        )}
      </div>

      <div className="pointer-events-auto flex items-center gap-1 overflow-x-auto rounded-lg border border-border bg-surface/90 p-1 backdrop-blur-sm">
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            title={MODE_META[m].kicker}
            onClick={() => setMode(m)}
            className={cn(
              "h-8 shrink-0 rounded-sm px-2.5 text-[0.6875rem] font-medium whitespace-nowrap transition-colors duration-150",
              mode === m ? "bg-elevated text-fg" : "text-muted hover:text-fg",
            )}
          >
            {m === "explore"
              ? "Explore"
              : m === "incentive"
                ? "Incentives"
                : m === "money"
                  ? "Money"
                  : m === "data"
                    ? "Data"
                    : m === "power"
                      ? "Power"
                      : "Evidence"}
          </button>
        ))}
        <button
          type="button"
          className={cn(
            "flex size-8 items-center justify-center rounded-sm transition-colors",
            rightOpen ? "bg-elevated text-fg" : "text-muted hover:text-fg",
          )}
          onClick={toggleRightOpen}
          aria-label="Toggle inspector dock"
          title={rightOpen ? "Hide inspector dock" : "Show inspector dock"}
        >
          <PanelRight className="size-3.5" />
        </button>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-sm text-muted hover:text-fg hover:bg-elevated transition-colors"
          onClick={toggleZenMode}
          aria-label="Full Overview Mode (Zen)"
          title="Full Overview Mode (Hide all UI)"
        >
          <EyeOff className="size-3.5" />
        </button>
        <button
          type="button"
          className={cn(
            "flex size-8 items-center justify-center rounded-sm",
            helpOpen ? "text-fg" : "text-muted hover:text-fg",
          )}
          onClick={() => setHelpOpen(!helpOpen)}
          aria-label="Help"
        >
          <CircleHelp className="size-3.5" />
        </button>
      </div>
    </header>
  );
}
