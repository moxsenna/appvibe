import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLang } from "@/i18n/use-lang";

type UserFlowProps = {
  item: PortfolioItem;
};

export function UserFlow({ item }: UserFlowProps) {
  const { lang } = useLang();
  const steps = item.userFlow[lang];

  return (
    <section className="border-t border-av-border">
      <Container className="py-12 lg:py-16">
        <SectionHeader
          eyebrow={lang === "id" ? "Alur pengguna" : "User flow"}
          title={
            lang === "id"
              ? "Dari kunjungan pertama sampai menghubungi bisnis"
              : "From first visit to contacting the business"
          }
        />
        <ol className="mt-10 max-w-3xl border-l-2 border-av-border pl-0">
          {steps.map((step, index) => (
            <li key={step} className="relative pb-8 pl-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-[4px] border border-av-border bg-av-canvas font-mono text-xs text-av-ink"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="max-w-[60ch] pt-1 text-[15px] leading-relaxed text-av-text">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
