import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, dict } = useLang();
  const { common } = dict;
  const location = useLocation();

  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  const navItems = [
    { label: common.nav.services, to: routes.services(lang) },
    { label: common.nav.portfolio, to: routes.portfolio(lang) },
    { label: common.nav.demo, to: routes.demo(lang) },
    { label: common.nav.industries, to: routes.industries(lang) },
    { label: common.nav.about, to: routes.about(lang) },
    { label: common.nav.blog, to: routes.blog(lang) },
    { label: common.nav.contact, to: routes.contact(lang) },
  ];

  const processHref = `${routes.home(lang)}#proses`;

  const handleWhatsAppClick = (placement: string) => {
    trackEvent("cta_whatsapp_click", { location: placement });
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-av-border bg-av-canvas/95 backdrop-blur-sm">
      <Container as="div" className="flex h-16 items-center justify-between gap-4">
        <Link
          to={routes.home(lang)}
          className="flex shrink-0 items-center gap-2.5"
          onClick={closeMenu}
          aria-label={APP_NAME}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[4px] bg-av-ink font-mono text-xs font-medium text-av-canvas">
            AV
          </span>
          <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-av-ink">
            {APP_NAME}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label={common.aria.mainNav}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === routes.home(lang)}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-av-ink underline decoration-av-signal decoration-2 underline-offset-8"
                    : "text-av-secondary hover:text-av-ink",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={processHref}
            className="text-sm font-medium text-av-secondary transition-colors hover:text-av-ink"
          >
            {common.nav.process}
          </a>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageToggle />
          <Button
            href={whatsappUrl}
            size="sm"
            onClick={() => handleWhatsAppClick("navbar")}
          >
            {common.cta.consultShort}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[4px] text-av-ink transition-colors hover:bg-av-border-soft"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? common.aria.closeMenu : common.aria.openMenu}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-av-border bg-av-canvas xl:hidden"
          aria-label={common.aria.mobileNav}
        >
          <Container as="div" className="py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.to} className="border-b border-av-border-soft last:border-0">
                  <NavLink
                    to={item.to}
                    end={item.to === routes.home(lang)}
                    className={({ isActive }) =>
                      cn(
                        "flex min-h-[44px] items-center justify-between py-2 text-[15px] font-medium",
                        isActive ? "text-av-ink" : "text-av-secondary",
                      )
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="border-b border-av-border-soft">
                <a
                  href={processHref}
                  className="flex min-h-[44px] items-center py-2 text-[15px] font-medium text-av-secondary"
                  onClick={closeMenu}
                >
                  {common.nav.process}
                </a>
              </li>
              <li className="pt-4">
                <Button
                  href={whatsappUrl}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    handleWhatsAppClick("navbar-mobile");
                    closeMenu();
                  }}
                >
                  {common.cta.consultShort}
                  <ArrowUpRight className="h-5 w-5" aria-hidden />
                </Button>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
