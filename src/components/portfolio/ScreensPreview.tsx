import type { ReactNode } from "react";
import type { PortfolioItem } from "@/types/portfolio";
import { useLang } from "@/i18n/use-lang";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { MockupFrame } from "@/components/ui/MockupFrame";
import {
  CompanyProfilePreview,
  type CompanyProfilePreviewVariant,
} from "@/components/portfolio/visuals/CompanyProfilePreview";
import {
  PropertyPreview,
  type PropertyPreviewVariant,
} from "@/components/portfolio/visuals/PropertyPreview";
import {
  ClinicPreview,
  type ClinicPreviewVariant,
} from "@/components/portfolio/visuals/ClinicPreview";
import {
  LeadDashboardPreview,
  type LeadDashboardPreviewVariant,
} from "@/components/portfolio/visuals/LeadDashboardPreview";
import {
  WebinarLandingPreview,
  type WebinarLandingPreviewVariant,
} from "@/components/portfolio/visuals/WebinarLandingPreview";

type ScreensPreviewProps = {
  item: PortfolioItem;
};

const COMPANY_PROFILE_VARIANTS: CompanyProfilePreviewVariant[] = [
  "hero",
  "services",
  "portfolio",
  "inquiry",
  "testimonials",
];

const PROPERTY_VARIANTS: PropertyPreviewVariant[] = [
  "hero",
  "listing",
  "detail",
  "gallery",
  "inquiry",
];

const CLINIC_VARIANTS: ClinicPreviewVariant[] = [
  "hero",
  "services",
  "service-detail",
  "experts",
  "schedule",
  "faq",
  "contact",
];

const LEAD_DASHBOARD_VARIANTS: LeadDashboardPreviewVariant[] = [
  "overview",
  "table",
  "kanban",
  "detail",
  "activity",
  "source",
  "report",
  "empty",
  "mobile",
];

const WEBINAR_LANDING_VARIANTS: WebinarLandingPreviewVariant[] = [
  "hero",
  "problem-benefit",
  "agenda",
  "speaker-bonus",
  "registration",
  "faq-sticky",
];

function GenericScreenPlaceholder({
  index,
  total,
}: {
  index: number;
  total: number;
}) {
  return (
    <div className="flex h-full min-h-[180px] flex-col justify-between p-5">
      <div>
        <div className="mb-3 h-4 w-2/3 rounded bg-cta-gradient opacity-80" />
        <div className="space-y-2">
          <div className="h-2 w-full rounded bg-slate-200" />
          <div className="h-2 w-5/6 rounded bg-slate-200" />
          <div className="h-2 w-4/6 rounded bg-slate-200" />
        </div>
      </div>
      <p className="mt-4 text-xs text-brand-muted">
        Layar {index + 1} dari {total}
      </p>
    </div>
  );
}

function renderScreenContent(item: PortfolioItem, index: number): ReactNode {
  if (item.slug === "company-profile") {
    const variant = COMPANY_PROFILE_VARIANTS[index] ?? "hero";
    return <CompanyProfilePreview variant={variant} />;
  }

  if (item.slug === "klinik") {
    const variant = CLINIC_VARIANTS[index] ?? "hero";
    return <ClinicPreview variant={variant} />;
  }

  if (item.slug === "webinar-landing") {
    const variant = WEBINAR_LANDING_VARIANTS[index] ?? "hero";
    return <WebinarLandingPreview variant={variant} />;
  }

  if (item.slug === "properti") {
    const variant = PROPERTY_VARIANTS[index] ?? "hero";
    return <PropertyPreview variant={variant} />;
  }

  if (item.slug === "lead-dashboard") {
    const variant = LEAD_DASHBOARD_VARIANTS[index] ?? "overview";
    return <LeadDashboardPreview variant={variant} />;
  }

  return (
    <GenericScreenPlaceholder index={index} total={item.screens.length} />
  );
}

const SECTION_COPY: Record<
  string,
  { title: string; description: string }
> = {
  "company-profile": {
    title: "Cuplikan website company profile untuk jasa profesional",
    description:
      "Preview CSS mockup Arunika Konsultan — hero, layanan, portfolio, inquiry, dan testimoni skenario. Gambar screenshot final dapat ditambahkan saat asset visual siap.",
  },
  klinik: {
    title: "Cuplikan website klinik, health, dan beauty",
    description:
      "Preview CSS mockup NaturaCare Clinic — 7 layar: hero, layanan, detail layanan, tenaga ahli, jadwal & booking, FAQ skenario, dan lokasi & kontak. Copy aman tanpa klaim medis berlebihan.",
  },
  "webinar-landing": {
    title: "Cuplikan landing page webinar dan campaign",
    description:
      "Preview CSS mockup SkillPath Studio (simulasi) — hero, problem & benefit, agenda 5 sesi, speaker & bonus, form pendaftaran, FAQ, dan sticky CTA mobile.",
  },
  properti: {
    title: "Cuplikan website properti dan konstruksi",
    description:
      "Preview CSS mockup GrahaNusa Properti & Karya — hero dengan trust badges, listing & filter, detail spesifikasi, galeri visual, dan form survei lokasi. Semua data berlabel contoh/simulasi.",
  },
  "lead-dashboard": {
    title: "Cuplikan dashboard LeadFlow CRM Lite untuk tim sales",
    description:
      "Preview CSS mockup 9 layar — ringkasan lead, inbox, pipeline kanban, detail drawer, aktivitas follow-up, source tracking, laporan, empty state, dan mobile view. Semua data simulasi.",
  },
};

export function ScreensPreview({ item }: ScreensPreviewProps) {
  const { lang } = useLang();
  const sectionCopy = SECTION_COPY[item.slug];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          eyebrow="Preview Halaman"
          title={
            sectionCopy?.title ??
            "Cuplikan struktur halaman dalam solusi ini"
          }
          description={
            sectionCopy?.description ??
            "Visual preview menggunakan mock frame. Gambar screenshot final dapat ditambahkan saat asset visual siap."
          }
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {item.screens.map((screen, index) => (
            <Card key={screen.title[lang]} hover padding="lg">
              <MockupFrame title={`${item.slug} — ${screen.title[lang]}`}>
                {renderScreenContent(item, index)}
              </MockupFrame>
              <h3 className="mt-4 text-base font-semibold text-brand-navy">
                {screen.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {screen.description[lang]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}