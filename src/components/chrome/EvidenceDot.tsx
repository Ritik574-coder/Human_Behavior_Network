import type { EvidenceLevel } from "@/lib/graph/types";
import { cn } from "@/lib/utils";

const TONE: Record<EvidenceLevel, string> = {
  established: "bg-evidence-established",
  observed: "bg-evidence-observed",
  plausible: "bg-evidence-plausible",
  contested: "bg-evidence-contested",
  speculative: "bg-evidence-speculative",
};

export function EvidenceDot({
  level,
  className,
}: {
  level: EvidenceLevel;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-block size-1.5 shrink-0 rounded-full", TONE[level], className)}
      aria-hidden
    />
  );
}
