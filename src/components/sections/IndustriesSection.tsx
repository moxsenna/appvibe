import {
  Store,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Building2,
  UtensilsCrossed,
  Plane,
  Wrench,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { industries } from "@/data/industries";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { Link } from "react-router-dom";
import { useLang } from "@/i18n/use-lang";

const industryIcons: Record<string, LucideIcon> = {
  umkm: Store,
  "jasa-profesional": Briefcase,
  edukasi: GraduationCap,
  klinik: HeartPulse,
  properti: Building2,
  restoran: UtensilsCrossed,
  travel: Plane,
  kontraktor: Wrench,
};

const industryAccents: Record<string, string> = {
  umkm: "bg-amber-50 text-amber-600",
  "jasa-profesional": "bg-blue-50 text-brand-blue",
  edukasi: "bg-violet-50 text-brand-violet",
  klinik: "bg-cyan-50 text-cyan-700",
  properti: "bg-indigo-50 text-indigo-600",
  restoran: "bg-orange-50 text-orange-600",
  travel: "bg-sky-50 text-sky-600",
  kontraktor: "bg-slate-100 text-slate-600",
};

export function IndustriesSection() {
  const { lang } = useLang();
  const section =
    lang === "en"
      ? {
          eyebrow: "Industries",
          title:
            "We design for how your business sells — not just another template.",
          subtitle:
            "Clinics, property, education, hospitality, travel, and professional services need different structures. Each demo reflects that niche logic.",
          learnMore: "Explore solutions",
        }
      : {
          eyebrow: "Industri",
          title:
            "Kami desain sesuai cara bisnis Anda menjual, bukan sekadar mengikuti template.",
          subtitle:
            "Website klinik, properti, edukasi, kuliner, travel, dan jasa profesional butuh struktur yang berbeda. Karena itu, setiap demo dibuat berdasarkan kebutuhan niche.",
          learnMore: "Pelajari solusi",
        };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-light reveal-on-scroll">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="premium-eyebrow">{section.eyebrow}</span>
          <h2 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {section.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industryIcons[industry.id] ?? Briefcase;
            const accent =
              industryAccents[industry.id] ?? "bg-blue-50 text-brand-blue";

            return (
              <article
                key={industry.id}
                className="bento-card group flex flex-col"
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${accent} transition-transform group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>

                <h3 className="text-base font-semibold text-brand-navy">
                  {industry.name[lang]}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-brand-muted">
                  {industry.problem[lang]}
                </p>

                <p className="mt-3 text-sm font-medium text-brand-dark">
                  {industry.recommendedSolution[lang]}
                </p>

                <Link
                  to={routes.industries(lang)}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-blue transition-colors hover:text-brand-violet"
                >
                  {section.learnMore}
                  <ArrowRight
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}