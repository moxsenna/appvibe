import { Database, Radio, Zap } from "lucide-react";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import type { ShowcaseSource } from "@/hooks/useShowcaseLeads";

type Props = {
  source: ShowcaseSource;
  isRealtime: boolean;
};

export function LeadDashboardLiveBadge({ source, isRealtime }: Props) {
  const { lang } = useLang();
  const copy = leadDashboardCopy.liveBadge;
  const isLive = source === "supabase";

  return (
    <section className="bg-slate-50 py-6 sm:py-8">
      <Container>
        <div
          className={cn(
            "mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5",
            isLive
              ? "border-emerald-200 bg-emerald-50/60"
              : "border-amber-200 bg-amber-50/50",
          )}
          role="status"
        >
          <span
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm",
              isLive ? "bg-emerald-500" : "bg-amber-500",
            )}
            aria-hidden
          >
            <Database className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest",
                isLive ? "text-emerald-700" : "text-amber-700",
              )}
            >
              {isLive ? copy.liveTitle[lang] : copy.fallbackTitle[lang]}
            </p>
            <p
              className={cn(
                "mt-0.5 text-sm leading-relaxed",
                isLive ? "text-emerald-900" : "text-amber-900",
              )}
            >
              {isLive ? copy.liveBody[lang] : copy.fallbackBody[lang]}
            </p>
          </div>
          {isLive && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 self-start rounded-full border px-3 py-1 text-xs font-semibold sm:self-center",
                isRealtime
                  ? "border-emerald-300 bg-white text-emerald-700"
                  : "border-slate-200 bg-white text-slate-500",
              )}
              aria-label={
                isRealtime ? copy.realtimeAriaOn[lang] : copy.realtimeAriaOff[lang]
              }
            >
              {isRealtime ? (
                <>
                  <Radio className="h-3.5 w-3.5 animate-pulse" aria-hidden />
                  {copy.realtime[lang]}
                </>
              ) : (
                <>
                  <Zap className="h-3.5 w-3.5" aria-hidden />
                  {copy.connecting[lang]}
                </>
              )}
            </span>
          )}
        </div>
      </Container>
    </section>
  );
}