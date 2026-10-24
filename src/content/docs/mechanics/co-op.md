---
title: "Online co-op"
description: "Join a shared world and understand what travels with your hero."
verification: verified
sources: ["Assets/Scripts/Net/NetSession.cs", "Assets/Scripts/Net/NetSession.World.cs", "Assets/Scripts/World/Stations.cs", "Assets/Scripts/Core/SaveSystem.cs", "Assets/Scripts/Core/Guide.cs", "Assets/Scripts/Net/NetHud.cs", "Server/FFServer/GameServer.cs", "Server/SERVER.md", "CHANGELOG.md", "Assets/Scripts/UI/Screens.cs", "Assets/Scripts/Core/Items.cs", "Assets/Scripts/Core/GameManager.cs", "Assets/Scripts/World/Crypt.cs", "Assets/Scripts/Player/PlayerController.cs", "Assets/Scripts/UI/JoinScreen.cs", "Assets/Scripts/Net/Shared/SaveTypes.cs", "Assets/Scripts/World/Crafting.cs", "Assets/Scripts/World/Farming.cs", "Assets/Scripts/Player/BuildSystem.cs", "Assets/Scripts/Net/NetSession.Enemies.cs", "Assets/Scripts/Enemies/Hunts.cs"]
---

Choose **Join a world** on the title screen. Select a hero or **+ New hero**, then enter the host address and password. The address accepts `host` or `host:port`; the default port is **2456 TCP**. Your game and server must have matching versions. Servers default to four players and can be configured for 1–16.

**v0.23.0:** the join screen lists up to four **recent servers** with their players,
latency, whether they need a password and whether their version matches yours; pick one to fill in its address and
password, or Forget it. While joining, the screen says what is happening (connecting, receiving the world, building
it), and a large world keeps arriving instead of timing out. A version mismatch says which side is behind; when your
game is older, an **Update** button appears on the join screen.

![The Join a world screen listing two recent servers: Our Vale with 0 of 4 playing, its latency and a password, and Old Friends shown offline.](/images/join-recent-v023.webp)

*Recent servers on the join screen, captured from the v0.23.0 development source against a local test server.*

**v0.22.0:** local adventures and each server now keep independent hero profiles. Equipment, supplies, satchel capacity,
skills, map pins and progress earned on a server stay on that server's profile. They do not replace your local hero.
On the first visit after upgrading, an existing hero record from that server is restored; a new server starts with
a one-time copy of the selected local hero. Later visits resume the separate server profile and position.

**v0.25.0:** a server profile belongs to the server's **world**, not to the address you typed. Joining one server as
`localhost` and as `127.0.0.1`, or by its name and by its IP address, now reaches the same profile (before, each address
made its own copy of your hero there). The profile you already have moves over the first time you join. A world started
anew on a server (a new world file) gives you a new profile.

Local saves are stored in `Saves/Local`; client profiles for each server are under `Saves/Servers` in the game's save
directory. Older local save files and their backup/recovery copies are copied into Local; the original files remain
available for recovery. This prevents future mixing; it cannot reconstruct belongings or worlds already overwritten
by an older version. The older v0.20 release used the earlier shared hero slot behavior.

## Shared world

Buildings, beds, gardens, chests, station work, drops, fallen satchels, creatures, story progress, map exploration, time and weather are shared. So are opened loot chests and washed-up crates, and the Keepers' light once someone kindles it (v0.25.0). A player out in a [coracle](/world/skerries/#the-coracle) is seen paddling it; each player needs their own boat. Since v0.28.0 a player riding the Keepers' lift in [the Underhearth](/world/underhearth/) is seen on its platform, the Underhearth's map fog is shared like the Vale's, a rekindled ward is lit for everyone, the Sealed Door sinks for everyone once someone wakes it, and the Cinder Wastes' vents roar at the same moment on every machine. Since v0.29.0 the Echo span over the Fallen Dominion's broken causeway stands for everyone once someone raises it. Trees falling, rocks breaking and plants being picked are visible to everyone. From v0.23.0 the server also remembers them until they grow back, so players who join later (or after a server restart) see them felled, broken or picked too. Gathering rewards go to the player who did the work; creature loot goes to the killer. Each hero has their own satchel room, map pins and silver pouch. Pouched silver uses no satchel space and can be withdrawn into loose stacks, then stored in the shared stash or dropped for someone else. The chests' room is shared: it depends on how many chests the world has.

When two players reach for the same thing at the same moment (a piece of gear in the chests, the last of a stack, the bars in a bloomery or a station's load), the first hand gets it; the other is told someone was quicker and gets back what they paid. Since v0.27.0 that includes taking down the same piece: only the first gets its refund. (Two players spending the very last of a chest's stack for two different things at the same instant can still both succeed.)

Since v0.27.0 the **bloomery and tanning rack** carry on for whoever joins or reconnects later: they get the work done
while they were away (it used to wait at the last load or take), counted by the world's clock, which stands still while
the server is down. **Garden beds** keep their growth and rain watering the same way. **Mira's batches** are kept by the
server: they survive the player who handed one over leaving, only that player's game does the work (the output goes
into the shared chests), and anyone else who takes over gets the rest back once. When the player who woke a **barrow
crypt** leaves, its dead and its Warden stay for those still below. **Hunting packs** follow the player they were sent
after and go with that player's game. Your hero arrives wearing what they wore and with their hotbar as they left it. The hero's thoughts, the lands a hero has walked and the hints they have learned are each hero's own. Only moderators can change the server's clock.

Nothing pauses online, and the Escape menu has no Save: your hero is saved as you play and when you leave, and the server keeps the world. The server's clock advances while someone is connected. Everyone must be in their own claimed bed (standing in a sheltered room, since v0.32.0) to skip the night; sleeping through grants Rested. Other heroes cannot sleep in or claim over that bed. Crypt gates wait for a player to open them after the first chamber is cleared, and their open state is shared. Downed heroes can be helped up. Enter opens chat; on a controller hold D-Up for quick chat. Music from a lute rests nearby listeners.

## Connection and rejoining (v0.23.0)

A line over the party list shows your latency to the server (green, amber or red); after a few seconds without word
from the server it turns into a connection warning, and after 25 seconds the game stops waiting. When the connection
is lost, choose **Rejoin** to go straight back in; a server that is restarting or updating is tried again for about a
minute, and Back stops trying. A player removed by a moderator sees **Removed from the server** instead, with the reason.
Joins, leaves and server announcements also appear in the chat log. A hero made in the seat of a forgotten hero starts
fresh on each server; they do not inherit the forgotten hero's server profile.

![A Disconnected dialog saying the server closed the connection and the hero has been saved, with Back to the title and Rejoin buttons.](/images/disconnected-rejoin-v023.webp)

*After a lost connection, Rejoin goes straight back in (v0.23.0 development source, local test server).*

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

Moderators cannot remove each other. A banned hero cannot rejoin that server (from v0.23.0 a ban also records their public address). Server hosts set moderators and a welcome message in the server settings.

The server's difficulty applies to all heroes. New sagas begin in a hero's own Vale. [Difficulty and death](/mechanics/difficulty/).
