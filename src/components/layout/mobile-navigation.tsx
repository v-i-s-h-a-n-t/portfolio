"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationLinks } from "@/components/layout/navigation-links";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const triggerLabel = open ? "Close navigation menu" : "Open navigation menu";

  return (
    <Dialog.Root open={open} onOpenChange={(nextOpen) => setOpen(nextOpen)}>
      <Dialog.Trigger
        render={
          <Button
            aria-label={triggerLabel}
            className="size-9 rounded-full text-muted-foreground hover:text-foreground"
            size="icon"
            type="button"
            variant="ghost"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/30 transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 motion-reduce:transition-none" />
        <Dialog.Popup className="fixed inset-x-4 top-20 z-50 mx-auto max-w-sm rounded-xl border border-border bg-background p-4 shadow-lg transition-[opacity,transform] duration-150 outline-none data-[ending-style]:translate-y-1 data-[ending-style]:opacity-0 data-[starting-style]:translate-y-1 data-[starting-style]:opacity-0 motion-reduce:transition-none">
          <div className="mb-3 flex items-center justify-between">
            <Dialog.Title className="font-heading text-lg font-semibold">
              Navigation
            </Dialog.Title>
            <Dialog.Close
              render={
                <Button
                  aria-label="Close navigation menu"
                  className="rounded-full text-muted-foreground hover:text-foreground"
                  size="icon"
                  type="button"
                  variant="ghost"
                >
                  <X className="size-5" aria-hidden="true" />
                </Button>
              }
            />
          </div>
          <NavigationLinks
            ariaLabel="Mobile navigation"
            orientation="vertical"
            onNavigate={() => setOpen(false)}
          />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
