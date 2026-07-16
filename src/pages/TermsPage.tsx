import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { applyPageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";

const content = {
  id: {
    title: "Syarat Layanan",
    description:
      "Syarat penggunaan situs AppVibe Studio dan ruang lingkup layanan konsultasi.",
    updated: "Terakhir diperbarui: 16 Juli 2026",
    sections: [
      {
        h: "Situs & konten",
        p: "Situs appvibe.web.id menampilkan informasi layanan, portfolio referensi, demo simulasi, dan blog. Konten demo (brand, data, testimoni skenario) adalah contoh ilustratif — bukan website klien nyata, kecuali dinyatakan sebaliknya secara tertulis.",
      },
      {
        h: "Bukan penawaran mengikat",
        p: "Informasi di situs, termasuk kisaran harga indikatif di FAQ, bersifat panduan. Scope, timeline, dan biaya final disepakati setelah diskusi dan/atau proposal tertulis. Tidak ada kontrak terbentuk hanya karena mengunjungi situs atau mengisi form.",
      },
      {
        h: "Konsultasi awal",
        p: "Konsultasi awal via WhatsApp (sekitar 30–45 menit) gratis dan tidak mewajibkan Anda membeli. Kami berhak menolak atau menunda proyek yang di luar kapasitas atau di luar fokus layanan.",
      },
      {
        h: "Kekayaan intelektual",
        p: "Desain, kode, copy, dan demo di situs ini milik AppVibe Studio / Bima Putra Sena, kecuali aset pihak ketiga berlisensi. Anda boleh mereferensikan demo untuk evaluasi internal. Reproduksi komersial tanpa izin tertulis dilarang.",
      },
      {
        h: "Batasan tanggung jawab",
        p: "Situs disediakan apa adanya. Kami tidak menjamin ketersediaan tanpa gangguan. Keputusan bisnis yang Anda ambil berdasarkan demo atau konten situs menjadi tanggung jawab Anda. Untuk proyek berbayar, batasan tanggung jawab diatur di perjanjian terpisah.",
      },
      {
        h: "Perubahan",
        p: "Kami dapat memperbarui syarat ini. Tanggal di atas menandai versi terbaru. Penggunaan situs setelah pembaruan berarti Anda menerima versi yang berlaku.",
      },
      {
        h: "Kontak",
        p: "Pertanyaan: WhatsApp di nomor yang tertera di situs, atau LinkedIn linkedin.com/in/bima-putra-sena. Beroperasi dari Indonesia.",
      },
    ],
  },
  en: {
    title: "Terms of Service",
    description:
      "Terms for using the AppVibe Studio website and the scope of consultation services.",
    updated: "Last updated: 16 July 2026",
    sections: [
      {
        h: "Site & content",
        p: "appvibe.web.id presents service information, portfolio references, simulated demos, and blog posts. Demo content (brands, data, scenario testimonials) is illustrative — not a live client website unless stated otherwise in writing.",
      },
      {
        h: "Not a binding offer",
        p: "Information on this site, including indicative pricing in the FAQ, is guidance only. Final scope, timeline, and fees are agreed after discussion and/or a written proposal. Visiting the site or filling a form does not form a contract.",
      },
      {
        h: "Initial consultation",
        p: "The initial WhatsApp consultation (about 30–45 minutes) is free and does not obligate you to buy. We may decline or defer projects outside our capacity or focus.",
      },
      {
        h: "Intellectual property",
        p: "Design, code, copy, and demos on this site belong to AppVibe Studio / Bima Putra Sena, except licensed third-party assets. You may reference demos for internal evaluation. Commercial reproduction without written permission is prohibited.",
      },
      {
        h: "Limitation of liability",
        p: "The site is provided as-is. We do not guarantee uninterrupted availability. Business decisions you make based on demos or site content are your responsibility. Paid projects are governed by a separate agreement.",
      },
      {
        h: "Changes",
        p: "We may update these terms. The date above marks the current version. Continued use after an update means you accept the version then in force.",
      },
      {
        h: "Contact",
        p: "Questions: WhatsApp via the number on this site, or LinkedIn linkedin.com/in/bima-putra-sena. Operating from Indonesia.",
      },
    ],
  },
} as const;

export function TermsPage() {
  const { lang } = useLang();
  const c = content[lang];

  useEffect(() => {
    applyPageMeta(
      {
        id: { title: content.id.title, description: content.id.description },
        en: { title: content.en.title, description: content.en.description },
        paths: {
          id: routes.terms("id"),
          en: routes.terms("en"),
        },
      },
      lang,
    );
  }, [lang]);

  return (
    <PageShell>
      <section className="section-padding bg-white">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold text-brand-navy sm:text-4xl">
            {c.title}
          </h1>
          <p className="mt-2 text-sm text-brand-muted">{c.updated}</p>
          <div className="mt-10 space-y-8">
            {c.sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-lg font-semibold text-brand-navy">{s.h}</h2>
                <p className="mt-2 text-base leading-relaxed text-brand-muted">
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
