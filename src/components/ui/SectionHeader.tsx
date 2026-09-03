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
        <p className="av-eyebrow mb-3 text-av-signal">{eyebrow}</p>
      )}
      <TitleTag className="text-2xl font-semibold leading-tight tracking-tight text-av-ink sm:text-3xl lg:text-4xl">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-av-text sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}