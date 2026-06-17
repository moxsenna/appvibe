import { ArrowRight, Sparkles } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useDict } from "@/i18n/use-dict";
import { useLang } from "@/i18n/use-lang";

export function FeaturedPortfolioSection() {
  const { lang } = useLang();
  const dict = useDict();
  const fp = dict.pages.home.featuredPortfolio;
  const [featured, ...rest] = portfolioItems;

  return (
    <section className="relative section-padding overflow-hidden bg-hero-mesh text-white reveal-on-scroll">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-35" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-cyan/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-violet/25 blur-[100px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="premium-eyebrow-dark">{fp.eyebrow}</span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {fp.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
            {fp.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {fp.badges.map((badge) => (
              <Badge
                key={badge}
                className="border-white/15 bg-white/10 text-xs text-slate-100"
              >
                <Sparkles className="mr-1 h-3 w-3 text-brand-cyan" aria-hidden />
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <PortfolioCard item={featured} variant="showcase" featured />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {rest.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                variant="showcase"
                compact
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            href={routes.portfolio(lang)}
            variant="secondary"
            size="lg"
            className="border-white/30 bg-white/15 text-white hover:bg-white/25"
            onClick={() =>
              trackEvent("portfolio_view", { location: "featured_section_cta" })
            }
          >
            {fp.viewAll}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}