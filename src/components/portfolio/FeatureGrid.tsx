import { Check } from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLang } from "@/i18n/use-lang";

type FeatureGridProps = {
  item: PortfolioItem;
};

export function FeatureGrid({ item }: FeatureGridProps) {
  const { lang } = useLang();
  const [highlight, ...rest] = item.features[lang];

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-12 lg:py-16">
        <SectionHeader
          eyebrow={lang === "id" ? "Yang dibangun" : "What was built"}
          title={
            lang === "id"
              ? "Komponen penting untuk kebutuhan bisnis ini"
              : "Key pieces built for this business need"
          }
        />
        {highlight && (
          <p className="mt-8 max-w-[44ch] border-t-2 border-av-signal pt-5 font-display text-2xl font-normal leading-snug tracking-tight text-av-ink">
            {highlight}
          </p>
        )}
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {rest.map((feature) => (
            <li key={feature} className="flex gap-3 border-t border-av-border-soft pt-4">
              <Check
                className="mt-0.5 h-5 w-5 shrink-0 text-av-signal"
                aria-hidden
              />
              <p className="text-sm leading-relaxed text-av-text">{feature}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
