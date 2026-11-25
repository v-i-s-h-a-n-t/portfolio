"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/components/layout/navigation-items";

type NavigationLinksProps = {
  ariaLabel: string;
  orientation: "horizontal" | "vertical";
  onNavigate?: () => void;
};

export function NavigationLinks({
  ariaLabel,
  orientation,
  onNavigate,
}: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel}>
      <ul
        className={cn(
          "flex",
          orientation === "horizontal"
            ? "items-center gap-5 lg:gap-6"
            : "flex-col gap-1",
        )}
      >
        {navigationItems.map((item) => {
          const isCurrent =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

          return (
            <li key={item.href}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "text-base transition-colors",
                  orientation === "vertical" && "block rounded-md px-3 py-2.5",
                  isCurrent
                    ? "font-medium text-primary"
                    : orientation === "vertical"
                      ? "text-foreground hover:bg-muted"
                      : "text-muted-foreground hover:text-foreground",
                )}
                href={item.href}
                onClick={onNavigate}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
