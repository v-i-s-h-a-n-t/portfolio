export type SkillCategoryIcon = "code" | "layout" | "database" | "terminal";

export type SkillCategory = {
  id: string;
  title: string;
  icon: SkillCategoryIcon;
  technologies: string[];
};
