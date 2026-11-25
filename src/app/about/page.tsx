import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <section aria-labelledby="about-heading" className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">About</p>
        <h1 id="about-heading">{profile.name}</h1>
        <p className="text-lg text-muted-foreground">
          {profile.role} <span aria-hidden="true">·</span> {profile.location}
        </p>
      </header>

      <section aria-labelledby="about-profile-heading" className="space-y-3">
        <h2 className="text-xl font-semibold" id="about-profile-heading">
          Profile
        </h2>
        <p className="max-w-prose leading-relaxed text-muted-foreground">
          I&apos;m a {profile.role.toLowerCase()} based in {profile.location},
          studying {profile.degree} at {profile.university}. I expect to
          graduate in {profile.expectedGraduation}. I build software, explore
          emerging technologies and enjoy solving complex problems through
          engineering.
        </p>
      </section>
    </section>
  );
}
