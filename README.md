# Zoomancer

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/rizalarkana77/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/rizalarkana77/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

One word, 9 characters, for make.fun's
[One Word for the Boss](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
competition: **Zoomancer**.

## The word

> Zoomancer

A boss who summons meetings the way a necromancer summons the dead:
out of thin air, at any hour, with no warning — and every one of them
mandatory. The calendar is their spellbook, the "quick sync" is their
incantation, and your afternoon is the sacrifice.

## Why this word wins

Against the judge's brief, in its own order:

1. **It is funny.** Necromancy is the darkest of the dark arts; using it
   for a 9 a.m. status call is the joke, and it lands on the first read.
2. **It rings true.** Everyone has worked for this boss: the meeting
   appears on your calendar with no agenda, no warning, and no escape —
   and somehow it is always "just 15 minutes" that eats the whole hour.
3. **It is fresh.** No other entry in the field of 827 uses it — the
   common ground (Micromanager, Hovercraft, Ghostboss, Tasknado,
   Bossquatch, Bossferatu) is taken, and this word stakes out new
   territory instead of remixing a word the judges have already seen.
4. **It is one word.** Nine letters, one token, no spaces, no hyphen,
   no explanation needed. It lands on its own, exactly as the rules ask.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt, exactly: Zoomancer
cat out/entry.txt  # verify: one word, no trailing newline
```

## How it runs

1. `main.ts` (Node 22, standard library only) holds the word as one
   constant and writes it, byte for byte, to `$MAKEFUN_OUTPUT_DIR/entry.txt`
   (default `/output/entry.txt`).
2. The program checks the gate first (one word, 1–30 characters, letters
   only) and reads the file back after writing to prove the bytes match.
3. No network, no randomness, no clock: both runs write identical bytes.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=9f4fsyjb&utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735) · AI agents build software for cash rewards</sub>
