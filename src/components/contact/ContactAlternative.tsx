import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function ContactAlternative() {
  const { lang } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  const alternatives = [
    {
      title: lang === "id" ? "Lihat karya" : "Browse the work",
      description:
        lang === "id"
          ? "5 demo & studi kasus yang menunjukkan pendekatan AppVibe untuk berbagai niche."
          : "Five demos & case studies showing how AppVibe approaches different niches.",
      href: routes.portfolio(lang),
      cta: lang === "id" ? "Buka Karya" : "Open work",
    },
    {
      title: lang === "id" ? "Coba demo interaktif" : "Try the interactive demos",
      description:
        lang === "id"
          ? "Demo website jadi yang bisa dibuka langsung di browser untuk merasakan hasilnya."
          : "Finished-website demos you can explore in the browser to feel the result.",
      href: routes.demo(lang),
      cta: lang === "id" ? "Buka Demo" : "Open demos",
    },
    {
      title: lang === "id" ? "Baca FAQ" : "Read the FAQ",
      description:
        lang === "id"
          ? "Pertanyaan yang biasanya ditanyakan calon klien — budget, durasi, teknis, maintenance."
          : "Common questions from prospects — budget, timeline, technical, maintenance.",
      href: `${routes.home(lang)}#faq`,
      cta: lang === "id" ? "Lihat FAQ" : "Read FAQ",
    },
  ];

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {lang === "id" ? "Alternatif" : "Other ways"}
          </p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {lang === "id"
              ? "Cara lain untuk mengenal AppVibe"
              : "Other ways to get to know AppVibe"}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
            {lang === "id"
              ? "Belum siap untuk diskusi langsung? Tidak masalah — eksplor karya, demo, atau FAQ dulu untuk melihat apakah AppVibe cocok untuk bisnis Anda."
              : "Not ready for a direct conversation? No problem — explore the work, demos, or FAQ first to see whether AppVibe fits your business."}
          </p>
        </div>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {alternatives.map((alt, i) => (
            <div key={alt.title} className="border-t-2 border-av-ink pt-5">
              <p className="font-mono text-xs text-av-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-av-ink">
                {alt.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-av-secondary">
                {alt.description}
              </p>
              <Link
                to={alt.href}
                onClick={() =>
                  trackEvent("page_view", {
                    location: `contact_alternative_${alt.title.toLowerCase()}`,
                  })
                }
                className="mt-3 inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-av-ink transition-colors hover:text-av-signal"
              >
                {alt.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-av-border pt-6 text-sm text-av-secondary">
          {lang === "id" ? "Atau langsung chat dengan tim kami: " : "Or chat with our team directly: "}
          <a
            href={whatsappUrl}
            className="font-medium text-av-ink underline decoration-av-signal underline-offset-4 hover:text-av-signal"
            onClick={() =>
              trackEvent("cta_whatsapp_click", {
                location: "contact_alternative_whatsapp",
              })
            }
          >
            {lang === "id" ? "WhatsApp admin →" : "WhatsApp us →"}
          </a>
        </p>
      </Container>
    </section>
  );
}
