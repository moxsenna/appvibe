import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs: TitleTag = "h2",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {eyebrow}
        </p>
      )}
      <TitleTag className="text-2xl font-bold leading-tight tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}