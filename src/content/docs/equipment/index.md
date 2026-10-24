---
title: "Equipment, quality and upgrades"
description: "Weapons, tools, armour, charms and their base statistics."
verification: verified
sources: ["Assets/Scripts/Core/Gear.cs", "Assets/Scripts/World/Upgrades.cs", "Assets/Scripts/Player/PlayerCombat.cs", "Assets/Scripts/Player/PlayerVisual.cs", "Assets/Scripts/UI/GameMenu.cs", "Assets/Scripts/Player/ArrowShot.cs"]
---

<div class="gallery-grid"><figure><a href="/images/inventory-v016.webp" aria-label="Open full-size image: Historical inventory in v0.16.0, with a demonstration loadout."><img src="/images/inventory-v016.webp" alt="Historical inventory in v0.16.0, with a demonstration loadout." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Historical inventory in v0.16.0, with a demonstration loadout.</figcaption></figure><figure><a href="/images/torchlight-v016.webp" aria-label="Open full-size image: A held torch illuminates the homestead at night."><img src="/images/torchlight-v016.webp" alt="A held torch illuminates the homestead at night." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>A held torch illuminates the homestead at night.</figcaption></figure><figure><a href="/images/torch-v031.webp" aria-label="Open full-size image: Since v0.31.0 a lit torch is carried raised beside the head."><img src="/images/torch-v031.webp" alt="The hero seen from behind on a Highland slope at dusk, carrying a lit torch raised beside the head with the flame above the shoulder." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Since v0.31.0 a lit torch is carried raised beside the head.</figcaption></figure></div>

[Equipment calculator](/equipment/calculator/) · [Browse every equipment definition](/equipment/gear/) or [all stackable items](/equipment/items/).

**v0.22.0 bows:** tier, quality and upgrades improve accuracy, while upgrades also speed the draw. The Hunting Bow
starts at a 2-second full draw before quality and skill bonuses; the Horn Bow draws faster. The aiming circle shows
current spread, including shake from holding too long. Full-draw hits have a 95% chance of 50% extra critical damage.
Base damage and ordinary upgrade multipliers remain as listed below. See [Archery](/mechanics/#archery).

**v0.22.0:** left attack draws/releases bows, while guard, heavy attack or exhaustion cancels without using an arrow.
Intact world arrows have a recovery prompt and a 2.4 m automatic pickup reach. Non-fire arrows retain their 60%
survival chance; broken shafts disappear quickly.

Axes chop wood; pickaxes mine stone and ore. Since v0.19 tools hit creatures for about half the damage of a weapon of their tier (chopping and mining are unchanged). Clubs, spears, blades and bows offer different combat styles. Armour occupies head, chest, shoulders and arms; charms occupy their own slot. The lute is an instrument. A torch is carried gear and uses club attacks, with burning unchanged and just **25 base durability** since v0.20. Since v0.30.0 three pieces made from the Underhearth's finds give light without a hand: the [Glowcap Circlet](/equipment/gear/circlet-glowcap/) (head), the [Emberlit Lamellar](/equipment/gear/lamellar-ember/) (chest) and the [Wisp Rune](/equipment/gear/charm-wisp/) (charm); see [light below](/world/underhearth/#light-below).

Clubs, spears and blades can also **block** (see [Survival and combat](/mechanics/)).

Crafted gear can be Crude, Common, Good, Fine or Masterwork; a Good, Fine or Masterwork weapon shimmers in your hand. Catalog statistics are **Common-quality base definitions**. Actual results also depend on quality, upgrade level, skills, perks and combat conditions.

Eligible equipment can be upgraded up to **+3**. Each level multiplies the quality-adjusted damage, armour and gathering stats by an additional 10% of their +0 value. Maximum durability is multiplied by 1 + 0.25 × level after its quality adjustment; attack speed uses a smaller bonus. Each equipment page includes the full quality-by-level tables. Workbench and forge extensions unlock the higher station levels. Iron, ember-steel and ashsteel equipment is worked at the forge; other ordinary gear at the workbench. Charms, unique found gear and instruments cannot be upgraded. Since v0.29.0 the **Last Forge** in the Underhearth's Black City tempers a weapon or tool already at +3 to **+4**, once (2 ashsteel, 3 ember ore and a fire opal); see [the Underhearth](/world/underhearth/#the-last-forge).

Since v0.33.0 two tiers go above iron for the Underhearth: **tier IV, ember steel** (the Ember Crucible, forge level 4;
open once the Ancient Guardian has fallen and a ward stone of the Ashen Wilds burns) and **tier V, ashsteel and runes**
(the Rune Anvil, forge level 5; open once the Dominion's rite is learned at the Last Forge). Each tier V weapon carries a
rune. See [the rune forge](/equipment/rune-forge/). The same version added **Flint Knives** (tier I blades) and **Iron
Vambraces** (arm armour).

Since v0.33.0 two tiers go above iron for the Underhearth: **tier IV, ember steel** (the Ember Crucible, forge level 4;
open once the Ancient Guardian has fallen and a ward stone of the Ashen Wilds burns) and **tier V, ashsteel and runes**
(the Rune Anvil, forge level 5; open once the Dominion's rite is learned at the Last Forge). Each tier V weapon carries a
rune. See [the rune forge](/equipment/rune-forge/). The same version added **Flint Knives** (tier I blades) and **Iron
Vambraces** (arm armour).

Spare gear occupies one satchel slot. Equipped gear appears only in its equipment slot, while bound tools and
weapons appear on the hotbar. Neither counts against satchel capacity. Hover or focus a spare piece to compare
it with the equipped piece. Make room before unequipping into a full bag.

Durability falls through use. Broken equipment needs repair at the appropriate station. A burned-out torch can be rekindled at a workbench.

[Recipes](/crafting/recipes/) · [Station extensions](/crafting/)


![A full satchel has exactly fifteen occupied cells; worn headgear and a hotbar club sit outside it, and controller focus compares the spare cap with the worn one.](/images/inventory-v020.webp)

*Accurate 15/15 satchel slots, equipment comparison and controller prompts, staged in v0.20.0.*
