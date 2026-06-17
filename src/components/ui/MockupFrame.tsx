import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MockupVariant = "browser" | "phone";

type MockupFrameProps = {
  children?: ReactNode;
  variant?: MockupVariant;
  title?: string;
  className?: string;
};

export function MockupFrame({
  children,
  variant = "browser",
  title = "Preview",
  className,
}: MockupFrameProps) {
  if (variant === "phone") {
    return (
      <div
        className={cn(
          "mx-auto w-full max-w-[280px] rounded-[2rem] border-4 border-slate-800 bg-slate-800 p-2 shadow-card-hover",
          className,
        )}
      >
        <div className="mb-2 flex justify-center">
          <div className="h-1.5 w-16 rounded-full bg-slate-600" />
        </div>
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          {children ?? <MockupPlaceholder label="Mobile preview" />}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card-hover",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-brand-border bg-brand-light px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-xs text-brand-muted">
          {title}
        </div>
      </div>
      <div className="aspect-[16/10] bg-gradient-to-br from-brand-light to-white">
        {children ?? <MockupPlaceholder label="Browser preview" />}
      </div>
    </div>
  );
}

function MockupPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="h-12 w-12 rounded-xl bg-cta-gradient opacity-80" />
      <p className="text-sm font-medium text-brand-muted">{label}</p>
    </div>
  );
}