import { Container } from "@/components/ui/Container";

const values = [
  {
    title: "Bisnis-first, bukan teknologi-first",
    description:
      "Kami mulai dari masalah bisnis Anda — bukan dari tools atau framework yang sedang populer. Rekomendasi dibuat berdasarkan apa yang benar-benar Anda butuhkan di tahap ini.",
  },
  {
    title: "Bukan template yang dipaksakan",
    description:
      "Setiap project didesain sesuai karakter bisnis, industri, dan target customer. Tidak ada template generik yang terlihat sama di semua klien.",
  },
  {
    title: "Tahap-aware, bukan over-engineering",
    description:
      "Mulai dari landing page sederhana, berkembang ke company profile, lalu ke dashboard. Kami sesuaikan scope dengan tahap bisnis Anda, bukan overengineer dari awal.",
  },
  {
    title: "Transparan, tanpa janji palsu",
    description:
      "Timeline, budget, dan scope dibahas terbuka di awal. Tidak ada klaim yang tidak bisa kami pertanggungjawabkan. Portfolio dan demo adalah contoh simulasi — selalu kami labeli.",
  },
];

export function AboutValues() {
  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">Nilai Utama</p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            4 prinsip yang kami pegang di setiap project
          </h2>
        </div>
        <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {values.map((v, i) => (
            <li key={v.title} className="border-t-2 border-av-ink pt-5">
              <p className="font-mono text-xs text-av-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-av-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-av-secondary">
                {v.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
