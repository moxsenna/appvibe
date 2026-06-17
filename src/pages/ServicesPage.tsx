import { PageShell } from "@/components/layout/PageShell";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServicesDetailAccordion } from "@/components/services/ServicesDetailAccordion";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesPortfolioLink } from "@/components/services/ServicesPortfolioLink";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { usePageMeta } from "@/i18n/use-page-meta";

export function ServicesPage() {
  usePageMeta("services", "services");

  return (
    <PageShell>
      <ServicesHero />
      <ServicesOverview />
      <ServicesDetailAccordion />
      <ServicesProcess />
      <ServicesPortfolioLink />
      <ServicesFAQ />
    </PageShell>
  );
}
