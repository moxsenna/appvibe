import { Linkedin, MapPin, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  buildWhatsAppUrl,
  getDefaultConsultationMessage,
  getWhatsAppDisplayNumber,
} from "@/lib/whatsapp";
import { useLang } from "@/i18n/use-lang";

const LINKEDIN_URL = "https://www.linkedin.com/in/bima-putra-sena/";
const EMAIL = "hello@appvibe.web.id";
const LOCATION = {
  id: "Indonesia · remote-friendly",
  en: "Indonesia · remote-friendly",
};

const copy = {
  id: {
    eyebrow: "Tentang Founder",
    role: "Founder & Developer · AppVibe Studio",
    involved: "Terlibat langsung di setiap proyek",
    involvedSub: "Dari diskusi awal hingga go-live",
    linkedin: "Connect di LinkedIn",
    email: "Email",
    chat: "Chat WhatsApp",
    photoAlt: "Foto Bima Putra Sena, Founder AppVibe Studio",
    paragraphs: [
      "Bima memulai AppVibe Studio setelah melihat banyak UMKM dan bisnis jasa kesulitan menampilkan diri secara profesional secara online — punya layanan yang bagus, tapi belum punya halaman resmi yang menjelaskannya dengan jelas. Sebagian masih bergantung pada DM Instagram, sebagian lagi punya website yang dibuat seadanya dan tidak menghasilkan apa-apa.",
      "Sebagai founder yang juga developer, Bima terlibat langsung di setiap proyek — dari riset kebutuhan, desain antarmuka, hingga pengembangan dan iterasi setelah live. Tidak ada tim sales yang berbeda dari tim yang mengerjakan; orang yang Anda ajak diskusi adalah orang yang sama yang membangun website Anda.",
      "Filosofinya sederhana: mulai dari yang paling dibutuhkan bisnis Anda hari ini, lalu kembangkan bertahap seiring pertumbuhan. AppVibe tidak akan menjadi agency besar dengan 50 orang — fokusnya adalah project rapi, komunikasi terbuka, dan hasil yang benar-benar dipakai oleh klien.",
    ],
  },
  en: {
    eyebrow: "About the founder",
    role: "Founder & Developer · AppVibe Studio",
    involved: "Hands-on on every project",
    involvedSub: "From first call to go-live",
    linkedin: "Connect on LinkedIn",
    email: "Email",
    chat: "WhatsApp chat",
    photoAlt: "Photo of Bima Putra Sena, Founder of AppVibe Studio",
    paragraphs: [
      "Bima started AppVibe Studio after seeing many SMBs and service businesses struggle to show up professionally online — strong services, but no clear official page. Some still rely on Instagram DMs; others have a thin site that converts nothing.",
      "As founder and developer, Bima stays on every project — research, UI, build, and post-launch iteration. The person you talk to is the person who builds.",
      "The philosophy is simple: start with what the business needs today, then grow in stages. AppVibe will not become a 50-person agency — the focus is clean projects, open communication, and work clients actually use.",
    ],
  },
} as const;

export function AboutFounder() {
  const { lang } = useLang();
  const t = copy[lang];
  const waDisplay = getWhatsAppDisplayNumber();
  const waUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="av-eyebrow text-av-signal">
                {t.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-av-ink sm:text-3xl">
                Bima Putra Sena
              </h2>
              <p className="mt-1 text-sm font-medium text-av-secondary">{t.role}</p>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/about/founder.webp"
                    alt="Bima Putra Sena - Founder & Principal AppVibe"
                    className="h-20 w-20 shrink-0 rounded border border-av-border object-cover"
                    onError={(e) => {
                      // Graceful fallback if image fails
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-av-ink">
                      {t.involved}
                    </p>
                    <p className="text-xs text-av-secondary">{t.involvedSub}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs text-av-secondary">
                      <MapPin className="h-3.5 w-3.5 text-av-signal" aria-hidden />
                      {LOCATION[lang]}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="gray">Web Development</Badge>
                  <Badge variant="gray">Product Design</Badge>
                  <Badge variant="gray">Business Strategy</Badge>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  <li>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 font-medium text-av-ink transition-colors hover:text-av-signal"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden />
                      {t.linkedin}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex min-h-[44px] items-center gap-2 font-medium text-av-ink transition-colors hover:text-av-signal"
                    >
                      <Mail className="h-4 w-4" aria-hidden />
                      {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 font-medium text-av-ink transition-colors hover:text-av-signal"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                      {waDisplay ? `${t.chat} · ${waDisplay}` : t.chat}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="h-full rounded border border-av-border bg-av-canvas p-6 sm:p-8">
                <div className="space-y-5 text-[15px] leading-relaxed text-av-text">
                  {t.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
