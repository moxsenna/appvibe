import { brand } from "@/data/demos/company-profile/brand";
import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/ui/StatCard";
import {
  Briefcase,
  FolderOpenDot,
  ListChecks,
  MessageSquare,
} from "lucide-react";
import { useLang } from "@/i18n/use-lang";

const iconMap = [Briefcase, FolderOpenDot, ListChecks, MessageSquare];

const copy = {
  id: {
    eyebrow: "Mengapa bisnis jasa membutuhkan struktur yang jelas",
    title: "Bisnis yang tertata memenangkan kepercayaan lebih cepat",
    subtitle:
      "Berikut adalah pondasi layanan kami — terstruktur, terukur, dan mudah dipahami di setiap tahap konsultasi.",
    statDesc: "Komitmen layanan",
  },
  en: {
    eyebrow: "Why service businesses need clear structure",
    title: "Organized businesses earn trust faster",
    subtitle:
      "The foundation of our services — structured, measurable, and easy to follow at every consultation stage.",
    statDesc: "Service commitment",
  },
} as const;

export function CompanyProfileTrustBar() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brand.trustStats.map((stat, idx) => {
            const Icon = iconMap[idx] ?? Briefcase;
            return (
              <StatCard
                key={stat.label[lang]}
                title={stat.label[lang]}
                value={stat.value[lang]}
                description={t.statDesc}
                icon={Icon}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}