import { Search } from "lucide-react";
import { demoFilters } from "@/lib/demos";
import type { DemoCategory } from "@/types/demo";
import { cn } from "@/lib/cn";
import { useDict } from "@/i18n/use-dict";

type DemoFilterProps = {
  activeCategory: DemoCategory | "all";
  searchQuery: string;
  resultCount: number;
  onCategoryChange: (category: DemoCategory | "all") => void;
  onSearchChange: (query: string) => void;
};

export function DemoFilter({
  activeCategory,
  searchQuery,
  resultCount,
  onCategoryChange,
  onSearchChange,
}: DemoFilterProps) {
  const { common, pages } = useDict();
  const filterCopy = pages.demoIndex.filter;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {demoFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={cn(
              "min-h-[44px] rounded-[4px] border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === filter.category
                ? "border-av-ink bg-av-ink text-white"
                : "border-av-border bg-av-surface text-av-secondary hover:border-av-ink hover:text-av-ink",
            )}
            onClick={() => onCategoryChange(filter.category)}
          >
            {common.demoFilters[filter.id]}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-av-muted"
            aria-hidden
          />
          <input
            type="search"
            value={searchQuery}
            placeholder={filterCopy.searchPlaceholder}
            className="w-full rounded border border-av-border bg-av-surface py-2.5 pl-10 pr-4 text-sm text-av-ink placeholder:text-av-muted focus:border-av-signal focus:outline-none focus:ring-2 focus:ring-av-signal/20"
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label={filterCopy.searchAriaLabel}
          />
        </div>
        <p className="text-sm text-av-muted">
          {filterCopy.resultCount.replace("{{n}}", String(resultCount))}
        </p>
      </div>
    </div>
  );
}