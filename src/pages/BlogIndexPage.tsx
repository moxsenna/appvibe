import { useCallback, useEffect, useMemo, useState } from "react";
import { BookOpen, SearchX } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogListToolbar } from "@/components/blog/BlogListToolbar";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { useLang } from "@/i18n/use-lang";
import { dictionaries } from "@/i18n/dictionaries";
import {
  filterBlogPosts,
  getBlogPosts,
  getBlogTags,
} from "@/lib/blog";
import {
  blogIndexShowFeatured,
  paginateBlogPosts,
  shouldPaginateBlogList,
  splitFeaturedAndGrid,
} from "@/lib/blog-pagination";
import {
  blogIndexPathWithSearch,
  buildBlogIndexSearchParams,
  parseBlogIndexSearch,
} from "@/lib/blog-url";
import { formatBlogCount, formatReadTime } from "@/lib/blog-format";
import { routes } from "@/lib/routes";
import { applyPageMeta, getSiteUrl } from "@/lib/seo";
import { blogItemListJsonLd, clearPageJsonLd, setPageJsonLd } from "@/lib/json-ld";

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

function formatPaginationPage(
  template: string,
  current: number,
  total: number,
): string {
  return template
    .replace(/\{current\}/g, String(current))
    .replace(/\{total\}/g, String(total));
}

export function BlogIndexPage() {
  const { lang } = useLang();
  const copy = dictionaries[lang].pages.blog;
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const allPosts = useMemo(() => getBlogPosts(lang), [lang]);
  const tags = useMemo(() => getBlogTags(lang), [lang]);

  const { tag: activeTag, page: urlPage } = useMemo(
    () => parseBlogIndexSearch(searchParams, tags),
    [searchParams, tags],
  );

  const filtered = useMemo(
    () => filterBlogPosts(allPosts, { query, tag: activeTag }),
    [allPosts, query, activeTag],
  );

  const usePagination = shouldPaginateBlogList(filtered.length);
  const { page, totalPages, slice: pageSlice } = paginateBlogPosts(
    filtered,
    usePagination ? urlPage : 1,
  );

  useEffect(() => {
    if (!usePagination || page === urlPage) return;
    setSearchParams(buildBlogIndexSearchParams(activeTag, page), {
      replace: true,
    });
  }, [usePagination, page, urlPage, activeTag, setSearchParams]);

  const showFeatured = blogIndexShowFeatured(
    query,
    activeTag,
    page,
    filtered.length,
  );
  const { featured, gridPosts } = splitFeaturedAndGrid(pageSlice, showFeatured);

  const readTimeLabel = (minutes: number) =>
    formatReadTime(copy.readTimeMinutes, minutes);

  const syncTagToUrl = useCallback(
    (tag: string | null) => {
      setSearchParams(buildBlogIndexSearchParams(tag, 1), { replace: false });
    },
    [setSearchParams],
  );

  const clearFilters = useCallback(() => {
    setQuery("");
    setSearchParams(new URLSearchParams(), { replace: false });
  }, [setSearchParams]);

  const listPath = blogIndexPathWithSearch(lang, activeTag, page);

  useEffect(() => {
    const idBase = dictionaries.id.pages.blog.meta;
    const enBase = dictionaries.en.pages.blog.meta;

    applyPageMeta(
      {
        id: {
          title:
            activeTag || page > 1
              ? `${idBase.title}${activeTag ? ` — ${activeTag}` : ""}${page > 1 ? ` — hal. ${page}` : ""}`
              : idBase.title,
          description: activeTag
            ? `Artikel bertopik «${activeTag}» — ${APP_NAME}.`
            : idBase.description,
        },
        en: {
          title:
            activeTag || page > 1
              ? `${enBase.title}${activeTag ? ` — ${activeTag}` : ""}${page > 1 ? ` — p. ${page}` : ""}`
              : enBase.title,
          description: activeTag
            ? `Articles tagged «${activeTag}» — ${APP_NAME}.`
            : enBase.description,
        },
        paths: { id: routes.blog("id"), en: routes.blog("en") },
        canonicalPath: listPath,
      },
      lang,
    );

    const siteUrl = getSiteUrl();
    setPageJsonLd(
      blogItemListJsonLd({
        siteUrl,
        listPath,
        name: `${copy.hero.title} | ${APP_NAME}`,
        items: pageSlice.map((p) => ({
          path: routes.blogPost(lang, p.slug),
          name: p.title,
        })),
      }),
    );
    return () => clearPageJsonLd();
  }, [lang, copy.hero.title, activeTag, page, pageSlice, listPath]);

  const feedPath = lang === "en" ? "/feed/blog-en.xml" : "/feed/blog-id.xml";

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
              <div className="mb-6 flex justify-end">
                <a
                  href={feedPath}
                  className="text-sm font-semibold text-brand-blue hover:underline"
                >
                  {copy.rssLinkLabel}
                </a>
              </div>

              <BlogListToolbar
                query={query}
                onQueryChange={setQuery}
                activeTag={activeTag}
                onTagChange={syncTagToUrl}
                onClearFilters={clearFilters}
                tags={tags}
                lang={lang}
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

                  {usePagination && (
                    <BlogPagination
                      lang={lang}
                      page={page}
                      totalPages={totalPages}
                      activeTag={activeTag}
                      prevLabel={copy.paginationPrev}
                      nextLabel={copy.paginationNext}
                      pageLabel={(c, t) =>
                        formatPaginationPage(copy.paginationPage, c, t)
                      }
                    />
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