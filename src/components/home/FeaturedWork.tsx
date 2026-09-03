import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { homeWorkHeader } from "@/data/home";
import { pick } from "@/i18n/localized";
import { ProjectStatus, ProjectVisual, WorkLinks } from "@/components/home/work-ui";

function bySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug);
}

export function FeaturedWork() {
  const { lang, dict } = useLang();
  const featured = bySlug("company-profile");
  const rows = [bySlug("klinik"), bySlug("properti")].filter(Boolean);
  const secondary = [bySlug("webinar-landing"), bySlug("lead-dashboard")].filter(
    Boolean,
  );

  if (!featured) return null;

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">{pick(homeWorkHeader.eyebrow, lang)}</p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {pick(homeWorkHeader.title, lang)}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
            {pick(homeWorkHeader.desc, lang)}
          </p>
        </div>

        <article className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <ProjectVisual
              src={featured.thumbnail}
              alt={pick(featured.title, lang)}
              eager
            />
          </div>
          <div className="lg:col-span-5">
            <ProjectStatus slug={featured.slug} lang={lang} />
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink">
              {pick(featured.title, lang)}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-av-text">
              {pick(featured.summary, lang)}
            </p>
            <div className="mt-5">
              <WorkLinks
                caseStudyPath={routes.portfolioDetail(lang, featured.slug)}
                demoPath={routes.demoDetail(lang, featured.slug)}
                caseLabel={dict.common.cta.viewCaseStudy}
                demoLabel={dict.common.cta.openDemo}
              />
            </div>
          </div>
        </article>

        <div className="mt-12 space-y-10">
          {rows.map((item) =>
            item ? (
              <article
                key={item.id}
                className="grid gap-6 border-t border-av-border pt-10 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-5">
                  <ProjectVisual
                    src={item.thumbnail}
                    alt={pick(item.title, lang)}
                    aspect="aspect-[4/3]"
                  />
                </div>
                <div className="md:col-span-7">
                  <ProjectStatus slug={item.slug} lang={lang} />
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-av-ink">
                    {pick(item.title, lang)}
                  </h3>
                  <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-av-text">
                    {pick(item.summary, lang)}
                  </p>
                  <div className="mt-4">
                    <WorkLinks
                      caseStudyPath={routes.portfolioDetail(lang, item.slug)}
                      demoPath={routes.demoDetail(lang, item.slug)}
                      caseLabel={dict.common.cta.viewCaseStudy}
                      demoLabel={dict.common.cta.openDemo}
                    />
                  </div>
                </div>
              </article>
            ) : null,
          )}
        </div>

        <div className="mt-12 grid gap-6 border-t border-av-border pt-10 sm:grid-cols-2">
          {secondary.map((item) =>
            item ? (
              <article key={item.id}>
                <ProjectVisual
                  src={item.thumbnail}
                  alt={pick(item.title, lang)}
                  aspect="aspect-[16/9]"
                />
                <div className="mt-4">
                  <ProjectStatus slug={item.slug} lang={lang} />
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-av-ink">
                    {pick(item.title, lang)}
                  </h3>
                  <div className="mt-3">
                    <WorkLinks
                      caseStudyPath={routes.portfolioDetail(lang, item.slug)}
                      demoPath={routes.demoDetail(lang, item.slug)}
                      caseLabel={dict.common.cta.viewCaseStudy}
                      demoLabel={dict.common.cta.openDemo}
                    />
                  </div>
                </div>
              </article>
            ) : null,
          )}
        </div>

        <div className="mt-12">
          <Link
            to={routes.portfolio(lang)}
            onClick={() =>
              trackEvent("portfolio_view", { location: "home_featured_all" })
            }
            className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-av-ink transition-colors hover:text-av-signal"
          >
            {dict.common.cta.seeAllPortfolio}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
