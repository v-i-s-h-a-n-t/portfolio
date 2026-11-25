"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

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
    <Dialog.Root open={open} onOpenChange={setOpen}>
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
              aria-label="Search projects, articles and pages"
              autoComplete="off"
              autoFocus
              className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground sm:text-lg"
              placeholder="Search projects, articles and pages..."
              type="search"
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
            <p className="text-sm text-muted-foreground">
              Search public pages and projects.
            </p>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
