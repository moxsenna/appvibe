import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedPortfolioSection } from "@/components/sections/FeaturedPortfolioSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
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
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <FeaturedPortfolioSection />
      <IndustriesSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
    </PageShell>
  );
}