import { Badge } from "@/components/ui/Badge";
import { speakers } from "@/data/demos/webinar-landing/speakers";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingSpeakers() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.speakers;

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
            {copy.eyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {copy.title[lang]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {copy.subtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {speakers.map((speaker) => (
            <Card key={speaker.name} hover className="overflow-hidden p-0">
              <div
                className={`h-28 bg-gradient-to-br sm:h-32 ${speaker.gradient}`}
              >
                <div className="flex h-full items-end p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-base font-bold text-white backdrop-blur-sm sm:h-14 sm:w-14">
                    {speaker.initials}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-brand-navy">
                  {speaker.name}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-brand-violet">
                  {speaker.role[lang]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {speaker.bio[lang]}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {speaker.expertise[lang].map((tag) => (
                    <Badge key={tag} variant="violet">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}