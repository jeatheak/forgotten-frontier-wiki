---
title: "Creatures of the frontier"
description: "Recognize attacks and prepare for the wilderness."
verification: verified
sources: ["Assets/Scripts/Enemies/Stalker.cs", "Assets/Scripts/Enemies/Charger.cs", "Assets/Scripts/Enemies/Hollow.cs", "Assets/Scripts/Enemies/Spider.cs", "Assets/Scripts/Enemies/Greyhorn.cs", "Assets/Scripts/Enemies/Enemy.cs", "Assets/Scripts/Enemies/EnemySpawner.cs", "Assets/Scripts/World/WorldBuilder.cs", "Assets/Scripts/World/Lands.cs"]
---

Each creature has its own reference page with health by level and difficulty, attack values, drop chances and elite modifiers. Select a name below for the full details. Portraits use the real game models, staged in-game for clarity.

| Creature | Behaviour and response |
| --- | --- |
| Stalker | Circles, then lunges. Evade or parry the committed strike and use its recovery window. Higher-level names include Frontier Stalker and Courtyard Stalker. |
| Charger | Telegraphs a charge and can stun itself against obstacles. Keep clear of its headbutt and charge line; at close range leave the marked circle before its 360-degree stomp knocks you back. The strongest variant is an Elder Charger. |
| Hollow | Undead warrior that guards with a shield, attacks in a pair (both blows are marked on the ground) and leaps at distant prey. Heavy blows break its guard; light blows and arrows glance off the shield. Its blade carries grave rot. |
| Mire Spider | Keeps distance, spits slowing webs and darts in to bite. Higher-level spiders are Bog Weavers. Carry Bogwalker's Balm. Every spider carries spider silk. |
| Greyhorn | Grazing herd animal with bull variants. Hunt with care; an old bull is more dangerous than ordinary prey. |

In the current source (v0.28.0, not released yet) the Underhearth's Ashen Wilds have three creatures of their own: the
**Ashhound** (a fireproof pack hunter of the ash), **the Kindled** (burning dead who set you alight and burst into flame
when they fall) and the **Ashhorn** (a great grazer that leaves you alone unless hurt). They have no reference pages
yet; see [the Underhearth](/world/underhearth/#creatures).

Creatures in the outer lands (the four outer regions, the coast and, since v0.25.0, the Skerries) are tougher than in the Vale, by their land's [danger tier](/biomes/) (since v0.27.0: from ×1.35 health and ×1.25 damage in Birchwood to ×1.9 and ×1.65 in the Highlands and the Skerries; more elites, bigger packs, and they follow further). The deep lands also send [hunting packs](/biomes/#packs-hunts-and-pursuit) after a hero who lingers. At night the drowned (Hollows) rise on the beach of Wrecker's Holm. Barrow Hollows and Hollow Thanes are stronger Hollow variants. Crypts have their own defenders, including wardens. Elite creatures carry additional modifiers; read their names and warnings rather than treating them as ordinary encounters.

From v0.24.0 creatures see ahead and hear all round, so a hero who sneaks can strike first for triple
damage, and each kind is weak to one kind of blow (crushing, cutting or piercing); several also resist another. Each
reference page lists them; see [sneaking and damage types](/mechanics/#sneaking-and-damage-types).

The reference pages separate ordinary creatures from difficulty and elite modifiers. [Difficulty](/mechanics/difficulty/) · [Ancient Guardian](/bosses/).
