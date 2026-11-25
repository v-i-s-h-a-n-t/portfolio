import { journalContentModules } from "@/content/journal";
import { projectContentModules } from "@/content/projects";
import {
  getPublishedContentBySlug,
  getPublishedContentEntries,
  type PublishedContentEntry,
} from "@/content/queries";
import type { JournalContentEntry } from "@/content/journal";
import type { ProjectContentEntry } from "@/content/projects";

export type PublishedProjectContentEntry =
  PublishedContentEntry<ProjectContentEntry>;

export type PublishedJournalContentEntry =
  PublishedContentEntry<JournalContentEntry>;

export function getPublishedProjectContent(): PublishedProjectContentEntry[] {
  return getPublishedContentEntries(projectContentModules);
}

export function getProjectContentBySlug(
  slug: string,
): PublishedProjectContentEntry | undefined {
  return getPublishedContentBySlug(projectContentModules, slug);
}

export function getPublishedJournalContent(): PublishedJournalContentEntry[] {
  return getPublishedContentEntries(journalContentModules);
}

export function getJournalContentBySlug(
  slug: string,
): PublishedJournalContentEntry | undefined {
  return getPublishedContentBySlug(journalContentModules, slug);
}
