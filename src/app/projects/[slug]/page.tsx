import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/content/mdx-renderer";
import { ProjectTableOfContents } from "@/components/content/project-table-of-contents";
import { ProjectDetailNavigation } from "@/components/projects/project-detail-navigation";
import {
  ProjectIllustration,
  ProjectImage,
} from "@/components/projects/project-media";
import { profile } from "@/data/profile";
import { canonicalPath, getSiteUrl } from "@/lib/site-url";
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

  const title = `${project.metadata.title} | ${profile.name}`;
  const description = project.metadata.description;
  const siteUrl = getSiteUrl();
  const images = siteUrl
    ? [{ url: new URL("/social-image", siteUrl).toString() }]
    : undefined;

  return {
    title,
    description,
    alternates: canonicalPath(`/projects/${slug}`),
    ...(images
      ? {
          openGraph: { title, description, type: "article" as const, images },
          twitter: {
            card: "summary_large_image" as const,
            title,
            description,
            images: images.map((image) => image.url),
          },
        }
      : {}),
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectContentBySlug(slug);

  if (!project) notFound();

  const Content = project.default;
  const projectLinks = [
    project.metadata.repositoryUrl
      ? { href: project.metadata.repositoryUrl, label: "Source repository" }
      : null,
    project.metadata.demoUrl
      ? { href: project.metadata.demoUrl, label: "Live demo" }
      : null,
  ].filter((link) => link !== null);

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
        {project.metadata.technologies.length > 0 ? (
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
        ) : null}
        {projectLinks.length > 0 ? (
          <ul aria-label="Project links" className="flex flex-wrap gap-4">
            {projectLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="inline-flex items-center gap-1.5 text-sm font-medium"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </header>
      {project.metadata.image ? (
        project.metadata.illustrationType ? (
          <ProjectIllustration
            alt={project.metadata.image.alt}
            src={project.metadata.image.src}
          />
        ) : (
          <ProjectImage
            alt={project.metadata.image.alt}
            src={project.metadata.image.src}
          />
        )
      ) : null}
      {project.metadata.tableOfContents ? (
        <ProjectTableOfContents items={project.metadata.tableOfContents} />
      ) : null}
      <MDXRenderer>
        <Content />
      </MDXRenderer>
      <ProjectDetailNavigation
        relatedSlugs={project.metadata.relatedProjects}
      />
    </article>
  );
}
