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

  const backLabel =
    lang === "id"
      ? `← Kembali ke ${APP_NAME}`
      : `← Back to ${APP_NAME}`;
  const byline =
    lang === "id"
      ? `Website oleh ${APP_NAME}`
      : `Website by ${APP_NAME}`;

  return (
    <footer className="bg-av-ink text-av-dark-body">
      <Container as="div" className="py-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-[4px] font-mono text-xs font-medium text-white"
                style={{ backgroundColor: brand.brandColor }}
                aria-hidden
              >
                {initial}
              </span>
              <p className="text-[15px] font-semibold tracking-tight text-white">{brand.name}</p>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-av-dark-body">
              {brand.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
            <Link
              to={routes.home(lang)}
              className="inline-flex min-h-[44px] items-center font-medium text-white transition-colors hover:text-av-signal-on-dark"
            >
              {backLabel}
            </Link>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-dark-muted">{byline}</p>
          </div>
        </div>

        <p className="mt-8 border-t border-av-dark-border pt-6 text-xs text-av-dark-muted">
          © {year} {brand.name}. {lang === "id" ? "Demo simulasi oleh" : "Simulation demo by"} {APP_NAME}.
        </p>
      </Container>
    </footer>
  );
}
