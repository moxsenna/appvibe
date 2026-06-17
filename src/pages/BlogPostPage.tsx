import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { BlogProse } from "@/components/blog/BlogProse";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useLang } from "@/i18n/use-lang";
import { getBlogPost } from "@/lib/blog";
import { routes } from "@/lib/routes";
import { applyPageMeta, getSiteUrl } from "@/lib/seo";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  clearPageJsonLd,
  setPageJsonLd,
} from "@/lib/json-ld";
import { HTML_LANG } from "@/i18n/types";
import { useEffect } from "react";

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, dict } = useLang();
  const copy = dict.pages.blog;
  const post = slug ? getBlogPost(lang, slug) : undefined;

  useEffect(() => {
    if (!post) {
      clearPageJsonLd();
      return;
    }

    const idPost = getBlogPost("id", post.slug);
    const enPost = getBlogPost("en", post.slug);

    applyPageMeta(
      {
        id: {
          title: idPost?.title ?? post.title,
          description: idPost?.description ?? post.description,
        },
        en: {
          title: enPost?.title ?? post.title,
          description: enPost?.description ?? post.description,
        },
        paths: {
          id: routes.blogPost("id", post.slug),
          en: routes.blogPost("en", post.slug),
        },
        ogImage: post.ogImage,
        ogType: "article",
        article: {
          publishedTime: post.date,
          author: APP_NAME,
          tags: post.tags,
        },
      },
      lang,
    );

    const siteUrl = getSiteUrl();
    const path = routes.blogPost(lang, post.slug);
    setPageJsonLd([
      articleJsonLd({
        siteUrl,
        path,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        inLanguage: HTML_LANG[lang],
        authorName: APP_NAME,
      }),
      breadcrumbJsonLd(siteUrl, [
        { name: copy.hero.title, path: routes.blog(lang) },
        { name: post.title, path },
      ]),
    ]);

    return () => clearPageJsonLd();
  }, [post, lang, copy.hero.title]);

  if (!post) return <NotFoundPage />;

  return (
    <PageShell>
      <section className="border-b border-brand-border bg-brand-light/50 py-10 sm:py-14">
        <Container className="max-w-3xl">
          <Link
            to={routes.blog(lang)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {copy.backToIndex}
          </Link>
          <time
            dateTime={post.date}
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted"
          >
            <Calendar className="h-3.5 w-3.5" aria-hidden />
            {post.date}
          </time>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-brand-muted">{post.description}</p>
        </Container>
      </section>
      <section className="section-padding bg-white">
        <Container className="max-w-3xl">
          <BlogProse html={post.html} />
        </Container>
      </section>
    </PageShell>
  );
}