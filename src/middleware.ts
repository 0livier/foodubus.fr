import { defineMiddleware } from "astro:middleware";
import { pathNeedsRedirect, canonicalPath } from "$utils/canonical-url";

export const onRequest = defineMiddleware((context, next) => {
	const pathname = context.url.pathname;
	if (pathNeedsRedirect(pathname)) {
		const destination = canonicalPath(pathname);
		return context.redirect(destination, 301);
	}
	return next();
});
