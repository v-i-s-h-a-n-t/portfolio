import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "code",
    technologies: ["Java", "TypeScript", "JavaScript"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "backend-database",
    title: "Backend & Database",
    icon: "database",
    technologies: ["Node.js", "PostgreSQL", "Java RMI"],
  },
  {
    id: "development-quality",
    title: "Development & Quality",
    icon: "terminal",
    technologies: ["Git", "GitHub", "Playwright"],
  },
];
