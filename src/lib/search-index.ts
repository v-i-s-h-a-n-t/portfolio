import { getPublishedProjects } from "@/lib/projects";

export type SearchIndexItem = {
  id: string;
  title: string;
  href: string;
  group: "Navigation" | "Projects" | "Articles";
  description: string;
  keywords: string[];
};

const publicPages: SearchIndexItem[] = [
  {
    id: "page-home",
    title: "Home",
    href: "/",
    group: "Navigation",
    description: "Portfolio homepage",
    keywords: ["home", "homepage", "portfolio"],
  },
  {
    id: "page-about",
    title: "About me",
    href: "/about",
    group: "Navigation",
    description: "Background, education, and technical interests",
    keywords: ["about", "biography", "education", "interests"],
  },
  {
    id: "page-projects",
    title: "Projects",
    href: "/projects",
    group: "Navigation",
    description: "Published project directory",
    keywords: ["projects", "work", "portfolio"],
  },
  {
    id: "page-achievements",
    title: "Achievements",
    href: "/achievements",
    group: "Navigation",
    description: "Academic achievements",
    keywords: ["awards", "academic", "achievements"],
  },
  {
    id: "page-contact",
    title: "Contact",
    href: "/contact",
    group: "Navigation",
    description: "Contact and social links",
    keywords: ["contact", "email", "social"],
  },
  {
    id: "page-resume",
    title: "Résumé",
    href: "/resume",
    group: "Navigation",
    description: "View or download the résumé",
    keywords: ["resume", "résumé", "cv"],
  },
];

export function getSearchIndex(): SearchIndexItem[] {
  const publishedProjects = getPublishedProjects().map((project) => ({
    id: `project-${project.slug}`,
    title: project.title,
    href: `/projects/${project.slug}`,
    group: "Projects" as const,
    description: project.description ?? "",
    keywords: [project.category ?? "", ...project.technologies].filter(Boolean),
  }));

  return [...publicPages, ...publishedProjects];
}
