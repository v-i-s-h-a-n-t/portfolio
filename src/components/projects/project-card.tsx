import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectMetadata } from "@/types/project";

export type ProjectCardProps = {
  project: ProjectMetadata;
  variant?: "illustrated" | "compact";
};

export function ProjectCard({
  project,
  variant = "compact",
}: ProjectCardProps) {
  return (
    <Card className="gap-0 rounded-lg border border-border py-0 shadow-sm ring-0">
      {variant === "illustrated" && project.image ? (
        <div className="relative aspect-video w-full overflow-hidden bg-illustration">
          <Image
            alt={project.image.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={project.image.src}
          />
        </div>
      ) : null}
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
