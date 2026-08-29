import { SCENARIOS } from "@/lib/graph/scenarios";
import { EVIDENCE_META } from "@/lib/graph/types";
import { nodeById, useGraphStore } from "@/store/graph-store";
import { EvidenceDot } from "./EvidenceDot";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function ScenarioPanel() {
  const active = useGraphStore((s) => s.activeScenario);
  const setScenario = useGraphStore((s) => s.setScenario);
  const select = useGraphStore((s) => s.select);
  const scenario = SCENARIOS.find((s) => s.id === active) ?? null;

  return (
    <ScrollArea className="h-full">
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Scenario simulator
        </p>
        <h2 className="mt-1 font-display text-2xl text-fg">Hypotheticals</h2>
        <p className="mt-2 rounded-md border border-border bg-elevated/50 px-2.5 py-2 font-mono text-[0.625rem] leading-relaxed tracking-wide text-muted uppercase">
          Modelled scenario — not a real-world forecast
        </p>
      </div>
      <div className="flex flex-col gap-1 px-3 pb-3">
        {SCENARIOS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setScenario(active === s.id ? null : s.id)}
            className={cn(
              "rounded-md border px-3 py-2 text-left text-xs leading-snug",
              active === s.id
                ? "border-border-strong bg-elevated text-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {s.title}
          </button>
        ))}
      </div>
      {scenario && (
        <>
          <Separator />
          <section className="px-4 py-3">
            <p className="text-sm leading-relaxed text-fg">{scenario.prompt}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">{scenario.summary}</p>
          </section>
          <Separator />
          <section className="px-4 py-3">
            <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
              Shocks
            </h3>
            <ul className="flex flex-col gap-1.5">
              {scenario.shocks.map((sh) => (
                <li key={sh.nodeId}>
                  <button
                    type="button"
                    onClick={() => select(sh.nodeId)}
                    className="text-left text-xs text-muted hover:text-fg"
                  >
                    <span className="font-mono text-subtle">{sh.direction}</span>{" "}
                    {nodeById(sh.nodeId)?.name ?? sh.nodeId} — {sh.label}
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <Separator />
          <section className="px-4 py-3">
            <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
              Propagated effects
            </h3>
            <ul className="flex flex-col gap-2">
              {scenario.effects.map((ef, i) => (
                <li key={`${ef.nodeId}-${i}`} className="flex gap-2 text-xs leading-relaxed text-muted">
                  <EvidenceDot level={ef.evidenceLevel} className="mt-1" />
                  <span>
                    <span className="font-mono text-subtle">L{ef.order}</span>{" "}
                    <button type="button" className="text-fg hover:underline" onClick={() => select(ef.nodeId)}>
                      {nodeById(ef.nodeId)?.name ?? ef.nodeId}
                    </button>
                    {" — "}
                    {ef.text}{" "}
                    <span className="text-subtle">({EVIDENCE_META[ef.evidenceLevel].short})</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
          <Separator />
          <section className="px-4 py-3 pb-6">
            <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
              Tensions
            </h3>
            <ul className="flex flex-col gap-2">
              {scenario.tensions.map((t) => (
                <li key={`${t.a}-${t.b}`} className="text-xs text-muted">
                  <span className="text-fg">{t.a}</span>
                  <span className="mx-1.5 text-subtle">vs</span>
                  <span className="text-fg">{t.b}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </ScrollArea>
  );
}
