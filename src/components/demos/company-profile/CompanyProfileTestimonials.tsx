import { Quote, AlertTriangle } from "lucide-react";
import { testimonials } from "@/data/demos/company-profile/testimonials";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

const copy = {
  id: {
    eyebrow: "Testimoni Skenario",
    title: "Apa yang biasanya terbantu setelah ada website company profile",
    disclaimerBold: "Contoh testimoni skenario",
    disclaimer:
      "— bukan klien nyata. Nama, jabatan, dan industri adalah personas untuk ilustrasi.",
    outcomeLabel: "Hasil",
  },
  en: {
    eyebrow: "Scenario testimonials",
    title: "What typically improves after a company profile site",
    disclaimerBold: "Sample scenario testimonials",
    disclaimer:
      "— not real clients. Names, roles, and industries are illustrative personas.",
    outcomeLabel: "Outcome",
  },
} as const;

export function CompanyProfileTestimonials() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {t.title}
          </h2>
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-xs text-amber-900 sm:text-sm">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
              aria-hidden
            />
            <p>
              <span className="font-semibold">{t.disclaimerBold}</span>{" "}
              {t.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.id} hover className="flex flex-col">
              <Quote className="h-6 w-6 text-brand-blue/40" aria-hidden />
              <blockquote className="mt-3 text-sm leading-relaxed text-brand-dark sm:text-base">
                &ldquo;{item.quote[lang]}&rdquo;
              </blockquote>
              <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  {t.outcomeLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">
                  {item.outcome[lang]}
                </p>
              </div>
              <footer className="mt-4 flex items-center gap-3 border-t border-brand-border pt-4">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-cta-gradient text-sm font-bold text-white"
                  aria-hidden
                >
                  {item.name[lang]
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    {item.name[lang]}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {item.role[lang]} · {item.industry[lang]}
                  </p>
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}