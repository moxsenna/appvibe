import { Target, Wrench, Trophy } from "lucide-react";
import { caseStudies } from "@/data/demos/company-profile/caseStudies";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

const copy = {
  id: {
    eyebrow: "Studi Kasus Ringkas",
    title: "Bagaimana struktur membantu bisnis jasa bertumbuh",
    subtitle:
      "Tiga contoh naratif (bukan klien nyata) yang menggambarkan dampak dari menata proses kerja dengan cara yang lebih terstruktur.",
    study: "Studi",
    challenge: "Tantangan",
    approach: "Pendekatan",
    outcome: "Hasil",
  },
  en: {
    eyebrow: "Brief case studies",
    title: "How structure helps service businesses grow",
    subtitle:
      "Three narrative examples (not real clients) showing the impact of more structured ways of working.",
    study: "Study",
    challenge: "Challenge",
    approach: "Approach",
    outcome: "Outcome",
  },
} as const;

export function CompanyProfileCaseStudies() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs, idx) => (
            <Card key={cs.id} hover className="flex flex-col">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-cta-gradient px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  {t.study} {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-xs font-medium text-brand-blue">
                  {cs.industry[lang]}
                </span>
              </div>
              <p className="mb-4 text-sm font-medium text-brand-navy">
                {cs.scope[lang]}
              </p>

              <div className="space-y-4">
                <Block
                  icon={Target}
                  label={t.challenge}
                  body={cs.challenge[lang]}
                  tone="amber"
                />
                <Block
                  icon={Wrench}
                  label={t.approach}
                  body={cs.approach[lang]}
                  tone="blue"
                />
                <Block
                  icon={Trophy}
                  label={t.outcome}
                  body={cs.outcome[lang]}
                  tone="emerald"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-t border-brand-border pt-4">
                {cs.metrics.map((m, mIdx) => (
                  <div key={`${cs.id}-m-${mIdx}`} className="text-center">
                    <p className="text-base font-bold text-brand-navy sm:text-lg">
                      {m.value[lang]}
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-brand-muted">
                      {m.label[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Block({
  icon: Icon,
  label,
  body,
  tone,
}: {
  icon: typeof Target;
  label: string;
  body: string;
  tone: "amber" | "blue" | "emerald";
}) {
  const toneClass = {
    amber: "bg-amber-100/70 text-amber-700",
    blue: "bg-blue-100/70 text-brand-blue",
    emerald: "bg-emerald-100/70 text-emerald-700",
  }[tone];
  return (
    <div>
      <p
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${toneClass}`}
      >
        <Icon className="h-3 w-3" aria-hidden /> {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">{body}</p>
    </div>
  );
}