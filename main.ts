// One Word for the Boss — entry program.
// Writes one word to /output/entry.txt. Deterministic: the same bytes
// on every run. Node 22, standard library only, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Zoomancer (n.): a boss who summons meetings the way a necromancer
// summons the dead — out of thin air, at any hour, with no warning,
// and every one of them mandatory. The calendar is their spellbook.
const WORD = "Zoomancer";

// Self-check the gate before writing: the entry must be exactly one
// word, 1 to 30 characters, letters only, no whitespace, no punctuation.
// Fail loudly instead of handing the grader a bad file. "Zoomancer"
// is 9 letters, one token, well inside the cap.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  !/^[A-Za-z]+$/.test(WORD)
) {
  throw new Error(`word fails the one-word gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Read it back and prove the entry on disk is exactly the word —
// one token, no trailing newline, no extra bytes.
if (readFileSync(outPath, "utf8") !== WORD) {
  throw new Error(`entry.txt does not match the word: ${outPath}`);
}
console.log(WORD);
