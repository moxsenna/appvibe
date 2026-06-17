import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const BASE = "http://localhost:5174";
const OUT = join(process.cwd(), ".agent-logs", "portfolio", "qa-screenshots");

const EXPECTED_SCREENS = [
  "Hero Klinik",
  "Layanan Utama",
  "Detail Layanan",
  "Profil Tenaga Ahli",
  "Jadwal & Booking",
  "FAQ & Skenario",
  "Lokasi & Kontak",
];

mkdirSync(OUT, { recursive: true });

async function run() {
  const browser = await chromium.launch({ headless: true });
  const viewports = [
    { name: "desktop-1366", width: 1366, height: 900 },
    { name: "tablet-768", width: 768, height: 1024 },
    { name: "mobile-430", width: 430, height: 932 },
    { name: "mobile-390", width: 390, height: 844 },
  ];

  const report = {
    screens: [],
    whatsappCta: 0,
    naturacareInPreview: false,
    mockupFrames: 0,
    clippedMockups: 0,
    riskyContexts: [],
    safetyFound: [],
  };

  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    await page.goto(`${BASE}/portfolio/klinik`, {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    await page.screenshot({
      path: join(OUT, `klinik-${vp.name}-full.png`),
      fullPage: true,
    });

    if (vp.name === "desktop-1366") {
      for (const title of EXPECTED_SCREENS) {
        const el = page.getByRole("heading", { name: title, level: 3 });
        const found = (await el.count()) > 0;
        const box = found ? await el.first().boundingBox() : null;
        report.screens.push({ title, found, y: box?.y ?? null });
      }

      report.whatsappCta = await page.getByRole("link", { name: /WhatsApp/i }).count();
      report.mockupFrames = await page.locator(".aspect-\\[16\\/10\\]").count();

      const previewText = await page.locator(".aspect-\\[16\\/10\\]").allTextContents();
      report.naturacareInPreview = previewText.some((t) =>
        t.includes("NaturaCare"),
      );

      const clipChecks = await page.evaluate(() => {
        const frames = document.querySelectorAll('[class*="aspect-"]');
        let clipped = 0;
        frames.forEach((frame) => {
          const child = frame.firstElementChild;
          if (!child) return;
          if (child.scrollHeight > frame.clientHeight + 2) clipped++;
        });
        return { total: frames.length, clipped };
      });
      report.clippedMockups = clipChecks.clipped;

      const body = await page.locator("body").innerText();
      const risky = ["menyembuhkan", "hasil pasti", "garansi", "dijamin"];
      for (const word of risky) {
        const idx = body.toLowerCase().indexOf(word);
        if (idx >= 0) {
          report.riskyContexts.push({
            word,
            context: body.slice(Math.max(0, idx - 40), idx + word.length + 40),
          });
        }
      }
      const safety = [
        "konsultasi",
        "non-emergency",
        "simulasi",
        "dapat berbeda",
        "jadwal dapat berubah",
      ];
      report.safetyFound = safety.filter((s) =>
        body.toLowerCase().includes(s),
      );
    }

    await page.close();
  }

  // Regression quick check
  for (const path of ["/portfolio/company-profile", "/portfolio/webinar-landing"]) {
    const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
    const res = await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    report[`regression${path}`] = res?.status() === 200;
    await page.close();
  }

  await browser.close();
  writeFileSync(join(OUT, "qa-report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});