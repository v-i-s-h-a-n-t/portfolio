import type { MDXContentModule, JournalContentMetadata } from "@/content/types";
import {
  validateJournalContentMetadata,
  validateUniqueContentSlugs,
} from "@/content/validation";

const sourceModules: MDXContentModule<unknown>[] = [];

export type JournalContentEntry = {
  metadata: JournalContentMetadata;
  default: MDXContentModule<unknown>["default"];
};

/** Register real article modules here; drafts remain excluded by the loaders. */
export const journalContentModules: JournalContentEntry[] = sourceModules.map(
  ({ metadata, default: Content }) => ({
    metadata: validateJournalContentMetadata(metadata),
    default: Content,
  }),
);

validateUniqueContentSlugs(journalContentModules, "article");
