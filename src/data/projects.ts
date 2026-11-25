import { projectContentModules } from "@/content/projects";
import type { ProjectMetadata } from "@/types/project";
import { validateProjectMetadata } from "@/lib/project-validation";

export const projects: ProjectMetadata[] = projectContentModules.map(
  ({ metadata }) => metadata,
);

validateProjectMetadata(projects);
