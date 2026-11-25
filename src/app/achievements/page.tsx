import Image from "next/image";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  return (
    <section aria-labelledby="achievements-heading" className="space-y-6">
      <div className="space-y-2">
        <h1 id="achievements-heading">Academic Achievements</h1>
        <p className="max-w-prose text-muted-foreground">
          Recognition received during my studies at The University of the South
          Pacific.
        </p>
      </div>

      <ul className="grid gap-4">
        {achievements.map((achievement) => (
          <li
            className="rounded-lg border border-border bg-card p-5 sm:p-6"
            key={`${achievement.title}-${achievement.year}`}
          >
            <article>
              <p className="text-sm font-medium text-primary">
                {achievement.year}
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                {achievement.title}
              </h2>
              {achievement.certificate ? (
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-md border border-border bg-surface-secondary sm:max-w-lg">
                  <Image
                    alt={achievement.certificate.alt}
                    className="object-contain"
                    fill
                    sizes="(min-width: 640px) 512px, 100vw"
                    src={achievement.certificate.src}
                  />
                </div>
              ) : null}
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
