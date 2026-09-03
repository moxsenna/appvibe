import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { useDict } from "@/i18n/use-dict";

type DemoMobileStickyCTAProps = {
  whatsappUrl: string;
  brandName: string;
};

export function DemoMobileStickyCTA({
  whatsappUrl,
  brandName,
}: DemoMobileStickyCTAProps) {
  const { common } = useDict();
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 md:hidden"
      role="region"
      aria-label={`${common.cta.consultAppVibe} ${brandName}`}
    >
      <a
        href={whatsappUrl}
        className="pointer-events-auto inline-flex max-w-[280px] items-center justify-center gap-2 rounded bg-av-ink px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        onClick={() =>
          trackEvent("cta_whatsapp_click", {
            location: "demo_mobile_sticky",
            brand: brandName,
          })
        }
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-av-signal-on-dark" aria-hidden />
        {common.cta.consultAppVibe}
      </a>
    </div>
  );
}
