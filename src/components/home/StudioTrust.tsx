import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";
import { homeTrust } from "@/data/home";
import { pick } from "@/i18n/localized";

export function StudioTrust() {
  const { lang } = useLang();

  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <img
              src="/images/about/founder.webp"
              alt="Bima Putra Sena"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full max-w-[280px] rounded-[4px] border border-av-border object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div className="lg:col-span-8">
            <p className="av-eyebrow text-av-signal">
              {pick(homeTrust.eyebrow, lang)}
            </p>
            <h2 className="mt-3 max-w-[22ch] font-display text-display-md font-normal leading-tight tracking-tight text-av-ink">
              {pick(homeTrust.title, lang)}
            </h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
              {pick(homeTrust.body, lang)}
            </p>
            <Link
              to={routes.about(lang)}
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-av-ink transition-colors hover:text-av-signal"
            >
              {pick(homeTrust.link, lang)}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
