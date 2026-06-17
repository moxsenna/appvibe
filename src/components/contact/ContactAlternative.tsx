import { ArrowRight, HelpCircle, Layout, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function ContactAlternative() {
  const { lang } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  const alternatives = [
    {
      icon: Layout,
      title: lang === "id" ? "Lihat portfolio" : "Browse the portfolio",
      description:
        lang === "id"
          ? "5 case study yang menunjukkan pendekatan AppVibe untuk berbagai niche."
          : "Five case studies showing how AppVibe approaches different niches.",
      href: routes.portfolio(lang),
      cta: lang === "id" ? "Buka Portfolio" : "Open portfolio",
    },
    {
      icon: Sparkles,
      title: lang === "id" ? "Coba demo interaktif" : "Try the interactive demos",
      description:
        lang === "id"
          ? "5 demo website jadi yang bisa dibuka langsung di browser untuk merasakan hasilnya."
          : "Five finished-website demos you can explore in the browser to feel the result.",
      href: routes.demo(lang),
      cta: lang === "id" ? "Buka Demo" : "Open demos",
    },
    {
      icon: HelpCircle,
      title: lang === "id" ? "Lihat FAQ lengkap" : "Read the full FAQ",
      description:
        lang === "id"
          ? "10 pertanyaan yang biasanya ditanyakan calon klien — budget, durasi, teknis, maintenance."
          : "Ten common questions from prospects — budget, timeline, technical, maintenance.",
      href: `${routes.home(lang)}#faq`,
      cta: lang === "id" ? "Lihat FAQ" : "Read FAQ",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {lang === "id" ? "Alternatif" : "Other ways"}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {lang === "id"
              ? "Cara lain untuk mengenal AppVibe"
              : "Other ways to get to know AppVibe"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {lang === "id"
              ? "Belum siap untuk diskusi langsung? Tidak masalah — Anda bisa eksplor portfolio, demo, atau FAQ dulu untuk melihat apakah AppVibe cocok untuk bisnis Anda."
              : "Not ready for a direct conversation? No problem — explore the portfolio, demos, or FAQ first to see whether AppVibe fits your business."}
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {alternatives.map((alt) => {
            const Icon = alt.icon;
            return (
              <Card key={alt.title} hover className="flex flex-col">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-brand-navy">
                  {alt.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {alt.description}
                </p>
                <a
                  href={alt.href}
                  onClick={() =>
                    trackEvent("cta_whatsapp_click", {
                      location: `contact_alternative_${alt.title.toLowerCase()}`,
                    })
                  }
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-violet"
                >
                  {alt.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </Card>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-brand-muted">
          {lang === "id" ? "Atau langsung chat dengan tim kami: " : "Or chat with our team directly: "}
          <a
            href={whatsappUrl}
            className="font-semibold text-brand-blue hover:underline"
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
