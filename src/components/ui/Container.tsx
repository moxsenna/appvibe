import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1360px] px-5 sm:px-6 lg:px-8 min-[1440px]:px-[52px]",
        className,
      )}
    >
      {children}
    </Component>
  );
}