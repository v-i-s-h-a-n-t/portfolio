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
import { CopyCodeButton } from "@/components/shared/copy-code-button";
import { MermaidDiagram } from "@/components/shared/mermaid-diagram";
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

function getCodeLanguage(children: ReactNode): string | undefined {
  for (const child of Children.toArray(children)) {
    if (!isValidElement<{ className?: string; children?: ReactNode }>(child)) {
      continue;
    }

    const languageClass = child.props.className
      ?.split(/\s+/)
      .find((className) => className.startsWith("language-"));

    if (languageClass) return languageClass.slice("language-".length);

    const nestedLanguage = getCodeLanguage(child.props.children);
    if (nestedLanguage) return nestedLanguage;
  }

  return undefined;
}

const languageLabels: Record<string, string> = {
  bash: "Bash",
  css: "CSS",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  json: "JSON",
  jsx: "JSX",
  markdown: "Markdown",
  mdx: "MDX",
  mermaid: "Mermaid",
  plaintext: "Plain text",
  python: "Python",
  shell: "Shell",
  sql: "SQL",
  ts: "TypeScript",
  tsx: "TSX",
  typescript: "TypeScript",
  yaml: "YAML",
};

function MdxPre({ className, children, ...props }: ComponentProps<"pre">) {
  const language = getCodeLanguage(children);
  const label = language
    ? (languageLabels[language.toLowerCase()] ?? language)
    : "Code";

  return (
    <figure className="mdx-code-block">
      <figcaption className="mdx-code-block__header">
        <span className="mdx-code-block__label">{label}</span>
        <CopyCodeButton code={getTextContent(children)} />
      </figcaption>
      <pre className={className} {...props}>
        {children}
      </pre>
    </figure>
  );
}

const components = {
  a: MdxLink,
  h2: MdxH2,
  h3: MdxH3,
  pre: MdxPre,
  MermaidDiagram,
  ProjectImage,
  ProjectIllustration,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
