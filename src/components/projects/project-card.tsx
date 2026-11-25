import Image from "next/image";
import { Layers3 } from "lucide-react";
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
        <div
          className={
            variant === "compact" ? "flex items-start gap-3" : "space-y-2"
          }
        >
          {variant === "compact" ? (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
              <Layers3 aria-hidden="true" className="size-5" />
            </span>
          ) : null}
          <div className="min-w-0 space-y-2">
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.description ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            ) : null}
          </div>
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
