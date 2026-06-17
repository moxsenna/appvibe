import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";

export function FAQSection() {
  const { lang } = useLang();
  const dict = useDict();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="section-padding bg-white reveal-on-scroll">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="premium-eyebrow">
            {dict.pages.home.faq.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">
            {dict.pages.home.faq.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {dict.pages.home.faq.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={cn(
                  "overflow-hidden rounded-xl border bg-white transition-all duration-200",
                  isOpen
                    ? "border-brand-blue/30 shadow-card-hover"
                    : "border-brand-border shadow-card",
                )}
              >
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-3 px-4 text-left transition-colors hover:bg-brand-light/30 sm:px-5",
                    isOpen ? "py-4" : "py-3",
                  )}
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold transition-colors",
                      isOpen
                        ? "bg-cta-gradient text-white"
                        : "bg-brand-light text-brand-muted",
                    )}
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-brand-navy sm:text-base">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-brand-muted transition-transform duration-200",
                      isOpen && "rotate-180 text-brand-blue",
                    )}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-brand-border/60 px-4 pb-4 pt-0 sm:px-5">
                    <p className="text-sm leading-relaxed text-brand-muted">
                      {item.answer[lang]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
