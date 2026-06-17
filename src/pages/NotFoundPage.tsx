import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowRight, Layout, Sparkles, Briefcase, Building2 } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { applyPageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { dictionaries } from "@/i18n/dictionaries";
import { LangProvider } from "@/i18n/LangProvider";
import type { Lang } from "@/i18n/types";

/**
 * NotFoundPage is the only route mounted outside <LangProvider> (it catches
 * "*" at the router root). To make it bilingual without breaking that pattern
 * we detect the language from the URL ourselves and wrap children in a
 * dedicated provider so PageShell (Navbar/Footer/etc.) still has context.
 */
function detectLangFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "id";
}

export function NotFoundPage() {
  const location = useLocation();
  const lang = detectLangFromPath(location.pathname);

  return (
    <LangProvider lang={lang}>
      <NotFoundContent lang={lang} />
    </LangProvider>
  );
}

function NotFoundContent({ lang }: { lang: Lang }) {
  const dict = dictionaries[lang];
  const { common } = dict;

  useEffect(() => {
    applyPageMeta(
      {
        id: {
          title: dictionaries.id.common.notFound.title,
          description: dictionaries.id.common.notFound.description,
        },
        en: {
          title: dictionaries.en.common.notFound.title,
          description: dictionaries.en.common.notFound.description,
        },
        paths: { id: "/404", en: "/en/404" },
      },
      lang,
    );
  }, [lang]);

  const suggestedLinks = [
    {
      icon: Home,
      label: common.notFound.suggestions.home.label,
      href: routes.home(lang),
      desc: common.notFound.suggestions.home.desc,
    },
    {
      icon: Briefcase,
      label: common.notFound.suggestions.services.label,
      href: routes.services(lang),
      desc: common.notFound.suggestions.services.desc,
    },
    {
      icon: Layout,
      label: common.notFound.suggestions.portfolio.label,
      href: routes.portfolio(lang),
      desc: common.notFound.suggestions.portfolio.desc,
    },
    {
      icon: Sparkles,
      label: common.notFound.suggestions.demo.label,
      href: routes.demo(lang),
      desc: common.notFound.suggestions.demo.desc,
    },
    {
      icon: Building2,
      label: common.notFound.suggestions.contact.label,
      href: routes.contact(lang),
      desc: common.notFound.suggestions.contact.desc,
    },
  ];

  return (
    <PageShell>
      <section className="section-padding-lg">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {common.notFound.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl lg:text-5xl">
            {common.notFound.title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-brand-muted sm:text-lg">
            {common.notFound.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={routes.home(lang)} size="lg">
              <Home className="h-5 w-5" aria-hidden />
              {common.cta.backToHome}
            </Button>
            <Button href={routes.contact(lang)} variant="secondary" size="lg">
              {common.cta.consult}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {common.notFound.suggestionEyebrow}
            </p>
            <h2 className="mt-2 text-xl font-bold text-brand-navy sm:text-2xl">
              {common.notFound.suggestionHeading}
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center gap-3 rounded-2xl border border-brand-border bg-white p-4 shadow-sm transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue transition-transform group-hover:scale-105">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-brand-navy">
                      {link.label}
                    </p>
                    <p className="text-xs text-brand-muted">{link.desc}</p>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-brand-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-blue"
                    aria-hidden
                  />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
