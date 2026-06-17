import { useMemo, useState } from "react";
import {
  Layout,
  MessageCircle,
  Monitor,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
          <Button
            href="#demo-list"
            variant="secondary"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            {common.cta.seeAllDemos}
          </Button>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <Container>
          <AppVibeDemoBanner variant="inline" />
        </Container>
      </section>

      <section
        id="demo-list"
        className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/40"
      >
        <Container>
          <SectionHeader
            eyebrow={lang === "id" ? "Etalase Demo" : "Demo Catalogue"}
            title={
              lang === "id"
                ? "Pilih demo yang paling mirip dengan bisnis Anda"
                : "Pick the demo closest to your business"
            }
            description={
              lang === "id"
                ? "Filter berdasarkan kategori, atau cari berdasarkan niche dan tag. Setiap demo mengarah ke shell interaktif yang bisa dibuka langsung."
                : "Filter by category, or search by niche and tag. Every demo opens a live interactive shell."
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
          <div className="mt-10">
            <DemoGrid items={filteredItems} />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
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

      <section className="section-padding bg-brand-light">
        <Container>
          <SectionHeader
            align="center"
            eyebrow={lang === "id" ? "Pertanyaan umum" : "Frequently asked"}
            title={
              lang === "id"
                ? "Yang sering ditanyakan soal demo interaktif"
                : "Common questions about the interactive demos"
            }
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqItems.map((item) => (
              <Card key={item.question} padding="md">
                <p className="text-base font-semibold text-brand-navy">
                  {item.question}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-hero-gradient text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles className="mx-auto h-8 w-8 text-cyan-300" aria-hidden />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {lang === "id"
                ? "Sudah menemukan demo yang paling cocok?"
                : "Found the demo that fits?"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
              {lang === "id"
                ? "Ceritakan bisnis Anda — kami bantu rekomendasikan struktur, scope, dan tone yang paling pas untuk tahap bisnis Anda saat ini."
                : "Tell us about your business — we'll recommend the structure, scope, and tone that fit where you stand today."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
              <Button
                href="#demo-list"
                variant="secondary"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                {lang === "id" ? "Lihat Demo Lagi" : "See demos again"}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
