import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const faqs = [
  {
    question: "Apakah AppVibe Studio tim besar atau kecil?",
    answer:
      "AppVibe Studio adalah studio kecil yang fokus pada kualitas dan komunikasi langsung. Founder terlibat di setiap project — Anda tidak akan dilempar ke tim yang berbeda-beda setiap fase.",
  },
  {
    question: "Di mana AppVibe Studio beroperasi?",
    answer:
      "Bekerja secara remote dengan klien dari berbagai kota di Indonesia. Meeting online via Zoom atau Google Meet, dan WhatsApp untuk komunikasi harian. Tidak ada keterbatasan geografis.",
  },
  {
    question: "Apakah ada garansi setelah website jadi?",
    answer:
      "Setelah launch, kami menyediakan periode support untuk bug fix dan penyesuaian minor. Untuk update konten dan fitur baru, dibicarakan sebagai project terpisah atau paket maintenance.",
  },
  {
    question: "Bagaimana jam kerja dan responsiveness?",
    answer:
      "Jam kerja Senin–Sabtu 09.00–18.00 WIB. Respons WhatsApp biasanya dalam 1–2 jam di jam kerja. Email dan meeting di luar jam kerja bisa diatur sesuai jadwal klien.",
  },
  {
    question: "Apakah komunikasi dalam Bahasa Indonesia?",
    answer:
      "Ya, semua komunikasi default dalam Bahasa Indonesia. Meeting, WhatsApp, dan deliverable documentation. Bahasa Inggris bisa digunakan untuk klien internasional atau materi tertentu sesuai kebutuhan.",
  },
];

export function AboutFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Pertanyaan tentang AppVibe
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            Hal yang biasanya ditanyakan calon klien
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-border overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-light sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy sm:text-base">
                    <HelpCircle
                      className="hidden h-4 w-4 shrink-0 text-brand-blue sm:inline-block"
                      aria-hidden
                    />
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-brand-muted sm:px-6 sm:pb-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
