import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Lang } from "@/i18n/types";
import { blogIndexPathWithSearch } from "@/lib/blog-url";
import { cn } from "@/lib/cn";

type BlogPaginationProps = {
  lang: Lang;
  page: number;
  totalPages: number;
  activeTag: string | null;
  prevLabel: string;
  nextLabel: string;
  pageLabel: (current: number, total: number) => string;
};

export function BlogPagination({
  lang,
  page,
  totalPages,
  activeTag,
  prevLabel,
  nextLabel,
  pageLabel,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const prevTo =
    page > 1 ? blogIndexPathWithSearch(lang, activeTag, page - 1) : null;
  const nextTo =
    page < totalPages
      ? blogIndexPathWithSearch(lang, activeTag, page + 1)
      : null;

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border pt-8"
      aria-label="Pagination"
    >
      {prevTo ? (
        <Link
          to={prevTo}
          className="inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-card transition-colors hover:border-brand-blue/30 hover:text-brand-blue"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          {prevLabel}
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-brand-muted/50">
          <ChevronLeft className="h-4 w-4" aria-hidden />
          {prevLabel}
        </span>
      )}

      <p className="text-sm font-medium text-brand-muted">
        {pageLabel(page, totalPages)}
      </p>

      {nextTo ? (
        <Link
          to={nextTo}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border border-brand-border bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-card transition-colors hover:border-brand-blue/30 hover:text-brand-blue",
          )}
        >
          {nextLabel}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm text-brand-muted/50">
          {nextLabel}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </nav>
  );
}