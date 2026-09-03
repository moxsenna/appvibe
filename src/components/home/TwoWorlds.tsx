import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";
import { homeWorlds } from "@/data/home";
import { pick } from "@/i18n/localized";

export function TwoWorlds() {
  const { lang } = useLang();

  return (
    <section aria-label={lang === "id" ? "Dua sisi layanan" : "Two sides of the studio"}>
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-12">
          {homeWorlds.map((world, i) => (
            <div key={world.index}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-av-signal">
                {world.index}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-av-ink sm:text-2xl">
                {pick(world.title, lang)}
              </h2>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-av-text">
                {pick(world.body, lang)}
              </p>
              <ul className="mt-5 space-y-2.5">
                {pick(world.items, lang).map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-av-border pl-3 text-sm text-av-secondary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {i === 0 && (
                <hr className="mt-10 border-av-border md:hidden" aria-hidden />
              )}
            </div>
          ))}
          <div
            className="hidden w-px self-stretch bg-av-border md:block"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
