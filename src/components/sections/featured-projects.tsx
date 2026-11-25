import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section aria-label="Selected work" className="space-y-6">
      <SectionHeading
        title="Selected Work"
        link={{ href: "/projects", label: "All projects" }}
      />
      {featuredProjects.length > 0 ? (
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant={project.image ? "illustrated" : "compact"}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Featured projects will appear here when they are published.
        </p>
      )}
    </section>
  );
}
