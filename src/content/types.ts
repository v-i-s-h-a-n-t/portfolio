import type { ComponentType } from "react";
import type { MDXProps } from "mdx/types";
import type {
  ProjectIllustrationType,
  ProjectImage,
  ProjectTableOfContentsItem,
} from "@/types/project";

type ProjectContentBase = {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  technologies: string[];
  featured: boolean;
  image?: ProjectImage;
  illustrationType?: ProjectIllustrationType;
  tableOfContents?: ProjectTableOfContentsItem[];
  relatedProjects?: string[];
  repositoryUrl?: string;
  demoUrl?: string;
};

export type DraftProjectContentMetadata = ProjectContentBase & {
  publicationStatus: "draft";
};

export type PublishedProjectContentMetadata = Omit<
  ProjectContentBase,
  "description" | "category"
> & {
  description: string;
  category: string;
  publicationStatus: "published";
};

export type ProjectContentMetadata =
  DraftProjectContentMetadata | PublishedProjectContentMetadata;

export type MDXContentModule<Metadata> = {
  metadata: Metadata;
  default: ComponentType<MDXProps>;
};
