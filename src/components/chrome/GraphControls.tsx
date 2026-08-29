import type { ReactNode } from "react";
import {
  Crosshair,
  Download,
  FileJson,
  Focus,
  Pause,
  Play,
  Repeat,
  RotateCcw,
  Scan,
  Tag,
} from "lucide-react";
import { COMPLEXITY_LEVELS } from "@/lib/graph/types";
import { NODES } from "@/lib/graph/nodes";
import { EDGES } from "@/lib/graph/edges";
import { useGraphStore } from "@/store/graph-store";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function GraphControls() {
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
  const zenMode = useGraphStore((s) => s.zenMode);

  if (zenMode) return null;

  const downloadSnapshot = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    try {
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `reality-graph-snapshot-${Date.now()}.png`;
      a.click();
    } catch {
      /* ignore canvas export errors */
    }
  };

  const downloadData = () => {
    const s = useGraphStore.getState();
    const payload = {
      timestamp: new Date().toISOString(),
      builder: "Ritik",
      project: "Human Behavior Pattern / Reality Graph",
      mode: s.mode,
      complexity: s.complexity,
      selectedId: s.selectedId,
      pathTargetId: s.pathTargetId,
      removedId: s.removedId,
      activeScenario: s.activeScenario,
      nodesCount: NODES.length,
      edgesCount: EDGES.length,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reality-graph-data-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pointer-events-auto absolute bottom-3 left-3 z-20 flex max-w-[min(100%-1.5rem,22rem)] flex-col gap-2 pb-[env(safe-area-inset-bottom)] md:bottom-4 md:left-4">
      <div className="hidden rounded-lg border border-border bg-surface/92 p-3 backdrop-blur-sm md:block">
        <div className="mb-2 flex gap-1">
          {COMPLEXITY_LEVELS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setComplexity(c)}
              className={cn(
                "h-7 flex-1 rounded-sm text-[0.6875rem] capitalize",
                complexity === c ? "bg-elevated text-fg" : "text-muted hover:text-fg",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 py-1 text-[0.6875rem] text-subtle">
          <span className="w-16">Node size</span>
          <Slider
            min={0.6}
            max={1.8}
            step={0.05}
            value={[nodeSizeScale]}
            onValueChange={(v) => setNodeSizeScale(v[0] ?? 1)}
          />
        </label>
        <label className="flex items-center gap-3 py-1 text-[0.6875rem] text-subtle">
          <span className="w-16">Edges</span>
          <Slider
            min={0.4}
            max={2}
            step={0.05}
            value={[edgeStrength]}
            onValueChange={(v) => setEdgeStrength(v[0] ?? 1)}
          />
        </label>
        <label className="flex items-center gap-3 py-1 text-[0.6875rem] text-subtle">
          <span className="w-16">Forces</span>
          <Slider
            min={0.4}
            max={2}
            step={0.05}
            value={[simStrength]}
            onValueChange={(v) => setSimStrength(v[0] ?? 1)}
          />
        </label>
      </div>
      <div className="flex items-center gap-1 rounded-lg border border-border bg-surface/92 p-1 backdrop-blur-sm">
        <IconBtn label={frozen ? "Run simulation" : "Freeze"} onClick={toggleFrozen}>
          {frozen ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}
        </IconBtn>
        <IconBtn label="Reheat simulation" onClick={reheat}>
          <RotateCcw className="size-3.5" />
        </IconBtn>
        <IconBtn label="Fit graph" onClick={fit}>
          <Scan className="size-3.5" />
        </IconBtn>
        <IconBtn label="Center selected" onClick={centerSelected}>
          <Focus className="size-3.5" />
        </IconBtn>
        <IconBtn label="Toggle labels" onClick={toggleLabels} active={showLabels}>
          <Tag className="size-3.5" />
        </IconBtn>
        <IconBtn label="Highlight feedback loops" onClick={toggleLoops} active={showLoops}>
          <Repeat className="size-3.5" />
        </IconBtn>
        <IconBtn
          label="System state"
          onClick={() => setRightPanel("system")}
          active={rightPanel === "system"}
        >
          <Crosshair className="size-3.5" />
        </IconBtn>
        <IconBtn label="Export PNG Snapshot" onClick={downloadSnapshot}>
          <Download className="size-3.5" />
        </IconBtn>
        <IconBtn label="Export System Data JSON" onClick={downloadData}>
          <FileJson className="size-3.5" />
        </IconBtn>
      </div>
    </div>
  );
}

function IconBtn({
  children,
  onClick,
  label,
  active,
}: {
  children: ReactNode;
  onClick: () => void;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "flex size-9 items-center justify-center rounded-sm",
        active ? "bg-elevated text-fg" : "text-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
