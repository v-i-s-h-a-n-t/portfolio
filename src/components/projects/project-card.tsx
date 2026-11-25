import Image from "next/image";
import Link from "next/link";
import { Layers3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ProjectMetadata } from "@/types/project";

export type ProjectCardProps = {
  project: ProjectMetadata;
  variant?: "illustrated" | "compact";
  href?: string;
};

export function ProjectCard({
  project,
  variant = "compact",
  href,
}: ProjectCardProps) {
  const card = (
    <Card
      className={`h-full gap-0 rounded-lg border border-border py-0 shadow-sm ring-0 ${
        href
          ? "transition-[transform,border-color,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:border-primary/50 group-hover:shadow-md group-focus-visible:-translate-y-0.5 group-focus-visible:border-primary/50 group-focus-visible:shadow-md motion-reduce:transform-none motion-reduce:transition-none"
          : ""
      }`}
    >
      {variant === "illustrated" && project.image ? (
        <div className="relative aspect-video w-full overflow-hidden bg-illustration">
          <Image
            alt={project.image.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1088px) 480px, (min-width: 768px) 50vw, 100vw"
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
            className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-primary"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link
        className="group block rounded-lg text-foreground no-underline hover:no-underline"
        href={href}
      >
        {card}
      </Link>
    );
  }

  return card;
}
