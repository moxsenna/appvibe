import fs from "fs";
const p = "src/i18n/locales/id/pages.ts";
let s = fs.readFileSync(p, "utf8");
s = s.replace(
  /  blog: \{\n    hero: LocalizedHero;\n    meta: LocalizedPageMeta;\n    empty: string;\n    backToIndex: string;\n  \};\n    uses: \{/,
  `  blog: {
    hero: LocalizedHero;
    meta: LocalizedPageMeta;
    empty: string;
    backToIndex: string;
  };
  uses: {`,
);
fs.writeFileSync(p, s);
console.log("fixed indent");