import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1024px] px-4 md:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
