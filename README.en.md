# oach.me

> Digital Garden · Project Hub · Electronics Engineering Portfolio

Personal site of [OACH](https://oach.me) — Electronics Engineering · FOSS · Digital Sovereignty.
Built with [Astro](https://astro.build) and TypeScript. No trackers, no telemetry,
no external runtime dependencies.

---

## Why does this site exist?

This site is a **Digital Garden**: a living space that documents the intersection between
low-level code and tangible hardware — how instructions interact with silicon to produce
measurable effects in the physical world.

It is not a marketing portfolio. It is the practical application of two principles that govern
the entire stack:

- **Technical Transparency** — if I advocate for auditable processes, the minimum is that my
  own code is inspectable. That is why the repository is public.
- **Digital Sovereignty** — the site collects no data, uses no third-party analytics, includes
  no external scripts at runtime. The user is not the product.

---

## Stack

| Layer      | Technology                                                        |
|------------|-------------------------------------------------------------------|
| Framework  | [Astro 4](https://astro.build) — `output: static`                |
| Language   | TypeScript                                                        |
| Styles     | Plain CSS — no framework, no preprocessor                         |
| Typography | [Azeret Mono](https://fonts.google.com/specimen/Azeret+Mono)      |
| Palette    | Catppuccin Mocha                                                  |
| Deploy     | Static — no server, no runtime                                    |
| Sitemap    | `@astrojs/sitemap` — generated at build time                      |

---

## Project Structure

```
src/
├── components/
│   ├── Footer.astro       # Footer: main row (brand ↔ links) + centred meta row
│   ├── HomePage.astro     # Composition of the three sections (Projects, Engineering, Philosophy)
│   ├── NavBar.astro       # Fixed nav with hide-on-scroll and hamburger menu (mobile < 580px)
│   └── ProjectCard.astro  # Project card with 3D tilt effect (hover/pointer:fine only)
│
├── data/
│   └── projects.ts        # Project data in three languages (ES / EN / RU); Project interface
│
├── i18n/
│   └── home.ts            # All translation strings ES / EN / RU for the home page
│
├── layouts/
│   └── BaseLayout.astro   # HTML shell: full SEO (OG, Twitter Card, JSON-LD,
│                          #   canonical, favicon, sitemap link, skip-link)
│
├── lib/
│   └── github.ts          # Build-time fetch of languages from the GitHub API
│
├── pages/
│   ├── index.astro        # Root route — ES
│   ├── 404.astro          # Error page
│   ├── en/
│   │   └── index.astro    # English route — /en/
│   └── ru/
│       └── index.astro    # Russian route — /ru/
│
└── styles/
    ├── global.css         # Reset, layout, glass system, animations, buttons, tags
    └── tokens.css         # CSS variables: Catppuccin Mocha palette, typography, geometry
```

```
public/
├── favicon.svg            # SVG icon with Catppuccin gradient
├── og.svg                 # Open Graph image 1200×630 for social previews
├── robots.txt             # Allow: *, reference to sitemap
└── patterns/
    └── circuit.svg        # Background pattern for glass cards
```

---

## Visual Identity

The **Catppuccin Mocha** palette was chosen because it evokes a modern and efficient terminal —
deep dark background (`#11111b`), accents in mauve, sapphire, teal and peach that provide
visual hierarchy without abandoning the technical aesthetic.

```
Background: --crust    #11111b  /  --mantle  #181825  /  --base  #1e1e2e
Text:       --text     #cdd6f4  /  --subtext #bac2de
Accents:    --mauve    #cba6f7  /  --sapphire #74c7ec  /  --teal #94e2d5
```

The **Azeret Mono** typeface (monospace with wide proportions) reinforces the technical identity:
the entire site — from headings to body text — uses the same family. No decorative or sans-serif
type breaks the coherence.

The **glass system** (`.glass`, `.glass-featured`) applies `backdrop-filter: blur` plus an
animated border using `@property --border-angle` — a continuously rotating gradient border,
calculated to be imperceptible at rest but noticeable on hover.

---

## Dynamic Tags — GitHub API

The programming language tags shown on project cards **are generated at build time**, not
hardcoded:

```typescript
// src/lib/github.ts
export async function fetchLangTags(repo: string): Promise<string[]> {
  const res = await fetch(`https://api.github.com/repos/${repo}/languages`);
  const langs: Record<string, number> = await res.json();
  return Object.keys(langs)
    .filter(l => !NOISE.has(l))        // filters HTML, CSS, Shell...
    .map(l => EMOJI[l] ? `${EMOJI[l]} ${l}` : l);
}
```

During `astro build`, the site queries the GitHub API for each project with a defined
`githubRepo` and merges the result with `STATIC_TAGS` (`🔓 Open Source`, `⚡ KISS`). If the
API fails, the build continues without dynamic tags — it never blocks the deploy.

---

## Running locally

```bash
git clone https://github.com/OACH-py/oach.me
cd oach.me
npm install
npm run dev      # http://localhost:4321
npm run build    # static build → dist/
npm run preview  # preview the build
```

No environment variables are required. The GitHub API is public for unauthenticated requests
(limit of 60 req/h per IP — enough for any local build).

---

## License

[MIT](./LICENSE) — © 2026 Osvaldo A. (OACH) · Made in Mexico 🇲🇽

> The code is free. The philosophy behind it is too.
