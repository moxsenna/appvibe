import type { PortfolioItem } from "@/types/portfolio";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { Card } from "@/components/ui/Card";

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <Card className="text-center">
        <p className="text-lg font-semibold text-brand-navy">
          Tidak ada portfolio yang cocok
        </p>
        <p className="mt-2 text-sm text-brand-muted">
          Coba ubah filter kategori atau kata kunci pencarian Anda.
        </p>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
}