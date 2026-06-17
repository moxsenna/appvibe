import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { useDict } from "@/i18n/use-dict";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const { common } = useDict();
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        {common.aria.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
