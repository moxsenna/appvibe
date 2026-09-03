import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { homeCapabilities } from "@/data/home";
import { pick } from "@/i18n/localized";

export function ServicesOverview() {
  const { lang } = useLang();
  const dict = useDict();

  return (
    <section>
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {dict.pages.services.overview.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {dict.pages.services.overview.title}
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-av-text">
            {dict.pages.services.overview.subtitle}
          </p>
        </div>

        {homeCapabilities.map((group) => (
          <div key={pick(group.group, lang)} className="mt-12">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {pick(group.group, lang)}
            </p>
            <ol className="mt-2 divide-y divide-av-border-soft border-b border-t border-av-border-soft">
              {group.items.map((cap) => (
                <li key={cap.index}>
                  <a
                    href={`#${cap.anchor}`}
                    className="group grid gap-1 py-5 sm:grid-cols-[64px_1fr_1.4fr_24px] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-mono text-xs text-av-muted">
                      {cap.index}
                    </span>
                    <span className="text-[15px] font-semibold text-av-ink transition-colors group-hover:text-av-signal">
                      {pick(cap.name, lang)}
                    </span>
                    <span className="text-sm leading-relaxed text-av-secondary">
                      {pick(cap.desc, lang)}
                    </span>
                    <span
                      aria-hidden
                      className="hidden text-av-muted transition-transform group-hover:translate-x-1 sm:block"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </Container>
    </section>
  );
}
