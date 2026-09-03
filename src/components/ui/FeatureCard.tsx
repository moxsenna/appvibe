import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
  className?: string;
};

export function FeatureCard({
  title,
  description,
  icon: Icon,
  children,
  className,
}: FeatureCardProps) {
  return (
    <Card hover className={cn("flex flex-col gap-4", className)}>
      {Icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded border border-av-border bg-av-canvas text-av-signal">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      )}
      <div>
        <h3 className="text-lg font-semibold text-av-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-av-secondary">
          {description}
        </p>
      </div>
      {children}
    </Card>
  );
}