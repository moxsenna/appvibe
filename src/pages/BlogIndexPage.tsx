import { Link } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
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
      <section className="section-padding bg-white">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-brand-muted">{copy.empty}</p>
          ) : (
            <ul className="mx-auto flex max-w-3xl flex-col gap-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Card hover padding="lg">
                    <Link
                      to={routes.blogPost(lang, post.slug)}
                      className="block"
                    >
                      <time
                        dateTime={post.date}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted"
                      >
                        <Calendar className="h-3.5 w-3.5" aria-hidden />
                        {post.date}
                      </time>
                      <h2 className="mt-2 text-xl font-bold text-brand-navy">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1 rounded-full bg-brand-light px-2.5 py-0.5 text-xs text-brand-muted"
                            >
                              <Tag className="h-3 w-3" aria-hidden />
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </PageShell>
  );
}