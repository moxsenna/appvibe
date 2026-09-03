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
        "rounded border border-av-border bg-av-surface",
        paddingStyles[padding],
        hover && "transition-colors duration-200 hover:border-av-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}