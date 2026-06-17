import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type FAQ = { question: string; answer: string };

const faqs: FAQ[] = [
  {
    question: "Berapa budget minimal untuk mulai?",
    answer:
      "Tergantung scope. Landing page campaign bisa mulai dari budget lebih kecil, sedangkan website multi-halaman atau dashboard membutuhkan investasi lebih besar. Diskusikan di konsultasi awal agar kami bisa rekomendasikan scope yang sesuai budget Anda.",
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer:
      "Landing page campaign biasanya 2–3 minggu. Website company profile 4–6 minggu. Dashboard atau integrasi 6–10 minggu. Timeline final tergantung kompleksitas dan kecepatan feedback dari klien.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Umumnya DP 50% di awal, sisanya 50% setelah go-live. Untuk project lebih besar, bisa dicicil 3 tahap (DP, mid-project, final). Detail didiskusikan saat deal.",
  },
  {
    question: "Apakah saya bisa update sendiri setelah website jadi?",
    answer:
      "Tergantung kompleksitas. Untuk update konten sederhana, kami bisa setup CMS ringan atau panduan. Untuk perubahan struktur besar, kami bantu sebagai project terpisah.",
  },
  {
    question: "Bagaimana jika saya tidak puas dengan hasilnya?",
    answer:
      "Kami menyediakan 2–3 ronde revisi di setiap tahap (struktur, visual, copy). Sebelum build penuh, ada fase review dan approval agar hasilnya sesuai ekspektasi.",
  },
  {
    question: "Apakah AppVibe bisa maintenance setelah launch?",
    answer:
      "Bisa. Maintenance, update konten, dan penyesuaian kecil bisa dibicarakan sebagai paket terpisah. Atau Anda bisa kelola sendiri dengan panduan yang kami sediakan.",
  },
];

export function ServicesFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Pertanyaan tentang layanan
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
