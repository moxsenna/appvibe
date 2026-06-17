import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "blue" | "violet" | "cyan" | "gray" | "success" | "warning";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  blue: "bg-blue-50 text-brand-blue",
  violet: "bg-violet-50 text-brand-violet",
  cyan: "bg-cyan-50 text-cyan-700",
  gray: "bg-slate-100 text-brand-muted",
  success: "bg-green-50 text-semantic-success",
  warning: "bg-amber-50 text-semantic-warning",
};

export function Badge({ children, variant = "blue", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}