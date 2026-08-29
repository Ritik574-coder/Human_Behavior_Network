import { computeMetrics, loopsTouching } from "@/lib/graph/analytics";
import { LOOPS } from "@/lib/graph/loops";
import { NODES } from "@/lib/graph/nodes";
import { EDGES } from "@/lib/graph/edges";
import { removalCascade } from "@/lib/graph/traces";
import { useMemo } from "react";
import {
  nodeById,
  useGraphStore,
  visibleEdges,
  visibleNodeSet,
} from "@/store/graph-store";
import { EvidenceDot } from "./EvidenceDot";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-elevated/60 px-3 py-2">
      <p className="font-mono text-[0.625rem] tracking-wide text-subtle uppercase">{label}</p>
      <p className="mt-0.5 font-mono text-sm tabular-nums text-fg">{value}</p>
    </div>
  );
}

export function SystemPanel() {
  const select = useGraphStore((s) => s.select);
  const setLoop = useGraphStore((s) => s.setLoop);
  const activeLoop = useGraphStore((s) => s.activeLoop);
  const removedId = useGraphStore((s) => s.removedId);
  const setRemoved = useGraphStore((s) => s.setRemoved);
  const selectedId = useGraphStore((s) => s.selectedId);
  const complexity = useGraphStore((s) => s.complexity);
  const layerSig = useGraphStore((s) =>
    Object.values(s.layers)
      .map((v) => (v ? "1" : "0"))
      .join(""),
  );
  const evidenceSig = useGraphStore((s) =>
    Object.values(s.evidence)
      .map((v) => (v ? "1" : "0"))
      .join(""),
  );
  const edgeSig = useGraphStore((s) =>
    Object.values(s.edgeTypes)
      .map((v) => (v ? "1" : "0"))
      .join(""),
  );
  const expandedLen = useGraphStore((s) => s.expandedIds.length);
  const collapsedLen = useGraphStore((s) => s.collapsedIds.length);
  const loops = loopsTouching(LOOPS, selectedId);

  const metrics = useMemo(() => {
    const s = useGraphStore.getState();
    const vis = visibleNodeSet(s);
    const edges = visibleEdges(s, vis);
    return computeMetrics(NODES, edges, vis);
  }, [
    selectedId,
    removedId,
    complexity,
    layerSig,
    evidenceSig,
    edgeSig,
    expandedLen,
    collapsedLen,
  ]);

  const cascade = removedId ? removalCascade(removedId, EDGES, NODES) : null;

  return (
    <ScrollArea className="h-full">
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          System state
        </p>
        <h2 className="mt-1 font-display text-2xl text-fg">Live model</h2>
        <p className="mt-1 text-xs text-subtle">
          Computed from the currently visible graph — not a measurement of the world.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 px-4 py-2">
        <Metric label="Entities" value={String(metrics.entityCount)} />
        <Metric label="Relationships" value={String(metrics.relationshipCount)} />
        <Metric
          label="Uncertainty"
          value={`${Math.round(metrics.uncertainty * 100)}%`}
        />
        <Metric label="Loops" value={String(LOOPS.length)} />
      </div>
      <Separator />
      <Block title="Strongest hubs" items={metrics.hubs} onPick={select} />
      <Separator />
      <Block title="Highest dependency" items={metrics.highDependency} onPick={select} />
      <Separator />
      <Block title="Bottlenecks" items={metrics.bottlenecks} onPick={select} />
      <Separator />
      <Block title="High-leverage nodes" items={metrics.highLeverage} onPick={select} />
      <Separator />
      <section className="px-4 py-3">
        <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Major feedback loops
        </h3>
        <ul className="flex flex-col gap-2">
          {(selectedId ? loops : LOOPS).map((l) => (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => setLoop(activeLoop === l.id ? null : l.id)}
                className="w-full rounded-md border border-border px-2.5 py-2 text-left hover:bg-elevated"
              >
                <span className="flex items-center gap-2 text-xs text-fg">
                  <EvidenceDot level={l.evidenceLevel} />
                  {l.name}
                </span>
                <span className="mt-1 block text-[0.6875rem] leading-relaxed text-subtle">
                  {l.summary}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Separator />
      <section className="px-4 py-3">
        <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          What if this node disappears?
        </h3>
        <p className="mb-2 text-[0.6875rem] text-subtle">
          Modelled cascade — not a real-world forecast. Uses outgoing dependencies in this graph.
        </p>
        {removedId ? (
          <div className="flex flex-col gap-2">
            <p className="text-xs text-fg">
              Removed: {nodeById(removedId)?.name ?? removedId}
            </p>
            <Cascade label="Broken links" ids={[]} extra={`${cascade?.brokenEdgeIds.length ?? 0} edges`} />
            <Cascade label="First-order" ids={cascade?.first ?? []} />
            <Cascade label="Second-order" ids={cascade?.second ?? []} />
            <Cascade label="Third-order" ids={cascade?.third ?? []} />
            <button
              type="button"
              className="h-8 rounded-sm border border-border text-xs text-muted hover:text-fg"
              onClick={() => setRemoved(null)}
            >
              Restore node
            </button>
          </div>
        ) : (
          <p className="text-xs text-muted">
            Select a node, then choose Simulate removal in the inspector.
          </p>
        )}
      </section>
      <p className="px-4 pb-5 text-[0.625rem] leading-relaxed text-subtle">
        Hubs and bottlenecks are graph statistics on this simplified model. High
        betweenness is not the same as political power.
      </p>
    </ScrollArea>
  );
}

function Block({
  title,
  items,
  onPick,
}: {
  title: string;
  items: { id: string; name: string; degree: number }[];
  onPick: (id: string) => void;
}) {
  return (
    <section className="px-4 py-3">
      <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-1">
        {items.map((h) => (
          <li key={h.id}>
            <button
              type="button"
              onClick={() => onPick(h.id)}
              className="flex w-full items-baseline justify-between gap-2 rounded-sm px-1 py-1 text-left text-xs hover:bg-elevated"
            >
              <span className="text-fg">{h.name}</span>
              <span className="font-mono tabular-nums text-subtle">
                {Number.isInteger(h.degree) ? h.degree : h.degree.toFixed(1)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Cascade({ label, ids, extra }: { label: string; ids: string[]; extra?: string }) {
  const select = useGraphStore((s) => s.select);
  return (
    <div>
      <p className="text-[0.6875rem] text-subtle">
        {label}
        {extra ? ` · ${extra}` : ids.length ? ` · ${ids.length}` : " · none"}
      </p>
      <div className="mt-1 flex flex-wrap gap-1">
        {ids.slice(0, 8).map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => select(id)}
            className="rounded-sm border border-border px-1.5 py-0.5 text-[0.6875rem] text-muted hover:text-fg"
          >
            {nodeById(id)?.name ?? id}
          </button>
        ))}
      </div>
    </div>
  );
}

