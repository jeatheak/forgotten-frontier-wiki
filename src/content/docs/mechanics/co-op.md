---
title: "Online co-op"
description: "Join a shared world and understand what travels with your hero."
verification: verified
sources: ["Assets/Scripts/Net/NetSession.cs", "Assets/Scripts/Net/NetSession.World.cs", "Assets/Scripts/World/Stations.cs", "Assets/Scripts/Core/SaveSystem.cs", "Assets/Scripts/Core/Guide.cs", "Assets/Scripts/Net/NetHud.cs", "Server/FFServer/GameServer.cs", "Server/SERVER.md", "CHANGELOG.md", "Assets/Scripts/UI/Screens.cs"]
---

Choose **Join a world** on the title screen. Select a hero or **+ New hero**, then enter the host address and password. The address accepts `host` or `host:port`; the default port is **2456 TCP**. Your game and server must have matching versions. Servers default to four players and can be configured for 1–16.

Your hero brings their bag, equipment, skills and perks, and takes discoveries and belongings home. The server remembers the hero's position for the next visit. Shared-world saves preserve that hero's own single-player world separately.

## Shared world

Buildings, beds, gardens, chests, station work, drops, fallen satchels, creatures, story progress, map exploration, time and weather are shared. Trees falling, rocks breaking and plants being picked are visible to everyone. Gathering rewards go to the player who did the work; creature loot goes to the killer. Each hero has their own satchel room and silver. The chests' room is shared: it depends on how many chests the world has.

When two players reach for the same thing at the same moment (a piece of gear in the chests, the last of a stack, the bars in a bloomery or a station's load), the first hand gets it; the other is told someone was quicker and gets back what they paid. Your hero arrives wearing what they wore and with their hotbar as they left it. The hero's thoughts, the lands a hero has walked and the hints they have learned are each hero's own. Only moderators can change the server's clock.

Nothing pauses online, and the Escape menu has no Save: your hero is saved as you play and when you leave, and the server keeps the world. The server's clock advances while someone is connected. Everyone must be in bed to skip the night. Downed heroes can be helped up. Enter opens chat; on a controller hold D-Up for quick chat. Music from a lute rests nearby listeners.

![Two heroes beside the home campfire with a remote name plate and party health bar.](/images/coop-v0.15.png)

*Co-op in v0.15.0; the current chat presentation changed in v0.16.0.*

![The co-op chat log with moderator and server lines, and the SAY line for typing directly beneath it.](/images/chat-v018.webp)

*Co-op chat in v0.18.0: the line you type sits under the log.*

## Moderators and commands

A server can name **moderators** (by hero name or by client id). They show as **[MOD]** by their name. Type a line starting with **/** in the chat to send a command to the server; its answer appears only in your own chat log.

| Command | Who |
| --- | --- |
| `/players` (or `/who`), `/help`, `/mods` | Everyone |
| `/kick <name> [reason]`, `/ban <name>`, `/unban <name>`, `/bans`, `/say <text>`, `/save` | Moderators |

Moderators cannot remove each other. A banned hero cannot rejoin that server. Server hosts set moderators and a welcome message in the server settings.

The server's difficulty applies to all heroes. New sagas begin in a hero's own Vale. [Difficulty and death](/mechanics/difficulty/).
