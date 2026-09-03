import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { HomeHero } from "@/components/home/HomeHero";
import { TwoWorlds } from "@/components/home/TwoWorlds";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ProjectDeepDive } from "@/components/home/ProjectDeepDive";
import { Capabilities } from "@/components/home/Capabilities";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { HomeProcess } from "@/components/home/HomeProcess";
import { StudioTrust } from "@/components/home/StudioTrust";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";
import { faqItems } from "@/data/faq";
import { clearPageJsonLd, faqPageJsonLd, setPageJsonLd } from "@/lib/json-ld";

export function HomePage() {
  usePageMeta("home", "home");
  const { lang } = useLang();

  useEffect(() => {
    setPageJsonLd(
      faqPageJsonLd(
        faqItems.map((item) => ({
          question: item.question[lang],
          answer: item.answer[lang],
        })),
      ),
    );
    return () => clearPageJsonLd();
  }, [lang]);

  return (
    <PageShell>
      <HomeHero />
      <TwoWorlds />
      <FeaturedWork />
      <ProjectDeepDive />
      <Capabilities />
      <IndustriesPreview />
      <HomeProcess />
      <StudioTrust />
      <FAQSection />
      <ConsultationCTA location="home_final" />
    </PageShell>
  );
}
