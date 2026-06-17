import { PageShell } from "@/components/layout/PageShell";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutFounder } from "@/components/about/AboutFounder";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { usePageMeta } from "@/i18n/use-page-meta";

export function AboutPage() {
  usePageMeta("about", "about");

  return (
    <PageShell>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutApproach />
      <AboutFounder />
      <AboutFAQ />
    </PageShell>
  );
}
