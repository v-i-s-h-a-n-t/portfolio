import type { Metadata } from "next";
import { Award } from "lucide-react";
import { EducationTimeline } from "@/components/shared/education-timeline";
import { ProfilePortrait } from "@/components/shared/profile-portrait";
import { achievements } from "@/data/achievements";
import { education } from "@/data/journey";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: `${profile.name} is a ${profile.role.toLowerCase()} at ${profile.university}, studying ${profile.degree}.`,
};

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

      <div className="grid gap-5 md:grid-cols-2">
        <section
          aria-labelledby="about-education-heading"
          className="space-y-6 rounded-lg border border-border bg-card p-5 sm:p-6"
        >
          <h2 className="text-xl font-semibold" id="about-education-heading">
            Education
          </h2>
          <EducationTimeline entries={education} />
        </section>

        <section
          aria-labelledby="about-achievements-heading"
          className="space-y-6 rounded-lg border border-border bg-card p-5 sm:p-6"
        >
          <h2 className="text-xl font-semibold" id="about-achievements-heading">
            Academic achievements
          </h2>
          <ul className="space-y-4">
            {achievements.map((achievement) => (
              <li className="flex items-start gap-3" key={achievement.title}>
                <Award
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-primary"
                />
                <div className="space-y-1">
                  <p className="leading-snug font-medium">
                    {achievement.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {achievement.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        aria-labelledby="about-photography-heading"
        className="space-y-4"
      >
        <h2 className="text-xl font-semibold" id="about-photography-heading">
          Portrait
        </h2>
        <figure className="w-full max-w-[180px]">
          <ProfilePortrait
            image={{
              src: "/images/vishant-kumar.jpg",
              alt: "Portrait of Vishant Kumar",
            }}
          />
        </figure>
      </section>
    </section>
  );
}
