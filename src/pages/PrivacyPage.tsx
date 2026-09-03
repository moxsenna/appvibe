import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { applyPageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";

const content = {
  id: {
    title: "Kebijakan Privasi",
    description:
      "Bagaimana AppVibe Studio menangani informasi yang Anda bagikan saat konsultasi atau kunjungan situs.",
    updated: "Terakhir diperbarui: 16 Juli 2026",
    sections: [
      {
        h: "Ringkasan",
        p: "AppVibe Studio (appvibe.web.id) adalah situs marketing studio website untuk UMKM dan bisnis jasa. Kami menghormati privasi Anda. Kami tidak menjual data pribadi. Informasi yang Anda kirim dipakai hanya untuk follow-up konsultasi dan peningkatan layanan.",
      },
      {
        h: "Data yang kami kumpulkan",
        p: "Saat Anda mengisi form kontak di situs ini, data (nama, bisnis, kontak, kebutuhan, budget, pesan) tidak disimpan di server kami. Form membuka WhatsApp dengan pesan terformat agar Anda bisa mengirim langsung. Jika Anda mengirim pesan WhatsApp, data tersebut tersimpan di aplikasi WhatsApp Anda dan di perangkat/akun kami sebagai penerima pesan bisnis.",
      },
      {
        h: "Analitik & cookie",
        p: "Jika Google Tag Manager / analytics diaktifkan, kami dapat menerima data agregat kunjungan (halaman dilihat, perangkat, sumber traffic). Data ini dipakai untuk memahami performa situs, bukan untuk mengidentifikasi Anda secara pribadi di luar praktik standar analytics.",
      },
      {
        h: "Demo & Supabase showcase",
        p: "Demo Lead Dashboard dapat terhubung ke backend showcase (Supabase) dengan data simulasi multi-pengunjung. Jangan masukkan data pribadi nyata ke demo. Perubahan di demo showcase bersifat demonstrasi, bukan layanan produksi klien.",
      },
      {
        h: "Pihak ketiga",
        p: "Tautan ke WhatsApp, LinkedIn, atau layanan lain tunduk pada kebijakan privasi masing-masing penyedia. Kami tidak mengontrol cara mereka memproses data setelah Anda meninggalkan situs kami.",
      },
      {
        h: "Kontak",
        p: "Pertanyaan privasi: hubungi Bima Putra Sena via WhatsApp di nomor yang tertera di situs, atau LinkedIn (linkedin.com/in/bima-putra-sena). Kami merespons di hari kerja.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description:
      "How AppVibe Studio handles information you share during a consultation or site visit.",
    updated: "Last updated: 16 July 2026",
    sections: [
      {
        h: "Summary",
        p: "AppVibe Studio (appvibe.web.id) is a marketing site for a web studio serving SMBs and service businesses. We respect your privacy. We do not sell personal data. Information you send is used only for consultation follow-up and service improvement.",
      },
      {
        h: "Data we collect",
        p: "When you fill the contact form on this site, the fields (name, business, contact, needs, budget, message) are not stored on our servers. The form opens WhatsApp with a pre-filled message so you can send it yourself. If you send a WhatsApp message, that data lives in WhatsApp and on our device/account as the business recipient.",
      },
      {
        h: "Analytics & cookies",
        p: "If Google Tag Manager / analytics is enabled, we may receive aggregate visit data (pages viewed, device, traffic source). This helps us understand site performance and is not used to personally identify you beyond standard analytics practice.",
      },
      {
        h: "Demos & Supabase showcase",
        p: "The Lead Dashboard demo may connect to a shared showcase backend (Supabase) with simulated multi-visitor data. Do not enter real personal data into demos. Showcase changes are for demonstration only, not client production service.",
      },
      {
        h: "Third parties",
        p: "Links to WhatsApp, LinkedIn, or other services are governed by those providers' privacy policies. We do not control how they process data after you leave our site.",
      },
      {
        h: "Contact",
        p: "Privacy questions: contact Bima Putra Sena via the WhatsApp number on this site, or LinkedIn (linkedin.com/in/bima-putra-sena). We reply on business days.",
      },
    ],
  },
} as const;

export function PrivacyPage() {
  const { lang } = useLang();
  const c = content[lang];

  useEffect(() => {
    applyPageMeta(
      {
        id: { title: content.id.title, description: content.id.description },
        en: { title: content.en.title, description: content.en.description },
        paths: {
          id: routes.privacy("id"),
          en: routes.privacy("en"),
        },
      },
      lang,
    );
  }, [lang]);

  return (
    <PageShell>
      <section className="border-b border-av-border">
        <Container className="max-w-3xl py-12 sm:py-16">
          <p className="av-eyebrow">
            Legal
          </p>
          <h1 className="mt-4 font-display text-display-md font-normal tracking-tight text-av-ink">
            {c.title}
          </h1>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-av-muted">{c.updated}</p>
          <div className="mt-10 space-y-8">
            {c.sections.map((s) => (
              <div key={s.h} className="border-t border-av-border-soft pt-6">
                <h2 className="text-lg font-semibold text-av-ink">{s.h}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-av-text">
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
