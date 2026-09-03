import { ArrowRight, Clock, MessageCircle, ShieldCheck } from "lucide-react";
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
      className="text-white"
      style={{ backgroundColor: "#0B5E57" }}
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-teal-100">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            {pick(copy.badge, lang)}
          </p>
          <h1 className="font-display text-display-lg font-normal tracking-tight text-white">
            {pick(copy.headline, lang)}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-teal-50 sm:text-lg">
            {pick(klinik.tagline, lang)}. {pick(copy.subIntro, lang)}
          </p>
          <p className="mt-3 max-w-[58ch] text-xs italic leading-relaxed text-teal-100/90 sm:text-sm">
            {pick(klinik.disclaimer, lang)}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {pick(copy.trustChips, lang).map((chip) => (
              <li
                key={chip}
                className="rounded-[3px] border border-white/25 px-2.5 py-1 text-xs font-medium text-teal-50"
              >
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={whatsappUrl}
              size="lg"
              className="bg-white text-teal-900 hover:bg-teal-50"
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
              className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
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
    <div className="overflow-hidden rounded-[4px] border border-white/20 bg-white text-av-ink lg:sticky lg:top-24">
      <div className="flex items-center gap-2.5 border-b border-av-border px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#0B5E57] font-mono text-xs text-white">
          NC
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-av-ink">
            {pick(klinik.name, lang)}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
            {pick(copy.demoSimLabel, lang)}
          </p>
        </div>
      </div>

      <div className="space-y-4 px-5 py-5">
        <div className="rounded border border-av-border px-4 py-3.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
            {pick(copy.visualAppointmentLabel, lang)}
          </p>
          <p className="mt-1.5 text-[15px] font-semibold text-av-ink">
            {pick(copy.visualAppointmentTitle, lang)}
          </p>
          <p className="mt-0.5 text-xs text-av-secondary">
            {pick(copy.visualAppointmentSlots, lang)}
          </p>
        </div>
        <div className="rounded border border-av-border px-4 py-3.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
            {pick(copy.visualScheduleLabel, lang)}
          </p>
          <p className="mt-1.5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-av-ink">
            <Clock className="h-4 w-4 text-[#0B5E57]" aria-hidden />{" "}
            {pick(copy.visualScheduleWeek, lang)}
          </p>
          <p className="mt-0.5 text-xs text-av-secondary">
            {pick(copy.visualScheduleWeekend, lang)}
          </p>
        </div>
        <div className="rounded border border-av-border px-4 py-3.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
            {pick(copy.visualExpertsLabel, lang)}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            {CLINIC_EXPERTS.slice(0, 4).map((e) => (
              <span
                key={e.id}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B5E57] font-mono text-[11px] text-white"
                title={pick(e.name, lang)}
              >
                {e.initials}
              </span>
            ))}
            <span className="ml-1 text-xs text-av-secondary">
              {pick(copy.visualExpertsCount, lang)}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-av-border px-5 py-4">
        <p className="rounded bg-[#0B5E57] px-4 py-3 text-center text-sm font-semibold text-white">
          {pick(copy.visualWaCta, lang)}
        </p>
      </div>
    </div>
  );
}
