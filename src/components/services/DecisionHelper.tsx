import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { cn } from "@/lib/cn";

type NeedId = "landing-page" | "company-profile" | "dashboard" | "automation";
type BudgetId = "lt10" | "10-25" | "25-50" | "gt50" | "unsure";

const needs: { id: NeedId; label: { id: string; en: string } }[] = [
  { id: "landing-page", label: { id: "Promosi / event / iklan", en: "Promo / event / ads" } },
  { id: "company-profile", label: { id: "Profil bisnis resmi", en: "Official business profile" } },
  { id: "dashboard", label: { id: "Kelola data / leads internal", en: "Manage internal data / leads" } },
  { id: "automation", label: { id: "Sambungkan tools & pembayaran", en: "Connect tools & payments" } },
];

const budgets: { id: BudgetId; label: { id: string; en: string } }[] = [
  { id: "lt10", label: { id: "< Rp10jt", en: "< IDR 10m" } },
  { id: "10-25", label: { id: "Rp10–25jt", en: "IDR 10–25m" } },
  { id: "25-50", label: { id: "Rp25–50jt", en: "IDR 25–50m" } },
  { id: "gt50", label: { id: "> Rp50jt", en: "> IDR 50m" } },
  { id: "unsure", label: { id: "Belum tahu", en: "Not sure yet" } },
];

const recommendation: Record<NeedId, { id: string; en: string }> = {
  "landing-page": { id: "Landing Page — mulai Rp499rb, jadi < 7 hari", en: "Landing Page — from IDR 499k, ready in < 7 days" },
  "company-profile": { id: "Company Profile — mulai Rp2.500.000, 7–30 hari", en: "Company Profile — from IDR 2.5m, 7–30 days" },
  dashboard: { id: "Web App / Dashboard — by scope, 30–90 hari", en: "Web App / Dashboard — by scope, 30–90 days" },
  automation: { id: "Integrasi & Automation — by scope", en: "Integration & Automation — by scope" },
};

export function DecisionHelper() {
  const { lang } = useLang();
  const [need, setNeed] = useState<NeedId | null>(null);
  const [budget, setBudget] = useState<BudgetId | null>(null);

  const needLabel = needs.find((n) => n.id === need)?.label[lang] ?? "";
  const budgetLabel = budgets.find((b) => b.id === budget)?.label[lang] ?? "";
  const ready = need !== null && budget !== null;
  const message =
    lang === "id"
      ? `Halo AppVibe, saya butuh: ${needLabel}. Budget saya: ${budgetLabel}. Minta rekomendasi scope yang paling pas.`
      : `Hi AppVibe, I need: ${needLabel}. My budget: ${budgetLabel}. Please recommend the best-fit scope.`;
  const waUrl = buildWhatsAppUrl(message);

  const optionCls = (active: boolean) =>
    cn(
      "min-h-[48px] rounded border px-4 py-2.5 text-left text-sm font-medium transition-colors",
      active
        ? "border-av-ink bg-av-ink text-white"
        : "border-av-border bg-av-surface text-av-secondary hover:border-av-ink hover:text-av-ink",
    );

  return (
    <section id="panduan" aria-label={lang === "id" ? "Panduan pilih layanan" : "Service guide"} className="border-t border-av-border bg-av-surface scroll-mt-20">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow={lang === "id" ? "Panduan 30 detik" : "30-second guide"}
            title={lang === "id" ? "Bingung mulai dari mana?" : "Not sure where to start?"}
            description={
              lang === "id"
                ? "Jawab 2 pertanyaan — kami tunjukkan layanan yang paling pas beserta tombol WhatsApp yang sudah terisi."
                : "Answer 2 questions — we point you to the best-fit service with a prefilled WhatsApp button."
            }
          />
        </div>

        <div className="mt-8 grid max-w-4xl gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {lang === "id" ? "1 · Kebutuhan utama" : "1 · Main need"}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {needs.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  aria-pressed={need === n.id}
                  onClick={() => setNeed(n.id)}
                  className={optionCls(need === n.id)}
                >
                  {n.label[lang]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {lang === "id" ? "2 · Kisaran budget" : "2 · Budget range"}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {budgets.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  aria-pressed={budget === b.id}
                  onClick={() => setBudget(b.id)}
                  className={optionCls(budget === b.id)}
                >
                  {b.label[lang]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          aria-live="polite"
          className="mt-8 max-w-4xl rounded border border-av-border bg-av-canvas p-6"
        >
          <div key={need ?? "none"} className="anim-fade">
          {ready && need ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-signal">
                  {lang === "id" ? "Rekomendasi untuk Anda" : "Recommended for you"}
                </p>
                <p className="mt-2 text-lg font-semibold text-av-ink">
                  {recommendation[need][lang]}
                </p>
              </div>
              <Button
                href={waUrl}
                size="lg"
                className="shrink-0"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "decision_helper",
                    need,
                    budget,
                  })
                }
              >
                {lang === "id" ? "Diskusikan rekomendasi ini" : "Discuss this pick"}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          ) : (
            <p className="text-sm text-av-secondary">
              {lang === "id"
                ? "Pilih 1 kebutuhan dan 1 kisaran budget untuk melihat rekomendasi."
                : "Pick 1 need and 1 budget range to see the recommendation."}
            </p>
          )}
          </div>
        </div>
      </Container>
    </section>
  );
}
