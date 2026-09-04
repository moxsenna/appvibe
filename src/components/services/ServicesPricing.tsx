import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildWhatsAppUrl, getServiceMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

type Tier = {
  name: string;
  price: string;
  note: string;
  timeline: string;
  serviceTitle: string;
};

function tierData(lang: "id" | "en"): Tier[] {
  if (lang === "id") {
    return [
      {
        name: "Landing Page",
        price: "Rp499rb",
        note: "mulai dari 4 ratus ribuan",
        timeline: "< 7 hari · 2x revisi",
        serviceTitle: "Landing Page",
      },
      {
        name: "Company Profile",
        price: "Rp2.500.000",
        note: "mulai dari 2,5 jutaan",
        timeline: "7–30 hari · 3x revisi",
        serviceTitle: "Website Company Profile",
      },
      {
        name: "Web App / Sistem",
        price: "By scope",
        note: "sesuai kebutuhan & kerumitan",
        timeline: "30–90 hari",
        serviceTitle: "Web App / Dashboard",
      },
    ];
  }
  return [
    {
      name: "Landing Page",
      price: "IDR 499k",
      note: "starting from four hundred thousands",
      timeline: "< 7 days · 2 revision rounds",
      serviceTitle: "Landing Page",
    },
    {
      name: "Company Profile",
      price: "IDR 2.5m",
      note: "starting from 2.5 million",
      timeline: "7–30 days · 3 revision rounds",
      serviceTitle: "Company Profile Website",
    },
    {
      name: "Web App / System",
      price: "By scope",
      note: "scoped by needs & complexity",
      timeline: "30–90 days",
      serviceTitle: "Web App / Dashboard",
    },
  ];
}

export function ServicesPricing() {
  const { lang } = useLang();
  const items = tierData(lang);

  return (
    <section id="harga" aria-label={lang === "id" ? "Harga mulai dari" : "Starting prices"} className="border-t border-av-border bg-av-surface scroll-mt-20">
      <Container className="py-14 lg:py-20">
        <SectionHeader
          eyebrow={lang === "id" ? "Harga mulai dari" : "Starting prices"}
          title={
            lang === "id"
              ? "Transparan sejak awal, tanpa paket kaku"
              : "Transparent upfront, no rigid packages"
          }
          description={
            lang === "id"
              ? "Angka panduan — scope final disesuaikan tahap bisnis Anda. Pembayaran termin 50% DP dan 50% pelunasan."
              : "Guide figures — final scope follows your business stage. Split 50% deposit and 50% on delivery."
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((tier) => {
            const waUrl = buildWhatsAppUrl(getServiceMessage(lang, tier.serviceTitle));
            return (
              <div
                key={tier.name}
                className="flex flex-col rounded border border-av-border bg-av-canvas p-6"
              >
                <h3 className="text-base font-semibold text-av-ink">{tier.name}</h3>
                <p className="mt-2 font-display text-display-md font-normal tracking-tight text-av-ink">
                  {tier.price}
                </p>
                <p className="mt-1 text-sm text-av-secondary">{tier.note}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                  {tier.timeline}
                </p>
                <Button
                  href={waUrl}
                  variant="secondary"
                  size="md"
                  className="mt-6 w-full"
                  onClick={() =>
                    trackEvent("cta_whatsapp_click", {
                      location: "services_pricing",
                      service: tier.serviceTitle,
                    })
                  }
                >
                  {lang === "id" ? "Tanya paket ini" : "Ask about this plan"}
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
