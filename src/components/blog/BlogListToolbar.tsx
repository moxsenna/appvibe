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
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-av-muted"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded border border-av-border bg-av-surface py-3 pl-11 pr-10 text-sm text-av-ink outline-none transition-colors placeholder:text-av-muted/70 focus:border-av-signal"
          aria-label={searchPlaceholder}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 min-h-[44px] min-w-[44px] -translate-y-1/2 rounded p-1 text-av-muted hover:text-av-ink"
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
              "min-h-[44px] rounded-[4px] border px-3.5 py-1.5 text-xs font-medium transition-colors",
              activeTag === null
                ? "border-av-ink bg-av-ink text-white"
                : "border-av-border bg-av-surface text-av-secondary hover:border-av-ink hover:text-av-ink",
            )}
          >
            {filterAllLabel}
          </button>
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            const className = cn(
              "min-h-[44px] rounded-[4px] border px-3.5 py-1.5 text-xs font-medium capitalize transition-colors",
              isActive
                ? "border-av-signal bg-av-signal/10 text-av-signal"
                : "border-av-border bg-av-surface text-av-secondary hover:border-av-ink hover:text-av-ink",
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

      <p className="text-sm text-av-secondary" aria-live="polite">
        {resultsLabel(resultsCount)}
        {hasFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="ml-2 font-medium text-av-ink underline decoration-av-signal underline-offset-4 hover:text-av-signal"
          >
            {clearFiltersLabel}
          </button>
        )}
      </p>
    </div>
  );
}