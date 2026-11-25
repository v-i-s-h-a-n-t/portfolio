import type { MDXComponents } from "mdx/types";
import {
  Children,
  isValidElement,
  type ComponentProps,
  type ReactNode,
} from "react";
import {
  ProjectIllustration,
  ProjectImage,
} from "@/components/projects/project-media";
import { cn } from "@/lib/utils";
import { slugifyHeading } from "@/lib/slugify-heading";

function getTextContent(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }

      if (isValidElement<{ children?: ReactNode }>(child)) {
        return getTextContent(child.props.children);
      }

      return "";
    })
    .join("");
}

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

function MdxH2({ className, id, children, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "font-heading text-xl font-semibold tracking-tight",
        className,
      )}
      id={id ?? slugifyHeading(getTextContent(children))}
      {...props}
    >
      {children}
    </h2>
  );
}

function MdxH3({ className, id, children, ...props }: ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "font-heading text-lg font-semibold tracking-tight",
        className,
      )}
      id={id ?? slugifyHeading(getTextContent(children))}
      {...props}
    >
      {children}
    </h3>
  );
}

const components = {
  a: MdxLink,
  h2: MdxH2,
  h3: MdxH3,
  ProjectImage,
  ProjectIllustration,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
