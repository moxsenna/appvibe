import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const count = (text, sub) => text.split(sub).length - 1;

function fail(why) {
  process.stderr.write(`FAIL: ${why}\n`);
  process.exit(1);
}

const gates = {
  G1() {
    const f = "src/components/layout/Navbar.tsx";
    if (!exists(f)) fail(`${f} missing`);
    const t = read(f);
    if (count(t, "routes.contact(lang)") < 1)
      fail("Navbar must link routes.contact(lang)");
    if (!t.includes("mobile-nav") || !t.includes("navItems.map"))
      fail("Navbar must render the shared nav items in the mobile menu");
    console.log("G1 KONTAK NAV OK");
  },
  G2() {
    const f = "src/components/services/ServicesPricing.tsx";
    const page = "src/pages/ServicesPage.tsx";
    if (!exists(f)) fail(`${f} missing`);
    const t = read(f);
    for (const s of ["499", "2.500.000", "buildWhatsAppUrl", "ServicesPricing"]) {
      if (!t.includes(s) && !(s === "ServicesPricing" && read(page).includes(s)))
        fail(`${f} must contain ${s}`);
    }
    if (!t.includes("getServiceMessage") && !t.includes("WhatsApp"))
      fail(`${f} must build WhatsApp links`);
    if (!read(page).includes("ServicesPricing"))
      fail("ServicesPage must render ServicesPricing");
    console.log("G2 PRICING STRIP OK");
  },
  G3() {
    const f = "src/components/sections/ConsultationCTA.tsx";
    if (!exists(f)) fail(`${f} missing`);
    const t = read(f);
    for (const s of ["30 hari", "source code", "30-day"]) {
      if (!t.includes(s)) fail(`${f} must mention ${s}`);
    }
    console.log("G3 TRUST CHECKLIST OK");
  },
  G4() {
    const lib = "src/lib/blog-tags.ts";
    if (!exists(lib)) fail(`${lib} missing`);
    if (!read(lib).includes("formatTagLabel")) fail("helper must export formatTagLabel");
    for (const f of [
      "src/components/blog/BlogListToolbar.tsx",
      "src/components/blog/BlogArticleHero.tsx",
      "src/components/blog/BlogPostCard.tsx",
    ]) {
      if (!exists(f)) fail(`${f} missing`);
      const t = read(f);
      if (!t.includes("formatTagLabel")) fail(`${f} must use formatTagLabel`);
      if (/>[ \t]*\{(tag|t)\}[ \t]*</.test(t))
        fail(`${f} still renders a raw tag slug as element text`);
    }
    console.log("G4 TAG LABELS OK");
  },
  G5() {
    const f = "src/components/portfolio/BusinessValueSection.tsx";
    if (!exists(f)) fail(`${f} missing`);
    if (!read(f).includes("sm:col-span-2"))
      fail(`${f} must balance an odd spec count across the grid`);
    console.log("G5 SPEC GRID OK");
  },
  G6() {
    const f = "src/components/layout/Navbar.tsx";
    const t = read(f);
    if (!t.includes("scrollIntoView")) fail("Navbar must smooth-scroll to #proses");
    if (!t.includes("proses")) fail("Navbar must keep the Proses destination");
    console.log("G6 PROSES SCROLL OK");
  },
  G7() {
    const ui = "src/components/home/work-ui.tsx";
    if (!read(ui).includes("width={width}") || !read(ui).includes("height={height}"))
      fail("ProjectVisual img must carry width and height attributes");
    const trust = "src/components/home/StudioTrust.tsx";
    if (!read(trust).includes("width={800}"))
      fail("StudioTrust founder image must declare width 800");
    const founder = "src/components/about/AboutFounder.tsx";
    if (!read(founder).includes("width={800}"))
      fail("AboutFounder image must declare width 800");
    console.log("G7 IMG DIMS OK");
  },
  G8() {
    const f = "src/components/services/DecisionHelper.tsx";
    const page = "src/pages/ServicesPage.tsx";
    if (!exists(f)) fail(`${f} missing`);
    const t = read(f);
    for (const s of ["buildWhatsAppUrl", "landing-page", "company-profile", "dashboard"]) {
      if (!t.includes(s)) fail(`${f} must contain ${s}`);
    }
    if (!read(page).includes("DecisionHelper"))
      fail("ServicesPage must render DecisionHelper");
    console.log("G8 DECISION HELPER OK");
  },
  G9() {
    const crumb = "src/components/ui/Breadcrumbs.tsx";
    if (!exists(crumb)) fail(`${crumb} missing`);
    if (!read(crumb).includes('aria-label="breadcrumb"'))
      fail("Breadcrumbs must use aria-label breadcrumb");
    for (const f of ["src/pages/PortfolioDetailPage.tsx", "src/pages/DemoDetailPage.tsx"]) {
      if (!read(f).includes("Breadcrumb")) fail(`${f} must render Breadcrumbs`);
    }
    console.log("G9 BREADCRUMBS OK");
  },
  G10() {
    for (const f of [
      "src/components/sections/FAQSection.tsx",
      "src/components/services/ServicesFAQ.tsx",
      "src/components/about/AboutFAQ.tsx",
      "src/components/contact/ContactFAQ.tsx",
    ]) {
      if (!exists(f)) fail(`${f} missing`);
      const t = read(f);
      if (!t.includes("aria-controls")) fail(`${f} accordion buttons need aria-controls`);
      if (!t.includes("faq-panel")) fail(`${f} answer regions need faq-panel ids`);
    }
    console.log("G10 FAQ CONTROLS OK");
  },
};

const id = process.argv[2];
if (!gates[id]) {
  process.stderr.write(`FAIL: unknown gate ${id}\n`);
  process.exit(1);
}
gates[id]();
