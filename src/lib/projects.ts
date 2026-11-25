import { projects } from "@/data/projects";
import type { ProjectMetadata } from "@/types/project";

export function getPublishedProjects(): ProjectMetadata[] {
  return projects.filter(
    (project) => project.publicationStatus === "published",
  );
}

export function getFeaturedProjects(): ProjectMetadata[] {
  return getPublishedProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): ProjectMetadata | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}
