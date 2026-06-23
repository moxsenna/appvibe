import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { getPortfolioBySlug } from "@/lib/portfolio";
import { applyPageMeta } from "@/lib/seo";
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
  const { lang } = useLang();

  const item = slug ? getPortfolioBySlug(slug) : undefined;
  const htmlFile = slug ? FILENAMES[slug] : undefined;

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

  return (
    <div className="fixed inset-0 z-[60] bg-white">
      <iframe
        src={`/demo-pages/${htmlFile}`}
        className="h-full w-full border-0"
        title={item?.title[lang] ?? slug}
      />
    </div>
  );
}
