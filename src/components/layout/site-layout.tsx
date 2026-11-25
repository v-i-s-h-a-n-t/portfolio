import { Container } from "@/components/layout/container";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-sm"
        href="#main-content"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        className="flex-1 py-10 md:py-12 lg:py-16"
        tabIndex={-1}
      >
        <Container className="flex flex-col gap-12 md:gap-16">
          {children}
        </Container>
      </main>
    </>
  );
}
