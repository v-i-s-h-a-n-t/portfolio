import { Brand } from "@/components/layout/brand";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { NavigationUtilities } from "@/components/layout/navigation-utilities";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center gap-4 px-4 md:h-20 md:px-6 lg:px-8">
        <Brand />
        <DesktopNavigation className="md:ml-auto" />
        <div className="ml-auto flex items-center gap-2 md:ml-0 md:gap-3">
          <NavigationUtilities />
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
