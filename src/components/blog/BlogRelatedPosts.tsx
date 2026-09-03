import type { BlogPost } from "@/types/blog";
import type { Lang } from "@/i18n/types";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

type BlogRelatedPostsProps = {
  posts: BlogPost[];
  lang: Lang;
  title: string;
  readLabel: string;
  readTimeLabel: (minutes: number) => string;
};

export function BlogRelatedPosts({
  posts,
  lang,
  title,
  readLabel,
  readTimeLabel,
}: BlogRelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-av-border pt-14" aria-labelledby="related-posts-heading">
      <h2
        id="related-posts-heading"
        className="text-xl font-semibold tracking-tight text-av-ink sm:text-2xl"
      >
        {title}
      </h2>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogPostCard
              post={post}
              lang={lang}
              readLabel={readLabel}
              readTimeLabel={readTimeLabel}
              compact
            />
          </li>
        ))}
      </ul>
    </section>
  );
}