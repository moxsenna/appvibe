import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RotatingText } from "@/components/ui/RotatingText";
import {
  HeroVisualStack,
  HeroLabelChips,
  HeroStatsBar,
} from "@/components/sections/HeroVisualStack";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function HeroSection() {
  const { lang, dict } = useLang();
  const { common, pages } = dict;
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <section className="mesh-hero relative text-white section-padding-lg">
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[100px] animate-pulse-glow hero-parallax" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-brand-violet/20 blur-[80px] hero-parallax" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="premium-eyebrow-dark">
              {pages.home.hero.eyebrowDark}
            </span>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {common.rotating.lead}{" "}
              <RotatingText />
            </h1>

            <noscript>
              <p className="mt-2 text-3xl font-extrabold text-white">
                {pages.home.hero.noscriptFallback}
              </p>
            </noscript>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {pages.home.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <Button
                href={whatsappUrl}
                size="lg"
                className="shadow-glow ring-2 ring-white/15"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", { location: "hero_primary" })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {common.cta.consult}
              </Button>
              <Button
                href={routes.portfolio(lang)}
                variant="secondary"
                size="lg"
                className="border-white/35 bg-white/10 text-white hover:bg-white/20"
                onClick={() =>
                  trackEvent("portfolio_view", { location: "hero_secondary" })
                }
              >
                {common.cta.viewPortfolio}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>

            <p className="mt-5 text-sm text-slate-300">
              {pages.home.hero.tagline}
            </p>

            <HeroLabelChips />
          </div>

          <div className="relative z-10 lg:pl-4">
            <HeroVisualStack />
          </div>
        </div>

        <HeroStatsBar />
      </Container>
    </section>
  );
}
