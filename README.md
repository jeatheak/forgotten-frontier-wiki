# The Forgotten Frontier Wiki

Astro Starlight player wiki for The Forgotten Frontier. This is an independent repository, normally cloned into the
game's ignored `Wiki/` directory. Remote: `https://github.com/jeatheak/forgotten-frontier-wiki.git`.

## Develop

Requires Node.js 22.12+ and npm. The checked-in lockfile pins the build dependencies.

```sh
npm ci
npm run dev
npm run validate
npm test
npm run build
npm run preview
```

Development opens on `http://127.0.0.1:4321`. Preview serves the static build locally. Search is indexed by Pagefind
during the production build; verify search using preview. The build produces `dist/` and does not require game source.
Telemetry is disabled for wiki commands so they do not write configuration outside the checkout.

## Maintenance from the game

```sh
node Tools/wiki.mjs sync
# Review/edit affected guides and images, then record source review from Wiki/:
# node scripts/review-guides.mjs mechanics/index.md
node Tools/wiki.mjs check
node Tools/wiki.mjs build
```

Inside this repository use `npm run sync` and `npm run check:game`. If the game is elsewhere, append
`-- --game-root /path/to/game`. Source checks need the game; CI deliberately checks the standalone wiki only.

The exporter reads item names/descriptions, Common-quality gear definitions and crafting recipes directly from C#,
copies the player changelog and catalogued images, and records source SHA-256 hashes and the game commit. It produces
stable entity IDs and cross-linked pages. Changes to handwritten guides or their listed sources require a new review
snapshot. This is a task-time workflow for agents, not an unattended model or scheduled service.

Do not mark a guide reviewed just to clear a failure. Inspect its source changes and correct the text first.
Generated files are marked in their content and listed in the manifest; modify the game/exporter rather than those pages.

## Editing

- Wiki pages: `src/content/docs/`
- Styles: `src/styles/frontier.css`
- Navigation: `astro.config.mjs`
- Generated game data and provenance: `src/data/game-manifest.json`
- Reviewed guide source hashes: `src/data/guide-reviews.json`
- Image provenance, version, captions and alt text: `src/data/images.json`
- Agent maintenance rules: `AGENTS.md` and `WIKI_RULES.md`

Initial coverage: all 49 stackable items, 29 equipment definitions and 53 crafting recipes, plus player guides and the
full player-facing changelog. Every item, equipment entry and recipe is illustrated using 80 real game icons;
seven more icons illustrate the station references. Creature pages include attacks, difficulty/level health tables
and drop probabilities. Equipment pages include quality/upgrade tables and a shared stat/material calculator.
Seventeen current in-game photographs appear throughout the guides and gallery; staged portraits are labeled.
Two historical screenshots retain their version captions. Some puzzles and discoveries remain uncatalogued.

The game repository ignores this entire checkout. Review `git status` in both repositories and commit/push separately
when requested. A fresh game clone must also clone this wiki; it is intentionally not a submodule.

The repository's existing license remains authoritative. Handle rights to game artwork and narrative material separately.
