import { slugifyHeading } from "@/lib/slugify-heading";
import type { ProjectTableOfContentsItem } from "@/types/project";

export function ProjectTableOfContents({
  items,
}: {
  items: readonly ProjectTableOfContentsItem[];
}) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="w-full rounded-lg border border-border bg-card p-5 sm:max-w-sm sm:p-6"
    >
      <h2 className="font-heading text-base font-semibold">On this page</h2>
      <ol className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            className={item.level === 3 ? "pl-4 text-sm" : "text-sm"}
            key={`${item.level}-${item.title}`}
          >
            <a
              className="text-muted-foreground hover:text-foreground"
              href={`#${slugifyHeading(item.title)}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
