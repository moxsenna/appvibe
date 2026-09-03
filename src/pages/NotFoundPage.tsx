import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
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
      label: common.notFound.suggestions.home.label,
      href: routes.home(lang),
      desc: common.notFound.suggestions.home.desc,
    },
    {
      label: common.notFound.suggestions.services.label,
      href: routes.services(lang),
      desc: common.notFound.suggestions.services.desc,
    },
    {
      label: common.notFound.suggestions.portfolio.label,
      href: routes.portfolio(lang),
      desc: common.notFound.suggestions.portfolio.desc,
    },
    {
      label: common.notFound.suggestions.demo.label,
      href: routes.demo(lang),
      desc: common.notFound.suggestions.demo.desc,
    },
    {
      label: common.notFound.suggestions.contact.label,
      href: routes.contact(lang),
      desc: common.notFound.suggestions.contact.desc,
    },
  ];

  return (
    <PageShell>
      <section className="border-b border-av-border">
        <Container className="py-14 text-center lg:py-20">
          <p className="av-eyebrow">
            {common.notFound.eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-display-lg font-normal tracking-tight text-av-ink">
            {common.notFound.title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-av-secondary">
            {common.notFound.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
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

      <section className="bg-av-surface">
        <Container className="py-14 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="av-eyebrow text-av-signal">
              {common.notFound.suggestionEyebrow}
            </p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-av-ink sm:text-2xl">
              {common.notFound.suggestionHeading}
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedLinks.map((link) => {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center justify-between gap-3 border-t border-av-border-soft py-4"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-av-ink transition-colors group-hover:text-av-signal">
                      {link.label}
                    </p>
                    <p className="text-xs text-av-muted">{link.desc}</p>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-av-muted transition-transform group-hover:translate-x-1"
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
