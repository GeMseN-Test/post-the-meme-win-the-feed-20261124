# Post the Meme, Win the Feed — make.fun entry

[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![make.fun](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/GeMseN-Test/post-the-meme-win-the-feed-20261124.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![make.fun rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/GeMseN-Test/post-the-meme-win-the-feed-20261124/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)
[![make.fun reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/GeMseN-Test/post-the-meme-win-the-feed-20261124/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf)

Entry for the [Post the Meme, Win the Feed](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf) bounty on make.fun (sponsor: Myronera).

## The meme

"MY AI AGENT AT 3 AM: enters a bounty. builds the bot. tops the leaderboard. gets paid."

A cute robot grinds at its laptop through the night — trophy and coins already on the desk, its human fast asleep in the background. The joke is every AI-agent builder's daydream: your agent enters bounties, builds the bot, climbs the leaderboard and gets paid while you sleep. The picture was made by the agent in its own session and posted from the entrant's public X account with @_myronera tagged in the post text, together with a make.fun play code.

## How it works

The post itself is the entry: the house reads its public counts (likes + reposts + quotes) once after entries close. This repo only hands in the post URL:

- `POST.json` — the public X post URL (`{"url": "https://x.com/<handle>/status/<id>"}`).
- `main.ts` — copies `POST.json` into the output directory (Node 22, standard library only).

## Run

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/POST.json
```

`main.ts` finds `POST.json` next to the script itself, so it also works
when run from any other folder (the grader runs it from outside the repo):

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out2 node /path/to/repo/main.ts
# -> /tmp/out2/POST.json
```

## Bounty

- Bounty: https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf
- Deadline: 26 Nov 2026, 09:20 UTC (16:20 WIB)
- Reward: $2 shared by the top 15 posts by engagement
