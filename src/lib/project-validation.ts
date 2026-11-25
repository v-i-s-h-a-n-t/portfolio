import type { ProjectIllustrationType, ProjectMetadata } from "@/types/project";

const illustrationTypes: ProjectIllustrationType[] = [
  "architecture",
  "workflow",
  "data-visualization",
  "interface",
];

function requireText(value: unknown, field: string, projectTitle: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `Project "${projectTitle}" must have a non-empty ${field}.`,
    );
  }
}

function validateOptionalUrl(
  value: string | undefined,
  field: string,
  projectTitle: string,
) {
  if (value === undefined) return;

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error();
    }
  } catch {
    throw new Error(`Project "${projectTitle}" has an invalid ${field} URL.`);
  }
}

export function validateProjectMetadata(
  projectMetadata: readonly ProjectMetadata[],
): void {
  const seenSlugs = new Set<string>();

  for (const [index, project] of projectMetadata.entries()) {
    const projectTitle =
      typeof project.title === "string" && project.title.trim()
        ? project.title
        : `at index ${index}`;

    requireText(project.title, "title", projectTitle);
    requireText(project.slug, "slug", projectTitle);

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
      throw new Error(`Project "${projectTitle}" has an invalid slug.`);
    }

    if (seenSlugs.has(project.slug)) {
      throw new Error(`Duplicate project slug "${project.slug}".`);
    }
    seenSlugs.add(project.slug);

    if (
      project.description !== null &&
      (typeof project.description !== "string" ||
        project.description.trim().length === 0)
    ) {
      throw new Error(
        `Project "${projectTitle}" must have a non-empty description or null.`,
      );
    }

    if (
      project.category !== null &&
      (typeof project.category !== "string" ||
        project.category.trim().length === 0)
    ) {
      throw new Error(
        `Project "${projectTitle}" must have a non-empty category or null.`,
      );
    }

    if (!Array.isArray(project.technologies)) {
      throw new Error(
        `Project "${projectTitle}" must have a technologies list.`,
      );
    }
    project.technologies.forEach((technology) =>
      requireText(technology, "technology", projectTitle),
    );

    if (typeof project.featured !== "boolean") {
      throw new Error(`Project "${projectTitle}" must define featured status.`);
    }

    if (
      project.publicationStatus !== "draft" &&
      project.publicationStatus !== "published"
    ) {
      throw new Error(
        `Project "${projectTitle}" has an invalid publication status.`,
      );
    }

    if (
      project.publicationStatus === "published" &&
      (project.description === null || project.description.trim().length === 0)
    ) {
      throw new Error(
        `Published project "${projectTitle}" must have an approved summary.`,
      );
    }

    if (project.image) {
      requireText(project.image.src, "image source", projectTitle);
      requireText(project.image.alt, "image alternative text", projectTitle);
    }

    if (
      project.illustrationType !== undefined &&
      !illustrationTypes.includes(project.illustrationType)
    ) {
      throw new Error(
        `Project "${projectTitle}" has an invalid illustration type.`,
      );
    }

    if (
      project.tableOfContents !== undefined &&
      (!Array.isArray(project.tableOfContents) ||
        project.tableOfContents.some(
          (heading) =>
            typeof heading.title !== "string" ||
            heading.title.trim().length === 0 ||
            (heading.level !== 2 && heading.level !== 3),
        ))
    ) {
      throw new Error(
        `Project "${projectTitle}" has an invalid table of contents.`,
      );
    }

    validateOptionalUrl(project.repositoryUrl, "repository", projectTitle);
    validateOptionalUrl(project.demoUrl, "demo", projectTitle);
  }
}
