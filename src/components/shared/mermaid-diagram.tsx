"use client";

import { useTheme } from "next-themes";
import { useEffect, useId, useRef, useState } from "react";

type MermaidDiagramProps = {
  code: string;
  description: string;
  title: string;
};

function getThemeVariables() {
  const styles = getComputedStyle(document.documentElement);
  const color = (name: string, fallback: string) =>
    styles.getPropertyValue(name).trim() || fallback;

  return {
    background: color("--background", "#fafafa"),
    primaryColor: color("--surface-secondary", "#f1f5f4"),
    primaryTextColor: color("--foreground", "#171717"),
    primaryBorderColor: color("--primary", "#0f766e"),
    lineColor: color("--muted-foreground", "#64748b"),
    secondaryColor: color("--card", "#ffffff"),
    tertiaryColor: color("--muted", "#f1f5f4"),
    edgeLabelBackground: color("--background", "#fafafa"),
    textColor: color("--foreground", "#171717"),
    nodeTextColor: color("--foreground", "#171717"),
    fontFamily: "Geist, sans-serif",
  };
}

export function MermaidDiagram({
  code,
  description,
  title,
}: MermaidDiagramProps) {
  const { resolvedTheme } = useTheme();
  const diagramRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const diagram = diagramRef.current;
    if (!diagram) return;
    const diagramElement = diagram;
    diagramElement.replaceChildren();
    setError(false);

    async function renderDiagram() {
      try {
        const { default: mermaid } = await import("mermaid");
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          secure: [
            "secure",
            "securityLevel",
            "startOnLoad",
            "maxTextSize",
            "suppressErrorRendering",
            "maxEdges",
          ],
          maxTextSize: 20_000,
          maxEdges: 500,
          suppressErrorRendering: true,
          theme: "base",
          themeVariables: getThemeVariables(),
        });

        await mermaid.parse(code);
        const { svg } = await mermaid.render(id, code);

        if (cancelled) return;

        // Mermaid sanitizes its generated SVG under strict security level.
        diagramElement.innerHTML = svg;
      } catch {
        if (!cancelled) setError(true);
      }
    }

    void renderDiagram();

    return () => {
      cancelled = true;
      diagramElement.replaceChildren();
    };
  }, [code, id, resolvedTheme]);

  return (
    <div className="mdx-diagram">
      <figure className="mdx-diagram__figure">
        <figcaption className="mdx-diagram__title" id={`${id}-title`}>
          {title}
        </figcaption>
        <div
          aria-describedby={`${id}-description`}
          aria-labelledby={`${id}-title`}
          aria-roledescription="diagram"
          className="mdx-diagram__canvas"
          ref={diagramRef}
          role="img"
        />
      </figure>
      <p className="mdx-diagram__description" id={`${id}-description`}>
        {description}
      </p>
      {error ? (
        <p className="mdx-diagram__error" role="status">
          The diagram could not be rendered. Its source is available below.
        </p>
      ) : null}
      <details className="mdx-diagram__source">
        <summary>View diagram source</summary>
        <pre>
          <code>{code}</code>
        </pre>
      </details>
    </div>
  );
}
