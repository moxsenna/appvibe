import { Clock, MessageCircleQuestion } from "lucide-react";
import { agenda } from "@/data/demos/webinar-landing/agenda";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingAgenda() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.agenda;

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

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-violet-300 via-violet-300/50 to-transparent sm:left-8"
            aria-hidden
          />
          <ol className="space-y-5">
            {agenda.map((item) => {
              const isQna = item.type === "qna";
              return (
                <li key={item.number} className="relative flex gap-4 sm:gap-6">
                  <div
                    className={cn(
                      "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md sm:h-16 sm:w-16 sm:text-base",
                      isQna
                        ? "bg-gradient-to-br from-amber-500 to-amber-600"
                        : "bg-gradient-to-br from-violet-500 to-blue-500",
                    )}
                  >
                    {isQna ? (
                      <MessageCircleQuestion
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        aria-hidden
                      />
                    ) : (
                      item.number
                    )}
                  </div>
                  <div className="flex-1 rounded-2xl border border-brand-border bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-brand-navy sm:text-lg">
                        {item.title[lang]}
                      </h3>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          isQna
                            ? "bg-amber-50 text-amber-700"
                            : "bg-blue-50 text-brand-blue",
                        )}
                      >
                        <Clock className="h-3 w-3" aria-hidden />{" "}
                        {item.duration[lang]}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-base">
                      {item.description[lang]}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}