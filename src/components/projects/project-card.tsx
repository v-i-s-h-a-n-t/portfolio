import { Card, CardContent } from "@/components/ui/card";
import type { ProjectMetadata } from "@/types/project";

export type ProjectCardProps = {
  project: ProjectMetadata;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="gap-0 rounded-lg border border-border py-0 shadow-sm ring-0">
      <CardContent className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          {project.description ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          ) : null}
        </div>
        {project.technologies.length > 0 ? (
          <ul
            aria-label="Technologies used"
            className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );
}
