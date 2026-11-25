import { ArrowRight } from "lucide-react";
import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  description?: string;
  link?: {
    href: string;
    label: string;
  };
};

export function SectionHeading({
  title,
  description,
  link,
}: SectionHeadingProps) {
  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0 space-y-1">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="max-w-prose text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {link ? (
        <Link
          className="inline-flex w-fit shrink-0 items-center gap-1.5 text-sm font-medium text-primary sm:ml-auto"
          href={link.href}
        >
          {link.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </header>
  );
}
