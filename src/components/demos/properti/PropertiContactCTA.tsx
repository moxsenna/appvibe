import { MapPin, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { brand } from "@/data/demos/properti/brand";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { whatsappPrefill } from "@/data/demos/properti/whatsapp";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

const sectionCopy: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    address: string;
    whatsapp: string;
    email: string;
    hours: string;
    hoursBody: string;
    chatWa: string;
    phone: string;
    mapPlaceholder: string;
    disclaimerEyebrow: string;
    mapAria: string;
  }
> = {
  id: {
    eyebrow: "Lokasi & Kontak",
    title: "Datang ke kantor atau hubungi via WhatsApp",
    address: "Alamat kantor",
    whatsapp: "WhatsApp",
    email: "Email",
    hours: "Jam operasional",
    hoursBody: "Senin–Sabtu 09.00–17.00 · Minggu by appointment",
    chatWa: "Chat WhatsApp",
    phone: "Telepon",
    mapPlaceholder: "Peta placeholder",
    disclaimerEyebrow: "Disclaimer Data Simulasi",
    mapAria: "Peta placeholder kantor",
  },
  en: {
    eyebrow: "Location & contact",
    title: "Visit our office or reach us on WhatsApp",
    address: "Office address",
    whatsapp: "WhatsApp",
    email: "Email",
    hours: "Business hours",
    hoursBody: "Mon–Sat 09:00–17:00 · Sunday by appointment",
    chatWa: "Chat on WhatsApp",
    phone: "Call",
    mapPlaceholder: "Map placeholder",
    disclaimerEyebrow: "Simulated data disclaimer",
    mapAria: "Office map placeholder",
  },
};

export function PropertiContactCTA() {
  const { lang } = useLang();
  const copy = sectionCopy[lang];
  const whatsappUrl = buildWhatsAppUrl(whatsappPrefill[lang]);
  const phoneDigits = brand.phone[lang].replace(/[^0-9]/g, "");

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card padding="lg" className="bg-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">{copy.title}</h2>
            <div className="mt-6 space-y-4">
              <ContactRow icon={MapPin} title={copy.address} body={brand.address[lang]} />
              <ContactRow
                icon={MessageCircle}
                title={copy.whatsapp}
                body={brand.phone[lang]}
                href={`https://wa.me/${phoneDigits}`}
              />
              <ContactRow icon={Mail} title={copy.email} body={brand.email[lang]} />
              <ContactRow icon={Clock} title={copy.hours} body={copy.hoursBody} />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl}
                size="lg"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "properti_contact_primary",
                  })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden /> {copy.chatWa}
              </Button>
              <Button href={`tel:${phoneDigits}`} variant="secondary" size="lg">
                <Phone className="h-4 w-4" aria-hidden /> {copy.phone}
              </Button>
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
              <div
                className="flex h-48 items-center justify-center bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50 sm:h-64"
                aria-label={copy.mapAria}
              >
                <div className="flex flex-col items-center gap-2 text-center text-brand-muted">
                  <MapPin className="h-10 w-10 text-emerald-700" aria-hidden />
                  <p className="text-sm font-medium">{copy.mapPlaceholder}</p>
                  <p className="text-xs">{brand.address[lang]}</p>
                </div>
              </div>
            </div>
            <Card padding="md" className="border-amber-200 bg-amber-50/40">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                {copy.disclaimerEyebrow}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-amber-900">
                {brand.demoDisclaimer[lang]}
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">{title}</p>
        <p className="mt-0.5 text-sm font-medium text-brand-navy">{body}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 transition-colors hover:text-emerald-700"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-start gap-3">{content}</div>;
}