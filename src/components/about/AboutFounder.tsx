import { Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// TODO: ganti dengan URL profil LinkedIn publik (format linkedin.com/in/...)
const LINKEDIN_URL = "https://www.linkedin.com/in/bima-putra-sena/";

const paragraphs = [
  "Bima memulai AppVibe Studio setelah melihat banyak UMKM dan bisnis jasa kesulitan menampilkan diri secara profesional secara online — punya layanan yang bagus, tapi belum punya halaman resmi yang menjelaskannya dengan jelas. Sebagian masih bergantung pada DM Instagram, sebagian lagi punya website yang dibuat seadanya dan tidak menghasilkan apa-apa.",
  "Sebagai founder yang juga developer, Bima terlibat langsung di setiap proyek — dari riset kebutuhan, desain antarmuka, hingga pengembangan dan iterasi setelah live. Tidak ada tim sales yang berbeda dari tim yang mengerjakan; orang yang Anda ajak diskusi adalah orang yang sama yang membangun website Anda.",
  "Filosofinya sederhana: mulai dari yang paling dibutuhkan bisnis Anda hari ini, lalu kembangkan bertahap seiring pertumbuhan. AppVibe tidak akan menjadi agency besar dengan 50 orang — fokusnya adalah project rapi, komunikasi terbuka, dan hasil yang benar-benar dipakai oleh klien.",
];

export function AboutFounder() {
  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Tentang Founder
              </p>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
                Bima Putra Sena
              </h2>
              <p className="mt-1 text-sm font-medium text-brand-muted">
                Founder & Developer · AppVibe Studio
              </p>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-cta-gradient text-base font-bold text-white"
                    aria-hidden
                  >
                    BS
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">
                      Terlibat langsung di setiap proyek
                    </p>
                    <p className="text-xs text-brand-muted">
                      Dari diskusi awal hingga go-live
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="blue">Web Development</Badge>
                  <Badge variant="violet">Product Design</Badge>
                  <Badge variant="cyan">Business Strategy</Badge>
                </div>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-blue transition-colors hover:text-brand-violet"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                  Connect di LinkedIn
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Card padding="lg" className="h-full">
                <div className="space-y-5 text-base leading-relaxed text-brand-muted">
                  {paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
