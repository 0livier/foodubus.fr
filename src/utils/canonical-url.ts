/**
 * Canonical URL policy: hyphens in slugs, no trailing slash.
 * Use for redirect targets and for <link rel="canonical"> / og:url.
 */
export function canonicalPath(pathname: string): string {
	const withoutTrailingSlash = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
	return withoutTrailingSlash.replace(/_/g, "-");
}

/**
 * Returns true if the pathname differs from the canonical form (needs redirect).
 */
export function pathNeedsRedirect(pathname: string): boolean {
	const canonical = canonicalPath(pathname);
	return pathname !== canonical;
}
