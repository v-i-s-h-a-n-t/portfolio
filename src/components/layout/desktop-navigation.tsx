import Link from "next/link";
import { navigationItems } from "@/components/layout/navigation-items";

export function DesktopNavigation() {
  return (
    <nav aria-label="Main navigation" className="hidden md:block">
      <ul className="flex items-center gap-5 lg:gap-6">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
