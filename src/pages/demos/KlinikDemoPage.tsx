import { useEffect, useMemo, useState } from "react";
import { pick } from "@/i18n/localized";
import { klinik } from "@/data/demos/klinik";
import type { ClinicService } from "@/data/demos/clinic";
import { DemoShell } from "@/components/demos/DemoShell";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { KlinikHero } from "@/components/demos/klinik/KlinikHero";
import { KlinikTrustSnapshot } from "@/components/demos/klinik/KlinikTrustSnapshot";
import { KlinikServices } from "@/components/demos/klinik/KlinikServices";
import { KlinikServiceDetailModal } from "@/components/demos/klinik/KlinikServiceDetailModal";
import { KlinikExperts } from "@/components/demos/klinik/KlinikExperts";
import { KlinikSchedule } from "@/components/demos/klinik/KlinikSchedule";
import { KlinikBookingSteps } from "@/components/demos/klinik/KlinikBookingSteps";
import { KlinikFAQ } from "@/components/demos/klinik/KlinikFAQ";
import { KlinikTestimonials } from "@/components/demos/klinik/KlinikTestimonials";
import { KlinikContact } from "@/components/demos/klinik/KlinikContact";
import { KlinikDisclaimer } from "@/components/demos/klinik/KlinikDisclaimer";
import { applyPageMeta } from "@/lib/seo";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function KlinikDemoPage() {
  const [activeService, setActiveService] = useState<ClinicService | null>(null);
  const { lang } = useLang();
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(getDefaultConsultationMessage(lang)),
    [lang],
  );

  useEffect(() => {
    const titleId = `${pick(klinik.name, "id")} — Demo Interaktif AppVibe Studio`;
    const titleEn = `${pick(klinik.name, "en")} — AppVibe Studio Interactive Demo`;
    applyPageMeta(
      {
        id: {
          title: titleId,
          description: pick(klinik.tagline, "id"),
        },
        en: {
          title: titleEn,
          description: pick(klinik.tagline, "en"),
        },
        paths: {
          id: routes.demoDetail("id", "klinik"),
          en: routes.demoDetail("en", "klinik"),
        },
      },
      lang,
    );
    trackEvent("demo_open", {
      slug: "klinik",
      location: "demo_full_page",
      status: "live",
    });
  }, [lang]);

  return (
    <DemoShell
      brand={{
        name: pick(klinik.name, lang),
        tagline: pick(klinik.tagline, lang),
        brandColor: klinik.primaryColor,
        accentColor: klinik.accentColor,
      }}
      whatsappUrl={whatsappUrl}
      slug="klinik"
    >
      <KlinikHero />
      <AppVibeDemoBanner variant="section" />
      <KlinikTrustSnapshot />
      <KlinikServices onSelect={setActiveService} />
      <KlinikExperts />
      <KlinikSchedule />
      <KlinikBookingSteps />
      <KlinikFAQ />
      <KlinikTestimonials />
      <KlinikContact />
      <KlinikDisclaimer />
      <KlinikServiceDetailModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </DemoShell>
  );
}
