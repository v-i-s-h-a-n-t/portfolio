import { projectContentModules } from "@/content/projects";
import {
  getPublishedContentBySlug,
  getPublishedContentEntries,
  type PublishedContentEntry,
} from "@/content/queries";
import type { ProjectContentEntry } from "@/content/projects";

export type PublishedProjectContentEntry =
  PublishedContentEntry<ProjectContentEntry>;

export function getPublishedProjectContent(): PublishedProjectContentEntry[] {
  return getPublishedContentEntries(projectContentModules);
}

export function getProjectContentBySlug(
  slug: string,
): PublishedProjectContentEntry | undefined {
  return getPublishedContentBySlug(projectContentModules, slug);
}
