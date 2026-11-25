# Portfolio Design Specification

## Direction and reference

Create an original, modern engineering portfolio with a compact, professional,
content-focused composition. The user's homepage screenshot is the primary visual
and layout reference. It was not available for inspection when this specification
was written; compare the implementation with it once supplied. The layout details
below are user-provided requirements, with numeric responsive and typography values
serving as implementation defaults pending that comparison.

Use the editorial approach of anav.dev only as broad inspiration. Do not copy its
source code, branding, or content. Do not reproduce the outer ChatGPT preview frame
or floating three-dot control from the screenshot.

Avoid oversized landing page headings, glowing gradients, glassmorphism, excessive
animation, particle effects, and generic AI-generated hero designs.

## Project identity

| Field               | Value                               |
| ------------------- | ----------------------------------- |
| Name                | Vishant Kumar                       |
| Brand               | vk.                                 |
| Role                | Software Engineering Student        |
| Location            | Fiji                                |
| University          | The University of the South Pacific |
| Degree              | Bachelor of Software Engineering    |
| Expected graduation | 2028                                |

Only publish supplied or verified personal information. Do not invent project
results, employment history, project details, social URLs, or academic details.

## Design tokens

| Token                   | Value or rule                                              |
| ----------------------- | ---------------------------------------------------------- |
| Dark background         | `#101315`                                                  |
| Dark card surface       | `#161C1E`                                                  |
| Illustration background | `#172425`                                                  |
| Portrait background     | `#1E2528`                                                  |
| Dark accent             | `#2DD4BF`                                                  |
| Light background        | `#FAFAFA`                                                  |
| Light accent            | `#0F766E`, darker teal; validate contrast in actual use    |
| Light card surface      | White or a subtle neutral tint                             |
| Borders                 | Thin, subtle neutral borders adapted to each theme         |
| Content width           | Maximum `1024px`, centered                                 |
| Card radius             | Approximately `12px`                                       |
| Shadows                 | Minimal; prefer surface and border separation              |
| Spacing                 | Consistent 4px-based scale: 4, 8, 12, 16, 24, 32, 48, 64px |

Use semantic color tokens for background, surface, text, muted text, border, and
accent. Check text contrast in both themes: at least 4.5:1 for normal text and 3:1
for large text. Essential controls and focus indicators need clear contrast.

## Typography

Use Geist for headings and body copy and Geist Mono for small technical labels,
metadata, and code. Use restrained weights and readable line lengths.

- Body: approximately 16px with 1.5–1.7 line height.
- Main heading: approximately 28–36px, responsive without dominating the page.
- Section headings: approximately 20–24px.
- Metadata: approximately 12–14px; avoid long passages at small sizes.
- Keep one page-level heading and a logical heading hierarchy.

## Homepage layout

Maintain this section order within the shared content container.

### 1. Navbar

Compact sticky navigation with a thin bottom border and an opaque theme-aware
background. Place `vk.` on the left and Home, About, and Projects on the right,
followed by GitHub and theme controls. Provide a clear active state,
keyboard focus, and accessible names for icon controls.

### 2. Introduction

Use two columns: text on the left and a portrait on the right. Include a teal
status dot beside the professional identity, without implying an unconfirmed
availability status.

- Identity: Software Engineering Student.
- Heading: “Hi, I'm Vishant Kumar.”
- Description: “I build software, explore emerging technologies and enjoy solving complex problems through engineering.”
- Location: Fiji, accompanied by a pin icon.
- Social icons: GitHub, LinkedIn, and email using verified destinations.
- Action: outlined Resume button linking to an approved public resume.
- Portrait: approximately 3:4 aspect ratio on the portrait background; use a supplied image and meaningful alternative text.

Stack text above the portrait on mobile. Do not invent a portrait, resume, or social
links to fill missing content.

### 3. Academic Excellence

A full-width horizontal card with a teal trophy icon, the heading “Academic
Excellence,” and the exact supplied achievement:

“Most Outstanding Student — Software Engineering & STEMP, 2025.”

Use a subtle border and a right-facing external-style arrow. Make the card a link
only when a verified destination exists; avoid an inert control. Allow the text to
wrap on narrow screens.

### 4. Selected Work

Align the section heading left and an “All projects” link right. Use a two-column
project grid, with large technical illustrations on the first two cards and
compact cards for subsequent projects. Use original or authorized assets and
accurate project descriptions. Do not invent metrics, outcomes, or links.

### 5. Technical Toolkit

Four compact cards in a two-column grid. Group verified skills into clear
categories; category names and skill lists remain pending supplied content.

### 6. My Journey

A minimal education timeline showing the supplied university, degree, and expected
2028 graduation. Do not invent enrollment dates or additional milestones.

### 7. Contact

A concise invitation to connect followed by verified social links. Do not display
private contact details or placeholder destinations as working links.

### 8. Footer

A subtle top border, copyright on the left, and “Built with Next.js” on the right.
Use the current year and Vishant Kumar's name. Stack gracefully on small screens.

## Responsive behavior and accessibility

- Use approximately 16px horizontal gutters on mobile, 24px on tablet, and 32px on larger screens.
- Default to a single column below approximately 768px; use two columns for the introduction, projects, and toolkit when content fits comfortably.
- Keep navigation usable without horizontal overflow. Collapse links into an accessible compact menu when necessary, preserving all destinations and theme controls.
- Use approximately 40–64px between sections, with tighter spacing inside cards.
- Preserve reading order and avoid fixed heights that clip wrapped text.
- Support keyboard navigation, a skip link, visible focus, descriptive link names, and semantic landmarks.
- Give icon-only controls accessible labels and hide decorative icons from assistive technology.
- Ensure touch controls have adequate target size and remain distinguishable without color alone.
- Respect reduced-motion preferences. Motion should be restrained and serve feedback or comprehension.
- Support system, light, and dark themes through next-themes without hydration flashes.

## Architecture

Continue the existing Next.js App Router application with React, TypeScript,
Tailwind CSS v4, shadcn/ui with Base UI and Nova, Motion, Lucide React,
next-themes, pnpm, ESLint, and Prettier. Avoid unnecessary dependencies.

Keep route composition in `src/app`, reusable presentation in `src/components`,
and shared utilities in `src/lib`. Reuse existing UI primitives. Store typed
identity, project, education, and toolkit content separately from presentation,
for example in `src/content`. Keep approved public images and documents in
`public`; never include secrets or private files.

Use Server Components by default. Isolate Client Components to theme controls,
interactive navigation, and interactions that require browser state. Define theme
tokens in `src/app/globals.css` and consume them consistently. Use the existing
Geist font setup where available. Read the installed Next.js guides before writing
application code, as required by `AGENTS.md`.

This document establishes design requirements only; UI implementation is a
separate task. Before implementation is complete, verify both themes, mobile and
desktop layouts, keyboard access, contrast, reduced motion, and comparison with
the supplied screenshot. Follow the validation and atomic commit rules in
`AGENTS.md` at each implementation checkpoint.
