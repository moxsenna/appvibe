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
          eyebrow: "Template landing · simulasi",
          body: "Ini referensi visual HTML — bukan website klien sungguhan. Demo React interaktif ada di etalase Demo.",
          back: "Semua demo",
          consult: "Diskusi proyek serupa",
        }
      : {
          eyebrow: "Landing template · simulation",
          body: "HTML visual reference — not a live client site. Full React interactive demos live in the Demo catalogue.",
          back: "All demos",
          consult: "Discuss a similar project",
        };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-white">
      <div className="shrink-0 border-b border-amber-200/80 bg-amber-50 px-3 py-2.5 text-amber-950 sm:px-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-800">
              {banner.eyebrow}
            </p>
            <p className="truncate text-xs text-amber-900/90 sm:text-sm">
              {banner.body}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to={routes.demo(lang)}
              className="inline-flex items-center gap-1 rounded-lg border border-amber-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-amber-950 hover:bg-amber-100"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              {banner.back}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-cta-gradient px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:brightness-110"
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
