---
title: "Building and storage"
description: "Raise a home, support upper storeys and use household materials."
verification: verified
sources: ["Assets/Scripts/Player/BuildSystem.cs", "Assets/Scripts/UI/HudView.cs", "Assets/Scripts/UI/StorageScreen.cs", "Assets/Scripts/Core/GameManager.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/World/Ladder.cs", "Assets/Scripts/World/Stations.cs", "CHANGELOG.md", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/Core/Gear.cs", "Assets/Scripts/Core/SaveSystem.cs"]
---

<div class="gallery-grid"><figure><a href="/images/stations-v016.webp" aria-label="Open full-size image: Stations placed around the homestead in a demonstration setup."><img src="/images/stations-v016.webp" alt="Stations placed around the homestead in a demonstration setup." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Stations placed around the homestead in a demonstration setup.</figcaption></figure><figure><a href="/images/homestead-v016.webp" aria-label="Open full-size image: The clearing where a new wanderer begins building a home."><img src="/images/homestead-v016.webp" alt="The clearing where a new wanderer begins building a home." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>The clearing where a new wanderer begins building a home.</figcaption></figure></div>

Enter build mode with **B** near the homestead. It opens on the **piece menu** with the mouse pointer: the pieces of the chosen tab (structure, crafting or furniture) five to a row, with the selected piece's description and cost (what you carry and what is in the chests) below. Click a piece and the menu folds away to the piece in hand while you aim; **B** or **Tab** brings the menu back. The number keys and the mouse wheel also step through the pieces without opening it. Align the placement preview, rotate it as needed and place it when the preview allows; the line at the bottom says whether it can be placed, how well it is supported and whether it has **snapped** to a piece. Escape leaves build mode. On a controller the whole grid stays on show and the d-pad picks (since v0.19).

<div class="gallery-grid"><figure><a href="/images/build-folded-v019.webp" aria-label="Open full-size image: Build mode in v0.19.0 with the menu folded to the piece in hand."><img src="/images/build-folded-v019.webp" alt="Build mode with the piece menu folded away: a small panel shows the Roof Corner and its cost, a red preview in the air, and hints for placing, rotating, Shift for no snapping and Tab or B for the build menu." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Build mode in v0.19.0 with the menu folded to the piece in hand.</figcaption></figure></div>

## Snapping

Since v0.19 a piece snaps to the piece you aim at and turns with it:

- A roof or gable aimed at a wall, a floor or stairs goes on the walls of **that storey**: aim at an upper floor to roof the top of a two-storey house. A roof aimed at a wall goes over the room the wall closes (the side with the floor and more walls); when that square is roofed, the next one aimed at the wall is an eave over the outside.
- **Roof Slopes** turn by themselves, the low eave onto a wall of the room, rising away from it, towards the slope behind (a ridge) or in line with the slope beside them. **Ridge Roofs** put their two eaves on the walls they span. A **Gable** turns to rise with the slope beside it. Rotating turns a piece on from where it snapped.
- A wall aimed near the end of a wall goes on beside it, in line; aimed at the top of a wall, it goes on top of it (the next storey). A floor aimed at the top of a wall is the deck of the next storey.
- Furniture and stations set down within reach of a wall turn their back to it and stand right against it.
- **Hold Shift** (L3 on a controller) to place freely, without snapping: storeys come from the height you aim at, and beams, posts and other snap pieces move on a finer 25 cm grid. The bar shows **FREE**.

## Ladders

<div class="gallery-grid"><figure><a href="/images/ladder-v019.webp" aria-label="Open full-size image: Climbing a Ladder leaned on a wall up to the upper floor (v0.19.0)."><img src="/images/ladder-v019.webp" alt="A hero climbing a narrow wooden ladder leaned against the log wall of a two-storey house, towards the open upper floor." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Climbing a Ladder leaned on a wall up to the upper floor (v0.19.0).</figcaption></figure><figure><a href="/images/step-ladder-v019.webp" aria-label="Open full-size image: Standing on top of a Step Ladder in the yard (v0.19.0)."><img src="/images/step-ladder-v019.webp" alt="A hero standing on the small platform on top of a free-standing step ladder, one storey above the meadow at the homestead." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>Standing on top of a Step Ladder in the yard (v0.19.0).</figcaption></figure></div>

Two ladders are in the Structure tab (since v0.19):

- The **Ladder** (3 Wood) is a narrow ladder one storey (3 m) tall. Aim at a wall, a post or the edge of an upper floor: it leans there, its foot on the ground or floor below. Stack another on top of it for the next storey.
- The **Step Ladder** (5 Wood) stands on its own anywhere, one storey tall, with a small platform on top: climb it to reach a roof or the top of a wall, and build from there.

Walk into a ladder at its foot (or press **E** beside it) to get on. Moving towards the rungs climbs up and away from them climbs down (W / S while you look at the ladder). At the top you step off onto the floor or the platform; walking towards a ladder from the floor above takes you down it. **Space** lets go. You can build while you climb.


<div class="gallery-grid"><figure><a href="/images/build-v017.webp" aria-label="Open full-size image: The build panel in v0.17.0: the whole Structure tab at once."><img src="/images/build-v017.webp" alt="The build panel in v0.17.0: the whole Structure tab at once." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>The build panel in v0.17.0: the whole Structure tab at once.</figcaption></figure><figure><a href="/images/build-pointer-v018.webp" aria-label="Open full-size image: The build panel in v0.18.0 with the pointer out (Tab): click a piece to pick it."><img src="/images/build-pointer-v018.webp" alt="Build mode with the piece panel on the right showing the Ridge Roof selected and its description, a red placement preview of the roof, and hints for picking a piece with the pointer." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>The build panel in v0.18.0 with the pointer out (Tab): click a piece to pick it.</figcaption></figure><figure><a href="/images/ridge-hut-v018.webp" aria-label="Open full-size image: A one-room hut under a Ridge Roof and Ridge Gables in v0.18.0."><img src="/images/ridge-hut-v018.webp" alt="A one-square log hut with a door, under a steep thatched Ridge Roof closed by a pointed plank Ridge Gable with crossed ridge horns." width="1600" height="900" loading="lazy" decoding="async" /></a><figcaption>A one-room hut under a Ridge Roof and Ridge Gables in v0.18.0.</figcaption></figure></div>

Buildings use structural support. Floors, walls, roofs and stairs let you build multiple storeys; unsupported placements need a stronger connection below. A roof piece beside another roof lines up with it, also over an eave or the middle of a wide house where no wall stands below; aim at the side of a roof to run it out sideways (from inside the house works too). Beams, posts and smaller snap pieces attach to nearby pieces.

## Roofs

For a hut of a single square, the **Ridge Roof** is a whole steep roof in one piece: two thatched sides meeting at a ridge over the middle (rotate it to turn the ridge). Close its two ends with **Ridge Gables**, pointed plank ends that sit on the walls under the ridge. Wider houses use Roof Slopes back to back, with Gables, Gable Walls and Roof Flats. Build stations, beds, chests and furnishings as your home grows.

The **tanning rack** may stand under a roof since v0.19, and needs one in bad weather: hides on a rack out in the rain do not cure until the rain stops.

Building draws materials from **your satchel and household chests**. The panel shows the combined amount. Removing a piece refunds its material cost: into your satchel, then into the chests if the satchel is full, and whatever is left is set down beside you.

Since v0.20, the piece grid scrolls within the screen while the description and cost stay visible. On a controller,
selecting a piece scrolls it into view. A **Chest** costs **10 Wood**, without flint. A **Woodpile** costs **100 Wood**;
take it down to recover the wood through the usual refund path.

## Storage

Every chest opens the one **household stash**, which holds **10 slots per chest** (up to 20 of a kind in a slot, one piece of gear a slot; with no chest built it still holds 10). Build another chest for more room. When the chests are full, Store materials moves what fits and the rest stays in the satchel. The stash is shared in online co-op.

Use the **Filter** button (LT / RT on a controller) to show All, Equipment, Materials, Consumables or Valuables
in both panes. Transfer and sorting keep the panes at their scroll positions. The free cells match actual capacity;
spare gear takes one slot, while worn gear and the hotbar stay outside the satchel.

Open **Money pouch** in the inventory to put loose silver away without using slots. Pouched silver can be spent
at the trader. Withdraw one, a stack of up to 20, or all that fits to move it to the stash or drop it for someone.
The pouch itself is personal and its silver stays with the hero when they fall.

Place station extensions close to their parent station to raise its level. [Station extensions](/crafting/) unlock better equipment and upgrades. Beds provide a home to return to; [garden beds](/mechanics/farming/) grow supplies.


![Home storage with a full 15-slot satchel, a shared stash and its quick category filter.](/images/stash-filters-v020.webp)

*Shared storage and accurate satchel slots, staged in v0.20.0.*


![The five-column build menu scrolls above fully visible Roof Corner details and cost.](/images/build-menu-v020.webp)

*Build menu with its description and cost fully on screen, staged in v0.20.0.*
