import { GraduationCap } from "lucide-react";
import type { EducationRecord } from "@/types/journey";

export function EducationTimeline({ entries }: { entries: EducationRecord[] }) {
  return (
    <ol aria-label="Education timeline" className="space-y-6">
      {entries.map((entry) => (
        <li className="flex items-start gap-4" key={entry.id}>
          <GraduationCap
            aria-hidden="true"
            className="mt-0.5 size-9 shrink-0 text-primary sm:size-10"
            strokeWidth={2}
          />
          <div className="min-w-0 space-y-2">
            <h3 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
              {entry.institution}
            </h3>
            <p className="text-base sm:text-lg">{entry.degree}</p>
            {entry.expectedGraduation ? (
              <p className="text-base text-muted-foreground sm:text-lg">
                Expected graduation — {entry.expectedGraduation}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
