import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { getPublishedProjects } from "@/lib/projects";

export function ProjectDetailNavigation({
  relatedSlugs = [],
}: {
  relatedSlugs?: readonly string[];
}) {
  const relatedProjects = getPublishedProjects().filter((project) =>
    relatedSlugs.includes(project.slug),
  );

  return (
    <div className="space-y-8 border-t border-border pt-6">
      <Link
        className="inline-flex items-center gap-2 text-sm font-medium text-primary"
        href="/projects"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Back to all projects
      </Link>

      {relatedProjects.length > 0 ? (
        <section
          aria-labelledby="related-projects-heading"
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold" id="related-projects-heading">
            Related projects
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedProjects.map((project) => (
              <ProjectCard
                href={`/projects/${project.slug}`}
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
