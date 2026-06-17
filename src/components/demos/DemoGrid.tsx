import type { DemoItem } from "@/types/demo";
import { DemoCard } from "@/components/demos/DemoCard";
import { Card } from "@/components/ui/Card";

type DemoGridProps = {
  items: DemoItem[];
};

export function DemoGrid({ items }: DemoGridProps) {
  if (items.length === 0) {
    return (
      <Card className="text-center">
        <p className="text-lg font-semibold text-brand-navy">
          Tidak ada demo yang cocok
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
        <DemoCard key={item.id} item={item} />
      ))}
    </div>
  );
}
