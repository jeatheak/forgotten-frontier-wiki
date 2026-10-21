---
title: "Farming and water"
description: "Plant garden beds and keep crops watered."
verification: verified
sources: ["Assets/Scripts/World/Farming.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/World/DayNight.cs", "Assets/Scripts/Net/NetSession.World.cs"]
---

Build a garden bed at home. Plant from the wild crops already in your bag: **flax, barley, moonpetals or redcaps**. A new planting needs water once before it grows: use a bucket, or let rain water an uncovered bed. Pale soil is dry; dark soil is watered.

Fill a bucket by wading into a stream or pond, or draw water from a well. Plants keep growing while time passes and while you sleep. Farming skill speeds growth and increases yields; a Green Day omen speeds growth further.

| Crop | Base time to ripen |
| --- | --- |
| Barley | 2 game days |
| Flax | 2.5 game days |
| Moonpetals | 3 game days |
| Redcaps | 2.75 game days |

These times are before Farming skill and omen modifiers, and exclude time spent waiting for water. A harvest that does not fit in the satchel is set down beside the bed. The planter's Farming skill is recorded when planting.

Since **v0.22.0**, growth durations and prompts use game days. Sleep advances growth, and existing plantings retain
their growth percentage when loaded. Since v0.27.0, in a shared world a bed carries on growing for a player who joins
or reconnects later (counted by the world's clock), and rain watering a bed is shared. The earlier v0.21.1 draft used shorter minute-based timers.

![A watered barley bed with the game HUD reporting that it will ripen in 2 game days.](/images/garden-days-v022.webp)

*Barley growing at its base day-based pace, staged in v0.22.0.*
