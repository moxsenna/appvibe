import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLang } from "@/i18n/use-lang";

type BusinessValueSectionProps = {
  item: PortfolioItem;
};

export function BusinessValueSection({ item }: BusinessValueSectionProps) {
  const { lang } = useLang();

  return (
    <section className="border-t border-av-border">
      <Container className="py-12 lg:py-16">
        <SectionHeader
          eyebrow={lang === "id" ? "Nilai bisnis" : "Business value"}
          title={
            lang === "id"
              ? "Dampak yang realistis untuk bisnis seperti ini"
              : "Realistic impact for a business like this"
          }
        />
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {item.businessValue[lang].map((value) => (
            <li
              key={value}
              className="border-t-2 border-av-ink pt-4 text-[15px] leading-relaxed text-av-text"
            >
              {value}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <SectionHeader
            eyebrow={lang === "id" ? "Data contoh" : "Sample data"}
            title={
              lang === "id"
                ? "Data contoh yang dipakai demo"
                : "Sample data used in the demo"
            }
            description={
              lang === "id"
                ? "Data realistis agar calon klien membayangkan website dengan konten bisnis nyata."
                : "Realistic data so prospects can picture the site with real business content."
            }
          />
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {item.mockDataHighlights[lang].map((highlight) => (
              <li
                key={highlight}
                className="border-l-2 border-av-border pl-3 text-sm leading-relaxed text-av-secondary"
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
