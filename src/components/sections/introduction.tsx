import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Introduction() {
  return (
    <section aria-labelledby="introduction-heading" className="space-y-5">
      <p className="flex items-center gap-2.5 text-sm font-medium text-primary sm:text-base">
        <span
          className="size-2.5 shrink-0 rounded-full bg-primary"
          aria-hidden="true"
        />
        {profile.role}
      </p>
      <div className="space-y-3">
        <h1
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          id="introduction-heading"
        >
          Hi, I&apos;m {profile.name}.
        </h1>
        <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
          I build software, explore emerging technologies and enjoy solving
          complex problems through engineering.
        </p>
      </div>
      <p className="inline-flex items-center gap-2 text-base text-muted-foreground">
        <MapPin className="size-4 shrink-0" aria-hidden="true" />
        {profile.location}
      </p>
    </section>
  );
}
