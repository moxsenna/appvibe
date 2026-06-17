import { ArrowRight, Building2, GraduationCap, Store, Stethoscope, Briefcase, Plane } from "lucide-react";
import { industries } from "@/data/industries";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
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

const industryIcon: Record<string, typeof Building2> = {
  "umkm": Store,
  "jasa-profesional": Briefcase,
  "edukasi": GraduationCap,
  "klinik": Stethoscope,
  "properti": Building2,
  "restoran": Store,
  "travel": Plane,
  "personal-brand": GraduationCap,
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
      <Card className="text-center">
        <p className="text-base font-semibold text-brand-navy">
          {dict.pages.industries.noResults}
        </p>
      </Card>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((industry) => {
        const Icon = industryIcon[industry.id] ?? Briefcase;
        return (
          <Card key={industry.id} hover className="flex flex-col">
            <div className="mb-4 flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              {industry.relatedPortfolioSlugs.length > 0 && (
                <Badge variant="cyan" className="text-[10px]">
                  {industry.relatedPortfolioSlugs.length} portfolio
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-semibold text-brand-navy">
              {industry.name[lang]}
            </h3>
            <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50/40 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-700">
                {dict.pages.industries.problemLabel}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-amber-900">
                {industry.problem[lang]}
              </p>
            </div>
            <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50/40 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
                {dict.pages.industries.solutionLabel}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-emerald-900">
                {industry.recommendedSolution[lang]}
              </p>
            </div>
            {industry.relatedPortfolioSlugs.length > 0 && (
              <div className="mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-blue">
                  {dict.pages.industries.relatedPortfolioLabel}
                </p>
                <div className="mt-2 flex flex-col gap-1.5">
                  {industry.relatedPortfolioSlugs.map((slug) => (
                    <a
                      key={slug}
                      href={routes.portfolioDetail(lang, slug)}
                      onClick={() =>
                        trackEvent("industry_card_click", {
                          industry: industry.id,
                          portfolio: slug,
                        })
                      }
                      className={cn(
                        "inline-flex items-center gap-1 text-sm font-medium text-brand-blue transition-colors hover:text-brand-violet",
                      )}
                    >
                      {dict.pages.industries.seeCaseStudy} {slug.replace(/-/g, " ")}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            )}
            <div className="mt-4 border-t border-brand-border pt-3">
              <Button
                href={routes.contact(lang)}
                variant="secondary"
                size="sm"
                onClick={() =>
                  trackEvent("industry_card_click", {
                    industry: industry.id,
                    action: "consult_cta",
                  })
                }
              >
                {dict.pages.industries.discussCta}
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
