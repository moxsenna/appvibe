import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  projects,
  projectCategoryKeys,
  projectCategoryLabels,
  type Project,
  type ProjectCategoryKey,
} from "@/data/demos/company-profile/projects";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { CompanyProfilePortfolioModal } from "@/components/demos/company-profile/CompanyProfilePortfolioModal";
import { useLang } from "@/i18n/use-lang";

const copy = {
  id: {
    eyebrow: "Portfolio Proyek",
    title: "Proyek dari berbagai jenis bisnis jasa",
    subtitle:
      "Filter berdasarkan kategori, atau klik salah satu proyek untuk melihat tantangan, pendekatan, dan hasil yang dicapai.",
    all: "Semua",
    detail: "Detail",
    emptyTitle: "Tidak ada proyek di kategori ini",
    emptyBody: "Coba pilih kategori lain di atas.",
  },
  en: {
    eyebrow: "Project portfolio",
    title: "Work across many types of service businesses",
    subtitle:
      "Filter by category, or open a project to see the challenge, approach, and outcomes.",
    all: "All",
    detail: "Details",
    emptyTitle: "No projects in this category",
    emptyBody: "Try another category above.",
  },
} as const;

export function CompanyProfilePortfolio() {
  const { lang } = useLang();
  const t = copy[lang];
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategoryKey>(
    "all",
  );
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const filters: ({ id: "all" } | { id: ProjectCategoryKey })[] = [
    { id: "all" },
    ...projectCategoryKeys.map((c) => ({ id: c })),
  ];

  return (
    <section
      id="portfolio"
      className="section-padding"
      style={{
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
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

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            const label =
              f.id === "all"
                ? t.all
                : projectCategoryLabels[f.id][lang];
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-blue text-white shadow-sm"
                    : "border border-brand-border bg-white text-brand-muted hover:border-brand-blue hover:text-brand-blue",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setOpenProject(project)}
              className="group flex flex-col rounded-2xl border border-brand-border bg-white p-6 text-left shadow-card transition-shadow duration-200 hover:shadow-card-hover"
            >
              <div
                className="mb-4 h-32 rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #1E3A8A 0%, #4C1D95 100%)",
                }}
                aria-hidden
              >
                <div className="flex h-full items-end p-3">
                  <Badge className="border border-white/20 bg-white/15 text-white">
                    {projectCategoryLabels[project.category][lang]}
                  </Badge>
                </div>
              </div>
              <h3 className="text-base font-semibold text-brand-navy group-hover:text-brand-blue">
                {project.title[lang]}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {project.summary[lang]}
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-brand-muted">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />{" "}
                  {project.location[lang]}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-brand-blue transition-transform group-hover:translate-x-0.5">
                  {t.detail}{" "}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <Card className="mt-8 text-center">
            <p className="text-base font-semibold text-brand-navy">
              {t.emptyTitle}
            </p>
            <p className="mt-2 text-sm text-brand-muted">{t.emptyBody}</p>
          </Card>
        )}
      </Container>

      <CompanyProfilePortfolioModal
        project={openProject}
        onClose={() => setOpenProject(null)}
        lang={lang}
      />
    </section>
  );
}