import type { Metadata } from "next";
import { ProjectDirectory } from "@/components/projects/project-directory";
import { profile } from "@/data/profile";
import { getPublishedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: "Browse published software projects by category and technology.",
};

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

      <ProjectDirectory projects={projects} />
    </section>
  );
}
