import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

type FAQ = { question: { id: string; en: string }; answer: { id: string; en: string } };

const faqs: FAQ[] = [
  {
    question: {
      id: "Berapa biaya untuk mulai membuat website atau landing page?",
      en: "What is the starting price for a website or landing page?",
    },
    answer: {
      id: "Landing page mulai dari Rp499.000, Website Company Profile mulai dari Rp2.500.000, serta Web App & Sistem Internal disesuaikan dengan kebutuhan alur dan fitur. Pembayaran menggunakan termin 50% DP dan 50% saat proyek selesai.",
      en: "Landing pages start from IDR 499,000, Company Profile websites start from IDR 2,500,000, while Custom Web Apps and Internal Systems are scoped by complexity. Payments are split into a 50% deposit and 50% upon delivery.",
    },
  },
  {
    question: {
      id: "Berapa lama proses pengerjaan masing-masing layanan?",
      en: "How long does the development process take for each service?",
    },
    answer: {
      id: "Landing page selesai dalam waktu kurang dari 7 hari. Company profile berkisar 7–30 hari. Sementara sistem operasional dan web app kustom sekitar 30–90 hari tergantung kompleksitas.",
      en: "Landing pages are ready in under 7 days. Company profile websites take 7–30 days. Custom operational web applications take approximately 30–90 days depending on scope.",
    },
  },
  {
    question: {
      id: "Bagaimana jika saya belum punya materi tulisan dan desain?",
      en: "What if I don't have copy or design assets ready?",
    },
    answer: {
      id: "Tenang, kami melayani pembuatan copywriting bisnis yang menjual dan desain visual yang profesional. Anda cukup menceritakan poin bisnis Anda via WhatsApp.",
      en: "No worries, we handle business copywriting and professional visual design. You just need to brief us on your business essentials via WhatsApp.",
    },
  },
  {
    question: {
      id: "Berapa kali kesempatan revisi yang didapatkan?",
      en: "How many revision rounds are provided?",
    },
    answer: {
      id: "Landing Page mendapatkan 2x putaran revisi dan Company Profile mendapatkan 3x putaran revisi di setiap fase agar hasil akhir benar-benar memuaskan.",
      en: "Landing pages include 2 revision rounds and Company Profile websites include 3 revision rounds across project phases to ensure complete satisfaction.",
    },
  },
  {
    question: {
      id: "Apakah saya bisa update isi website sendiri?",
      en: "Can I edit the website content myself?",
    },
    answer: {
      id: "Untuk Company Profile, kami sediakan Admin CMS agar Anda leluasa mengupdate teks, artikel, dan portfolio. Untuk Landing Page statis, perubahan dibantu oleh tim kami.",
      en: "For Company Profile sites, we provide an easy Admin CMS for self-managing text, articles, and portfolio items. For static landing pages, updates are handled by our team.",
    },
  },
  {
    question: {
      id: "Apakah ada garansi dan maintenance setelah launch?",
      en: "Is there a warranty and ongoing maintenance support?",
    },
    answer: {
      id: "Ada garansi perbaikan bug gratis selama 30 hari pasca go-live. Selain itu, tersedia paket maintenance bulanan untuk pemeliharaan server, backup data, dan optimasi berkala.",
      en: "We provide a 30-day bug-fix warranty after launch. Ongoing monthly maintenance plans are also available for server care, regular backups, and ongoing optimizations.",
    },
  },
];

export function ServicesFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { lang } = useLang();

  return (
    <section className="border-t border-av-border">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {lang === "id" ? "Pertanyaan tentang layanan" : "Services FAQ"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink sm:text-3xl">
            {lang === "id" ? "Hal yang sering ditanyakan calon klien" : "Common questions before starting"}
          </h2>
        </div>
        <div className="mt-8 max-w-3xl divide-y divide-av-border-soft border-b border-t border-av-border-soft">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.question.id}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-av-ink">
                    {faq.question[lang]}
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
                      {faq.answer[lang]}
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
