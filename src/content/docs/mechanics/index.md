---
title: "Survival and combat"
description: "The systems that keep a wanderer alive."
verification: verified
sources: ["Assets/Scripts/World/LightLod.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Player/PlayerCombat.cs", "Assets/Scripts/Enemies/Enemy.cs", "Assets/Scripts/Enemies/Spider.cs", "Assets/Scripts/Player/PlayerVisual.cs", "Assets/Scripts/Core/Skills.cs", "Assets/Scripts/Core/Guide.cs", "Assets/Scripts/World/DayNight.cs", "CHANGELOG.md", "Assets/Scripts/Enemies/Charger.cs", "Assets/Scripts/Core/GameManager.cs", "Assets/Scripts/World/Stations.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/Player/ArrowShot.cs", "Assets/Scripts/Enemies/Enemy.cs", "Assets/Scripts/Enemies/Greyhorn.cs", "Assets/Scripts/Player/BuildSystem.cs", "Assets/Scripts/UI/HudView.cs", "Assets/Scripts/Player/StealthLight.cs", "Assets/Scripts/UI/UIRoot.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/Core/Settings.cs"]
---

<div class="gallery-grid"><figure><a href="/images/torchlight-v016.webp" aria-label="Open full-size image: Carry a light when you head into the night."><img src="/images/torchlight-v016.webp" alt="Carry a light when you head into the night." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Carry a light when you head into the night.</figcaption></figure><figure><a href="/images/stalker-v016.webp" aria-label="Open full-size image: A Stalker, photographed in a staged in-game encounter."><img src="/images/stalker-v016.webp" alt="A Stalker, photographed in a staged in-game encounter." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>A Stalker, photographed in a staged in-game encounter.</figcaption></figure></div>

Health keeps you alive; stamina pays for strenuous actions, attacks and evasions. Avoid spending your last breath before a creature strikes. Food improves stamina and recovery, and healing supplies help you recover from mistakes.

Watch a creature's windup, evade or block the committed attack, then use its recovery window. Stagger and Exposed states create openings. The spear and blades support weapon arts. Relics add further abilities.

## Moving and swinging

*Changed in v0.26.0, after a closer look at how Valheim moves its players.*

You **jog at 4.8 m/s** and **sprint at 7 m/s**; Running practice adds up to 12% to the sprint, and sprinting drains
10 stamina a second. Stalkers and spiders run faster than a jog but slower than a sprint. Movement has momentum: you
take about a fifth of a second to reach a jog and a little longer to stop, and a run turns in a curve, wider the faster
you go. Turning right round at a sprint brakes first. A **jump** rises about 1.45 m; out of breath you only hop. A
drop of up to 4 m is free.

A swing goes for the creature most in front of you: the way you push the stick or keys, or with no direction held,
where the camera looks. It keeps turning after that creature through the wind-up and the blow, and it strikes through
the whole of the swing, so a creature that steps in a moment late is still hit. A blow reaches a creature's body, not
only its middle: the flank of a big beast counts.

**Rolling** costs **16 stamina** (less with Wolf's Stride) and needs all of it (since v0.27.0; it started on 8). A
perfect roll, through a blow just as it lands, gives back 60% of that. A roll and a Dash Strike run out as usual while
the satchel or the map is open (before v0.27.0 they kept you untouchable for as long as a menu stayed open).

**Walls, doors and floors are cover** (since v0.27.0): a blow, yours or a creature's, does not reach through them, and
neither does a Dash Strike or a spider's web (trees and rock stop a web too). Ground slams still carry through: a
Charger's stomp, a Hollow's slam and the Guardian's slam.

## Sneaking and damage types

*New in v0.24.0.*

**Creatures look and listen.** They see what is in front of them (about 70° to either side), out to their noticing
range, but never through rock, trunks or walls. They hear all round, through walls too, as far as your noise carries:
standing still is nearly silent, walking carries about a third of their range, jogging about half and sprinting all of
it. Swings, rolls and hard landings are louder for a moment; chopping and mining carry further than their sight. A
creature right beside you always notices. One that notices you shows a **!** and calls the others of its kind within
9 m (more in the deeper lands, see [biomes](/biomes/#packs-hunts-and-pursuit)). For 20 seconds after a fight, or after
being hit, a creature looks all round.

**Losing them** (since v0.27.0). A creature hunting you keeps looking and listening for you all round. Once it can
neither see nor hear you it goes to where it last knew you were, and after **5 seconds** in the Vale (up to 11 in the
Highlands) it gives up: a **?** over it, a search of that spot, and back to its den. Before, it followed anywhere
within its leash. Break its sight (rock, trunks, walls) and go quietly to get away.

Press **Left Ctrl** (**L3** on a controller) to **sneak**. You crouch, move at about 1.8 m/s and make almost no noise.
How far creatures see a sneaking hero depends on the **light** on them: about three quarters of their range in open
sunlight, under half in shade (behind a rock, a wall or under a roof), at night or underground; with the Sneak skill at
100, two fifths in sunlight down to a fifth in the dark. Fires, lanterns and torches near you light you up, your own
torch too, and so does glowing gear (since v0.30.0: the Glowcap Circlet, the Emberlit Lamellar and the Wisp Rune), though
sneaking shades their light to under a third. An eye under the compass shows **HIDDEN** or **SEEN** (something is hunting you), and over each creature near
you a pale eye means it has not noticed you (gold: your next blow would be a sneak attack) and a red **!** means it is
hunting you. Sprinting, jumping, climbing, sitting or opening the build menu stands you up. Greyhorns let a sneaking
hunter come about half as close as a walking one.

![The hero crouched low in a forest clearing with a mace, an eye marked SEEN under the compass, and the status line reading Rested 5:43, Comfort 1.](/images/sneak-v024.webp)

*Sneaking, with the stealth eye under the compass (v0.24.0 development source).*

A blow on a creature that has not noticed anyone is a **sneak attack**: **×3 damage**, arrows included. The same
creature can be taken unawares only once every **5 minutes**; the Guardian never. The **Sneak** skill rises while you
sneak near unaware creatures and with each sneak attack; it makes you harder to see and up to 25% faster while sneaking.

**Damage types.** Clubs and fists **crush**, blades and axes **cut**, spears, picks and arrows **pierce**. A creature
takes **×1.5** from a kind it is weak to and **×0.7** from one it resists:

| Creature | Weak to | Resists |
| --- | --- | --- |
| Stalker | Cuts | — |
| Charger | Piercing | Crushing |
| Hollow | Crushing | Piercing |
| Mire Spider | Crushing | Cuts |
| Greyhorn | Piercing | — |
| Ancient Guardian | Crushing | Piercing |

Damage numbers turn orange on a weak spot and grey when resisted, and a short line says so now and then. The
journal's **Creatures** section lists every kind you have fought with what it suffers and shrugs off.

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

From v0.24.0 **up to three different meals** can be on the go at once, as in Valheim. Each adds
stamina and slow healing; its stamina fades as it wears off (still about three quarters with 40% of its time left). A
meal can be eaten again, or a fourth dish take the place of the one nearest its end, once it is **half gone**. The
status line lists each meal and its time left (dimmed once it may be replaced), and a meal's details in the inventory
show its stamina, healing and how long it lasts. Each meal gives about 60% of what a single meal gave in v0.23.0, so
three good meals reach about 180 stamina. Before v0.24.0 only one meal could be active at a time. From v0.25.0 the
Skerries add two meals: **Egg Bannock** (much stamina for 11 minutes) and **Steamed Mussels** (light, but it heals well).

Stamina recovers faster the emptier the bar: twice as fast from empty as when nearly full (v0.24.0).

**Falls** go by height (v0.24.0): up to **4 m** is free, then the damage rises evenly to **100 at 20 m**;
landing in water softens it. Armour does not help.

Sleeping through the night in your own claimed bed grants Rested, as does
resting by the fire or listening to the lute. Another hero's bed is unavailable, even at night.

Rested speeds stamina recovery and, from v0.24.0, makes every skill learn **25% faster**. How long it
lasts depends on **comfort** where you rest: **8 minutes**, plus **1 minute per comfort level** above 1. See
[comfort](/mechanics/building/#comfort).

The torch still hits and sets creatures alight, but has only **25 base durability**. It wears down while held and
when used; save a real weapon for sustained fighting. Repair a burned-out torch at a workbench.

At close range a Charger can stomp in every direction, knocking nearby heroes back. Leave the marked circle
during its 1.05-second warning, then use its recovery window.

## Blocking and parrying

Hold **right mouse or C** to guard; **middle mouse** (or **V** from v0.23.0) performs a heavy attack. Both can cancel a bow draw. Shift only
sprints; use Left Alt or mouse button 4 to dodge. Controller bindings are unchanged.

With a **club, spear or blades** in hand, hold **RMB or C** (LT on a controller) to guard. A blow from the front (within **70°** to either side of where you face) is mostly stopped; blows from the side or behind get through. In front a club stops **70%**, a spear **60%** and blades **50%** (less with a broken weapon). Each blocked blow costs stamina (4 plus 90% of the blow's damage, less with weapon skill); with too little stamina the guard breaks, more gets through and you are thrown off balance. While guarding you move at half speed and stamina does not recover. Fists, tools and the bow cannot block.

Raise the guard **just as the blow lands** (within a quarter of a second) to **parry**: nothing gets through and the attacker reels, Staggered and Exposed. Since v0.27.0 a parry costs a little stamina (3 plus 35% of the blow's damage, less with weapon practice) and wears the weapon; out of breath, or with a broken weapon, a guard raised in time only blocks. Raising it again straight after lowering it gives no parry window. Mira's lesson, the **Riposte**, adds a counter-blow to every parry.

<div class="gallery-grid"><figure><a href="/images/guard-v017.webp" aria-label="Open full-size image: Guarding with a club (staged close-up, v0.17.0)."><img src="/images/guard-v017.webp" alt="Guarding with a club (staged close-up, v0.17.0)." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>Guarding with a club (staged close-up, v0.17.0).</figcaption></figure><figure><a href="/images/shimmer-v017.webp" aria-label="Open full-size image: A masterwork weapon's shimmer in the hand (staged close-up, v0.17.0)."><img src="/images/shimmer-v017.webp" alt="A masterwork weapon's shimmer in the hand (staged close-up, v0.17.0)." width="1280" height="720" loading="lazy" decoding="async" /></a><figcaption>A masterwork weapon's shimmer in the hand (staged close-up, v0.17.0).</figcaption></figure></div>

**Dash Strike** is not known at the start: it is learned once any fighting skill (Unarmed, Clubs, Spears, Blades or Archery) reaches **10**. It then sits on **F** (LB) with a 4-second cooldown. From v0.26.0 it costs **20 stamina** (less with practice in the weapon in hand), is refused when you have less, and carries you about 4.5 m (it was free and went 7.5 m). The blades' **Shadow Step** costs 22 stamina (less with practice) and needs all of it to start; heavy attacks and weapon arts likewise need their whole stamina cost, while a light swing starts on less.

Good, Fine and Masterwork **weapons** shimmer in the hand in their quality colour; tools and armour do not. Buffs show faintly on the hero: honed, rested, each tonic and the Gale and Ember relics.

Skills improve by doing their associated activities and range from **0 to 100**: Woodcutting, Mining, Foraging, Farming, Cooking, Smithing, Running, Unarmed, Clubs, Spears, Blades, Archery, Building and (from v0.24.0) Sneak.

The sun rises at 06:00 and sets at **20:00**; full dark comes a little after, and creatures grow bolder from about 20:40 until dawn.

Now and then your hero **thinks out loud**: one quiet line at the bottom of the screen about what might come next, such as a tool, a bed before nightfall, the trader or a land not yet walked. Each thought comes once and never in a fight; Settings > Gameplay > Hero's thoughts turns them off. They are hints, not quests.

Inventory, crafting and map screens leave the world running. The pause menu stops single player; online play keeps running. Creature health bars can be disabled under Settings > Gameplay. From v0.24.0 Settings > Video also has **Distance blur** (far scenery softly out of focus; nothing within 60 m) and **Colour fringe** (a faint chromatic edge towards the corners), both on by default. From v0.25.0 the **Ultra** shadow setting also lets the nearest fire within 18 m cast soft shadows.

Since v0.28.0 the Underhearth has the opposite hazard, **heat**: lava burns and the
air beside it scorches; see [the Underhearth](/world/underhearth/#heat).

Out on the sea and the Skerries the **sea wind** chills you at night, in rain and in storms, like the Highland cold;
see [the sea wind](/world/skerries/#the-sea-wind).

- [Controls and hotbar](/mechanics/controls/)
- [Difficulty and death](/mechanics/difficulty/)
- [Building and storage](/mechanics/building/)
- [Farming](/mechanics/farming/)
- [Online co-op](/mechanics/co-op/)
- [Biome preparation](/biomes/)
