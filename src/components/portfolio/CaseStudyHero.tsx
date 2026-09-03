import { Link } from "react-router-dom";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import { ProjectStatus } from "@/components/home/work-ui";

type CaseStudyHeroProps = {
  item: PortfolioItem;
};

export function CaseStudyHero({ item }: CaseStudyHeroProps) {
  const { lang, dict } = useLang();

  return (
    <section className="border-b border-av-border">
      <Container className="pb-10 pt-12 sm:pt-16 lg:pb-14">
        <div className="max-w-3xl">
          <ProjectStatus slug={item.slug} lang={lang} />
          <h1
            className="mt-4 font-display text-display-lg font-normal tracking-tight text-av-ink"
            style={{ viewTransitionName: `portfolio-title-${item.slug}` }}
          >
            {pick(item.title, lang)}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-av-text sm:text-lg">
            {pick(item.summary, lang)}
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                {lang === "id" ? "Kategori" : "Category"}
              </dt>
              <dd className="mt-1 font-medium text-av-ink">
                {pick(item.categoryLabel, lang)}
              </dd>
            </div>
            <div className="max-w-[52ch]">
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                {lang === "id" ? "Cocok untuk" : "For"}
              </dt>
              <dd className="mt-1 text-av-secondary">
                {pick(item.niche, lang)}
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <Link
              to={routes.demoDetail(lang, item.slug)}
              className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-av-ink transition-colors hover:text-av-signal"
            >
              {dict.common.cta.openDemo} <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
        <div
          className="mt-10 overflow-hidden rounded-[4px] border border-av-border bg-av-surface"
          style={{ viewTransitionName: `portfolio-cover-${item.slug}` }}
        >
          <img
            src={item.thumbnail}
            alt={pick(item.title, lang)}
            loading="eager"
            decoding="async"
            className="aspect-[16/8] w-full object-cover object-top"
          />
        </div>
      </Container>
    </section>
  );
}
