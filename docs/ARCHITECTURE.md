# Project Architecture

This project uses the Next.js App Router with application code under `src/`.
Keep route composition, presentation, content, and supporting code in distinct
places so each part has a clear purpose. Add a directory when it receives its
first real file; do not add placeholder files to make empty directories visible
in Git.

## Directory map

| Path                       | Responsibility                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/app`                  | App Router routes and framework files such as `page.tsx`, `layout.tsx`, and `globals.css`. Keep route files focused on metadata, layouts, and composing page sections. |
| `src/components/layout`    | Site-wide shell elements such as the navigation, footer, and page container.                                                                                           |
| `src/components/sections`  | Larger page sections composed from shared or feature components, such as introduction, toolkit, journey, and contact.                                                  |
| `src/components/shared`    | Reusable presentation that is not tied to one feature or page section.                                                                                                 |
| `src/components/providers` | React providers needed by the component tree, including theme support when configured.                                                                                 |
| `src/components/projects`  | Project-specific cards, visuals, and presentation.                                                                                                                     |
| `src/components/ui`        | Reusable low-level interface primitives, including shadcn/ui components.                                                                                               |
| `src/data`                 | Structured static data or data access and transformation code that is not authored as page copy.                                                                       |
| `src/content`              | Typed portfolio content: identity, projects, education, and toolkit. Keep content separate from its rendering.                                                         |
| `src/types`                | Shared domain types used across content, data, and components. Prefer types close to their single use until they need to be shared.                                    |
| `src/hooks`                | Reusable React hooks, especially hooks that need client-side state or browser APIs.                                                                                    |
| `src/lib`                  | Small shared utilities and integrations that do not belong to a feature or UI component.                                                                               |
| `public/images`            | Approved public images such as supplied portraits and illustrations.                                                                                                   |
| `public/projects`          | Approved public project screenshots and other project assets.                                                                                                          |
| `public/documents`         | Documents explicitly approved for public access, such as a public resume. Never place private documents here.                                                          |
| `tests`                    | Automated tests and test support, organized by the conventions of the chosen test runner.                                                                              |
| `.github/workflows`        | GitHub Actions workflows for continuous integration and other repository automation.                                                                                   |

## Boundaries and conventions

- `src/app` owns routing. A route is exposed through Next.js route files; keep
  reusable non-route code in the shared `src` directories above.
- Keep content and its types independent of presentation. Components receive
  typed values rather than embedding personal details or project copy in JSX.
- Use Server Components by default. Isolate Client Components to interactions
  that require state, event handlers, context, or browser APIs.
- Keep `src/components/ui` primitives generic. Put project-specific display in
  the corresponding feature directory and assemble larger page regions in
  `src/components/sections`.
- Put only approved, intentionally public assets in `public`. Secrets belong in
  environment configuration and private files must stay outside the repository.
- Reuse the existing TypeScript, Tailwind CSS v4, shadcn/ui, and utility setup;
  avoid adding dependencies for features the installed stack already supports.
- Keep tests near the repository-level `tests` directory unless a test runner's
  required convention calls for another location. Keep workflow definitions in
  `.github/workflows`.

## Current state

The repository currently has `src/app`, `src/components/ui`, and `src/lib` in
use. The remaining paths in the directory map describe where future real code
belongs; create them as work introduces their first implementation.
