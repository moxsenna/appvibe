import { PageShell } from "@/components/layout/PageShell";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServicesPricing } from "@/components/services/ServicesPricing";
import { ServicesDetailAccordion } from "@/components/services/ServicesDetailAccordion";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesPortfolioLink } from "@/components/services/ServicesPortfolioLink";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { usePageMeta } from "@/i18n/use-page-meta";

export function ServicesPage() {
  usePageMeta("services", "services");

  return (
    <PageShell>
      <ServicesHero />
      <ServicesOverview />
      <ServicesPricing />
      <ServicesDetailAccordion />
      <ServicesProcess />
      <ServicesPortfolioLink />
      <ServicesFAQ />
      <ConsultationCTA location="services_page" />
    </PageShell>
  );
}
