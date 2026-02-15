/**
 * Unique editorial introductions per tag (by URL slug).
 * Each value is 2–4 sentences of copy shown above the tag's content list.
 * Add or edit entries here to improve tag pages for SEO and readability.
 */
const intros: Record<string, string> = {
	haiku:
		"Les textes regroupés sous ce tag sont des haïkus : poèmes brefs en trois vers, souvent inspirés de la nature ou d’un instant. Ils visent la concision et l’évocation plutôt que l’explication.",
	"micro-nouvelle":
		"Les micro-nouvelles sont des récits très courts, en quelques lignes ou paragraphes. Chacune forme un tout et laisse une part à l’implicite et à la relecture.",
	fiction:
		"Cette page rassemble des textes de fiction : récits inventés, personnages et situations imaginaires. Formats et tons varient, du réaliste au plus libre.",
	"recit-de-voyage":
		"Ici sont regroupés les récits de voyage : impressions, scènes et rencontres notées en chemin. Ils mêlent souvent observation et subjectivité du déplacement.",
	peripetie:
		"Les textes tagués « Péripétie » mettent en avant un rebondissement, un événement ou un basculement au cœur du récit, qu’il soit bref ou plus développé.",
};

/**
 * Returns the unique intro paragraph for a tag slug, or undefined if none is defined.
 */
export function getTagIntro(slug: string): string | undefined {
	return intros[slug];
}
