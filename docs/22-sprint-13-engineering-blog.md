# Sprint 13 — Engineering blog

## Scope

- Routes: `/blog`, `/blog/:slug` (ID) · `/en/blog`, `/en/blog/:slug` (EN)
- Content: `content/blog/{id,en}/*.mdx` with YAML frontmatter
- Build: `node scripts/build-blog.mjs` → `src/data/blog/posts.generated.ts`
- Highlighting: **Shiki** at build time (fallback plain `<pre>` if Shiki missing)

## Add a post

1. Create `content/blog/id/my-post.mdx` and/or `content/blog/en/my-post.mdx`
2. Frontmatter: `title`, `description`, `date`, `tags`, `lang`
3. Run `npm run build` (runs `prebuild` → blog compile)

## Sprint 12

Better Auth deferred — see `docs/deferred-items.md`.