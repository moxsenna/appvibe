import { useState } from "react";
import { Plus, AlertTriangle } from "lucide-react";
import { CLINIC_FAQ } from "@/data/demos/clinic";
import { klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikFAQ() {
  const { lang } = useLang();
  const section = klinikCopy.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            {pick(section.eyebrow, lang)}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {pick(section.title, lang)}
          </h2>
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-xs text-amber-900 sm:text-sm">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
              aria-hidden
            />
            <p>{pick(section.alertFull, lang)}</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl divide-y divide-brand-border overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
          {CLINIC_FAQ.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const question = pick(faq.question, lang);
            return (
              <div key={question}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-light sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-navy sm:text-base">
                    {question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-teal-700 transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted sm:px-6 sm:pb-6 sm:text-base">
                      {pick(faq.answer, lang)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}