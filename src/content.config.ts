import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/** Optional Open Graph overrides (per-note/jotting). When set, override defaults from title/description/graph.png. */
const openGraphSchema = z
	.object({
		title: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(), // Full URL or path from site root (e.g. /img/share.png)
		imageAlt: z.string().optional(),
		imageWidth: z.number().int().positive().optional(),
		imageHeight: z.number().int().positive().optional()
	})
	.optional();

/** Optional Twitter Card overrides. When set, override defaults (card, title, description, image). */
const twitterSchema = z
	.object({
		card: z.enum(["summary", "summary_large_image", "app", "player"]).optional(),
		title: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
		site: z.string().optional(), // e.g. @site
		creator: z.string().optional() // e.g. @author
	})
	.optional();

/**
 * Note collection configuration
 * Represents main blog articles with comprehensive metadata
 */
const note = defineCollection({
	// Load all markdown files except those starting with underscore (private/draft files)
	loader: glob({ pattern: ["**/*.md", "!**/_*.md", "!**/_*/*.md"], base: "./src/content/note" }),
	schema: z.object({
		title: z.string(), // Post title (required)
		timestamp: z.date(), // Publication date (required)
		series: z.string().optional(), // Series name for grouped posts
		tags: z.array(z.string()).optional(), // Array of topic tags
		description: z.string().optional(), // Post description/excerpt
		sensitive: z.boolean().default(false), // Marks content as sensitive
		toc: z.boolean().default(false), // Whether to show table of contents
		top: z.number().int().nonnegative().default(0), // Top priority for sorting (higher is more important)
		draft: z.boolean().default(false), // Draft status (excludes from public listing)
		openGraph: openGraphSchema,
		twitter: twitterSchema
	})
});

/**
 * Jotting collection configuration
 * Represents shorter posts, quick thoughts, or micro-blog entries
 */
const jotting = defineCollection({
	// Load all markdown files except those starting with underscore
	loader: glob({ pattern: ["**/*.md", "!**/_*.md", "!**/_*/*.md"], base: "./src/content/jotting" }),
	schema: z.object({
		title: z.string(), // Jotting title (required)
		timestamp: z.date(), // Publication date (required)
		tags: z.array(z.string()).optional(), // Array of topic tags
		description: z.string().optional(), // Brief description
		sensitive: z.boolean().default(false), // Marks content as sensitive
		top: z.number().int().nonnegative().default(0), // Top priority for sorting (higher is more important)
		draft: z.boolean().default(false), // Draft status
		openGraph: openGraphSchema,
		twitter: twitterSchema
	})
});

/**
 * Preface collection configuration
 * Represents introductory content, site announcements, or special pages
 */
const preface = defineCollection({
	// Load all markdown files
	loader: glob({ pattern: "**/*.md", base: "./src/content/preface" }),
	schema: z.object({
		timestamp: z.date() // Creation timestamp
	})
});

/**
 * Information collection configuration
 * Represents static content like about pages, policies, or site information
 */
const information = defineCollection({
	// Load both markdown and YAML files for mixed content types
	loader: glob({ pattern: "**/*.{md,mdx,yaml}", base: "./src/content/information" })
});

export const collections = { note, jotting, preface, information };
