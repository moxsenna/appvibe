/* AUTO-GENERATED — run scripts/build-blog.mjs after npm install for Shiki */
import type { BlogPost } from "@/types/blog";

export const blogPostsGenerated: BlogPost[] = [
  {
    "slug": "sprint-11-i18n-lessons",
    "lang": "id",
    "title": "Sprint 11: i18n ID/EN tanpa mengorbankan SEO",
    "description": "Pola URL prefix, dictionary hybrid, dan Localized<T> di data — apa yang kami pakai di AppVibe Studio.",
    "date": "2026-06-17",
    "tags": [
      "i18n",
      "react",
      "vite"
    ],
    "html": "<h2>Konteks</h2>\n<p>Situs agency kami default <strong>Bahasa Indonesia</strong>, dengan <strong>English</strong> di <code>/en/...</code>. Slug portfolio dan demo <strong>tidak diterjemahkan</strong>.</p>\n<h2>Pola data</h2>\n<pre class=\"blog-code-fallback\"><code>export type Localized&lt;T&gt; = { id: T; en: T };</code></pre>\n<p>UI chrome masuk <code>dict.pages.*</code>. Konten panjang di <code>src/data/*</code> dengan field <code>Localized</code>.</p>\n<h2>Pelajaran</h2>\n<ol>\n<li>Ubah data dan consumer dalam batch yang sama.</li>\n<li><code>typecheck</code> wajib di setiap milestone.</li>\n<li>Tier B demo butuh disiplin per niche.</li>\n</ol>"
  },
  {
    "slug": "sprint-11-i18n-lessons",
    "lang": "en",
    "title": "Sprint 11: ID/EN i18n without sacrificing SEO",
    "description": "URL prefix pattern, hybrid dictionaries, and Localized<T> in data — what we shipped at AppVibe Studio.",
    "date": "2026-06-17",
    "tags": [
      "i18n",
      "react",
      "vite"
    ],
    "html": "<h2>Context</h2>\n<p>Our agency site defaults to <strong>Indonesian</strong>, with <strong>English</strong> under <code>/en/...</code>. Portfolio and demo <strong>slugs stay canonical</strong>.</p>\n<h2>Data pattern</h2>\n<pre class=\"blog-code-fallback\"><code>export type Localized&lt;T&gt; = { id: T; en: T };</code></pre>\n<p>UI chrome lives in <code>dict.pages.*</code>. Long-form content stays in <code>src/data/*</code> with <code>Localized</code> fields.</p>\n<h2>Lessons</h2>\n<ol>\n<li>Change data and consumers in the same batch.</li>\n<li>Run <code>typecheck</code> at every major milestone.</li>\n<li>Tier B demo i18n needs discipline per niche.</li>\n</ol>"
  }
] as BlogPost[];
