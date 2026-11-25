import { EducationTimeline } from "@/components/shared/education-timeline";
import { education } from "@/data/journey";

export function MyJourney() {
  return (
    <section
      aria-labelledby="my-journey-heading"
      className="space-y-8 rounded-lg border border-border bg-card p-5 sm:p-7"
    >
      <h2
        className="font-heading text-2xl font-semibold tracking-tight"
        id="my-journey-heading"
      >
        My Journey
      </h2>
      <EducationTimeline entries={education} />
    </section>
  );
}
