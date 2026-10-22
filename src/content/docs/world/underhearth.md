---
title: "The Underhearth and the Ashen Wilds"
description: "The world beneath the Vale: the fracture and the way down, the sky's states, the Ashen Wilds, the Cinder Wastes and the Fallen Dominion, light to wear, heat, vents, creatures, the Last Forge and the Keepers' lift."
verification: verified
sources: ["Assets/Scripts/World/Underhearth.cs", "Assets/Scripts/World/DeepPassage.cs", "Assets/Scripts/World/KeeperLift.cs", "Assets/Scripts/World/Colossus.cs", "Assets/Scripts/World/CinderVents.cs", "Assets/Scripts/World/Dominion.cs", "Assets/Scripts/World/Trader.cs", "Assets/Scripts/World/LootChest.cs", "Assets/Scripts/World/BiomeAir.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/World/DayNight.cs", "Assets/Scripts/World/Weather.cs", "Assets/Scripts/World/WorldStreamer.cs", "Assets/Scripts/World/Gathering.cs", "Assets/Scripts/World/Lands.cs", "Assets/Scripts/Enemies/DeepCreatures.cs", "Assets/Scripts/Enemies/Elites.cs", "Assets/Scripts/Enemies/Hunts.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/World/Crafting.cs", "Assets/Scripts/UI/GameMenuTabs.cs", "Assets/Scripts/Player/HeroLight.cs", "Assets/Scripts/World/DeepCover.cs", "Assets/Scripts/World/AmbientLife.cs", "CHANGELOG.md"]
---

<div class="gallery-grid"><figure><a href="/images/underhearth-overlook-v028.webp" aria-label="Open full-size image: The first sight of the Underhearth from the Overlook (v0.28.0)."><img src="/images/underhearth-overlook-v028.webp" alt="A hero on a dark ledge looks out over a forest of glowing blue and violet mushrooms; beyond black spires a huge red glow hangs low in a violet sky, and a keep hangs upside down from the dark above." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The first sight of the Underhearth from the Overlook (v0.28.0).</figcaption></figure><figure><a href="/images/underhearth-wilds-v028.webp" aria-label="Open full-size image: Glowcaps and gloomtrees in the Ashen Wilds (v0.28.0)."><img src="/images/underhearth-wilds-v028.webp" alt="A hero among giant mushrooms with glowing undersides and twisted trees with turquoise and red leaves, under a violet sky." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Glowcaps and gloomtrees in the Ashen Wilds (v0.28.0).</figcaption></figure></div>

**New in v0.28.0.** Far below the Vale lies a whole world with its own horizon and
its own sky: **the Underhearth**. Two of its lands can be explored now: **the Ashen Wilds**, where the way down comes
out, **the Cinder Wastes** behind them and, since v0.29.0, **the Fallen
Dominion** east of the Wastes. The Heart of the Below comes later. Since v0.30.0 you can
[wear light](#light-below) down here, and the ground grows its own cover.

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

<div class="gallery-grid"><figure><a href="/images/underhearth-tunnel-v028.webp" aria-label="Open full-size image: The tunnel at the head of the descent (v0.28.0)."><img src="/images/underhearth-tunnel-v028.webp" alt="A hero in a dark rock tunnel; a cold blue rune lamp glows on the left and faint lights hang deeper in." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The tunnel at the head of the descent (v0.28.0).</figcaption></figure><figure><a href="/images/underhearth-lava-v028.webp" aria-label="Open full-size image: A lava river with crusted plates (v0.28.0)."><img src="/images/underhearth-lava-v028.webp" alt="A river of lava cracked into black crust plates with orange seams, below a bank of glowing mushrooms." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>A lava river with crusted plates (v0.28.0).</figcaption></figure></div>

## The Keepers' lift

At **the Landing**, a round Keeper dais between the two lava rivers, the lift's platform lies dark at the foot of four
chains that run up into a keep hanging upside down from the sky. Interact with it to **wake the lift**. From then on it
carries you up through the hanging keep to the Throat, and from the Throat back down: a quick way in and out. The
first ride down takes longer; on later rides, Interact or Jump skips to the end. If you save on the lift, you wake at
the Landing.

## Keeper wards: havens below

Rings of Keeper ward-light are the rare safe places of the Underhearth. Inside a lit ward:

- creatures do not hunt you and hunting packs lose your scent,
- wounds close as they do at home (the land counts as "Safe haven"),
- you can **build**: walls, a roof, a bed to wake in (you respawn at the nearest bed), chests and a campfire. The
  stations stay one of each.

The **Landing**'s ward has never gone out (28 m round the lift). Three more **ward stones** stand dark: **the Hollow
Ward** by the Glowcap Hollow and **the Ward under the Ribs** on the east side of the Wilds, and **the Cinder Ward** out
on the Cinder Wastes. Rekindle one with **3 ember ore and an Echo crystal** to light a ring of 18 m round it, for
everyone in the world. Lighting both wards of the Wilds also opens [the Sealed Door](#the-sealed-door).

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
  underfoot. The woods are cool. Since v0.30.0 the floor under them is a carpet of **glow-threads**, fungal filaments
  whose bulbs pulse blue, violet and teal and sway in the air, and glowcap spores drift between the trunks.
- **Ash fields** with black **emberbark** trees, cinderweed and basalt boulders, and (since v0.30.0) stiff grey **ash
  reeds** with ember-lit tips. Basalt pebbles and small sprigs of glowing violet crystal lie about everywhere. Nothing
  grows in the lava.
- **Two lava rivers** running north to south either side of the Landing, with **crusted bridges** where the lava runs
  under a skin of rock, and **the Ember Pool** in the middle. The **Glowcap Hollow** lies right below the Overlook.
- The ribs of something huge, black spires, and **the Sealed Door**, a Keeper door in the north wall.
- **The Strider**, a creature taller than the Courtyard's walls, walks the far north of the Wilds, there and back. It
  pays no attention to heroes. The ground shakes where it steps, and Ashhounds near its feet forget their prey for a
  while. Every player in a shared world sees it in the same place.

## The Sealed Door

A Keeper door the height of ten men stands in a sheer bastion of the Wilds' north wall. Two runes on its face are the
runes of the ward stones: while **both the Hollow Ward and the Ward under the Ribs burn**, put a hand to the door and it
wakes and sinks into the floor. It stays open for everyone in the world. Behind it **the Cinder Pass**, a canyon cut
through the wall, climbs north to the Cinder Wastes.

## The Cinder Wastes

<div class="gallery-grid"><figure><a href="/images/underhearth-titan-v028.webp" aria-label="Open full-size image: The Fallen Titan on the Cinder Wastes (v0.28.0)."><img src="/images/underhearth-titan-v028.webp" alt="A hero on dark cinder ground; beyond, the huge horned skull and ribs of the Fallen Titan lie in the ash, and a crack of lava glows on the right." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The Fallen Titan on the Cinder Wastes (v0.28.0).</figcaption></figure><figure><a href="/images/underhearth-vent-v028.webp" aria-label="Open full-size image: A vent roars on the Breathing Flats (v0.28.0)."><img src="/images/underhearth-vent-v028.webp" alt="A vent on the Breathing Flats roars a column of fire beside the hero; the HUD shows five red skulls, Infernal, and the hero burning." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>A vent roars on the Breathing Flats (v0.28.0).</figcaption></figure><figure><a href="/images/underhearth-reeds-v030.webp" aria-label="Open full-size image: Cinder reeds and rising embers on the Cinder Wastes (v0.30.0 game capture, HUD cropped)."><img src="/images/underhearth-reeds-v030.webp" alt="A hero on dark cinder ground among sparse clumps of grey reeds with glowing orange tips; embers drift in the air and burnt trees with glowing seams stand behind." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Cinder reeds and rising embers on the Cinder Wastes (v0.30.0 game capture, HUD cropped).</figcaption></figure></div>

The Underhearth's second land: a plain of ash and slag under a redder sky, beyond the wall. It is a **tier 5 land
("Infernal")**: creatures born there have ×2.15 health, ×1.85 damage, ×1.45 poise, keener senses and a little more
speed, elites are more common still, and the HUD calls your armour thin below **30**. Wounds hardly close out there.

- **The whole plain is hot**, and in a **Bloodstorm** out in the open it **scorches**: shelter under a roof or in a lit
  ward.
- **Lava fissures**: narrow cracks of lava across the plain, a stride or two wide, each with a crust bridge.
- **Vents** (see below), most of them on **the Breathing Flats** east of the canyon.
- **The Fallen Titan**: a skull and spine larger than the Strider, lying in the west. The Kindled keep its bones.
- **The Glass Field**: a flat of black volcanic glass in the north-east, heaped with obsidian.
- Keeper wardens who died out here, three of them with a **Keeper coffer** (at the Titan, on the Glass Field and on the
  Breathing Flats): Keeper finds, and the Wastes' own (fire opal, obsidian, ember ore, brimstone).
- **The Cinder Ward**, a ward stone waiting to be rekindled, and a ruined **fortress** far off on the northern rim, out of
  reach for now.
- Since v0.30.0 sparse **cinder reeds** with glowing tips grow in patches away from the vents, sprigs of fire crystal
  stand on the Glass Field, and embers drift up through the air.

### Vents

Each vent breathes on its own rhythm, every 10 to 16 seconds. When it draws breath the ground round its mouth glows, it
rumbles and a warning ring appears; about 2.4 seconds later it roars a column of fire for nearly 2 seconds. Whoever
stands over its mouth (within about 2.8 m) takes **26 damage**, is thrown back and is set **burning** for 3 seconds. A
well-timed roll goes through it like any other blow. Every player in a shared world sees the same vent roar at the
same moment. Brimstone crusts and **opal seams** gather round the vents.

## The Fallen Dominion

*New in v0.29.0.*

<div class="gallery-grid"><figure><a href="/images/dominion-shore-v029.webp" aria-label="Open full-size image: The shore of the Lake of Fire, v0.29.0 (editor camera capture)."><img src="/images/dominion-shore-v029.webp" alt="A hero on the red shore of the Fallen Dominion beside a lore tablet, the lake of fire glowing behind and black mountains under a red sky." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The shore of the Lake of Fire, v0.29.0 (editor camera capture).</figcaption></figure><figure><a href="/images/dominion-span-v029.webp" aria-label="Open full-size image: The Echo span over the Broken Causeway, v0.29.0 (editor camera capture)."><img src="/images/dominion-span-v029.webp" alt="A hero on a flagstone causeway between seas of fire; ahead a pale Echo span with rails bridges the gap beside a small Keeper pedestal, and black towers with lit windows rise beyond." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The Echo span over the Broken Causeway, v0.29.0 (editor camera capture).</figcaption></figure><figure><a href="/images/dominion-city-v029.webp" aria-label="Open full-size image: Sentinels wake in the Black City, v0.29.0 (editor camera capture)."><img src="/images/dominion-city-v029.webp" alt="A hero in the Black City between two Sentinels in dark armour with shields, beneath black towers with fire in their windows." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Sentinels wake in the Black City, v0.29.0 (editor camera capture).</figcaption></figure></div>

East of the Cinder Wastes lies the city of the people who lived down here before the Keepers came. It is a **tier 5
land ("Infernal")**, like the Wastes.

- **The Ash Road** leaves the east side of the Wastes through a canyon lit by old lamps, under the ruined **Ash Gate**
  (two Sentinels stand either side of it as statues), and comes out on the Dominion's west shore beside **the Ward of the
  Ash Road**, a fifth ward stone.
- **The Lake of Fire** fills the middle of the basin, and on an island in it stands **the Black City**: black towers with
  fire in their windows, broken walls and a stepped temple with a core of fire. The island and the causeways are hot
  underfoot but not scorching.
- **The Broken Causeway** runs from the west shore towards the city and breaks off over the fire. A Keeper pedestal at the
  break takes **3 Echo crystals** and raises an Echo of the span, solid underfoot, for everyone in the world.
- The long way round is **the south causeway**, through **the Fallen Gate**, the Dominion's fortress on the south shore,
  whose garrison never left.
- **Four lore tablets** (the Ash Gate, the Fallen Gate and two by the temple) tell the Dominion's story.
- Three **Keeper coffers** (by the temple, in the Fallen Gate and by the Last Forge) hold Keeper finds and the Dominion's
  own: relics, ashsteel, fire opal and ember ore.
- Since v0.30.0 dark reeds tipped with red glow grow here and there on the shore, and embers rise over the lake.

### The Last Forge

A forge in the Black City that burns from below. Take a weapon or tool **already worked to +3** in hand and it tempers it
to **+4** (another +10% to its numbers and +25% durability), once, for **2 ashsteel, 3 ember ore and a fire opal**. No
station goes past +3.

## Light below

<div class="gallery-grid"><figure><a href="/images/underhearth-light-v030.webp" aria-label="Open full-size image: The Glowcap Circlet, the Emberlit Lamellar and the Wisp Rune, worn in the Ashen Wilds (v0.30.0 game capture, HUD cropped)."><img src="/images/underhearth-light-v030.webp" alt="A hero faces the camera in a field of glowing blue and violet threads under giant glowcaps, wearing a circlet with blue stones, dark lamellar with two glowing ember seams and a diamond rune plate, and a pale rune ring floating beside the head." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>The Glowcap Circlet, the Emberlit Lamellar and the Wisp Rune, worn in the Ashen Wilds (v0.30.0 game capture, HUD cropped).</figcaption></figure><figure><a href="/images/underhearth-threads-v030.webp" aria-label="Open full-size image: Glow-threads under the glowcaps, the Wisp Rune over the shoulder (v0.30.0 game capture, HUD cropped)."><img src="/images/underhearth-threads-v030.webp" alt="Seen from behind, a hero with glowing ember seams on the armour walks through a carpet of glow-threads whose tips shine cyan, teal and violet under giant glowcaps; a pale rune floats over the right shoulder." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Glow-threads under the glowcaps, the Wisp Rune over the shoulder (v0.30.0 game capture, HUD cropped).</figcaption></figure></div>

*New in v0.30.0.* Three pieces of gear give light without a hand, made from the Underhearth's finds. Whatever of them
you wear, they share **one soft light high over your head** (about 4 m off the ground, or over the Wisp Rune when it is
worn): it lights the ground round you two to three times brighter than without, and never shines into
the camera or blinds you. The more of them you wear, the brighter and wider it gets. The light only comes on in the dark:
anywhere in the Underhearth, in a crypt, and at night on the surface.

| Piece | Slot | Made at | Cost | Light |
| --- | --- | --- | --- | --- |
| [Glowcap Circlet](/equipment/gear/circlet-glowcap/) | Head (armour 4) | Workbench | 2 leather, 4 glowcaps, 1 obsidian | Cold blue, a band of glowcap stones on the brow |
| [Emberlit Lamellar](/equipment/gear/lamellar-ember/) | Chest (armour 18) | Forge, level 2 | 6 iron bars, 4 ember ore, 3 leather | Warm ember seams and a rune plate on ash-dark plates |
| [Wisp Rune](/equipment/gear/charm-wisp/) | Charm (skills +5%) | Workbench | 2 Echo crystals, 3 glowcaps, 2 ember ore | The brightest: a Kaunan rune floating over your right shoulder |

A lit hero is a seen hero: creatures see you farther in your own light. **Sneaking shades the glow** to under a third,
and it dims while you sleep. In co-op everyone sees the others' glowing gear and its light.

## Heat

- **Lava** burns fast (34 health a second) and throws you back towards the bank; it also sets you **burning**.
- **Scorching**: within about 3.5 m of the lava the air itself burns (2 health a second).
- **Hot**: within about 10 m of the lava, out in the open during a Bloodstorm, and anywhere on the Cinder Wastes. A hot
  hero breathes 30% slower and wounds do not close on their own. In the glowcap woods only scorching counts.
- On the Cinder Wastes a **Bloodstorm** in the open is **scorching**. Inside a lit ward there is no heat at all.
- **Burning** (from lava or a Kindled's blow) takes 5 health a second; every roll puts it out sooner.
- **Glowcap Broth** keeps the heat one step further off; a **Frostlichen Draught** keeps it off entirely for six
  minutes (lava still burns). The **Fire Opal Charm** keeps it another step off and makes burning go out twice as
  fast.

The HUD shows HOT, SCORCHING or BURNING beside your other conditions.

## Creatures

| Creature | Notes |
| --- | --- |
| **Ashhound** | Pack hunters of the ash on the Stalker's frame: about half as tough again as a Stalker, harder hitting, a little faster. Fireproof; cutting blows (blades, axes) hurt them most, crushing blows least. Drop **ash pelts**, now and then meat and brimstone. |
| **The Kindled** | Barrow dead who fell into the deep and burn still. They fight like Hollows, but their blows set you alight (and, like a Hollow's, can carry grave rot), and each one **bursts into flame** a moment after it falls: step away. Fireproof; crushing blows serve best, cutting blows least. Drop bones, brimstone and ember ore. |
| **Ashhorn** | Great grazers, a Greyhorn's kind but half as big again and more than twice as tough. They want nothing from you and bolt when they notice you; a bull that is hurt turns. Piercing blows hurt them most. Drop venison, hide, an ash pelt and, from bulls, antlers. |
| **Slagback** | A Charger of the Cinder Wastes grown over with slag (×1.7 health, ×1.6 poise, ×1.4 damage, ×1.15 speed of a Charger; the strongest are Slagback Elders). It charges like a Charger and **leaves the ground burning** behind the charge for 5 seconds. Fireproof; crushing blows break the slag, cutting and piercing blows turn on it. Drops obsidian, meat, brimstone, now and then a tusk or a **fire opal**. |
| **Cinder Crawler** | Spiders of cinder and black glass (×1.9 health, ×1.4 damage, ×1.25 speed of a Mire spider; the largest are Cinder Matriarchs). They do not spit or keep their distance: they run straight in and **leap**, and a bite sets you **burning**. They hunt the Wastes in swarms. Fireproof; piercing blows (arrows, a spear) find the gaps, crushing blows glance off. Drop brimstone and obsidian; a Matriarch now and then a fire opal. |

| **Dominion Sentinel** | A soldier of the Dominion in black plate (×2.4 health, ×2 poise, ×1.5 damage of a Hollow; slower). It fights like a Hollow. Those on the old posts are **statues until you come within a few steps or strike one**. Crushing blows dent the plate; cutting and piercing blows skid. Drops ashsteel, bones, now and then a Dominion relic. |
| **Dominion Acolyte** | A robed fire-priest that keeps its distance and throws **gobs of fire** that set you burning (a roll or parry keeps them off), and swipes up close. Frail: cuts and points hurt it most. Fireproof. Drops brimstone, Dominion relics, now and then a fire opal. |

Hunting packs come here too: Ashhounds in the Wilds (with one of the Kindled at night), swarms of Cinder Crawlers or
Ashhounds with Crawlers on the Cinder Wastes, and a Sentinel with an Acolyte (or Ashhounds with an Acolyte) in the
Dominion.

## Finds and recipes

| Find | Where | Tool |
| --- | --- | --- |
| **Obsidian** seams | Out on the floor | Iron pickaxe |
| **Ember ore** seams | Within about 16 m of the lava | Iron pickaxe |
| **Basalt** boulders | Everywhere | Any pickaxe (stone) |
| **Emberwood** | Emberbark and gloomtrees | Iron axe |
| **Glowcaps** | Picked in the woods | By hand |
| **Brimstone** | Crusts on the lava banks, round the vents and along the fissures | By hand |
| **Opal seams** (fire opal, obsidian, brimstone) | Beside the vents of the Cinder Wastes | Iron pickaxe |
| **Ashsteel** | From the Dominion's Sentinels and its coffers | |
| **Dominion relics** | From Acolytes, Sentinels and the Dominion's coffers; Orm pays 22 silver each (and 12 for a fire opal) | |

| Recipe | Station | Cost | Makes |
| --- | --- | --- | --- |
| **Glowcap Broth** | Campfire | 3 glowcaps, 1 bone | 2 bowls: more stamina and good healing (9 min); the heat a step further off |
| **Frostlichen Draught** | Herbalist's table | 2 frost lichen, 2 glowcaps, 1 moonpetal | Six minutes without the heat |
| **Obsidian Arrows** | Workbench | 2 wood, 1 obsidian, 1 resin | 10 arrows, the sharpest there are |
| **Brimstone Fire Arrows** | Workbench | 2 wood, 1 brimstone, 1 flax | 10 fire arrows |
| **Fire Opal Charm** | Workbench | 1 fire opal, 2 iron bars, 1 ash pelt | Heat a step lower, burning half as long, breath 5% quicker |
| **Slag Charm** | Workbench | 1 Slagback trophy, 1 iron bar, 2 obsidian | +35% stagger, +6% damage |

Ember ore cannot be smelted (no forge of the Vale burns hot enough), but it feeds the Keeper wards and the Last Forge,
and since v0.30.0 it lights the [Emberlit Lamellar and the Wisp Rune](#light-below).

## The map below

While you are in the Underhearth the map shows the Underhearth's own map, places and pins, with its own fog of war
that clears as you walk (shared in co-op like the Vale's). Back on the surface it shows the Vale again. Since v0.29.0 the Underhearth's map shows the part you are in: the Wilds and the Wastes, or the Fallen Dominion.
