import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import type { Lang } from "@/i18n/types";
import { routes } from "@/lib/routes";
import { blogIndexPathWithSearch } from "@/lib/blog-url";
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
    <header className="relative overflow-hidden border-b border-brand-border bg-brand-light/40">
      {hasCover && (
        <div className="absolute inset-0" aria-hidden>
          <img
            src={post.ogImage}
            alt=""
            className="h-full w-full object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-brand-light/95" />
        </div>
      )}

      <Container className="relative max-w-3xl py-10 sm:py-14 lg:py-16">
        <Link
          to={routes.blog(lang)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
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
                className="rounded-full border border-brand-blue/20 bg-brand-blue/5 px-3 py-1 text-xs font-semibold capitalize text-brand-blue transition-colors hover:bg-brand-blue/10"
              >
                {t}
              </Link>
            ))}
          </div>
        )}

        <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-brand-navy sm:text-4xl lg:text-[2.65rem]">
          {post.title}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-muted">
          {post.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-border/80 pt-6 text-sm font-medium text-brand-muted">
          <time dateTime={post.date} className="inline-flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card">
              <Calendar className="h-4 w-4 text-brand-blue" aria-hidden />
            </span>
            {formatDate(post.date, lang)}
          </time>
          <span className="inline-flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card">
              <Clock className="h-4 w-4 text-brand-blue" aria-hidden />
            </span>
            {readTimeLabel}
          </span>
          <span className="hidden h-4 w-px bg-brand-border sm:block" aria-hidden />
          <span>AppVibe Studio</span>
        </div>
      </Container>
    </header>
  );
}