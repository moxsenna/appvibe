import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import {
  IndustriesFilter,
  type IndustryCategory,
} from "@/components/industries/IndustriesFilter";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { IndustriesCTA } from "@/components/industries/IndustriesCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { usePageMeta } from "@/i18n/use-page-meta";

export function IndustriesPage() {
  const [filter, setFilter] = useState<IndustryCategory>("all");
  usePageMeta("industries", "industries");

  return (
    <PageShell>
      <IndustriesHero />
      <section
        id="industri-list"
        className="section-padding bg-white"
      >
        <Container>
          <SectionHeader
            eyebrow="Industri yang Dilayani"
            title="Pilih industri yang paling mirip dengan bisnis Anda"
            description="Tiap industri punya masalah, ekspektasi, dan solusi digital yang berbeda. Filter untuk melihat industri spesifik, atau langsung hubungi tim untuk diskusi."
          />
          <div className="mt-8">
            <IndustriesFilter active={filter} onChange={setFilter} />
          </div>
          <div className="mt-8">
            <IndustriesGrid filter={filter} />
          </div>
        </Container>
      </section>
      <IndustriesCTA />
    </PageShell>
  );
}
