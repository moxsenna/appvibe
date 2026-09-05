import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { routes } from "@/lib/routes";
import { Container } from "@/components/ui/Container";
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

const SLUG_LABEL: Record<(typeof PORTFOLIO_SLUGS)[number], string> = {
  "company-profile": "Company Profile",
  "webinar-landing": "Webinar Landing",
  klinik: "Klinik",
  properti: "Properti",
  "lead-dashboard": "LeadFlow CRM",
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
    { label: common.nav.blog, to: routes.blog(lang) },
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
    { label: common.footer.legal.privacy, to: routes.privacy(lang) },
    { label: common.footer.legal.terms, to: routes.terms(lang) },
    { label: common.footer.legal.sitemap, to: "/sitemap.xml", external: true },
  ];

  const columns = [
    { heading: common.footer.heading.nav, links: navLinks },
    { heading: common.footer.heading.services, links: serviceLinks },
    { heading: common.footer.heading.portfolio, links: portfolioLinks },
    { heading: common.footer.heading.demoInteractive, links: demoLinks },
  ];

  return (
    <footer className="bg-av-ink text-av-dark-body">
      <Container as="div" className="pb-8 pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo-dark.webp"
                alt={APP_NAME}
                width={480}
                height={184}
                className="h-8 w-auto"
                loading="lazy"
              />
            </div>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-av-dark-body">
              {common.footer.description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("cta_whatsapp_click", { location: "footer" })
              }
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 border-b border-av-dark-border pb-1 text-sm font-medium text-white transition-colors hover:border-av-signal-on-dark hover:text-av-signal-on-dark"
            >
              {common.cta.consultShort}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <div className="mt-6">
              <LanguageToggle variant="onDark" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-6">
            {columns.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-dark-muted">
                  {col.heading}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-av-dark-body transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-av-dark-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-av-dark-muted">
            © {year} {APP_NAME}. {common.footer.copyright}
          </p>
          <nav aria-label={common.aria.legalNav}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-av-dark-muted">
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
