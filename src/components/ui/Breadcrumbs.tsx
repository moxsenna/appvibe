import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

export type Crumb = {
  label: string;
  to?: string;
};

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const linkCls =
    tone === "dark"
      ? "text-white/70 transition-colors hover:text-white"
      : "text-av-secondary transition-colors hover:text-av-ink";
  const currentCls = tone === "dark" ? "text-white" : "text-av-ink";
  const sepCls = tone === "dark" ? "text-white/40" : "text-av-muted";

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex min-h-[44px] flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className={sepCls}>
                  /
                </span>
              )}
              {item.to && !isLast ? (
                <Link to={item.to} className={cn("font-medium", linkCls)}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className={cn("font-medium", currentCls)}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
