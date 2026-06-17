import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import {
  CLINIC_EXPERTS,
  CLINIC_FAQ,
  CLINIC_SCHEDULE,
  CLINIC_SERVICES,
  CLINIC_TESTIMONIALS,
  NATURACARE_CLINIC,
} from "@/data/demos/clinic";

export type ClinicPreviewVariant =
  | "hero"
  | "services"
  | "service-detail"
  | "experts"
  | "schedule"
  | "faq"
  | "contact";

type ClinicPreviewProps = {
  variant: ClinicPreviewVariant;
  className?: string;
};

const FEATURED_SERVICE = CLINIC_SERVICES[0];

export function ClinicPreview({ variant, className }: ClinicPreviewProps) {
  return (
    <div className={cn("flex h-full min-h-[180px] flex-col", className)}>
      {variant === "hero" && <ClinicHeroMockup />}
      {variant === "services" && <ClinicServicesOverview />}
      {variant === "service-detail" && <ClinicServiceDetail />}
      {variant === "experts" && <ClinicExpertsGrid />}
      {variant === "schedule" && <ClinicScheduleCard />}
      {variant === "faq" && <ClinicFAQ />}
      {variant === "contact" && <ClinicContactCTA />}
    </div>
  );
}

function ClinicNavbar() {
  const { lang } = useLang();
  return (
    <div className="mb-2 flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
      <div className="flex items-center gap-1">
        <div className="h-3 w-3 rounded-full bg-[#0F9F8F]" />
        <span className="text-[7px] font-semibold text-[#1E293B]">
          {pick(NATURACARE_CLINIC.name, lang)}
        </span>
        <span className="rounded bg-[#DFF8F3] px-1 py-0.5 text-[5px] text-[#0F9F8F]">
          Health · Beauty · Wellness
        </span>
      </div>
      <span className="rounded bg-[#0F9F8F] px-1.5 py-0.5 text-[5px] font-semibold text-white">
        {pick(NATURACARE_CLINIC.mainCta, lang)}
      </span>
    </div>
  );
}

function ClinicHeroMockup() {
  const { lang } = useLang();
  return (
    <div className="flex h-full flex-col bg-[#FFF8F2] p-2.5">
      <ClinicNavbar />
      <div className="flex flex-1 gap-2">
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-[5px] font-medium uppercase tracking-wider text-[#0F9F8F]">
            {pick(NATURACARE_CLINIC.tagline, lang)}
          </p>
          <h3 className="mt-0.5 text-[8px] font-bold leading-tight text-[#1E293B]">
            {pick(NATURACARE_CLINIC.positioning, lang).slice(0, 72) + "…"}
          </h3>
          <p className="mt-1 text-[5px] leading-relaxed text-[#64748B]">
            {pick(NATURACARE_CLINIC.type, lang).slice(0, 55) + "…"}
          </p>
          <div className="mt-1.5 flex gap-1">
            <span className="rounded bg-[#0F9F8F] px-1.5 py-0.5 text-[5px] font-semibold text-white">
              {pick(NATURACARE_CLINIC.mainCta, lang)}
            </span>
            <span className="rounded border border-[#0F9F8F] px-1.5 py-0.5 text-[5px] text-[#0F9F8F]">
              {pick(NATURACARE_CLINIC.secondaryCta, lang)}
            </span>
          </div>
        </div>
        <div className="flex w-[42%] flex-col gap-1">
          <div className="rounded border border-[#E2E8F0] bg-white p-1 shadow-sm">
            <p className="text-[4px] font-semibold text-[#1E293B]">
              Appointment
            </p>
            <p className="text-[4px] text-[#64748B]">Sen, 10.00 · Kulit</p>
            <div className="mt-0.5 rounded bg-[#DFF8F3] px-1 py-0.5 text-[4px] text-[#0F9F8F]">
              Slot tersedia
            </div>
          </div>
          <div className="flex gap-0.5">
            {CLINIC_EXPERTS.slice(0, 3).map((expert) => (
              <div
                key={expert.id}
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br text-[4px] font-bold text-white",
                  expert.gradient,
                )}
              >
                {expert.initials}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-0.5">
            {["Facial", "Dental", "Bidan"].map((tag) => (
              <span
                key={tag}
                className="rounded bg-white px-1 py-0.5 text-[4px] text-[#64748B] ring-1 ring-[#E2E8F0]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="rounded bg-emerald-500 px-1 py-0.5 text-center text-[4px] text-white">
            💬 Booking WhatsApp
          </div>
        </div>
      </div>
      <p className="mt-1 border-t border-dashed border-[#E2E8F0] pt-1 text-[4px] text-[#64748B]">
        {pick(NATURACARE_CLINIC.demoDisclaimer, lang).slice(0, 48) + "…"}
      </p>
    </div>
  );
}

function ClinicServiceCard({
  service,
  compact = false,
}: {
  service: (typeof CLINIC_SERVICES)[number];
  compact?: boolean;
}) {
  const { lang } = useLang();
  return (
    <div
      className={cn(
        "flex flex-col rounded border border-[#E2E8F0] bg-white p-1 shadow-sm",
        compact ? "min-h-0" : "",
      )}
    >
      <div className={cn("mb-0.5 h-2 w-2 rounded", service.color)} />
      <p className="text-[5px] font-semibold leading-tight text-[#1E293B]">
        {pick(service.name, lang)}
      </p>
      {!compact && (
        <p className="mt-0.5 line-clamp-2 text-[4px] leading-tight text-[#64748B]">
          {pick(service.description, lang)}
        </p>
      )}
      <p className="mt-0.5 text-[4px] text-[#0F9F8F]">{pick(service.duration, lang)}</p>
    </div>
  );
}

function ClinicServicesOverview() {
  return (
    <div className="flex h-full flex-col bg-[#DFF8F3]/40 p-2">
      <p className="text-[8px] font-semibold text-[#1E293B]">
        Pilih Layanan Sesuai Kebutuhan Anda
      </p>
      <p className="text-[5px] text-[#64748B]">8 layanan · konsultasi disarankan</p>
      <div className="mt-1.5 grid flex-1 grid-cols-4 gap-0.5">
        {CLINIC_SERVICES.map((service) => (
          <ClinicServiceCard key={service.id} service={service} compact />
        ))}
      </div>
      <p className="mt-1 text-[4px] italic text-[#64748B]">
        Rekomendasi dapat berbeda sesuai kondisi masing-masing
      </p>
    </div>
  );
}

function ClinicServiceDetail() {
  const { lang } = useLang();
  return (
    <div className="flex h-full gap-1.5 bg-white p-2">
      <div className="flex w-1/3 flex-col gap-0.5 overflow-hidden">
        {CLINIC_SERVICES.slice(0, 4).map((service, i) => (
          <div
            key={service.id}
            className={cn(
              "truncate rounded px-1 py-0.5 text-[4px]",
              i === 0
                ? "bg-[#0F9F8F] font-semibold text-white"
                : "bg-[#FFF8F2] text-[#64748B]",
            )}
          >
            {pick(service.name, lang)}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col rounded border border-[#E2E8F0] bg-[#FFF8F2] p-1.5">
        <p className="text-[7px] font-semibold text-[#1E293B]">
          {pick(FEATURED_SERVICE.name, lang)}
        </p>
        <p className="mt-0.5 text-[4px] leading-relaxed text-[#64748B]">
          {pick(FEATURED_SERVICE.description, lang)}
        </p>
        <p className="mt-1 text-[4px] font-medium text-[#1E293B]">
          {pick(FEATURED_SERVICE.suitableFor, lang).slice(0, 40) + "…"}
        </p>
        <p className="mt-1 text-[4px] text-[#64748B]">
          {pick(FEATURED_SERVICE.duration, lang)} · {pick(NATURACARE_CLINIC.mainCta, lang)}
        </p>
        <span className="mt-auto rounded bg-[#0F9F8F] py-0.5 text-center text-[5px] font-semibold text-white">
          {pick(FEATURED_SERVICE.cta, lang)}
        </span>
        <p className="mt-0.5 text-[3px] text-[#64748B]">
          {pick(FEATURED_SERVICE.note, lang)}
        </p>
      </div>
    </div>
  );
}

function ClinicExpertCard({ expert }: { expert: (typeof CLINIC_EXPERTS)[number] }) {
  const { lang } = useLang();
  return (
    <div className="rounded border border-[#E2E8F0] bg-white p-1.5">
      <div className="flex items-center gap-1">
        <div
          className={cn(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[5px] font-bold text-white",
            expert.gradient,
          )}
        >
          {expert.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[5px] font-semibold text-[#1E293B]">
            {pick(expert.name, lang)}
          </p>
          <p className="text-[4px] text-[#0F9F8F]">{pick(expert.role, lang)}</p>
        </div>
      </div>
      <p className="mt-0.5 line-clamp-2 text-[4px] text-[#64748B]">{pick(expert.focus, lang)}</p>
      <p className="mt-0.5 text-[4px] text-[#64748B]">📅 {pick(expert.schedule, lang)}</p>
    </div>
  );
}

function ClinicExpertsGrid() {
  return (
    <div className="flex h-full flex-col bg-white p-2">
      <p className="text-[8px] font-semibold text-[#1E293B]">
        Kenali Tenaga Ahli
      </p>
      <p className="text-[5px] text-[#64748B]">4 profil · jadwal utama</p>
      <div className="mt-1.5 grid flex-1 grid-cols-2 gap-1">
        {CLINIC_EXPERTS.map((expert) => (
          <ClinicExpertCard key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
}

function ClinicScheduleCard() {
  const { lang } = useLang();
  const todaySlot = CLINIC_SCHEDULE[0];

  return (
    <div className="flex h-full flex-col bg-[#FFF8F2] p-2">
      <div className="flex items-center justify-between">
        <p className="text-[8px] font-semibold text-[#1E293B]">
          Jadwal Praktik
        </p>
        <span className="rounded bg-[#FEF3C7] px-1 py-0.5 text-[4px] text-amber-800">
          Hari ini
        </span>
      </div>
      <p className="text-[4px] text-[#64748B]">
        Jadwal dapat berubah — konfirmasi via admin
      </p>
      <div className="mt-1 space-y-0.5 overflow-hidden">
        {CLINIC_SCHEDULE.slice(0, 4).map((slot, i) => (
          <div
            key={slot.dayKey}
            className={cn(
              "flex items-center justify-between rounded border px-1 py-0.5",
              i === 0
                ? "border-[#0F9F8F] bg-[#DFF8F3]"
                : "border-[#E2E8F0] bg-white",
            )}
          >
            <div>
              <p className="text-[5px] font-medium text-[#1E293B]">
                {pick(slot.day, lang)}
              </p>
              <p className="text-[4px] text-[#64748B]">{pick(slot.services, lang)}</p>
            </div>
            <div className="text-right">
              <p className="text-[4px] font-medium text-[#0F9F8F]">
                {pick(slot.hours, lang)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex gap-1 pt-1">
        <span className="flex-1 rounded bg-[#0F9F8F] py-0.5 text-center text-[5px] font-semibold text-white">
          Booking Jadwal via WhatsApp
        </span>
        <span className="rounded border border-[#0F9F8F] px-1 py-0.5 text-[4px] text-[#0F9F8F]">
          {pick(todaySlot.day, lang)}
        </span>
      </div>
    </div>
  );
}

function ClinicFAQ() {
  const { lang } = useLang();
  return (
    <div className="flex h-full flex-col bg-white p-2">
      <p className="text-[8px] font-semibold text-[#1E293B]">
        Pertanyaan yang Sering Ditanyakan
      </p>
      <p className="text-[4px] text-[#64748B]">6 FAQ · copy aman</p>
      <div className="mt-1 space-y-0.5 overflow-hidden">
        {CLINIC_FAQ.slice(0, 4).map((item, i) => (
          <div
            key={`faq-${i}`}
            className={cn(
              "rounded border border-[#E2E8F0] px-1 py-0.5",
              i === 0 ? "bg-[#DFF8F3]" : "bg-[#FFF8F2]",
            )}
          >
            <div className="flex items-start justify-between gap-1">
              <p className="text-[4px] font-medium text-[#1E293B]">
                {pick(item.question, lang)}
              </p>
              <span className="text-[5px] text-[#0F9F8F]">
                {i === 0 ? "−" : "+"}
              </span>
            </div>
            {i === 0 && (
              <p className="mt-0.5 text-[4px] leading-tight text-[#64748B]">
                {pick(item.answer, lang)}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-1 rounded border border-dashed border-amber-200 bg-[#FEF3C7]/50 px-1 py-0.5">
        <p className="text-[3px] text-amber-900">
          Non-emergency · konsultasi disarankan · respons dapat berbeda
        </p>
      </div>
      <div className="mt-1 grid grid-cols-2 gap-0.5">
        {CLINIC_TESTIMONIALS.slice(0, 2).map((t, i) => (
          <div
            key={`t-${i}`}
            className="rounded border border-dashed border-[#E2E8F0] bg-[#FFF8F2] p-0.5"
          >
            <p className="text-[3px] font-medium text-[#64748B]">
              {pick(t.scenario, lang)}
            </p>
            <p className="text-[3px] italic text-[#64748B]">
              &ldquo;{pick(t.quote, lang).slice(0, 50) + "…"}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClinicContactCTA() {
  const { lang } = useLang();
  return (
    <div className="flex h-full gap-1.5 bg-[#FFF8F2] p-2">
      <div className="flex flex-1 flex-col rounded border border-[#E2E8F0] bg-white p-1.5">
        <p className="text-[7px] font-semibold text-[#1E293B]">
          Lokasi & Kontak
        </p>
        <p className="mt-0.5 text-[4px] leading-tight text-[#64748B]">
          {pick(NATURACARE_CLINIC.address, lang)}
        </p>
        <div className="mt-1 space-y-0.5">
          <p className="text-[4px] text-[#1E293B]">
            📱 {pick(NATURACARE_CLINIC.phone, lang)}
          </p>
          <p className="text-[4px] text-[#64748B]">
            ✉ {pick(NATURACARE_CLINIC.email, lang)}
          </p>
          <p className="text-[4px] text-[#64748B]">
            🕐 Admin: {pick(NATURACARE_CLINIC.adminHours, lang)}
          </p>
        </div>
        <span className="mt-auto rounded bg-[#0F9F8F] py-0.5 text-center text-[5px] font-semibold text-white">
          Hubungi Admin Klinik
        </span>
      </div>
      <div className="flex w-[38%] flex-col gap-1">
        <div className="flex-1 rounded border border-[#E2E8F0] bg-[#DFF8F3]/60 p-1">
          <p className="text-[4px] font-medium text-[#1E293B]">Peta</p>
          <div className="mt-0.5 h-full min-h-[24px] rounded bg-gradient-to-br from-teal-100 to-cyan-100" />
        </div>
        <div className="rounded bg-emerald-500 p-1 text-center">
          <p className="text-[5px] font-semibold text-white">WhatsApp</p>
          <p className="text-[3px] text-emerald-100">Booking & tanya dulu</p>
        </div>
        <p className="text-[3px] text-[#64748B]">
          {pick(NATURACARE_CLINIC.demoDisclaimer, lang).slice(0, 60) + "…"}
        </p>
      </div>
    </div>
  );
}