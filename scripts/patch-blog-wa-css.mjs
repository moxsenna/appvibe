import fs from "fs";
const p = "src/styles/globals.css";
let s = fs.readFileSync(p, "utf8");
if (s.includes("blog-wa-template")) {
  console.log("css already patched");
  process.exit(0);
}
const block = `  .blog-prose .blog-wa-template {
    @apply my-6 overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white shadow-card;
  }
  .blog-prose .blog-wa-template__bar {
    @apply flex items-center gap-2 border-b border-emerald-100 bg-emerald-50/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-emerald-800;
  }
  .blog-prose .blog-wa-template__dot {
    @apply h-2 w-2 shrink-0 rounded-full bg-emerald-500;
  }
  .blog-prose .blog-wa-template__bubble {
    @apply m-0 px-4 py-4 text-[0.9375rem] leading-relaxed text-slate-700;
  }
`;
s = s.replace(
  "  .blog-prose pre code { @apply bg-transparent p-0 text-inherit; }\n  .blog-prose img {",
  `  .blog-prose pre code { @apply bg-transparent p-0 text-inherit; }\n${block}  .blog-prose img {`,
);
fs.writeFileSync(p, s);
console.log("css patched");