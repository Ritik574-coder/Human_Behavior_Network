import { useEffect, useRef } from "react";
import { EDGES } from "@/lib/graph/edges";
import { NODES } from "@/lib/graph/nodes";
import { useGraphStore } from "@/store/graph-store";
import { GraphEngine } from "./engine";

export function GraphCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GraphEngine | null>(null);

  useEffect(() => {
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
      onHover: (id) => useGraphStore.getState().hover(id),
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

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full touch-none"
      aria-label="Reality graph canvas"
    />
  );
}
