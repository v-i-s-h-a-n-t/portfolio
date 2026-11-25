import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/content/mdx-renderer";
import { profile } from "@/data/profile";
import {
  getProjectContentBySlug,
  getPublishedProjectContent,
} from "@/lib/mdx-content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const params = getPublishedProjectContent().map(({ metadata }) => ({
    slug: metadata.slug,
  }));

  // Cache Components requires a build-time sample when no projects are published.
  return params.length > 0 ? params : [{ slug: "__no-published-projects__" }];
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectContentBySlug(slug);

  if (!project) notFound();

  return {
    title: `${project.metadata.title} | ${profile.name}`,
    description: project.metadata.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectContentBySlug(slug);

  if (!project) notFound();

  const Content = project.default;

  return (
    <article className="space-y-8">
      <header className="space-y-4 border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">
          {project.metadata.category}
        </p>
        <h1>{project.metadata.title}</h1>
        <p className="max-w-prose text-lg text-muted-foreground">
          {project.metadata.description}
        </p>
        <ul
          aria-label="Technologies"
          className="flex flex-wrap gap-x-4 gap-y-2"
        >
          {project.metadata.technologies.map((technology) => (
            <li className="text-sm font-medium text-primary" key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </header>
      <MDXRenderer>
        <Content />
      </MDXRenderer>
    </article>
  );
}
