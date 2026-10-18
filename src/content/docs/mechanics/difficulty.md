---
title: "Difficulty and death"
description: "Choose how dangerous the Vale is and what happens when you fall."
verification: verified
sources: ["Assets/Scripts/Core/Difficulty.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Enemies/Enemy.cs", "Server/SERVER.md", "Assets/Scripts/World/Interactables.cs", "Assets/Scripts/UI/GameMenuTabs.cs", "Assets/Scripts/UI/HudView.cs", "Assets/Scripts/Core/SaveSystem.cs"]
---

Choose difficulty when creating a hero. In that hero's own world it can later be **raised, never lowered**. Older saves without a difficulty field use Easy.

| Difficulty | Creature health / damage multipliers | On death |
| --- | --- | --- |
| Builder | 1 / 1; peaceful spawners | Keep gear; carried stacks wait in a satchel |
| Easy | 1 / 1 | Keep gear; carried stacks wait in a satchel |
| Normal | 1.1 / 1.12 | Carried items and gear wait in a satchel |
| Hard | 1.3 / 1.35 | Lose carried belongings except weapon and chest armour, which wait in a satchel; lose 10% of skills |
| Hardcore | 1.3 / 1.35 | Permanent hero loss; the saga ends |

Multipliers are difficulty factors before other creature modifiers; creatures born in the outer lands have ×1.3 health and ×1.2 damage on top (see [Biomes](/biomes/)). Builder holds the sun at noon and the sky clear. Greyhorns still graze, and the Guardian remains available for story progression.

In online co-op, the **server's difficulty** applies to everyone. Hardcore becomes Hard there; permanent death is a single-player rule. Retrieve recoverable belongings from the glowing satchel where you fell. Silver kept in the money pouch stays with the hero when they fall; loose silver follows the ordinary carried-item rules.

In **v0.22.0**, right-click a death-satchel map marker, or use its **Hide satchel** button on the map, to dismiss
its map and compass marker. This only changes that hero's marker visibility: the physical satchel and loot remain.
