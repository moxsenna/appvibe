import { useEffect } from "react";
import { CheckCircle2, X, MessageCircle } from "lucide-react";
import type { ClinicService } from "@/data/demos/clinic";
import { klinikCopy } from "@/data/demos/klinik";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

type KlinikServiceDetailModalProps = {
  service: ClinicService | null;
  onClose: () => void;
};

export function KlinikServiceDetailModal({
  service,
  onClose,
}: KlinikServiceDetailModalProps) {
  const { lang } = useLang();
  const copy = klinikCopy.serviceModal;

  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [service, onClose]);

  if (!service) return null;

  const serviceName = pick(service.name, lang);
  const whatsappUrl = buildWhatsAppUrl(
    pick(copy.waTemplate, lang).replace("{service}", serviceName),
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        <div
          className="h-28 sm:h-32"
          style={{
            backgroundImage: `linear-gradient(135deg, ${service.color.includes("teal") ? "#0F9F8F" : "#06B6D4"} 0%, #0F766E 100%)`,
          }}
        >
          <div className="flex h-full items-end p-5 sm:p-6">
            <span className="rounded-full border border-white/20 bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              {pick(copy.badge, lang)}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={pick(copy.closeAria, lang)}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-md transition-colors hover:bg-white"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>

        <div className="p-6 sm:p-8">
          <h3
            id="service-modal-title"
            className="text-2xl font-bold text-brand-navy"
          >
            {serviceName}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-brand-muted">
            {pick(service.description, lang)}
          </p>

          <div className="mt-5 rounded-xl border border-brand-border bg-brand-light p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {pick(copy.durationLabel, lang)}
            </p>
            <p className="mt-1 text-base font-semibold text-brand-navy">
              {pick(service.duration, lang)}
            </p>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {pick(copy.suitableLabel, lang)}
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-brand-muted">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                aria-hidden
              />
              {pick(service.suitableFor, lang)}
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
              {pick(copy.noteLabel, lang)}
            </p>
            <p className="mt-1.5 text-sm text-amber-900">
              {pick(service.note, lang)}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              href={whatsappUrl}
              size="lg"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "klinik_service_modal",
                  service: service.id,
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />{" "}
              {pick(service.cta, lang)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}