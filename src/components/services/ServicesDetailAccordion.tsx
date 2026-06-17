import { useState } from "react";
import { CheckCircle2, ChevronDown, Sparkles } from "lucide-react";
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
    <section id="layanan-detail" className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {dict.pages.services.detail.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {dict.pages.services.detail.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {dict.pages.services.detail.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-3">
            {services.map((service) => {
              const isActive = activeId === service.id;
              return (
                <div
                  key={service.id}
                  id={`layanan-${service.id}`}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow",
                    isActive
                      ? "border-brand-blue shadow-card-hover"
                      : "border-brand-border hover:shadow-card",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(isActive ? null : service.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors sm:px-6 sm:py-5"
                    aria-expanded={isActive}
                  >
                    <div className="flex flex-1 items-center gap-3">
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition-colors",
                          isActive ? "bg-cta-gradient" : "bg-slate-200 text-brand-navy",
                        )}
                      >
                        <Sparkles className="h-4 w-4" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-brand-navy sm:text-lg">
                          {service.title[lang]}
                        </h3>
                        <p className="text-xs text-brand-muted sm:text-sm">
                          {service.shortDescription[lang]}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-muted transition-transform duration-200",
                        isActive && "rotate-180 text-brand-blue",
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
                      <div className="space-y-5 border-t border-brand-border px-5 py-5 sm:px-6 sm:py-6">
                        <p className="text-sm leading-relaxed text-brand-muted sm:text-base">
                          {service.description[lang]}
                        </p>
                        <div className="grid gap-5 sm:grid-cols-3">
                          <DetailColumn
                            title={dict.pages.services.detail.idealForLabel}
                            items={service.idealFor[lang]}
                            tone="blue"
                          />
                          <DetailColumn
                            title={dict.pages.services.detail.featuresLabel}
                            items={service.features[lang]}
                            tone="violet"
                          />
                          <DetailColumn
                            title={dict.pages.services.detail.deliverablesLabel}
                            items={service.deliverables[lang]}
                            tone="emerald"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DetailColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "blue" | "violet" | "emerald";
}) {
  const toneClass = {
    blue: "text-brand-blue",
    violet: "text-brand-violet",
    emerald: "text-emerald-600",
  }[tone];
  return (
    <div>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-widest",
          toneClass,
        )}
      >
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-brand-muted"
          >
            <CheckCircle2
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                tone === "emerald"
                  ? "text-emerald-500"
                  : tone === "violet"
                  ? "text-violet-500"
                  : "text-brand-blue",
              )}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
