import { mkdirSync, writeFileSync } from 'node:fs'

// One line of earned pride: a night janitor, thirty-one years into the same
// 3 a.m. ward, steps back from the floor he has just made gleam and gives it
// the smallest nod. The pride is in the nod, earned by the decades in the
// line itself, never stated outright.
// The entry line: a quiet, earned moment of pride, 1 to 240 characters.
const ENTRY_LINE =
  'After thirty-one years of mopping the same hospital ward at 3 a.m., the night janitor stepped back from the gleaming floor and gave it the smallest nod.'

// The gate requires 1 to 240 characters of non-whitespace text.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 240 || ENTRY_LINE.trim().length === 0) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY_LINE.length}`)
}

const OUTPUT_DIR = '/output'
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`

mkdirSync(OUTPUT_DIR, { recursive: true })
writeFileSync(OUTPUT_PATH, ENTRY_LINE, { encoding: 'utf8', flag: 'w' })
