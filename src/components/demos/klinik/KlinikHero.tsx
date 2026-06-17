import { ArrowRight, Clock, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { klinik, klinikCopy } from "@/data/demos/klinik";
import { CLINIC_EXPERTS } from "@/data/demos/clinic";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikHero() {
  const { lang } = useLang();
  const copy = klinikCopy.hero;
  const whatsappUrl = buildWhatsAppUrl(
    pick(copy.waHeroIntro, lang).replace("{name}", pick(klinik.name, lang)),
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, ${klinik.primaryColor} 0%, #0F766E 50%, #134E4A 100%)`,
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-300/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            {pick(copy.badge, lang)}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {pick(copy.headline, lang)}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-cyan-50 sm:text-lg">
            {pick(klinik.tagline, lang)}. {pick(copy.subIntro, lang)}
          </p>
          <p className="mt-3 text-xs italic text-cyan-100/80 sm:text-sm">
            {pick(klinik.disclaimer, lang)}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {pick(copy.trustChips, lang).map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cyan-50"
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappUrl}
              size="lg"
              className="bg-white text-teal-700 hover:bg-cyan-50"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "klinik_hero_primary",
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {pick(klinik.mainCta, lang)}
            </Button>
            <Button
              href="#layanan"
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              {pick(klinik.secondaryCta, lang)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual lang={lang} />
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({ lang }: { lang: "id" | "en" }) {
  const copy = klinikCopy.hero;
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-300/30 via-white/10 to-emerald-300/30 opacity-50 blur-2xl"
        aria-hidden
      />
      <div className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-md sm:p-6">
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-cyan-500 text-[10px] font-bold text-white">
            NC
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white">
              {pick(klinik.name, lang)}
            </p>
            <p className="text-[10px] text-cyan-100/70">
              {pick(copy.demoSimLabel, lang)}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-200">
              {pick(copy.visualAppointmentLabel, lang)}
            </p>
            <p className="mt-1.5 text-sm font-semibold text-white">
              {pick(copy.visualAppointmentTitle, lang)}
            </p>
            <p className="mt-0.5 text-[11px] text-cyan-100/80">
              {pick(copy.visualAppointmentSlots, lang)}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-200">
              {pick(copy.visualScheduleLabel, lang)}
            </p>
            <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
              <Clock className="h-3.5 w-3.5" aria-hidden />{" "}
              {pick(copy.visualScheduleWeek, lang)}
            </p>
            <p className="mt-0.5 text-[11px] text-cyan-100/80">
              {pick(copy.visualScheduleWeekend, lang)}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-200">
              {pick(copy.visualExpertsLabel, lang)}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {CLINIC_EXPERTS.slice(0, 4).map((e) => (
                <span
                  key={e.id}
                  className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white ${e.gradient}`}
                  title={pick(e.name, lang)}
                >
                  {e.initials}
                </span>
              ))}
              <span className="text-[11px] text-cyan-100/80">
                {pick(copy.visualExpertsCount, lang)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-cta-gradient p-3 text-center text-xs font-semibold text-white">
          {pick(copy.visualWaCta, lang)}
        </div>
      </div>
    </div>
  );
}