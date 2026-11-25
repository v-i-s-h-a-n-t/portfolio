import { articles } from "@/data/articles";
import type { PublishedJournalArticle } from "@/types/journal";

export function getPublishedArticles(): PublishedJournalArticle[] {
  return articles.filter(
    (article): article is PublishedJournalArticle =>
      article.publicationStatus === "published",
  );
}
