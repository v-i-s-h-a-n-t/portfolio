import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";

export function AcademicExcellenceBanner() {
  return (
    <Link
      aria-label="View academic achievements"
      className="group flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-5 text-foreground no-underline transition-colors hover:border-primary/50 hover:bg-secondary/50 hover:no-underline sm:gap-5 sm:px-7"
      href="/achievements"
    >
      <Trophy
        aria-hidden="true"
        className="size-7 shrink-0 text-primary sm:size-8"
        strokeWidth={2}
      />
      <div className="min-w-0">
        <h2
          className="font-heading text-xl font-semibold tracking-tight sm:text-2xl"
          id="academic-excellence-heading"
        >
          Academic Excellence
        </h2>
        <p className="mt-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Most Outstanding Student — Software Engineering &amp; STEMP, 2025
        </p>
      </div>
      <ArrowUpRight
        aria-hidden="true"
        className="ml-auto size-5 shrink-0 text-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
      />
    </Link>
  );
}
