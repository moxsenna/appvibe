import { Link } from "react-router-dom";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import { ProjectStatus } from "@/components/home/work-ui";

type CaseStudyHeroProps = {
  item: PortfolioItem;
};

export function CaseStudyHero({ item }: CaseStudyHeroProps) {
  const { lang, dict } = useLang();
  const demoPath = item.demoPath.startsWith("http")
    ? item.demoPath
    : routes.demoDetail(lang, item.slug);
  const hasExternalDemo = item.demoPath.startsWith("http");
  const hasDedicatedDemo = item.demoPath !== item.caseStudyPath;

  const facts = [
    {
      label: lang === "id" ? "Kategori" : "Category",
      value: pick(item.categoryLabel, lang),
    },
    {
      label: lang === "id" ? "Cocok untuk" : "For",
      value: pick(item.niche, lang),
    },
  ];

  return (
    <section className="border-b border-av-border">
      <Container className="pb-10 pt-12 sm:pt-16 lg:pb-14">
        <div className="anim-rise ad-1">
          <ProjectStatus slug={item.slug} lang={lang} />
        </div>
        <h1
          className="mt-4 max-w-[20ch] font-display text-display-lg font-normal tracking-tight text-av-ink anim-rise ad-2"
          style={{ viewTransitionName: `portfolio-title-${item.slug}` }}
        >
          {pick(item.title, lang)}
        </h1>
        <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-av-text sm:text-xl anim-rise ad-3">
          {pick(item.summary, lang)}
        </p>

        <dl className="mt-8 grid gap-px overflow-hidden rounded border border-av-border bg-av-border sm:grid-cols-3 anim-rise ad-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-av-canvas px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium leading-relaxed text-av-ink">
                {fact.value}
              </dd>
            </div>
          ))}
          {hasDedicatedDemo ? (
            <div className="bg-av-ink px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-dark-muted">
                Live demo
              </dt>
              <dd className="mt-1.5">
                {hasExternalDemo ? (
                  <a
                    href={demoPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("demo_open", {
                        slug: item.slug,
                        location: "case_study_hero",
                        deferred: false,
                      })
                    }
                    className="text-sm font-medium text-white underline decoration-av-signal-on-dark decoration-2 underline-offset-4 transition-colors hover:text-av-signal-on-dark"
                  >
                    {dict.common.cta.openDemo} <span aria-hidden>↗</span>
                  </a>
                ) : (
                  <Link
                    to={demoPath}
                    onClick={() =>
                      trackEvent("demo_open", {
                        slug: item.slug,
                        location: "case_study_hero",
                        deferred: false,
                      })
                    }
                    className="text-sm font-medium text-white underline decoration-av-signal-on-dark decoration-2 underline-offset-4 transition-colors hover:text-av-signal-on-dark"
                  >
                    {dict.common.cta.openDemo} <span aria-hidden>↗</span>
                  </Link>
                )}
              </dd>
            </div>
          ) : (
            <div className="bg-av-canvas px-5 py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                {lang === "id" ? "Format" : "Format"}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-av-ink">
                {lang === "id" ? "Studi Kasus Lengkap" : "Full Case Study"}
              </dd>
            </div>
          )}
        </dl>

        <figure
          className="mt-10 overflow-hidden rounded-[4px] border border-av-border bg-av-surface anim-scale-in ad-5"
          style={{ viewTransitionName: `portfolio-cover-${item.slug}` }}
        >
          <img
            src={item.thumbnail}
            alt={pick(item.title, lang)}
            loading="eager"
            decoding="async"
            className="aspect-[16/8] w-full object-cover object-top"
          />
          <figcaption className="border-t border-av-border-soft px-4 py-3 text-xs leading-relaxed text-av-muted">
            {pick(item.niche, lang)}
          </figcaption>
        </figure>

        {hasDedicatedDemo && (
          <div className="mt-8 anim-rise ad-6">
            <Button
              href={demoPath}
              viewTransition={!hasExternalDemo}
              size="lg"
              onClick={() =>
                trackEvent("demo_open", {
                  slug: item.slug,
                  location: "case_study_hero_button",
                  deferred: false,
                })
              }
            >
              {dict.common.cta.openDemo} <span aria-hidden>↗</span>
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
