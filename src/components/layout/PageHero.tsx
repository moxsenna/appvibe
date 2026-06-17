import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
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
    <section
      className={cn(
        "relative overflow-hidden bg-hero-gradient text-white section-padding-lg",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-violet/20 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <Badge variant="cyan" className="mb-4 bg-white/10 text-white">
              {eyebrow}
            </Badge>
          )}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}