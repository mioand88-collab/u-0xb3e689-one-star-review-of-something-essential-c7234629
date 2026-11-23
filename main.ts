import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review of an everyday essential: the sun.
// Revised: tightened the wording and added a closing turn so the sting
// arrives in the last few words, after the complaint is read straight.
const line =
  "One star. The sun turns up uninvited every morning, stays all day, and bills me for the sunscreen it makes necessary. Still no apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
