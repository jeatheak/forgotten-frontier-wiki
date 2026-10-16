# Wiki agent instructions

Read `WIKI_RULES.md`. This is the independent wiki repository for The Forgotten Frontier; the game is normally the
parent directory. Game `AGENTS.md` and `LEARNINGS.md` apply to interactions with the game and screenshot tools.

1. Inspect the game diff and relevant implemented code. Update handwritten player guides alongside gameplay changes.
2. Run `npm run sync` (or pass `-- --game-root <path>`). It refreshes generated item/equipment/recipe references,
   the changelog, image copies and the source manifest. Never hand-edit pages marked Generated.
3. For changed guides, review their listed sources and run `node scripts/review-guides.mjs <page-path> ...` with paths
   relative to `src/content/docs`, e.g. `mechanics/index.md`. This records source hashes after the guide has been
   checked. Do not acknowledge a guide without reading and correcting it. New guides require this too.
4. Use real game captures or existing game artwork. Inspect each image, catalog it in `src/data/images.json` with
   source path, known version, useful alt text and a caption, then reference it in Markdown. Label historical UI.
   Find provenance before using undated captures. Never expose real server addresses, passwords, private chats or saves.
   Use isolated saves and safe game capture tools.
   Keep every item and equipment definition illustrated with its real baked game icon, including recipe ingredients.
   Export updated icons using `FF.IconBaker.Dump` after the world loads. Use compressed WebP for gameplay photographs.
   Existing committed pictures remain usable when a raw local capture is absent; recapture them when visuals change.
5. Run `npm run check:game`, `npm run validate`, and `npm run build`. The source check needs the game checkout;
   ordinary CI validates/builds from the wiki alone. Report failing/unavailable checks and remaining coverage gaps.
6. Review both Git diffs. They are separate repositories; never stage the wiki in the game. Only commit/push when
   requested. Keep credentials, infrastructure configuration, deployment scripts and operational notes local and
   ignored. Never put deployment details in public documentation or commit them to this repository.

Verification means facts checked against implemented source, not that a release was published or a gameplay test ran.
Creature and station references use reviewed source snapshots in `src/data/reference-source-reviews.json`.
If a reference source changes, read its implementation, update `scripts/reference-pages.mjs` and the equipment
formulas where relevant, then update only the reviewed file's whitespace-normalized SHA256 snapshot. Never
refresh these snapshots blindly. Run `npm test` when equipment formulas or upgrade calculations change.
Use canonical creature and station links; the content transformer adds their thumbnails and links plain names
in prose and tables. Keep table scrolling on the outer `.table-scroll` wrapper and native table layout inside.
Source hashes flag changed implementations. The exporter fails on unsupported definitions; fix extraction instead of
silently dropping entities. Generated output is committed so the wiki builds without the private game source.
