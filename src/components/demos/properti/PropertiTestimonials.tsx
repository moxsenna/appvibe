import { Quote, AlertTriangle } from "lucide-react";
import { testimonials } from "@/data/demos/properti/testimonials";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

const sectionCopy: Record<
  Lang,
  { eyebrow: string; title: string; disclaimerLead: string; disclaimerBody: string; outcome: string }
> = {
  id: {
    eyebrow: "Testimoni Skenario",
    title: "Situasi yang biasanya terbantu dengan listing online",
    disclaimerLead: "Contoh simulasi",
    disclaimerBody: "— bukan klien nyata. Nama dan peran adalah personas untuk ilustrasi.",
    outcome: "Hasil",
  },
  en: {
    eyebrow: "Scenario testimonials",
    title: "Situations online listings typically help with",
    disclaimerLead: "Simulated example",
    disclaimerBody: "— not a real client. Names and roles are personas for illustration.",
    outcome: "Outcome",
  },
};

export function PropertiTestimonials() {
  const { lang } = useLang();
  const copy = sectionCopy[lang];

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">{copy.title}</h2>
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-xs text-amber-900 sm:text-sm">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
              aria-hidden
            />
            <p>
              <span className="font-semibold">{copy.disclaimerLead}</span> {copy.disclaimerBody}
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.id} hover className="flex flex-col">
              <Quote className="h-6 w-6 text-emerald-600/40" aria-hidden />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-brand-dark sm:text-base">
                &ldquo;{t.quote[lang]}&rdquo;
              </blockquote>
              <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  {copy.outcome}
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">{t.outcome[lang]}</p>
              </div>
              <footer className="mt-4 flex items-center gap-3 border-t border-brand-border pt-4">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm font-bold text-white"
                  aria-hidden
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-brand-muted">{t.role[lang]}</p>
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}