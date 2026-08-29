import { useEffect } from "react";
import { GraphCanvas } from "@/components/graph/GraphCanvas";
import { MODE_META } from "@/lib/graph/types";
import { nodeById, useGraphStore } from "@/store/graph-store";
import "@/lib/graph";
import { GraphControls } from "./GraphControls";
import { IntroOverlay } from "./IntroOverlay";
import { LayerRail } from "./LayerRail";
import { MobileDock } from "./MobileDock";
import { RightDock } from "./RightDock";
import { TopBar } from "./TopBar";

export function AppShell() {
  useEffect(() => {
    try {
      if (localStorage.getItem("reality-graph-intro-v1") === "1") {
        useGraphStore.setState({ introOpen: false });
      }
    } catch {
      /* ignore */
    }

    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
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
      if (e.key === "z" || e.key === "Z") {
        s.toggleZenMode();
      } else if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        s.toggleFrozen();
      } else if (e.key === "f" || e.key === "F") {
        s.fit();
      } else if (e.key === "l" || e.key === "L") {
        s.toggleLabels();
      } else if (e.key === "1") s.setMode("money");
      else if (e.key === "2") s.setMode("data");
      else if (e.key === "3") s.setMode("incentive");
      else if (e.key === "4") s.setMode("power");
      else if (e.key === "?") s.setHelpOpen(!s.helpOpen);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-bg text-fg">
      <GraphCanvas />
      <TopBar />
      <ModeHint />
      <LayerRail />
      <RightDock />
      <GraphControls />
      <MobileDock />
      <IntroOverlay />
      <p className="pointer-events-none absolute right-3 bottom-3 hidden max-w-xs text-right font-mono text-[0.625rem] leading-relaxed text-subtle lg:right-[24.5rem] lg:block">
        Simplified educational model — not a complete or predictive map of reality.
      </p>
    </div>
  );
}

function ModeHint() {
  const mode = useGraphStore((s) => s.mode);
  const selectedId = useGraphStore((s) => s.selectedId);
  const node = selectedId ? nodeById(selectedId) : undefined;
  if (mode === "explore") return null;
  return (
    <div className="pointer-events-none absolute top-[5.25rem] left-1/2 z-20 hidden -translate-x-1/2 md:block">
      <p className="rounded-md border border-border bg-surface/90 px-3 py-1.5 font-mono text-[0.625rem] tracking-[0.14em] text-muted uppercase backdrop-blur-sm">
        {MODE_META[mode].label}
        {node ? ` · ${node.name}` : " · select a node to trace"}
      </p>
    </div>
  );
}
