---
title: "Controls and hotbar"
description: "Keyboard and mouse bindings and controller shortcuts."
verification: verified
sources: ["Assets/Scripts/Player/Coracle.cs", "Assets/Scripts/Core/InputSource.cs", "Assets/Scripts/Core/DevTools.cs", "Assets/Scripts/UI/SettingsScreen.cs", "Assets/Scripts/UI/UIKit.cs", "CHANGELOG.md", "Assets/Scripts/Player/BuildSystem.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/Core/GameManager.cs", "Assets/Scripts/World/Ladder.cs", "Assets/Scripts/UI/GameMenu.cs", "Assets/Scripts/UI/GameMenuTabs.cs", "Assets/Scripts/UI/StorageScreen.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/Player/PlayerCombat.cs"]
---

<div class="gallery-grid"><figure><a href="/images/inventory-v016.webp" aria-label="Open full-size image: Historical inventory and hotbar layout in v0.16.0."><img src="/images/inventory-v016.webp" alt="Historical inventory and hotbar layout in v0.16.0." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Historical inventory and hotbar layout in v0.16.0.</figcaption></figure><figure><a href="/images/crafting-v016.webp" aria-label="Open full-size image: Keyboard prompts are shown along the bottom of the crafting screen."><img src="/images/crafting-v016.webp" alt="Keyboard prompts are shown along the bottom of the crafting screen." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Keyboard prompts are shown along the bottom of the crafting screen.</figcaption></figure></div>

| Action | Keyboard / mouse |
| --- | --- |
| Move / look | WASD / mouse |
| Jump | Space |
| Light / heavy attack | Left / middle mouse button (v0.23.0 also V for heavy) |
| Block (hold); parry by raising it as the blow lands | Right mouse button or C |
| Dodge | Left Alt or mouse button 4; Shift only sprints |
| Sprint | Hold Left Shift |
| Sneak (crouch) on / off | Left Ctrl (from v0.24.0) |
| Interact | E |
| Weapon art | Q |
| Dash Strike (once learned) | F |
| Drink / eat | R / G |
| Inventory | Tab or I |
| Map | M |
| Build mode (opens on the piece menu; B or Tab shows / hides the menu) | B |
| Build: place freely, without snapping | Hold Left Shift |
| Climb a ladder / let go | Walk into it or E, then W / S; Space |
| Pause / back | Escape |
| Controls help | F1 |
| Sort bag or stash | Z |
| Hotbar | 1–5 |
| Co-op chat | Enter (start a line with / for server commands) |

In a **coracle** (v0.25.0) the movement keys or the left stick paddle and Sprint (Left Shift, or hold B) paddles hard for stamina; paddle into the shallows to step out. See [the coracle](/world/skerries/#the-coracle).

Use the in-game Controls page for the complete context-sensitive controller reference. On a controller, tap B to roll and hold it to sprint. From v0.24.0 **L3 crouches to sneak**; it no
longer toggles the sprint. In co-op, hold D-Up for quick chat; tap D-Up to drink. L3 sorts the bag or stash. RT is the light attack and Y the heavy attack; **hold LT to block** with a club, spear or blades (with fists, tools or the bow, LT is the heavy attack). LB is Dash Strike once learned.

In build mode (since v0.19, as in Valheim) **B** opens on the piece menu with the mouse pointer: hover a piece to read it, click it to pick it (the menu folds away and you aim again) or click a tab to switch. **B** or **Tab** brings the menu back and puts it away again; **Escape** leaves build mode. The number keys 1–5 pick from the row being chosen from, and the wheel (or the d-pad) steps through the pieces. Hold **Left Shift** (L3 on a controller) to place a piece without snapping it to the piece you aim at.

On a controller, focus a hotbar cell and press **A** to use/equip it, **X** to return it to the satchel, or **Y**
for drop/destroy options. Focus spare gear and press X, then choose a hotbar slot with left/right and confirm with A.
Equipped gear remains accessible through the equipment diamonds. Full satchels must have space before clearing a
hotbar slot or removing gear. The **Money pouch** button opens deposit and withdrawal choices. Since **v0.22.0**,
the button itself shows the current silver balance and updates after transfers or spending.

On the map, click to add a pin. With a controller, move the cursor with the **right stick** and press **X** to add
one. Select a pin for its label, waypoint toggle or removal. In **v0.22.0**, clicking an existing custom pin opens
its options; **right-click** removes it. Right-click a death-satchel marker to hide it on the map and compass while
leaving its loot available. Controllers use the map's **Hide satchel** list buttons. The cursor appears only in
controller mode. At most two waypoint pins appear on the compass;
home is always marked. Storage filters use the Filter button or **LT / RT**.

The game draws its own mouse pointer, a bronze arrowhead, wherever a menu wants the mouse.

Drag a tool, weapon or supported consumable from the satchel onto a hotbar slot. Since **v0.22.0**, drag a hotbar
item back onto the satchel to return it; right-click a slot or use its controller Return action for the same result.
Returning a held weapon also unequips it. A full satchel refuses the whole change, preserving the binding and equipment.
Hotbar hover stays highlighted like other inventory cells. Consumables on the bar are used when their key is pressed.
One stack of up to 20 is reserved outside the satchel; additional stacks stay in the bag.

**Bow controls:** hold **left mouse** (RT) to draw, then release to shoot. **Right mouse** (LT or Y)
cancels. Exhaustion also cancels, without firing or spending an arrow. Release the draw button before starting again
after cancellation. A brief left click still releases a quick weak shot once the arrow is nocked.

**v0.22.0** moves heavy attack to middle mouse and block to right mouse. Right mouse still
cancels bow draws; middle mouse or C also cancels. Controller bindings are unchanged. Equipment-slot hover now avoids
the character preview's glow and rotation area.

**v0.23.0:** **V** is also a heavy attack (and cancels a bow draw), for keyboards and laptops without a
middle mouse button. On a controller, the right stick scrolls the changelog and the controls tables.

In release builds, start with **-ffdev** to show **F3 → Developer**. Developer tools are disabled online. God mode keeps health and stamina full, with no stamina spent by actions.
The fly toggle permits flight: press jump to take off, hold Space/A to rise, Ctrl/L3 to descend, and Shift/B-hold to
fly faster. Touching down returns to ordinary walking, including downhill slopes; jump again to resume flying.

![Inventory with a persistently highlighted hotbar bow and the Money pouch button showing 123 silver.](/images/inventory-pouch-v0211.webp)

*Hotbar focus and the current pouch balance, staged in v0.21.1 beta.*


![A full satchel has exactly fifteen occupied cells; worn headgear and a hotbar club sit outside it, and controller focus compares the spare cap with the worn one.](/images/inventory-v020.webp)

*Accurate 15/15 satchel slots, equipment comparison and controller prompts, staged in v0.20.0.*

![Inventory with the main-hand equipment slot highlighted and the pouch showing 123 silver.](/images/inventory-hover-v022.webp)

*Real gameplay capture, staged in v0.22.0.*
