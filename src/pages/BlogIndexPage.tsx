import { BookOpen } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { useLang } from "@/i18n/use-lang";
import { dictionaries } from "@/i18n/dictionaries";
import { getBlogPosts } from "@/lib/blog";
import { routes } from "@/lib/routes";
import { applyPageMeta } from "@/lib/seo";
import { useEffect } from "react";

export function BlogIndexPage() {
  const { lang } = useLang();
  const copy = dictionaries[lang].pages.blog;
  const posts = getBlogPosts(lang);
  const [featured, ...rest] = posts;

  useEffect(() => {
    applyPageMeta(
      {
        id: dictionaries.id.pages.blog.meta,
        en: dictionaries.en.pages.blog.meta,
        paths: { id: routes.blog("id"), en: routes.blog("en") },
      },
      lang,
    );
  }, [lang]);

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
          {posts.length === 0 ? (
            <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-dashed border-brand-border bg-white/80 px-8 py-16 text-center">
              <BookOpen className="h-10 w-10 text-brand-blue/40" aria-hidden />
              <p className="mt-4 text-brand-muted">{copy.empty}</p>
            </div>
          ) : (
            <div className="mx-auto max-w-4xl space-y-10">
              {featured && (
                <BlogPostCard
                  post={featured}
                  lang={lang}
                  featured
                  readLabel={copy.readArticle}
                />
              )}
              {rest.length > 0 && (
                <ul className="grid gap-8 sm:grid-cols-2">
                  {rest.map((post) => (
                    <li key={post.slug} className="sm:col-span-2">
                      <BlogPostCard
                        post={post}
                        lang={lang}
                        readLabel={copy.readArticle}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </Container>
      </section>
    </PageShell>
  );
}