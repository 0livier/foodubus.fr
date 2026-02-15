# SEO – Guide et bonnes pratiques

Ce document décrit comment le site gère le référencement et les bonnes pratiques à suivre lors de la publication d’une nouvelle **note** (ou d’un **jotting**).

---

## Ce que le site fait automatiquement

- **Balises SEO** : titre, meta description, canonical, Open Graph et Twitter Card sont générés via [astro-seo](https://github.com/jonasmerlin/astro-seo) à partir de la config du site et du frontmatter de chaque note.
- **JSON-LD** : le site expose un schéma **WebSite** sur toutes les pages et un schéma **BlogPosting** sur chaque page de note/jotting (titre, description, date, auteur, image) pour les résultats enrichis (Google, etc.).
- **Sitemap** : un plan du site est généré (`/sitemap-index.xml`).
- **Image sociale** : une image de partage (og:image) est générée par note (`/note/[slug]/graph.png`) à partir du titre, de la série et des tags.

Les champs du frontmatter (titre, description, tags, série, date) alimentent directement ces métadonnées. Bien les remplir améliore le référencement et l’affichage des liens sur les réseaux et dans les moteurs de recherche.

---

## Bonnes pratiques lors de la publication d’une note

### 1. **`title`** (obligatoire)

- Court, clair et unique par note.
- Éviter les titres génériques (« Nouvelle », « Post »). Préférer un titre qui décrit le contenu (« Le Bonnet », « Rose »).
- Le titre apparaît dans l’onglet du navigateur, les résultats de recherche et le partage social (og:title, Twitter).

### 2. **`description`** (fortement recommandé)

- Une ou deux phrases qui résument la note (idéalement 120–160 caractères pour Google).
- Utilisée comme meta description et pour og:description / Twitter. Sans `description`, la meta description du site (config globale) est utilisée, ce qui est moins pertinent pour une note précise.
- Ton neutre et informatif, sans sur-optimisation de mots-clés.

Exemple :

```yaml
description: "La découverte inattendue d'un bonnet d'enfant sème le trouble dans un groupe d'amis."
```

### 3. **`timestamp`** (obligatoire)

- Date (et heure) de publication au format ISO (ex. `2026-02-03 10:47:21+01:00`).
- Utilisée pour le tri, les flux RSS, le JSON-LD (datePublished) et les balises article (og:article:published_time). Une date cohérente et réaliste aide le référencement et la fraîcheur du contenu.

### 4. **`tags`** (recommandé)

- Liste de mots-clés ou de thèmes (ex. `[Haïku]`, `[Micro-nouvelle, Fiction]`).
- Utilisés dans le JSON-LD (article:tag), les balises Open Graph (article:tag), les pages de tag du site et l’image de partage.
- Rester cohérent : réutiliser les mêmes libellés pour un même thème (éviter « Haïku » et « haiku »).

### 5. **`series`** (optionnel)

- Nom de la série si la note fait partie d’un ensemble.
- Utilisé dans le JSON-LD (article:section), les balises og:article:section et l’image de partage. Utile pour structurer le contenu et le référencement par thème.

### 6. **`draft`**

- À `true`, la note n’est pas listée ni publiée (donc pas indexée). La mettre à `false` (ou l’omettre) uniquement quand la note est prête à être publique.

### 7. Fichiers et URLs

- Les notes sont servies sous `/note/[slug]`. Le slug dérive du chemin du fichier (ex. `src/content/note/2026-02-03-rose.md` → `/note/2026-02-03-rose`). Un slug lisible et stable est préférable pour le référencement et le partage.

---

## Exemple de frontmatter complet

```yaml
---
title: Le Bonnet
timestamp: 2025-12-15 00:01:23+01:01
series: Nouvelles
tags: [Micro-nouvelle, Fiction]
description: "La découverte inattendue d'un bonnet d'enfant sème le trouble dans un groupe d'amis."
toc: false
top: 0
draft: false
---
```

---

## Checklist avant publication

- [ ] `title` : clair et unique
- [ ] `description` : 1–2 phrases, 120–160 caractères si possible
- [ ] `timestamp` : date/heure de publication correcte
- [ ] `tags` : cohérents avec le reste du site
- [ ] `draft: false` (ou champ absent) pour rendre la note publique
- [ ] Relire le texte (qualité du contenu reste le principal facteur pour le SEO)

---

## Configuration globale (site)

Le titre du site, la description par défaut et l’auteur sont définis dans `site.config.ts`. Ils servent de fallback (meta description, og:site_name, auteur dans le JSON-LD) quand une note ne fournit pas toutes les informations.
