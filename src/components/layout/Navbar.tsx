import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";
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

  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  const navItems = [
    { label: common.nav.home, to: routes.home(lang) },
    { label: common.nav.services, to: routes.services(lang) },
    { label: common.nav.portfolio, to: routes.portfolio(lang) },
    { label: common.nav.demo, to: routes.demo(lang) },
    { label: common.nav.industries, to: routes.industries(lang) },
    { label: common.nav.about, to: routes.about(lang) },
    { label: common.nav.blog, to: routes.blog(lang) },
  ];

  const handleWhatsAppClick = () => {
    trackEvent("cta_whatsapp_click", { location: "navbar" });
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <Container as="div" className="flex items-center justify-between py-3.5">
        <Link
          to={routes.home(lang)}
          className="group flex items-center gap-2"
          onClick={closeMenu}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cta-gradient text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            AV
          </span>
          <span className="text-lg font-bold tracking-tight text-brand-navy">
            {APP_NAME}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label={common.aria.mainNav}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === routes.home(lang)}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-gradient-to-r from-blue-50 to-violet-50 text-brand-blue shadow-sm"
                    : "text-brand-muted hover:bg-brand-light hover:text-brand-navy",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LanguageToggle className="ml-2" />
          <Button
            href={whatsappUrl}
            size="sm"
            onClick={handleWhatsAppClick}
            className="ml-2 shadow-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {common.cta.consultShort}
          </Button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-brand-navy transition-colors hover:bg-brand-light"
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
          className="border-t border-brand-border bg-white/95 backdrop-blur-md lg:hidden"
          aria-label={common.aria.mobileNav}
        >
          <Container as="div" className="py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === routes.home(lang)}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium",
                        isActive
                          ? "bg-gradient-to-r from-blue-50 to-violet-50 text-brand-blue"
                          : "text-brand-muted hover:bg-brand-light",
                      )
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-3">
                <Button
                  href={whatsappUrl}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    handleWhatsAppClick();
                    closeMenu();
                  }}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  {common.cta.consult}
                </Button>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
