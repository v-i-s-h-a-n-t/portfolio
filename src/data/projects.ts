import type { ProjectMetadata } from "@/types/project";
import { validateProjectMetadata } from "@/lib/project-validation";

export const projects: ProjectMetadata[] = [
  {
    title: "Applicant Tracking System",
    slug: "applicant-tracking-system",
    description: null,
    category: null,
    technologies: [],
    featured: false,
    publicationStatus: "draft",
    image: {
      src: "/projects/applicant-tracking-dashboard.svg",
      alt: "Original conceptual dashboard illustration with summary cards, candidate rows, and status markers; not a screenshot of a real application.",
    },
    illustrationType: "interface",
  },
  {
    title: "Distributed Worker Cluster",
    slug: "distributed-worker-cluster",
    description: null,
    category: null,
    technologies: [],
    featured: false,
    publicationStatus: "draft",
    image: {
      src: "/projects/distributed-worker-cluster.svg",
      alt: "Conceptual coordinator connected to three worker nodes; not a verified deployment diagram.",
    },
    illustrationType: "architecture",
  },
  {
    title: "Student Administration System",
    slug: "student-administration-system",
    description: null,
    category: null,
    technologies: [],
    featured: false,
    publicationStatus: "draft",
  },
  {
    title: "Antibiotic Resistance Analysis",
    slug: "antibiotic-resistance-analysis",
    description: null,
    category: null,
    technologies: [],
    featured: false,
    publicationStatus: "draft",
  },
  {
    title: "Search Algorithms Analysis System",
    slug: "search-algorithms-analysis-system",
    description: null,
    category: null,
    technologies: [],
    featured: false,
    publicationStatus: "draft",
  },
  {
    title: "Mental Health and Wellness System",
    slug: "mental-health-and-wellness-system",
    description: null,
    category: null,
    technologies: [],
    featured: false,
    publicationStatus: "draft",
  },
];

validateProjectMetadata(projects);
