import { useParams } from "react-router-dom";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { BlogProse } from "@/components/blog/BlogProse";
import { BlogArticleHero } from "@/components/blog/BlogArticleHero";
import { BlogPostFooterCta } from "@/components/blog/BlogPostFooterCta";
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
      <BlogArticleHero post={post} lang={lang} backLabel={copy.backToIndex} />

      <section className="section-padding bg-gradient-to-b from-brand-light/50 to-white">
        <Container className="max-w-3xl">
          <BlogProse html={post.html} />
          <BlogPostFooterCta
            title={copy.articleCta.title}
            subtitle={copy.articleCta.subtitle}
          />
        </Container>
      </section>
    </PageShell>
  );
}