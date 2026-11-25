import { NavigationLinks } from "@/components/layout/navigation-links";

export function DesktopNavigation() {
  return (
    <div className="hidden md:block">
      <NavigationLinks ariaLabel="Main navigation" orientation="horizontal" />
    </div>
  );
}
