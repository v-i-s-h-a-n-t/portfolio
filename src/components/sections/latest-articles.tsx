import { ArticleListItem } from "@/components/journal/article-list-item";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPublishedArticles } from "@/lib/articles";

export function LatestArticles() {
  const articles = getPublishedArticles().slice(0, 3);

  return (
    <section
      aria-label="Engineering journal"
      className="space-y-6 rounded-lg border border-border bg-card p-5 sm:p-7"
    >
      <SectionHeading
        title="Engineering Journal"
        link={{ href: "/journal", label: "All articles" }}
      />
      {articles.length > 0 ? (
        <ul className="border-t border-border">
          {articles.map((article) => (
            <ArticleListItem article={article} key={article.slug} />
          ))}
        </ul>
      ) : (
        <p className="border-t border-border pt-6 text-muted-foreground">
          No journal articles have been published yet.
        </p>
      )}
    </section>
  );
}
