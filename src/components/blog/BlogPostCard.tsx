import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/types/blog";
import type { Lang } from "@/i18n/types";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

type BlogPostCardProps = {
  post: BlogPost;
  lang: Lang;
  featured?: boolean;
  readLabel: string;
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

export function BlogPostCard({
  post,
  lang,
  featured = false,
  readLabel,
}: BlogPostCardProps) {
  const href = routes.blogPost(lang, post.slug);
  const hasOg = Boolean(post.ogImage);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-brand-blue/25 hover:shadow-card-hover",
        featured && "lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-0",
      )}
    >
      <Link
        to={href}
        className={cn(
          "block focus-visible:outline-none",
          featured ? "contents" : "flex flex-col",
        )}
        aria-label={post.title}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br from-brand-navy via-[#1E3A8A] to-brand-violet",
            featured ? "min-h-[220px] lg:min-h-full" : "aspect-[16/9]",
          )}
        >
          {hasOg ? (
            <img
              src={post.ogImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-hero-mesh opacity-90" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
          {post.tags[0] && (
            <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              {post.tags[0]}
            </span>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col p-6 sm:p-8", featured && "justify-center")}>
          <time
            dateTime={post.date}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted"
          >
            <Calendar className="h-3.5 w-3.5 text-brand-blue" aria-hidden />
            {formatDate(post.date, lang)}
          </time>

          <h2
            className={cn(
              "mt-3 font-bold tracking-tight text-brand-navy transition-colors group-hover:text-brand-blue",
              featured ? "text-2xl sm:text-3xl" : "text-xl",
            )}
          >
            {post.title}
          </h2>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">
            {post.description}
          </p>

          {post.tags.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(1).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-brand-light px-2.5 py-0.5 text-xs font-medium text-brand-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
            {readLabel}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </article>
  );
}