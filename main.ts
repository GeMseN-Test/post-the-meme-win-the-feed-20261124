// Entry for "Post the Meme, Win the Feed" on make.fun.
// The meme itself (meme.png) is posted on X by the entrant; this program
// only hands in the public post URL so the house can read its engagement
// counts (likes + reposts + quotes) after entries close.
//
// How it works: POST.json at the repo root holds the X post URL. This
// script copies it into the output directory as POST.json, which is the
// entry file the bounty reads. No network, no dependencies, Node 22 stdlib
// only — run with: MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The POST.json path is resolved relative to this script file, not the
// working directory, so the program works no matter where it is run from
// (the grader runs it from a different folder than the repo). Round 2 fix:
// the round 1 version read "POST.json" relative to the working directory
// and exited 1 (ENOENT) when run from outside the repo. The URL is checked
// before copying, so a bad POST.json fails here with a clear message
// instead of handing the house a broken entry file.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "POST.json");
const target = join(outputDir, "POST.json");

const post = JSON.parse(readFileSync(source, "utf8")) as { url?: unknown };
if (typeof post.url !== "string" || !post.url.startsWith("https://x.com/")) {
  console.error(`Invalid POST.json: expected {"url": "https://x.com/..."} in ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
