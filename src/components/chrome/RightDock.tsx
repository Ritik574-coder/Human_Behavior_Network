import { X } from "lucide-react";
import { useGraphStore } from "@/store/graph-store";
import { cn } from "@/lib/utils";
import { Inspector } from "./Inspector";
import { SystemPanel } from "./SystemPanel";
import { ScenarioPanel } from "./ScenarioPanel";
import { HelpPanel } from "./HelpPanel";

const TABS = [
  { id: "inspect", label: "Inspect" },
  { id: "system", label: "System" },
  { id: "scenario", label: "Scenarios" },
  { id: "help", label: "Notes" },
] as const;

export function RightDock() {
  const panel = useGraphStore((s) => s.rightPanel);
  const setRightPanel = useGraphStore((s) => s.setRightPanel);
  const rightOpen = useGraphStore((s) => s.rightOpen);
  const toggleRightOpen = useGraphStore((s) => s.toggleRightOpen);
  const zenMode = useGraphStore((s) => s.zenMode);
  const helpOpen = useGraphStore((s) => s.helpOpen);

  const active = helpOpen ? "help" : panel;

  if (!rightOpen || zenMode) return null;

  return (
    <aside className="pointer-events-auto absolute top-24 right-3 bottom-4 z-20 hidden w-[22.5rem] flex-col overflow-hidden rounded-xl border border-border bg-surface/92 backdrop-blur-sm transition-all duration-200 lg:flex">
      <div className="flex items-center gap-0.5 p-1 border-b border-border/50">
        <div className="flex flex-1 gap-0.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                useGraphStore.getState().setHelpOpen(t.id === "help");
                setRightPanel(t.id);
              }}
              className={cn(
                "h-8 flex-1 rounded-sm text-[0.6875rem] font-medium transition-colors",
                active === t.id ? "bg-elevated text-fg" : "text-muted hover:text-fg",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleRightOpen}
          className="flex size-8 shrink-0 items-center justify-center rounded-sm text-muted hover:bg-elevated hover:text-fg"
          title="Hide panel"
          aria-label="Hide panel"
        >
          <X className="size-3.5" />
        </button>
      </div>
      <div className="min-h-0 flex-1">
        {active === "inspect" && <Inspector />}
        {active === "system" && <SystemPanel />}
        {active === "scenario" && <ScenarioPanel />}
        {active === "help" && <HelpPanel />}
      </div>
    </aside>
  );
}
