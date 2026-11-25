import { UserRound } from "lucide-react";
import Image from "next/image";

type ProfilePortraitProps = {
  image?: {
    src: string;
    alt: string;
  };
};

export function ProfilePortrait({ image }: ProfilePortraitProps) {
  return (
    <div
      aria-label={image ? undefined : "Portrait placeholder"}
      className="relative mx-auto grid aspect-[3/4] w-full max-w-[180px] place-content-center gap-2 overflow-hidden rounded-lg border border-border bg-surface-secondary text-center text-sm text-muted-foreground md:max-w-none"
      role={image ? undefined : "img"}
    >
      {image ? (
        <Image
          alt={image.alt}
          className="object-cover"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="(min-width: 768px) 25vw, 180px"
          src={image.src}
        />
      ) : (
        <>
          <UserRound className="mx-auto size-8" aria-hidden="true" />
          <span>Your photo</span>
        </>
      )}
    </div>
  );
}
