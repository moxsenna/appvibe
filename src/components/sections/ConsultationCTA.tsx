import { Link } from "react-router-dom";
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
import { homeFinalCta } from "@/data/home";
import { pick } from "@/i18n/localized";

export function ConsultationCTA({ location = "home_final" }: { location?: string }) {
  const { lang } = useLang();
  const waUrl = buildWhatsAppUrl(getHomeConsultationMessage(lang));

  return (
    <section className="border-t-2 border-av-ink">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {lang === "id" ? "Konsultasi · WhatsApp-first" : "Consultation · WhatsApp-first"}
          </p>
          <h2 className="mt-3 font-display text-display-lg font-normal tracking-tight text-av-ink">
            {pick(homeFinalCta.title, lang)}
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-av-text">
            {pick(homeFinalCta.body, lang)}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              href={waUrl}
              size="lg"
              onClick={() =>
                trackEvent("cta_whatsapp_click", { location: `${location}_primary` })
              }
            >
              {pick(homeFinalCta.primary, lang)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Link
              to={routes.portfolio(lang)}
              onClick={() =>
                trackEvent("portfolio_view", { location: `${location}_secondary` })
              }
              className="inline-flex min-h-[44px] items-center border-b border-av-ink pb-0.5 text-[15px] font-medium text-av-ink transition-colors hover:border-av-signal hover:text-av-signal"
            >
              {pick(homeFinalCta.secondary, lang)}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
