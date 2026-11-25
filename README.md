# Vishant Kumar — Software Engineering Portfolio

The source for Vishant Kumar's personal software engineering portfolio. The `vk.` identity brings together selected projects, verified technical skills, academic background, and ways to connect in a compact, responsive site.

## What the site includes

- A homepage with an introduction, selected work, technical toolkit, education timeline, and contact links.
- A searchable project directory and detailed writeups for published projects.
- About, academic achievements, résumé, contact, and portfolio changelog pages.
- Light, dark, and system themes; responsive navigation; and a keyboard accessible site search.
- Page metadata, a branded social image, structured data, and sitemap generation when a verified production URL is configured.

## Technology stack

- **Application:** Next.js 16 App Router, React 19, and TypeScript 5.
- **Styling and UI:** Tailwind CSS 4, shadcn/ui with Base UI and Nova, Lucide React, Motion, and `next-themes`.
- **Content:** MDX project writeups, typed metadata, and server-side publication filtering.
- **Tooling:** pnpm 12, ESLint 9, Prettier 3, and Node.js 24.

## Architecture

Routes and metadata live in `src/app`; reusable layout, section, project, and UI components live in `src/components`. Typed project MDX lives in `src/content/projects`, with publication filtering and content helpers in `src/content` and `src/lib`. Static profile, education, skills, achievements, and changelog records live in `src/data`. Approved images and the public résumé live in `public`; content tests live in `tests`.

Server Components render route content by default. Client Components handle navigation, search, filtering, themes, and motion. See [the architecture guide](docs/ARCHITECTURE.md) for directory responsibilities and boundaries.

## Local development

Use Node.js 24 and pnpm 12.23.0 (the version pinned in `package.json`). From the repository root:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. For a production run, use `pnpm build` followed by `pnpm start`.

Copy `.env.example` to `.env.local` for local production metadata, or set `NEXT_PUBLIC_SITE_URL` in Vercel to `https://vishantk.dev`. This value controls canonical URLs, sitemap entries, robots sitemap reference, and social metadata. The domain is registered; the website is not yet confirmed deployed.

## Content authoring

Project case studies are MDX files in `src/content/projects`. Create a file with a unique lowercase, hyphenated slug, export its typed `metadata`, and register the module in `src/content/projects/index.ts`. Keep incomplete entries as `draft`; only `published` entries appear in the project directory, search, and detail routes. Published entries require a confirmed description and category. Add only verified technologies, media, links, and results. See [the MDX authoring guide](docs/MDX_CONTENT.md) for the complete schema and supported components.

The Engineering Journal and its navigation were removed from this repository. There is currently no journal article collection or publishing workflow to document. If a journal is added later, its authoring and publication rules should be documented alongside that implementation.

## Validation and CI

Run the repository checks locally before opening a pull request:

```bash
pnpm format:check
pnpm lint
pnpm exec next typegen
pnpm typecheck
pnpm test:content
pnpm build
```

`next typegen` creates the route-aware types needed by `LayoutProps` on a fresh checkout. The content tests validate project metadata, slugs, and published-only queries. No Playwright suite is configured.

[GitHub Actions CI](.github/workflows/ci.yml) runs these checks after a frozen-lockfile install on pushes to `main`, pull requests, and manual dispatch. It does not deploy the site. See [Vercel deployment instructions](docs/DEPLOYMENT.md) to connect the existing GitHub repository and configure the registered domain.
