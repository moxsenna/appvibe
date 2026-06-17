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
    <section id="story" className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Pendekatan Kami
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            Kenapa AppVibe Studio
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
