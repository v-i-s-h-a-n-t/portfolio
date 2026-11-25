import { CodeXml, Database, LayoutGrid, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { SkillCategory as SkillCategoryData } from "@/types/skill";

const categoryIcons = {
  code: CodeXml,
  layout: LayoutGrid,
  database: Database,
  terminal: Terminal,
};

export function SkillCategory({ category }: { category: SkillCategoryData }) {
  const Icon = categoryIcons[category.icon];

  return (
    <Card className="gap-3 rounded-lg border border-border p-5 shadow-sm ring-0">
      <div className="flex items-center gap-3">
        <Icon
          aria-hidden="true"
          className="size-5 shrink-0 text-primary"
          strokeWidth={2.2}
        />
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {category.title}
        </h3>
      </div>
      <p className="text-base leading-relaxed text-muted-foreground">
        {category.technologies.join(" · ")}
      </p>
    </Card>
  );
}
