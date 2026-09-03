import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import { ProjectStatus, ProjectVisual } from "@/components/home/work-ui";

export function ServicesPortfolioLink() {
  const { lang } = useLang();
  const featured = portfolioItems.slice(0, 2);

  return (
    <section className="border-t border-av-border">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {lang === "id" ? "Karya terkait" : "Related work"}
          </p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {lang === "id"
              ? "Contoh hasil yang bisa Anda buka langsung"
              : "Example outcomes you can open right now"}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
            {lang === "id"
              ? "Baca studi kasus untuk memahami logika di balik setiap proyek — atau buka demonya dan klik sendiri."
              : "Read the case study for the reasoning behind each project — or open the demo and click through it yourself."}
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featured.map((item) => (
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
                <Link
                  to={routes.portfolioDetail(lang, item.slug)}
                  onClick={() =>
                    trackEvent("portfolio_view", {
                      slug: item.slug,
                      location: "services_portfolio_link",
                    })
                  }
                  className="mt-3 inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-av-ink transition-colors hover:text-av-signal"
                >
                  {lang === "id" ? "Studi Kasus" : "Case study"}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link
            to={routes.portfolio(lang)}
            className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-av-ink transition-colors hover:text-av-signal"
          >
            {lang === "id" ? "Semua Karya" : "All work"}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
