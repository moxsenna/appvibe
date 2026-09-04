import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";
import { homeIndustriesHeader } from "@/data/home";
import { pick } from "@/i18n/localized";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesPreview() {
  const { lang } = useLang();
  const preview = industries.slice(0, 6);

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="av-eyebrow text-av-signal">
              {pick(homeIndustriesHeader.eyebrow, lang)}
            </p>
            <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
              {pick(homeIndustriesHeader.title, lang)}
            </h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
              {pick(homeIndustriesHeader.desc, lang)}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {preview.map((industry, idx) => {
            const related = (industry.relatedPortfolioSlugs ?? [])
              .map((slug) => portfolioItems.find((p) => p.slug === slug))
              .filter(Boolean)
              .slice(0, 1)[0];
            return (
              <Reveal key={industry.id} delay={Math.min(idx % 2, 1) * 100}>
              <article
                className="border-t-2 border-av-ink pt-5"
              >
                <h3 className="text-base font-semibold text-av-ink">
                  {pick(industry.name, lang)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-av-secondary">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                    {lang === "id" ? "Masalah · " : "Problem · "}
                  </span>
                  {pick(industry.problem, lang)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-av-text">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-signal">
                    {lang === "id" ? "Solusi · " : "Fix · "}
                  </span>
                  {pick(industry.recommendedSolution, lang)}
                </p>
                {related && (
                  <Link
                    to={routes.portfolioDetail(lang, related.slug)}
                    className="mt-3 inline-flex min-h-[44px] items-center text-sm font-medium text-av-ink transition-colors hover:text-av-signal"
                  >
                    {pick(related.title, lang).slice(0, 48)}…
                    <span aria-hidden> →</span>
                  </Link>
                )}
              </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            to={routes.industries(lang)}
            className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-av-ink transition-colors hover:text-av-signal"
          >
            {lang === "id" ? "Semua industri" : "All industries"}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
