import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

type DemoNavbarProps = {
  brand: {
    name: string;
    tagline: string;
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

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-av-border bg-av-canvas/95 backdrop-blur-sm">
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-2.5"
          onClick={closeMenu}
          aria-label={brand.name}
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] font-mono text-xs font-medium text-white"
            style={{ backgroundColor: brand.brandColor }}
            aria-hidden
          >
            {brand.name.slice(0, 2).toUpperCase()}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-semibold tracking-tight text-av-ink">
              {brand.name}
            </span>
            <span className="block truncate text-xs text-av-secondary">
              {brand.tagline}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={lang === "id" ? `Navigasi ${brand.name}` : `${brand.name} navigation`}
        >
          <a
            href="#top"
            className="text-sm font-medium text-av-secondary transition-colors hover:text-av-ink"
          >
            {lang === "id" ? "Beranda" : "Home"}
          </a>
          <a
            href={whatsappUrl}
            onClick={handleClick}
            className="inline-flex min-h-[44px] items-center gap-2 rounded border border-av-border bg-av-surface px-4 text-sm font-medium text-av-ink transition-colors hover:border-av-ink"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {lang === "id" ? "Konsultasi AppVibe" : "Talk to AppVibe"}
          </a>
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[4px] text-av-ink transition-colors hover:bg-av-border-soft lg:hidden"
          aria-expanded={isOpen}
          aria-controls="demo-mobile-nav"
          aria-label={isOpen
            ? lang === "id" ? "Tutup menu" : "Close menu"
            : lang === "id" ? "Buka menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {isOpen && (
        <nav
          id="demo-mobile-nav"
          className="border-t border-av-border bg-av-canvas lg:hidden"
          aria-label={lang === "id" ? `Navigasi mobile ${brand.name}` : `${brand.name} mobile navigation`}
        >
          <Container as="div" className="py-4">
            <ul className="flex flex-col">
              <li className="border-b border-av-border-soft">
                <a
                  href="#top"
                  onClick={closeMenu}
                  className="flex min-h-[44px] items-center py-2 text-[15px] font-medium text-av-secondary"
                >
                  {lang === "id" ? "Beranda" : "Home"}
                </a>
              </li>
              <li className="pt-4">
                <a
                  href={whatsappUrl}
                  onClick={() => {
                    handleClick();
                    closeMenu();
                  }}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded bg-av-ink px-5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {lang === "id" ? "Konsultasi AppVibe via WhatsApp" : "Talk to AppVibe on WhatsApp"}
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
