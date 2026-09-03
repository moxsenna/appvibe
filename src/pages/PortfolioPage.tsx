import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { portfolioItems } from "@/data/portfolio";
import { routes } from "@/lib/routes";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import {
  ProjectStatus,
  ProjectVisual,
  WorkLinks,
} from "@/components/home/work-ui";

function bySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug);
}

export function PortfolioPage() {
  usePageMeta("portfolio", "portfolio");
  const { lang, dict } = useLang();

  const featured = bySlug("company-profile");
  const rows = [bySlug("klinik"), bySlug("properti")].filter(Boolean);
  const secondary = [bySlug("webinar-landing"), bySlug("lead-dashboard")].filter(
    Boolean,
  );
  const countLabel =
    lang === "id"
      ? `${portfolioItems.length} demo & studi kasus`
      : `${portfolioItems.length} demos & case studies`;

  return (
    <PageShell>
      <section className="border-b border-av-border">
        <Container className="pb-10 pt-12 sm:pt-16">
          <p className="av-eyebrow">{lang === "id" ? "Karya" : "Work"}</p>
          <h1 className="mt-4 font-display text-display-lg font-normal tracking-tight text-av-ink">
            {lang === "id" ? "Arsip kerja studio." : "The studio work archive."}
          </h1>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
            {lang === "id"
              ? "Setiap proyek bisa dibuka sebagai demo interaktif atau dibaca sebagai studi kasus. Semuanya studio project dengan data contoh — bukan klaim klien."
              : "Every project opens as an interactive demo or reads as a case study. All are studio projects with sample data — never presented as client work."}
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.1em] text-av-muted">
            {countLabel}
          </p>
        </Container>
      </section>

      {featured && (
        <section className="bg-av-surface">
          <Container className="py-12 lg:py-16">
            <article className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <ProjectVisual
                  src={featured.thumbnail}
                  alt={pick(featured.title, lang)}
                  eager
                />
              </div>
              <div className="lg:col-span-5">
                <ProjectStatus slug={featured.slug} lang={lang} />
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink">
                  {pick(featured.title, lang)}
                </h2>
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
          </Container>
        </section>
      )}

      <section className="border-t border-av-border">
        <Container className="py-12 lg:py-16">
          <div className="space-y-10">
            {rows.map((item) =>
              item ? (
                <article
                  key={item.id}
                  className="grid gap-6 border-t border-av-border pt-10 first:border-0 first:pt-0 md:grid-cols-12 md:gap-8"
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
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-av-ink">
                      {pick(item.title, lang)}
                    </h2>
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
                    <h2 className="mt-2 text-lg font-semibold tracking-tight text-av-ink">
                      {pick(item.title, lang)}
                    </h2>
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
        </Container>
      </section>

      <section aria-label={lang === "id" ? "Indeks arsip" : "Archive index"} className="border-t border-av-border bg-av-surface">
        <Container className="py-12 lg:py-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
            {lang === "id" ? "Indeks" : "Index"}
          </p>
          <ol className="mt-4 divide-y divide-av-border-soft border-b border-t border-av-border-soft">
            {portfolioItems.map((item, i) => (
              <li
                key={item.id}
                className="grid gap-1 py-4 sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-xs text-av-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-av-ink">
                    {pick(item.title, lang)}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                    {pick(item.categoryLabel, lang)}
                  </p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <WorkLinks
                    caseStudyPath={routes.portfolioDetail(lang, item.slug)}
                    demoPath={routes.demoDetail(lang, item.slug)}
                    caseLabel={dict.common.cta.viewCaseStudy}
                    demoLabel={dict.common.cta.openDemo}
                  />
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ConsultationCTA location="portfolio_page" />
    </PageShell>
  );
}
