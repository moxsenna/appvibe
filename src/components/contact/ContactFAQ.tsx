import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/contact/faq";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Pertanyaan tentang konsultasi
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            Sebelum Anda kirim pesan
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-border overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-light sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-brand-navy sm:text-base">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200",
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
                      {faq.answer}
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
