# the5am.club

`#the5amclub` — a user group for early risers. **Wake up before the world does.**

Static site built with [Astro](https://astro.build) + MDX content collections.

## Stack

- **Astro 5** — static output, zero-JS by default, islands for the theme toggle
- **MDX** — write posts as Markdown with embedded components
- **Content Collections** — typed frontmatter (Zod schema in `src/content.config.ts`)
- Hand-rolled CSS with design tokens (CSS custom properties)
- OS theme support (`prefers-color-scheme`) + manual toggle (auto / light / dark), persisted in `localStorage`
- RSS feed at `/rss.xml`, sitemap at `/sitemap-index.xml`

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Write a post

Drop a new `.mdx` file in `src/content/posts/`:

```mdx
---
title: "Your title"
description: "A one-line summary."
pubDate: 2026-05-14
tags: [mornings, discipline]
draft: false
---

Your content in **Markdown** or MDX.
```

The filename becomes the URL slug — `src/content/posts/hello.mdx` → `/posts/hello`.

## Contribute

Open an [issue](https://github.com/avelino/the5am.club/issues) or PR.

> You don't need permission. Just start.
