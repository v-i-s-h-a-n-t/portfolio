import { SkillCategory } from "@/components/shared/skill-category";
import { SectionHeading } from "@/components/shared/section-heading";
import { skillCategories } from "@/data/skills";

export function TechnicalToolkit() {
  return (
    <section aria-label="Technical toolkit" className="space-y-6">
      <SectionHeading title="Technical Toolkit" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategory category={category} key={category.id} />
        ))}
      </div>
    </section>
  );
}
