---
title: "The Underhearth and the Ashen Wilds"
description: "The world beneath the Vale: the fracture and the way down, the sky's states, the Ashen Wilds, heat, creatures and the Keepers' lift."
verification: verified
sources: ["Assets/Scripts/World/Underhearth.cs", "Assets/Scripts/World/DeepPassage.cs", "Assets/Scripts/World/KeeperLift.cs", "Assets/Scripts/World/Colossus.cs", "Assets/Scripts/World/DayNight.cs", "Assets/Scripts/World/Weather.cs", "Assets/Scripts/World/WorldStreamer.cs", "Assets/Scripts/World/Gathering.cs", "Assets/Scripts/World/Lands.cs", "Assets/Scripts/Enemies/DeepCreatures.cs", "Assets/Scripts/Enemies/Elites.cs", "Assets/Scripts/Enemies/Hunts.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/World/Crafting.cs", "Assets/Scripts/UI/GameMenuTabs.cs", "CHANGELOG.md"]
---

<div class="gallery-grid"><figure><a href="/images/underhearth-overlook-v028.webp" aria-label="Open full-size image: The first sight of the Underhearth from the Overlook (v0.28.0 source)."><img src="/images/underhearth-overlook-v028.webp" alt="A hero on a dark ledge looks out over a forest of glowing blue and violet mushrooms; beyond black spires a huge red glow hangs low in a violet sky, and a keep hangs upside down from the dark above." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The first sight of the Underhearth from the Overlook (v0.28.0 source).</figcaption></figure><figure><a href="/images/underhearth-wilds-v028.webp" aria-label="Open full-size image: Glowcaps and gloomtrees in the Ashen Wilds (v0.28.0 source)."><img src="/images/underhearth-wilds-v028.webp" alt="A hero among giant mushrooms with glowing undersides and twisted trees with turquoise and red leaves, under a violet sky." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Glowcaps and gloomtrees in the Ashen Wilds (v0.28.0 source).</figcaption></figure></div>

**In the current source (v0.28.0, not released yet).** Far below the Vale lies a whole world with its own horizon and
its own sky: **the Underhearth**. Its first land, **the Ashen Wilds**, can be explored now; the lands beyond its black
cliffs come in later versions.

## Getting there: the fracture

In a hollow under the Stoneteeth's north crests stands **the Throat**: a ring of Keeper stone round a bottomless well,
with a lift hanging dead in it on four chains. Beside the ring the rock is split open and old steps lead down: interact
with **the fracture** to climb down. (The first time, the Underhearth is built behind a short loading screen.)

The way down is walked:

1. **The tunnel**: rock arches, roots that should not grow without light, and cold rune lamps along the way.
2. **The gorge**: a trench cut deep into a cliff, still going down.
3. **The Overlook**: the gorge opens onto a ledge high above the Ashen Wilds. This is the first sight of the
   Underhearth.
4. **The ramp**: black rock down to the floor. The Ashen Wilds count as found once you are out of the gorge.

The fracture's foot, at the head of the tunnel, takes you back up to the Throat.

<div class="gallery-grid"><figure><a href="/images/underhearth-tunnel-v028.webp" aria-label="Open full-size image: The tunnel at the head of the descent (v0.28.0 source)."><img src="/images/underhearth-tunnel-v028.webp" alt="A hero in a dark rock tunnel; a cold blue rune lamp glows on the left and faint lights hang deeper in." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The tunnel at the head of the descent (v0.28.0 source).</figcaption></figure><figure><a href="/images/underhearth-lava-v028.webp" aria-label="Open full-size image: A lava river with crusted plates (v0.28.0 source)."><img src="/images/underhearth-lava-v028.webp" alt="A river of lava cracked into black crust plates with orange seams, below a bank of glowing mushrooms." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>A lava river with crusted plates (v0.28.0 source).</figcaption></figure></div>

## The Keepers' lift

At **the Landing**, a round Keeper dais between the two lava rivers, the lift's platform lies dark at the foot of four
chains that run up into a keep hanging upside down from the sky. Interact with it to **wake the lift**. From then on it
carries you up through the hanging keep to the Throat, and from the Throat back down: a quick way in and out. The
first ride down takes longer; on later rides, Interact or Jump skips to the end. If you save on the lift, you wake at
the Landing.

## The sky

There is no day and night below. A roof of star-crystals with a red-and-violet band across it stands overhead, and a
red glow burns low in the south-east, never setting. The sky has **states** instead, which change like weather:

| State | What happens |
| --- | --- |
| **Emberglow** | The usual: a violet sky, a red horizon, a fair view. |
| **Ashfall** | Ash comes down like snow and the air thickens; the far side of the land is lost in it. |
| **Bloodstorm** | The sky turns red, the wind rises and red lightning flashes. Elites appear **2.5 times** as often, and ember seams give one more ore. |
| **Hollow Silence** | The glow drains out of the sky, and hunting packs pick up your scent **2.5 times** faster. |

Each change is announced when you are below. In co-op the Underhearth's weather follows the shared clock like the
surface's.

## The Ashen Wilds

A tier 4 land ("Merciless"), walled in by black cliffs:

- **Woods** of giant glowcaps and twisted **gloomtrees** with turquoise or red leaves, and glowing pods and shrooms
  underfoot. The woods are cool.
- **Ash fields** with black **emberbark** trees, cinderweed and basalt boulders.
- **Two lava rivers** running north to south either side of the Landing, with **crusted bridges** where the lava runs
  under a skin of rock, and **the Ember Pool** in the middle. The **Glowcap Hollow** lies right below the Overlook.
- The ribs of something huge, black spires, and two places out of reach for now: a ruined **fortress** far off on the
  northern heights, and **the Sealed Door**, a Keeper door in the north wall that does not move.
- **The Strider**, a creature taller than the Courtyard's walls, walks the far north of the Wilds, there and back. It
  pays no attention to heroes. The ground shakes where it steps, and Ashhounds near its feet forget their prey for a
  while. Every player in a shared world sees it in the same place.

## Heat

- **Lava** burns fast (34 health a second) and throws you back towards the bank; it also sets you **burning**.
- **Scorching**: within about 3.5 m of the lava the air itself burns (2 health a second).
- **Hot**: within about 10 m of the lava, and out in the open during a Bloodstorm. A hot hero breathes 30% slower and
  wounds do not close on their own. In the glowcap woods only scorching counts.
- **Burning** (from lava or a Kindled's blow) takes 5 health a second; every roll puts it out sooner.
- **Glowcap Broth** keeps the heat one step further off; a **Frostlichen Draught** keeps it off entirely for six
  minutes (lava still burns).

The HUD shows HOT, SCORCHING or BURNING beside your other conditions.

## Creatures

| Creature | Notes |
| --- | --- |
| **Ashhound** | Pack hunters of the ash on the Stalker's frame: about half as tough again as a Stalker, harder hitting, a little faster. Fireproof; cutting blows (blades, axes) hurt them most, crushing blows least. Drop **ash pelts**, now and then meat and brimstone. |
| **The Kindled** | Barrow dead who fell into the deep and burn still. They fight like Hollows, but their blows set you alight, and each one **bursts into flame** a moment after it falls: step away. Fireproof; crushing blows serve best, cutting blows least. Drop bones, brimstone and ember ore. |
| **Ashhorn** | Great grazers, a Greyhorn's kind but half as big again and more than twice as tough. They want nothing from you and bolt when they notice you; a bull that is hurt turns. Piercing blows hurt them most. Drop venison, hide, an ash pelt and, from bulls, antlers. |

Hunting packs come here too (Ashhounds, with one of the Kindled at night).

## Finds and recipes

| Find | Where | Tool |
| --- | --- | --- |
| **Obsidian** seams | Out on the floor | Iron pickaxe |
| **Ember ore** seams | Within about 16 m of the lava | Iron pickaxe |
| **Basalt** boulders | Everywhere | Any pickaxe (stone) |
| **Emberwood** | Emberbark and gloomtrees | Iron axe |
| **Glowcaps** | Picked in the woods | By hand |
| **Brimstone** | Crusts on the lava banks | By hand |

| Recipe | Station | Cost | Makes |
| --- | --- | --- | --- |
| **Glowcap Broth** | Campfire | 3 glowcaps, 1 bone | 2 bowls: more stamina and good healing (9 min); the heat a step further off |
| **Frostlichen Draught** | Herbalist's table | 2 frost lichen, 2 glowcaps, 1 moonpetal | Six minutes without the heat |
| **Obsidian Arrows** | Workbench | 2 wood, 1 obsidian, 1 resin | 10 arrows, the sharpest there are |
| **Brimstone Fire Arrows** | Workbench | 2 wood, 1 brimstone, 1 flax | 10 fire arrows |

Ember ore cannot be smelted yet: no forge of the Vale burns hot enough.

## The map below

While you are in the Underhearth the map shows the Underhearth's own map, places and pins (there is no fog of war
there yet). Back on the surface it shows the Vale again.
