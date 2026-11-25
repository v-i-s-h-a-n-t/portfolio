# Authoring Local MDX Content

Project and journal content lives in `src/content/projects` and
`src/content/journal`. The installed Next.js MDX integration compiles these
files. Each MDX file exports a `metadata` object and provides its body as MDX.
YAML frontmatter is not enabled.

## Add a project

1. Create `src/content/projects/<slug>.mdx`. Use a lowercase, hyphen-separated
   slug that matches the filename.
2. Export the project metadata fields: `title`, `slug`, `description`,
   `category`, `technologies`, `featured`, and `publicationStatus`. The optional
   illustration fields are `image`, `illustrationType`, `repositoryUrl`, and
   `demoUrl`, and `relatedProjects`. Optional `tableOfContents` entries support
   level-two and level-three headings in the case study body. Add related slugs
   only when there is a confirmed relationship.
3. Keep incomplete work in `draft` status. A published project needs an approved
   description and category. Only add confirmed technologies, links, and project
   details.
4. Import the MDX component and its `metadata` export in
   `src/content/projects/index.ts`. Add the pair to `sourceModules`; that manifest
   is the project discovery index.
5. Run `pnpm run lint`, `pnpm run typecheck`, `pnpm run build`, and
   `pnpm run test:content` before publishing.

## Add a technical article

1. Create `src/content/journal/<slug>.mdx` only when there is a real article to
   publish or review. Do not add sample article titles or fabricated body text.
2. Export `title`, `slug`, `summary`, `category`, `tags`, `publicationDate`, and
   `publicationStatus`. Use an ISO `YYYY-MM-DD` date when the article is
   published.
3. Keep an article in `draft` status while its summary, category, publication
   date, or text is unfinished. A published article needs a non-empty summary,
   category, and valid publication date.
4. Import the MDX component and metadata in `src/content/journal/index.ts` and
   add them to `sourceModules`. This manifest is the journal discovery index.
5. Run the validation commands listed above.

## Publication and rendering

The `publicationStatus` value controls public visibility. Published-only loaders
feed the project and journal listings, search and filters, and slug routes. Draft
slugs resolve to not found and do not appear in lists. Keep slugs unique within
each content collection.

## Supported Markdown and MDX

Content supports standard Markdown paragraphs, level-two and level-three
headings, ordered and unordered lists, blockquotes, links, tables, horizontal
rules, inline code, and fenced code blocks. Start body headings at level two
because the page title is already the level-one heading.

Fenced code blocks are highlighted at build time with Shiki. Add a language
identifier after the opening fence; use a language supported by Shiki's bundled
grammars. For example:

````md
```ts
export function greet(name: string) {
  return `Hello, ${name}`;
}
```
````

The rendered block uses the light or dark code theme to match the site, displays
the language label, and includes a keyboard-accessible copy button. Inline code
uses the same Geist Mono typography without syntax highlighting. A missing or
unsupported language is displayed as plain code rather than assigned a guessed
language.

MDX also has the globally registered `ProjectImage` and `ProjectIllustration`
components for responsive project media. Store referenced images in
`public/images` or `public/projects`, and provide meaningful alternative text.
Project case studies can provide `tableOfContents` metadata with each heading's
title and level; the shared MDX heading components generate matching anchor IDs.

## Mermaid diagrams

Use the globally registered `MermaidDiagram` component for architecture
diagrams, flowcharts, or sequence diagrams. Provide a concise title and a
plain-language description of the relationships and flow; the description is
shown next to the visual and associated with it for assistive technology. The
diagram source is also available in a disclosure below the rendered diagram.

```md
<MermaidDiagram
title="Request flow"
description="A browser sends a request to the API, which reads the database and returns a response to the browser."
code={`sequenceDiagram
    participant Browser
    participant API
    participant Database
    Browser->>API: Request
    API->>Database: Read data
    Database-->>API: Result
    API-->>Browser: Response`}
/>
```

Keep diagram node and edge labels descriptive and concise. Mermaid runs with its
strict security level: HTML labels and diagram click actions are disabled, and
diagram source size and edge count are bounded. The SVG is generated in the
browser; the supplied text description and source remain available if rendering
fails or a reader does not use the visual. Do not include secrets or private
data in diagram source.

Next.js does not parse YAML frontmatter by default. Keep metadata as a named
JavaScript export, and register each content module in its collection manifest
so metadata validation and slug retrieval can include it.
