import type {
  JournalContentMetadata,
  ProjectContentMetadata,
} from "@/content/types";

const projectIllustrationTypes = new Set([
  "architecture",
  "workflow",
  "data-visualization",
  "interface",
]);

function headingSlug(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requireText(value: unknown, field: string, slug: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Content "${slug}" must define a non-empty ${field}.`);
  }
}

function validateSlug(slug: string) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Content slug "${slug}" is invalid.`);
  }
}

function validateUrls(metadata: Record<string, unknown>, slug: string) {
  for (const field of ["repositoryUrl", "demoUrl"]) {
    const value = metadata[field];
    if (value === undefined) continue;

    try {
      const url = new URL(String(value));
      if (url.protocol !== "http:" && url.protocol !== "https:")
        throw new Error();
    } catch {
      throw new Error(`Content "${slug}" has an invalid ${field}.`);
    }
  }
}

export function validateProjectContentMetadata(
  value: unknown,
): ProjectContentMetadata {
  if (!isRecord(value)) throw new Error("Project metadata must be an object.");

  const slug = typeof value.slug === "string" ? value.slug : "<unknown>";
  requireText(value.title, "title", slug);
  requireText(value.slug, "slug", slug);
  validateSlug(slug);

  if (
    value.publicationStatus !== "draft" &&
    value.publicationStatus !== "published"
  ) {
    throw new Error(`Project "${slug}" has an invalid publication status.`);
  }
  if (value.description !== null && typeof value.description !== "string") {
    throw new Error(`Project "${slug}" description must be text or null.`);
  }
  if (value.category !== null && typeof value.category !== "string") {
    throw new Error(`Project "${slug}" category must be text or null.`);
  }
  if (
    !Array.isArray(value.technologies) ||
    !value.technologies.every((item) => typeof item === "string")
  ) {
    throw new Error(
      `Project "${slug}" technologies must be a list of strings.`,
    );
  }
  if (typeof value.featured !== "boolean") {
    throw new Error(`Project "${slug}" must define featured status.`);
  }
  for (const technology of value.technologies) {
    requireText(technology, "technology", slug);
  }
  if (
    value.publicationStatus === "published" &&
    (typeof value.description !== "string" ||
      !value.description.trim() ||
      typeof value.category !== "string" ||
      !value.category.trim())
  ) {
    throw new Error(
      `Published project "${slug}" needs a summary and category.`,
    );
  }
  if (value.image !== undefined) {
    if (!isRecord(value.image))
      throw new Error(`Project "${slug}" image must be an object.`);
    requireText(value.image.src, "image source", slug);
    requireText(value.image.alt, "image alt text", slug);
  }
  if (
    value.illustrationType !== undefined &&
    !projectIllustrationTypes.has(String(value.illustrationType))
  ) {
    throw new Error(`Project "${slug}" has an invalid illustration type.`);
  }
  if (value.tableOfContents !== undefined) {
    if (!Array.isArray(value.tableOfContents)) {
      throw new Error(`Project "${slug}" table of contents must be a list.`);
    }

    const headingSlugs = new Set<string>();
    for (const heading of value.tableOfContents) {
      if (!isRecord(heading)) {
        throw new Error(
          `Project "${slug}" table of contents has an invalid item.`,
        );
      }
      requireText(heading.title, "table of contents title", slug);
      if (heading.level !== 2 && heading.level !== 3) {
        throw new Error(
          `Project "${slug}" table of contents level must be 2 or 3.`,
        );
      }

      const headingId = headingSlug(String(heading.title));
      if (!headingId || headingSlugs.has(headingId)) {
        throw new Error(
          `Project "${slug}" table of contents headings must be unique.`,
        );
      }
      headingSlugs.add(headingId);
    }
  }
  validateUrls(value, slug);

  return value as ProjectContentMetadata;
}

export function validateJournalContentMetadata(
  value: unknown,
): JournalContentMetadata {
  if (!isRecord(value)) throw new Error("Journal metadata must be an object.");

  const slug = typeof value.slug === "string" ? value.slug : "<unknown>";
  requireText(value.title, "title", slug);
  requireText(value.slug, "slug", slug);
  validateSlug(slug);

  if (
    value.publicationStatus !== "draft" &&
    value.publicationStatus !== "published"
  ) {
    throw new Error(`Article "${slug}" has an invalid publication status.`);
  }
  if (value.summary !== null && typeof value.summary !== "string") {
    throw new Error(`Article "${slug}" summary must be text or null.`);
  }
  if (value.category !== null && typeof value.category !== "string") {
    throw new Error(`Article "${slug}" category must be text or null.`);
  }
  if (
    !Array.isArray(value.tags) ||
    !value.tags.every((item) => typeof item === "string")
  ) {
    throw new Error(`Article "${slug}" tags must be a list of strings.`);
  }
  if (
    value.publicationDate !== null &&
    typeof value.publicationDate !== "string"
  ) {
    throw new Error(`Article "${slug}" publication date must be text or null.`);
  }
  if (value.publicationStatus === "published") {
    requireText(value.summary, "summary", slug);
    requireText(value.category, "category", slug);
    requireText(value.publicationDate, "publication date", slug);
    if (typeof value.publicationDate !== "string") {
      throw new Error(`Article "${slug}" publication date must be a string.`);
    }
    const publicationDate = value.publicationDate;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(publicationDate)) {
      throw new Error(
        `Article "${slug}" publication date must use YYYY-MM-DD.`,
      );
    }
    const date = new Date(`${publicationDate}T00:00:00.000Z`);
    if (
      Number.isNaN(date.getTime()) ||
      date.toISOString().slice(0, 10) !== publicationDate
    ) {
      throw new Error(`Article "${slug}" publication date is invalid.`);
    }
  }

  return value as JournalContentMetadata;
}

export function validateUniqueContentSlugs(
  entries: readonly { metadata: { slug: string } }[],
  contentKind: string,
): void {
  const seen = new Set<string>();
  for (const { metadata } of entries) {
    if (seen.has(metadata.slug)) {
      throw new Error(
        `Duplicate ${contentKind} content slug "${metadata.slug}".`,
      );
    }
    seen.add(metadata.slug);
  }
}
