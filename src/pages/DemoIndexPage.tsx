import { useMemo, useState } from "react";
import {
  Layout,
  MessageCircle,
  Monitor,
  Smartphone,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { DemoFilter } from "@/components/demos/DemoFilter";
import { DemoGrid } from "@/components/demos/DemoGrid";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { demos, filterDemoItems } from "@/lib/demos";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";
import type { DemoCategory } from "@/types/demo";

// Page-specific copy still hardcoded (ID) — moved to a translated data file
// in Phase 4. Render conditional inline strings via the `lang` flag so the
// chrome remains bilingual today.
const FAQ_ID = [
  {
    question: "Apakah demo ini adalah website sungguhan?",
    answer:
      "Demo adalah mockup interaktif yang menampilkan struktur, tone, dan alur website jadi untuk niche tertentu. Semua brand, konten, dan data adalah contoh/simulasi — bukan klien nyata.",
  },
  {
    question: "Apakah saya bisa ubah isi demo untuk bisnis saya?",
    answer:
      "Bisa. Demo adalah titik awal diskusi. Setelah konsultasi, kami sesuaikan struktur, copy, dan tone agar relevan dengan bisnis, industri, dan target pasar Anda.",
  },
  {
    question: "Berapa biaya untuk membuat website seperti demo?",
    answer:
      "Tergantung scope dan kompleksitas. Konsultasikan kebutuhan Anda via WhatsApp — kami bantu rekomendasikan struktur yang paling masuk akal untuk tahap bisnis Anda saat ini.",
  },
  {
    question: "Apakah demo bisa dipakai untuk presentasi ke tim atau partner?",
    answer:
      "Bisa. Demo dan studi kasus adalah alat bantu untuk menunjukkan visi produk ke tim internal, partner, atau calon investor. Kami sarankan tetap memberi konteks bahwa ini mockup.",
  },
];

const FAQ_EN = [
  {
    question: "Are these demos real websites?",
    answer:
      "Each demo is an interactive mockup that shows the structure, tone, and flow of a finished website for a specific niche. The brand, content, and data are illustrative — not a real client.",
  },
  {
    question: "Can the demo content be tailored to my business?",
    answer:
      "Yes. The demo is a starting point. After the consultation we adapt the structure, copy, and tone so they fit your business, industry, and audience.",
  },
  {
    question: "How much does a website like this cost?",
    answer:
      "It depends on scope and complexity. Reach out on WhatsApp and we'll recommend a structure that makes sense for where your business is today.",
  },
  {
    question: "Can I share these demos with my team or partners?",
    answer:
      "Yes. The demos and case studies help you align internal teams, partners, or potential investors on the product vision. We suggest mentioning that these are mockups.",
  },
];

export function DemoIndexPage() {
  const [activeCategory, setActiveCategory] = useState<DemoCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  usePageMeta("demoIndex", "demo");
  const { lang, dict } = useLang();
  const { common, pages } = dict;

  const filteredItems = useMemo(
    () => filterDemoItems(demos, activeCategory, searchQuery, lang),
    [activeCategory, searchQuery, lang],
  );

  const interactiveItems = useMemo(
    () => filteredItems.filter((d) => d.kind === "interactive"),
    [filteredItems],
  );
  const templateItems = useMemo(
    () => filteredItems.filter((d) => d.kind === "template"),
    [filteredItems],
  );

  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));
  const faqItems = lang === "id" ? FAQ_ID : FAQ_EN;

  return (
    <PageShell>
      <PageHero
        eyebrow={pages.demoIndex.hero.eyebrow}
        title={pages.demoIndex.hero.title}
        description={pages.demoIndex.hero.description}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href={whatsappUrl}
            size="lg"
            onClick={() =>
              trackEvent("cta_whatsapp_click", { location: "demo_index_hero" })
            }
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            {common.cta.consult}
          </Button>
          <Button href="#demo-list" variant="secondary" size="lg">
            {common.cta.seeAllDemos}
          </Button>
        </div>
      </PageHero>

      <section className="border-t border-av-border">
        <Container className="py-10 lg:py-14">
          <AppVibeDemoBanner variant="inline" />
        </Container>
      </section>

      <section id="demo-list" className="border-t border-av-border scroll-mt-20">
        <Container className="py-14 lg:py-20">
          <SectionHeader
            eyebrow={lang === "id" ? "Etalase Demo" : "Demo Catalogue"}
            title={
              lang === "id"
                ? "Pilih demo yang paling mirip dengan bisnis Anda"
                : "Pick the demo closest to your business"
            }
            description={
              lang === "id"
                ? "5 demo React interaktif (form, filter, interaksi) di atas; 10 landing template HTML sebagai referensi visual niche. Filter atau cari sesuai industri Anda."
                : "Five full React interactive demos (forms, filters, interactions) first; ten HTML landing templates as niche visual references. Filter or search by industry."
            }
          />
          <div className="mt-8">
            <DemoFilter
              activeCategory={activeCategory}
              searchQuery={searchQuery}
              resultCount={filteredItems.length}
              onCategoryChange={setActiveCategory}
              onSearchChange={setSearchQuery}
            />
          </div>
          {interactiveItems.length > 0 && (
            <div className="mt-10">
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-av-signal">
                {lang === "id"
                  ? `Demo interaktif · ${interactiveItems.length}`
                  : `Interactive demos · ${interactiveItems.length}`}
              </h3>
              <DemoGrid items={interactiveItems} />
            </div>
          )}
          {templateItems.length > 0 && (
            <div className="mt-12">
              <h3 className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-av-muted">
                {lang === "id"
                  ? `Landing template · ${templateItems.length}`
                  : `Landing templates · ${templateItems.length}`}
              </h3>
              <p className="mb-4 max-w-2xl text-sm text-av-secondary">
                {lang === "id"
                  ? "Referensi visual HTML — bukan shell React penuh. Cocok untuk membayangkan tone niche; interaksi terbatas."
                  : "HTML visual references — not full React shells. Useful for niche tone; limited interaction."}
              </p>
              <DemoGrid items={templateItems} />
            </div>
          )}
          {filteredItems.length === 0 && (
            <p className="mt-10 text-center text-sm text-av-secondary">
              {lang === "id"
                ? "Tidak ada demo yang cocok dengan filter."
                : "No demos match this filter."}
            </p>
          )}
        </Container>
      </section>

      <section className="border-t border-av-border bg-av-surface">
        <Container className="py-14 lg:py-20">
          <SectionHeader
            eyebrow={lang === "id" ? "Kenapa Demo Interaktif" : "Why interactive demos"}
            title={
              lang === "id"
                ? "Calon klien tidak perlu membayangkan — mereka bisa merasakan"
                : "Prospects don't have to imagine — they can feel it"
            }
            description={
              lang === "id"
                ? "Demo membantu menunjukkan visi produk secara konkret, sehingga diskusi konsultasi bisa langsung masuk ke scope dan detail, bukan ke ekspektasi abstrak."
                : "Demos make the product vision concrete, so the consultation goes straight to scope and detail instead of abstract expectations."
            }
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title={
                lang === "id"
                  ? "Desain manual per niche"
                  : "Designed by niche"
              }
              description={
                lang === "id"
                  ? "Setiap demo dirancang khusus untuk industri tertentu — bukan template generik yang dipaksakan ke semua klien."
                  : "Each demo is built for a specific industry — never a generic template stretched across every client."
              }
              icon={Layout}
            />
            <FeatureCard
              title={lang === "id" ? "Mock data realistis" : "Realistic mock data"}
              description={
                lang === "id"
                  ? "Data contoh membantu calon klien membayangkan konten dan struktur untuk bisnis mereka sendiri."
                  : "Sample data helps prospects picture the content and structure for their own business."
              }
              icon={Monitor}
            />
            <FeatureCard
              title={
                lang === "id"
                  ? "Responsif di semua perangkat"
                  : "Responsive across devices"
              }
              description={
                lang === "id"
                  ? "Desktop, tablet, dan mobile — demo tetap rapi agar calon klien bisa membuka dari mana saja."
                  : "Desktop, tablet, and mobile — the demos stay clean wherever the prospect opens them."
              }
              icon={Smartphone}
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-av-border">
        <Container className="py-14 lg:py-20">
          <SectionHeader
            eyebrow={lang === "id" ? "Pertanyaan umum" : "Frequently asked"}
            title={
              lang === "id"
                ? "Yang sering ditanyakan soal demo interaktif"
                : "Common questions about the interactive demos"
            }
          />
          <div className="mt-8 max-w-3xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
            {faqItems.map((item) => (
              <div key={item.question} className="py-5">
                <p className="text-[15px] font-medium text-av-ink">
                  {item.question}
                </p>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-av-secondary">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t-2 border-av-ink bg-av-surface">
        <Container className="py-14 lg:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-display-md font-normal tracking-tight text-av-ink">
              {lang === "id"
                ? "Sudah menemukan demo yang paling cocok?"
                : "Found the demo that fits?"}
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-av-text">
              {lang === "id"
                ? "Ceritakan bisnis Anda — kami bantu rekomendasikan struktur, scope, dan tone yang paling pas untuk tahap bisnis Anda saat ini."
                : "Tell us about your business — we'll recommend the structure, scope, and tone that fit where you stand today."}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button
                href={whatsappUrl}
                size="lg"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "demo_index_final_cta",
                  })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {common.cta.consult}
              </Button>
              <Button href="#demo-list" variant="secondary" size="lg">
                {lang === "id" ? "Lihat Demo Lagi" : "See demos again"}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
