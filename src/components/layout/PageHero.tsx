import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-av-border", className)}>
      <Container className="pb-10 pt-12 sm:pt-16">
        <div className="max-w-3xl">
          {eyebrow && <p className="av-eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 font-display text-display-lg font-normal tracking-tight text-av-ink">
            {title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-av-text sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
