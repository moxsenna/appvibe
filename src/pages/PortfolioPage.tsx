import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { portfolioItems } from "@/data/portfolio";
import type { PortfolioItem } from "@/types/portfolio";
import { routes } from "@/lib/routes";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import {
  ProjectStatus,
  ProjectVisual,
  WorkLinks,
} from "@/components/home/work-ui";

function bySlug(slug: string) {
  return portfolioItems.find((p) => p.slug === slug);
}

function ArchiveArticle({
  item,
  index,
  layout,
}: {
  item: PortfolioItem;
  index: string;
  layout: "feature" | "row" | "compact";
}) {
  const { lang, dict } = useLang();
  const casePath = routes.portfolioDetail(lang, item.slug);
  const demoPath = routes.demoDetail(lang, item.slug);

  if (layout === "feature") {
    return (
      <article className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <ProjectVisual
            src={item.thumbnail}
            alt={pick(item.title, lang)}
            eager
            aspect="aspect-[16/10]"
          />
        </div>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <p className="font-display text-5xl font-light text-av-border">
              {index}
            </p>
            <div className="mt-4">
              <ProjectStatus slug={item.slug} lang={lang} />
            </div>
            <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
              {pick(item.title, lang)}
            </h2>
            <p className="mt-1 text-sm text-av-secondary">
              {pick(item.niche, lang)}
            </p>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-av-text">
              {pick(item.summary, lang)}
            </p>
            <div className="mt-6">
              <WorkLinks
                caseStudyPath={casePath}
                demoPath={demoPath}
                caseLabel={dict.common.cta.viewCaseStudy}
                demoLabel={dict.common.cta.openDemo}
              />
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (layout === "row") {
    const flip = Number(index) % 2 === 0;
    return (
      <article className="grid items-start gap-6 border-t-2 border-av-ink pt-8 md:grid-cols-12 md:gap-8">
        <div className={cn("md:col-span-7", flip && "md:order-2")}>
          <ProjectVisual
            src={item.thumbnail}
            alt={pick(item.title, lang)}
            aspect="aspect-[16/10]"
          />
        </div>
        <div className={cn("md:col-span-5", flip && "md:order-1")}>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-av-muted">{index}</span>
            <ProjectStatus slug={item.slug} lang={lang} />
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink">
            {pick(item.title, lang)}
          </h2>
          <p className="mt-1 text-sm text-av-secondary">
            {pick(item.niche, lang)}
          </p>
          <p className="mt-3 max-w-[56ch] text-[15px] leading-relaxed text-av-text">
            {pick(item.summary, lang)}
          </p>
          <div className="mt-5">
            <WorkLinks
              caseStudyPath={casePath}
              demoPath={demoPath}
              caseLabel={dict.common.cta.viewCaseStudy}
              demoLabel={dict.common.cta.openDemo}
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="border-t border-av-border pt-6">
      <ProjectVisual
        src={item.thumbnail}
        alt={pick(item.title, lang)}
        aspect="aspect-[16/9]"
      />
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-mono text-xs text-av-muted">{index}</span>
        <h2 className="text-lg font-semibold tracking-tight text-av-ink">
          {pick(item.title, lang)}
        </h2>
      </div>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
        {pick(item.categoryLabel, lang)}
      </p>
      <div className="mt-3">
        <WorkLinks
          caseStudyPath={casePath}
          demoPath={demoPath}
          caseLabel={dict.common.cta.viewCaseStudy}
          demoLabel={dict.common.cta.openDemo}
        />
      </div>
    </article>
  );
}

export function PortfolioPage() {
  usePageMeta("portfolio", "portfolio");
  const { lang } = useLang();

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
          <div className="flex items-baseline justify-between gap-6 anim-rise ad-1">
            <p className="av-eyebrow">{lang === "id" ? "Karya" : "Work"}</p>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-av-muted">
              {countLabel}
            </p>
          </div>
          <h1 className="mt-4 max-w-[16ch] font-display text-display-lg font-normal tracking-tight text-av-ink anim-rise ad-2">
            {lang === "id" ? "Arsip kerja studio." : "The studio work archive."}
          </h1>
          <div className="mt-6 grid gap-6 border-t border-av-border pt-6 md:grid-cols-12 anim-rise ad-3">
            <p className="max-w-[62ch] text-base leading-relaxed text-av-text md:col-span-7">
              {lang === "id"
                ? "Setiap proyek bisa dibuka sebagai demo interaktif atau dibaca sebagai studi kasus — dengan konteks bisnis, keputusan desain, dan alur yang sebenarnya."
                : "Every project opens as an interactive demo or reads as a case study — with real business context, design decisions, and flows."}
            </p>
            <p className="max-w-[52ch] text-sm leading-relaxed text-av-secondary md:col-span-5">
              {lang === "id"
                ? "Semuanya studio project dengan data contoh — bukan klaim klien. Nomor urut menandai urutan kurasi, bukan peringkat."
                : "All are studio projects with sample data — never presented as client work. Numbers mark curation order, not rank."}
            </p>
          </div>
        </Container>
      </section>

      {featured && (
        <section className="bg-av-surface">
          <Container className="py-12 lg:py-16">
            <Reveal>
              <ArchiveArticle item={featured} index="01" layout="feature" />
            </Reveal>
          </Container>
        </section>
      )}

      <section className="border-t border-av-border">
        <Container className="space-y-12 py-12 lg:py-16">
          {rows.map((item, i) =>
            item ? (
              <Reveal key={item.id} delay={Math.min(i, 2) * 120}>
                <ArchiveArticle
                  item={item}
                  index={String(i + 2).padStart(2, "0")}
                  layout="row"
                />
              </Reveal>
            ) : null,
          )}
        </Container>
      </section>

      <section className="border-t border-av-border bg-av-surface">
        <Container className="py-12 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
            {secondary.map((item, i) =>
              item ? (
                <Reveal key={item.id} delay={Math.min(i, 1) * 120}>
                  <ArchiveArticle
                    item={item}
                    index={String(i + 4).padStart(2, "0")}
                    layout="compact"
                  />
                </Reveal>
              ) : null,
            )}
          </div>
        </Container>
      </section>

      <section aria-label={lang === "id" ? "Indeks arsip" : "Archive index"} className="border-t border-av-border">
        <Container className="py-12 lg:py-16">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
            {lang === "id" ? "Indeks" : "Index"}
          </p>
          <ol className="mt-4 divide-y divide-av-border-soft border-b border-t border-av-border-soft">
            {portfolioItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={routes.portfolioDetail(lang, item.slug)}
                  className="group grid gap-1 py-4 transition-colors hover:bg-av-surface sm:grid-cols-[48px_1fr_auto] sm:items-center sm:gap-6 sm:px-3"
                >
                  <span className="font-mono text-xs text-av-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-av-ink transition-colors group-hover:text-av-signal">
                      {pick(item.title, lang)}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                      {pick(item.categoryLabel, lang)}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="hidden text-av-muted transition-transform group-hover:translate-x-1 sm:block"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ConsultationCTA location="portfolio_page" />
    </PageShell>
  );
}
