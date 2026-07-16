import {
  Code2,
  MessageCircle,
  Monitor,
  Smartphone,
  Layout,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { useDict } from "@/i18n/use-dict";
import { useLang } from "@/i18n/use-lang";

export function HeroVisualStack() {
  const { lang } = useLang();

  // Floating chips mirror real hero stats — not fake "24 leads / 68%" metrics.
  const floatingStats = [
    {
      label: lang === "id" ? "Respons WA" : "WA reply",
      value: "≤ 24j",
      icon: MessageCircle,
    },
    {
      label: lang === "id" ? "Mulai dari" : "Start with",
      value: lang === "id" ? "1 layanan" : "1 service",
      icon: Zap,
    },
  ];

  const cardLabels =
    lang === "id"
      ? ["Website", "WhatsApp", "Dashboard"]
      : ["Website", "WhatsApp", "Dashboard"];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="animate-float-slow">
        <MockupFrame
          title="appvibe.web.id/preview"
          className="border-slate-600 shadow-glow ring-2 ring-white/15"
        >
          <div className="flex h-full min-h-[280px] flex-col gap-4 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <div className="h-3.5 w-32 rounded-full bg-cta-gradient shadow-sm" />
              <div className="flex gap-1.5">
                <span className="h-2.5 w-12 rounded-md bg-brand-cyan/60" />
                <span className="h-2.5 w-12 rounded-md bg-brand-violet/60" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[Monitor, MessageCircle, Layout].map((Icon, i) => (
                <div
                  key={cardLabels[i]}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-md"
                >
                  <Icon className="h-4 w-4 text-brand-blue" aria-hidden />
                  <p className="text-[9px] font-semibold text-slate-600">
                    {cardLabels[i]}
                  </p>
                  <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                </div>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <div className="h-2 w-3/4 rounded bg-slate-400" />
                <div className="mt-2 h-10 rounded-lg bg-gradient-to-r from-blue-500/30 to-violet-500/30" />
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <div className="h-2 w-1/2 rounded bg-slate-400" />
                <div className="mt-2 flex gap-1.5">
                  <span className="h-8 flex-1 rounded-md bg-brand-cyan/50" />
                  <span className="h-8 flex-1 rounded-md bg-brand-violet/50" />
                </div>
              </div>
            </div>
          </div>
        </MockupFrame>
      </div>

      <div className="absolute -bottom-2 -right-1 z-10 hidden animate-float-delay xl:block xl:-right-6">
        <MockupFrame
          variant="phone"
          className="w-[160px] scale-[0.82] border-slate-700 shadow-glow-cyan ring-2 ring-cyan-400/25"
        >
          <div className="flex h-32 flex-col items-center justify-center gap-2 bg-gradient-to-b from-slate-100 to-white p-3">
            <Smartphone className="h-5 w-5 text-brand-cyan" aria-hidden />
            <p className="text-[10px] font-bold text-brand-navy">Mobile-first</p>
            <div className="h-2 w-14 rounded-full bg-brand-cyan/40" />
          </div>
        </MockupFrame>
      </div>

      {floatingStats.map((stat, i) => (
        <div
          key={stat.label}
          className={`absolute z-20 hidden rounded-xl border border-white/25 bg-slate-950/95 p-3 shadow-lg backdrop-blur-md xl:block ${
            i === 0
              ? "-left-1 top-6 xl:-left-6"
              : "right-0 top-1/2 -translate-y-1/2 xl:-right-4"
          }`}
          style={{ boxShadow: "0 8px 32px 0 rgb(15 23 42 / 0.35)" }}
        >
          <div className="flex items-center gap-2">
            <stat.icon className="h-4 w-4 text-brand-cyan" aria-hidden />
            <div>
              <p className="text-[10px] text-slate-400">{stat.label}</p>
              <p className="text-sm font-bold text-white">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 z-20 hidden rounded-lg border border-cyan-400/40 bg-slate-950/90 px-3 py-2 backdrop-blur-sm lg:block xl:-left-8">
        <div className="flex items-center gap-2 text-xs">
          <Code2 className="h-4 w-4 text-brand-cyan" aria-hidden />
          <span className="font-mono text-[10px] font-medium text-slate-200">
            responsive · scalable
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroLabelChips() {
  const { pages } = useDict();
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {pages.home.hero.labels.map((label) => (
        <Badge
          key={label}
          className="border-white/20 bg-white/10 text-xs font-medium text-slate-100"
        >
          {label}
        </Badge>
      ))}
    </div>
  );
}

export function HeroStatsBar() {
  const { pages } = useDict();
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/20 pt-10 sm:grid-cols-4">
      {pages.home.hero.stats.map((stat) => (
        <div key={stat.label} className="text-center sm:text-left">
          <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
