import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import {
  buildWhatsAppUrl,
  getHomeConsultationMessage,
} from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { homeHero } from "@/data/home";
import { pick } from "@/i18n/localized";

export function HomeHero() {
  const { lang } = useLang();
  const waUrl = buildWhatsAppUrl(getHomeConsultationMessage(lang));

  return (
    <section className="border-b border-av-border">
      <Container className="pb-14 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="max-w-[62ch]">
          <p className="av-eyebrow">{pick(homeHero.eyebrow, lang)}</p>
          <h1 className="mt-5 font-display text-display-xl font-light text-av-ink">
            {pick(homeHero.title, lang)}
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-av-text sm:text-lg">
            {pick(homeHero.support, lang)}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              href={routes.portfolio(lang)}
              size="lg"
              onClick={() =>
                trackEvent("portfolio_view", { location: "home_hero_primary" })
              }
            >
              {pick(homeHero.primary, lang)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("cta_whatsapp_click", { location: "home_hero_secondary" })
              }
              className="inline-flex min-h-[44px] items-center border-b border-av-ink pb-0.5 text-[15px] font-medium text-av-ink transition-colors hover:border-av-signal hover:text-av-signal"
            >
              {pick(homeHero.secondary, lang)}
            </a>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.1em] text-av-muted">
            {pick(homeHero.meta, lang)}
          </p>
        </div>
      </Container>
    </section>
  );
}
