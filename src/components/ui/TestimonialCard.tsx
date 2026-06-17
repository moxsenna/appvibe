import { Quote } from "lucide-react";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role?: string;
  business?: string;
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  role,
  business,
  className,
}: TestimonialCardProps) {
  const subtitle = [role, business].filter(Boolean).join(" · ");

  return (
    <Card hover className={cn("flex flex-col gap-4", className)}>
      <Quote className="h-6 w-6 text-brand-blue/40" aria-hidden />
      <blockquote className="text-sm leading-relaxed text-brand-dark sm:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="border-t border-brand-border pt-4">
        <cite className="not-italic">
          <p className="font-semibold text-brand-navy">{name}</p>
          {subtitle && (
            <p className="mt-0.5 text-sm text-brand-muted">{subtitle}</p>
          )}
        </cite>
      </footer>
    </Card>
  );
}