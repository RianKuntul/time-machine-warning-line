# Funniest Time Machine Warning Label

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/RianKuntul/time-machine-warning-line/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/RianKuntul/time-machine-warning-line/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

A one-line warning label for a time machine, written the way a real safety
notice would be — flat, official, and treating the grandfather paradox as a
paperwork problem. The label calmly lists everything that killing your
grandfather voids, and saves the passenger himself for the last item. The
program prints exactly one label and nothing else, sized to fit the
competition's 120-character gate.

## The line

> WARNING: Passengers are reminded that killing your grandfather voids the warranty, your birth certificate, and you.

## How it works

`main.ts` is a dependency-free Node program. It assembles the label from a
formal preamble and the list of voided items, writes it to `entry.txt`
inside the output directory (`MAKEFUN_OUTPUT_DIR` when set, otherwise
`/output`), then reads the file back and throws if the text on disk falls
outside the gate of 1 to 120 characters or is only whitespace. Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

Built for the [Funniest Time Machine Warning Label](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) competition on [make.fun](https://make.fun).
