type ArticleBase = {
  title: string;
  slug: string;
  tags: string[];
};

export type DraftJournalArticle = ArticleBase & {
  summary: string | null;
  category: string | null;
  publicationDate: string | null;
  publicationStatus: "draft";
  href?: string;
};

export type PublishedJournalArticle = ArticleBase & {
  summary: string;
  category: string;
  publicationDate: string;
  publicationStatus: "published";
  href: string;
};

export type JournalArticle = DraftJournalArticle | PublishedJournalArticle;
