import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

const faqs = [
  {
    question: {
      id: "Apakah AppVibe Studio tim besar atau kecil?",
      en: "Is AppVibe Studio a large agency or a small boutique studio?",
    },
    answer: {
      id: "AppVibe Studio adalah studio independen yang fokus pada kualitas craft dan komunikasi langsung. Anda berdiskusi dan membangun proyek langsung bersama Bima sebagai founder & developer tanpa perantara account manager.",
      en: "AppVibe Studio is an independent studio focused on high craftsmanship and direct communication. You brainstorm and build directly with Bima as founder & developer, free of middleman account managers.",
    },
  },
  {
    question: {
      id: "Bagaimana proses komunikasi dan konsultasi?",
      en: "How do we communicate throughout the project?",
    },
    answer: {
      id: "100% via WhatsApp untuk komunikasi harian yang cepat, fleksibel, dan terdokumentasi. Handover proyek juga dilengkapi dokumentasi panduan, video walkthrough, dan meeting jika diperlukan.",
      en: "100% via WhatsApp for fast, direct, and well-organized daily communication. Project handoffs include complete documentation, video guides, and meetings whenever needed.",
    },
  },
  {
    question: {
      id: "Apa saja hak milik yang diserahkan setelah proyek selesai?",
      en: "What ownership rights do I get after project completion?",
    },
    answer: {
      id: "Full source code, hak akses penuh ke hosting dan domain, aset desain grafis, serta hak cipta atas seluruh konten milik bisnis Anda.",
      en: "Full source code access, complete ownership of your hosting and domain, design assets, and full copyright over all customized business content.",
    },
  },
  {
    question: {
      id: "Apakah ada garansi pasca go-live?",
      en: "Is there a post-launch warranty?",
    },
    answer: {
      id: "Ya, setiap proyek dilengkapi garansi perbaikan bug dan penyesuaian minor gratis selama 30 hari pertama setelah website online.",
      en: "Yes, every project comes with a 30-day free bug-fix and minor adjustment warranty following go-live.",
    },
  },
  {
    question: {
      id: "Di mana lokasi AppVibe Studio beroperasi?",
      en: "Where is AppVibe Studio located?",
    },
    answer: {
      id: "Berbasis di Indonesia dan beroperasi secara remote-first, melayani klien dari seluruh kota di Indonesia maupun mancanegara.",
      en: "Based in Indonesia and operating remote-first, collaborating with clients across Indonesia and globally.",
    },
  },
];

export function AboutFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { lang } = useLang();

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {lang === "id" ? "Pertanyaan tentang AppVibe" : "About AppVibe"}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink sm:text-3xl">
            {lang === "id" ? "Hal yang sering ditanyakan calon klien" : "Common questions about our studio"}
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
