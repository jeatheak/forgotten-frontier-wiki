---
title: "Biomes and preparation"
description: "Eight regions, their danger ratings and environmental hazards."
verification: verified
sources: ["Assets/Scripts/World/WorldGen.cs", "Assets/Scripts/World/WorldStreamer.cs", "Assets/Scripts/World/Gathering.cs", "Assets/Scripts/Enemies/Enemy.cs", "Assets/Scripts/Enemies/EnemySpawner.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/World/WorldWater.cs"]
---

<div class="gallery-grid"><figure><a href="/images/birchwood-v016.webp" aria-label="Open full-size image: Birchwood: open grassland and pale trunks in the western hills."><img src="/images/birchwood-v016.webp" alt="Birchwood: open grassland and pale trunks in the western hills." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Birchwood: open grassland and pale trunks in the western hills.</figcaption></figure><figure><a href="/images/elderwood-v016.webp" aria-label="Open full-size image: Elderwood: dense southern forest."><img src="/images/elderwood-v016.webp" alt="Elderwood: dense southern forest." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Elderwood: dense southern forest.</figcaption></figure><figure><a href="/images/mire-v016.webp" aria-label="Open full-size image: The Mire: dark pools, reeds and low mist."><img src="/images/mire-v016.webp" alt="The Mire: dark pools, reeds and low mist." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>The Mire: dark pools, reeds and low mist.</figcaption></figure><figure><a href="/images/highlands-v016.webp" aria-label="Open full-size image: Stoneteeth Highlands: bare slopes and distant snow."><img src="/images/highlands-v016.webp" alt="Stoneteeth Highlands: bare slopes and distant snow." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Stoneteeth Highlands: bare slopes and distant snow.</figcaption></figure></div>

The displayed danger rating describes the region, not a promise that every encounter there is equally difficult. Creatures born in the **outer lands** (Birchwood, the Mire, the Highlands, Elderwood and the coast) are tougher than in the Vale: ×1.3 health, ×1.15 poise and ×1.2 damage; they notice you from 15% further, move 5% faster, are 60% more often elites, and packs of Stalkers and spiders hold one more.

| Biome | Danger | Preparation |
| --- | --- | --- |
| Homestead Meadows | 0 | Establish crafting, storage and a bed |
| The Forest | 1 | Early weapons, food and healing supplies |
| Birchwood | 1 | Prepare for gathering and wildlife west of the Vale |
| The Frontier | 2 | Better gear before advancing north |
| Elderwood | 2 | Supplies for the southern forest |
| The Mire | 3 | Bogwalker's Balm against spider venom and webs |
| Stoneteeth Highlands | 3 | Warmth against cold and freezing |
| The Coast | 2 | The island's edge: beaches, driftwood and the sea (since v0.19; before, the mountain ridge) |

## What each land gives

<div class="gallery-grid"><figure><a href="/images/forage-v017.webp" aria-label="Open full-size image: Cloudberries, a silk nest, frost lichen and amber (four game captures, v0.17.0)."><img src="/images/forage-v017.webp" alt="Cloudberries, a silk nest, frost lichen and amber (four game captures, v0.17.0)." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Cloudberries, a silk nest, frost lichen and amber (four game captures, v0.17.0).</figcaption></figure><figure><a href="/images/birchwood-detail-v017.webp" aria-label="Open full-size image: Birchwood clutter: a fallen trunk and gold leaves (v0.17.0)."><img src="/images/birchwood-detail-v017.webp" alt="Birchwood clutter: a fallen trunk and gold leaves (v0.17.0)." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Birchwood clutter: a fallen trunk and gold leaves (v0.17.0).</figcaption></figure></div>

| Land | Its own find | Where | Made into |
| --- | --- | --- | --- |
| Birchwood | [Cloudberries](/equipment/items/cloudberry/) | Low berry plants | [Cloudberry Tart](/crafting/recipes/cloudberry-tart-hearth/) |
| The Mire | [Spider Silk](/equipment/items/spider-silk/) | Silk nests, and every Mire spider | [Silk Bandage](/crafting/recipes/silk-bandage-herb-table/), the Horn Bow's string |
| Stoneteeth Highlands | [Frost Lichen](/equipment/items/frost-lichen/) | Lichen-crusted boulders | [Lichen Tea](/crafting/recipes/lichen-tea-herb-table/) (two Warming Draughts) |
| Elderwood | [Amber](/equipment/items/amber/) | Exposed oak roots; sometimes in a felled oak | [Amber Charm](/equipment/gear/charm-amber/) |

The common finds are thinner there in turn: Birchwood has fewer moonpetals, the Highlands no flax. Flint is restricted to watersides rather than dry inland ground. The trader pays well for all four.

**v0.22.0:** dedicated flint deposits are added on dry banks beside Stillwater Tarn, its brook,
bog pools and the ocean coast. Look just above the waterline for loose nodules. Mire water also blends continuously
with the surrounding biome and the offshore sea, replacing the rectangular material boundary. These changes are
included in the stable release.

The release thins the extra shoreline deposits substantially, especially near home and Mira's campsite;
existing forage placement is unchanged. Flint remains a waterside resource, including on ocean beaches.

## The Mire

Venom damages you over time and prevents healing; webs slow movement. **Bogwalker's Balm** protects against both for six minutes.

## Cold lands

Away from home, shelter and fire, Highland cold can hinder recovery. Night, storms, rain and being soaked can make it worse. A **Fur Mantle** or **Warming Draught** protects against cold; a leather cap and bone broth reduce its severity. The draught lasts six minutes.

[Items and consumables](/equipment/items/) · [Crafting recipes](/crafting/recipes/)

![Overhead view of a Mire pool with dark water following its natural banks.](/images/mire-water-v022.webp)

*Real gameplay capture, staged in v0.22.0.*
