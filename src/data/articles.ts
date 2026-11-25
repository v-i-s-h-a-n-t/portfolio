import type { JournalArticle } from "@/types/journal";
import { journalContentModules } from "@/content/journal";

export const articles: JournalArticle[] = journalContentModules.map(
  ({ metadata }) =>
    metadata.publicationStatus === "published"
      ? { ...metadata, href: `/journal/${metadata.slug}` }
      : metadata,
);
