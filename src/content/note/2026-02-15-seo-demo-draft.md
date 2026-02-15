---
title: Démo SEO (brouillon)
timestamp: 2026-02-15 12:00:00+01:00
series: Démonstrations
tags: [SEO, Astro, Référencement, Open Graph, JSON-LD]
description: "Note de démonstration (brouillon) utilisant tous les champs SEO : titre, description, canonical, Open Graph, Twitter Card, tags, série et métadonnées structurées."
toc: true
top: 0
sensitive: false
draft: true

# Overrides optionnels pour les partages sociaux (sinon dérivés de title, description, graph.png)
openGraph:
  title: "Démo SEO – Open Graph personnalisé"
  description: "Texte spécifique pour l’aperçu Open Graph (réseaux sociaux, messageries)."
  image: "https://example.com/images/demo-seo-1200x630.jpg"   # URL de l’illustration de partage (ou chemin : /img/demo-seo.jpg)
  imageAlt: "Aperçu de la note Démo SEO"
  imageWidth: 1200
  imageHeight: 630
twitter:
  card: summary_large_image
  title: "Démo SEO – Twitter Card personnalisée"
  description: "Texte spécifique pour l’aperçu Twitter."
  image: "https://example.com/images/demo-seo-1200x630.jpg"   # optionnel ; si absent, même image que Open Graph
  imageAlt: "Image de partage Twitter pour la démo SEO"
  # site: "@votresite"
  # creator: "@auteur"
---

Cette note est un **brouillon** et n’apparaît pas dans les listes ni dans le sitemap. Elle sert à vérifier que tous les champs du frontmatter sont bien pris en compte par astro-seo et le layout.

## Champs utilisés

- **title** : titre de la page (onglet, résultats de recherche, og:title)
- **description** : meta description et og:description (120–160 caractères recommandés)
- **timestamp** : date de publication (JSON-LD, og:article:published_time)
- **series** : section (og:article:section, image de partage)
- **tags** : mots-clés (og:article:tag, JSON-LD, pages de tag)
- **draft: true** : exclut la note des chemins statiques et des listes
- **openGraph** : surcharge optionnelle (title, description, image, imageAlt, imageWidth, imageHeight)
- **twitter** : surcharge optionnelle (card, title, description, image, imageAlt, site, creator)

En passant `draft: false`, la note serait publiée avec toutes ces métadonnées SEO.

---

## Exemple complet (frontmatter)

Exemple avec **tous** les champs optionnels Open Graph et Twitter remplis. On peut n’en mettre qu’une partie ; les autres sont déduits du `title`, de la `description` et de l’image générée `graph.png`.

```yaml
---
title: Mon article
timestamp: 2026-02-15 14:00:00+01:00
series: Ma série
tags: [Tag1, Tag2]
description: "Résumé court de l’article pour Google et les partages (120–160 caractères)."
draft: false

# Open Graph (Facebook, LinkedIn, WhatsApp, etc.) – tous les champs sont optionnels
openGraph:
  title: "Titre affiché dans l’aperçu du lien (réseaux sociaux)"
  description: "Description courte pour l’aperçu partagé."
  image: "https://example.com/images/partage-1200x630.jpg"   # URL absolue, ou chemin depuis la racine du site : /img/partage.jpg
  imageAlt: "Description de l’image pour l’accessibilité (og:image:alt)."
  imageWidth: 1200
  imageHeight: 630

# Twitter Card – tous les champs sont optionnels
twitter:
  card: summary_large_image   # Type de carte : "summary" | "summary_large_image" | "app" | "player" (pas une URL)
  title: "Titre pour l’aperçu Twitter."
  description: "Description pour l’aperçu Twitter."
  image: "https://example.com/images/partage-twitter.jpg"     # Optionnel ; si absent, même image que Open Graph
  imageAlt: "Description de l’image pour Twitter."
  site: "@compte_site"        # Compte Twitter du site (optionnel)
  creator: "@auteur_article"  # Compte Twitter de l’auteur (optionnel)
---
```

- **`twitter.card`** : toujours l’un des quatre types (`summary`, `summary_large_image`, `app`, `player`), jamais une URL. L’URL de l’image se met dans `twitter.image`.
- **`openGraph.image`** / **`twitter.image`** : URL complète (`https://…`) ou chemin depuis la racine du site (ex. `/img/partage.jpg`), qui sera préfixé par l’URL du site.

## Prompt to use the illustrations

You are creating a bold graphic comic-style illustration for a minimalist literature website.

Goal:
- Read the text below.
- Derive a single clear visual concept from it:
  - Scene: one moment, one action (no montage)
  - Setting: one simple place element (minimal)
  - Symbol: one strong object or motif that represents the text. Prefer elements that are explicitely written within the text
- Then produce ONE illustration matching the style rules.

Style rules (strict):
- graphic comic drawing, clean ink linework, high contrast
- minimal shapes, strong silhouettes, slightly imperfect hand-drawn feel
- no gradients, no painterly textures, no 3D render, no photorealism
- no text, no letters, no logos, no watermark, no signature

Color palette (strict):
- black background
- black lines and flat fills
- neon fluorescent yellow accents only (#FFF200 or close)
- use yellow sparingly as highlight (max ~10-15% of the image)
- You can use comics like shading to create depth and contrast

Composition:
- centered subject with generous negative space
- clear focal point, readable at small sizes
- avoid tiny details; prefer 1-3 main elements
- modern editorial poster layout

Output:
- Format: 1080x1080
- crisp edges, print-like sharpness

Process (must follow):
1) Identify Scene / Setting / Symbol from the text.
2) Choose the simplest possible combination that still feels true to the text.
3) If the text is abstract, invent a metaphorical scene that matches the mood.
4) Generate the final illustration.

Text to interpret :
