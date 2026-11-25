export type ProjectPublicationStatus = "draft" | "published";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectIllustrationType =
  "architecture" | "workflow" | "data-visualization" | "interface";

export type ProjectMetadata = {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  technologies: string[];
  featured: boolean;
  publicationStatus: ProjectPublicationStatus;
  image?: ProjectImage;
  illustrationType?: ProjectIllustrationType;
  repositoryUrl?: string;
  demoUrl?: string;
};
