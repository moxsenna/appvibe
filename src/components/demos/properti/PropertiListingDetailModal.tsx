import { useEffect } from "react";
import {
  X,
  MapPin,
  Maximize2,
  Home,
  BedDouble,
  Bath,
  MessageCircle,
  ImageIcon,
  Info,
} from "lucide-react";
import type { Listing } from "@/data/demos/properti/listings";
import {
  listingStatusLabels,
  listingTypeLabels,
} from "@/data/demos/properti/listings";
import { brand } from "@/data/demos/properti/brand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { whatsappPrefill } from "@/data/demos/properti/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

type PropertiListingDetailModalProps = {
  listing: Listing | null;
  onClose: () => void;
};

const modalCopy: Record<
  Lang,
  {
    simVisual: string;
    closeAria: string;
    priceLabel: string;
    priceNote: string;
    land: string;
    building: string;
    bedrooms: string;
    bathrooms: string;
    highlight: string;
    facilities: string;
    gallery: string;
    galleryNote: string;
    photoSim: (n: number) => string;
    askUnit: string;
    scheduleVisit: string;
    defaultNeed: string;
    defaultVisit: string;
  }
> = {
  id: {
    simVisual: "Contoh visual simulasi",
    closeAria: "Tutup detail listing",
    priceLabel: "Kisaran harga",
    priceNote: "*Dapat berubah saat survei",
    land: "Luas tanah",
    building: "Luas bangunan",
    bedrooms: "Kamar tidur",
    bathrooms: "Kamar mandi",
    highlight: "Highlight",
    facilities: "Fasilitas sekitar",
    gallery: "Galeri visual",
    galleryNote:
      "Galeri contoh visual simulasi. Foto asli tersedia saat survei lokasi atau pertemuan dengan tim GrahaNusa.",
    photoSim: (n) => `Foto ${n} (simulasi)`,
    askUnit: "Tanya Unit Ini",
    scheduleVisit: "Jadwalkan Survei",
    defaultNeed: "Hunian pribadi / keluarga",
    defaultVisit: "Belum pasti, diskusi dulu",
  },
  en: {
    simVisual: "Simulated sample visual",
    closeAria: "Close listing details",
    priceLabel: "Price range",
    priceNote: "*May change after a site visit",
    land: "Land area",
    building: "Building area",
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    highlight: "Highlights",
    facilities: "Nearby amenities",
    gallery: "Visual gallery",
    galleryNote:
      "Simulated sample gallery. Actual photos are available during a site visit or meeting with the GrahaNusa team.",
    photoSim: (n) => `Photo ${n} (simulation)`,
    askUnit: "Ask About This Unit",
    scheduleVisit: "Schedule a Visit",
    defaultNeed: "Personal / family home",
    defaultVisit: "Not sure yet — discuss first",
  },
};

const dash = "—";

const NEED_PLACEHOLDER =
  "[pilih: Hunian / Investasi / Komersial / Renovasi / Interior / Konsultasi]";
const VISIT_PLACEHOLDER =
  "[pilih: Minggu ini / Minggu depan / 2 minggu / Belum pasti]";

export function PropertiListingDetailModal({
  listing,
  onClose,
}: PropertiListingDetailModalProps) {
  const { lang } = useLang();
  const copy = modalCopy[lang];

  useEffect(() => {
    if (!listing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [listing, onClose]);

  if (!listing) return null;

  const wa = buildWhatsAppUrl(
    whatsappPrefill[lang]
      .replace("[nama]", lang === "id" ? "(nama)" : "(name)")
      .replace("[pilih listing]", listing.title[lang])
      .replace(NEED_PLACEHOLDER, copy.defaultNeed)
      .replace(VISIT_PLACEHOLDER, copy.defaultVisit),
  );

  const statusTone = {
    tersedia: "border-emerald-200 bg-emerald-50 text-emerald-700",
    "pre-order": "border-amber-200 bg-amber-50 text-amber-700",
    "slot-terbatas": "border-rose-200 bg-rose-50 text-rose-700",
  }[listing.statusKey];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="properti-modal-title"
    >
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div
          className="relative h-44 sm:h-56"
          style={{
            backgroundImage: `linear-gradient(135deg, ${brand.primaryColor} 0%, ${brand.accentColor} 100%)`,
          }}
        >
          <div className="absolute bottom-4 left-5 flex flex-wrap items-center gap-2 sm:left-6">
            <Badge className="border border-white/20 bg-white/15 text-white">
              {listingTypeLabels[listing.typeKey][lang]}
            </Badge>
            <Badge className={`border-0 ${statusTone}`}>
              {listingStatusLabels[listing.statusKey][lang]}
            </Badge>
          </div>
          <span className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
            {copy.simVisual}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={copy.closeAria}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-md transition-colors hover:bg-white"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>

        <div className="p-6 sm:p-8">
          <p className="inline-flex items-center gap-1 text-xs text-brand-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> {listing.location[lang]}
          </p>
          <h3
            id="properti-modal-title"
            className="mt-1 text-2xl font-bold text-brand-navy"
          >
            {listing.title[lang]}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            {listing.description[lang]}
          </p>

          <div className="mt-5 grid gap-4 rounded-xl border border-brand-border bg-brand-light p-4 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
                {copy.priceLabel}
              </p>
              <p className="mt-1 text-lg font-bold text-brand-navy">
                {listing.priceRange[lang]}
              </p>
              <p className="text-[10px] italic text-brand-muted">{copy.priceNote}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {listing.landSize[lang] !== dash && (
                <Spec icon={Maximize2} label={copy.land} value={listing.landSize[lang]} />
              )}
              {listing.buildingSize[lang] !== dash && (
                <Spec icon={Home} label={copy.building} value={listing.buildingSize[lang]} />
              )}
              {listing.bedrooms[lang] !== dash && (
                <Spec icon={BedDouble} label={copy.bedrooms} value={listing.bedrooms[lang]} />
              )}
              {listing.bathrooms[lang] !== dash && (
                <Spec icon={Bath} label={copy.bathrooms} value={listing.bathrooms[lang]} />
              )}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {copy.highlight}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {listing.highlights[lang].map((h) => (
                <Badge key={h} variant="cyan">
                  {h}
                </Badge>
              ))}
            </div>
          </div>

          {listing.facilities[lang].length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                {copy.facilities}
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-brand-muted">
                {listing.facilities[lang].map((f) => (
                  <li key={f} className="inline-flex items-center gap-2">
                    <Info className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              {copy.gallery}
            </p>
            <div className="mt-3 grid grid-cols-5 gap-1.5">
              {Array.from({ length: listing.galleryCount }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-md bg-gradient-to-br from-slate-200 to-slate-300"
                  aria-label={copy.photoSim(idx + 1)}
                >
                  <div className="flex h-full items-center justify-center text-slate-400">
                    <ImageIcon className="h-4 w-4" aria-hidden />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] italic text-brand-muted">{copy.galleryNote}</p>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              href={wa}
              size="lg"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "properti_listing_modal",
                  listing: listing.id,
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden /> {copy.askUnit}
            </Button>
            <Button
              href="#survei"
              variant="secondary"
              size="lg"
              onClick={() => setTimeout(onClose, 100)}
            >
              {brand.mainCta[lang]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Maximize2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-1.5 text-brand-dark">
      <Icon className="h-3.5 w-3.5 shrink-0 text-brand-muted" aria-hidden />
      <span>
        <span className="text-brand-muted">{label}: </span>
        {value}
      </span>
    </div>
  );
}