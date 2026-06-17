import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { brand } from "@/data/demos/properti/brand";
import { listings, listingStatusLabels, listingTypeLabels } from "@/data/demos/properti/listings";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";
import type { Localized } from "@/i18n/localized";

const featured = listings[0];

const trustChips: Localized<string>[] = [
  {
    id: "6 listing contoh (simulasi)",
    en: "6 sample listings (simulation)",
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
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, ${brand.primaryColor} 0%, #134E4A 50%, ${brand.accentColor} 100%)`,
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-200">
            {copy.eyebrow}
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-emerald-50 sm:text-lg">
            {brand.oneLiner[lang]}
          </p>
          <p className="mt-2 text-xs italic text-emerald-100/80 sm:text-sm">
            {brand.disclaimer[lang]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <span
                key={chip.id}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-50"
              >
                {chip[lang]}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#survei"
              size="lg"
              className="bg-white text-emerald-800 hover:bg-emerald-50"
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
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
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
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-300/20 via-white/10 to-cyan-300/20 opacity-50 blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur-md">
        <div
          className="h-40 sm:h-48"
          style={{
            backgroundImage: `linear-gradient(135deg, ${brand.primaryColor} 0%, ${brand.accentColor} 100%)`,
          }}
          aria-hidden
        >
          <div className="flex h-full items-end justify-between p-4">
            <Badge className="border border-white/20 bg-white/15 text-white">
              {listingTypeLabels[listing.typeKey][lang]}
            </Badge>
            <Badge className="border border-emerald-200 bg-emerald-100/90 text-emerald-800">
              {listingStatusLabels[listing.statusKey][lang]}
            </Badge>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-200">
            {copy.featured}
          </p>
          <h3 className="mt-1 text-lg font-bold text-white">{listing.title[lang]}</h3>
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-100/80">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> {listing.location[lang]}
          </p>
          <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
            {listing.priceRange[lang]}
          </p>
          <p className="mt-0.5 text-[10px] italic text-emerald-100/70">{copy.priceNote}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {listing.highlights[lang].slice(0, 3).map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] text-emerald-50"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}