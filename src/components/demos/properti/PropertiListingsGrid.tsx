import { useMemo, useState } from "react";
import { Search, ArrowUpRight, MapPin, BedDouble, Bath, Maximize2, Home } from "lucide-react";
import {
  listings,
  typeFilterKeys,
  locationFilterKeys,
  statusFilterKeys,
  listingTypeLabels,
  listingStatusLabels,
  locationFilterLabels,
  listingMatchesLocationFilter,
  type Listing,
  type ListingTypeKey,
  type ListingStatusKey,
  type LocationFilterKey,
} from "@/data/demos/properti/listings";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { PropertiListingDetailModal } from "@/components/demos/properti/PropertiListingDetailModal";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

type TypeFilter = "all" | ListingTypeKey;
type StatusFilter = "all" | ListingStatusKey;
type LocationFilter = "all" | LocationFilterKey;

const statusTone: Record<ListingStatusKey, string> = {
  tersedia: "border-emerald-200 bg-emerald-50 text-emerald-700",
  "pre-order": "border-amber-200 bg-amber-50 text-amber-700",
  "slot-terbatas": "border-rose-200 bg-rose-50 text-rose-700",
};

const sectionCopy: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    type: string;
    location: string;
    status: string;
    search: string;
    searchPlaceholder: string;
    searchAria: string;
    all: string;
    found: (n: number) => string;
    emptyTitle: string;
    emptyBody: string;
    simVisual: string;
    priceNote: string;
    detail: string;
  }
> = {
  id: {
    eyebrow: "Listing & Proyek",
    title: "6 listing contoh dari GrahaNusa Properti & Karya",
    subtitle:
      "Filter berdasarkan tipe, lokasi, atau status. Klik listing untuk melihat galeri visual, spesifikasi lengkap, dan cara melakukan survei lokasi.",
    type: "Tipe",
    location: "Lokasi",
    status: "Status",
    search: "Cari",
    searchPlaceholder: "Cari judul, kota...",
    searchAria: "Cari listing",
    all: "Semua",
    found: (n) => `${n} listing ditemukan`,
    emptyTitle: "Tidak ada listing di filter ini",
    emptyBody: "Coba ubah filter tipe, lokasi, atau status di atas.",
    simVisual: "Contoh visual simulasi",
    priceNote: "*Kisaran, dapat berubah",
    detail: "Detail",
  },
  en: {
    eyebrow: "Listings & projects",
    title: "Six sample listings from GrahaNusa Properti & Karya",
    subtitle:
      "Filter by type, location, or status. Open a listing for the visual gallery, full specifications, and how to schedule a site visit.",
    type: "Type",
    location: "Location",
    status: "Status",
    search: "Search",
    searchPlaceholder: "Search title, city...",
    searchAria: "Search listings",
    all: "All",
    found: (n) => `${n} listing${n === 1 ? "" : "s"} found`,
    emptyTitle: "No listings match this filter",
    emptyBody: "Try changing type, location, or status above.",
    simVisual: "Simulated sample visual",
    priceNote: "*Indicative range; may change",
    detail: "Details",
  },
};

const dash = "—";

export function PropertiListingsGrid() {
  const { lang } = useLang();
  const copy = sectionCopy[lang];
  const [type, setType] = useState<TypeFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [location, setLocation] = useState<LocationFilter>("all");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<Listing | null>(null);

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (type !== "all" && l.typeKey !== type) return false;
      if (status !== "all" && l.statusKey !== status) return false;
      if (location !== "all" && !listingMatchesLocationFilter(l, location, lang)) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = `${l.title[lang]} ${l.description[lang]} ${l.location[lang]}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [type, status, location, search, lang]);

  return (
    <section id="listing" className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">{copy.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-brand-border bg-white p-4 shadow-sm sm:p-5">
          <div className="grid gap-4 lg:grid-cols-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                {copy.type}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <FilterChip
                  active={type === "all"}
                  onClick={() => setType("all")}
                  label={copy.all}
                />
                {typeFilterKeys.map((key) => (
                  <FilterChip
                    key={key}
                    active={type === key}
                    onClick={() => setType(key)}
                    label={listingTypeLabels[key][lang]}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                {copy.location}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <FilterChip
                  active={location === "all"}
                  onClick={() => setLocation("all")}
                  label={copy.all}
                />
                {locationFilterKeys.map((key) => (
                  <FilterChip
                    key={key}
                    active={location === key}
                    onClick={() => setLocation(key)}
                    label={locationFilterLabels[key][lang]}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                {copy.status}
              </p>
              <div className="flex flex-wrap gap-1.5">
                <FilterChip
                  active={status === "all"}
                  onClick={() => setStatus("all")}
                  label={copy.all}
                />
                {statusFilterKeys.map((key) => (
                  <FilterChip
                    key={key}
                    active={status === key}
                    onClick={() => setStatus(key)}
                    label={listingStatusLabels[key][lang]}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                {copy.search}
              </p>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
                  aria-hidden
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={copy.searchPlaceholder}
                  className="w-full rounded-lg border border-brand-border bg-white py-2 pl-9 pr-3 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  aria-label={copy.searchAria}
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-muted">{copy.found(filtered.length)}</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              lang={lang}
              copy={copy}
              onClick={() => setOpen(listing)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <Card className="mt-8 text-center">
            <p className="text-base font-semibold text-brand-navy">{copy.emptyTitle}</p>
            <p className="mt-2 text-sm text-brand-muted">{copy.emptyBody}</p>
          </Card>
        )}
      </Container>

      <PropertiListingDetailModal listing={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium transition-colors",
        active
          ? "bg-emerald-600 text-white shadow-sm"
          : "border border-brand-border bg-white text-brand-muted hover:border-emerald-400 hover:text-emerald-700",
      )}
    >
      {label}
    </button>
  );
}

function ListingCard({
  listing,
  lang,
  copy,
  onClick,
}: {
  listing: Listing;
  lang: Lang;
  copy: (typeof sectionCopy)[Lang];
  onClick: () => void;
}) {
  const typeLabel = listingTypeLabels[listing.typeKey][lang];
  const gradient =
    listing.typeKey === "rumah"
      ? "#0F4C5C"
      : listing.typeKey === "ruko"
        ? "#2D6A4F"
        : listing.typeKey === "kavling"
          ? "#0E7490"
          : listing.typeKey === "villa"
            ? "#1E40AF"
            : listing.typeKey === "renovasi"
              ? "#B45309"
              : "#7C3AED";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white text-left shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div
        className="relative h-40"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradient} 0%, #1F2937 100%)`,
        }}
        aria-hidden
      >
        <div className="flex h-full items-end justify-between p-3">
          <Badge className="border border-white/20 bg-white/15 text-white">{typeLabel}</Badge>
          <Badge className={`border ${statusTone[listing.statusKey]}`}>
            {listingStatusLabels[listing.statusKey][lang]}
          </Badge>
        </div>
        <span className="absolute right-3 top-3 text-[10px] font-medium text-white/70">
          {copy.simVisual}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="inline-flex items-center gap-1 text-xs text-brand-muted">
          <MapPin className="h-3.5 w-3.5" aria-hidden /> {listing.location[lang]}
        </p>
        <h3 className="mt-1.5 text-base font-semibold text-brand-navy group-hover:text-emerald-700">
          {listing.title[lang]}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-brand-muted">
          {listing.description[lang]}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-1.5 text-[11px] text-brand-dark">
          {listing.landSize[lang] !== dash && (
            <span className="inline-flex items-center gap-1">
              <Maximize2 className="h-3 w-3 text-brand-muted" aria-hidden />{" "}
              {listing.landSize[lang]}
            </span>
          )}
          {listing.buildingSize[lang] !== dash && (
            <span className="inline-flex items-center gap-1">
              <Home className="h-3 w-3 text-brand-muted" aria-hidden />{" "}
              {listing.buildingSize[lang]}
            </span>
          )}
          {listing.bedrooms[lang] !== dash && (
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-3 w-3 text-brand-muted" aria-hidden />{" "}
              {listing.bedrooms[lang]}
            </span>
          )}
          {listing.bathrooms[lang] !== dash && (
            <span className="inline-flex items-center gap-1">
              <Bath className="h-3 w-3 text-brand-muted" aria-hidden /> {listing.bathrooms[lang]}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-brand-border pt-3">
          <div>
            <p className="text-base font-bold text-brand-navy">{listing.priceRange[lang]}</p>
            <p className="text-[10px] italic text-brand-muted">{copy.priceNote}</p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 transition-transform group-hover:translate-x-0.5">
            {copy.detail} <ArrowUpRight className="h-3 w-3" aria-hidden />
          </span>
        </div>
      </div>
    </button>
  );
}