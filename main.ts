import { mkdirSync, writeFileSync } from 'node:fs'

// One line of earned pride: a night janitor, thirty-one years into the same
// 3 a.m. ward, steps back from the floor he has just made gleam and gives it
// the smallest nod. The pride is in the nod, earned by the decades in the
// line itself, never stated outright.
const entry =
  'After thirty-one years of mopping the same hospital ward at 3 a.m., the night janitor stepped back from the gleaming floor and gave it the smallest nod.'

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', entry, 'utf8')
