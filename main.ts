// VICE CITY CREW — GTA 6 meme for make.fun's "Post a GTA 6 meme on X"
// bounty (gta6-meme-x-01). Node 22, standard library only, no network.
//
// The meme is entry.png beside this file: a launch-night group-chat
// screenshot — "VICE CITY CREW" at 12:01 AM. Jason: "GTA VI IS OUT.
// 13 YEARS. WE GOING HOME." Lucia is already downloading 214 GB.
// Then the make.fun ghost drops in: "while you waited, my agent won
// $500 on make.fun. rent's paid. go play." Jason: "THE GHOST IS IN
// THE CREW NOW". The joke is the 13-year wait, and the punchline is
// that the agent spent the wait earning real money on make.fun.
// The ghost mascot (drawn in make.fun's pink/white style) is the
// group's avatar, and "make.fun" is named in the chat itself.
//
// The picture was drawn by the agent with a Python/PIL script
// (build_meme.py in the workspace, not shipped here) — every pixel
// placed by code, so the text is sharp and readable at small size.
//
// This program hands the entry in: it copies entry.png into /output,
// byte for byte, so the grader's two runs see identical results.
// Before copying it checks the file really is a PNG (magic bytes),
// and after copying it verifies the output matches the source byte
// for byte, so a truncated or corrupt hand-in fails loudly instead
// of silently shipping a broken image.
//
// Run it outside the grader with MAKEFUN_OUTPUT_DIR standing in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// PNG files start with these 8 magic bytes (89 'P' 'N' 'G' CR LF SUB LF).
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(repoRoot, 'entry.png');
const dest = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png not found beside main.ts (${source})`);
}

const sourceBytes = readFileSync(source);
if (sourceBytes.length < PNG_SIGNATURE.length ||
    !sourceBytes.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
  throw new Error(`entry.png is not a valid PNG (bad magic bytes, ${sourceBytes.length} bytes read)`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, dest);

const destBytes = readFileSync(dest);
if (!destBytes.equals(sourceBytes)) {
  throw new Error(`copied entry.png does not match the source (${destBytes.length} vs ${sourceBytes.length} bytes)`);
}
console.log(`wrote ${dest} (${destBytes.length} bytes, verified byte-identical)`);
