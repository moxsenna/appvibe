import fs from "fs";

// --- pages id: blog + uses + type ---
const idPath = "src/i18n/locales/id/pages.ts";
let id = fs.readFileSync(idPath, "utf8");

const blogBlock = `  blog: {
    hero: {
      eyebrow: "Engineering",
      title: "Catatan teknis dari tim AppVibe",
      description:
        "Keputusan arsitektur, sprint, dan pola yang kami pakai saat membangun situs ini — transparan untuk calon klien dan developer.",
    },
    meta: {
      title: "Blog Engineering | AppVibe Studio",
      description:
        "Artikel teknis tentang React, Vite, i18n, deploy, dan cara kerja AppVibe Studio.",
    },
    empty: "Belum ada artikel dalam bahasa ini.",
    backToIndex: "Kembali ke blog",
  },

`;

if (!id.includes("blog: {")) {
  id = id.replace(/\n  uses: \{/, `\n${blogBlock}  uses: {`);
}

id = id.replace(
  /next: "Next: Better Auth",/,
  'next: "Next: Engineering blog",',
);
id = id.replace(
  /Sprint 12 akan integrate Better Auth untuk private tenant\. Sprint 13 akan launch engineering blog dengan MDX \+ Shiki syntax highlight\./,
  "Sprint 13 menambah blog engineering (MDX + Shiki di build). Sprint 12 (Better Auth + tenant privat) ditunda — hanya jika produk butuh login klien.",
);
id = id.replace(/lastUpdated: "Last updated: Sprint 11"/, 'lastUpdated: "Last updated: Sprint 13"');

if (!id.includes("blog: {") || !id.match(/pagesId[\s\S]*blog: \{\s*hero/)) {
  // already inserted above
}

if (!id.includes("blog: {\n    hero: LocalizedHero")) {
  id = id.replace(
    /(  uses: \{\s*hero: LocalizedHero;\s*meta: LocalizedPageMeta;)/,
    `  blog: {
    hero: LocalizedHero;
    meta: LocalizedPageMeta;
    empty: string;
    backToIndex: string;
  };
  $1`,
  );
}

fs.writeFileSync(idPath, id);

// --- pages en ---
const enPath = "src/i18n/locales/en/pages.ts";
let en = fs.readFileSync(enPath, "utf8");
const blogEn = `  blog: {
    hero: {
      eyebrow: "Engineering",
      title: "Technical notes from the AppVibe team",
      description:
        "Architecture choices, sprints, and patterns we use to build this site — transparent for prospects and developers.",
    },
    meta: {
      title: "Engineering Blog | AppVibe Studio",
      description:
        "Technical posts on React, Vite, i18n, deployment, and how AppVibe Studio works.",
    },
    empty: "No posts in this language yet.",
    backToIndex: "Back to blog",
  },

`;

if (!en.includes("blog: {")) {
  en = en.replace(/\n  uses: \{/, `\n${blogEn}  uses: {`);
}
en = en.replace(/next: "Next: Better Auth",/, 'next: "Next: Engineering blog",');
en = en.replace(
  /Sprint 12 will integrate Better Auth for private tenants\. Sprint 13 will launch the engineering blog with MDX and Shiki syntax highlighting\./,
  "Sprint 13 adds the engineering blog (MDX + Shiki at build time). Sprint 12 (Better Auth + private tenants) is deferred until we need real client login.",
);
en = en.replace(/lastUpdated: "Last updated: Sprint 11"/, 'lastUpdated: "Last updated: Sprint 13"');

fs.writeFileSync(enPath, en);

// --- common nav ---
for (const [p, idLabel, enLabel] of [
  ["src/i18n/locales/id/common.ts", "Blog", null],
]) {
  let c = fs.readFileSync(p, "utf8");
  if (!c.includes("blog:")) {
    c = c.replace(
      /about: "Tentang",\n/,
      'about: "Tentang",\n    blog: "Blog",\n',
    );
    fs.writeFileSync(p, c);
  }
}
let enC = fs.readFileSync("src/i18n/locales/en/common.ts", "utf8");
if (!enC.includes("blog:")) {
  enC = enC.replace(/about: "About",\n/, 'about: "About",\n    blog: "Blog",\n');
  fs.writeFileSync("src/i18n/locales/en/common.ts", enC);
}
let idC = fs.readFileSync("src/i18n/locales/id/common.ts", "utf8");
if (!idC.match(/nav:[\s\S]*blog:/)) {
  idC = idC.replace(/about: "Tentang",/, 'about: "Tentang",\n    blog: "Blog",');
  fs.writeFileSync("src/i18n/locales/id/common.ts", idC);
}

// --- routes ---
let routes = fs.readFileSync("src/lib/routes.ts", "utf8");
if (!routes.includes("blog:")) {
  routes = routes.replace(
    'uses: "/uses",\n  },\n  en:',
    'uses: "/uses",\n    blog: "/blog",\n  },\n  en:',
  );
  routes = routes.replace(
    'uses: "/en/uses",\n  },',
    'uses: "/en/uses",\n    blog: "/en/blog",\n  },',
  );
  routes = routes.replace(
    "uses: (lang: Lang) => PATHS[lang].uses,\n",
    "uses: (lang: Lang) => PATHS[lang].uses,\n  blog: (lang: Lang) => PATHS[lang].blog,\n  blogPost: (lang: Lang, slug: string) => `${PATHS[lang].blog}/${slug}`,\n",
  );
  routes = routes.replace(
    '| { lang: Lang; key: "portfolioDetail" | "demoDetail"; slug: string }',
    '| { lang: Lang; key: "portfolioDetail" | "demoDetail" | "blogPost"; slug: string }',
  );
  routes = routes.replace(
    `  const demoPrefix = \`\${paths.demo}/\`;\n  if (clean.startsWith(demoPrefix)) {\n    const slug = clean.slice(demoPrefix.length);\n    if (slug && !slug.includes("/")) {\n      return { lang, key: "demoDetail", slug };\n    }\n  }\n\n  return null;`,
    `  const demoPrefix = \`\${paths.demo}/\`;\n  if (clean.startsWith(demoPrefix)) {\n    const slug = clean.slice(demoPrefix.length);\n    if (slug && !slug.includes("/")) {\n      return { lang, key: "demoDetail", slug };\n    }\n  }\n\n  const blogPrefix = \`\${paths.blog}/\`;\n  if (clean.startsWith(blogPrefix)) {\n    const slug = clean.slice(blogPrefix.length);\n    if (slug && !slug.includes("/")) {\n      return { lang, key: "blogPost", slug };\n    }\n  }\n  if (clean === paths.blog) return { lang, key: "blog" };\n\n  return null;`,
  );
  routes = routes.replace(
    `  if (resolved.key === "portfolioDetail" || resolved.key === "demoDetail") {`,
    `  if (resolved.key === "portfolioDetail" || resolved.key === "demoDetail" || resolved.key === "blogPost") {`,
  );
  fs.writeFileSync("src/lib/routes.ts", routes);
}

// --- UsesPage Better Auth ---
let uses = fs.readFileSync("src/pages/UsesPage.tsx", "utf8");
uses = uses.replace(
  `        name: "Better Auth (planned)",
        noteId: "Untuk Sprint 12 — login real + tenant pribadi. Pilihan modern di atas NextAuth.",
        noteEn: "Sprint 12 work — real login + private tenants. A modern alternative to NextAuth.",`,
  `        name: "Better Auth (deferred)",
        noteId: "Opsional — hanya jika AppVibe jadi produk dengan login klien & tenant privat. Bukan kebutuhan situs marketing saat ini.",
        noteEn: "Optional — only if AppVibe becomes a product with client login and private tenants. Not required for the marketing site today.",`,
);
fs.writeFileSync("src/pages/UsesPage.tsx", uses);

// --- use-page-meta exclude blog from wrong cast - blog has meta ok for usePageMeta if we add - BlogIndex uses manual applyPageMeta

// --- deferred-items ---
const def = "docs/deferred-items.md";
let d = fs.readFileSync(def, "utf8");
if (!d.includes("Sprint 12 — Better Auth")) {
  d =
    `## Deferred — Sprint 12 (Better Auth)

Login sungguhan + multi-tenant privat untuk dashboard leads **bukan** kebutuhan deploy situs agency saat ini. Demo lead dashboard tetap mock auth + Supabase showcase opsional.

**Trigger untuk mulai:** komitmen produk (klien login ke data mereka sendiri).

---

` + d;
  fs.writeFileSync(def, d);
}

// --- README sprint line ---
let readme = fs.readFileSync("README.md", "utf8");
readme = readme.replace(
  "| Sprint 12 — Better Auth (planned) | 🔻 |",
  "| Sprint 12 — Better Auth (deferred) | 🔻 optional |",
);
readme = readme.replace(
  "| Sprint 13 — Engineering blog MDX (planned) | 🔻 |",
  "| Sprint 13 — Engineering blog (MDX + Shiki build) | ✅ |",
);
fs.writeFileSync("README.md", readme);

console.log("patched sprint 12/13");