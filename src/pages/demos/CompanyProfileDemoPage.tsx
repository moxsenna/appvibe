import { useEffect, useMemo } from "react";
import { brand } from "@/data/demos/company-profile/brand";
import { DemoShell } from "@/components/demos/DemoShell";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { CompanyProfileHero } from "@/components/demos/company-profile/CompanyProfileHero";
import { CompanyProfileTrustBar } from "@/components/demos/company-profile/CompanyProfileTrustBar";
import { CompanyProfileProblemSection } from "@/components/demos/company-profile/CompanyProfileProblemSection";
import { CompanyProfileServicesOverview } from "@/components/demos/company-profile/CompanyProfileServicesOverview";
import { CompanyProfileServiceDetail } from "@/components/demos/company-profile/CompanyProfileServiceDetail";
import { CompanyProfileWhyUs } from "@/components/demos/company-profile/CompanyProfileWhyUs";
import { CompanyProfileProcessTimeline } from "@/components/demos/company-profile/CompanyProfileProcessTimeline";
import { CompanyProfilePortfolio } from "@/components/demos/company-profile/CompanyProfilePortfolio";
import { CompanyProfileCaseStudies } from "@/components/demos/company-profile/CompanyProfileCaseStudies";
import { CompanyProfileTestimonials } from "@/components/demos/company-profile/CompanyProfileTestimonials";
import { CompanyProfileFAQ } from "@/components/demos/company-profile/CompanyProfileFAQ";
import { CompanyProfileInquiryForm } from "@/components/demos/company-profile/CompanyProfileInquiryForm";
import { applyPageMeta } from "@/lib/seo";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function CompanyProfileDemoPage() {
  const { lang } = useLang();
  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(getDefaultConsultationMessage(lang)),
    [lang],
  );

  useEffect(() => {
    const titleId = `${brand.name.id} — Demo Interaktif AppVibe Studio`;
    const titleEn = `${brand.name.en} — AppVibe Studio Interactive Demo`;
    applyPageMeta(
      {
        id: { title: titleId, description: brand.oneLiner.id },
        en: { title: titleEn, description: brand.oneLiner.en },
        paths: {
          id: routes.demoDetail("id", "company-profile"),
          en: routes.demoDetail("en", "company-profile"),
        },
      },
      lang,
    );
    trackEvent("demo_open", {
      slug: "company-profile",
      location: "demo_full_page",
      status: "live",
    });
  }, [lang]);

  return (
    <DemoShell
      brand={{
        name: brand.name[lang],
        tagline: brand.tagline[lang],
        brandColor: "#0F172A",
        accentColor: "#7C3AED",
      }}
      whatsappUrl={whatsappUrl}
      slug="company-profile"
    >
      <CompanyProfileHero />
      <AppVibeDemoBanner variant="section" />
      <CompanyProfileTrustBar />
      <CompanyProfileProblemSection />
      <CompanyProfileServicesOverview />
      <CompanyProfileServiceDetail />
      <CompanyProfileWhyUs />
      <CompanyProfileProcessTimeline />
      <CompanyProfilePortfolio />
      <CompanyProfileCaseStudies />
      <CompanyProfileTestimonials />
      <CompanyProfileFAQ />
      <CompanyProfileInquiryForm />
    </DemoShell>
  );
}
