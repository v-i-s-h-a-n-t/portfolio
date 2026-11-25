import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedProjects() {
  return (
    <section aria-label="Selected work" className="space-y-6">
      <SectionHeading
        title="Selected Work"
        link={{ href: "/projects", label: "All projects" }}
      />
    </section>
  );
}
