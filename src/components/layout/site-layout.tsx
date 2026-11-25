import { Container } from "@/components/layout/container";
import type { ReactNode } from "react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <main
      id="main-content"
      className="flex-1 py-10 md:py-12 lg:py-16"
      tabIndex={-1}
    >
      <Container className="flex flex-col gap-12 md:gap-16">
        {children}
      </Container>
    </main>
  );
}
