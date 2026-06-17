import { useEffect, useMemo, useState } from "react";
import { BookOpen, SearchX } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogListToolbar } from "@/components/blog/BlogListToolbar";
import { useLang } from "@/i18n/use-lang";
import { dictionaries } from "@/i18n/dictionaries";
import {
  filterBlogPosts,
  getBlogPosts,
  getBlogTags,
} from "@/lib/blog";
import { formatBlogCount, formatReadTime } from "@/lib/blog-format";
import { routes } from "@/lib/routes";
import { applyPageMeta, getSiteUrl } from "@/lib/seo";
import { blogItemListJsonLd, clearPageJsonLd, setPageJsonLd } from "@/lib/json-ld";

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

export function BlogIndexPage() {
  const { lang } = useLang();
  const copy = dictionaries[lang].pages.blog;
  const allPosts = useMemo(() => getBlogPosts(lang), [lang]);
  const tags = useMemo(() => getBlogTags(lang), [lang]);

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(
    () => filterBlogPosts(allPosts, { query, tag: activeTag }),
    [allPosts, query, activeTag],
  );

  const showFeatured = !query.trim() && !activeTag && filtered.length > 0;
  const [featured, ...rest] = showFeatured ? filtered : [];
  const gridPosts = showFeatured ? rest : filtered;

  const readTimeLabel = (minutes: number) =>
    formatReadTime(copy.readTimeMinutes, minutes);

  useEffect(() => {
    applyPageMeta(
      {
        id: dictionaries.id.pages.blog.meta,
        en: dictionaries.en.pages.blog.meta,
        paths: { id: routes.blog("id"), en: routes.blog("en") },
      },
      lang,
    );

    const siteUrl = getSiteUrl();
    setPageJsonLd(
      blogItemListJsonLd({
        siteUrl,
        listPath: routes.blog(lang),
        name: `${copy.hero.title} | ${APP_NAME}`,
        items: allPosts.map((p) => ({
          path: routes.blogPost(lang, p.slug),
          name: p.title,
        })),
      }),
    );
    return () => clearPageJsonLd();
  }, [lang, copy.hero.title, allPosts]);

  return (
    <PageShell>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        description={copy.hero.description}
      />

      <section className="relative section-padding">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.35]" />

        <Container className="relative">
          {allPosts.length === 0 ? (
            <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-dashed border-brand-border bg-white/80 px-8 py-16 text-center">
              <BookOpen className="h-10 w-10 text-brand-blue/40" aria-hidden />
              <p className="mt-4 text-brand-muted">{copy.empty}</p>
            </div>
          ) : (
            <div className="mx-auto max-w-5xl">
              <BlogListToolbar
                query={query}
                onQueryChange={setQuery}
                activeTag={activeTag}
                onTagChange={setActiveTag}
                tags={tags}
                searchPlaceholder={copy.searchPlaceholder}
                filterAllLabel={copy.filterAllLabel}
                clearFiltersLabel={copy.clearFiltersLabel}
                resultsCount={filtered.length}
                resultsLabel={(n) => formatBlogCount(copy.resultsCount, n)}
              />

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center rounded-2xl border border-brand-border bg-white px-8 py-14 text-center">
                  <SearchX className="h-10 w-10 text-brand-muted/50" aria-hidden />
                  <p className="mt-4 max-w-sm text-brand-muted">{copy.noResults}</p>
                </div>
              ) : (
                <div className="space-y-10">
                  {featured && (
                    <BlogPostCard
                      post={featured}
                      lang={lang}
                      featured
                      readLabel={copy.readArticle}
                      readTimeLabel={readTimeLabel}
                    />
                  )}
                  {gridPosts.length > 0 && (
                    <ul className="grid gap-8 sm:grid-cols-2">
                      {gridPosts.map((post) => (
                        <li key={post.slug} className="min-h-0">
                          <BlogPostCard
                            post={post}
                            lang={lang}
                            readLabel={copy.readArticle}
                            readTimeLabel={readTimeLabel}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
        </Container>
      </section>
    </PageShell>
  );
}