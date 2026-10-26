// Typesetting for running text, done at render time so the prerendered HTML
// and the hydrated page match exactly.
//
// House rules: no lone straggler word at the end of a block, and no sentence
// that starts in the last word or two of a line or ends in the first word or
// two of the next. CSS text-wrap only guards the last line (and Firefox ignores
// it), so words are joined with no-break spaces:
//   - the last words of every block, enough of them (minTail characters) that
//     the last line is never a stub
//   - the three words either side of each sentence break, so a line breaks
//     exactly at the boundary or at least three words away from it
// Place names, the phone number and hyphenated words are wrapped in nowrap
// spans everywhere, headings included. That outranks line fill and balance.
import { Fragment, type ReactNode } from 'react';

const NBSP = '\u00a0';
// Joined runs have to fit the narrowest column the text appears in: about 36
// characters per line for body text on a phone, about 24 in a four-up card.
const WIDE = { maxRun: 34, minTail: 20 };
const NARROW = { maxRun: 22, minTail: 12 };

// Longest first, so "Mission District" wins over shorter overlaps.
const NAMES = [
  'Consumer Auto Body',
  'California Insurance Code',
  'San Francisco',
  'Mission District',
  'Valencia Street',
  'Bay Area',
  'Noe Valley',
  'Bernal Heights',
  'BBB A+',
];

const space = '[ \\u00a0]';
const KEEP = new RegExp(
  [
    ...NAMES.map((n) => n.replace(/[+]/g, '\\+').replace(/ /g, space)),
    `\\(\\d{3}\\)${space}\\d{3}-\\d{4}`,
    `\\b\\d{1,2}:\\d{2}${space}[AP]M\\b`,
    `\\bsection${space}\\d+(?:\\.\\d+)?`,
    // Hyphenated words: browsers also break after a hyphen.
    `[^\\s\\u00a0]*[A-Za-z0-9][-\\u2013][A-Za-z0-9][^\\s\\u00a0]*`,
  ].join('|'),
  'g',
);

const ENDS = /[A-Za-z0-9)'"\u2019\u201d][.?!]["')\u201d]?$/;
const STARTS = /^["(\u201c]?[A-Z0-9]/;

function joinWords(text: string, { maxRun, minTail }: typeof WIDE): string {
  const words = text.split(' ');
  const n = words.length;
  if (n < 3) return words.join(NBSP);
  const join = new Array(n - 1).fill(false);
  const boundary = words.slice(0, -1).map((w, i) => ENDS.test(w) && STARTS.test(words[i + 1]));
  boundary.forEach((b, i) => {
    if (!b) return;
    for (const k of [i - 2, i - 1, i + 1, i + 2]) {
      if (k >= 0 && k < n - 1 && !boundary[k]) join[k] = true;
    }
  });
  // Keep enough of the last sentence together that the last line isn't a stub.
  let tail = words[n - 1].length;
  for (let k = n - 2; k >= 0 && !boundary[k] && (k === n - 2 || tail < minTail); k--) {
    join[k] = true;
    tail += 1 + words[k].length;
  }
  // Split any joined run too long for the column at its middle, but never
  // between the last two words, which would leave a lone word.
  for (let a = 0; a < n; ) {
    let b = a;
    while (b < n - 1 && join[b]) b++;
    const len = words.slice(a, b + 1).join(' ').length;
    let mid = Math.floor((a + b - 1) / 2);
    if (mid === n - 2) mid = b - a > 1 ? mid - 1 : -1;
    if (b > a && len > maxRun && mid >= a) join[mid] = false;
    else a = b + 1;
  }
  return words.reduce((s, w, i) => (i === 0 ? w : s + (join[i - 1] ? NBSP : ' ') + w), '');
}

function keepTogether(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(KEEP)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    out.push(
      <span key={at} className="whitespace-nowrap">
        {m[0]}
      </span>,
    );
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/**
 * Running text: paragraphs, list items, answers. **Double asterisks** mark bold.
 * Use `narrow` for text in small cards.
 */
export function T({ children, narrow = false }: { children: string; narrow?: boolean }) {
  return (
    <>
      {joinWords(children, narrow ? NARROW : WIDE)
        .split('**')
        .map((part, i) => (
          <Fragment key={i}>{i % 2 ? <strong>{keepTogether(part)}</strong> : keepTogether(part)}</Fragment>
        ))}
    </>
  );
}

/** Headings and labels: keep names together, leave line fill to text-wrap: balance. */
export function H({ children }: { children: string }) {
  return <>{keepTogether(children)}</>;
}
