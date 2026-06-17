import { ArrowRight, MessageCircle, Sparkles, Users, Video } from "lucide-react";
import { campaign } from "@/data/demos/webinar-landing/campaign";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { WebinarLandingCountdown } from "@/components/demos/webinar-landing/WebinarLandingCountdown";

const TARGET_ISO = "2026-06-21T19:00:00+07:00";

export function WebinarLandingHero() {
  const { lang } = useLang();
  const copy = webinarLandingCopy;
  const whatsappUrl = buildWhatsAppUrl(copy.hero.whatsappInquiry[lang]);
  const quotaFootnote = copy.hero.quotaFootnote[lang].replace(
    "{remaining}",
    String(campaign.quotaSimulatedRemaining),
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #5B21B6 0%, #6D28D9 40%, #2563EB 100%)",
      }}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-300/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />{" "}
              {campaign.eventTagline[lang]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-xs font-medium text-cyan-100">
              <Users className="h-3.5 w-3.5" aria-hidden />{" "}
              {campaign.audienceShort[lang]}
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {campaign.heroHeadline[lang]}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-violet-100 sm:text-lg">
            {campaign.valueProposition[lang]}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-violet-100">
            <span className="inline-flex items-center gap-1.5">
              <Video className="h-4 w-4" aria-hidden /> {campaign.date[lang]} ·{" "}
              {campaign.time[lang]}
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-violet-100/50 sm:inline-block" />
            <span>{campaign.platform[lang]}</span>
          </div>

          <div className="mt-7">
            <WebinarLandingCountdown targetIso={TARGET_ISO} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#daftar"
              size="lg"
              className="bg-white text-brand-violet hover:bg-violet-50"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "wl_hero_primary",
                  slug: "webinar-landing",
                })
              }
            >
              {campaign.ctaPrimary[lang]}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "wl_hero_secondary",
                  slug: "webinar-landing",
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {campaign.ctaSecondary[lang]}
            </Button>
          </div>

          <p className="mt-4 text-xs text-violet-200/80">{quotaFootnote}</p>
        </div>
      </Container>
    </section>
  );
}