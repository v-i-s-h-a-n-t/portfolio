import type { Metadata } from "next";
import { ArticleListItem } from "@/components/journal/article-list-item";
import { profile } from "@/data/profile";
import { getPublishedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: `Engineering Journal | ${profile.name}`,
  description: `Technical articles by ${profile.name}.`,
};

export default function JournalPage() {
  const articles = getPublishedArticles();

  return (
    <section aria-labelledby="journal-heading" className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">Writing</p>
        <h1 id="journal-heading">Engineering Journal</h1>
        <p className="max-w-prose text-muted-foreground">
          Technical articles and notes on software engineering.
        </p>
      </header>

      {articles.length > 0 ? (
        <ul className="border-t border-border">
          {articles.map((article) => (
            <ArticleListItem article={article} key={article.slug} />
          ))}
        </ul>
      ) : (
        <p className="rounded-lg border border-border bg-card p-5 text-muted-foreground">
          No journal articles have been published yet.
        </p>
      )}
    </section>
  );
}
