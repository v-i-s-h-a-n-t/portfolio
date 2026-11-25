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

`NEXT_PUBLIC_SITE_URL` is optional. Set it to the verified HTTPS production origin when deploying so canonical URLs, sitemap entries, and social metadata use that domain. Do not set it to a placeholder or localhost URL.
