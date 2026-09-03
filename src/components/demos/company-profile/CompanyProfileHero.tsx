import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
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
    visualDemo: "Contoh tampilan",
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
    visualDemo: "Sample preview",
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
      className="text-white"
      style={{ backgroundColor: "#1E3A8A" }}
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-blue-200">
            {copy.badge}
          </p>

          <h1 className="font-display text-display-lg font-normal tracking-tight text-white">
            {copy.h1}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-blue-100 sm:text-lg">
            {copy.sub}
          </p>
          <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-blue-200/90 sm:text-base">
            {brand.description[lang]}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {brand.trustChips[lang].map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-[3px] border border-white/25 px-2.5 py-1 text-xs font-medium text-blue-50"
              >
                <CheckCircle2
                  className="h-3.5 w-3.5 text-blue-200"
                  aria-hidden
                />
                {chip}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#inquiry"
              size="lg"
              className="bg-white text-av-ink hover:bg-av-canvas"
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
              className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
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
    <div className="overflow-hidden rounded-[4px] border border-white/20 bg-white text-av-ink lg:sticky lg:top-24">
      <div className="flex items-center gap-2.5 border-b border-av-border px-5 py-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#1E3A8A] font-mono text-xs text-white">
          AR
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-av-ink">{brand.name[lang]}</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">{copy.visualDemo}</p>
        </div>
        <span className="rounded-[3px] bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
          {copy.visualOnline}
        </span>
      </div>

      <dl className="divide-y divide-av-border-soft">
        {brand.trustStats.map((stat) => (
          <div
            key={stat.label[lang]}
            className="flex items-baseline justify-between gap-4 px-5 py-3.5"
          >
            <dt className="text-[13px] text-av-secondary">{stat.label[lang]}</dt>
            <dd className="font-display text-xl text-av-ink">
              {stat.value[lang]}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-av-border px-5 py-4">
        <p className="rounded bg-[#1E3A8A] px-4 py-3 text-center text-sm font-semibold text-white">
          {copy.visualCta}
        </p>
      </div>
    </div>
  );
}
