# Rules for the wiki coding agent

- Treat shipped game content as the source of truth, not design brainstorming.
- Do not invent lore, item names, statistics, loot tables, crafting recipes or bosses.
- Every page must have `title`, `description`, `verification` and `sources` frontmatter. Use a JSON array of
  game-relative source paths for `sources`; these are provenance, not links to private source files.
- Use `verification: scaffold` for empty navigation/overview pages.
- Use `verification: review-needed` for substantive additions awaiting review.
- Use `verification: verified` only after checking the relevant implemented game facts.
- Keep data in `src/data/game-manifest.json` with stable entity IDs; keep prose readable.
- Never publish unpublished game secrets or internal development documents.
- Run `npm run validate` and `npm run build` before changes are approved.
- Prefer relative links, reusable components and compact Markdown pages.
- Use root-relative links. Keep deployment configuration, credentials and operational details out of this repository.
- Follow `AGENTS.md` for generated references, source-review snapshots and image metadata. A successful sync never
  substitutes for reviewing affected prose. Do not acknowledge source reviews blindly to clear a freshness failure.
