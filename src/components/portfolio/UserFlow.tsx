import { ArrowRight } from "lucide-react";
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
    <section className="section-padding bg-brand-light">
      <Container>
        <SectionHeader
          eyebrow="Alur Pengguna"
          title="Bagaimana calon pelanggan menggunakan website ini"
          description="Alur sederhana yang membantu pengunjung dari pertama kali membuka halaman hingga menghubungi bisnis Anda."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="relative flex gap-4 rounded-2xl border border-brand-border bg-white p-5 shadow-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cta-gradient text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium leading-relaxed text-brand-navy">
                  {step}
                </p>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="mt-2 hidden h-4 w-4 text-brand-muted lg:block"
                    aria-hidden
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}