// Entry for "Post the Meme, Win the Feed" on make.fun.
// The meme itself (meme.png) is posted on X by the entrant; this program
// only hands in the public post URL so the house can read its engagement
// counts (likes + reposts + quotes) after entries close.
//
// How it works: POST.json at the repo root holds the X post URL. This
// script copies it into the output directory as POST.json, which is the
// entry file the bounty reads. No network, no dependencies, Node 22 stdlib
// only — run with: MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = "POST.json";
const target = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
