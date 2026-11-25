import { ProjectCard } from "@/components/projects/project-card";
import { getPublishedProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getPublishedProjects();

  return (
    <section aria-labelledby="projects-heading" className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">Directory</p>
        <h1 id="projects-heading">Projects</h1>
        <p className="max-w-prose text-muted-foreground">
          Browse published projects, with confirmed summaries and technologies.
        </p>
      </header>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant={project.image ? "illustrated" : "compact"}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-border bg-card p-5 text-muted-foreground">
          No projects have been published yet. Please check back later.
        </p>
      )}
    </section>
  );
}
