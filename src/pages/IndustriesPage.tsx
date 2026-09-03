import { useState } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import {
  IndustriesFilter,
  type IndustryCategory,
} from "@/components/industries/IndustriesFilter";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";

export function IndustriesPage() {
  const [filter, setFilter] = useState<IndustryCategory>("all");
  usePageMeta("industries", "industries");
  const { lang } = useLang();

  return (
    <PageShell>
      <IndustriesHero />
      <section id="industri-list">
        <Container className="py-14 lg:py-20">
          <SectionHeader
            eyebrow={lang === "id" ? "Daftar industri" : "Industry list"}
            title={
              lang === "id"
                ? "Pilih yang paling mirip dengan bisnis Anda"
                : "Pick the closest to your business"
            }
            description={
              lang === "id"
                ? "Tiap industri punya masalah dan ekspektasi berbeda. Saring daftarnya, atau langsung diskusi bila industri Anda tidak ada di sini."
                : "Every industry has different problems and expectations. Filter the list, or talk to us directly if yours isn't here."
            }
          />
          <div className="mt-8">
            <IndustriesFilter active={filter} onChange={setFilter} />
          </div>
          <div className="mt-8">
            <IndustriesGrid filter={filter} />
          </div>
        </Container>
      </section>
      <ConsultationCTA location="industries_page" />
    </PageShell>
  );
}
