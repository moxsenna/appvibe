/**
 * Wrap plain string fields in demo data objects as { id: s, en: s } for quick Tier B pass.
 * Run: node scripts/localize-demo-strings.mjs <file.ts>
 * Then manually improve EN strings.
 */
import fs from "fs";
import path from "path";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/localize-demo-strings.mjs <path.ts>");
  process.exit(1);
}

const src = fs.readFileSync(file, "utf8");
if (src.includes("Localized<")) {
  console.log("skip already has Localized");
  process.exit(0);
}

// Only for simple exports - manual review required
console.log("Manual localization required for", file);