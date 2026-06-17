import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";

type BlogListToolbarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  tags: string[];
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
  tags,
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
          className="w-full rounded-xl border border-brand-border bg-white py-3.5 pl-11 pr-11 text-sm text-brand-navy shadow-card outline-none transition-colors placeholder:text-brand-muted focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/15"
          aria-label={searchPlaceholder}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-brand-muted transition-colors hover:bg-brand-light hover:text-brand-navy"
            aria-label={clearFiltersLabel}
          >
            <X className="h-4 w-4" />
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
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagChange(activeTag === tag ? null : tag)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold capitalize transition-colors",
                activeTag === tag
                  ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                  : "border-brand-border bg-white text-brand-muted hover:border-brand-blue/30 hover:text-brand-navy",
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <p className="text-sm text-brand-muted" aria-live="polite">
        {resultsLabel(resultsCount)}
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              onQueryChange("");
              onTagChange(null);
            }}
            className="ml-2 font-semibold text-brand-blue hover:underline"
          >
            {clearFiltersLabel}
          </button>
        )}
      </p>
    </div>
  );
}