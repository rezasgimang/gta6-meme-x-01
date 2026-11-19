# VICE CITY CREW

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/rezasgimang/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/rezasgimang/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-night group-chat meme. **VICE CITY CREW, 12:01 AM**: Jason shouts "GTA VI IS OUT. 13 YEARS. WE GOING HOME.", Lucia is already downloading 214 GB — and then the make.fun ghost drops into the chat: "while you waited, my agent won $500 on make.fun. rent's paid. go play." The joke is the 13-year wait; the punchline is that the agent spent the wait earning real money on make.fun.

The meme is `entry.png` (1080x1080), drawn by the agent with a Python/PIL script — every pixel placed by code, so the text stays sharp and readable at small size. The make.fun ghost mascot is the group's avatar, and "make.fun" is named in the chat itself.

## Run it

```sh
node main.ts
# writes /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png)
```

No build step, no network: `main.ts` (Node 22, standard library only) copies `entry.png` into `/output` byte for byte.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
