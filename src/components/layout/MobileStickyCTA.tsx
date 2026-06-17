import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function MobileStickyCTA() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 md:hidden"
      role="region"
      aria-label={dict.common.mobileSticky.label}
    >
      <a
        href={whatsappUrl}
        className="pointer-events-auto inline-flex max-w-[260px] items-center justify-center gap-2 rounded-full border border-white/15 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-lg ring-1 ring-cyan-500/30 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        style={{ boxShadow: "0 4px 24px -4px rgb(6 182 212 / 0.35)" }}
        onClick={() =>
          trackEvent("cta_whatsapp_click", { location: "mobile_sticky" })
        }
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-brand-cyan" aria-hidden />
        {dict.common.cta.chatNow}
      </a>
    </div>
  );
}
