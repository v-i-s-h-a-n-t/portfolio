import { SocialLinks } from "@/components/shared/social-links";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const { email, github, instagram, linkedin } = profile.socials;

  return (
    <section aria-labelledby="contact-page-heading" className="space-y-8">
      <div className="space-y-3">
        <h1 id="contact-page-heading">Contact</h1>
        <p className="max-w-prose text-muted-foreground">
          Always interested in learning, collaborating and exploring new
          opportunities in software engineering.
        </p>
      </div>

      {email ? (
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-semibold">Email</h2>
          <a className="text-base" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      ) : null}

      <div className="space-y-2">
        <h2 className="font-heading text-lg font-semibold">Social profiles</h2>
        <SocialLinks links={{ github, instagram, linkedin }} />
      </div>
    </section>
  );
}
