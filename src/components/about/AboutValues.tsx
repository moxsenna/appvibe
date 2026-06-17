import {
  Layers,
  Lightbulb,
  TrendingUp,
  Eye,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "blue" | "violet" | "emerald" | "amber";
};

const values: Value[] = [
  {
    icon: Lightbulb,
    title: "Bisnis-first, bukan teknologi-first",
    description:
      "Kami mulai dari masalah bisnis Anda — bukan dari tools atau framework yang sedang populer. Rekomendasi dibuat berdasarkan apa yang benar-benar Anda butuhkan di tahap ini.",
    tone: "blue",
  },
  {
    icon: Layers,
    title: "Bukan template yang dipaksakan",
    description:
      "Setiap project didesain sesuai karakter bisnis, industri, dan target customer. Tidak ada template generik yang terlihat sama di semua klien.",
    tone: "violet",
  },
  {
    icon: TrendingUp,
    title: "Tahap-aware, bukan over-engineering",
    description:
      "Mulai dari landing page sederhana, berkembang ke company profile, lalu ke dashboard. Kami sesuaikan scope dengan tahap bisnis Anda, bukan overengineer dari awal.",
    tone: "emerald",
  },
  {
    icon: Eye,
    title: "Transparan, tanpa janji palsu",
    description:
      "Timeline, budget, dan scope dibahas terbuka di awal. Tidak ada klaim yang tidak bisa kami pertanggungjawabkan. Portfolio dan demo adalah contoh simulasi — selalu kami labeli.",
    tone: "amber",
  },
];

const toneClass = {
  blue: "from-blue-500 to-cyan-500",
  violet: "from-violet-500 to-purple-500",
  emerald: "from-emerald-500 to-green-500",
  amber: "from-amber-500 to-orange-500",
};

export function AboutValues() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Nilai Utama
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            4 prinsip yang kami pegang di setiap project
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} hover className="flex gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm ${toneClass[v.tone]}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {v.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
