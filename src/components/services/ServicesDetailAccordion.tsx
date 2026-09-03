import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";

export function ServicesDetailAccordion() {
  const { lang } = useLang();
  const dict = useDict();
  const [activeId, setActiveId] = useState<string | null>(services[0]?.id ?? null);

  return (
    <section id="layanan-detail" className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {dict.pages.services.detail.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {dict.pages.services.detail.title}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
            {dict.pages.services.detail.subtitle}
          </p>
        </div>

        <div className="mt-10 max-w-4xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
          {services.map((service, index) => {
            const isActive = activeId === service.id;
            return (
              <div key={service.id} id={`layanan-${service.id}`} className="scroll-mt-24">
                <button
                  type="button"
                  onClick={() => setActiveId(isActive ? null : service.id)}
                  className="flex w-full items-baseline gap-4 py-5 text-left sm:gap-6"
                  aria-expanded={isActive}
                >
                  <span className="font-mono text-xs text-av-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base font-semibold text-av-ink sm:text-lg">
                    {service.title[lang]}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 self-center text-av-muted transition-transform duration-200",
                      isActive && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-6 pb-6 pl-0 sm:pl-10">
                      <p className="max-w-[64ch] text-[15px] leading-relaxed text-av-text">
                        {service.description[lang]}
                      </p>
                      <div className="grid gap-6 sm:grid-cols-3">
                        <DetailColumn
                          title={dict.pages.services.detail.idealForLabel}
                          items={service.idealFor[lang]}
                        />
                        <DetailColumn
                          title={dict.pages.services.detail.featuresLabel}
                          items={service.features[lang]}
                        />
                        <DetailColumn
                          title={dict.pages.services.detail.deliverablesLabel}
                          items={service.deliverables[lang]}
                        />
                      </div>
                    </div>
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

function DetailColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-av-muted">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-av-secondary"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-av-signal" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
