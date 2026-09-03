import { cn } from "@/lib/cn";

type BlogProseProps = {
  html: string;
  className?: string;
};

export function BlogProse({ html, className }: BlogProseProps) {
  return (
    <div
      className={cn(
        "rounded border border-av-border bg-av-surface px-6 py-8 sm:px-10 sm:py-12",
        className,
      )}
    >
      <article
        className="blog-prose mx-auto max-w-none pl-1 sm:pl-3"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}