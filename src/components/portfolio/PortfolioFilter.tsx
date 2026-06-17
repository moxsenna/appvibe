import { Search } from "lucide-react";
import { portfolioFilters } from "@/lib/portfolio";
import type { PortfolioCategory } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type PortfolioFilterProps = {
  activeCategory: PortfolioCategory | "all";
  searchQuery: string;
  onCategoryChange: (category: PortfolioCategory | "all") => void;
  onSearchChange: (query: string) => void;
  resultCount: number;
};

export function PortfolioFilter({
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  resultCount,
}: PortfolioFilterProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {portfolioFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === filter.category
                ? "bg-brand-blue text-white"
                : "bg-brand-light text-brand-muted hover:bg-slate-200 hover:text-brand-navy",
            )}
            onClick={() => onCategoryChange(filter.category)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
            aria-hidden
          />
          <input
            type="search"
            value={searchQuery}
            placeholder="Cari berdasarkan judul, niche, atau tag..."
            className="w-full rounded-xl border border-brand-border bg-white py-2.5 pl-10 pr-4 text-sm text-brand-dark placeholder:text-brand-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Cari portfolio"
          />
        </div>
        <p className="text-sm text-brand-muted">
          {resultCount} portfolio ditemukan
        </p>
      </div>
    </div>
  );
}