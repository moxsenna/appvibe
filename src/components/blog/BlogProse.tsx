import { cn } from "@/lib/cn";

type BlogProseProps = {
  html: string;
  className?: string;
};

/**
 * Renders pre-compiled blog HTML (Shiki blocks included at build time).
 */
export function BlogProse({ html, className }: BlogProseProps) {
  return (
    <article
      className={cn(
        "blog-prose prose prose-slate max-w-none",
        "prose-headings:font-bold prose-headings:text-brand-navy",
        "prose-a:text-brand-blue prose-code:text-brand-navy",
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:p-0",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}