import fs from "fs";

const idPath = "src/i18n/locales/id/pages.ts";
let id = fs.readFileSync(idPath, "utf8");

const homeTypePatch = `    servicesSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    faq: { eyebrow: string; title: string; subtitle: string };
    process: { eyebrow: string; title: string; subtitle: string };
    featuredPortfolio: {`;

if (!id.includes("faq: { eyebrow: string")) {
  id = id.replace(
    /    servicesSection: \{\n      eyebrow: string;\n      title: string;\n      subtitle: string;\n    \};\n    featuredPortfolio: \{/,
    homeTypePatch,
  );
}

if (!id.includes('approach: {\n      eyebrow: "Pendekatan"')) {
  id = id.replace(
    `  about: {
    meta: {
      title: "Tentang AppVibe Studio`,
    `  about: {
    approach: {
      eyebrow: "Pendekatan",
      title: "Bisnis dulu, teknologi mengikuti",
      subtitle:
        "Kami mulai dari masalah operasional dan positioning, baru memilih bentuk website atau sistem yang paling masuk akal.",
    },
    meta: {
      title: "Tentang AppVibe Studio`,
  );
}

fs.writeFileSync(idPath, id);

const enPath = "src/i18n/locales/en/pages.ts";
let en = fs.readFileSync(enPath, "utf8");

const enHomeInsert = `    faq: {
      eyebrow: "FAQ",
      title: "Questions we hear often",
      subtitle: "Short answers before you start a conversation with us.",
    },
    process: {
      eyebrow: "How We Work",
      title: "Six clear steps from discovery to launch",
      subtitle: "A transparent process — you know what happens at every stage.",
    },
    featuredPortfolio: {
      eyebrow: "Portfolio",
      title: "Reference websites and digital systems we can build for your business",
      subtitle:
        "From company profiles and landing pages to clinic sites, property listings, and lead dashboards — each example shows how your business can look clearer, more credible, and easier to reach.",
      badges: [
        "Company profile",
        "Landing page",
        "Booking CTA",
        "Property listing",
        "Leads dashboard",
      ],
      viewAll: "View full portfolio",
    },
`;

if (!en.includes("featuredPortfolio:")) {
  en = en.replace(
    /    servicesSection: \{[\s\S]*?    \},\n    meta: \{/,
    (m) => m.replace("    meta: {", `${enHomeInsert}    meta: {`),
  );
}

if (!en.includes('approach: {\n      eyebrow: "Approach"')) {
  en = en.replace(
    `  about: {
    meta: {
      title: "About AppVibe Studio`,
    `  about: {
    approach: {
      eyebrow: "Approach",
      title: "Business first, technology follows",
      subtitle:
        "We start from operational pain and positioning, then choose the website or system shape that actually fits.",
    },
    meta: {
      title: "About AppVibe Studio`,
  );
}

fs.writeFileSync(enPath, en);
console.log("dict fixed");