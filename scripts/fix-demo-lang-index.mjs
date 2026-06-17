/**
 * Add [lang] to common Localized field access in demo components.
 * Run after Tier B data migration when consumers still render objects.
 */
import fs from "fs";
import path from "path";
import { globSync } from "glob";

const ROOT = path.resolve("src/components/demos");
const PAGES = path.resolve("src/pages/demos");

const FIELD_PROPS = [
  "title",
  "impact",
  "description",
  "label",
  "value",
  "body",
  "quote",
  "name",
  "role",
  "company",
  "industry",
  "scope",
  "challenge",
  "approach",
  "outcome",
  "question",
  "answer",
  "summary",
  "detail",
  "tagline",
  "oneLiner",
  "headline",
  "subtitle",
  "text",
  "placeholder",
  "hint",
  "option",
  "benefit",
  "topic",
  "time",
  "speaker",
  "bio",
  "expertise",
  "location",
  "price",
  "type",
  "status",
  "message",
  "note",
  "cta",
  "content",
  "step",
  "items",
  "tags",
  "highlights",
  "deliverables",
  "includes",
  "features",
  "problem",
  "solution",
];

function ensureUseLang(src) {
  if (src.includes("useLang")) return src;
  if (!src.includes("export function")) return src;
  let out = src;
  if (!out.includes('from "@/i18n/use-lang"')) {
    out = out.replace(
      /(import .+ from "lucide-react";)\n/,
      '$1\nimport { useLang } from "@/i18n/use-lang";\n',
    );
    if (!out.includes('from "@/i18n/use-lang"')) {
      out = out.replace(
        /(import .+ from "@\/components\/ui\/Container";)\n/,
        '$1\nimport { useLang } from "@/i18n/use-lang";\n',
      );
    }
  }
  out = out.replace(
    /export function (\w+)\(\) \{\n/,
    "export function $1() {\n  const { lang } = useLang();\n",
  );
  return out;
}

function indexLocalizedAccess(src) {
  let out = src;
  for (const prop of FIELD_PROPS) {
    // obj.prop in JSX or expressions but not already [lang]
    const re = new RegExp(
      `([a-zA-Z_$][\\w$]*|cs|pain|stat|m|f|field|item|s|sp|bonus|benefit|faq|t|speaker|listing|opt)\\.${prop}(?!\\[lang\\])(?!\\.)`,
      "g",
    );
    out = out.replace(re, `$1.${prop}[lang]`);
  }
  // .map on localized arrays: features[lang].map, items[lang].map
  out = out.replace(
    /\.(features|items|tags|highlights|deliverables|includes|metrics|options|steps|bullets|painPoints|trustStats|businessValues|speakers|benefits|bonuses|agenda|testimonials|faqs|listings|processSteps)(?!\.)(?!\.map)/g,
    (m, p) => {
      if (out.includes(`${p}[lang]`)) return m;
      return `${p}[lang]`;
    },
  );
  return out;
}

const files = [
  ...globSync(`${ROOT}/**/*.tsx`),
  ...globSync(`${PAGES}/*.tsx`),
];

let changed = 0;
for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const before = src;
  if (
    !src.includes("@/data/demos") &&
    !file.includes("CompanyProfile") &&
    !file.includes("Webinar") &&
    !file.includes("Properti") &&
    !file.includes("Klinik") &&
    !file.includes("LeadDashboard")
  ) {
    continue;
  }
  src = ensureUseLang(src);
  if (src.includes("const { lang }")) {
    src = indexLocalizedAccess(src);
  }
  if (src !== before) {
    fs.writeFileSync(file, src);
    changed++;
    console.log("patched", path.relative(process.cwd(), file));
  }
}
console.log("done", changed);