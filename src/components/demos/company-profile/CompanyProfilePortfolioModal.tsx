import { useEffect } from "react";
import { X, MapPin, Calendar, Clock, ListChecks } from "lucide-react";
import type { Project } from "@/data/demos/company-profile/projects";
import { projectCategoryLabels } from "@/data/demos/company-profile/projects";
import { Badge } from "@/components/ui/Badge";
import type { Lang } from "@/i18n/types";

const labels = {
  id: {
    close: "Tutup detail proyek",
    challenge: "Tantangan",
    approach: "Pendekatan",
    outcome: "Hasil",
    scope: "Scope",
  },
  en: {
    close: "Close project details",
    challenge: "Challenge",
    approach: "Approach",
    outcome: "Outcome",
    scope: "Scope",
  },
} as const;

type CompanyProfilePortfolioModalProps = {
  project: Project | null;
  onClose: () => void;
  lang: Lang;
};

export function CompanyProfilePortfolioModal({
  project,
  onClose,
  lang,
}: CompanyProfilePortfolioModalProps) {
  const t = labels[lang];

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div
          className="h-32 sm:h-40"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #4C1D95 100%)",
          }}
        >
          <div className="flex h-full items-end p-5 sm:p-6">
            <Badge className="border border-white/20 bg-white/15 text-white">
              {projectCategoryLabels[project.category][lang]}
            </Badge>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-md transition-colors hover:bg-white"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>

        <div className="p-6 sm:p-8">
          <h3
            id="modal-title"
            className="text-2xl font-bold text-brand-navy"
          >
            {project.title[lang]}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-brand-muted">
            {project.summary[lang]}
          </p>

          <div className="mt-5 flex flex-wrap gap-4 text-xs text-brand-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden />{" "}
              {project.location[lang]}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden /> {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />{" "}
              {project.duration[lang]}
            </span>
          </div>

          <div className="mt-6 space-y-5">
            <DetailBlock
              label={t.challenge}
              body={project.challenge[lang]}
              tone="amber"
            />
            <DetailBlock
              label={t.approach}
              body={project.approach[lang]}
              tone="blue"
            />
            <DetailBlock
              label={t.outcome}
              body={project.outcome[lang]}
              tone="emerald"
            />
          </div>

          <div className="mt-6 rounded-xl border border-brand-border bg-brand-light p-4">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              <ListChecks className="h-3.5 w-3.5" aria-hidden /> {t.scope}
            </p>
            <ul className="mt-2 space-y-1">
              {project.scope[lang].map((item) => (
                <li key={item} className="text-sm text-brand-muted">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailBlock({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: "amber" | "blue" | "emerald";
}) {
  const toneClass = {
    amber: "text-amber-800",
    blue: "text-brand-navy",
    emerald: "text-emerald-900",
  }[tone];
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
        {label}
      </p>
      <p className={`mt-1.5 text-sm leading-relaxed ${toneClass}`}>{body}</p>
    </div>
  );
}