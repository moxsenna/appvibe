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
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {item.features[lang].map((feature) => (
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
