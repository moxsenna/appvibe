import fs from "fs";
import { pick } from "../src/i18n/localized.ts"; // won't work in node - inline logic

const path = "src/components/portfolio/visuals/ClinicPreview.tsx";
let s = fs.readFileSync(path, "utf8");

if (!s.includes("useLang")) {
  s = s.replace(
    'import { cn } from "@/lib/cn";',
    `import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";`,
  );
  s = s.replace(
    "export function ClinicPreview({ variant, className }: ClinicPreviewProps) {\n  return (",
    `export function ClinicPreview({ variant, className }: ClinicPreviewProps) {
  const { lang } = useLang();
  return (`,
  );
  // Pass lang via React context is heavy — use closure by wrapping inner functions... 
  // Simpler: default preview to Indonesian portfolio context — use pick(x, lang) in JSX via global replace
}

// Replace clinic field access patterns - heuristic for Localized fields
const localizedFields = [
  ["NATURACARE_CLINIC.name", "pick(NATURACARE_CLINIC.name, lang)"],
  ["NATURACARE_CLINIC.tagline", "pick(NATURACARE_CLINIC.tagline, lang)"],
  ["NATURACARE_CLINIC.address", "pick(NATURACARE_CLINIC.address, lang)"],
  ["NATURACARE_CLINIC.phone", "pick(NATURACARE_CLINIC.phone, lang)"],
  ["NATURACARE_CLINIC.email", "pick(NATURACARE_CLINIC.email, lang)"],
  ["NATURACARE_CLINIC.adminHours", "pick(NATURACARE_CLINIC.adminHours, lang)"],
  ["NATURACARE_CLINIC.demoDisclaimer", "pick(NATURACARE_CLINIC.demoDisclaimer, lang)"],
];

for (const [from, to] of localizedFields) {
  s = s.split(`{${from}}`).join(`{${to}}`);
  s = s.split(`${from}.slice`).join(`${to}.slice`);
}

const serviceFields = ["name", "description", "duration", "note"];
for (const f of serviceFields) {
  s = s.replaceAll(`{service.${f}}`, `{pick(service.${f}, lang)}`);
  s = s.replaceAll(`{FEATURED_SERVICE.${f}}`, `{pick(FEATURED_SERVICE.${f}, lang)}`);
}

const expertFields = ["name", "role", "focus", "schedule"];
for (const f of expertFields) {
  s = s.replaceAll(`{expert.${f}}`, `{pick(expert.${f}, lang)}`);
}

for (const f of ["day", "services", "hours"]) {
  s = s.replaceAll(`{slot.${f}}`, `{pick(slot.${f}, lang)}`);
  s = s.replaceAll(`{todaySlot.${f}}`, `{pick(todaySlot.${f}, lang)}`);
}

for (const f of ["question", "answer"]) {
  s = s.replaceAll(`{item.${f}}`, `{pick(item.${f}, lang)}`);
  s = s.replaceAll(`key={item.${f}}`, `key={pick(item.${f}, lang)}`);
}

for (const f of ["scenario", "quote"]) {
  s = s.replaceAll(`{t.${f}}`, `{pick(t.${f}, lang)}`);
  s = s.replaceAll(`key={t.${f}}`, `key={pick(t.scenario, lang)}`);
  s = s.replaceAll(`pick(t.quote, lang).slice`, `pick(t.quote, lang).slice`);
}

// Inner functions need lang in scope - hoist lang to module by making subcomponents take lang prop
// Quick fix: read lang inside each function via useLang() in each child
const fns = [
  "ClinicNavbar",
  "ClinicHeroMockup",
  "ClinicServiceCard",
  "ClinicServicesOverview",
  "ClinicServiceDetail",
  "ClinicExpertCard",
  "ClinicExpertsGrid",
  "ClinicScheduleCard",
  "ClinicFAQ",
  "ClinicContactCTA",
];

for (const fn of fns) {
  const re = new RegExp(`function ${fn}\\([^)]*\\) \\{\\n`, "g");
  s = s.replace(re, (m) => {
    if (m.includes("useLang")) return m;
    return m + "  const { lang } = useLang();\n";
  });
}

fs.writeFileSync(path, s);
console.log("ClinicPreview patched");