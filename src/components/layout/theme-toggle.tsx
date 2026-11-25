"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const subscribeToNothing = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function getNextTheme(theme: string | undefined) {
  if (theme === "light") return "dark";
  if (theme === "dark") return "system";
  return "light";
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    getClientSnapshot,
    getServerSnapshot,
  );

  const nextTheme = getNextTheme(theme);
  const currentThemeLabel =
    theme === "system"
      ? `System${resolvedTheme ? ` (${resolvedTheme})` : ""}`
      : (theme ?? "System");
  const label = mounted
    ? `Theme: ${currentThemeLabel}. Activate to use ${nextTheme}.`
    : "Change color theme";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="size-9 rounded-full text-muted-foreground hover:text-foreground"
      aria-label={label}
      title={label}
      onClick={() => setTheme(nextTheme)}
    >
      <Sun className="size-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden size-4 dark:block" aria-hidden="true" />
    </Button>
  );
}
