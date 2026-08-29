import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { CATEGORY_META } from "@/lib/graph/types";
import { searchHits, useGraphStore } from "@/store/graph-store";
import { cn } from "@/lib/utils";

export function SearchBox({ compact = false }: { compact?: boolean }) {
  const query = useGraphStore((s) => s.query);
  const setQuery = useGraphStore((s) => s.setQuery);
  const searchIndex = useGraphStore((s) => s.searchIndex);
  const setSearchIndex = useGraphStore((s) => s.setSearchIndex);
  const commitSearch = useGraphStore((s) => s.commitSearch);
  const select = useGraphStore((s) => s.select);
  const inputRef = useRef<HTMLInputElement>(null);
  const hits = query.trim() ? searchHits(useGraphStore.getState()) : [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (e.key === "/" && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={cn("relative", compact ? "w-full" : "w-full max-w-md")}>
      <Search className="pointer-events-none absolute top-1/2 left-3 size-3.5 -translate-y-1/2 text-subtle" />
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setSearchIndex(Math.min(hits.length - 1, searchIndex + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSearchIndex(Math.max(0, searchIndex - 1));
          } else if (e.key === "Enter") {
            e.preventDefault();
            const hit = hits[searchIndex] ?? hits[0];
            if (hit) {
              select(hit.id);
              commitSearch();
            }
          } else if (e.key === "Escape") {
            setQuery("");
            inputRef.current?.blur();
          }
        }}
        placeholder="Search systems, incentives, flows"
        className="h-10 w-full rounded-md border border-border bg-elevated/80 pr-9 pl-9 text-sm text-fg placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:outline-none"
        aria-label="Search the graph"
        autoComplete="off"
      />
      {query ? (
        <button
          type="button"
          className="absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center text-subtle hover:text-fg"
          onClick={() => setQuery("")}
          aria-label="Clear search"
        >
          <X className="size-3.5" />
        </button>
      ) : (
        <kbd className="pointer-events-none absolute top-1/2 right-2.5 hidden -translate-y-1/2 rounded-sm border border-border px-1.5 font-mono text-[0.625rem] text-subtle sm:block">
          /
        </kbd>
      )}
      {hits.length > 0 && (
        <ul
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-30 max-h-72 overflow-auto rounded-lg border border-border bg-surface py-1 shadow-[var(--shadow-border)]"
          role="listbox"
        >
          {hits.map((h, i) => (
            <li key={h.id}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-baseline justify-between gap-3 px-3 py-2 text-left text-sm",
                  i === searchIndex ? "bg-elevated text-fg" : "text-muted hover:bg-elevated hover:text-fg",
                )}
                onMouseEnter={() => setSearchIndex(i)}
                onClick={() => {
                  select(h.id);
                  setQuery(h.name);
                }}
              >
                <span>{h.name}</span>
                <span className="font-mono text-[0.625rem] tracking-wide text-subtle uppercase">
                  {h.category in CATEGORY_META
                    ? CATEGORY_META[h.category as keyof typeof CATEGORY_META].label
                    : h.why}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
