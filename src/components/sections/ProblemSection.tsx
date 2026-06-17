import {
  Globe,
  MessageSquare,
  Image,
  Users,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

const problems: { num: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    num: "01",
    title: "Belum punya halaman resmi",
    description:
      "Calon pelanggan tidak menemukan tempat yang rapi untuk memahami layanan, produk, harga, dan cara menghubungi Anda.",
    icon: Globe,
  },
  {
    num: "02",
    title: "Terlalu bergantung pada chat manual",
    description:
      "Pertanyaan yang sama terus berulang karena informasi penting belum disusun dalam halaman yang jelas.",
    icon: MessageSquare,
  },
  {
    num: "03",
    title: "Portfolio dan testimoni tidak tertata",
    description:
      "Bukti kerja, galeri, review, dan studi kasus belum disajikan dengan cara yang meyakinkan.",
    icon: Image,
  },
  {
    num: "04",
    title: "Leads sulit dilacak",
    description:
      "Calon pelanggan datang dari banyak sumber, tetapi belum ada form, status, atau dashboard sederhana untuk mengelolanya.",
    icon: Users,
  },
  {
    num: "05",
    title: "Iklan tidak punya landing page yang kuat",
    description:
      "Traffic dari iklan atau promosi bisa terbuang jika halaman tujuan tidak fokus pada satu aksi yang jelas.",
    icon: Megaphone,
  },
];

export function ProblemSection() {
  return (
    <section className="section-padding bg-white reveal-on-scroll">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="premium-eyebrow">Kenapa ini penting</span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-brand-navy sm:text-3xl lg:text-4xl">
              Bisnis yang bagus tetap bisa terlihat kurang serius kalau
              tampilan digitalnya belum rapi.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              Calon pelanggan sering menilai bisnis dari link pertama yang
              mereka buka. Kalau informasi layanan tercecer, hanya mengandalkan
              chat manual, atau belum punya halaman resmi, peluang kepercayaan
              bisa hilang sebelum percakapan dimulai.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="group bento-card flex gap-5"
                style={{ marginLeft: index % 2 === 1 ? "0" : "0" }}
              >
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <span className="text-xs font-bold text-brand-blue/60">
                    {problem.num}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-semantic-danger transition-colors group-hover:bg-red-100">
                    <problem.icon className="h-5 w-5" aria-hidden />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}