import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

type DemoNavbarProps = {
  brand: {
    name: string;
    brandColor: string;
    accentColor: string;
  };
};

export function DemoNavbar({ brand }: DemoNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  const handleClick = () => {
    trackEvent("cta_whatsapp_click", { location: "demo_navbar", brand: brand.name });
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <Container as="div" className="flex items-center justify-between py-3.5">
        <a
          href="#top"
          className="group flex items-center gap-2"
          onClick={closeMenu}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${brand.brandColor}, ${brand.accentColor})`,
            }}
            aria-hidden
          >
            {brand.name.slice(0, 2).toUpperCase()}
          </span>
          <span className="text-base font-bold tracking-tight text-brand-navy">
            {brand.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={`Navigasi ${brand.name}`}
        >
          <a
            href="#top"
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-light hover:text-brand-navy"
          >
            Beranda
          </a>
          <a
            href={routes.portfolio(lang)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-light hover:text-brand-navy"
          >
            Portfolio
          </a>
          <a
            href={routes.demo(lang)}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-muted transition-colors hover:bg-brand-light hover:text-brand-navy"
          >
            Demo
          </a>
          <a
            href={whatsappUrl}
            onClick={handleClick}
            className="ml-2 inline-flex h-9 items-center gap-2 rounded-lg border border-brand-border bg-white px-4 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-light"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Konsultasi AppVibe
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-navy transition-colors hover:bg-brand-light lg:hidden"
          aria-expanded={isOpen}
          aria-controls="demo-mobile-nav"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <nav
          id="demo-mobile-nav"
          className="border-t border-brand-border bg-white/95 backdrop-blur-md lg:hidden"
          aria-label={`Navigasi mobile ${brand.name}`}
        >
          <Container as="div" className="py-4">
            <ul className="flex flex-col gap-1">
              {[
                { label: "Beranda", href: "#top" },
                { label: "Portfolio AppVibe", href: routes.portfolio(lang) },
                { label: "Semua Demo AppVibe", href: routes.demo(lang) },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium",
                      "text-brand-muted hover:bg-brand-light hover:text-brand-navy",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={whatsappUrl}
                  onClick={() => {
                    handleClick();
                    closeMenu();
                  }}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-brand-border bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-light"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Konsultasi AppVibe via WhatsApp
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
