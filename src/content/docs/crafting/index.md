---
title: "Crafting and stations"
description: "Discover recipes, prepare ingredients and upgrade your stations."
verification: verified
sources: ["Assets/Scripts/World/Crafting.cs", "Assets/Scripts/World/Upgrades.cs", "Assets/Scripts/World/Stations.cs", "Assets/Scripts/UI/GameMenuTabs.cs", "Assets/Scripts/Player/PlayerCombat.cs", "Assets/Scripts/Player/ArrowShot.cs"]
---

<div class="gallery-grid"><figure><a href="/images/stations-v016.webp" aria-label="Open full-size image: Crafting stations at the homestead. An in-game demonstration setup."><img src="/images/stations-v016.webp" alt="Crafting stations at the homestead. An in-game demonstration setup." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Crafting stations at the homestead. An in-game demonstration setup.</figcaption></figure><figure><a href="/images/crafting-v016.webp" aria-label="Open full-size image: The v0.16.0 crafting screen, with the Flint Axe recipe selected."><img src="/images/crafting-v016.webp" alt="The v0.16.0 crafting screen, with the Flint Axe recipe selected." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>The v0.16.0 crafting screen, with the Flint Axe recipe selected.</figcaption></figure></div>

[Station reference: costs, placement and processing](/crafting/stations/) · [Browse every recipe](/crafting/recipes/) for exact costs, output counts, station and level requirements.

A recipe normally becomes known after you have held every ingredient at least once. You still need access to its station and any required station level. Some progression rites have additional requirements.

| Station | Typical work |
| --- | --- |
| By hand | Flint axe, club and torch |
| Workbench | Early tools, weapons, armour, bows, arrows, the lute, charms and (from v0.25.0) the coracle |
| Herbalist's Table | Draughts, salves, tonics and protective preparations |
| Hearth | Cooked food, including (from v0.25.0) the sea meals: Egg Bannock and Steamed Mussels |
| Forge | Iron equipment, iron arrows, progression rites and the Keepers' Key; since v0.33.0 ember-steel and ashsteel gear (tiers IV and V) |
| Stonecutter | Stone-related work, including whetstones and bone meal |

## Extensions

Build extensions within **4.5 m** of their station. Each extension needs the one before it.

| Station | Level 2 | Level 3 |
| --- | --- | --- |
| Workbench | Shaving Horse: horn bow, antler pick and lute (since v0.33.0 the Ashpelt Mantle, tier IV) | Grindstone: fire arrows and ground whetstones (since v0.33.0 the Emberwood Bow, tier IV) |
| Forge | Smith's Rack: mace and lamellar (and since v0.30.0 the Emberlit Lamellar) | Quench Trough: Echo Attunement |

Since v0.33.0 the forge has two more levels: the **Ember Crucible** (level 4: ember steel and the tier IV gear) and the
**Rune Anvil** (level 5: the ashsteel gear and its runes). They open with the Underhearth; see
[the rune forge](/equipment/rune-forge/).

Arrow recipes show what the arrows do with your bow (the one in hand, else the best you own): base damage at full draw
and for a quick shot, and stagger. These figures exclude critical damage. In **v0.22.0**, a successful full-draw
hit has a 95% chance of dealing 50% extra critical damage; target defenses and vulnerability effects still apply.

Crafting takes time while the world continues. What does not fit in your satchel is set down beside you. Each completed piece is paid for when it finishes; closing the menu does not charge for unfinished work. Gear quality can vary. Food crafting can yield an extra portion through Cooking skill.

[Building](/mechanics/building/) · [Farming](/mechanics/farming/)
