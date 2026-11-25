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
    </section>
  );
}
