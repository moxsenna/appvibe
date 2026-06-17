import type { ReactNode } from "react";
import { PageShell } from "@/components/layout/PageShell";

type CaseStudyLayoutProps = {
  children: ReactNode;
};

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return <PageShell>{children}</PageShell>;
}