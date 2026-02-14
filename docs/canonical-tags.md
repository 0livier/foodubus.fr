# Canonical tags — acceptance criteria

## Acceptance criteria

- [ ] **Absolute URLs** — Each page includes `<link rel="canonical" href="...">` using absolute URLs (e.g. `https://foudubus.fr/...`).
- [ ] **Preferred URL** — The canonical URL always matches the preferred URL; trailing slash rules are respected (no trailing slash except for the root `/`).

## Implementation

- **Canonical logic**: `src/utils/canonical-url.ts` — `canonicalPath()` strips trailing slashes (keeps `/` for root) and normalizes underscores to hyphens.
- **Redirects**: `src/middleware.ts` — Non-canonical paths (e.g. with trailing slash) are 301-redirected to the canonical path.
- **HTML output**: `src/layouts/App.astro` — Every page that uses the default layout gets a canonical link built from `canonicalPath(Astro.url.pathname)` and `Astro.site`, so the href is absolute and matches the preferred URL.
- **Config**: `astro.config.ts` — `site: "https://foudubus.fr"` and `trailingSlash: "never"` align with the above rules.

All locale, note, jotting, tag, and error (404/500) pages use `Base.astro` → `App.astro`, so canonical tags are applied site-wide.
