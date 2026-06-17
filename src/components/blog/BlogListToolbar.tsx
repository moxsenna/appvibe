import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import type { Lang } from "@/i18n/types";
import { blogIndexPathWithSearch } from "@/lib/blog-url";
import { cn } from "@/lib/cn";

type BlogListToolbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  onClearFilters: () => void;
  tags: string[];
  lang: Lang;
  searchPlaceholder: string;
  filterAllLabel: string;
  clearFiltersLabel: string;
  resultsCount: number;
  resultsLabel: (count: number) => string;
};

export function BlogListToolbar({
  query,
  onQueryChange,
  activeTag,
  onTagChange,
  onClearFilters,
  tags,
  lang,
  searchPlaceholder,
  filterAllLabel,
  clearFiltersLabel,
  resultsCount,
  resultsLabel,
}: BlogListToolbarProps) {
  const hasFilters = Boolean(query.trim() || activeTag);

  return (
    <div className="mb-10 space-y-5">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-xl border border-brand-border bg-white py-3 pl-11 pr-10 text-sm shadow-card outline-none transition-colors placeholder:text-brand-muted/70 focus:border-brand-blue/40"
          aria-label={searchPlaceholder}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-brand-muted hover:text-brand-navy"
            aria-label={clearFiltersLabel}
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        )}
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onTagChange(null)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              activeTag === null
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-brand-border bg-white text-brand-muted hover:border-brand-blue/30 hover:text-brand-navy",
            )}
          >
            {filterAllLabel}
          </button>
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            const className = cn(
              "rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors",
              isActive
                ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                : "border-brand-border bg-white text-brand-muted hover:border-brand-blue/30 hover:text-brand-navy",
            );
            if (isActive) {
              return (
                <button key={tag} type="button" onClick={() => onTagChange(null)} className={className}>
                  {tag}
                </button>
              );
            }
            return (
              <Link
                key={tag}
                to={blogIndexPathWithSearch(lang, tag, 1)}
                className={className}
              >
                {tag}
              </Link>
            );
          })}
        </div>
      )}

      <p className="text-sm text-brand-muted" aria-live="polite">
        {resultsLabel(resultsCount)}
        {hasFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="ml-2 font-semibold text-brand-blue hover:underline"
          >
            {clearFiltersLabel}
          </button>
        )}
      </p>
    </div>
  );
}