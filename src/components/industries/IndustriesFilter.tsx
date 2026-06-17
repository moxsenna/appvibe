import { cn } from "@/lib/cn";

export type IndustryCategory =
  | "all"
  | "jasa"
  | "kesehatan"
  | "properti"
  | "edukasi"
  | "umkm"
  | "travel";

export type CategoryOption = {
  id: IndustryCategory;
  label: string;
};

export const categoryOptions: CategoryOption[] = [
  { id: "all", label: "Semua" },
  { id: "jasa", label: "Jasa & Profesional" },
  { id: "kesehatan", label: "Kesehatan & Klinik" },
  { id: "properti", label: "Properti & Konstruksi" },
  { id: "edukasi", label: "Edukasi & Personal Brand" },
  { id: "umkm", label: "UMKM & Kuliner" },
  { id: "travel", label: "Travel & Hospitality" },
];

type IndustriesFilterProps = {
  active: IndustryCategory;
  onChange: (c: IndustryCategory) => void;
};

export function IndustriesFilter({ active, onChange }: IndustriesFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categoryOptions.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => onChange(c.id)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === c.id
              ? "bg-brand-blue text-white shadow-sm"
              : "border border-brand-border bg-white text-brand-muted hover:border-brand-blue hover:text-brand-blue",
          )}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
