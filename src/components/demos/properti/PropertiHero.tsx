import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/data/demos/properti/brand";
import { listings, listingStatusLabels, listingTypeLabels } from "@/data/demos/properti/listings";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";
import type { Localized } from "@/i18n/localized";

const featured = listings[0];

const trustChips: Localized<string>[] = [
  {
    id: "6 listing terkurasi",
    en: "6 curated listings",
  },
  {
    id: "Filter tipe, lokasi, status",
    en: "Filter by type, location, status",
  },
  {
    id: "Konsultasi awal gratis",
    en: "Free initial consultation",
  },
];

const heroCopy: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    askListing: string;
    featured: string;
    priceNote: string;
  }
> = {
  id: {
    eyebrow: "Properti & Konstruksi",
    title: "Listing properti dan proyek dengan informasi yang lebih jelas",
    askListing: "Tanya Listing",
    featured: "Featured Listing",
    priceNote: "*Kisaran harga, dapat berubah saat survei",
  },
  en: {
    eyebrow: "Property & construction",
    title: "Property and project listings with clearer information",
    askListing: "Ask About a Listing",
    featured: "Featured listing",
    priceNote: "*Indicative range; may change after a site visit",
  },
};

export function PropertiHero() {
  const { lang } = useLang();
  const copy = heroCopy[lang];
  const whatsappUrl = buildWhatsAppUrl(brand.phone[lang].replace(/[^0-9]/g, ""));

  return (
    <section
      id="top"
      className="text-white"
      style={{ backgroundColor: brand.primaryColor }}
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-emerald-100">
            {copy.eyebrow}
          </p>
          <h1 className="font-display text-display-lg font-normal tracking-tight text-white">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-emerald-50 sm:text-lg">
            {brand.oneLiner[lang]}
          </p>
          <p className="mt-2 max-w-[58ch] text-xs italic leading-relaxed text-emerald-100/90 sm:text-sm">
            {brand.disclaimer[lang]}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <li
                key={chip.id}
                className="rounded-[3px] border border-white/25 px-2.5 py-1 text-xs font-medium text-emerald-50"
              >
                {chip[lang]}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#survei"
              size="lg"
              className="bg-white text-emerald-900 hover:bg-emerald-50"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "properti_hero_primary",
                })
              }
            >
              {brand.mainCta[lang]}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              size="lg"
              className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "properti_hero_secondary",
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {copy.askListing}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <FeaturedListingCard listing={featured} lang={lang} copy={copy} />
        </div>
      </Container>
    </section>
  );
}

function FeaturedListingCard({
  listing,
  lang,
  copy,
}: {
  listing: (typeof listings)[number];
  lang: Lang;
  copy: (typeof heroCopy)[Lang];
}) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-white/20 bg-white text-av-ink lg:sticky lg:top-24">
      <div
        className="px-5 pb-5 pt-4"
        style={{ backgroundColor: brand.primaryColor }}
      >
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-[3px] bg-white/15 px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-white">
            {listingTypeLabels[listing.typeKey][lang]}
          </span>
          <span className="rounded-[3px] bg-white px-2 py-0.5 text-[11px] font-medium text-emerald-800">
            {listingStatusLabels[listing.statusKey][lang]}
          </span>
        </div>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-100">
          {copy.featured}
        </p>
        <h3 className="mt-1 font-display text-2xl font-normal tracking-tight text-white">{listing.title[lang]}</h3>
        <p className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-50">
          <MapPin className="h-3.5 w-3.5" aria-hidden /> {listing.location[lang]}
        </p>
      </div>
      <div className="px-5 py-5">
        <p className="font-display text-3xl text-av-ink">
          {listing.priceRange[lang]}
        </p>
        <p className="mt-0.5 text-[11px] italic text-av-muted">{copy.priceNote}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {listing.highlights[lang].slice(0, 3).map((h) => (
            <span
              key={h}
              className="rounded-[3px] border border-av-border bg-av-canvas px-2 py-0.5 text-[11px] text-av-secondary"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}