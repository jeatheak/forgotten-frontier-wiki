---
title: "Survival and combat"
description: "The systems that keep a wanderer alive."
verification: verified
sources: ["Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Player/PlayerCombat.cs", "Assets/Scripts/Player/PlayerVisual.cs", "Assets/Scripts/Core/Skills.cs", "Assets/Scripts/Core/Guide.cs", "Assets/Scripts/World/DayNight.cs", "CHANGELOG.md", "Assets/Scripts/Enemies/Charger.cs", "Assets/Scripts/Core/GameManager.cs", "Assets/Scripts/World/Stations.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/Player/ArrowShot.cs"]
---

<div class="gallery-grid"><figure><a href="/images/torchlight-v016.webp" aria-label="Open full-size image: Carry a light when you head into the night."><img src="/images/torchlight-v016.webp" alt="Carry a light when you head into the night." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Carry a light when you head into the night.</figcaption></figure><figure><a href="/images/stalker-v016.webp" aria-label="Open full-size image: A Stalker, photographed in a staged in-game encounter."><img src="/images/stalker-v016.webp" alt="A Stalker, photographed in a staged in-game encounter." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>A Stalker, photographed in a staged in-game encounter.</figcaption></figure></div>

Health keeps you alive; stamina pays for strenuous actions, attacks and evasions. Avoid spending your last breath before a creature strikes. Food improves stamina and recovery, and healing supplies help you recover from mistakes.

Watch a creature's windup, evade or block the committed attack, then use its recovery window. Stagger and Exposed states create openings. The spear and blades support weapon arts. Relics add further abilities.

## Archery

Hold attack to draw and release to loose. A basic Common Hunting Bow takes **2 seconds** to draw before skill bonuses;
movement slows to a quarter of normal while drawing. The aiming circle shows the shot's spread and shrinks as you
pull. Early shots scatter widely. The Horn Bow, better quality, upgrades and Archery skill improve handling; upgrades
also shorten the draw. A brief click still releases a weak shot once the arrow is nocked.

Drawing spends stamina. A full draw spends it faster, and holding longer increases the drain further. After a short
steady window, the circle widens as your arms shake. Release when ready instead of waiting indefinitely at full draw.
Arrows follow a visible arc over distance. Base bow damage is unchanged; a successful full-draw shot has a **95% chance**
to deal **50% extra critical damage**. Enemy defenses and existing vulnerability effects still apply.

The earlier v0.20 release used faster bow handling; the deliberate draw is included in stable v0.22.0.

Since **v0.22.0**, left mouse/RT draws and release shoots; right mouse/LT/Y cancels the draw. Running out of
stamina cancels too, without firing or consuming ammunition. Release the draw button after a cancellation before drawing
again. Intact non-fire arrows stuck in the world can be recovered automatically within **2.4 m**, or with the interact
button when their **Recover** prompt appears. The existing **60% survival chance** is unchanged: broken shafts vanish
quickly, fire arrows burn out, and arrows striking creatures are not recoverable. A full bag can accept an arrow into a
partial stack; if no room remains the intact arrow stays available until it expires.

![The real game HUD showing an E Recover Flint Arrows prompt for an intact arrow at the homestead.](/images/arrow-recovery-v0211.webp)

*An intact world arrow offers a recovery prompt, staged in v0.21.1 beta.*

![A partially drawn Hunting Bow with a wide circular aiming reticle in the forest.](/images/bow-partial-v021.webp)

*Partial draw: a wide accuracy circle, staged in v0.21.0 beta.*

![The same Hunting Bow at full draw, with its accuracy circle contracted around the aiming point.](/images/bow-full-v021.webp)

*Full draw: the circle contracts. Holding longer spends more stamina and eventually widens the spread.*

## Meals, rest and light

One meal can be active at a time. While Fed, the same food cannot be eaten again until 30 seconds or less remain;
a different food can replace it. Sleeping through the night in your own claimed bed grants Rested, as does
resting by the fire or listening to the lute. Another hero's bed is unavailable, even at night.

The torch still hits and sets creatures alight, but has only **25 base durability**. It wears down while held and
when used; save a real weapon for sustained fighting. Repair a burned-out torch at a workbench.

At close range a Charger can stomp in every direction, knocking nearby heroes back. Leave the marked circle
during its 1.05-second warning, then use its recovery window.

## Blocking and parrying

Hold **right mouse or C** to guard; **middle mouse** (or **V** from v0.23.0) performs a heavy attack. Both can cancel a bow draw. Shift only
sprints; use Left Alt or mouse button 4 to dodge. Controller bindings are unchanged.

With a **club, spear or blades** in hand, hold **RMB or C** (LT on a controller) to guard. A blow from the front (within **70°** to either side of where you face) is mostly stopped; blows from the side or behind get through. In front a club stops **70%**, a spear **60%** and blades **50%** (less with a broken weapon). Each blocked blow costs stamina (4 plus 90% of the blow's damage, less with weapon skill); with too little stamina the guard breaks, more gets through and you are thrown off balance. While guarding you move at half speed and stamina does not recover. Fists, tools and the bow cannot block.

Raise the guard **just as the blow lands** (within a quarter of a second) to **parry**: nothing gets through and the attacker reels, Staggered and Exposed. Raising it again straight after lowering it gives no parry window. Mira's lesson, the **Riposte**, adds a counter-blow to every parry.

<div class="gallery-grid"><figure><a href="/images/guard-v017.webp" aria-label="Open full-size image: Guarding with a club (staged close-up, v0.17.0)."><img src="/images/guard-v017.webp" alt="Guarding with a club (staged close-up, v0.17.0)." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Guarding with a club (staged close-up, v0.17.0).</figcaption></figure><figure><a href="/images/shimmer-v017.webp" aria-label="Open full-size image: A masterwork weapon's shimmer in the hand (staged close-up, v0.17.0)."><img src="/images/shimmer-v017.webp" alt="A masterwork weapon's shimmer in the hand (staged close-up, v0.17.0)." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>A masterwork weapon's shimmer in the hand (staged close-up, v0.17.0).</figcaption></figure></div>

**Dash Strike** is not known at the start: it is learned once any fighting skill (Unarmed, Clubs, Spears, Blades or Archery) reaches **10**. It then sits on **F** (LB) with a 4-second cooldown.

Good, Fine and Masterwork **weapons** shimmer in the hand in their quality colour; tools and armour do not. Buffs show faintly on the hero: honed, rested, each tonic and the Gale and Ember relics.

Skills improve by doing their associated activities and range from **0 to 100**: Woodcutting, Mining, Foraging, Farming, Cooking, Smithing, Running, Unarmed, Clubs, Spears, Blades, Archery and Building.

The sun rises at 06:00 and sets at **20:00**; full dark comes a little after, and creatures grow bolder from about 20:40 until dawn.

Now and then your hero **thinks out loud**: one quiet line at the bottom of the screen about what might come next, such as a tool, a bed before nightfall, the trader or a land not yet walked. Each thought comes once and never in a fight; Settings > Gameplay > Hero's thoughts turns them off. They are hints, not quests.

Inventory, crafting and map screens leave the world running. The pause menu stops single player; online play keeps running. Creature health bars can be disabled under Settings > Gameplay.

- [Controls and hotbar](/mechanics/controls/)
- [Difficulty and death](/mechanics/difficulty/)
- [Building and storage](/mechanics/building/)
- [Farming](/mechanics/farming/)
- [Online co-op](/mechanics/co-op/)
- [Biome preparation](/biomes/)
