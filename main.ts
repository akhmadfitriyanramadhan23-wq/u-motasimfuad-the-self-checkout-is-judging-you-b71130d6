// Self-checkout machine, judging a shopper who bought twelve yoghurts
// and nothing else. One line, machine-voice, rule -> literal violation ->
// flat consequence. No padding, no explanation at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Twelve yoghurts. Zero spoons, zero meals, zero plan. I have filed this under cry for help, applied the bulk discount, and sent a human to check on you.";

// Gate: the entry must be 1-200 characters, not only whitespace.
const MAX_CHARS = 200;
const len = [...ENTRY].length;
if (len < 1 || len > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${len} is outside the 1-${MAX_CHARS} gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${len} chars`);
