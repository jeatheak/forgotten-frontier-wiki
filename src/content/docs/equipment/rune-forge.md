---
title: "The rune forge: tiers IV and V"
description: "Ember steel and ashsteel: the gear above iron for the Underhearth, how to unlock it, the rune materials and what each rune does."
verification: verified
sources: ["Assets/Scripts/World/Forging.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/World/Crafting.cs", "Assets/Scripts/World/Upgrades.cs", "Assets/Scripts/World/Dominion.cs", "Assets/Scripts/Enemies/DeepCreatures.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/World/Lands.cs"]
---

<div class="gallery-grid"><figure><a href="/images/rune-forge-ashsteel-v033.webp" aria-label="Open full-size image: The Ashsteel set and the Ruin Mace at the Last Forge (v0.33.0 game capture, HUD cropped)."><img src="/images/rune-forge-ashsteel-v033.webp" alt="A hero in black ashsteel plate with glowing pale-blue runes across the breast, gold-rimmed pauldrons and a visored pointed helm, holding the Ruin Mace with ember runes in its head, before the glowing mouth of the Last Forge." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The Ashsteel set and the Ruin Mace at the Last Forge (v0.33.0 game capture, HUD cropped).</figcaption></figure><figure><a href="/images/rune-forge-ember-v033.webp" aria-label="Open full-size image: The ember-steel set with Fine Ember Blades (v0.33.0 game capture, HUD cropped)."><img src="/images/rune-forge-ember-v033.webp" alt="A hero facing the camera in the Emberforged Helm with cheek plates, an ash-grey pelt mantle over banded dark ember-steel plate, crossing a pair of Ember Blades that shimmer blue (Fine quality), in front of the Last Forge; a burning Acolyte stands in the background." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The ember-steel set with Fine Ember Blades (v0.33.0 game capture, HUD cropped).</figcaption></figure></div>

*New in v0.33.0.* Iron is not enough for the Underhearth: its creatures have nearly twice the health of their kin on
the surface. Two tiers of gear go above iron, each worked at a new forge extension, and each has to be **unlocked**
first.

| Tier | Material | Made at | Unlocked by |
| --- | --- | --- | --- |
| **IV** | **Ember steel** (iron and ember ore) | The **Ember Crucible** (forge level 4) | The [Ancient Guardian](/bosses/ancient-guardian/) defeated **and** a ward stone of the Ashen Wilds rekindled |
| **V** | **Ashsteel** (the Sentinels' black plate) and runes | The **Rune Anvil** (forge level 5) | Tier IV **and** the Dominion's rite learned at the Last Forge in the Black City |

Until a tier is open its extension cannot be built and its recipes say what is missing. The **Character** tab shows
whether ember steel (IV) and ashsteel (V) are open.

## Unlocking tier IV: ember steel

1. Defeat the **Ancient Guardian** in the Forgotten Courtyard (see [the journey](/progression/)).
2. Go down into [the Underhearth](/world/underhearth/) and rekindle **one of the two ward stones of the Ashen Wilds**
   (the Hollow Ward or the Ward under the Ribs: 3 ember ore and an Echo crystal each). The Landing's ward does not count.
3. Build the **Ember Crucible** beside your forge, within 4.5 m like every extension. It needs the Quench Trough first.
   It costs 16 stone, 8 obsidian, 6 brimstone, 4 ember ore and 4 iron bars.
4. At the forge, run **ember steel**: 2 ember ore, 1 iron bar and 1 brimstone make one bar.

## Unlocking tier V: ashsteel

1. Open tier IV.
2. Reach the **Last Forge** in the Black City of the Fallen Dominion and **lay a plate of ashsteel on its anvil** (the
   plate is used up). From then on the Dominion's rite is known in your world.
3. Build the **Rune Anvil** beside your forge (it needs the Ember Crucible first): 4 ashsteel, 6 ember steel, 6 obsidian,
   3 Kindled ash, 2 soul embers and a fire opal.

The Last Forge still tempers a +3 weapon or tool to +4 once the rite is known.

## Rune materials

| Material | From | Used for |
| --- | --- | --- |
| [Kindled Ash](/equipment/items/kindled-ash/) | The **Kindled** (45%; at level 3 sometimes two), the Keeper coffers of the Cinder Wastes | The rune of ruin |
| [Soul Ember](/equipment/items/soul-ember/) | **Sentinels** (35%) and **Acolytes** (40%), the Dominion's coffers | The soul rune, ashsteel armour, the Dominion Recurve |
| Fire opal | The opal seams of the Cinder Wastes, Slagbacks, Cinder Crawlers, Acolytes | The infernal rune |
| Ashsteel | **Sentinels** (2 or 3 plates since v0.33.0), the Dominion's coffers | Every tier V piece |

## The runes

Each tier V weapon carries one rune. Runes work on melee blows (light, heavy, the riposte and the Dash Strike).

| Rune | Weapon | Effect |
| --- | --- | --- |
| **Rune of ruin** | [Ruin Mace](/equipment/gear/mace-ruin/) | +50% stagger, and a foe that is already **exposed** takes 25% more |
| **Soul rune** | [Soul Blades](/equipment/gear/blades-soul/) | 8% of each blow's damage comes back to you as health |
| **Infernal rune** | [Infernal Spear](/equipment/gear/spear-infernal/) | Sets creatures alight; creatures the Underhearth's own fire cannot burn (Ashhounds, the Kindled, Slagbacks, Cinder Crawlers, Acolytes) take 25% more instead |

## The gear

Base values at Common quality. Every piece can be upgraded to +3 at the forge (ember-steel and ashsteel upgrades take
ash pelt, brimstone and, at +3, obsidian or a soul ember) and tempered to +4 at the Last Forge.

| Tier IV | Kind | Base | Made of |
| --- | --- | --- | --- |
| [Ember Axe](/equipment/gear/axe-ember/) | Axe | Chop 36, damage 15 | 2 emberwood, 3 ember steel, 1 ash pelt |
| [Ember Pickaxe](/equipment/gear/pick-ember/) | Pickaxe | Mine 36, damage 12 | 2 emberwood, 4 ember steel, 1 ash pelt |
| [Ember Mace](/equipment/gear/mace-ember/) | Club | Damage 34, +100% stagger | 2 emberwood, 5 ember steel, 1 ash pelt |
| [Ember Spear](/equipment/gear/spear-ember/) | Spear | Damage 24 | 2 emberwood, 3 ember steel, 1 obsidian, 1 ash pelt |
| [Ember Blades](/equipment/gear/blades-ember/) | Blades | Damage 13.5 | 1 emberwood, 4 ember steel, 2 obsidian, 1 ash pelt |
| [Emberwood Bow](/equipment/gear/bow-ember/) | Bow (workbench, level 3) | Damage 29 | 4 emberwood, 2 antler, 3 spider silk, 1 ash pelt |
| [Emberforged Helm](/equipment/gear/helm-ember/) | Head | Armour 10 | 3 ember steel, 1 ash pelt, 1 leather |
| [Emberforged Cuirass](/equipment/gear/cuirass-ember/) | Chest | Armour 22 | 6 ember steel, 2 ash pelt, 2 leather |
| [Ashpelt Mantle](/equipment/gear/mantle-ash/) | Shoulders (workbench, level 2) | Armour 9, heat a step off | 4 ash pelt, 2 leather, 1 ember steel |
| [Emberforged Vambraces](/equipment/gear/vambraces-ember/) | Arms | Armour 7 | 2 ember steel, 1 ash pelt, 1 leather |

| Tier V | Kind | Base | Made of |
| --- | --- | --- | --- |
| [Ruin Mace](/equipment/gear/mace-ruin/) | Club, rune of ruin | Damage 46, +130% stagger | 5 ashsteel, 2 ember steel, 3 Kindled ash, 2 emberwood |
| [Infernal Spear](/equipment/gear/spear-infernal/) | Spear, infernal rune | Damage 32 | 4 ashsteel, 2 ember steel, 2 fire opals, 2 emberwood |
| [Soul Blades](/equipment/gear/blades-soul/) | Blades, soul rune | Damage 18 | 5 ashsteel, 1 ember steel, 3 soul embers, 1 ash pelt |
| [Dominion Recurve](/equipment/gear/bow-dominion/) | Bow | Damage 37 | 3 ashsteel, 3 emberwood, 2 antler, 3 spider silk, 1 soul ember |
| [Ashsteel Helm](/equipment/gear/helm-ashsteel/) | Head | Armour 13 | 3 ashsteel, 1 soul ember, 1 leather |
| [Ashsteel Plate](/equipment/gear/plate-ashsteel/) | Chest | Armour 28, heat a step off | 7 ashsteel, 2 soul embers, 2 ash pelt, 2 leather |
| [Ashsteel Pauldrons](/equipment/gear/pauldrons-ashsteel/) | Shoulders | Armour 12 | 4 ashsteel, 1 ember steel, 2 leather |
| [Ashsteel Vambraces](/equipment/gear/vambraces-ashsteel/) | Arms | Armour 9 | 3 ashsteel, 1 leather |

A full set is 48 armour (tier IV) or 62 (tier V), against 34 for iron with Iron Vambraces. The Ashpelt Mantle and the
Ashsteel Plate each keep the Underhearth's heat a step further off (wearing both does not add a second step). In the
Underhearth's tier 4 and 5 lands the HUD calls your armour thin below 30 and 40.

How much it matters: a level 3 Dominion Sentinel, which is weak to crushing blows, takes about 30% fewer light blows
from an Ember Mace than from an Iron Mace of the same quality (34 against 24 damage), and about half as many from the
Ruin Mace (46).

## Also new below iron

- [Flint Knives](/equipment/gear/knives-flint/): a pair of quick blades at the workbench (2 wood, 4 flint, 1 leather),
  long before the iron blades.
- [Iron Vambraces](/equipment/gear/vambraces-iron/): arm armour 5 at the forge (2 iron bars, 2 leather); the leather
  bracers were the only arm piece before.

[All equipment](/equipment/gear/) · [The forge](/crafting/stations/forge/) · [The Underhearth](/world/underhearth/)
