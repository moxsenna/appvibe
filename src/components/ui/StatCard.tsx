import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";

type StatCardProps = {
  title: string;
  value: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
};

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <Card hover className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-brand-muted">{title}</p>
        {Icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
            <Icon className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
      <p className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
        {value}
      </p>
      {description && (
        <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
      )}
    </Card>
  );
}