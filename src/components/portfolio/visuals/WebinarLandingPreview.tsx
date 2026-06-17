import { cn } from "@/lib/cn";

export type WebinarLandingPreviewVariant =
  | "hero"
  | "problem-benefit"
  | "agenda"
  | "speaker-bonus"
  | "registration"
  | "faq-sticky";

type WebinarLandingPreviewProps = {
  variant: WebinarLandingPreviewVariant;
  className?: string;
};

const CAMPAIGN = {
  organizer: "SkillPath Studio",
  event: "Dari Bingung Arah Menjadi Lebih Siap Memilih Skill Digital",
  date: "Sabtu, 21 Jun 2026 · 19.00 WIB",
  platform: "Zoom · link via WhatsApp",
  quota: "87 slot simulasi tersisa",
};

const PROBLEMS = [
  "Terlalu banyak pilihan skill",
  "Info acara tidak lengkap",
  "Takut salah pilih kursus",
];

const BENEFITS = [
  "Peta skill digital pemula",
  "Ide portofolio pertama",
  "Kerangka diskusi keluarga",
];

const AGENDA = [
  { title: "Kenapa Remaja Bingung Arah", duration: "15 mnt" },
  { title: "Skill Digital untuk Pemula", duration: "20 mnt" },
  { title: "Portofolio Pertama", duration: "20 mnt" },
  { title: "Orang Tua Mendampingi", duration: "15 mnt" },
  { title: "Roadmap 90 Hari", duration: "20 mnt" },
];

const SPEAKERS = [
  { initials: "AP", name: "Alif Pratama", role: "Digital Talent Mentor" },
  { initials: "DK", name: "Dina Kartika, S.Pd.", role: "Learning Coach" },
];

const BONUSES = [
  "Checklist Minat Skill",
  "Template Roadmap 30 Hari",
  "Panduan Diskusi Orang Tua",
  "Platform Belajar Terkurasi",
];

const FORM_FIELDS = [
  { label: "Nama lengkap", required: true },
  { label: "Nomor WhatsApp", required: true },
  { label: "Email", required: false },
  { label: "Domisili kota", required: false },
  { label: "Status / profesi", required: true },
  { label: "Pertanyaan / tujuan", required: false },
];

const FAQ_ITEMS = [
  "Apakah webinar benar-benar gratis?",
  "Apakah ada rekaman untuk semua peserta?",
  "Bagaimana link acara dikirim?",
];

export function WebinarLandingPreview({
  variant,
  className,
}: WebinarLandingPreviewProps) {
  return (
    <div className={cn("h-full min-h-[220px]", className)}>
      {variant === "hero" && <HeroPreview />}
      {variant === "problem-benefit" && <ProblemBenefitPreview />}
      {variant === "agenda" && <AgendaPreview />}
      {variant === "speaker-bonus" && <SpeakerBonusPreview />}
      {variant === "registration" && <RegistrationPreview />}
      {variant === "faq-sticky" && <FaqStickyPreview />}
    </div>
  );
}

function CampaignNavbar() {
  return (
    <div className="mb-2 flex items-center justify-between border-b border-white/20 pb-1.5">
      <div className="flex items-center gap-1">
        <div className="h-3 w-3 rounded-full bg-violet-300" />
        <span className="text-[7px] font-semibold text-white">
          {CAMPAIGN.organizer}
        </span>
        <span className="rounded bg-white/15 px-1 py-0.5 text-[5px] text-violet-100">
          simulasi
        </span>
      </div>
      <span className="rounded bg-white/20 px-1.5 py-0.5 text-[5px] font-semibold text-white">
        Webinar Gratis
      </span>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="flex h-full min-h-[220px] flex-col bg-gradient-to-br from-[#5B21B6] via-violet-600 to-[#2563EB] p-4 text-white sm:p-5">
      <CampaignNavbar />
      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide">
          Webinar Gratis · Online
        </span>
        <span className="rounded-full bg-cyan-400/25 px-2 py-0.5 text-[9px] font-medium text-cyan-100">
          {CAMPAIGN.date}
        </span>
      </div>
      <h4 className="text-sm font-bold leading-snug sm:text-base">
        Bantu Remaja Menemukan Arah Skill Digital yang Lebih Siap untuk Langkah Berikutnya
      </h4>
      <p className="mt-1.5 line-clamp-2 text-[9px] leading-relaxed text-violet-100 sm:text-[10px]">
        {CAMPAIGN.event} — untuk orang tua, siswa, dan pemula yang ingin memetakan arah belajar.
      </p>
      <div className="mt-2 rounded-lg border border-white/15 bg-white/10 px-2 py-1.5">
        <p className="text-[8px] text-violet-100 sm:text-[9px]">
          📅 {CAMPAIGN.date} · 💻 {CAMPAIGN.platform}
        </p>
      </div>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
        <span className="rounded-lg bg-white px-2.5 py-1 text-[9px] font-semibold text-violet-700 shadow-sm">
          Daftar Gratis Sekarang
        </span>
        <span className="rounded-lg border border-white/30 px-2.5 py-1 text-[9px] font-medium text-white">
          Tanya via WhatsApp
        </span>
      </div>
      <p className="mt-1.5 text-[8px] text-violet-200">
        Konfirmasi via WhatsApp setelah daftar · {CAMPAIGN.quota}
      </p>
    </div>
  );
}

function ProblemBenefitPreview() {
  return (
    <div className="flex h-full min-h-[220px] flex-col gap-2.5 bg-slate-50 p-3 sm:p-4">
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-wide text-semantic-danger">
          Problem Awareness
        </p>
        <div className="mt-1.5 grid gap-1 sm:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <div
              key={problem}
              className="rounded-lg border border-red-100 bg-white px-2 py-1.5"
            >
              <div className="mb-0.5 h-1 w-1 rounded-full bg-semantic-danger" />
              <p className="text-[8px] font-medium leading-snug text-brand-navy sm:text-[9px]">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-violet">
          Outcome / Benefit
        </p>
        <div className="mt-1.5 grid gap-1 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="rounded-lg border border-violet-100 bg-white px-2 py-1.5 shadow-sm"
            >
              <div className="mb-0.5 h-1 w-1 rounded-full bg-brand-violet" />
              <p className="text-[8px] font-medium leading-snug text-brand-navy sm:text-[9px]">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="text-[8px] text-brand-muted">
        + 3 benefit lain · section Untuk Siapa di bawah hero
      </p>
    </div>
  );
}

function AgendaPreview() {
  return (
    <div className="flex h-full min-h-[220px] flex-col bg-white p-3 sm:p-4">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-blue">
        Agenda · 90 Menit Materi + Q&A
      </p>
      <ul className="mt-2 flex-1 space-y-1">
        {AGENDA.map((item, index) => (
          <li key={item.title} className="flex items-start gap-2">
            <div className="flex flex-col items-center">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-blue text-[7px] font-bold text-white">
                {index + 1}
              </span>
              {index < AGENDA.length - 1 && (
                <div className="mt-0.5 h-2 w-px bg-brand-border" />
              )}
            </div>
            <div className="flex-1 rounded-md border border-brand-border bg-brand-light px-2 py-1">
              <div className="flex items-center justify-between gap-1">
                <p className="text-[8px] font-semibold text-brand-navy sm:text-[9px]">
                  {item.title}
                </p>
                <span className="shrink-0 rounded bg-brand-blue/10 px-1 py-0.5 text-[7px] font-medium text-brand-blue">
                  {item.duration}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-1 rounded-md border border-dashed border-brand-border bg-slate-50 px-2 py-1">
        <p className="text-[8px] font-medium text-brand-muted">
          + Q&A 30 menit · tanya jawab terbuka
        </p>
      </div>
    </div>
  );
}

function SpeakerBonusPreview() {
  return (
    <div className="flex h-full min-h-[220px] flex-col gap-2 bg-white p-3 sm:p-4">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-navy">
        Speaker / Mentor
      </p>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {SPEAKERS.map((speaker) => (
          <div
            key={speaker.name}
            className="flex items-center gap-2 rounded-lg border border-brand-border bg-brand-light p-2"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-brand-blue text-[8px] font-bold text-white">
              {speaker.initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-[8px] font-bold text-brand-navy sm:text-[9px]">
                {speaker.name}
              </p>
              <p className="text-[7px] font-medium text-brand-violet">
                {speaker.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-semantic-success">
          Bonus Pendaftar
        </p>
        <div className="mt-1 flex flex-wrap gap-1">
          {BONUSES.map((bonus) => (
            <span
              key={bonus}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[7px] font-medium text-emerald-800 sm:text-[8px]"
            >
              {bonus}
            </span>
          ))}
        </div>
      </div>
      <p className="text-[7px] text-brand-muted">
        Materi bonus dikirim setelah webinar · format PDF/Sheet (simulasi)
      </p>
    </div>
  );
}

function RegistrationPreview() {
  return (
    <div className="flex h-full min-h-[220px] flex-col bg-slate-50 p-3 sm:p-4">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-navy">
        Form Pendaftaran
      </p>
      <p className="mt-0.5 text-[8px] text-brand-muted">
        Setelah submit → konfirmasi WhatsApp (simulasi)
      </p>
      <div className="mt-2 flex-1 space-y-1">
        {FORM_FIELDS.map((field) => (
          <div
            key={field.label}
            className="flex items-center justify-between rounded-lg border border-brand-border bg-white px-2 py-1.5"
          >
            <p className="text-[8px] text-brand-muted sm:text-[9px]">{field.label}</p>
            {field.required && (
              <span className="text-[7px] font-medium text-semantic-danger">*</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-lg bg-cta-gradient px-2 py-1.5 text-center text-[9px] font-semibold text-white">
        Kirim Pendaftaran
      </div>
      <p className="mt-1 text-[7px] leading-relaxed text-brand-muted">
        Data hanya untuk konfirmasi acara. Tidak dijual ke pihak ketiga.
      </p>
    </div>
  );
}

function FaqStickyPreview() {
  return (
    <div className="relative flex h-full min-h-[220px] flex-col bg-white">
      <div className="flex-1 space-y-1 p-3 pb-12 sm:p-4">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-brand-navy">
          FAQ
        </p>
        {FAQ_ITEMS.map((question, index) => (
          <div
            key={question}
            className="flex items-center justify-between rounded-lg border border-brand-border bg-brand-light px-2 py-1.5"
          >
            <p className="text-[8px] font-medium text-brand-navy sm:text-[9px]">
              {question}
            </p>
            <span className="text-[8px] text-brand-muted">{index === 0 ? "−" : "+"}</span>
          </div>
        ))}
        <p className="pt-1 text-[7px] text-brand-muted">+ 5 pertanyaan lain</p>
        <div className="rounded-md border border-dashed border-brand-border bg-slate-50 px-2 py-1">
          <p className="text-[7px] text-brand-muted">
            Testimoni skenario berlabel simulasi — bukan klien nyata
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 border-t border-brand-border bg-white/95 px-3 py-2 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] backdrop-blur-sm">
        <div>
          <p className="text-[8px] font-semibold text-brand-navy sm:text-[9px]">
            Webinar Gratis · 21 Jun 2026
          </p>
          <p className="text-[7px] text-brand-muted">Gratis · Konfirmasi via WA</p>
        </div>
        <span className="shrink-0 rounded-md bg-cta-gradient px-2.5 py-1 text-[8px] font-semibold text-white sm:text-[9px]">
          Daftar
        </span>
      </div>
    </div>
  );
}