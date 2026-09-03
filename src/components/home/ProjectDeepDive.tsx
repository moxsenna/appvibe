import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";
import { homeDeepDiveNote } from "@/data/home";
import { pick } from "@/i18n/localized";
import { ProjectStatus, ProjectVisual, WorkLinks } from "@/components/home/work-ui";

export function ProjectDeepDive() {
  const { lang, dict } = useLang();
  const item = portfolioItems.find((p) => p.slug === "lead-dashboard");
  if (!item) return null;

  const built = pick(item.features, lang).slice(0, 4);

  return (
    <section className="bg-av-dark text-av-dark-body">
      <Container className="py-14 lg:py-20">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-signal-on-dark">
          {pick(homeDeepDiveNote.eyebrow, lang)}
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ProjectVisual
              src={item.thumbnail}
              alt={pick(item.title, lang)}
              className="border-av-dark-border"
            />
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-dark-muted">
                  {lang === "id" ? "Masalah" : "Problem"}
                </dt>
                <dd className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-av-dark-body">
                  {pick(item.businessProblem, lang)}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-dark-muted">
                  {lang === "id" ? "Yang dibangun" : "What was built"}
                </dt>
                <dd className="mt-2">
                  <ul className="space-y-2">
                    {built.map((f) => (
                      <li
                        key={f.slice(0, 32)}
                        className="border-l-2 border-av-dark-border pl-3 text-[15px] text-av-dark-body"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-dark-muted">
                  {lang === "id" ? "Catatan" : "Note"}
                </dt>
                <dd className="mt-2 max-w-[60ch] text-sm leading-relaxed text-av-dark-muted">
                  {pick(homeDeepDiveNote.note, lang)}
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <ProjectStatus slug={item.slug} lang={lang} dark />
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {pick(item.title, lang)}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-av-dark-body">
                {pick(item.solution, lang)}
              </p>
              <div className="mt-6">
                <WorkLinks
                  dark
                  caseStudyPath={routes.portfolioDetail(lang, item.slug)}
                  demoPath={routes.demoDetail(lang, item.slug)}
                  caseLabel={dict.common.cta.viewCaseStudy}
                  demoLabel={dict.common.cta.openDemo}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
