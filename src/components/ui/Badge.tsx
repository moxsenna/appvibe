import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "blue" | "violet" | "cyan" | "gray" | "success" | "warning";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  blue: "bg-av-signal/10 text-av-signal",
  violet: "bg-av-border-soft text-av-secondary",
  cyan: "bg-av-signal/10 text-av-signal",
  gray: "bg-av-canvas text-av-secondary",
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