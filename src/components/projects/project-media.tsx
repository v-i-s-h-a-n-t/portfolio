import Image from "next/image";

type ProjectMediaProps = {
  src: string;
  alt: string;
  caption?: string;
};

function MediaFrame({
  src,
  alt,
  caption,
  illustration,
}: ProjectMediaProps & { illustration: boolean }) {
  return (
    <figure className="space-y-2">
      <div
        className={`relative aspect-video overflow-hidden rounded-lg border border-border ${
          illustration ? "bg-illustration" : "bg-card"
        }`}
      >
        <Image
          alt={alt}
          className={
            illustration ? "object-contain p-2 sm:p-4" : "object-contain"
          }
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          src={src}
        />
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function ProjectImage(props: ProjectMediaProps) {
  return <MediaFrame {...props} illustration={false} />;
}

export function ProjectIllustration(props: ProjectMediaProps) {
  return <MediaFrame {...props} illustration />;
}
