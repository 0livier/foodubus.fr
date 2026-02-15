/**
 * Canonical URL policy: hyphens in slugs, trailing slash always (except root).
 * Use for redirect targets and for <link rel="canonical"> / og:url.
 */
export function canonicalPath(pathname: string): string {
	const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
	const withHyphens = normalized.replace(/_/g, "-");
	return withHyphens === "/" ? "/" : `${withHyphens}/`;
}

/**
 * Returns true if the pathname differs from the canonical form (needs redirect).
 */
export function pathNeedsRedirect(pathname: string): boolean {
	const canonical = canonicalPath(pathname);
	return pathname !== canonical;
}

/** Paths that are static assets (no trailing slash). */
const STATIC_EXT = /\.(xml|xsl|json|ico|png|svg|webmanifest|css|js|txt|webp)$/i;

/**
 * Returns the canonical path for internal links (trailing slash for pages).
 * Use with getRelativeLocaleUrl(locale, canonicalPagePath("/note")).
 */
export function canonicalPagePath(path: string): string {
	if (path === "/" || path.endsWith("/")) return path;
	if (STATIC_EXT.test(path)) return path;
	return `${path}/`;
}
