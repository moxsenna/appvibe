import { AlertCircle, Clock, FolderOpenDot, Eye, MessageCircleOff, XCircle } from "lucide-react";
import { brand } from "@/data/demos/company-profile/brand";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

const iconMap = [Clock, FolderOpenDot, Eye, MessageCircleOff, XCircle];

const copy = {
  id: {
    eyebrow: "Apakah ini bisnis Anda?",
    title:
      "Bisnis Anda mungkin sudah bagus — tapi belum terlihat seprofesional seharusnya",
    subtitle:
      "Banyak bisnis jasa sebenarnya punya layanan yang kuat. Tapi karena tidak punya satu link resmi yang menjelaskan semuanya, calon klien kesulitan memahami — dan akhirnya tidak jadi menghubungi.",
  },
  en: {
    eyebrow: "Does this sound like your business?",
    title:
      "Your business may already be strong — but it does not look as professional as it should",
    subtitle:
      "Many service businesses offer strong work, yet without one official link that explains everything, prospects hesitate — and never reach out.",
  },
} as const;

export function CompanyProfileProblemSection() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section
      className="section-padding"
      style={{
        backgroundImage: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {brand.painPoints.slice(0, 3).map((pain, idx) => {
            const Icon = iconMap[idx] ?? AlertCircle;
            return (
              <Card
                key={pain.title[lang]}
                hover
                className="border-amber-100/60 bg-amber-50/30"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100/80 text-amber-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-brand-navy">
                  {pain.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {pain.impact[lang]}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {brand.painPoints.slice(3).map((pain, idx) => {
            const Icon = iconMap[idx + 3] ?? AlertCircle;
            return (
              <Card
                key={pain.title[lang]}
                hover
                className="border-amber-100/60 bg-amber-50/30"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100/80 text-amber-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-brand-navy">
                  {pain.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {pain.impact[lang]}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}