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
    <section id="faq" className="border-t border-av-border bg-av-surface scroll-mt-20">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {dict.pages.home.faq.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {dict.pages.home.faq.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-av-text">
            {dict.pages.home.faq.subtitle}
          </p>
        </div>

        <div className="mt-8 max-w-3xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span className="text-[15px] font-medium text-av-ink">
                    {item.question[lang]}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-av-muted transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-av-secondary">
                    {item.answer[lang]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
