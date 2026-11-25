# Accessibility and performance audit

Audited 26 November 2026 against the repository's design specification and WCAG 2.2 AA practices where applicable. This is a source, production build, and local HTTP audit. It is not a Lighthouse or assistive technology certification.

## Corrected finding

- The introduction portrait used Next.js's default lazy loading despite appearing in the first section. It now loads eagerly with high fetch priority. The image still uses `next/image`, responsive `sizes`, and a fixed 3:4 container to reserve layout space. Commit: `b4cd12d`.

## Accessibility findings

| Area                   | Finding                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Semantics and headings | The built homepage has one `h1` followed by section `h2` and card `h3` headings. The shared layout has a skip link, `header`, `main`, and `footer`.                                                                                                                                                                                                                                                                   |
| Navigation and dialogs | Navigation links expose `aria-current`. Mobile navigation and search use Base UI dialogs with labelled controls. Search exposes a combobox, result listbox, and arrow key selection in source. Keyboard focus trapping, Escape behavior, and screen reader announcements still need browser and assistive technology checks.                                                                                          |
| Focus                  | A global `:focus-visible` outline and component focus styles are present. Focus visibility on every interactive state needs browser verification.                                                                                                                                                                                                                                                                     |
| Contrast               | Computed from theme tokens: light foreground/background 14.31:1, muted/background 6.15:1, muted/card 6.42:1, primary/background 5.24:1, primary/card 5.47:1; dark foreground/background 15.99:1, muted/background 8.55:1, muted/card 7.90:1, primary/background 10.02:1, primary/card 9.25:1. These sampled normal text pairs exceed 4.5:1. Translucent hover, disabled, and focus combinations need rendered checks. |
| Images                 | The built homepage's three images have descriptive alternative text. Project illustrations explicitly identify conceptual artwork.                                                                                                                                                                                                                                                                                    |
| Reduced motion         | `MotionConfig` respects user preference and CSS disables animation and transitions under `prefers-reduced-motion: reduce`. Browser behavior remains unverified.                                                                                                                                                                                                                                                       |

## Performance measurements

Measured against `pnpm build` followed by `pnpm start` on the local machine. `curl` times are individual local requests and do not represent field latency, LCP, CLS, or INP.

| Measurement                                    |                                   Result |
| ---------------------------------------------- | ---------------------------------------: |
| Homepage HTML, first local request             | 200; 27.210 ms; 90,577 bytes transferred |
| Homepage HTML, repeat local request            |  200; 3.766 ms; 90,577 bytes transferred |
| Published project HTML                         |  200; 4.779 ms; 37,711 bytes transferred |
| Optimized portrait, 256 px, quality 75         |  200; 44.964 ms; 9,064 bytes transferred |
| Home route first load JS, build diagnostic     |               725,294 uncompressed bytes |
| Projects route first load JS, build diagnostic |               604,782 uncompressed bytes |

The production build completed. The homepage HTML references ten JavaScript files. The portrait source is a 1,113 × 1,483 progressive JPEG; Next.js serves a resized image. Project art and other below fold images retain lazy loading. Geist and Geist Mono are loaded with `next/font`, which self hosts the font files. The page uses Client Components for theme control, dialogs, navigation state, project filtering, and motion; content and route composition remain Server Components. The shared client navigation and search contribute to every route's JavaScript, but this audit did not establish a safe reduction without changing behavior.

## Remaining verification

- Run keyboard and screen reader checks for mobile navigation, search dialog, result selection, route announcements, and focus return.
- Check all themes and viewport sizes in a browser for focus visibility, hover and disabled contrast, text zoom, and layout stability.
- Measure Lighthouse or Web Vitals in a browser on a deployed production origin and representative device/network. No Lighthouse score or field performance metric was available in this session.
