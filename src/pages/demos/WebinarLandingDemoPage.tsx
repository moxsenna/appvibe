import { useEffect, useMemo } from "react";
import { campaign } from "@/data/demos/webinar-landing/campaign";
import { DemoShell } from "@/components/demos/DemoShell";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { WebinarLandingHero } from "@/components/demos/webinar-landing/WebinarLandingHero";
import { WebinarLandingProblemSection } from "@/components/demos/webinar-landing/WebinarLandingProblemSection";
import { WebinarLandingWhoIsThisFor } from "@/components/demos/webinar-landing/WebinarLandingWhoIsThisFor";
import { WebinarLandingBenefits } from "@/components/demos/webinar-landing/WebinarLandingBenefits";
import { WebinarLandingTestimonials } from "@/components/demos/webinar-landing/WebinarLandingTestimonials";
import { WebinarLandingSpeakers } from "@/components/demos/webinar-landing/WebinarLandingSpeakers";
import { WebinarLandingBonuses } from "@/components/demos/webinar-landing/WebinarLandingBonuses";
import { WebinarLandingAgenda } from "@/components/demos/webinar-landing/WebinarLandingAgenda";
import { WebinarLandingRegistrationForm } from "@/components/demos/webinar-landing/WebinarLandingRegistrationForm";
import { WebinarLandingFAQ } from "@/components/demos/webinar-landing/WebinarLandingFAQ";
import { WebinarLandingFollowUpTimeline } from "@/components/demos/webinar-landing/WebinarLandingFollowUpTimeline";
import { applyPageMeta } from "@/lib/seo";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingDemoPage() {
  const { lang } = useLang();
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(getDefaultConsultationMessage(lang)),
    [lang],
  );

  useEffect(() => {
    const titleId = `${campaign.eventName.id} — Demo Interaktif AppVibe Studio`;
    const titleEn = `${campaign.eventName.en} — AppVibe Studio Interactive Demo`;
    applyPageMeta(
      {
        id: {
          title: titleId,
          description: campaign.valueProposition.id,
        },
        en: {
          title: titleEn,
          description: campaign.valueProposition.en,
        },
        paths: {
          id: routes.demoDetail("id", "webinar-landing"),
          en: routes.demoDetail("en", "webinar-landing"),
        },
      },
      lang,
    );
    trackEvent("demo_open", {
      slug: "webinar-landing",
      location: "demo_full_page",
      status: "live",
    });
  }, [lang]);

  return (
    <DemoShell
      brand={{
        name: campaign.organizer[lang],
        tagline: campaign.eventShortName[lang],
        brandColor: "#5B21B6",
        accentColor: "#2563EB",
      }}
      whatsappUrl={whatsappUrl}
      slug="webinar-landing"
    >
      <WebinarLandingHero />
      <AppVibeDemoBanner variant="section" />
      <WebinarLandingProblemSection />
      <WebinarLandingWhoIsThisFor />
      <WebinarLandingBenefits />
      <WebinarLandingTestimonials />
      <WebinarLandingSpeakers />
      <WebinarLandingBonuses />
      <WebinarLandingAgenda />
      <WebinarLandingRegistrationForm />
      <WebinarLandingFollowUpTimeline />
      <WebinarLandingFAQ />
    </DemoShell>
  );
}
