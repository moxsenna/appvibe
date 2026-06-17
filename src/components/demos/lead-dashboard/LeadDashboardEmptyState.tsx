import { CheckCircle2, Plus } from "lucide-react";
import { setupChecklist } from "@/data/demos/lead-dashboard/emptyState";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/i18n/use-lang";

export function LeadDashboardEmptyState() {
  const { lang } = useLang();
  const copy = leadDashboardCopy.empty;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {copy.eyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {copy.title[lang]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {copy.subtitle[lang]}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Card padding="lg" className="border-2 border-dashed border-brand-border bg-slate-50">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {copy.checklistEyebrow[lang]}
            </p>
            <p className="mt-1 text-sm font-semibold text-brand-navy">
              {copy.checklistTitle[lang]}
            </p>
            <ol className="mt-5 space-y-3">
              {setupChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="flex-1 text-sm text-brand-dark">{item[lang]}</p>
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-emerald-500/30"
                    aria-hidden
                  />
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button size="md">
                <Plus className="h-4 w-4" aria-hidden /> {copy.ctaPrimary[lang]}
              </Button>
              <Button variant="secondary" size="md">
                {copy.ctaSecondary[lang]}
              </Button>
            </div>
            <p className="mt-3 text-[10px] italic text-brand-muted">
              {copy.footnote[lang]}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}