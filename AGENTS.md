<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Development Rules

- Use clean, modular, maintainable architecture.
- Use Server Components by default; use Client Components only when required.
- Maintain strong TypeScript typing.
- Separate content from presentation and reuse existing components.
- Support dark and light mode, accessibility, and responsive design.
- Avoid unnecessary dependencies.
- Follow `docs/DESIGN.md` once available.
- Never invent personal information or project results.
- Never copy another portfolio's source code.
- Never expose secrets or private documents.
- Preserve the installed stack: Next.js App Router, React, TypeScript, Tailwind CSS v4, shadcn/ui with Base UI and Nova, Motion, Lucide React, next-themes, pnpm, ESLint, and Prettier.

## Mandatory Git Workflow

- Inspect git status before starting.
- Preserve existing commits and unrelated user changes.
- Divide tasks into small, logical changes; implement one logical change at a time.
- Validate each change before committing.
- Review `git diff` and `git diff --cached`.
- Stage only relevant files and commit immediately after completing each logical change.
- Do not wait until the end of a prompt to commit everything or combine unrelated features.
- Do not create empty or artificial commits.
- Combine dependent changes only when necessary to keep builds functional.
- Never commit a known broken build.
- Never amend, squash, rebase, force push, or rewrite history.
- Use the existing branch unless explicitly instructed otherwise.
- Stop if unrelated user changes prevent safe validation.

## Validation

- Format changed files using Prettier.
- Run appropriate ESLint checks.
- Run TypeScript checks for source changes.
- Verify the production build for functional changes.
- Run relevant automated tests when available.
- Resolve failures before committing.
- Validate each implementation checkpoint, not just the final result.

## Reporting

At the end of each prompt, report:

1. Changes implemented.
2. Validation results.
3. Actual commit hashes and messages.
4. Remaining issues.
5. Git status.
