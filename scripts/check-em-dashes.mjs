// House style: no em dashes anywhere on the site.
//
// Runs automatically after every `npm run build` (the "postbuild" script), so a
// deploy never ships an em dash. It scans:
//   - src/ and public/   so the error points at the exact file and line you wrote
//   - dist/              to catch anything the build adds
//
// Instead of an em dash, use a comma, colon, period, or parentheses.
// En dashes in ranges ("20–30 minutes") are fine and are not flagged.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const PATTERN = /\u2014|&mdash;|&#8212;|&#x2014;|\\u2014/gi;
const TEXT_EXT = new Set(['.md', '.ts', '.tsx', '.js', '.mjs', '.json', '.svg', '.html', '.xml', '.txt', '.css']);
const SKIP_DIRS = new Set(['node_modules', '.git']);

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (TEXT_EXT.has(extname(p).toLowerCase())) yield p;
  }
}

const hits = [];
for (const root of ['src', 'public', 'dist']) {
  for (const file of walk(root)) {
    readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
      if (PATTERN.test(line)) {
        const at = line.search(PATTERN);
        const snippet = line.slice(Math.max(0, at - 40), at + 40).trim();
        hits.push(`  ${file}:${i + 1}  ...${snippet}...`);
      }
      PATTERN.lastIndex = 0;
    });
  }
}

if (hits.length) {
  console.error(`\nEm dash check FAILED: ${hits.length} found. House style is no em dashes.`);
  console.error('Replace each with a comma, colon, period, or parentheses:\n');
  console.error(hits.join('\n'));
  process.exit(1);
}
console.log('Em dash check passed: none found in src/, public/, or dist/.');
