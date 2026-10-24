---
title: "Biomes and preparation"
description: "Nine regions, their danger tiers, packs and hunts, their air and environmental hazards."
verification: verified
sources: ["Assets/Scripts/World/WorldIsles.cs", "Assets/Scripts/World/BiomeAir.cs", "Assets/Scripts/World/WorldGen.cs", "Assets/Scripts/World/WorldStreamer.cs", "Assets/Scripts/World/Gathering.cs", "Assets/Scripts/Enemies/Enemy.cs", "Assets/Scripts/Enemies/EnemySpawner.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/World/WorldWater.cs", "Assets/Scripts/World/Lands.cs", "Assets/Scripts/Enemies/Hunts.cs", "Assets/Scripts/World/WorldBuilder.cs"]
---

<div class="gallery-grid"><figure><a href="/images/birchwood-v016.webp" aria-label="Open full-size image: Birchwood: open grassland and pale trunks in the western hills."><img src="/images/birchwood-v016.webp" alt="Birchwood: open grassland and pale trunks in the western hills." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Birchwood: open grassland and pale trunks in the western hills.</figcaption></figure><figure><a href="/images/elderwood-v016.webp" aria-label="Open full-size image: Elderwood: dense southern forest."><img src="/images/elderwood-v016.webp" alt="Elderwood: dense southern forest." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Elderwood: dense southern forest.</figcaption></figure><figure><a href="/images/mire-v016.webp" aria-label="Open full-size image: The Mire: dark pools, reeds and low mist."><img src="/images/mire-v016.webp" alt="The Mire: dark pools, reeds and low mist." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>The Mire: dark pools, reeds and low mist.</figcaption></figure><figure><a href="/images/highlands-v016.webp" aria-label="Open full-size image: Stoneteeth Highlands: bare slopes and distant snow."><img src="/images/highlands-v016.webp" alt="Stoneteeth Highlands: bare slopes and distant snow." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Stoneteeth Highlands: bare slopes and distant snow.</figcaption></figure></div>

The skulls by the place name show the land's **danger tier**, from none (the homestead and the trader's camp) to four
(since v0.27.0; before, there were at most three and the outer lands differed far less), and five in the Cinder Wastes (since v0.28.0). Creatures born in the **outer lands** take their land's tier; the Vale's forest and the Frontier
keep the base values (the Frontier's creatures are higher levels instead).

| Biome | Tier | Creatures born there | Preparation |
| --- | --- | --- | --- |
| Homestead Meadows | 0 · Safe haven | Nothing hunts here | Crafting, storage and a bed |
| The Forest | 1 · Wilds | Base values | Early weapons, food and healing supplies |
| The Frontier | 2 · Dangerous | Base values (higher levels; the Courtyard approach is tier 3) | Better gear before advancing north |
| Birchwood | 2 · Dangerous | ×1.35 health, ×1.25 damage | Leather armour and food; packs hunt here at night |
| The Coast | 2 · Dangerous | ×1.35 health, ×1.25 damage | The island's edge: beaches, driftwood and the sea |
| Elderwood | 3 · Deadly | ×1.65 health, ×1.45 damage | About 17 armour, three meals; hunting packs |
| The Mire | 3 · Deadly | ×1.65 health, ×1.45 damage | Bogwalker's Balm against venom and webs; hunting packs |
| Stoneteeth Highlands | 4 · Merciless | ×1.9 health, ×1.65 damage | About 30 armour (a full iron set; 27 before v0.33.0), warmth against freezing, food; hunting packs |
| The Skerries | 4 · Merciless | ×1.9 health, ×1.65 damage | A [coracle](/world/skerries/#the-coracle); warmth against the sea wind |
| The Ashen Wilds | 4 · Merciless | ×1.9 health, ×1.65 damage (its creatures are tougher kinds to begin with) | Since v0.28.0: the first land of [the Underhearth](/world/underhearth/), below the Vale. Something against the heat (Glowcap Broth, Frostlichen Draught), an iron pickaxe and axe for its finds; since v0.30.0 [light to wear](/world/underhearth/#light-below) from its glowcaps and ember ore |
| The Fallen Dominion | 5 · Infernal | ×2.15 health, ×1.85 damage | Since v0.29.0: the Underhearth's third land, east of the Wastes along the Ash Road. Echo crystals for the broken causeway, armour against Sentinels' blows, something against fire |
| The Cinder Wastes | 5 · Infernal | ×2.15 health, ×1.85 damage | Since v0.28.0: the Underhearth's second land, behind the Sealed Door (light both wards of the Ashen Wilds). About 40 armour (better than iron since v0.33.0: ember steel), something against the heat (the whole plain is hot) and shelter from Bloodstorms |

Outer-land creatures also have more poise (×1.15 / ×1.25 / ×1.35 by tier; ×1.45 in tier 5), notice you from further
(×1.15 / ×1.25 / ×1.3; ×1.35), move a little faster (×1.05 / ×1.08 / ×1.1; ×1.12), are elites more often (×1.6 / ×2.1 /
×2.5; ×2.8) and follow you further from their den (×1.35 / ×1.6 / ×1.8, also in tier 5; every creature by the tier
where it was born). Packs of Stalkers and spiders there hold one more, and in Elderwood, the Mire and the Highlands most
packs keep one more at night. When your worn armour is below what the land asks for (8 in tier 2, 17 in tier 3, 30 in
tier 4, 40 in tier 5; 27 and 30 before v0.33.0) the HUD says **your armour is thin here**.

### Packs, hunts and pursuit

*New in v0.27.0.*

![A hero under a pine in the blue-green Elderwood. A message at the top reads: Something has your scent. Stalkers are coming from the north-east. Beside the place name, three skulls, Deadly, and in red: your armour is thin here.](/images/hunted-v027.webp)

*A hunting pack picks up the hero's scent in the Elderwood (v0.27.0 development build, autotest capture).*

- **Packs everywhere.** Besides the old haunts, packs stand about every 50-60 m deep inside Birchwood, Elderwood, the
  Mire and the Highlands, with the land's own creatures: Stalkers and Chargers, the dead in the Elderwood (by day too)
  and spiders in the Mire. About half of the Stalker packs **roam** a loop of 35-55 m.
- **Hunting packs.** Linger in Elderwood, the Mire or the Highlands (or in Birchwood at night; since v0.28.0 also the Ashen Wilds and the Cinder Wastes below) and a pack picks up your
  scent: two or three of the land's creatures come for you from 40-55 m away, out of sight, and a message says from
  which direction. On Normal it takes about three to five minutes out there, less at night and in the Highlands;
  Easy hunts less often, Hard more often, Builder never. Under a roof or by a fire the scent goes cold. A hunting pack
  follows further and longer than a creature that only happened to see you.
- **Shaking them off.** A creature after you keeps looking and listening for you. Once it can neither see nor hear you
  it goes to where it last knew you were; after **5 seconds** in the Vale (7 in tier 2, 9 in tier 3, 11 in tier 4) it
  gives up with a **?**, searches the spot and wanders home. Break its sight and go quietly: [sneak](/mechanics/#sneaking-and-damage-types),
  or at least walk. A creature that notices you calls others of its kind from 9 m in the Vale, 12, 16 and 19 m in the
  deeper tiers.
- **Wounds hardly close out here.** Without food, health comes back at 1.2 a second in the forest, 0.6 in tier 2 lands,
  0.3 in tier 3 and 0.2 in tier 4, and only after 10 seconds unhurt outside the Vale (6 in it). At home it is 10 a
  second. Meals heal as before.

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

**v0.24.0:** some things grow together. A cell of the wilds may hold one patch: a **ring of redcaps**
in the Elderwood (often) or the Vale's forest (now and then), a **patch of cloudberries** in the Birchwood, a **stand of
flax** in the meadows and the Frontier, or **lichen** in the Highlands, never within about 60 m of home. The Birchwood,
the Elderwood and the Mire now grow in glades and thickets, as the Vale's forest already did, with about the same
number of trees overall. No tree of the wilds stands on ground steeper than 34°, and nothing to forage grows on ground
steeper than 30°. Felled trees and picked plants are still remembered by place.

## The Skerries

Four islands out in the sea (since v0.25.0): Gullholm, Wrecker's Holm, Selkie Strand and Keeper's Light. The water to
them is too deep to wade: build a **coracle** at the workbench and wade out with it in your bag. Afloat, or on the
islands, the **sea wind** chills you at night, in rain and in storms (and freezes you in a storm when you are afloat or
soaked); a Fur Mantle, a Warming Draught or the Selkie's Pearl keeps it off. Their own finds are gull eggs, mussels and
pearls. See [The Skerries, the coracle and treasure](/world/skerries/).

## Each land's air

Since v0.25.0 every land has its own light and air, after Valheim's environments, eased in over a few seconds as you
cross from one into the next: a blue-teal mist under the Elderwood's canopy, the Mire's green haze, cold clear light on
the Highlands, warm gold over the Birchwood, bright sea air on the coast and the Skerries. Weather comes on top.

## The Mire

Venom damages you over time and prevents healing; webs slow movement. **Bogwalker's Balm** protects against both for six minutes.

## Cold lands

Away from home, shelter and fire, Highland cold slows your breath and stops healing. Night, storms, rain, being soaked
and (since v0.27.0) the high crests of the Stoneteeth, above about 17 m, turn it to **freezing**, which costs 1.6 health
a second and **can kill** (on Easy it still stops at 15; before v0.27.0 it stopped at 15 on every difficulty). A
**Fur Mantle** or **Warming Draught** protects against cold; a leather cap and bone broth reduce its severity. The
draught lasts six minutes.

[Items and consumables](/equipment/items/) · [Crafting recipes](/crafting/recipes/)

![Overhead view of a Mire pool with dark water following its natural banks.](/images/mire-water-v022.webp)

*Real gameplay capture, staged in v0.22.0.*
