import { Trophy } from "lucide-react";

export function AcademicExcellenceBanner() {
  return (
    <section
      aria-labelledby="academic-excellence-heading"
      className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-5 sm:gap-5 sm:px-7"
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
    </section>
  );
}
