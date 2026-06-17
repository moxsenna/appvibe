import type { Lang } from "@/i18n/types";
import type { BlogPost } from "@/types/blog";
import { blogPostsGenerated } from "@/data/blog/posts.generated";

export function getBlogPosts(lang: Lang): BlogPost[] {
  return blogPostsGenerated.filter((p) => p.lang === lang);
}

export function getBlogPost(lang: Lang, slug: string): BlogPost | undefined {
  return blogPostsGenerated.find((p) => p.lang === lang && p.slug === slug);
}