import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { PublishedJournalArticle } from "@/types/journal";

function formatPublicationDate(publicationDate: string) {
  const date = new Date(`${publicationDate}T00:00:00.000Z`);

  if (Number.isNaN(date.getTime())) return publicationDate;

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(date);
}

export function ArticleListItem({
  article,
}: {
  article: PublishedJournalArticle;
}) {
  const content = (
    <>
      <div className="min-w-0 space-y-2">
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {article.title}
        </h3>
        <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publicationDate}>
            {formatPublicationDate(article.publicationDate)}
          </time>
        </p>
      </div>
      {article.href ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-colors duration-150 group-hover:text-primary motion-reduce:transition-none"
        />
      ) : null}
    </>
  );

  return (
    <li className="border-b border-border last:border-b-0">
      <article>
        {article.href ? (
          <Link
            className="group flex items-center justify-between gap-4 rounded-sm px-1 py-5 text-foreground no-underline hover:text-primary hover:no-underline"
            href={article.href}
          >
            {content}
          </Link>
        ) : (
          <div className="flex items-center justify-between gap-4 px-1 py-5">
            {content}
          </div>
        )}
      </article>
    </li>
  );
}
