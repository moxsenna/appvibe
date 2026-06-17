import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/demos/webinar-landing/faq";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingFAQ() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
            {copy.eyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {copy.title[lang]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {copy.subtitle[lang]}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-border overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question[lang]}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-light sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-navy sm:text-base">
                    {faq.question[lang]}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-violet transition-transform duration-200",
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
                      {faq.answer[lang]}
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