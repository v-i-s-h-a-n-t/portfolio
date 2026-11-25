import type { Metadata } from "next";
import { changelogEntries } from "@/data/changelog";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Changelog | ${profile.name}`,
  description: "Completed milestones in the development of this portfolio.",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function ChangelogPage() {
  return (
    <section aria-labelledby="changelog-heading" className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <p className="text-sm font-medium text-primary">Development log</p>
        <h1 id="changelog-heading">Portfolio changelog</h1>
        <p className="max-w-prose text-muted-foreground">
          A record of completed portfolio milestones, based on the project
          history.
        </p>
      </header>

      <ol className="ml-2 space-y-8 border-l border-border">
        {changelogEntries.map((entry) => (
          <li className="relative pl-6 sm:pl-8" key={entry.id}>
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] size-[9px] rounded-full bg-primary ring-4 ring-background"
            />
            <article className="space-y-2">
              <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                <time dateTime={entry.date}>{formatDate(entry.date)}</time>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-primary">
                  {entry.category}
                </span>
              </div>
              <h2 className="font-heading text-lg font-semibold tracking-tight sm:text-xl">
                {entry.title}
              </h2>
              <p className="max-w-prose text-muted-foreground">
                {entry.summary}
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
