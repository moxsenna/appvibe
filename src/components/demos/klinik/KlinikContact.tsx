import { MapPin, MessageCircle, Phone, Clock, Mail } from "lucide-react";
import { klinik, klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikContact() {
  const { lang } = useLang();
  const section = klinikCopy.contact;
  const whatsappUrl = buildWhatsAppUrl(pick(klinik.whatsappPrefill, lang));

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card padding="lg" className="bg-white">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
              {pick(section.eyebrow, lang)}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              {pick(section.title, lang)}
            </h2>
            <div className="mt-6 space-y-4">
              <ContactRow
                icon={MapPin}
                title={pick(section.addressTitle, lang)}
                body={pick(klinik.address, lang)}
              />
              <ContactRow
                icon={MessageCircle}
                title={pick(section.whatsappTitle, lang)}
                body={pick(klinik.phone, lang)}
                href={`https://wa.me/${pick(klinik.phone, lang).replace(/[^0-9]/g, "")}`}
              />
              <ContactRow
                icon={Mail}
                title={pick(section.emailTitle, lang)}
                body={pick(klinik.email, lang)}
              />
              <ContactRow
                icon={Clock}
                title={pick(section.hoursTitle, lang)}
                body={pick(klinik.adminHours, lang)}
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl}
                size="lg"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "klinik_contact_primary",
                  })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />{" "}
                {pick(section.chatCta, lang)}
              </Button>
              <Button
                href={`tel:${pick(klinik.phone, lang).replace(/[^0-9]/g, "")}`}
                variant="secondary"
                size="lg"
              >
                <Phone className="h-4 w-4" aria-hidden /> {pick(section.phoneCta, lang)}
              </Button>
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-card">
              <div
                className="flex h-48 items-center justify-center bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 sm:h-64"
                aria-label={pick(section.mapAria, lang)}
              >
                <div className="flex flex-col items-center gap-2 text-center text-brand-muted">
                  <MapPin className="h-10 w-10 text-teal-600" aria-hidden />
                  <p className="text-sm font-medium">
                    {pick(section.mapPlaceholder, lang)}
                  </p>
                  <p className="text-xs">{pick(klinik.address, lang)}</p>
                </div>
              </div>
            </div>
            <Card padding="md" className="border-amber-200 bg-amber-50/40">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                {pick(section.simDisclaimerTitle, lang)}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-amber-900">
                {pick(klinik.demoDisclaimer, lang)}
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {title}
        </p>
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
        className="flex items-start gap-3 transition-colors hover:text-teal-700"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-start gap-3">{content}</div>;
}