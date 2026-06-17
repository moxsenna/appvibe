import { Calendar, MessageCircle, Sparkles } from "lucide-react";
import { CLINIC_SCHEDULE } from "@/data/demos/clinic";
import { klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

const dayKeyIndex: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

export function KlinikSchedule() {
  const { lang } = useLang();
  const section = klinikCopy.schedule;
  const today = new Date().getDay();

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
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {pick(section.subtitle, lang)}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
          {CLINIC_SCHEDULE.map((day) => {
            const isToday = dayKeyIndex[day.dayKey] === today;
            const ctaText = pick(day.cta, lang);
            const wa = buildWhatsAppUrl(
              pick(section.waTemplate, lang).replace("{cta}", ctaText),
            );
            const dayLabel = pick(day.day, lang);
            return (
              <Card
                key={day.dayKey}
                className={cn(
                  "flex flex-col",
                  isToday
                    ? "border-2 border-teal-400 bg-teal-50/40 shadow-card-hover"
                    : "border-brand-border bg-white shadow-card",
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-brand-navy">{dayLabel}</p>
                  {isToday && (
                    <Badge className="border-teal-200 bg-teal-100 text-[10px] text-teal-700">
                      <Sparkles className="mr-1 h-3 w-3" aria-hidden />{" "}
                      {pick(section.todayBadge, lang)}
                    </Badge>
                  )}
                </div>
                <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-brand-muted">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />{" "}
                  {pick(day.hours, lang)}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {pick(section.servicesLabel, lang)}
                </p>
                <p className="mt-1 text-xs text-brand-dark">
                  {pick(day.services, lang)}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {pick(section.expertsLabel, lang)}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-brand-dark">
                  {pick(day.experts, lang)}
                </p>
                <div className="mt-auto pt-3">
                  <Button
                    href={wa}
                    variant="outline"
                    size="sm"
                    className="w-full border-teal-300 text-teal-700 hover:bg-teal-50"
                    onClick={() =>
                      trackEvent("cta_whatsapp_click", {
                        location: "klinik_schedule_day",
                        day: day.dayKey,
                      })
                    }
                  >
                    <MessageCircle className="h-3.5 w-3.5" aria-hidden /> {ctaText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}