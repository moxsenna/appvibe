import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import type { Lang } from "@/i18n/types";
import { routes } from "@/lib/routes";
import { blogIndexPathWithSearch } from "@/lib/blog-url";
import { formatTagLabel } from "@/lib/blog-tags";
import { Container } from "@/components/ui/Container";

type BlogArticleHeroProps = {
  post: BlogPost;
  lang: Lang;
  backLabel: string;
  readTimeLabel: string;
};

function formatDate(date: string, lang: Lang): string {
  try {
    return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export function BlogArticleHero({
  post,
  lang,
  backLabel,
  readTimeLabel,
}: BlogArticleHeroProps) {
  const hasCover = Boolean(post.ogImage);

  return (
    <header className="border-b border-av-border">
      <Container className="max-w-3xl py-10 sm:py-14 lg:py-16">
        <Link
          to={routes.blog(lang)}
          className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-av-secondary transition-colors hover:text-av-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {backLabel}
        </Link>

        {post.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Link
                key={t}
                to={blogIndexPathWithSearch(lang, t, 1)}
                className="rounded-[3px] border border-av-border bg-av-surface px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-av-secondary transition-colors hover:border-av-ink hover:text-av-ink"
              >
                {formatTagLabel(t)}
              </Link>
            ))}
          </div>
        )}

        <h1 className="mt-5 font-display text-display-md font-normal leading-[1.12] tracking-tight text-av-ink">
          {post.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-av-secondary">
          {post.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-av-border pt-6 text-sm font-medium text-av-secondary">
          <time dateTime={post.date} className="inline-flex items-center gap-2">
            <Calendar className="h-4 w-4 text-av-signal" aria-hidden />
            {formatDate(post.date, lang)}
          </time>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-av-signal" aria-hidden />
            {readTimeLabel}
          </span>
          <span className="hidden h-4 w-px bg-av-border sm:block" aria-hidden />
          <span>AppVibe Studio</span>
        </div>

        {hasCover && (
          <div className="mt-8 overflow-hidden rounded border border-av-border">
            <img
              src={post.ogImage}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        )}
      </Container>
    </header>
  );
}