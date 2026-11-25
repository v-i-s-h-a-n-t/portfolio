"use client";

import { Dialog } from "@base-ui/react/dialog";
import {
  Award,
  BookOpen,
  CodeXml,
  FileText,
  FolderCode,
  House,
  Mail,
  Search,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import type { SearchIndexItem } from "@/lib/search-index";

const groupOrder: SearchIndexItem["group"][] = [
  "Navigation",
  "Projects",
  "Articles",
];

function getResultIcon(item: SearchIndexItem): LucideIcon {
  if (item.group === "Projects") return CodeXml;
  if (item.group === "Articles") return BookOpen;

  switch (item.href) {
    case "/":
      return House;
    case "/about":
      return UserRound;
    case "/projects":
      return FolderCode;
    case "/achievements":
      return Award;
    case "/contact":
      return Mail;
    case "/resume":
      return FileText;
    default:
      return Search;
  }
}

type CommandPaletteProps = {
  index: SearchIndexItem[];
};

export function CommandPalette({ index }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return index;

    return index.filter((item) =>
      [item.title, item.description, ...item.keywords]
        .join(" ")
        .toLocaleLowerCase()
        .includes(normalizedQuery),
    );
  }, [index, query]);

  const groupedResults = groupOrder
    .map((group) => ({
      group,
      items: results.filter((item) => item.group === group),
    }))
    .filter(({ items }) => items.length > 0);
  const hasQuery = query.trim().length > 0;

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setQuery("");
      setActiveIndex(0);
    }
  }

  function selectResult(item: SearchIndexItem) {
    handleOpenChange(false);
    router.push(item.href);
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    } else if (event.key === "ArrowUp" && results.length > 0) {
      event.preventDefault();
      setActiveIndex((current) =>
        current === 0 ? results.length - 1 : current - 1,
      );
    } else if (event.key === "Enter" && results[activeIndex]) {
      event.preventDefault();
      selectResult(results[activeIndex]);
    }
  }

  useEffect(() => {
    function handleGlobalKeyDown(event: KeyboardEvent) {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger
        render={
          <Button
            aria-label="Open search"
            className="size-9 rounded-full text-muted-foreground hover:text-foreground"
            size="icon"
            type="button"
            variant="ghost"
          >
            <Search aria-hidden="true" className="size-5" />
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Popup className="fixed inset-x-4 top-[8vh] z-50 mx-auto flex max-h-[84vh] max-w-5xl flex-col overflow-hidden rounded-xl border border-border bg-background p-4 shadow-xl outline-none sm:p-6">
          <Dialog.Title className="sr-only">Search the portfolio</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search public pages and published projects.
          </Dialog.Description>
          <div className="flex h-14 shrink-0 items-center gap-3 rounded-lg border border-input bg-secondary px-4 text-muted-foreground sm:h-16">
            <Search aria-hidden="true" className="size-5 shrink-0" />
            <input
              aria-activedescendant={
                results[activeIndex]
                  ? `command-result-${results[activeIndex].id}`
                  : undefined
              }
              aria-autocomplete="list"
              aria-controls="command-palette-results"
              aria-expanded={open}
              aria-label="Search projects, articles and pages"
              autoComplete="off"
              autoFocus
              className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-lg"
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleInputKeyDown}
              placeholder="Search projects, articles and pages..."
              role="combobox"
              type="search"
              value={query}
            />
            <Dialog.Close
              render={
                <Button
                  aria-label="Close search"
                  className="h-8 px-2 text-muted-foreground"
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  Esc
                </Button>
              }
            />
          </div>
          <div className="min-h-24 overflow-y-auto pt-4">
            {hasQuery ? (
              <p
                aria-live="polite"
                className="mb-3 px-1 text-sm text-muted-foreground"
              >
                {results.length} {results.length === 1 ? "result" : "results"}
              </p>
            ) : null}
            <div
              aria-label="Search results"
              id="command-palette-results"
              role="listbox"
            >
              {groupedResults.map(({ group, items }) => (
                <div
                  aria-label={group}
                  className="mb-4 last:mb-0"
                  key={group}
                  role="group"
                >
                  <h2 className="mb-2 px-1 text-sm text-muted-foreground">
                    {group}
                  </h2>
                  <div className="space-y-1">
                    {items.map((item) => {
                      const resultIndex = results.findIndex(
                        (result) => result.id === item.id,
                      );
                      const ResultIcon = getResultIcon(item);
                      const isActive = resultIndex === activeIndex;

                      return (
                        <div
                          aria-selected={isActive}
                          className="flex cursor-pointer items-start gap-3 rounded-md px-3 py-2.5 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring aria-selected:bg-secondary"
                          id={`command-result-${item.id}`}
                          key={item.id}
                          onClick={() => selectResult(item)}
                          onMouseDown={(event) => event.preventDefault()}
                          onMouseMove={() => setActiveIndex(resultIndex)}
                          role="option"
                        >
                          <ResultIcon
                            aria-hidden="true"
                            className={`mt-0.5 size-5 shrink-0 ${item.group === "Projects" ? "text-primary" : "text-muted-foreground"}`}
                          />
                          <span className="min-w-0 space-y-0.5">
                            <span className="block font-medium">
                              {item.title}
                            </span>
                            <span className="block text-sm text-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            {results.length === 0 ? (
              <div
                className="rounded-lg border border-border bg-card px-4 py-6 text-center"
                role="status"
              >
                <p className="font-medium">No results found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try a different search or browse the project directory.
                </p>
              </div>
            ) : null}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
