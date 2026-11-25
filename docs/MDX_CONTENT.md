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
   `demoUrl`.
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

Use standard Markdown and MDX headings, lists, blockquotes, links, tables, and
fenced code blocks. The shared MDX components and `.mdx-content` styles apply the
site's Geist typography, theme-aware colors, spacing, borders, and code surfaces.
Start body headings at level two because the page title is already the level-one
heading. Store referenced images in `public/images` or `public/projects`, and
provide meaningful alternative text.

Next.js does not parse YAML frontmatter by default. Keep metadata as a named
JavaScript export, and register each content module in its collection manifest
so metadata validation and slug retrieval can include it.
