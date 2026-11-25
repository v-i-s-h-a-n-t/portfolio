type ContentMetadata = {
  slug: string;
  publicationStatus: "draft" | "published";
};

type ContentEntry = {
  metadata: ContentMetadata;
};

export type PublishedContentEntry<Entry extends ContentEntry> = Omit<
  Entry,
  "metadata"
> & {
  metadata: Extract<Entry["metadata"], { publicationStatus: "published" }>;
};

export function getPublishedContentEntries<Entry extends ContentEntry>(
  entries: readonly Entry[],
): PublishedContentEntry<Entry>[] {
  return entries.filter(
    (entry) => entry.metadata.publicationStatus === "published",
  ) as unknown as PublishedContentEntry<Entry>[];
}

export function getPublishedContentBySlug<Entry extends ContentEntry>(
  entries: readonly Entry[],
  slug: string,
): PublishedContentEntry<Entry> | undefined {
  return getPublishedContentEntries(entries).find(
    (entry) => entry.metadata.slug === slug,
  );
}
