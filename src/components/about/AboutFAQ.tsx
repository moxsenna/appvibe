import { useState } from "react";
import { Plus } from "lucide-react";
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
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            Pertanyaan tentang AppVibe
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink sm:text-3xl">
            Hal yang biasanya ditanyakan calon klien
          </h2>
        </div>
        <div className="mt-8 max-w-3xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-av-ink">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-av-muted transition-transform duration-200",
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
                    <p className="max-w-[62ch] pb-5 text-sm leading-relaxed text-av-secondary">
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
