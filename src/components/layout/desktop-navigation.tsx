import { cn } from "@/lib/utils";
import { NavigationLinks } from "@/components/layout/navigation-links";

export function DesktopNavigation({ className }: { className?: string }) {
  return (
    <div className={cn("hidden md:block", className)}>
      <NavigationLinks ariaLabel="Main navigation" orientation="horizontal" />
    </div>
  );
}
