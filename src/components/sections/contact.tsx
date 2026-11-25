import { SocialLinks } from "@/components/shared/social-links";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="space-y-4">
      <h2
        className="font-heading text-xl font-semibold tracking-tight"
        id="contact-heading"
      >
        Let&apos;s connect.
      </h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-prose text-muted-foreground">
          Always interested in learning, collaborating and exploring new
          opportunities in software engineering.
        </p>
        <SocialLinks links={profile.socials} />
      </div>
    </section>
  );
}
