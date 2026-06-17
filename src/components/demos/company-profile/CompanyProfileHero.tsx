import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { brand } from "@/data/demos/company-profile/brand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

const heroCopy = {
  id: {
    badge: "Konsultan Bisnis & Operasional",
    h1: "Konsultan operasional yang membantu bisnis jasa tampil dan berjalan lebih rapi",
    sub: "Untuk UMKM naik kelas, perusahaan lokal, dan vendor B2B yang ingin operasional, layanan, dan presentasi bisnis lebih terstruktur.",
    ctaPrimary: "Jadwalkan Konsultasi Awal",
    ctaSecondary: "Chat via WhatsApp",
    footnote: "Konsultasi awal untuk memahami kebutuhan — tanpa komitmen proyek.",
    visualDemo: "Demo simulasi",
    visualOnline: "Online",
    visualCta: "Jadwalkan Konsultasi Awal",
  },
  en: {
    badge: "Business & operations consulting",
    h1: "Operations consulting that helps service businesses look and run more clearly",
    sub: "For growing SMBs, local companies, and B2B vendors who want structured operations, services, and business presence.",
    ctaPrimary: "Book an initial consultation",
    ctaSecondary: "Chat on WhatsApp",
    footnote: "Initial consultation to understand your needs — no project commitment.",
    visualDemo: "Simulation demo",
    visualOnline: "Online",
    visualCta: "Book an initial consultation",
  },
} as const;

type HeroCopy = (typeof heroCopy)[Lang];

export function CompanyProfileHero() {
  const { lang } = useLang();
  const copy = heroCopy[lang];
  const whatsappUrl = buildWhatsAppUrl(brand.heroWhatsappIntro[lang]);

  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #4C1D95 100%)",
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {copy.badge}
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            {copy.sub}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-blue-100/80 sm:text-base">
            {brand.description[lang]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {brand.trustChips[lang].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-blue-100"
              >
                <CheckCircle2
                  className="h-3.5 w-3.5 text-cyan-300"
                  aria-hidden
                />
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#inquiry"
              size="lg"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "cp_hero_primary",
                })
              }
            >
              {copy.ctaPrimary}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "cp_hero_secondary",
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {copy.ctaSecondary}
            </Button>
          </div>
          <p className="mt-3 text-xs text-blue-200/80">{copy.footnote}</p>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual lang={lang} copy={copy} />
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({
  lang,
  copy,
}: {
  lang: Lang;
  copy: HeroCopy;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #06B6D4 0%, #2563EB 50%, #7C3AED 100%)",
        }}
        aria-hidden
      />
      <div className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-md sm:p-6">
        <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-500 text-[10px] font-bold text-white">
            AR
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white">{brand.name[lang]}</p>
            <p className="text-[10px] text-blue-200/70">{copy.visualDemo}</p>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
            {copy.visualOnline}
          </span>
        </div>

        <div className="space-y-3">
          {brand.trustStats.map((stat) => (
            <div
              key={stat.label[lang]}
              className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3"
            >
              <span className="text-xs text-blue-100/80">{stat.label[lang]}</span>
              <span className="text-base font-bold text-white">
                {stat.value[lang]}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-cta-gradient p-3 text-center text-xs font-semibold text-white">
          {copy.visualCta}
        </div>
      </div>
    </div>
  );
}