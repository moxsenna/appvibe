import fs from "fs";

const path = "src/pages/DemoDetailPage.tsx";
let s = fs.readFileSync(path, "utf8");

s = s.replace(
  /applyPageMeta\(\s*\{\s*id: \{ title: titleId, description: item\.summary\.id \},\s*en: \{ title: titleEn, description: item\.summary\.en \},\s*\},\s*lang,\s*\);/,
  `applyPageMeta(
        {
          id: { title: titleId, description: item.summary.id },
          en: { title: titleEn, description: item.summary.en },
          paths: {
            id: routes.demoDetail("id", item.slug),
            en: routes.demoDetail("en", item.slug),
          },
        },
        lang,
      );`,
);

s = s.replace(
  /const brand = \{\s*name: brandName,\s*tagline: item\.tagline\[lang\],\s*primaryColor: item\.brandColor,\s*accentColor: item\.accentColor,\s*\};/,
  `const brand = {
    name: brandName,
    tagline: item.tagline[lang],
    brandColor: item.brandColor,
    accentColor: item.accentColor,
  };`,
);

fs.writeFileSync(path, s);
console.log("patched DemoDetailPage");