import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { routes } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

const PORTFOLIO_SLUGS = [
  "company-profile",
  "webinar-landing",
  "klinik",
  "properti",
  "lead-dashboard",
] as const;

/** Display labels for portfolio/demo slugs — kept canonical (no translation). */
const SLUG_LABEL: Record<(typeof PORTFOLIO_SLUGS)[number], string> = {
  "company-profile": "Company Profile",
  "webinar-landing": "Webinar Landing",
  klinik: "Klinik",
  properti: "Properti",
  "lead-dashboard": "Lead Dashboard",
};

export function Footer() {
  const year = new Date().getFullYear();
  const { lang, dict } = useLang();
  const { common } = dict;

  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  const navLinks = [
    { label: common.nav.home, to: routes.home(lang) },
    { label: common.nav.services, to: routes.services(lang) },
    { label: common.nav.portfolio, to: routes.portfolio(lang) },
    { label: common.nav.demo, to: routes.demo(lang) },
    { label: common.nav.industries, to: routes.industries(lang) },
    { label: common.nav.about, to: routes.about(lang) },
    { label: common.nav.contact, to: routes.contact(lang) },
  ];

  const serviceLinks = [
    {
      label: common.footer.serviceLinks.companyProfile,
      to: `${routes.services(lang)}#layanan-company-profile`,
    },
    {
      label: common.footer.serviceLinks.landingPage,
      to: `${routes.services(lang)}#layanan-landing-page`,
    },
    {
      label: common.footer.serviceLinks.dashboard,
      to: `${routes.services(lang)}#layanan-dashboard`,
    },
    {
      label: common.footer.serviceLinks.automation,
      to: `${routes.services(lang)}#layanan-automation`,
    },
  ];

  const portfolioLinks = [
    { label: common.cta.seeAllPortfolio, to: routes.portfolio(lang) },
    ...PORTFOLIO_SLUGS.map((slug) => ({
      label: SLUG_LABEL[slug],
      to: routes.portfolioDetail(lang, slug),
    })),
  ];

  const demoLinks = [
    { label: common.cta.seeAllDemos, to: routes.demo(lang) },
    ...PORTFOLIO_SLUGS.map((slug) => ({
      label: SLUG_LABEL[slug],
      to: routes.demoDetail(lang, slug),
    })),
  ];

  const legalLinks = [
    { label: common.nav.uses, to: routes.uses(lang) },
    { label: common.footer.legal.privacy, to: "/privacy" },
    { label: common.footer.legal.terms, to: "/terms" },
    { label: common.footer.legal.sitemap, to: "/sitemap.xml", external: true },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-brand-navy text-slate-300">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-[0.04]" />
      <Container as="div" className="relative py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cta-gradient text-xs font-bold text-white">
                AV
              </span>
              <p className="text-lg font-bold text-white">{APP_NAME}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {common.footer.description}
            </p>
            <Button
              href={whatsappUrl}
              size="sm"
              className="mt-5"
              onClick={() =>
                trackEvent("cta_whatsapp_click", { location: "footer" })
              }
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {common.cta.contactUs}
            </Button>
            <div className="mt-5">
              <LanguageToggle variant="onDark" />
            </div>
          </div>

          <nav aria-label={common.aria.footerNav}>
            <p className="text-sm font-semibold text-white">
              {common.footer.heading.nav}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={common.footer.heading.services}>
            <p className="text-sm font-semibold text-white">
              {common.footer.heading.services}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={common.footer.heading.portfolio}>
            <p className="text-sm font-semibold text-white">
              {common.footer.heading.portfolio}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {portfolioLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={common.footer.heading.demoInteractive}>
            <p className="text-sm font-semibold text-white">
              {common.footer.heading.demoInteractive}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {demoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-700 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © {year} {APP_NAME}. {common.footer.copyright}
          </p>
          <nav aria-label={common.aria.legalNav}>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              {legalLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
