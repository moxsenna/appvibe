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
      className="text-white"
      style={{ backgroundColor: "#4C1D95" }}
    >
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-[3px] bg-white px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-[#4C1D95]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />{" "}
              {campaign.eventTagline[lang]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-white/30 px-2.5 py-1 text-xs font-medium text-violet-100">
              <Users className="h-3.5 w-3.5" aria-hidden />{" "}
              {campaign.audienceShort[lang]}
            </span>
          </div>

          <h1 className="font-display text-display-lg font-normal tracking-tight text-white">
            {campaign.heroHeadline[lang]}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-violet-100 sm:text-lg">
            {campaign.valueProposition[lang]}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-white/20 py-4 text-sm text-white">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Video className="h-4 w-4" aria-hidden /> {campaign.date[lang]} ·{" "}
              {campaign.time[lang]}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-violet-200">{campaign.platform[lang]}</span>
          </div>

          <div className="mt-7">
            <WebinarLandingCountdown targetIso={TARGET_ISO} />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#daftar"
              size="lg"
              className="bg-white text-[#4C1D95] hover:bg-violet-50"
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
              className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
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

          <p className="mt-4 text-xs text-violet-200/90">{quotaFootnote}</p>
        </div>
      </Container>
    </section>
  );
}