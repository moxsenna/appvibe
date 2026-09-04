import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
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
        <ol className="mt-8 max-w-4xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
          {item.businessValue[lang].map((value, index) => (
            <li
              key={value}
              className="grid gap-1 py-5 sm:grid-cols-[56px_1fr] sm:gap-4"
            >
              <span className="font-mono text-xs text-av-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-av-text">
                {value}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <SectionHeader
            eyebrow={lang === "id" ? "Data contoh" : "Sample data"}
            title={
              lang === "id"
                ? "Spesifikasi isi demo"
                : "Demo content spec"
            }
            description={
              lang === "id"
                ? "Data realistis agar calon klien membayangkan website dengan konten bisnis nyata."
                : "Realistic data so prospects can picture the site with real business content."
            }
          />
          <dl className="mt-6 grid max-w-4xl gap-px overflow-hidden rounded border border-av-border bg-av-border sm:grid-cols-2">
            {item.mockDataHighlights[lang].map((highlight, index, arr) => {
              const isLastOdd =
                arr.length % 2 === 1 && index === arr.length - 1;
              return (
                <div
                  key={highlight}
                  className={cn(
                    "bg-av-surface px-5 py-4",
                    isLastOdd && "sm:col-span-2",
                  )}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                    {String(index + 1).padStart(2, "0")}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-av-text">
                    {highlight}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Container>
    </section>
  );
}
