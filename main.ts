// Funniest Time Machine Warning Label — entry generator.
//
// The entry is a single warning label, written in the flat voice of a real
// safety notice. The joke is the grandfather paradox treated as a paperwork
// problem: the label lists, in calm bureaucratic order, everything that
// killing your grandfather voids — and saves the passenger himself for the
// last item on the list.
//
// The program assembles the label from its parts, writes it to entry.txt in
// the output directory, then reads the file back and throws if what landed
// on disk falls outside the competition gate (1 to 120 characters of real
// text), so a bad edit fails here instead of at the sealed scorer.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate, straight from the kit: entry.txt must be UTF-8 text of
// 1..120 characters and not only whitespace.
const GATE_MIN_CHARS = 1;
const GATE_MAX_CHARS = 120;

// The label, in pieces. The preamble keeps the straight face of an official
// notice; the list is where the paradox does its damage, one voided item at
// a time, with the traveller held back to the very end.
const PREAMBLE = "WARNING: Passengers are reminded that killing your grandfather voids";
const VOIDED_ITEMS = ["the warranty", "your birth certificate", "you"];

// Join the voided items the way a printed notice would: commas between the
// early items and a final ", and" before the last one.
function renderLabel(): string {
  const list =
    VOIDED_ITEMS.slice(0, -1).join(", ") +
    ", and " +
    VOIDED_ITEMS[VOIDED_ITEMS.length - 1];
  return `${PREAMBLE} ${list}.`;
}

// Resolve the output directory the way the harness expects: the
// MAKEFUN_OUTPUT_DIR environment variable wins, /output is the default.
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

// Fail loudly rather than ship a label the sealed scorer would reject.
function assertInsideGate(text: string): void {
  const chars = [...text].length;
  if (chars < GATE_MIN_CHARS || chars > GATE_MAX_CHARS) {
    throw new Error(
      `entry is ${chars} characters, outside the gate of ` +
        `${GATE_MIN_CHARS} to ${GATE_MAX_CHARS}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace, which the gate rejects");
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });

  const file = join(dir, "entry.txt");
  writeFileSync(file, renderLabel(), "utf8");

  // Read the file back and gate-check what actually landed on disk,
  // not just the string we meant to write.
  const written = readFileSync(file, "utf8");
  assertInsideGate(written);

  console.log(`wrote ${file} (${[...written].length} characters)`);
}

main();
