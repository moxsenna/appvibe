import { chromium } from "playwright";

const BASE = process.env.QA_BASE_URL ?? "http://localhost:5174";
const PAGES = [
  "/portfolio/klinik",
  "/portfolio/company-profile",
  "/portfolio/webinar-landing",
];

const VIEWPORTS = [
  { name: "desktop", width: 1366, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile-430", width: 430, height: 932 },
  { name: "mobile-390", width: 390, height: 844 },
];

const RISKY_PHRASES = [
  "menyembuhkan",
  "hasil pasti",
  "garansi",
  "dijamin",
  "permanen",
  "paling ampuh",
  "pasti cocok",
  "bebas risiko",
  "tanpa efek samping",
  "langsung hilang",
];

const SAFETY_PHRASES = [
  "konsultasi",
  "non-emergency",
  "simulasi",
  "dapat berbeda",
  "jadwal dapat berubah",
];

const EXPECTED_KLINIK_SCREENS = [
  "Hero Klinik",
  "Layanan Utama",
  "Detail Layanan",
  "Profil Tenaga Ahli",
  "Jadwal & Booking",
  "FAQ & Skenario",
  "Lokasi & Kontak",
];

async function checkOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      overflow: doc.scrollWidth > doc.clientWidth + 1,
    };
  });
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const results = {
    pages: {},
    klinik: {},
    copySafety: { risky: [], safety: [] },
    consoleErrors: [],
  };

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    });
    const page = await context.newPage();

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        results.consoleErrors.push(`[${viewport.name}] ${msg.text()}`);
      }
    });
    page.on("pageerror", (err) => {
      results.consoleErrors.push(`[${viewport.name}] PAGE: ${err.message}`);
    });

    for (const path of PAGES) {
      const url = `${BASE}${path}`;
      const response = await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });
      const status = response?.status() ?? 0;
      const overflow = await checkOverflow(page);
      const title = await page.title();
      const bodyText = await page.locator("body").innerText();

      results.pages[`${path}@${viewport.name}`] = {
        status,
        title,
        overflow: overflow.overflow,
        scrollWidth: overflow.scrollWidth,
        clientWidth: overflow.clientWidth,
      };

      if (path === "/portfolio/klinik" && viewport.name === "desktop") {
        const screenTitles = [];
        for (const expected of EXPECTED_KLINIK_SCREENS) {
          const count = await page.getByRole("heading", {
            name: expected,
            level: 3,
          }).count();
          screenTitles.push({ expected, found: count > 0 });
        }

        const whatsappCta = await page
          .getByRole("link", { name: /WhatsApp/i })
          .count();
        const mockupFrames = await page
          .locator('[class*="aspect-"]')
          .count();

        results.klinik.desktop = {
          screenTitles,
          whatsappCtaCount: whatsappCta,
          mockupFrameCount: mockupFrames,
          hasNaturaCare: bodyText.includes("NaturaCare"),
        };

        for (const phrase of RISKY_PHRASES) {
          if (bodyText.toLowerCase().includes(phrase)) {
            results.copySafety.risky.push(phrase);
          }
        }
        for (const phrase of SAFETY_PHRASES) {
          if (bodyText.toLowerCase().includes(phrase)) {
            results.copySafety.safety.push(phrase);
          }
        }
      }

      if (path === "/portfolio/klinik") {
        results.klinik[viewport.name] = {
          overflow: overflow.overflow,
          hasHero: bodyText.includes("Website Klinik"),
        };
      }
    }

    await context.close();
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});