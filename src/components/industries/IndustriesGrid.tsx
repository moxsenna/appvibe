import { Link } from "react-router-dom";
import { industries } from "@/data/industries";
import { portfolioItems } from "@/data/portfolio";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { pick } from "@/i18n/localized";
import type { IndustryCategory } from "@/components/industries/IndustriesFilter";

type IndustriesGridProps = {
  filter: IndustryCategory;
};

const categoryMapping: Record<string, IndustryCategory> = {
  "jasa-profesional": "jasa",
  klinik: "kesehatan",
  properti: "properti",
  edukasi: "edukasi",
  "personal-brand": "edukasi",
  umkm: "umkm",
  restoran: "umkm",
  travel: "travel",
};

export function IndustriesGrid({ filter }: IndustriesGridProps) {
  const { lang } = useLang();
  const dict = useDict();
  const filtered =
    filter === "all"
      ? industries
      : industries.filter((i) => categoryMapping[i.id] === filter);

  if (filtered.length === 0) {
    return (
      <p className="border-t border-av-border py-8 text-base font-medium text-av-ink">
        {dict.pages.industries.noResults}
      </p>
    );
  }

  return (
    <div className="divide-y divide-av-border-soft border-b border-t border-av-border-soft">
      {filtered.map((industry, index) => (
        <article key={industry.id} className="grid gap-2 py-7 lg:grid-cols-12 lg:gap-8">
          <p className="font-mono text-xs text-av-muted lg:col-span-1">
            {String(index + 1).padStart(2, "0")}
          </p>
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold tracking-tight text-av-ink">
              {pick(industry.name, lang)}
            </h3>
            {industry.relatedPortfolioSlugs.length > 0 && (
              <div className="mt-3 flex flex-col gap-1.5">
                {industry.relatedPortfolioSlugs.map((slug) => {
                  const related = portfolioItems.find((p) => p.slug === slug);
                  if (!related) return null;
                  return (
                    <Link
                      key={slug}
                      to={routes.portfolioDetail(lang, slug)}
                      onClick={() =>
                        trackEvent("industry_card_click", {
                          industry: industry.id,
                          portfolio: slug,
                        })
                      }
                      className="text-sm font-medium text-av-ink transition-colors hover:text-av-signal"
                    >
                      {pick(related.title, lang).slice(0, 52)}…
                      <span aria-hidden> →</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm leading-relaxed text-av-secondary">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                {dict.pages.industries.problemLabel} ·{" "}
              </span>
              {pick(industry.problem, lang)}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-av-text">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-signal">
                {dict.pages.industries.solutionLabel} ·{" "}
              </span>
              {pick(industry.recommendedSolution, lang)}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
