import { whyUs } from "@/data/demos/company-profile/whyUs";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Sparkles } from "lucide-react";
import { useLang } from "@/i18n/use-lang";

const copy = {
  id: {
    eyebrow: "Kenapa Memilih Kami",
    title: "Apa yang membuat pendekatan kami berbeda",
  },
  en: {
    eyebrow: "Why work with us",
    title: "What makes our approach different",
  },
} as const;

export function CompanyProfileWhyUs() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {t.title}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyUs.map((item) => (
            <Card key={item.title[lang]} hover className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold text-brand-navy">
                  {item.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.description[lang]}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}