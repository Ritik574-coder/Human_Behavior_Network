import { useGraphStore } from "@/store/graph-store";

export function IntroOverlay() {
  const open = useGraphStore((s) => s.introOpen);
  const dismiss = useGraphStore((s) => s.dismissIntro);
  if (!open) return null;

  return (
    <div className="absolute inset-0 z-40 flex items-end justify-center bg-bg/80 sm:items-center">
      <div className="relative w-full max-w-xl px-6 pb-[calc(env(safe-area-inset-bottom)+2.5rem)] pt-16 sm:pb-8">
        <p className="intro-rise font-mono text-[0.6875rem] tracking-[0.22em] text-subtle uppercase">
          Educational model
        </p>
        <h1
          className="intro-rise mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-fg sm:text-5xl"
          style={{ animationDelay: "40ms" }}
        >
          Reality Graph
        </h1>
        <p
          className="intro-rise mt-2 font-display text-lg italic text-muted sm:text-xl"
          style={{ animationDelay: "80ms" }}
        >
          How the modern world actually works
        </p>
        <p
          className="intro-rise mt-5 max-w-md text-sm leading-relaxed text-muted"
          style={{ animationDelay: "120ms" }}
        >
          Follow the money. Follow the data. Follow the incentives. Follow the
          power.
        </p>
        <p
          className="intro-rise mt-4 max-w-md text-sm leading-relaxed text-subtle"
          style={{ animationDelay: "160ms" }}
        >
          This is one evidence-weighted model of interconnected systems. Explore
          the relationships, inspect the incentives, follow the flows, and
          challenge the assumptions. It is not a forecast, and not a claim that
          every link is proven cause.
        </p>
        <div className="intro-rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "200ms" }}>
          <button
            type="button"
            onClick={dismiss}
            className="h-11 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-opacity duration-150 hover:opacity-90"
          >
            Enter the model
          </button>
          <span className="font-mono text-[0.6875rem] text-subtle">
            Centered on human behavior
          </span>
        </div>
      </div>
    </div>
  );
}
