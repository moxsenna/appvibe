import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
};

const paddingStyles = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border bg-white shadow-card",
        paddingStyles[padding],
        hover && "transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}