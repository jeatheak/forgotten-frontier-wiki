---
title: "Survival and combat"
description: "The systems that keep a wanderer alive."
verification: verified
sources: ["Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Player/PlayerCombat.cs", "Assets/Scripts/Player/PlayerVisual.cs", "Assets/Scripts/Core/Skills.cs", "Assets/Scripts/Core/Guide.cs", "Assets/Scripts/World/DayNight.cs", "CHANGELOG.md"]
---

<div class="gallery-grid"><figure><a href="/images/torchlight-v016.webp" aria-label="Open full-size image: Carry a light when you head into the night."><img src="/images/torchlight-v016.webp" alt="Carry a light when you head into the night." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Carry a light when you head into the night.</figcaption></figure><figure><a href="/images/stalker-v016.webp" aria-label="Open full-size image: A Stalker, photographed in a staged in-game encounter."><img src="/images/stalker-v016.webp" alt="A Stalker, photographed in a staged in-game encounter." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>A Stalker, photographed in a staged in-game encounter.</figcaption></figure></div>

Health keeps you alive; stamina pays for strenuous actions, attacks and evasions. Avoid spending your last breath before a creature strikes. Food improves stamina and recovery, and healing supplies help you recover from mistakes.

Watch a creature's windup, evade or block the committed attack, then use its recovery window. Stagger and Exposed states create openings. The spear and blades support weapon arts. Relics add further abilities.

## Blocking and parrying

With a **club, spear or blades** in hand, hold **MMB or C** (LT on a controller) to guard. A blow from the front is mostly stopped: a club stops **70%**, a spear **60%** and blades **50%** (less with a broken weapon). Each blocked blow costs stamina (4 plus 90% of the blow's damage, less with weapon skill); with too little stamina the guard breaks, more gets through and you are thrown off balance. While guarding you move at half speed and stamina does not recover. Fists, tools and the bow cannot block.

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
