/**
 * One-off: wrap portfolio.ts string fields into Localized<T> (EN mirrors ID until refined).
 * Run: node scripts/migrate-portfolio-localized.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const portfolioPath = path.join(root, "src/data/portfolio.ts");

const EN_OVERRIDES = {
  "Website Company Profile untuk Jasa Profesional":
    "Company Profile Website for Professional Services",
  "Landing Page Webinar dan Campaign": "Webinar and Campaign Landing Page",
  "Website Klinik, Kecantikan, dan Layanan Kesehatan":
    "Clinic, Aesthetics, and Healthcare Services Website",
  "Website Properti, Konstruksi, dan Interior":
    "Property, Construction, and Interior Website",
  "Dashboard Lead Management untuk Tim Sales":
    "Lead Management Dashboard for Sales Teams",
  Klinik: "Clinic",
  Properti: "Property",
};

function enFor(idText) {
  return EN_OVERRIDES[idText] ?? idText;
}

function wrapScalar(key, value) {
  if (typeof value !== "string") return value;
  if (["id", "slug", "category", "thumbnail", "demoPath", "caseStudyPath", "image"].includes(key))
    return value;
  return { id: value, en: enFor(value) };
}

function wrapArray(value) {
  if (!Array.isArray(value)) return value;
  return { id: value, en: value.map((s) => enFor(s)) };
}

function localizeItem(item) {
  const out = { ...item };
  for (const key of [
    "title",
    "categoryLabel",
    "niche",
    "summary",
    "businessProblem",
    "solution",
  ]) {
    if (typeof out[key] === "string") out[key] = wrapScalar(key, out[key]);
  }
  for (const key of [
    "businessValue",
    "features",
    "tags",
    "mockDataHighlights",
    "userFlow",
  ]) {
    if (Array.isArray(out[key])) out[key] = wrapArray(out[key]);
  }
  if (Array.isArray(out.screens)) {
    out.screens = out.screens.map((screen) => ({
      ...screen,
      title:
        typeof screen.title === "string"
          ? { id: screen.title, en: enFor(screen.title) }
          : screen.title,
      description:
        typeof screen.description === "string"
          ? { id: screen.description, en: enFor(screen.description) }
          : screen.description,
    }));
  }
  return out;
}

// Evaluate portfolio data from TS file (strip types, export const)
let src = fs.readFileSync(portfolioPath, "utf8");
const match = src.match(/export const portfolioItems[^=]*=\s*(\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not parse portfolioItems array");
  process.exit(1);
}

// eslint-disable-next-line no-eval
const rawItems = eval(match[1]);
const localized = rawItems.map(localizeItem);

const header = `import type { PortfolioItem } from "@/types/portfolio";
import { same } from "@/i18n/localized";

export const portfolioItems: PortfolioItem[] = `;

const body = JSON.stringify(localized, null, 2)
  .replace(/"Company Profile"/g, "...") // fix - use same() for tags in post-process
  ;

// JSON loses Lucide etc - screens only strings, good.

// Fix categoryLabel that should use same for English product terms
function stringifyItem(item) {
  return JSON.stringify(item, null, 2);
}

let output = header + JSON.stringify(localized, null, 2) + ";\n";

// Restore same() for identical EN tags where id===en in arrays - optional later
fs.writeFileSync(portfolioPath, output);
console.log("Wrote localized portfolio.ts with", localized.length, "items");