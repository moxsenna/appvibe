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
        <ol className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="border-t border-av-border pt-4">
              <p className="font-mono text-xs text-av-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-av-text">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
