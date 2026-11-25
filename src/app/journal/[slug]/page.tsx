import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/content/mdx-renderer";
import { profile } from "@/data/profile";
import {
  getJournalContentBySlug,
  getPublishedJournalContent,
} from "@/lib/mdx-content";

type JournalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const params = getPublishedJournalContent().map(({ metadata }) => ({
    slug: metadata.slug,
  }));

  // Cache Components requires a build-time sample when no articles are published.
  return params.length > 0 ? params : [{ slug: "__no-published-articles__" }];
}

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalContentBySlug(slug);

  if (!article) notFound();

  return {
    title: `${article.metadata.title} | ${profile.name}`,
    description: article.metadata.summary,
  };
}

export default async function JournalArticlePage({ params }: JournalPageProps) {
  const { slug } = await params;
  const article = getJournalContentBySlug(slug);

  if (!article) notFound();

  const Content = article.default;

  return (
    <article className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">
          {article.metadata.category}
        </p>
        <h1>{article.metadata.title}</h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          {article.metadata.summary}
        </p>
        <time
          className="text-sm text-muted-foreground"
          dateTime={article.metadata.publicationDate}
        >
          {article.metadata.publicationDate}
        </time>
      </header>
      <MDXRenderer>
        <Content />
      </MDXRenderer>
    </article>
  );
}
