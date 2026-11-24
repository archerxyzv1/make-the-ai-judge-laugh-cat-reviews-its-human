// Make the AI Judge Laugh: Cat Reviews Its Human (Node 22, standard library only): it writes
// exactly one line, a one-star review written by a house cat about the human it lives with, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const REVIEW =
  'One star. She pets my belly, then acts surprised when I bite. The belly was a trap. Everyone knows the belly is a trap.';

if (REVIEW.length < 1 || REVIEW.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${REVIEW.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), REVIEW, 'utf-8');
