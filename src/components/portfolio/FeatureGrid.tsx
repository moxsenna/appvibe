import { Check } from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

type FeatureGridProps = {
  item: PortfolioItem;
};

export function FeatureGrid({ item }: FeatureGridProps) {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          eyebrow="Fitur Utama"
          title="Komponen penting yang dibuat untuk kebutuhan bisnis ini"
          description="Setiap fitur dirancang agar calon pelanggan mudah memahami layanan dan mengambil langkah berikutnya."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {item.features[lang].map((feature) => (
            <Card key={feature} hover className="flex gap-3">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-semantic-success"
                aria-hidden
              />
              <p className="text-sm leading-relaxed text-brand-muted">
                {feature}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}