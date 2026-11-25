import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function MdxLink({ className, ...props }: ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "font-medium text-primary underline-offset-4 hover:underline",
        className,
      )}
      {...props}
    />
  );
}

const components = {
  a: MdxLink,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
