import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { SocialLinks } from "@/components/shared/social-links";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Introduction() {
  return (
    <section
      aria-labelledby="introduction-heading"
      className="rounded-lg border border-border bg-card p-5 sm:p-7 md:p-8"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] md:items-center md:gap-10">
        <div className="min-w-0 space-y-5">
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
          <div className="flex flex-wrap items-center gap-3">
            <SocialLinks links={profile.socials} />
            <Link
              className={buttonVariants({ variant: "outline", size: "lg" })}
              href="/resume"
            >
              Résumé
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ProfilePortrait />
      </div>
    </section>
  );
}
