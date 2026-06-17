import type { ReactNode } from "react";
import { DemoNavbar } from "@/components/demos/DemoNavbar";
import { DemoFooter } from "@/components/demos/DemoFooter";
import { DemoMobileStickyCTA } from "@/components/demos/DemoMobileStickyCTA";

type DemoShellProps = {
  brand: {
    name: string;
    tagline: string;
    brandColor: string;
    accentColor: string;
  };
  whatsappUrl: string;
  /** Demo slug used to wire `view-transition-name` with the card cover. */
  slug?: string;
  children: ReactNode;
};

export function DemoShell({ brand, whatsappUrl, slug, children }: DemoShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <DemoNavbar brand={brand} />
      <main
        className="flex-1 pb-20 md:pb-0"
        style={slug ? { viewTransitionName: `demo-cover-${slug}` } : undefined}
      >
        {children}
      </main>
      <DemoFooter brand={brand} />
      <DemoMobileStickyCTA whatsappUrl={whatsappUrl} brandName={brand.name} />
    </div>
  );
}
