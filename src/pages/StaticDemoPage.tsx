import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { getPortfolioBySlug } from "@/lib/portfolio";
import { applyPageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import {
  buildWhatsAppUrl,
  getDemoMessage,
} from "@/lib/whatsapp";
import { useLang } from "@/i18n/use-lang";

const FILENAMES: Record<string, string> = {
  "natura-skin-clinic": "01-natura-skin-clinic.html",
  "nusa-grove-residences": "02-nusa-grove-residences.html",
  "kelaspintar-ai": "03-kelaspintar-ai.html",
  "leadloop-crm": "04-leadloop-crm.html",
  "banyu-villa": "05-banyu-villa.html",
  "ruangtumbuh-interior": "06-ruangtumbuh-interior.html",
  "lunaria-wedding": "07-lunaria-wedding.html",
  "satria-print": "08-satria-print.html",
  "kopi-pagi": "09-kopi-pagi.html",
  "mitra-legal": "10-mitra-legal.html",
};

export function StaticDemoPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, dict } = useLang();

  const item = slug ? getPortfolioBySlug(slug) : undefined;
  const htmlFile = slug ? FILENAMES[slug] : undefined;
  const title = item?.title[lang] ?? slug ?? "Demo";
  const whatsappUrl = buildWhatsAppUrl(getDemoMessage(lang, title));

  useEffect(() => {
    if (item) {
      applyPageMeta(
        {
          id: { title: item.title.id, description: item.summary.id },
          en: { title: item.title.en, description: item.summary.en },
          paths: {
            id: `/demo/${item.slug}`,
            en: `/en/demos/${item.slug}`,
          },
        },
        lang,
      );
    }
  }, [item, lang]);

  if (!htmlFile) {
    return <NotFoundPage />;
  }

  const banner =
    lang === "id"
      ? {
          body: "Desain & pengembangan oleh AppVibe Studio",
          back: "Semua demo",
          consult: "Diskusi proyek serupa",
        }
      : {
          body: "Design & development by AppVibe Studio",
          back: "All demos",
          consult: "Discuss a similar project",
        };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      <div className="shrink-0 border-b border-av-dark-border bg-av-ink px-3 py-2.5 text-av-dark-body sm:px-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <p className="min-w-0 flex-1 truncate text-xs sm:text-sm">
            <span className="font-semibold text-white">AppVibe Studio</span>
            {" — "}
            {banner.body}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to={routes.demo(lang)}
              className="inline-flex min-h-[44px] items-center gap-1 rounded border border-av-dark-border px-2.5 py-1.5 text-xs font-medium text-av-dark-body hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              {banner.back}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1 rounded bg-av-canvas px-2.5 py-1.5 text-xs font-semibold text-av-ink"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              {banner.consult}
            </a>
          </div>
        </div>
      </div>
      <iframe
        src={`/demo-pages/${htmlFile}`}
        className="min-h-0 w-full flex-1 border-0"
        title={item?.title[lang] ?? slug}
      />
      {/* keep dict reference for future i18n of banner */}
      <span className="sr-only">{dict.common.demo.bannerTitle}</span>
    </div>
  );
}
