import { journalContentModules } from "@/content/journal";
import { projectContentModules } from "@/content/projects";
import type { JournalContentEntry } from "@/content/journal";
import type { ProjectContentEntry } from "@/content/projects";
import type {
  PublishedJournalContentMetadata,
  PublishedProjectContentMetadata,
} from "@/content/types";

export type PublishedProjectContentEntry = Omit<
  ProjectContentEntry,
  "metadata"
> & { metadata: PublishedProjectContentMetadata };

export type PublishedJournalContentEntry = Omit<
  JournalContentEntry,
  "metadata"
> & { metadata: PublishedJournalContentMetadata };

export function getPublishedProjectContent(): PublishedProjectContentEntry[] {
  return projectContentModules.filter(
    (entry): entry is PublishedProjectContentEntry =>
      entry.metadata.publicationStatus === "published",
  );
}

export function getProjectContentBySlug(
  slug: string,
): PublishedProjectContentEntry | undefined {
  return getPublishedProjectContent().find(
    (entry) => entry.metadata.slug === slug,
  );
}

export function getPublishedJournalContent(): PublishedJournalContentEntry[] {
  return journalContentModules.filter(
    (entry): entry is PublishedJournalContentEntry =>
      entry.metadata.publicationStatus === "published",
  );
}

export function getJournalContentBySlug(
  slug: string,
): PublishedJournalContentEntry | undefined {
  return getPublishedJournalContent().find(
    (entry) => entry.metadata.slug === slug,
  );
}
