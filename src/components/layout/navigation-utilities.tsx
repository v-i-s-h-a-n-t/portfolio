import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandPalette } from "@/components/shared/command-palette";

type NavigationUtilitiesProps = {
  githubUrl?: string;
};

export function NavigationUtilities({ githubUrl }: NavigationUtilitiesProps) {
  return (
    <div className="flex items-center gap-2">
      <CommandPalette />
      {githubUrl ? (
        <a
          aria-label="GitHub profile"
          className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          href={githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-hidden="true"
            className="size-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 .297a12 12 0 0 0-3.79 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.806 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.004 12.004 0 0 0 12 .297"
            />
          </svg>
        </a>
      ) : null}
      <ThemeToggle />
    </div>
  );
}
