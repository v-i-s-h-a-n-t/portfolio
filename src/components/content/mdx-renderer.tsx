import type { ReactNode } from "react";

export function MDXRenderer({ children }: { children: ReactNode }) {
  return <div className="mdx-content">{children}</div>;
}
