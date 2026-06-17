import fs from "fs";

const insertLines = `    searchPlaceholder: "PLACEHOLDER_SEARCH",
    filterAllLabel: "PLACEHOLDER_ALL",
    clearFiltersLabel: "PLACEHOLDER_CLEAR",
    noResults: "PLACEHOLDER_NONE",
    relatedTitle: "PLACEHOLDER_RELATED",
    readTimeMinutes: "PLACEHOLDER_READ",
    resultsCount: "PLACEHOLDER_COUNT",`;

const idVals = {
  PLACEHOLDER_SEARCH: "Cari artikel, topik, atau kata kunci…",
  PLACEHOLDER_ALL: "Semua topik",
  PLACEHOLDER_CLEAR: "Reset filter",
  PLACEHOLDER_NONE:
    "Tidak ada artikel yang cocok. Coba kata kunci atau topik lain.",
  PLACEHOLDER_RELATED: "Artikel terkait",
  PLACEHOLDER_READ: "{n} menit baca",
  PLACEHOLDER_COUNT: "{n} artikel",
};

const enVals = {
  PLACEHOLDER_SEARCH: "Search articles, topics, or keywords…",
  PLACEHOLDER_ALL: "All topics",
  PLACEHOLDER_CLEAR: "Reset filters",
  PLACEHOLDER_NONE: "No articles match. Try another keyword or topic.",
  PLACEHOLDER_RELATED: "Related articles",
  PLACEHOLDER_READ: "{n} min read",
  PLACEHOLDER_COUNT: "{n} articles",
};

function fill(template, vals) {
  let s = insertLines;
  for (const [k, v] of Object.entries(vals)) {
    s = s.replace(k, v);
  }
  return s;
}

function patchFile(path, vals) {
  let s = fs.readFileSync(path, "utf8");
  if (s.includes("searchPlaceholder")) return;
  s = s.replace(
    /readArticle: "[^"]+",\n(\s*)articleCta:/,
    `readArticle: "${path.includes("/en/") ? "Read article" : "Baca artikel"}",\n${fill(insertLines, vals)}\n$1articleCta:`,
  );
  fs.writeFileSync(path, s);
}

patchFile("src/i18n/locales/id/pages.ts", idVals);
patchFile("src/i18n/locales/en/pages.ts", enVals);

let t = fs.readFileSync("src/i18n/locales/id/pages.ts", "utf8");
if (!t.includes("searchPlaceholder: string")) {
  t = t.replace(
    /readArticle: string;\n    articleCta: \{ title: string; subtitle: string \};/,
    `readArticle: string;
    searchPlaceholder: string;
    filterAllLabel: string;
    clearFiltersLabel: string;
    noResults: string;
    relatedTitle: string;
    readTimeMinutes: string;
    resultsCount: string;
    articleCta: { title: string; subtitle: string };`,
  );
  fs.writeFileSync("src/i18n/locales/id/pages.ts", t);
}
console.log("ok");