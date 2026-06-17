import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark" | "outline";
type ButtonSize = "sm" | "md" | "lg" | "xl";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    viewTransition?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cta-gradient text-white shadow-sm hover:brightness-110 hover:shadow-md",
  secondary:
    "border border-brand-border bg-white text-brand-navy hover:bg-brand-light",
  ghost:
    "text-brand-muted hover:bg-brand-light hover:text-brand-navy",
  dark:
    "bg-brand-navy text-white hover:bg-slate-800 shadow-sm",
  outline:
    "border border-brand-blue text-brand-blue bg-transparent hover:bg-blue-50",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-5 text-sm rounded-xl",
  lg: "h-12 px-6 text-base rounded-xl",
  xl: "h-14 px-8 text-base rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    sizeStyles[size],
    variantStyles[variant],
    className,
  );

  if (href) {
    const { viewTransition, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      viewTransition?: boolean;
    };
    const isExternal = href.startsWith("http");

    if (!isExternal) {
      return (
        <Link to={href} viewTransition={viewTransition} className={baseStyles} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={baseStyles}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseStyles}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}