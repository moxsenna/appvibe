import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";

type DemoFooterProps = {
  brand: {
    name: string;
    tagline: string;
    brandColor: string;
    accentColor: string;
  };
};

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

export function DemoFooter({ brand }: DemoFooterProps) {
  const year = new Date().getFullYear();
  const initial = brand.name.slice(0, 2).toUpperCase();
  const { lang } = useLang();

  // Locale-specific copy lives inline here — DemoFooter is small enough that
  // adding two more dict keys for a single string each isn't worth the noise.
  const backLabel =
    lang === "id"
      ? `← Kembali ke ${APP_NAME}`
      : `← Back to ${APP_NAME}`;
  const byline =
    lang === "id"
      ? `Website oleh ${APP_NAME}`
      : `Website by ${APP_NAME}`;
  const copyright =
    lang === "id"
      ? `© ${year} ${brand.name}. All rights reserved.`
      : `© ${year} ${brand.name}. All rights reserved.`;

  return (
    <footer className="relative border-t border-slate-800 bg-brand-navy text-slate-300">
      <Container as="div" className="relative py-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${brand.brandColor}, ${brand.accentColor})`,
                }}
                aria-hidden
              >
                {initial}
              </span>
              <p className="text-base font-semibold text-white">{brand.name}</p>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              {brand.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
            <Link
              to={routes.home(lang)}
              className="font-semibold text-white transition-colors hover:text-cyan-300"
            >
              {backLabel}
            </Link>
            <p className="text-xs text-slate-500">{byline}</p>
          </div>
        </div>

        <p className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-500">
          {copyright}
        </p>
      </Container>
    </footer>
  );
}
