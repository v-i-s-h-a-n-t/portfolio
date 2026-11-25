import { journalContentModules } from "@/content/journal";
import { projectContentModules } from "@/content/projects";
import type { JournalContentEntry } from "@/content/journal";
import type { ProjectContentEntry } from "@/content/projects";

export function getPublishedProjectContent(): ProjectContentEntry[] {
  return projectContentModules.filter(
    (entry) => entry.metadata.publicationStatus === "published",
  );
}

export function getProjectContentBySlug(
  slug: string,
): ProjectContentEntry | undefined {
  return projectContentModules.find(
    (entry) =>
      entry.metadata.slug === slug &&
      entry.metadata.publicationStatus === "published",
  );
}

export function getPublishedJournalContent(): JournalContentEntry[] {
  return journalContentModules.filter(
    (entry) => entry.metadata.publicationStatus === "published",
  );
}

export function getJournalContentBySlug(
  slug: string,
): JournalContentEntry | undefined {
  return journalContentModules.find(
    (entry) =>
      entry.metadata.slug === slug &&
      entry.metadata.publicationStatus === "published",
  );
}
