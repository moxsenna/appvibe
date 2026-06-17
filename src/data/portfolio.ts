import type { PortfolioItem } from "@/types/portfolio";
import { same } from "@/i18n/localized";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "company-profile",
    slug: "company-profile",
    title: {
      id: "Website Company Profile untuk Jasa Profesional",
      en: "Premium Company Profile Website for Professional Services",
    },
    category: "company-profile",
    categoryLabel: same("Company Profile"),
    niche: {
      id: "Konsultan bisnis, kontraktor, agency, vendor B2B, interior designer, legal consultant",
      en: "Business consultants, contractors, agencies, B2B vendors, interior designers, and legal consultants",
    },
    summary: {
      id: "Website company profile yang membantu bisnis jasa tampil lebih kredibel — layanan tertata, portfolio proyek mudah dipahami, dan inquiry lebih terarah. Cocok untuk proposal, bio, iklan, dan kartu nama.",
      en: "A high-converting company profile website designed to elevate service business credibility—featuring structured service offerings, a scannable project portfolio, and highly qualified inquiries. Perfect for proposals, bios, ads, and business cards.",
    },
    businessProblem: {
      id: "Banyak bisnis jasa hanya mengandalkan chat WhatsApp, Instagram, atau proposal PDF. Calon klien sulit memahami layanan sebelum menghubungi, portfolio proyek tidak tersusun, dan inquiry masuk tanpa konteks — membuat tim sales menjelaskan hal yang sama berulang kali.",
      en: "Many professional service providers rely solely on WhatsApp, Instagram, or static PDF proposals. Prospective clients struggle to understand services before reaching out, project portfolios remain unorganized, and inbound inquiries arrive without context—forcing sales teams to repeat the same introductory explanations.",
    },
    solution: {
      id: "Website company profile menyusun positioning bisnis, layanan, portfolio proyek, testimoni skenario, FAQ, dan form inquiry dalam satu halaman profesional yang nyaman dibuka di HP. Calon klien bisa memahami bisnis Anda dulu, baru mengambil langkah berikutnya via form atau WhatsApp.",
      en: "A professional company profile website that brings business positioning, services, project portfolios, illustrative client scenarios, FAQs, and a structured inquiry form into a single, mobile-responsive page. Prospects can digest your capabilities and value proposition before taking a structured next step via the form or direct WhatsApp.",
    },
    businessValue: {
      id: [
        "Bisnis jasa terlihat lebih kredibel saat dibagikan ke calon klien",
        "Layanan tertata sehingga pertanyaan berulang di chat berkurang",
        "Portfolio proyek membantu calon klien membayangkan hasil kerja sama",
        "Inquiry lebih terarah dengan form yang mengumpulkan konteks kebutuhan",
        "Satu link resmi untuk proposal, bio Instagram, iklan, dan kartu nama",
      ],
      en: [
        "Elevates brand credibility immediately when the link is shared with prospective clients",
        "Cuts down on repetitive chat inquiries by presenting organized service offerings upfront",
        "Builds trust by helping prospects easily visualize project outcomes and case references",
        "Drives qualified inquiries through a structured form that captures specific client needs",
        "Provides a single, professional link for proposals, social media bios, campaigns, and cards",
      ],
    },
    features: {
      id: [
        "Hero dengan positioning bisnis, tagline, dan trust badges",
        "Service cards dengan 6 layanan jasa dan ringkasan manfaat",
        "Portfolio grid proyek dengan kategori dan ringkasan hasil",
        "Form inquiry terstruktur (nama, bisnis, kebutuhan, budget)",
        "CTA WhatsApp di hero, layanan, dan bagian kontak",
        "Testimoni skenario bisnis jasa — bukan klaim klien nyata",
        "FAQ niche jasa profesional untuk menjawab keraguan awal",
        "Layout responsif untuk mobile, tablet, dan desktop",
      ],
      en: [
        "Hero section highlighting core positioning, value tagline, and trust badges",
        "Service cards showcasing six key offerings with clear benefit summaries",
        "Filterable project portfolio grid with categories and outcome highlights",
        "Structured client inquiry form capturing name, business details, needs, and budget",
        "Strategic WhatsApp CTA buttons placed in the hero, services, and footer sections",
        "Service-business scenario testimonials—illustrating practical, relatable client use cases",
        "Niche FAQs tailored to professional services to resolve upfront objections",
        "Fully responsive layout optimized for seamless mobile, tablet, and desktop browsing",
      ],
    },
    tags: {
      id: ["Company Profile", "WhatsApp CTA", "Form Inquiry", "Mobile Friendly"],
      en: ["Company Profile", "WhatsApp CTA", "Inquiry Form", "Mobile Friendly"],
    },
    thumbnail: "/images/portfolio/company-profile.png",
    demoPath: "/demo/company-profile",
    caseStudyPath: "/portfolio/company-profile",
    mockDataHighlights: {
      id: [
        "6 layanan jasa: Audit Operasional, SOP, Sales Process, Digitalisasi Workflow, Pendampingan Manajemen, Dashboard Reporting",
        "68 contoh proyek portfolio dengan kategori (konsultan, kontraktor, agency, vendor B2B) dan ringkasan hasil",
        "4 skenario testimoni bisnis jasa — contoh situasi, bukan klien nyata",
        "5 FAQ niche jasa profesional: durasi proyek, biaya, proses kerja, revisi, dan integrasi WhatsApp",
        "Demo bisnis Arunika Konsultan — konsultan operasional untuk UMKM naik kelas",
      ],
      en: [
        "Six mock services: Operational Audit, SOP, Sales Process, Workflow Digitization, Management Coaching, and Reporting Dashboard",
        "68 sample portfolio projects classified by category (consultant, contractor, agency, B2B vendor) with outcome summaries",
        "Four service-business scenario testimonials—illustrating practical, relatable client use cases",
        "Five professional-services FAQ items covering project duration, fees, process, revisions, and WhatsApp integration",
        "Arunika Konsultan demo brand—an operational consulting firm helping SMBs scale up",
      ],
    },
    userFlow: {
      id: [
        "Buka website dari link proposal, bio, atau kartu nama",
        "Baca hero dan positioning — pahami siapa bisnis ini dan untuk siapa",
        "Pelajari 6 layanan jasa melalui service cards",
        "Jelajahi portfolio proyek sebagai bukti kerja dan referensi",
        "Baca testimoni skenario dan FAQ untuk membangun kepercayaan",
        "Isi form inquiry atau hubungi WhatsApp dengan konteks kebutuhan",
      ],
      en: [
        "Visitor opens the website via a proposal link, bio, advertisement, or business card",
        "Reads the hero section and positioning to quickly grasp what the business does and who it serves",
        "Explores the six service offerings through the interactive service cards",
        "Reviews the project portfolio grid as proof of capability and reference",
        "Reads the scenario testimonials and FAQs to build confidence and address initial doubts",
        "Submits the structured inquiry form or taps the WhatsApp button with pre-filled context",
      ],
    },
    screens: [
      {
        title: {
          id: "Beranda & Positioning",
          en: "Home & Positioning",
        },
        description: {
          id: "Hero Arunika Konsultan dengan tagline, trust badges, dan CTA konsultasi — calon klien langsung paham positioning bisnis dalam 5 detik.",
          en: "Arunika Konsultan hero section featuring the value tagline, trust badges, and a consultation CTA—ensuring prospects grasp the business positioning within 5 seconds.",
        },
      },
      {
        title: {
          id: "Daftar Layanan",
          en: "Services",
        },
        description: {
          id: "Enam service cards menampilkan Audit Operasional, SOP, Sales Process, dan layanan lain — calon klien tidak perlu bertanya ulang soal apa yang ditawarkan.",
          en: "Six interactive cards displaying Operational Audit, SOP, Sales Process, and other services—reducing repetitive questions about offerings.",
        },
      },
      {
        title: {
          id: "Portfolio Proyek",
          en: "Project Portfolio",
        },
        description: {
          id: "Grid 68 proyek contoh dengan kategori dan ringkasan hasil — membantu calon klien membayangkan scope kerja sama yang relevan.",
          en: "A grid of 68 sample projects with categories and outcome summaries—helping prospects visualize a relevant scope of work.",
        },
      },
      {
        title: {
          id: "Form Inquiry & Kontak",
          en: "Inquiry Form & Contact",
        },
        description: {
          id: "Form singkat mengumpulkan nama, bisnis, jenis kebutuhan, dan estimasi budget — inquiry masuk lebih terarah untuk tim sales.",
          en: "A concise form capturing name, business, need type, and budget range—delivering highly qualified leads to the sales team.",
        },
      },
      {
        title: {
          id: "Testimoni & Kepercayaan",
          en: "Testimonials & Trust",
        },
        description: {
          id: "Empat skenario testimoni bisnis jasa dan FAQ niche — membangun kepercayaan tanpa klaim klien palsu atau hasil yang dijamin.",
          en: "Four service-business scenario testimonials and niche FAQs—building trust without fake client reviews or exaggerated claims.",
        },
      },
    ],
  },
  {
    id: "webinar-landing",
    slug: "webinar-landing",
    title: {
      id: "Landing Page Webinar dan Campaign",
      en: "High-Converting Webinar and Campaign Landing Page",
    },
    category: "landing-page",
    categoryLabel: same("Landing Page"),
    niche: {
      id: "Webinar, kelas online, bootcamp, seminar, dan event promosi",
      en: "Webinars, online classes, bootcamps, seminars, and promotional events",
    },
    summary: {
      id: "Landing page konversi untuk SkillPath Studio (simulasi) — webinar gratis orientasi skill digital. Satu halaman fokus: jelaskan manfaat acara, kumpulkan data peserta, lalu arahkan ke WhatsApp untuk konfirmasi dan follow-up admin.",
      en: "A conversion-focused landing page for SkillPath Studio (simulated)—a free digital-skills orientation webinar. Designed with a single focus: highlight event value, collect registrant data, and redirect to WhatsApp for seamless confirmation and follow-up.",
    },
    businessProblem: {
      id: "Promosi webinar sering hanya poster Instagram, caption panjang, dan broadcast WhatsApp. Calon peserta bingung manfaat acara, admin menjawab pertanyaan berulang, data pendaftar tersebar di chat, dan tidak ada URL fokus untuk iklan Meta atau Google.",
      en: "Webinar promotions are often limited to Instagram posters, long captions, and scattered WhatsApp broadcasts. Prospective attendees remain unclear about the event's benefits, admins answer the same questions repeatedly, registrant data is scattered across chats, and there is no dedicated link for Meta or Google Ads.",
    },
    solution: {
      id: "Landing page campaign dengan hero conversion, problem awareness, benefit cards, agenda 5 sesi, profil 2 pembicara, bonus pendaftar, form 6 field, FAQ transparan, sticky CTA mobile, dan alur submit → konfirmasi WhatsApp → admin menerima lead terstruktur.",
      en: "A dedicated campaign landing page featuring a conversion-driven hero section, problem-awareness points, benefit cards, a 5-session agenda, speaker profiles, registrant bonuses, a 6-field form, transparent FAQs, a sticky mobile CTA, and a direct success redirect to WhatsApp.",
    },
    businessValue: {
      id: [
        "Satu link promosi untuk iklan, bio Instagram, dan broadcast komunitas",
        "Data peserta terkumpul lewat form — bukan chat manual yang sulit direkap",
        "CTA pendaftaran jelas dari hero hingga sticky mobile saat scroll",
        "FAQ mengurangi pertanyaan berulang soal gratis, rekaman, dan link acara",
        "Follow-up WhatsApp lebih rapi: konfirmasi, reminder H-1, dan setelah acara",
        "Event terlihat lebih profesional walaupun masih skala komunitas atau UMKM edukasi",
      ],
      en: [
        "Provides a single, focused promotion link for campaigns, social bios, and community broadcasts",
        "Centralizes registration data via a form rather than manual, unorganized chat threads",
        "Maintains clear registration prompts with a sticky CTA bar on mobile screens",
        "Reduces admin load by addressing questions about event recordings, access links, and pricing upfront",
        "Streamlines WhatsApp follow-up workflows for registration confirmations and reminders",
        "Presents events professionally, even for grassroots communities or educational SMBs",
      ],
    },
    features: {
      id: [
        "Hero campaign SkillPath Studio dengan headline benefit dan info jadwal",
        "Section problem awareness — 5 keraguan calon peserta yang umum",
        "6 benefit cards spesifik tanpa klaim berlebihan",
        "Agenda timeline 5 sesi + Q&A dengan durasi per sesi",
        "2 kartu speaker/mentor dengan expertise chips",
        "4 bonus pendaftar (checklist, roadmap, panduan diskusi, sumber belajar)",
        "Form pendaftaran 6 field dengan 3 wajib (nama, WhatsApp, status)",
        "FAQ 8 pertanyaan transparan seputar event dan program lanjutan",
        "Sticky CTA mobile dan tombol Tanya via WhatsApp",
        "Alur sukses submit → redirect WhatsApp konfirmasi (simulasi demo)",
      ],
      en: [
        "SkillPath Studio campaign hero section with a benefit-driven headline and schedule info",
        "Problem-awareness section highlighting five common doubts of prospective attendees",
        "Six concrete benefit cards presenting event value without exaggerated claims",
        "Structured 5-session agenda timeline with Q&A blocks and session durations",
        "Two speaker profile cards displaying key expertise and professional credentials",
        "Four registrant bonuses including checklists, roadmaps, discussion guides, and learning resources",
        "Six-field registration form with three required fields for clean data collection",
        "Eight transparent FAQs answering questions about the event and follow-on programs",
        "Mobile-optimized sticky CTA bar and a direct WhatsApp inquiry button",
        "Seamless submission workflow redirecting registrants to WhatsApp for quick confirmation",
      ],
    },
    tags: {
      id: ["Landing Page", "Webinar", "Lead Capture", "Campaign", "WhatsApp CTA"],
      en: ["Landing Page", "Webinar Landing", "Lead Capture", "Campaign", "WhatsApp CTA"],
    },
    thumbnail: "/images/portfolio/webinar-landing.png",
    demoPath: "/demo/webinar-landing",
    caseStudyPath: "/portfolio/webinar-landing",
    mockDataHighlights: {
      id: [
        "Campaign simulasi: SkillPath Studio — Webinar Gratis: Dari Bingung Arah Menjadi Lebih Siap Memilih Skill Digital",
        "Jadwal: Sabtu, 21 Juni 2026 · 19.00–21.00 WIB · Zoom (link via WhatsApp)",
        "Kuota simulasi 150 peserta · traffic dari Meta Ads, IG bio, WA broadcast, komunitas",
        "5 problem + 6 benefit + agenda 5 sesi (90 menit materi + 30 menit Q&A)",
        "2 speaker simulasi: Alif Pratama & Dina Kartika, S.Pd. · 4 bonus PDF/Sheet",
        "Form 6 field: nama, WhatsApp, email, domisili, status/profesi, pertanyaan/tujuan",
        "8 FAQ + 5 pesan follow-up WhatsApp (konfirmasi, reminder, soft-sell opsional)",
        "Alur konversi: visitor → form → WhatsApp → admin lead → reminder → event",
      ],
      en: [
        "Simulated campaign: SkillPath Studio—Free Webinar: From Unclear Direction to Choosing Digital Skills with Confidence",
        "Event details: Saturday, 21 June 2026 · 7:00–9:00 PM WIB · Zoom (link shared via WhatsApp)",
        "Target cap of 150 simulated registrants, driven by Meta Ads, bio links, and WhatsApp broadcasts",
        "Five problem statements, six benefits, and a 5-session agenda (90 min content + 30 min Q&A)",
        "Two simulated speakers: Alif Pratama & Dina Kartika, S.Pd. · Four PDF/Spreadsheet bonuses",
        "Six-field form capturing name, WhatsApp, email, location, professional status, and event goals",
        "Eight niche FAQs and five automated WhatsApp message templates (confirmation, reminders, soft-sell)",
        "Complete conversion funnel: visitor → form submission → WhatsApp redirection → lead logged → reminders",
      ],
    },
    userFlow: {
      id: [
        "Buka landing page dari iklan Meta, bio Instagram, atau link komunitas",
        "Baca hero — paham acara gratis, untuk siapa, dan kapan diadakan",
        "Scroll problem & benefit — resonansi masalah dan nilai yang dibawa pulang",
        "Cek agenda dan profil pembicara untuk membangun kepercayaan",
        "Isi form pendaftaran (nama, WhatsApp, status wajib)",
        "Submit → halaman sukses → diarahkan ke WhatsApp konfirmasi (simulasi)",
        "Admin menerima lead terstruktur untuk reminder H-1 dan follow-up setelah acara",
      ],
      en: [
        "Visitor lands on the page from a Meta ad, Instagram bio, or community broadcast link",
        "Reads the hero section to immediately identify the free event topic, date, and target audience",
        "Scrolls through problems and benefits to resonate with pain points and identify key takeaways",
        "Reviews the agenda and speaker profiles to build credibility and trust",
        "Completes the registration form with required name, WhatsApp, and professional status",
        "Submits the form and is automatically redirected to WhatsApp to send a pre-filled confirmation message",
        "Admin logs the structured lead details to schedule reminders and post-event follow-ups",
      ],
    },
    screens: [
      {
        title: { id: "Hero Campaign", en: "Campaign Hero" },
        description: {
          id: "Badge webinar gratis, headline orientasi skill digital, info Sabtu 21 Juni 2026, dual CTA Daftar Gratis dan Tanya via WhatsApp.",
          en: "Features the free webinar badge, digital-skills orientation headline, event details, and dual registration/WhatsApp CTAs.",
        },
      },
      {
        title: { id: "Problem & Manfaat", en: "Problems & Benefits" },
        description: {
          id: "5 kartu problem calon peserta dan 6 benefit konkret — menjawab keraguan sebelum scroll ke agenda dan form.",
          en: "Five client pain point cards and six concrete event benefits—addressing doubts before prompting registration.",
        },
      },
      {
        title: { id: "Agenda Webinar", en: "Webinar Agenda" },
        description: {
          id: "Timeline 5 sesi berdurasi 15–20 menit plus blok Q&A 30 menit — struktur acara yang mudah discan di mobile.",
          en: "A timeline of five 15–20 minute sessions plus a 30-minute Q&A block—highly scannable on mobile.",
        },
      },
      {
        title: { id: "Speaker & Bonus", en: "Speakers & Bonuses" },
        description: {
          id: "Dua pembicara simulasi dengan expertise chips dan 4 bonus pendaftar untuk meningkatkan minat mendaftar.",
          en: "Profiles of two simulated speakers with expertise chips, paired with four bonus offers to drive conversions.",
        },
      },
      {
        title: { id: "Form Pendaftaran", en: "Registration Form" },
        description: {
          id: "Form 6 field dengan validasi dasar, tombol Kirim Pendaftaran, dan microcopy privasi data hanya untuk konfirmasi acara.",
          en: "A clean six-field form with client-side validation, submit button, and data privacy microcopy.",
        },
      },
      {
        title: { id: "FAQ & Sticky CTA", en: "FAQ & Sticky CTA" },
        description: {
          id: "Accordion FAQ 8 pertanyaan umum dan sticky bar mobile Kuota terbatas · Daftar — konversi tetap terlihat saat scroll.",
          en: "An eight-item accordion FAQ block paired with a mobile-optimized sticky bar reading 'Limited seats · Register'.",
        },
      },
    ],
  },
  {
    id: "klinik",
    slug: "klinik",
    title: {
      id: "Website Klinik, Health, dan Beauty",
      en: "Premium Website for Clinics, Health & Beauty Services",
    },
    category: "clinic",
    categoryLabel: { id: "Klinik", en: "Clinic" },
    niche: {
      id: "Klinik kecantikan, dental, bidan, psikolog, wellness center, fisioterapi ringan, dan layanan health & beauty non-emergency",
      en: "Aesthetic clinics, dental practices, midwifery, psychologists, wellness centers, and outpatient health services",
    },
    summary: {
      id: "Website klinik premium yang membantu membangun kepercayaan calon pasien — layanan mudah dipahami, profil tenaga ahli terlihat jelas, jadwal praktik tertata, FAQ menenangkan, dan booking WhatsApp lebih terarah. Demo NaturaCare Clinic untuk klinik kecantikan, dental, bidan, psikolog, atau wellness.",
      en: "A premium clinic website designed to build patient trust—featuring clear services, practitioner profiles, organized schedules, reassuring FAQs, and a direct WhatsApp booking workflow. NaturaCare Clinic demo is ideal for medical and wellness niches.",
    },
    businessProblem: {
      id: "Banyak klinik kecil dan menengah masih mengandalkan Instagram, WhatsApp, poster, dan Google Maps. Calon pasien sering bertanya layanan, harga, jadwal, dan cara booking berulang kali. Profil tenaga ahli tidak terlihat rapi, trust belum kuat karena informasi tersebar, dan admin WhatsApp harus menjelaskan dari awal setiap hari — membuat calon pasien ragu sebelum menghubungi.",
      en: "Many outpatient clinics rely on unorganized social posts, static posters, and basic Maps pins. Patients repeatedly ask about treatments, pricing, schedules, and booking details. Trust is hard to build when information is scattered, and staff spend hours repeating basic details over WhatsApp.",
    },
    solution: {
      id: "Website klinik menyusun hero trust-focused, trust snapshot, 8 layanan dengan detail aman, profil 4 tenaga ahli, jadwal praktik 7 hari, cara booking 4 langkah, 6 FAQ, testimoni skenario berlabel, lokasi & kontak, serta CTA WhatsApp dalam pengalaman hangat dan profesional di mobile. Copy konsultatif tanpa klaim medis berlebihan — calon pasien bisa bertanya dulu sebelum booking.",
      en: "A warm, trust-focused clinic website that brings positioning, service details, doctor profiles, weekly schedules, booking guides, FAQs, and WhatsApp templates into a mobile-first layout. Uses clear disclosures to manage expectations safely.",
    },
    businessValue: {
      id: [
        "Klinik terlihat lebih profesional dan dipercaya saat dibagikan dari Instagram, Google Maps, atau iklan",
        "Layanan tertata sehingga pertanyaan berulang di chat admin berkurang signifikan",
        "Profil tenaga ahli membantu calon pasien merasa lebih tenang sebelum konsultasi",
        "Jadwal praktik transparan sehingga booking lebih terarah dengan template WhatsApp",
        "Satu link resmi untuk bio, kartu nama, dan campaign — dengan disclaimer non-emergency yang jelas",
      ],
      en: [
        "Establishes a highly professional and trustworthy online presence when shared from social media or Maps",
        "Significantly reduces patient inquiries on basic details by structuring service descriptions upfront",
        "Builds patient confidence prior to visits by showcasing detailed practitioner bios and focus areas",
        "Streamlines the booking process with transparent weekly schedules and pre-filled WhatsApp templates",
        "Serves as a unified link for campaigns and bios with clear, professional non-emergency disclaimers",
      ],
    },
    features: {
      id: [
        "Hero split layout dengan appointment card, mini schedule, doctor chips, dan CTA WhatsApp",
        "Trust snapshot 5 kartu — profil ahli, jadwal, FAQ, booking, copy aman",
        "8 service cards: kulit, facial, dental, scaling, bidan, konseling, fisioterapi, wellness",
        "Detail layanan panel dengan cocok untuk siapa, durasi, dan disclaimer konsultasi",
        "4 profil tenaga ahli: dr. Anindita, drg. Raka, Bidan Meisya, Nadia Putri (Psikolog)",
        "Jadwal praktik 7 hari dengan highlight hari ini dan CTA booking per hari",
        "Cara booking 4 langkah + 5 template pesan WhatsApp terstruktur",
        "6 FAQ aman, 4 testimoni skenario berlabel simulasi, lokasi Bandung + kontak dummy",
      ],
      en: [
        "Split hero layout featuring an appointment card, doctor status chips, and a primary booking CTA",
        "Five trust-builder cards highlighting credentials, schedules, FAQs, and booking instructions",
        "Eight service cards covering skincare, dentistry, counseling, physiotherapy, and wellness",
        "Interactive service detail panel displaying target audience, duration, and consultation disclaimers",
        "Four detailed practitioner profile cards showcasing specific fields of expertise and bios",
        "Seven-day schedule tracker highlighting active shifts for the current day with booking links",
        "Step-by-step booking guide paired with five structured WhatsApp text templates",
        "Six medical-niche FAQs, four scenario testimonials, location details, and disclaimer notes",
      ],
    },
    tags: {
      id: ["Klinik", "Booking CTA", "Layanan", "Mobile Friendly"],
      en: ["Clinic", "Booking CTA", "Service Details", "Mobile Friendly"],
    },
    thumbnail: "/images/portfolio/klinik.png",
    demoPath: "/demo/klinik",
    caseStudyPath: "/portfolio/klinik",
    mockDataHighlights: {
      id: [
        "Brand dummy NaturaCare Clinic — tagline: Perawatan yang Lebih Tenang, Personal, dan Terarah",
        "8 layanan: Konsultasi Kulit & Skincare, Facial, Dental Check-Up, Scaling, Bidan, Psikolog, Fisioterapi, Wellness",
        "4 tenaga ahli: dr. Anindita Prameswari, drg. Raka Mahendra, Bidan Meisya Rahmani, Nadia Putri M.Psi.",
        "Jadwal 7 hari Senin–Minggu dengan layanan dan tenaga ahli per hari",
        "6 FAQ niche, 4 testimoni skenario berlabel, 5 template WhatsApp booking, alamat Jl. Anggrek Sehat No. 18 Bandung",
      ],
      en: [
        "NaturaCare Clinic dummy brand—tagline: Guided Care That Feels Calmer and Personal",
        "Eight services: Skin & Skincare Consultation, Facial Therapy, Dental Check-Up, Scaling, Midwifery, Psychology, Physiotherapy, and Wellness",
        "Four practitioner profiles: dr. Anindita Prameswari, drg. Raka Mahendra, Midwife Meisya Rahmani, and Nadia Putri M.Psi.",
        "Seven-day Mon–Sun schedule displaying active services and available practitioners per shift",
        "Six health-niche FAQs, four scenario testimonials, five WhatsApp booking templates, and Bandung dummy address",
      ],
    },
    userFlow: {
      id: [
        "Buka website dari Instagram, Google Maps, WhatsApp, atau iklan",
        "Baca hero NaturaCare Clinic — pahami layanan health, beauty, dental, wellness non-emergency",
        "Baca trust snapshot lalu jelajahi 8 layanan dan detail layanan yang relevan",
        "Lihat profil tenaga ahli untuk membangun kepercayaan sebelum booking",
        "Cek jadwal praktik 7 hari dan baca 6 FAQ untuk menjawab keraguan",
        "Klik CTA WhatsApp dengan template pesan — admin konfirmasi slot dan arahan kunjungan",
      ],
      en: [
        "Patient visits the website via Instagram, Google Maps, WhatsApp, or campaign ads",
        "Reads the NaturaCare Clinic hero to understand the focus on outpatient health, beauty, and wellness",
        "Scans the trust snapshot and reviews services along with their detailed information panels",
        "Examines practitioner profiles to select the appropriate specialist for their consultation",
        "Checks the seven-day schedule and scans the FAQs to address booking or treatment questions",
        "Taps the WhatsApp booking CTA with a pre-filled template, allowing the clinic admin to confirm the slot",
      ],
    },
    screens: [
      {
        title: { id: "Hero Klinik", en: "Clinic Hero" },
        description: {
          id: "Hero NaturaCare Clinic dengan headline trust-focused, CTA WhatsApp, appointment card, mini schedule, doctor chips, dan service tags — calon pasien paham positioning dalam 5 detik.",
          en: "NaturaCare Clinic hero section displaying practitioner chips, a mini schedule, and trust-focused headings to clarify positioning instantly.",
        },
      },
      {
        title: { id: "Layanan Utama", en: "Core Services" },
        description: {
          id: "Grid 8 service cards: Konsultasi Kulit, Facial, Dental Check-Up, Scaling, Bidan, Psikolog, Fisioterapi, Wellness — masing-masing dengan deskripsi aman, durasi, dan CTA.",
          en: "Eight service cards covering beauty, dental, counseling, physiotherapy, and wellness, each with clear descriptions and booking actions.",
        },
      },
      {
        title: { id: "Detail Layanan", en: "Service Detail" },
        description: {
          id: "Panel detail Konsultasi Kulit & Skincare — cocok untuk siapa, estimasi durasi, catatan konsultasi, dan CTA booking tanpa klaim hasil pasti.",
          en: "Detailed view for Skin & Skincare Consultation showing duration, ideal patient profile, and treatment notes without medical overclaims.",
        },
      },
      {
        title: { id: "Profil Tenaga Ahli", en: "Practitioner Profiles" },
        description: {
          id: "Empat profil: dr. Anindita Prameswari, drg. Raka Mahendra, Bidan Meisya Rahmani, Nadia Putri — dengan fokus layanan, jadwal utama, dan bio konsultatif.",
          en: "Four professional profiles featuring specializations, shift schedules, and warm, consultative bio summaries.",
        },
      },
      {
        title: { id: "Jadwal & Booking", en: "Schedule & Booking" },
        description: {
          id: "Jadwal praktik 7 hari dengan highlight hari ini, badge layanan, jam operasional, dan CTA Booking Jadwal via WhatsApp — jadwal dapat berubah, konfirmasi via admin.",
          en: "Seven-day operational calendar highlighting active shifts, service categories, and direct scheduling actions.",
        },
      },
      {
        title: { id: "FAQ & Skenario", en: "FAQs & Testimonials" },
        description: {
          id: "Accordion 6 FAQ aman (konsultasi dulu, jadwal, hasil bervariasi, non-emergency) plus testimoni skenario berlabel — bukan pasien nyata.",
          en: "Six medical-niche FAQs covering results, scheduling, and emergency limits, alongside illustrative scenario reviews.",
        },
      },
      {
        title: { id: "Lokasi & Kontak", en: "Location & Contact" },
        description: {
          id: "Kartu kontak Jl. Anggrek Sehat Bandung, WhatsApp admin, jam operasional, map placeholder, dan CTA final — dengan disclaimer data simulasi AppVibe.",
          en: "Interactive contact card with dummy address, operating hours, and booking CTAs, labeled with AppVibe simulation disclaimers.",
        },
      },
    ],
  },
  {
    id: "properti",
    slug: "properti",
    title: {
      id: "Website Properti dan Konstruksi",
      en: "Property and Construction Showcase Website",
    },
    category: "property",
    categoryLabel: { id: "Properti", en: "Property" },
    niche: {
      id: "Developer kecil, agen properti, kontraktor, renovasi rumah, interior, dan konstruksi ringan",
      en: "Boutique developers, real estate agents, home renovation contractors, interior designers, and light construction services",
    },
    summary: {
      id: "Website listing properti dan proyek yang membantu calon pembeli membandingkan unit dengan lebih mudah — spesifikasi jelas, galeri visual meyakinkan, dan inquiry survei lokasi lebih terarah. Cocok untuk share link, iklan, dan follow-up sales.",
      en: "A property and project listing website that enables buyers to browse and compare units easily—featuring clear specifications, visual galleries, and structured site-visit inquiry forms. Ideal for digital ads, brochure links, and sales follow-up.",
    },
    businessProblem: {
      id: "Listing dan proyek properti sering tercecer di chat WhatsApp, PDF, dan folder foto tanpa struktur. Calon pembeli sulit membandingkan unit, spesifikasi tidak konsisten antar proyek, dan tim sales menjawab pertanyaan yang sama berulang — dari harga, luas tanah, hingga status ketersediaan.",
      en: "Property listings and project details often live in scattered WhatsApp chats, unstructured PDFs, and unorganized photo folders. Prospective buyers struggle to compare options, specifications are inconsistent, and sales teams waste time repeating basic details about pricing, dimensions, and availability.",
    },
    solution: {
      id: "Website properti menyusun listing, filter tipe/lokasi/status, halaman detail dengan spesifikasi unit, galeri visual per proyek, dan form inquiry survei lokasi dalam satu link profesional. Calon pembeli bisa mengeksplorasi dulu, baru menghubungi sales dengan konteks unit yang diminati.",
      en: "A professional property website that compiles property listings, interactive category/status filters, detailed specification grids, project galleries, and site-visit forms into a single, mobile-optimized link. Buyers explore properties independently and reach out with high intent.",
    },
    businessValue: {
      id: [
        "Listing dan proyek terlihat lebih profesional saat dibagikan ke calon pembeli",
        "Spesifikasi unit konsisten — pertanyaan berulang di chat berkurang",
        "Galeri visual membantu calon pembeli membayangkan proyek sebelum survei",
        "Inquiry survei lebih terarah dengan data unit dan jadwal kunjungan",
        "Satu link resmi untuk iklan, brosur digital, dan follow-up sales",
      ],
      en: [
        "Presents property listings and construction projects with professional, credible branding",
        "Saves sales time by organizing unit specs, dimensions, and amenities upfront",
        "Improves buyer interest by showcasing structured visual galleries for each project",
        "Reduces drop-offs by directing site-visit requests through a structured scheduling form",
        "Acts as a centralized digital brochure for social bios, ad campaigns, and follow-ups",
      ],
    },
    features: {
      id: [
        "Hero properti dengan positioning, featured listing, dan CTA survei",
        "Listing cards dengan filter tipe, lokasi, dan status ketersediaan",
        "Halaman detail unit dengan spesifikasi lengkap dan kisaran harga",
        "Galeri foto per proyek — hunian, ruko, kavling, renovasi, interior",
        "Form inquiry survei lokasi dengan field unit dan jadwal kunjungan",
        "CTA WhatsApp ke sales di hero, detail unit, dan bagian kontak",
        "FAQ niche properti untuk menjawab keraguan awal calon pembeli",
        "Layout responsif untuk browsing dan share link di HP",
      ],
      en: [
        "Property hero section with clear brand positioning, featured unit card, and site-visit CTA",
        "Filterable property cards categorized by type, location, and availability status",
        "Dedicated unit detail sections showing building specifications, pricing, and nearby amenities",
        "Structured visual galleries displaying home exteriors, interiors, plots, and renovation updates",
        "Seven-field site-visit inquiry form capturing unit choice, contact details, and preferred visit date",
        "Direct WhatsApp buttons connecting buyers to the sales team on hero, detail, and contact sections",
        "Niche FAQs addressing property booking, down payments, and construction services",
        "Mobile-first responsive layout optimized for effortless browsing and link sharing",
      ],
    },
    tags: {
      id: ["Properti", "Listing", "Galeri", "Survei Lokasi"],
      en: ["Property Listing", "Real Estate Grid", "Project Gallery", "Site Visit Booking"],
    },
    thumbnail: "/images/portfolio/properti.png",
    demoPath: "/demo/properti",
    caseStudyPath: "/portfolio/properti",
    mockDataHighlights: {
      id: [
        "6 listing/proyek: Arunika Residence, Ruko Nusa Avenue, Kavling Bukit Asri, Villa Sagara, Renovasi Rumah Cendana, Interior Apartemen Senopati",
        "4 kategori: rumah siap huni, kavling & lahan, renovasi & bangun rumah, interior & komersial",
        "Filter tipe, lokasi (Jabodetabek & sekitarnya), kisaran harga, dan status (tersedia, pre-order, slot terbatas)",
        "Spesifikasi per unit: luas tanah/bangunan, kamar, kisaran harga, fasilitas sekitar, dan cocok untuk siapa",
        "Galeri visual per proyek — eksterior, interior, area sekitar, before/after renovasi (label contoh/simulasi)",
        "5 FAQ niche: survei lokasi, harga dapat berubah, konsultasi tanpa komitmen, jasa desain & bangun, penyesuaian spesifikasi",
        "Demo bisnis GrahaNusa Properti & Karya — studio properti + konstruksi untuk hunian, ruko, renovasi, dan interior",
      ],
      en: [
        "Six mock listings: Arunika Residence, Ruko Nusa Avenue, Kavling Bukit Asri, Villa Sagara, Cendana Home Renovation, and Senopati Apartment Interior",
        "Four categories: Move-In Ready Homes, Land & Plots, Home Construction & Renovation, and Commercial & Interior",
        "Active filters for property types, location (Greater Jakarta Area), price range, and status (available, pre-order, limited)",
        "Comprehensive unit specs: land/building size, bedroom count, nearby facilities, and target buyer profiles",
        "Visual galleries showcasing exteriors, interiors, floor plans, and before/after views with mock labels",
        "Five property-niche FAQs covering site visits, price adjustments, design consulting, and specification options",
        "GrahaNusa Properti & Karya demo brand—a construction and property studio for homes, shophouses, and renovations",
      ],
    },
    userFlow: {
      id: [
        "Buka website dari link iklan, brosur, atau chat sales",
        "Baca hero dan featured listing — pahami proyek yang ditawarkan",
        "Filter listing berdasarkan tipe, lokasi, atau status ketersediaan",
        "Buka detail unit dan baca spesifikasi lengkap beserta kisaran harga",
        "Lihat galeri visual untuk membayangkan kondisi proyek sebelum survei",
        "Isi form inquiry survei lokasi atau hubungi WhatsApp dengan konteks unit",
      ],
      en: [
        "Buyer visits the website via digital ads, links in chat, or social media bios",
        "Reads the hero and featured listings to understand the types of property and services offered",
        "Filters the listings by property type, location, price, or availability status",
        "Opens the unit detail page to check building specs, pricing, and nearby facilities",
        "Views the visual gallery to evaluate the property's design and condition",
        "Submits a site-visit inquiry form or contacts the sales agent directly via WhatsApp",
      ],
    },
    screens: [
      {
        title: { id: "Hero & Featured Listing", en: "Hero & Featured Unit" },
        description: {
          id: "Hero GrahaNusa Properti & Karya dengan tagline, trust badges, featured Arunika Residence, dan CTA Jadwalkan Survei — calon pembeli paham jenis proyek dalam beberapa detik.",
          en: "GrahaNusa hero section displaying trust badges, a featured listing for Arunika Residence, and a 'Schedule Visit' CTA.",
        },
      },
      {
        title: { id: "Listing & Filter", en: "Listings & Filters" },
        description: {
          id: "Grid 6 listing dengan filter tipe, lokasi, dan status — setiap card menampilkan kategori, kisaran harga, luas, dan highlight agar perbandingan unit lebih mudah.",
          en: "A grid of six listings with interactive filters, displaying pricing, dimensions, and status badges for easy comparison.",
        },
      },
      {
        title: { id: "Detail & Spesifikasi", en: "Unit Detail & Specs" },
        description: {
          id: "Halaman detail Arunika Residence: kisaran harga, spec grid, fasilitas sekitar, disclaimer harga, dan CTA survei + WhatsApp — informasi konsisten sebelum kunjungan lapangan.",
          en: "Arunika Residence detail page featuring property specifications, price range, nearby amenities, and direct visit booking CTAs.",
        },
      },
      {
        title: { id: "Galeri Visual", en: "Visual Galleries" },
        description: {
          id: "Galeri terstruktur per proyek — fasad, interior, taman, before/after renovasi — dengan label contoh/simulasi agar ekspektasi calon pembeli tetap realistis.",
          en: "Structured galleries showing exteriors, interiors, and before/after renovations, clearly labeled with simulation markers.",
        },
      },
      {
        title: { id: "Inquiry Survei Lokasi", en: "Site Visit Inquiry" },
        description: {
          id: "Form survei 7 field (nama, WhatsApp, unit pilihan, kebutuhan, jadwal, catatan) plus CTA WhatsApp — inquiry masuk dengan konteks listing untuk follow-up sales.",
          en: "A seven-field site-visit booking form capturing contact details, unit interest, and preferred dates for organized sales follow-up.",
        },
      },
    ],
  },
  {
    id: "lead-dashboard",
    slug: "lead-dashboard",
    title: {
      id: "Dashboard Lead Management untuk Mengelola Inquiry dari Banyak Channel",
      en: "Lead Management Dashboard for Multi-Channel Inquiries",
    },
    category: "dashboard",
    categoryLabel: same("CRM Lite"),
    niche: {
      id: "UMKM, klinik, edukasi, properti, agency, konsultan — bisnis dengan inquiry dari website, iklan, WhatsApp, referral, dan event",
      en: "SMBs, clinics, property agencies, educators, and B2B consultants managing leads from websites, ads, WhatsApp, and events",
    },
    summary: {
      id: "Contoh CRM Lite internal — LeadFlow CRM Lite — untuk membantu bisnis mencatat lead, memantau status, mengatur follow-up, dan membaca performa inquiry dari website, iklan, WhatsApp, referral, dan event. Bukan CRM enterprise; ini dashboard ringan untuk owner, admin, dan tim sales kecil.",
      en: "A lightweight internal CRM Lite simulator—LeadFlow CRM Lite—built to help businesses track leads, monitor pipeline status, schedule follow-ups, and analyze marketing channels. Designed for business owners, admins, and small sales teams.",
    },
    businessProblem: {
      id: "Saat inquiry mulai ramai dari WhatsApp, website, event, dan iklan, spreadsheet dan chat saja sering tidak cukup. Lead mudah tercecer, admin sulit tahu prioritas, follow-up bergantung ingatan masing-masing orang, owner tidak punya ringkasan performa, status calon customer tidak jelas, dan data source sulit dibaca saat evaluasi campaign. Tim sales tidak punya satu sumber data yang sama — report bulanan pun sulit dibuat.",
      en: "As client inquiries scale up across WhatsApp, websites, events, and ads, spreadsheets and chat logs become hard to manage. Leads are lost, sales follow-ups are missed or forgotten, performance metrics are unavailable, and owners lack a single source of truth for marketing campaigns.",
    },
    solution: {
      id: "LeadFlow CRM Lite menyatukan data lead, status, follow-up, dan laporan dalam satu dashboard ringan: lead inbox, pipeline kanban, detail drawer dengan catatan, source tracking, laporan ringkas, dan role owner/admin/sales/supervisor. Membantu lead tidak tercecer, follow-up lebih konsisten, dan owner mendapat visibilitas tanpa bertanya manual ke setiap admin.",
      en: "LeadFlow CRM Lite organizes lead inputs, pipeline statuses, contact history, and analytics into a lightweight dashboard. Features include a lead inbox, pipeline kanban, detail drawer, lead source tracking, summary reports, and user access levels.",
    },
    businessValue: {
      id: [
        "Owner melihat jumlah lead masuk, follow-up tertunda, source teraktif, dan potensi nilai pipeline",
        "Admin punya daftar kerja harian — tahu lead mana yang harus dihubungi tanpa cari di banyak chat",
        "Sales melihat lead berdasarkan prioritas dan konteks komunikasi sebelumnya",
        "Mengurangi lead tercecer, follow-up lupa, data dobel, dan spreadsheet yang tidak update",
        "Fondasi ringan yang bisa dikembangkan sebelum membangun sistem internal lebih besar",
      ],
      en: [
        "Provides business owners with instant visibility on lead counts, overdue tasks, active channels, and pipeline value",
        "Gives admins a clean daily task list, showing which leads to contact without searching through chats",
        "Equips sales agents with priority rankings and complete communication history to streamline follow-ups",
        "Reduces operational leakages like lost leads, duplicate entries, missed reminders, and outdated spreadsheets",
        "Offers a lightweight, scalable dashboard foundation before committing to complex, ERP or enterprise CRM software",
      ],
    },
    features: {
      id: [
        "Ringkasan Lead — 6 stat cards: lead bulan ini, baru hari ini, follow-up jatuh tempo, deal, estimasi pipeline, prioritas tinggi",
        "Lead Inbox — tabel dengan search, filter source/status/priority, badge status, dan assigned admin",
        "Pipeline Kanban — 5 kolom status (Baru, Dihubungi, Follow Up, Deal, Tidak Cocok) dengan lead cards",
        "Detail Lead Drawer — profil, kontak, kebutuhan, status, prioritas, catatan, dan aksi berikutnya",
        "Aktivitas & Follow-up — timeline riwayat kontak, jadwal follow-up, dan quick outcome buttons",
        "Performa Source Lead — breakdown per Website, Facebook Ads, WhatsApp, Referral, Event",
        "Laporan Ringkas — total lead, deal, tidak cocok, beban kerja admin, dan leads aging",
        "Empty state & mobile view — setup checklist dan tampilan compact untuk admin di lapangan",
      ],
      en: [
        "Lead summary dashboard featuring six key metrics: monthly leads, new today, overdue tasks, deals, and pipeline value",
        "Lead Inbox table with advanced search, status/source/priority filters, status badges, and admin assignment",
        "Pipeline Kanban board with five status columns (New, Contacted, Follow Up, Deal, Not a Fit) with lead cards",
        "Lead Detail drawer displaying customer profiles, requirements, notes, priority levels, and next action items",
        "Activity & Follow-up timeline tracking contact history, schedules, and quick outcome buttons",
        "Lead Source analysis breaking down performance across Website, Facebook Ads, WhatsApp, Referrals, and Events",
        "Summary Reports detailing lead conversion, admin workload distribution, and lead aging metrics",
        "Compact mobile layout and empty state views featuring setup checklists and inline tips",
      ],
    },
    tags: {
      id: ["CRM Lite", "Lead Management", "Sales Dashboard", "Follow-up Tracking", "Mock Data"],
      en: ["CRM Lite", "Lead Management", "Sales Dashboard", "Follow-up Tracking", "Analytics Dashboard"],
    },
    thumbnail: "/images/portfolio/lead-dashboard.png",
    demoPath: "/demo/lead-dashboard",
    caseStudyPath: "/portfolio/lead-dashboard",
    mockDataHighlights: {
      id: [
        "Produk demo: LeadFlow CRM Lite — Kelola lead dari banyak channel tanpa tercecer",
        "50 leads simulasi dengan variasi klinik, properti, kursus, agency, UMKM, event organizer",
        "12 lead detail lengkap: Ayu Kartika, Bima Santoso, Citra Maharani, Dewi Lestari, dan 8 lainnya",
        "4 tim dummy: Rina Wulandari (RW), Bayu Pratama (BP), Sari Melati (SM), Dimas Arya (DA)",
        "5 status + 5 source + 3 level prioritas (Tinggi, Sedang, Rendah)",
        "6 FAQ produk: integrasi form, WhatsApp, multi admin, filter source, klaim closing, vs CRM besar",
        "Report metrics: 50 lead/bulan, 9 follow-up jatuh tempo, 7 deal, estimasi pipeline Rp186,5 jt",
      ],
      en: [
        "LeadFlow CRM Lite demo product—managing incoming inquiries across multiple marketing channels",
        "50 simulated leads distributed across clinic, property, courses, agency, and B2B consulting niches",
        "12 detailed customer profiles including Ayu Kartika, Bima Santoso, Citra Maharani, Dewi Lestari, and others",
        "Four dummy team members: Rina Wulandari, Bayu Pratama, Sari Melati, and Dimas Arya",
        "Five status stages, five lead sources, and three priority levels (High, Medium, Low)",
        "Six product FAQs covering form integration, WhatsApp sync, multi-admin support, and CRM comparison",
        "Report metrics: 50 monthly leads, 9 overdue tasks, 7 deals, and IDR 186.5M estimated pipeline value",
      ],
    },
    userFlow: {
      id: [
        "Lead masuk dari form website, WhatsApp, referral, event, atau iklan — tercatat dengan source yang jelas",
        "Admin membuka Lead Inbox dan melihat lead yang belum diproses atau perlu prioritas",
        "Admin mengubah status (Baru → Dihubungi → Follow Up) agar tim membaca progres yang sama",
        "Admin menambah catatan follow-up — konteks percakapan tidak mulai dari nol",
        "Admin menjadwalkan follow-up untuk lead yang belum siap membeli",
        "Owner melihat laporan: total lead, source aktif, pipeline, deal, dan beban kerja admin",
        "Lead diberi keputusan akhir — Deal atau Tidak Cocok — pipeline tetap bersih",
      ],
      en: [
        "Leads are captured from website forms, WhatsApp, referrals, events, or ads, and logged with their source",
        "Admins open the Lead Inbox to identify unprocessed inquiries or high-priority follow-ups",
        "Admins update lead status (New → Contacted → Follow Up) to maintain team alignment",
        "Admins add follow-up notes to ensure client conversations do not start from scratch",
        "Sales agents schedule follow-up tasks and reminders for prospects who are not yet ready to buy",
        "Business owners review reports to evaluate conversion rates, active channels, pipeline health, and workload",
        "Leads are marked with a final outcome (Deal or Not a Fit) to keep the pipeline clean and accurate",
      ],
    },
    screens: [
      {
        title: { id: "Ringkasan Lead", en: "Lead Summary Dashboard" },
        description: {
          id: "Overview dengan stat cards, mini chart source, recent leads, dan follow-up reminders — owner langsung paham kondisi lead hari ini. Data simulasi untuk demo portfolio.",
          en: "High-level overview displaying stat cards, lead source charts, recent activity, and follow-up reminders for quick business health checks.",
        },
      },
      {
        title: { id: "Lead Inbox", en: "Lead Inbox Table" },
        description: {
          id: "Tabel 50 leads dengan kolom nama, kebutuhan, source, status, priority, assigned, last contact, estimasi nilai, dan next action — search dan filter aktif.",
          en: "A comprehensive table of 50 leads with search and filter controls, showing contact status, value, and next actions.",
        },
      },
      {
        title: { id: "Pipeline Lead", en: "Pipeline Kanban Board" },
        description: {
          id: "Kanban 5 kolom status dengan lead cards, priority badge, source badge, assigned avatar, dan estimasi nilai — tim fokus pada yang perlu follow-up.",
          en: "Visual tracking board across five status columns with cards, priority labels, assigned avatars, and pipeline values.",
        },
      },
      {
        title: { id: "Detail Lead", en: "Lead Detail Drawer" },
        description: {
          id: "Drawer kanan menampilkan Ayu Kartika: kontak 08XX-0000-1201, kebutuhan, status Follow Up, prioritas Tinggi, catatan, activity log, dan aksi berikutnya.",
          en: "Slide-out profile drawer displaying Ayu Kartika's contact, requirements, Follow Up status, High priority, and action logs.",
        },
      },
      {
        title: { id: "Aktivitas & Follow-up", en: "Activity & Follow-ups" },
        description: {
          id: "Timeline riwayat kontak, form tambah catatan, chip jadwal follow-up Jumat 15:00, dan quick buttons — tim tahu konteks terakhir setiap lead.",
          en: "Detailed contact timeline, task scheduler, and quick-save outcome buttons to maintain complete interaction histories.",
        },
      },
      {
        title: { id: "Performa Source Lead", en: "Lead Source Analytics" },
        description: {
          id: "Breakdown per Website (teraktif), Facebook Ads, WhatsApp, Referral, Event — jumlah lead, deal, follow-up pending, dan estimasi nilai per channel.",
          en: "Breakdown of conversion rates, lead volumes, and estimated pipeline values across Website, ads, WhatsApp, and events.",
        },
      },
      {
        title: { id: "Laporan Ringkas", en: "Performance Reports" },
        description: {
          id: "6 metrik utama, conversion by status, top source, admin workload, dan leads aging — membantu owner memantau operasional sales tanpa spreadsheet.",
          en: "Interactive charts tracking lead aging, conversion ratios, workload sharing, and team efficiency without spreadsheets.",
        },
      },
      {
        title: { id: "Belum Ada Lead", en: "Onboarding Empty State" },
        description: {
          id: "Empty state matang dengan setup checklist, CTA tambah lead pertama, dan saran integrasi form — dashboard tetap terasa produk sungguhan saat data kosong.",
          en: "Polished zero-data state showing a setup checklist, 'Add Lead' CTA, and integration instructions to mimic a real CRM app.",
        },
      },
      {
        title: { id: "Lead Mobile View", en: "Mobile CRM Layout" },
        description: {
          id: "Tampilan compact untuk HP: stat cards ringkas, lead cards menggantikan tabel, sticky action filter/detail/catatan — admin cek prioritas dari lapangan.",
          en: "Compact view optimized for mobile displays with quick actions, swipeable details, and simple status filters for field teams.",
        },
      },
    ],
  },
];
