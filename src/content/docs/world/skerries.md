---
title: "The Skerries, the coracle and treasure"
description: "Four islands out in the sea, the boat that reaches them, the sea wind, chests by land and flotsam."
verification: verified
sources: ["Assets/Scripts/World/WorldIsles.cs", "Assets/Scripts/World/Isles.cs", "Assets/Scripts/Player/Coracle.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/World/LootChest.cs", "Assets/Scripts/World/WorldStreamer.cs", "Assets/Scripts/World/Gathering.cs", "Assets/Scripts/World/Crafting.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/World/Trader.cs", "Assets/Scripts/World/WorldBuilder.cs", "CHANGELOG.md", "Assets/Scripts/World/Lands.cs"]
---

<div class="gallery-grid"><figure><a href="/images/coracle-v025.webp" aria-label="Open full-size image: Paddling a coracle out over the sea (v0.25.0)."><img src="/images/coracle-v025.webp" alt="A hero sitting in a round hide coracle on dark blue water, paddle in hand, with the sun's reflection running across the sea." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Paddling a coracle out over the sea (v0.25.0).</figcaption></figure><figure><a href="/images/skerries-strand-v025.webp" aria-label="Open full-size image: Stepping ashore on Selkie Strand (v0.25.0)."><img src="/images/skerries-strand-v025.webp" alt="A hero on the pebbly beach of Selkie Strand, surf lines on the water, a sea stack and the wooded coast of the Vale in the distance." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Stepping ashore on Selkie Strand (v0.25.0).</figcaption></figure></div>

Since **v0.25.0** four islands lie out in the corners of the sea, beyond wading depth, with eight bare sea stacks
between them. Together they are **the Skerries**: a land of their own (danger tier 4 since v0.27.0, the hardest of the surface lands with the Highlands; it was 3) with their own finds, chests and
weather. The channels to them are several metres deep, so you need a boat.

## The islands

| Island | Where | What you find |
| --- | --- | --- |
| **Gullholm** | North-east, off the Highlands and the Mire | A tall rock with cliffs all round but one beach. Gulls nest on its ledges (**gull eggs**); a cairn, a lore stone and a **sea chest** on the summit. |
| **Wrecker's Holm** | South-east, off the Mire and Elderwood | A longship broken on the rocks at the waterline. Two **sea chests** (one in the wreck, one higher up the beach), barrels and crates, a few pines. The drowned (Hollows) walk its beach **at night**. |
| **Selkie Strand** | South-west, off Elderwood and the Birchwood | A long, low island of dunes. **Seals** haul out on the sand and slip into the sea when you come close; **mussel beds** in the shallows, **amber** in the dunes, a sea chest on the dune top. |
| **Keeper's Light** | North-west, off the Birchwood and the Highlands | The ruined lighthouse of the Keepers, with a stair winding round the outside to the fire cage on top, and a **Keepers' coffer** at its door. |

An island counts as found when you step ashore; its name then shows on the place line and the map.

<div class="gallery-grid"><figure><a href="/images/wreckers-holm-v025.webp" aria-label="Open full-size image: Wrecker's Holm and its wreck (v0.25.0)."><img src="/images/wreckers-holm-v025.webp" alt="A hero on the grassy beach of Wrecker's Holm, the broken ribs of a longship at the waterline." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Wrecker's Holm and its wreck (v0.25.0).</figcaption></figure><figure><a href="/images/gullholm-v025.webp" aria-label="Open full-size image: On Gullholm (v0.25.0)."><img src="/images/gullholm-v025.webp" alt="A hero at the foot of the steep, grassy rock of Gullholm, its summit high above and the sea on either side." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>On Gullholm (v0.25.0).</figcaption></figure></div>

## The coracle

The **Coracle** is made at the [workbench](/crafting/stations/workbench/) from 8 wood, 4 leather, 3 resin and 2 flax.
It is a round hide boat that you carry in your bag (you can only carry one).

- **Getting in:** wade out from any beach. Where the water gets too deep to wade, you put the coracle on the water and
  climb in instead of being turned back.
- **Paddling:** move as usual. The boat is slow to get going and drifts on when you stop. Sprint paddles hard, about
  half as fast again, for stamina. Storms slow you by a fifth, and the wind pushes the boat along.
- **Getting out:** paddle into water shallower than about 0.75 m, at any shore (the Vale or an island). You step out and
  the coracle goes on your back again.
- Rocks, the wreck and the sea stacks stop the boat; the swell at the edge of the world turns it back.
- You can eat, drink and use the hotbar afloat, but not fight. In co-op the other players see you paddle.
- If you save afloat you wake in the boat. If you fall at sea, your satchel washes up on the nearest shore.

## The sea wind

Afloat, or anywhere on the Skerries, nights, rain and storms chill you (**Cold**: slower breath, no healing). In a storm
you **freeze** when you are afloat or soaked, and since v0.27.0 freezing can kill (except on Easy). A **Fur Mantle**, a **Warming Draught** or the **Selkie's Pearl** keeps
the sea wind off; a bowl of bone broth makes it one step milder. By day in fair weather the crossing is safe.

## Finds of the islands

| Find | From | Use |
| --- | --- | --- |
| [Gull Eggs](/equipment/items/gull-egg/) | Gull nests on Gullholm | [Egg Bannock](/crafting/recipes/egg-bannock-hearth/) (2 eggs, 3 barley: two bannocks, much more stamina for 11 minutes) |
| [Mussels](/equipment/items/mussel/) | Mussel beds on Selkie Strand (a few on Wrecker's Holm) | [Steamed Mussels](/crafting/recipes/steamed-mussels-hearth/) (4 mussels, 1 moonpetal: two bowls, a light meal that heals well, 8 minutes) |
| [Pearl](/equipment/items/pearl/) | About one mussel bed in fourteen (more with the Foraging skill), sea chests, coffers | Orm pays 14 silver each; the [Selkie's Pearl](/equipment/gear/charm-pearl/) charm |

The **Selkie's Pearl** charm (workbench: 2 pearls, 3 silver, 1 leather) keeps the sea wind off, makes a coracle a
quarter faster and brings breath back 5% quicker. Orm also buys gull eggs (three for a silver) and mussels (four for a
silver).

## The Keepers' light

Climb the stair round the lighthouse on Keeper's Light and kindle the fire cage at the top with **10 wood and 5 resin**.
The fire then burns for good, in every player's world (in co-op it is shared). It shows every island and sea stack on
your map, and the **Keepers' coffer** at the foot of the tower, sealed until then, opens.

![The Keepers' lighthouse on its island, its fire burning at dusk.](/images/keepers-light-v025.webp)

*The kindled lighthouse at dusk, v0.25.0.*

## Chests and flotsam

Since v0.25.0 chests are rolled like Valheim's drop tables: a chest makes a few picks, each weighted, and never the same
thing twice. What it can hold depends on the land it stands in, on top of common stores (wood, flint, flax, resin, hide)
and, in the better chests, iron, oak, crystals and silver.

| Land | Its chests also hold |
| --- | --- |
| Birchwood | Cloudberries, flax, barley, sometimes an antler |
| The Mire | Spider silk, bog iron, bones, grave iron |
| Stoneteeth Highlands | Frost lichen, iron, now and then a crystal or a tusk |
| Elderwood | Amber, oak wood, redcaps, moonpetals |
| The Skerries | Silver, mussels, gull eggs, pearls, a little amber |
| The Coast | Flint, resin, a little silver |
| The Frontier | Iron, hides, sometimes an antler |

| Kind | Where | Holds |
| --- | --- | --- |
| Chest | Sites in the wilds, crypts | About three finds in a poor chest, up to seven in the richest; sometimes a piece of gear |
| Sea chest | The islands | Four or five finds: silver, iron ore, hides, pearls, amber, flax, resin and the land's things; often gear |
| Keepers' coffer | Keeper's Light | Four to six: crystals, silver, pearls, amber, iron; always a good piece of gear |
| Washed-up crate | Beaches of the Vale and the Skerries | Two or three: wood, resin, flax, hide, barley, sometimes silver; rarely iron, amber or a pearl |

**Flotsam:** every three days the sea washes **seven crates** up on the beaches (round the whole Vale and on the
islands), each tide in other places. Whoever opens a crate first opens it for everyone in that world.

Chests still give raw materials only: the smelting, tanning, cooking and brewing are yours to do.

[Biomes and preparation](/biomes/) · [The Vale and the outer lands](/world/) · [Items](/equipment/items/)
