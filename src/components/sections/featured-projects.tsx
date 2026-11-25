import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/data/projects";

const selectedProjectSlugs = [
  "applicant-tracking-system",
  "distributed-worker-cluster",
  "student-administration-system",
  "antibiotic-resistance-analysis",
] as const;

const selectedProjects = selectedProjectSlugs.map((slug) => {
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    throw new Error(`Selected project "${slug}" is missing from the registry.`);
  }

  return project;
});

export function FeaturedProjects() {
  return (
    <section aria-label="Selected work" className="space-y-6">
      <SectionHeading
        title="Selected Work"
        link={{ href: "/projects", label: "All projects" }}
      />
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {selectedProjects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            variant={index < 2 ? "illustrated" : "compact"}
          />
        ))}
      </div>
    </section>
  );
}
