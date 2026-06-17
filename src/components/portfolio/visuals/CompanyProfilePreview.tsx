import { cn } from "@/lib/cn";

export type CompanyProfilePreviewVariant =
  | "hero"
  | "services"
  | "portfolio"
  | "inquiry"
  | "testimonials";

type CompanyProfilePreviewProps = {
  variant: CompanyProfilePreviewVariant;
  className?: string;
};

const SERVICES = [
  { name: "Audit Operasional", color: "bg-blue-100 text-blue-700" },
  { name: "Penyusunan SOP", color: "bg-violet-100 text-violet-700" },
  { name: "Optimasi Sales", color: "bg-cyan-100 text-cyan-700" },
  { name: "Digitalisasi Workflow", color: "bg-emerald-100 text-emerald-700" },
  { name: "Pendampingan Manajemen", color: "bg-amber-100 text-amber-700" },
  { name: "Dashboard Reporting", color: "bg-rose-100 text-rose-700" },
];

const PROJECTS = [
  { title: "Digitalisasi inquiry vendor interior", tag: "Vendor B2B" },
  { title: "SOP customer service klinik", tag: "Klinik" },
  { title: "Dashboard sales distributor", tag: "Distribusi" },
  { title: "Optimasi booking renovasi", tag: "Kontraktor" },
];

const TESTIMONIALS = [
  "Informasi layanan jadi lebih rapi dan calon klien lebih mudah paham.",
  "Tim sales menjelaskan layanan tanpa mengulang dari awal.",
  "Tampilan bisnis jadi jauh lebih profesional.",
  "Form inquiry membuat calon klien lebih mudah masuk.",
];

export function CompanyProfilePreview({
  variant,
  className,
}: CompanyProfilePreviewProps) {
  return (
    <div className={cn("flex h-full min-h-[180px] flex-col", className)}>
      {variant === "hero" && <HeroPreview />}
      {variant === "services" && <ServicesPreview />}
      {variant === "portfolio" && <PortfolioPreview />}
      {variant === "inquiry" && <InquiryPreview />}
      {variant === "testimonials" && <TestimonialsPreview />}
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-br from-brand-navy via-blue-900 to-violet-900 p-4 text-white">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-brand-cyan/80" />
          <span className="text-[10px] font-semibold tracking-wide">
            Arunika Konsultan
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-[8px] text-blue-200">Layanan</span>
          <span className="text-[8px] text-blue-200">Portfolio</span>
          <span className="text-[8px] text-blue-200">Kontak</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-[8px] font-medium uppercase tracking-wider text-brand-cyan">
          Konsultan Operasional & Pengembangan Bisnis
        </p>
        <h3 className="mt-1 text-xs font-bold leading-tight">
          Membantu bisnis tumbuh lebih rapi, terukur, dan siap berkembang
        </h3>
        <p className="mt-1.5 text-[9px] leading-relaxed text-blue-100/90">
          Untuk UMKM naik kelas, perusahaan lokal, dan vendor B2B
        </p>
        <div className="mt-2.5 flex flex-wrap gap-1">
          {["10+ tahun", "UMKM & B2B", "Terukur"].map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] text-blue-100"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-cta-gradient px-2.5 py-1 text-[8px] font-semibold text-white">
            Konsultasi Gratis
          </span>
          <span className="rounded-md border border-white/30 px-2.5 py-1 text-[8px] text-white/90">
            Lihat Portfolio
          </span>
        </div>
      </div>
    </div>
  );
}

function ServicesPreview() {
  return (
    <div className="flex h-full flex-col bg-brand-light p-3">
      <p className="text-[9px] font-semibold text-brand-navy">Layanan Kami</p>
      <p className="text-[7px] text-brand-muted">6 layanan jasa profesional</p>
      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="flex flex-col rounded-lg border border-brand-border bg-white p-1.5 shadow-sm"
          >
            <div className={cn("mb-1 h-3 w-3 rounded", service.color)} />
            <p className="text-[6px] font-semibold leading-tight text-brand-navy">
              {service.name}
            </p>
            <div className="mt-1 space-y-0.5">
              <div className="h-0.5 w-full rounded bg-slate-100" />
              <div className="h-0.5 w-4/5 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="flex h-full flex-col bg-white p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold text-brand-navy">
            Portfolio Proyek
          </p>
          <p className="text-[7px] text-brand-muted">68 proyek contoh</p>
        </div>
        <div className="flex gap-1">
          {["Semua", "B2B", "UMKM"].map((filter, i) => (
            <span
              key={filter}
              className={cn(
                "rounded px-1.5 py-0.5 text-[6px]",
                i === 0
                  ? "bg-brand-blue text-white"
                  : "bg-brand-light text-brand-muted",
              )}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-lg border border-brand-border"
          >
            <div className="h-8 bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="p-1.5">
              <span className="rounded bg-brand-light px-1 py-0.5 text-[5px] font-medium text-brand-blue">
                {project.tag}
              </span>
              <p className="mt-0.5 text-[6px] font-medium leading-tight text-brand-navy">
                {project.title}
              </p>
            </div>
          </div>
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
          Form Inquiry
        </p>
        <p className="text-[7px] text-brand-muted">Konsultasi kebutuhan bisnis</p>
        <div className="mt-2 space-y-1.5">
          {["Nama lengkap", "Nama bisnis", "Jenis kebutuhan", "Estimasi budget"].map(
            (field) => (
              <div key={field}>
                <p className="text-[6px] text-brand-muted">{field}</p>
                <div className="mt-0.5 h-3 rounded border border-brand-border bg-brand-light" />
              </div>
            ),
          )}
        </div>
        <span className="mt-2 rounded-md bg-cta-gradient py-1 text-center text-[7px] font-semibold text-white">
          Kirim Inquiry
        </span>
      </div>
      <div className="flex w-16 flex-col justify-center gap-1.5">
        <div className="rounded-lg bg-emerald-500 p-1.5 text-center">
          <p className="text-[6px] font-semibold text-white">WhatsApp</p>
          <p className="text-[5px] text-emerald-100">Chat langsung</p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-1.5 text-center">
          <p className="text-[6px] font-semibold text-brand-navy">Email</p>
          <p className="text-[5px] text-brand-muted">info@arunika</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsPreview() {
  return (
    <div className="flex h-full flex-col bg-white p-3">
      <p className="text-[9px] font-semibold text-brand-navy">
        Testimoni Skenario
      </p>
      <p className="text-[7px] text-brand-muted">
        Contoh situasi bisnis jasa — bukan klien nyata
      </p>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5">
        {TESTIMONIALS.map((quote, i) => (
          <div
            key={quote}
            className="rounded-lg border border-brand-border bg-brand-light p-1.5"
          >
            <div className="mb-1 flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet" />
              <span className="text-[6px] font-medium text-brand-navy">
                Skenario {i + 1}
              </span>
            </div>
            <p className="text-[6px] italic leading-relaxed text-brand-muted">
              &ldquo;{quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
      <div className="mt-1.5 rounded border border-dashed border-brand-border bg-brand-light px-2 py-1">
        <p className="text-[6px] text-brand-muted">
          <span className="font-semibold text-brand-navy">FAQ:</span> Berapa
          lama proyek? Bagaimana proses kerja? Bisa revisi?
        </p>
      </div>
    </div>
  );
}