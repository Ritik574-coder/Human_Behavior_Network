import type { ReactNode } from "react";
import { EDGES } from "@/lib/graph/edges";
import { nodeById, useGraphStore } from "@/store/graph-store";
import { EvidenceDot } from "./EvidenceDot";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CATEGORY_META,
  EVIDENCE_META,
  LAYER_META,
  MODE_META,
  TRACE_DEPTHS,
} from "@/lib/graph/types";
import { traceFrom } from "@/lib/graph/traces";
import { NODES } from "@/lib/graph/nodes";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-4 py-3">
      <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
        {title}
      </h3>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  if (!items.length) return <p className="text-xs text-subtle">None recorded in this model.</p>;
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item} className="text-xs leading-relaxed text-muted">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Related({ ids }: { ids: string[] }) {
  const select = useGraphStore((s) => s.select);
  return (
    <div className="flex flex-wrap gap-1.5">
      {ids.map((id) => {
        const n = nodeById(id) ?? NODES.find((x) => x.name.toLowerCase() === id.toLowerCase());
        const label = n?.name ?? id;
        const nid = n?.id;
        return (
          <button
            key={id}
            type="button"
            disabled={!nid}
            onClick={() => nid && select(nid)}
            className="rounded-sm border border-border bg-elevated px-2 py-1 text-[0.6875rem] text-muted hover:text-fg disabled:opacity-50"
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export function Inspector() {
  const selectedId = useGraphStore((s) => s.selectedId);
  const mode = useGraphStore((s) => s.mode);
  const traceDepth = useGraphStore((s) => s.traceDepth);
  const setTraceDepth = useGraphStore((s) => s.setTraceDepth);
  const expandNeighborhood = useGraphStore((s) => s.expandNeighborhood);
  const collapseNeighborhood = useGraphStore((s) => s.collapseNeighborhood);
  const setRemoved = useGraphStore((s) => s.setRemoved);
  const pathTargetId = useGraphStore((s) => s.pathTargetId);
  const setPathTarget = useGraphStore((s) => s.setPathTarget);
  const removedId = useGraphStore((s) => s.removedId);

  const node = selectedId ? nodeById(selectedId) : undefined;
  const pathTargetNode = pathTargetId ? nodeById(pathTargetId) : null;

  if (!node) {
    return (
      <div className="flex h-full flex-col justify-center px-5 text-sm text-muted">
        <p className="font-display text-lg text-fg">Select a node</p>
        <p className="mt-2 text-xs leading-relaxed text-subtle">
          Click any entity to inspect its role, incentives, evidence, and
          externalities. Shift-click a second node to trace a path.
        </p>
      </div>
    );
  }

  const relatedEdges = EDGES.filter((e) => e.source === node.id || e.target === node.id).slice(
    0,
    12,
  );
  const tracing = mode === "incentive" || mode === "money" || mode === "data" || mode === "power";
  const trace = tracing
    ? traceFrom(node.id, mode, traceDepth, EDGES, NODES)
    : null;

  return (
    <ScrollArea className="h-full">
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          {CATEGORY_META[node.category].label}
        </p>
        <h2 className="mt-1 font-display text-2xl leading-tight text-fg">{node.name}</h2>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2 py-0.5 text-[0.6875rem] text-muted">
            <EvidenceDot level={node.evidenceLevel} />
            {EVIDENCE_META[node.evidenceLevel].short}
          </span>
          {node.layers.map((l) => (
            <Badge key={l} variant="outline">
              {LAYER_META[l].label}
            </Badge>
          ))}
        </div>
        {pathTargetNode && (
          <div className="mt-2.5 flex items-center justify-between rounded border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs text-fg">
            <span>Tracing causality to: <strong>{pathTargetNode.name}</strong></span>
            <button
              type="button"
              onClick={() => setPathTarget(null)}
              className="text-[0.625rem] text-subtle hover:text-fg"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      <Separator />
      <Section title="Role in the system">
        <p className="text-sm leading-relaxed text-fg">{node.role}</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{node.description}</p>
      </Section>
      {tracing && (
        <>
          <Separator />
          <Section title={MODE_META[mode].label}>
            <p className="mb-3 text-xs text-subtle">{MODE_META[mode].kicker}</p>
            {tracing && (
              <div className="mb-3 flex flex-wrap gap-1">
                {TRACE_DEPTHS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setTraceDepth(d)}
                    className={
                      traceDepth === d
                        ? "h-7 rounded-sm bg-elevated px-2 font-mono text-[0.6875rem] text-fg"
                        : "h-7 rounded-sm px-2 font-mono text-[0.6875rem] text-muted hover:text-fg"
                    }
                  >
                    {d === 99 ? "Full" : `Depth ${d}`}
                  </button>
                ))}
              </div>
            )}
            {mode === "incentive" && (
              <dl className="flex flex-col gap-3">
                <Item k="Optimizes for" v={node.optimizesFor} />
                <Item k="Depends on" v={node.resources.join(" · ")} />
                <Item k="Gains" v={node.gains.join(" · ")} />
                <Item k="Risks" v={node.risks.join(" · ")} />
                <Item k="Who pays" v={node.whoPays.join(" · ")} />
                <Item k="Who benefits" v={node.whoBenefits.join(" · ")} />
                <Item k="Encouraged behavior" v={node.encouragedBehavior} />
                <Item k="Unintended behavior" v={node.unintendedBehavior} />
              </dl>
            )}
            {trace && mode !== "incentive" && (
              <ol className="flex flex-col gap-1.5">
                {trace.steps.slice(0, 18).map((s) => {
                  const n = nodeById(s.nodeId);
                  return (
                    <li key={`${s.nodeId}-${s.hop}`} className="text-xs text-muted">
                      <span className="font-mono text-subtle">{s.hop}</span>{" "}
                      <span className="text-fg">{n?.name ?? s.nodeId}</span>
                      {s.via ? <span className="text-subtle"> — {s.via}</span> : null}
                    </li>
                  );
                })}
              </ol>
            )}
          </Section>
        </>
      )}
      {node.tensions && node.tensions.length > 0 && (
        <>
          <Separator />
          <Section title="Tensions">
            <ul className="flex flex-col gap-2">
              {node.tensions.map((t) => (
                <li key={`${t.a}-${t.b}`} className="text-xs leading-relaxed text-muted">
                  <span className="text-fg">{t.a}</span>
                  <span className="mx-1.5 text-subtle">vs</span>
                  <span className="text-fg">{t.b}</span>
                </li>
              ))}
            </ul>
          </Section>
        </>
      )}
      <Separator />
      <Section title="Main incentives">
        <List items={node.incentives} />
      </Section>
      <Separator />
      <Section title="Inputs / outputs">
        <p className="mb-1 text-[0.6875rem] text-subtle">Inputs</p>
        <List items={node.inputs} />
        <p className="mt-3 mb-1 text-[0.6875rem] text-subtle">Outputs</p>
        <List items={node.outputs} />
      </Section>
      <Separator />
      <Section title="Dependencies">
        <List items={node.dependencies} />
      </Section>
      <Separator />
      <Section title="Who benefits / who bears costs">
        <p className="mb-1 text-[0.6875rem] text-subtle">Benefits</p>
        <List items={node.whoBenefits} />
        <p className="mt-3 mb-1 text-[0.6875rem] text-subtle">Costs</p>
        <List items={node.whoBearsCosts} />
      </Section>
      <Separator />
      <Section title="Effects">
        <p className="mb-1 text-[0.6875rem] text-subtle">Positive</p>
        <List items={node.positiveEffects} />
        <p className="mt-3 mb-1 text-[0.6875rem] text-subtle">Negative externalities</p>
        <List items={node.negativeExternalities} />
        <p className="mt-3 mb-1 text-[0.6875rem] text-subtle">Unintended consequences</p>
        <List items={node.unintendedConsequences} />
      </Section>
      {node.claims && node.claims.length > 0 && (
        <>
          <Separator />
          <Section title="Claims & evidence">
            <ul className="flex flex-col gap-2">
              {node.claims.map((c) => (
                <li key={c.text} className="flex gap-2 text-xs leading-relaxed text-muted">
                  <EvidenceDot level={c.evidence} className="mt-1" />
                  <span>
                    {c.text}{" "}
                    <span className="text-subtle">({EVIDENCE_META[c.evidence].short})</span>
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </>
      )}
      <Separator />
      <Section title="Known uncertainties">
        <List items={node.uncertainties} />
      </Section>
      {node.geographicNote && (
        <>
          <Separator />
          <Section title="Geographic note">
            <p className="text-xs leading-relaxed text-muted">{node.geographicNote}</p>
          </Section>
        </>
      )}
      <Separator />
      <Section title="Related systems">
        <Related ids={node.relatedSystems} />
      </Section>
      <Separator />
      <Section title="Relationships in this model">
        <ul className="flex flex-col gap-1.5">
          {relatedEdges.map((e) => (
            <li key={e.id} className="flex items-start gap-2 text-xs text-muted">
              <EvidenceDot level={e.evidenceLevel} className="mt-1" />
              <span>
                <span className="text-fg">{nodeById(e.source)?.name}</span>
                <span className="text-subtle"> → </span>
                <span className="text-fg">{nodeById(e.target)?.name}</span>
                <span className="block text-subtle">{e.label}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>
      <Separator />
      <div className="flex flex-col gap-2 p-4">
        <button
          type="button"
          onClick={expandNeighborhood}
          className="h-9 rounded-md border border-border bg-elevated text-xs text-fg hover:bg-elevated/80"
        >
          Expand neighborhood
        </button>
        <button
          type="button"
          onClick={collapseNeighborhood}
          className="h-9 rounded-md border border-border text-xs text-muted hover:text-fg"
        >
          Collapse neighborhood
        </button>
        <button
          type="button"
          onClick={() => setRemoved(removedId === node.id ? null : node.id)}
          className={
            removedId === node.id
              ? "h-9 rounded-md border border-amber-500/50 bg-amber-500/20 text-xs font-medium text-amber-200"
              : "h-9 rounded-md border border-border text-xs text-muted hover:text-fg"
          }
        >
          {removedId === node.id ? "Restore node to system" : "Simulate removal"}
        </button>
      </div>
      <p className="px-4 pb-5 text-[0.625rem] leading-relaxed text-subtle">
        Evidence describes this model, not a complete literature review. Challenge
        the assumptions.
      </p>
    </ScrollArea>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[0.6875rem] text-subtle">{k}</dt>
      <dd className="text-xs leading-relaxed text-fg">{v}</dd>
    </div>
  );
}
