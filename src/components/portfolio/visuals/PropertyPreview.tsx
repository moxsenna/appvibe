import { cn } from "@/lib/cn";

export type PropertyPreviewVariant =
  | "hero"
  | "listing"
  | "detail"
  | "gallery"
  | "inquiry";

type PropertyPreviewProps = {
  variant: PropertyPreviewVariant;
  className?: string;
};

const BRAND_NAME = "GrahaNusa Properti & Karya";

const LISTINGS = [
  {
    title: "Arunika Residence",
    category: "Rumah siap huni",
    type: "Rumah 2 lantai",
    location: "Bekasi Selatan",
    price: "Rp 850jt – 1,2M",
    landSize: "120 m²",
    buildingSize: "90 m²",
    beds: "3+1",
    baths: "2",
    status: "Tersedia",
    statusColor: "bg-emerald-100 text-emerald-700",
    highlight: "One gate",
    gradient: "from-amber-100 to-orange-200",
  },
  {
    title: "Ruko Nusa Avenue",
    category: "Interior & komersial",
    type: "Ruko 3 lantai",
    location: "Tangerang",
    price: "Rp 2,5M – 3,8M",
    landSize: "72 m²",
    buildingSize: "144 m²",
    beds: null,
    baths: "3",
    status: "Tersedia",
    statusColor: "bg-emerald-100 text-emerald-700",
    highlight: "Lokasi komersial",
    gradient: "from-slate-100 to-slate-300",
  },
  {
    title: "Kavling Bukit Asri",
    category: "Kavling & lahan",
    type: "Tanah kavling",
    location: "Bogor",
    price: "Rp 450jt – 680jt",
    landSize: "150–200 m²",
    buildingSize: null,
    beds: null,
    baths: null,
    status: "Pre-order",
    statusColor: "bg-amber-100 text-amber-700",
    highlight: "View pegunungan",
    gradient: "from-green-100 to-emerald-200",
  },
  {
    title: "Villa Sagara",
    category: "Rumah siap huni",
    type: "Villa investasi",
    location: "Puncak, Bogor",
    price: "Rp 3,2M – 4,5M",
    landSize: "300 m²",
    buildingSize: "180 m²",
    beds: "4",
    baths: "3",
    status: "Tersedia",
    statusColor: "bg-emerald-100 text-emerald-700",
    highlight: "Area wisata",
    gradient: "from-sky-100 to-blue-200",
  },
  {
    title: "Renovasi Rumah Cendana",
    category: "Renovasi & bangun",
    type: "Paket renovasi",
    location: "Depok",
    price: "Mulai Rp 150jt",
    landSize: "90 m²",
    buildingSize: "70→110 m²",
    beds: "2→3",
    baths: "1→2",
    status: "Slot proyek",
    statusColor: "bg-blue-100 text-blue-700",
    highlight: "Before/after",
    gradient: "from-rose-100 to-pink-200",
  },
  {
    title: "Interior Apartemen Senopati",
    category: "Interior & komersial",
    type: "Paket interior",
    location: "Jakarta Selatan",
    price: "Mulai Rp 85jt",
    landSize: null,
    buildingSize: "45 m²",
    beds: "1",
    baths: "1",
    status: "Slot terbatas",
    statusColor: "bg-violet-100 text-violet-700",
    highlight: "Desain compact",
    gradient: "from-violet-100 to-purple-200",
  },
];

const TYPE_FILTERS = ["Semua", "Rumah", "Kavling", "Renovasi", "Interior"];
const LOCATION_FILTERS = ["Semua", "Bekasi", "Tangerang", "Bogor", "Jaksel"];
const STATUS_FILTERS = ["Semua", "Tersedia", "Pre-order", "Slot terbatas"];

const SPECS = [
  { label: "Luas tanah", value: "120 m²" },
  { label: "Luas bangunan", value: "90 m²" },
  { label: "Kamar tidur", value: "3 + 1" },
  { label: "Kamar mandi", value: "2" },
  { label: "Status", value: "Tersedia" },
  { label: "Kisaran harga", value: "Rp 850jt – 1,2M" },
];

const NEARBY = ["Tol 15 menit", "Pasar 10 menit", "Sekolah 5 menit"];

const INQUIRY_FIELDS = [
  "Nama lengkap",
  "Nomor WhatsApp",
  "Unit / proyek pilihan",
  "Kebutuhan (beli / renovasi / interior)",
  "Jadwal survei / konsultasi",
  "Catatan tambahan",
];

export function PropertyPreview({
  variant,
  className,
}: PropertyPreviewProps) {
  return (
    <div className={cn("flex h-full min-h-[180px] flex-col", className)}>
      {variant === "hero" && <HeroPreview />}
      {variant === "listing" && <ListingPreview />}
      {variant === "detail" && <DetailPreview />}
      {variant === "gallery" && <GalleryPreview />}
      {variant === "inquiry" && <InquiryPreview />}
    </div>
  );
}

function HeroPreview() {
  const featured = LISTINGS[0];

  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-[#0F4C5C] via-teal-900 to-brand-navy p-4 text-white">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-emerald-400/80" />
          <span className="text-[9px] font-semibold tracking-wide">
            {BRAND_NAME}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-[8px] text-emerald-200">Listing</span>
          <span className="text-[8px] text-emerald-200">Area</span>
          <span className="text-[8px] text-emerald-200">Kontak</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-[8px] font-medium uppercase tracking-wider text-emerald-300">
          Hunian, Kavling, Renovasi & Interior
        </p>
        <h3 className="mt-1 text-xs font-bold leading-tight">
          Temukan hunian dan proyek dengan informasi yang lebih jelas
        </h3>
        <p className="mt-1.5 text-[9px] leading-relaxed text-emerald-100/90">
          Spesifikasi rapi, galeri terstruktur, survei lokasi lebih mudah
          dijadwalkan — untuk keluarga, investor, dan pemilik rumah.
        </p>
        <div className="mt-2 flex flex-wrap gap-1">
          {["Spesifikasi tertulis", "Galeri terstruktur", "Konsultasi tidak mengikat"].map(
            (badge) => (
              <span
                key={badge}
                className="rounded-full bg-white/10 px-2 py-0.5 text-[6px] text-emerald-100"
              >
                {badge}
              </span>
            ),
          )}
        </div>
        <div className="mt-2.5 flex gap-2">
          <span className="rounded-md bg-cta-gradient px-2.5 py-1 text-[8px] font-semibold text-white">
            Jadwalkan Survei Lokasi
          </span>
          <span className="rounded-md border border-white/30 px-2.5 py-1 text-[8px] text-white/90">
            Lihat Semua Listing
          </span>
        </div>
        <p className="mt-1.5 text-[6px] text-emerald-200/80">
          Harga kisaran — konfirmasi terbaru via tim kami.
        </p>
      </div>
      <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 p-2">
        <div
          className={cn(
            "h-10 w-14 shrink-0 rounded bg-gradient-to-br",
            featured.gradient,
          )}
        />
        <div className="min-w-0 flex-1">
          <p className="text-[7px] font-medium text-emerald-300">
            {featured.category}
          </p>
          <p className="truncate text-[8px] font-semibold">{featured.title}</p>
          <p className="text-[7px] text-emerald-200">
            {featured.type} · {featured.location}
          </p>
          <p className="text-[7px] font-medium text-emerald-300">
            {featured.price}
          </p>
        </div>
        <span className="shrink-0 rounded bg-emerald-500/30 px-1.5 py-0.5 text-[6px] text-emerald-100">
          Featured
        </span>
      </div>
    </div>
  );
}

function ListingPreview() {
  return (
    <div className="flex h-full flex-col bg-brand-light p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-brand-navy">
            Semua Listing & Proyek
          </p>
          <p className="text-[7px] text-brand-muted">
            Bandingkan spesifikasi sebelum menghubungi kami
          </p>
        </div>
        <span className="text-[6px] text-brand-muted">6 proyek contoh</span>
      </div>
      <div className="mt-1.5 space-y-1">
        <div className="flex flex-wrap gap-1">
          {TYPE_FILTERS.map((filter, i) => (
            <span
              key={filter}
              className={cn(
                "rounded px-1.5 py-0.5 text-[6px]",
                i === 0
                  ? "bg-[#0F4C5C] text-white"
                  : "bg-white text-brand-muted",
              )}
            >
              {filter}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {LOCATION_FILTERS.map((filter, i) => (
            <span
              key={filter}
              className={cn(
                "rounded px-1.5 py-0.5 text-[5px]",
                i === 0
                  ? "bg-[#2D6A4F] text-white"
                  : "border border-brand-border bg-white text-brand-muted",
              )}
            >
              {filter}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {STATUS_FILTERS.map((filter, i) => (
            <span
              key={filter}
              className={cn(
                "rounded px-1.5 py-0.5 text-[5px]",
                i === 0
                  ? "bg-brand-navy text-white"
                  : "border border-brand-border bg-white text-brand-muted",
              )}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
        {LISTINGS.map((listing) => (
          <div
            key={listing.title}
            className="flex flex-col overflow-hidden rounded-lg border border-brand-border bg-white shadow-sm"
          >
            <div
              className={cn("relative h-7 bg-gradient-to-br", listing.gradient)}
            >
              <span className="absolute left-1 top-1 rounded bg-white/90 px-1 py-0.5 text-[4px] font-medium text-brand-navy">
                {listing.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-1">
              <span
                className={cn(
                  "w-fit rounded px-1 py-0.5 text-[4px] font-medium",
                  listing.statusColor,
                )}
              >
                {listing.status}
              </span>
              <p className="mt-0.5 text-[5px] font-semibold leading-tight text-brand-navy">
                {listing.title}
              </p>
              <p className="text-[4px] text-brand-muted">{listing.location}</p>
              <p className="text-[4px] font-medium text-[#2D6A4F]">
                {listing.price}
              </p>
              <div className="mt-0.5 flex flex-wrap gap-0.5">
                {listing.landSize && (
                  <span className="rounded bg-brand-light px-1 text-[3px] text-brand-muted">
                    LT {listing.landSize}
                  </span>
                )}
                {listing.buildingSize && (
                  <span className="rounded bg-brand-light px-1 text-[3px] text-brand-muted">
                    LB {listing.buildingSize}
                  </span>
                )}
                {listing.beds && (
                  <span className="rounded bg-brand-light px-1 text-[3px] text-brand-muted">
                    {listing.beds} KT
                  </span>
                )}
              </div>
              <span className="mt-0.5 w-fit rounded bg-amber-50 px-1 text-[3px] text-amber-700">
                {listing.highlight}
              </span>
              <div className="mt-auto flex gap-0.5 pt-1">
                <span className="flex-1 rounded bg-brand-light py-0.5 text-center text-[3px] font-medium text-brand-navy">
                  Detail
                </span>
                <span className="rounded bg-emerald-500 px-1 py-0.5 text-[3px] text-white">
                  WA
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailPreview() {
  return (
    <div className="flex h-full flex-col bg-white p-3">
      <div className="flex gap-2">
        <div className="h-16 w-24 shrink-0 rounded-lg bg-gradient-to-br from-amber-100 to-orange-200" />
        <div className="min-w-0 flex-1">
          <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[6px] font-medium text-emerald-700">
            Tersedia
          </span>
          <p className="mt-0.5 text-[9px] font-bold text-brand-navy">
            Arunika Residence
          </p>
          <p className="text-[7px] text-brand-muted">
            Rumah siap huni · Bekasi Selatan
          </p>
          <p className="mt-0.5 text-[8px] font-semibold text-[#2D6A4F]">
            Rp 850jt – 1,2M
          </p>
          <p className="text-[5px] text-brand-muted">
            Kisaran harga — konfirmasi via admin
          </p>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {SPECS.map((spec) => (
          <div
            key={spec.label}
            className="rounded border border-brand-border bg-brand-light p-1.5"
          >
            <p className="text-[5px] text-brand-muted">{spec.label}</p>
            <p className="text-[6px] font-semibold text-brand-navy">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-1.5 text-[6px] leading-relaxed text-brand-muted">
        Cluster hunian 2 lantai dengan taman komunal dan one gate. Cocok untuk
        keluarga muda yang butuh hunian siap huni.
      </p>
      <div className="mt-1 flex flex-wrap gap-1">
        {NEARBY.map((item) => (
          <span
            key={item}
            className="rounded bg-brand-light px-1.5 py-0.5 text-[5px] text-brand-muted"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-1.5 pt-2">
        <span className="flex-1 rounded-md bg-cta-gradient py-1 text-center text-[7px] font-semibold text-white">
          Jadwalkan Survei Lokasi
        </span>
        <span className="rounded-md bg-emerald-500 px-2 py-1 text-[7px] font-semibold text-white">
          WhatsApp
        </span>
      </div>
    </div>
  );
}

function GalleryPreview() {
  const photos = [
    { label: "Eksterior", gradient: "from-amber-100 to-orange-200" },
    { label: "Ruang tamu", gradient: "from-slate-100 to-slate-200" },
    { label: "Dapur", gradient: "from-rose-50 to-rose-100" },
    { label: "Kamar tidur", gradient: "from-sky-50 to-blue-100" },
    { label: "Taman", gradient: "from-green-100 to-emerald-200" },
    { label: "Before/after", gradient: "from-rose-100 to-pink-200" },
  ];

  return (
    <div className="flex h-full flex-col bg-brand-light p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-brand-navy">
            Galeri Proyek
          </p>
          <p className="text-[7px] text-brand-muted">
            Arunika Residence — contoh visual simulasi
          </p>
        </div>
        <span className="text-[6px] text-brand-blue">Lihat semua →</span>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
        {photos.map((photo, i) => (
          <div
            key={photo.label}
            className={cn(
              "relative overflow-hidden rounded-lg",
              i === 0 && "col-span-2 row-span-2",
            )}
          >
            <div
              className={cn(
                "h-full min-h-[28px] bg-gradient-to-br",
                photo.gradient,
                i === 0 && "min-h-[60px]",
              )}
            />
            <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 py-0.5 text-[5px] text-white">
              {photo.label}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-1 text-[5px] text-brand-muted">
        Foto contoh/simulasi portfolio — kondisi aktual dikonfirmasi saat survei.
      </p>
      <div className="mt-1 flex justify-center gap-1">
        {[0, 1, 2].map((dot) => (
          <div
            key={dot}
            className={cn(
              "h-1 w-1 rounded-full",
              dot === 0 ? "bg-[#2D6A4F]" : "bg-slate-300",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function InquiryPreview() {
  return (
    <div className="flex h-full gap-2 bg-brand-light p-3">
      <div className="flex flex-1 flex-col rounded-lg border border-brand-border bg-white p-2">
        <p className="text-[9px] font-semibold text-brand-navy">
          Form Survei & Konsultasi
        </p>
        <p className="text-[7px] text-brand-muted">
          Pilih proyek — tim kami konfirmasi jadwal
        </p>
        <div className="mt-1.5 space-y-1">
          {INQUIRY_FIELDS.map((field) => (
            <div key={field}>
              <p className="text-[5px] text-brand-muted">{field}</p>
              <div className="mt-0.5 h-2.5 rounded border border-brand-border bg-brand-light" />
            </div>
          ))}
        </div>
        <span className="mt-1.5 rounded-md bg-cta-gradient py-1 text-center text-[7px] font-semibold text-white">
          Kirim Permintaan Survei
        </span>
        <p className="mt-1 text-[5px] leading-tight text-brand-muted">
          Konsultasi awal tidak mengikat. Informasi hanya untuk follow-up inquiry.
        </p>
      </div>
      <div className="flex w-16 flex-col justify-center gap-1.5">
        <div className="rounded-lg bg-emerald-500 p-1.5 text-center">
          <p className="text-[6px] font-semibold text-white">WhatsApp</p>
          <p className="text-[5px] text-emerald-100">Jadwalkan survei</p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-1.5 text-center">
          <p className="text-[6px] font-semibold text-brand-navy">Telepon</p>
          <p className="text-[5px] text-brand-muted">Sales office</p>
        </div>
        <div className="rounded border border-dashed border-brand-border bg-white p-1">
          <p className="text-[5px] leading-tight text-brand-muted">
            <span className="font-semibold text-brand-navy">FAQ:</span> Survei
            lokasi? Harga berubah? Konsultasi dulu?
          </p>
        </div>
        <p className="text-[4px] text-brand-muted">
          Data simulasi · AppVibe Studio
        </p>
      </div>
    </div>
  );
}