# the5am.club

`#the5amclub` — a user group for early risers. **Wake up before the world does.**

Static site built with [Astro](https://astro.build) + MDX content collections, styled with Tailwind 4. Hosted on Netlify.

## Stack

- **Astro 5** — static output, zero-JS by default, islands for the theme toggle
- **Tailwind CSS 4** — utility-first styling via `@tailwindcss/vite`; design tokens live in `@theme` and bridge to CSS custom properties so light/dark/auto themes swap without `dark:` variants
- **MDX** — write posts as Markdown with embedded components
- **Content Collections** — typed frontmatter (Zod schema in `src/content.config.ts`)
- OS theme support (`prefers-color-scheme`) + manual toggle (auto / light / dark), persisted in `localStorage`
- RSS feed at `/rss.xml`, sitemap at `/sitemap-index.xml`
- **Netlify** for hosting; **GitHub Actions** for build verification on PRs

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

## Deploy

Pushed to `master`, Netlify builds with `npm run build` and serves `dist/`. PRs get preview deploys automatically. Config lives in [`netlify.toml`](./netlify.toml).

To wire it up:

1. Connect this repo on Netlify (no manual build settings needed — `netlify.toml` is authoritative).
2. Point the custom domain `the5am.club` at the Netlify site.

## Contribute

Open an [issue](https://github.com/avelino/the5am.club/issues) or PR. GitHub Actions runs the Astro build on every PR.

> You don't need permission. Just start.
