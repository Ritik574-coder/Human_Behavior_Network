import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const SHORTCUTS = [
  ["/", "Focus search"],
  ["Esc", "Clear selection / close"],
  ["F", "Fit graph"],
  ["Space", "Freeze or run layout"],
  ["L", "Toggle labels"],
  ["1–4", "Money / data / incentives / power"],
  ["Shift-click", "Trace path from selection"],
];

export function HelpPanel() {
  return (
    <ScrollArea className="h-full">
      <div className="px-4 pt-4 pb-2">
        <p className="font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          How to read this
        </p>
        <h2 className="mt-1 font-display text-2xl text-fg">A model, not a map of truth</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Every node and edge answers four questions: what do we know, how do we
          know it, what is interpretation, and what remains uncertain. Nothing
          here is a prediction of reality.
        </p>
      </div>
      <Separator />
      <section className="px-4 py-3">
        <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Evidence
        </h3>
        <ul className="flex flex-col gap-1.5 text-xs text-muted">
          <li>Established — accounting identities and strongly supported facts.</li>
          <li>Observed — repeated industry or social patterns.</li>
          <li>Plausible — coherent mechanism, thinner measurement.</li>
          <li>Contested — serious disagreement on meaning or magnitude.</li>
          <li>Speculative — hypothesis. Never treat as fact.</li>
        </ul>
      </section>
      <Separator />
      <section className="px-4 py-3">
        <h3 className="mb-2 font-mono text-[0.625rem] tracking-[0.16em] text-subtle uppercase">
          Shortcuts
        </h3>
        <ul className="flex flex-col gap-1.5">
          {SHORTCUTS.map(([k, v]) => (
            <li key={k} className="flex items-center justify-between gap-3 text-xs">
              <span className="text-muted">{v}</span>
              <kbd className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[0.625rem] text-subtle">
                {k}
              </kbd>
            </li>
          ))}
        </ul>
      </section>
      <p className="px-4 pt-2 pb-5 text-[0.625rem] leading-relaxed text-subtle">
        Dataset is a simplified educational model of archetypal systems. It does
        not assert hidden coordination among named firms.
      </p>
    </ScrollArea>
  );
}
