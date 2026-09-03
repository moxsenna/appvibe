import { Container } from "@/components/ui/Container";

const paragraphs = [
  "AppVibe Studio lahir dari pengamatan yang sama: banyak bisnis yang sebenarnya punya layanan bagus, tapi tidak punya 'wajah digital' yang rapi. Calon pelanggan sering menilai dari kesan pertama di website — kalau tidak ada, atau tidak meyakinkan, mereka pindah ke kompetitor.",
  "Kami melihat banyak bisnis masih mengandalkan Instagram, PDF proposal, dan broadcast WhatsApp untuk menjelaskan layanan mereka. Tim sales menjelaskan hal yang sama berulang-ulang. Portfolio tidak tertata. Tidak ada satu link resmi yang bisa dishare ke calon pelanggan atau partner.",
  "Pendekatan AppVibe bukan soal membuat website yang 'keren' — tapi membuat website yang menyelesaikan masalah bisnis nyata. Setiap project dimulai dari diskusi tentang masalah, target customer, dan tujuan yang ingin dicapai — baru bicara soal desain dan teknologi.",
  "Kami juga percaya pada pendekatan bertahap. Tidak semua bisnis butuh website lengkap di hari pertama. Landing page sederhana untuk campaign mungkin cukup di tahap awal. Website company profile menyusul. Dashboard dan automation di tahap berikutnya. Yang penting: fondasi yang rapi agar setiap tahap berikutnya lebih mudah.",
  "Kualitas bukan tentang teknologi terbaru, tapi tentang apakah hasilnya benar-benar dipakai. Kami lebih bangga pada website yang konsisten dipakai untuk menerima inquiry dan menutup deal, daripada website yang terlihat bagus tapi tidak menghasilkan apa-apa.",
];

export function AboutStory() {
  return (
    <section id="story" className="scroll-mt-20 border-t border-av-border">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">Pendekatan Kami</p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            Kenapa AppVibe Studio
          </h2>
          <figure className="mt-8 overflow-hidden rounded border border-av-border bg-av-surface">
            <img
              src="/images/about/studio.webp"
              alt="AppVibe Studio — perancangan antarmuka dan alur inquiry digital"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <figcaption className="border-t border-av-border-soft px-4 py-3 text-xs leading-relaxed text-av-muted">
              AppVibe Studio — berfokus pada perancangan antarmuka, arsitektur web yang mengarah ke aksi, dan alur inquiry digital yang terpadu.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-av-text sm:text-base">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
