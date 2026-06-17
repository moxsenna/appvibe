import { TrendingUp } from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

type BusinessValueSectionProps = {
  item: PortfolioItem;
};

export function BusinessValueSection({ item }: BusinessValueSectionProps) {
  const { lang } = useLang();

  return (
    <section className="section-padding bg-brand-light">
      <Container>
        <SectionHeader
          eyebrow="Nilai Bisnis"
          title="Dampak yang diharapkan untuk bisnis seperti ini"
          description="Manfaat yang realistis — membantu bisnis tampil lebih profesional dan proses inquiry lebih rapi."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {item.businessValue[lang].map((value) => (
            <Card key={value} hover className="flex gap-3">
              <TrendingUp
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                aria-hidden
              />
              <p className="text-sm leading-relaxed text-brand-muted">{value}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <SectionHeader
            eyebrow="Mock Data"
            title="Data contoh yang digunakan dalam demo"
            description="Mock data realistis membantu calon klien membayangkan bagaimana website akan terlihat dengan konten bisnis nyata."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.mockDataHighlights[lang].map((highlight) => (
              <li
                key={highlight}
                className="rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-muted"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}