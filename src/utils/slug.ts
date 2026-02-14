/**
 * Converts a tag string to a URL-safe slug (ASCII-only, lowercase, hyphens).
 * Used for tag page URLs so links work reliably without encoding issues.
 * Multiple tags can map to the same slug (e.g. "Haïku" and "Haiku" → "haiku");
 * the tag page will then show content for any tag with that slug.
 */
export function tagSlug(tag: string): string {
	return tag
		.trim()
		.toLowerCase()
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "") || "tag";
}
