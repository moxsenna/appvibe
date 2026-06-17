import { useEffect, useMemo } from "react";
import { brand } from "@/data/demos/properti/brand";
import { DemoShell } from "@/components/demos/DemoShell";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { PropertiHero } from "@/components/demos/properti/PropertiHero";
import { PropertiWhyUs } from "@/components/demos/properti/PropertiWhyUs";
import { PropertiListingsGrid } from "@/components/demos/properti/PropertiListingsGrid";
import { PropertiProcess } from "@/components/demos/properti/PropertiProcess";
import { PropertiTestimonials } from "@/components/demos/properti/PropertiTestimonials";
import { PropertiFAQ } from "@/components/demos/properti/PropertiFAQ";
import { PropertiInquiryForm } from "@/components/demos/properti/PropertiInquiryForm";
import { PropertiContactCTA } from "@/components/demos/properti/PropertiContactCTA";
import { applyPageMeta } from "@/lib/seo";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function PropertiDemoPage() {
  const { lang } = useLang();
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(getDefaultConsultationMessage(lang)),
    [lang],
  );

  useEffect(() => {
    const brandName = brand.name[lang];
    const titleId = `${brandName} — Demo Interaktif AppVibe Studio`;
    const titleEn = `${brand.name.en} — AppVibe Studio Interactive Demo`;
    applyPageMeta(
      {
        id: { title: titleId, description: brand.oneLiner.id },
        en: { title: titleEn, description: brand.oneLiner.en },
        paths: {
          id: routes.demoDetail("id", "properti"),
          en: routes.demoDetail("en", "properti"),
        },
      },
      lang,
    );
    trackEvent("demo_open", {
      slug: "properti",
      location: "demo_full_page",
      status: "live",
    });
  }, [lang]);

  return (
    <DemoShell
      brand={{
        name: brand.name[lang],
        tagline: brand.tagline[lang],
        brandColor: brand.primaryColor,
        accentColor: brand.accentColor,
      }}
      whatsappUrl={whatsappUrl}
      slug="properti"
    >
      <PropertiHero />
      <AppVibeDemoBanner variant="section" />
      <PropertiWhyUs />
      <PropertiListingsGrid />
      <PropertiProcess />
      <PropertiTestimonials />
      <PropertiFAQ />
      <PropertiInquiryForm />
      <PropertiContactCTA />
    </DemoShell>
  );
}