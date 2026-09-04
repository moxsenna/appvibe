import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/contact/faq";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const uid = useId().replace(/:/g, "");

  return (
    <section className="border-t border-av-border">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            Pertanyaan tentang konsultasi
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink sm:text-3xl">
            Sebelum Anda kirim pesan
          </h2>
        </div>
        <div className="mt-8 max-w-3xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${uid}-${idx}`}
                >
                  <span className="text-[15px] font-medium text-av-ink">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-av-muted transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  id={`faq-panel-${uid}-${idx}`}
                  role="region"
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-av-secondary">
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
