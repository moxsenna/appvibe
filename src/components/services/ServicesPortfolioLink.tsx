import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function ServicesPortfolioLink() {
  const { lang } = useLang();
  const featured = portfolioItems.slice(0, 4);

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Portfolio Terkait
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            Contoh hasil yang bisa Anda lihat langsung
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            Buka case study untuk memahami logika di balik setiap project —
            masalah, solusi, dan nilai yang dicapai.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <a
              key={item.id}
              href={routes.portfolioDetail(lang, item.slug)}
              onClick={() =>
                trackEvent("portfolio_view", {
                  slug: item.slug,
                  location: "services_portfolio_link",
                })
              }
              className="group"
            >
              <Card hover className="flex h-full flex-col">
                <div
                  className="mb-4 h-28 rounded-xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #1E3A8A 0%, #4C1D95 100%)",
                  }}
                  aria-hidden
                >
                  <div className="flex h-full items-end p-3">
                    <Badge className="border border-white/20 bg-white/15 text-white">
                      {item.categoryLabel[lang]}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue">
                  {item.title[lang]}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs text-brand-muted">
                  {item.summary[lang]}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue transition-transform group-hover:translate-x-0.5">
                  <ExternalLink className="h-3 w-3" aria-hidden /> Lihat Studi Kasus
                </span>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={routes.portfolio(lang)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-violet"
          >
            Lihat semua portfolio
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
