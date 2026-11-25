type ArticleBase = {
  title: string;
  slug: string;
  tags: string[];
  href?: string;
};

export type DraftJournalArticle = ArticleBase & {
  summary: string | null;
  category: string | null;
  publicationDate: string | null;
  publicationStatus: "draft";
};

export type PublishedJournalArticle = ArticleBase & {
  summary: string;
  category: string;
  publicationDate: string;
  publicationStatus: "published";
};

export type JournalArticle = DraftJournalArticle | PublishedJournalArticle;
