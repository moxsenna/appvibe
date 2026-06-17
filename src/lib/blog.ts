import type { Lang } from "@/i18n/types";
import type { BlogPost, BlogListFilters } from "@/types/blog";
import { blogPostsGenerated } from "@/data/blog/posts.generated";

export function getBlogPosts(lang: Lang): BlogPost[] {
  return blogPostsGenerated
    .filter((p) => p.lang === lang)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(lang: Lang, slug: string): BlogPost | undefined {
  return blogPostsGenerated.find((p) => p.lang === lang && p.slug === slug);
}

export function getBlogTags(lang: Lang): string[] {
  const set = new Set<string>();
  for (const p of getBlogPosts(lang)) {
    for (const t of p.tags) set.add(t);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFKD");
}

export function filterBlogPosts(
  posts: BlogPost[],
  { query, tag }: BlogListFilters,
): BlogPost[] {
  const q = normalize(query.trim());
  return posts.filter((p) => {
    if (tag && !p.tags.includes(tag)) return false;
    if (!q) return true;
    const haystack = normalize(
      [p.title, p.description, ...p.tags].join(" "),
    );
    return haystack.includes(q);
  });
}

export function getRelatedPosts(
  post: BlogPost,
  limit = 3,
): BlogPost[] {
  const candidates = getBlogPosts(post.lang).filter((p) => p.slug !== post.slug);
  const scored = candidates.map((p) => {
    const shared = p.tags.filter((t) => post.tags.includes(t)).length;
    return { p, score: shared };
  });
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.p.date < b.p.date ? 1 : -1;
  });
  const picked = scored.filter((s) => s.score > 0).map((s) => s.p);
  if (picked.length >= limit) return picked.slice(0, limit);
  const fallback = candidates.filter((p) => !picked.includes(p));
  return [...picked, ...fallback].slice(0, limit);
}