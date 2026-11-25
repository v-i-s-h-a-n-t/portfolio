"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigationItems } from "@/components/layout/navigation-items";

export function DesktopNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex items-center gap-5 lg:gap-6">
        {navigationItems.map((item) => {
          const isCurrent =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

          return (
            <li key={item.href}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                className={`text-base transition-colors ${
                  isCurrent
                    ? "font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                href={item.href}
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
