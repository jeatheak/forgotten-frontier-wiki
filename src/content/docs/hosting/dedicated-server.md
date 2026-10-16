---
title: "Dedicated server"
description: "Run FFServer on Windows or Linux: settings, server.json, console commands, saves and backups."
verification: verified
sources: ["Server/FFServer/ServerConfig.cs", "Server/FFServer/GameServer.cs", "Server/FFServer/Program.cs", "Server/SERVER.md", "Assets/Scripts/Net/Shared/NetProto.cs", "UPDATES.md"]
---

A shared world runs on **FFServer**, a small program that keeps the world while players bring their own heroes. It runs on
Windows and Linux (x64) and needs no .NET install. Players join it from **Join a world** on the title screen; see
[Online co-op](/mechanics/co-op/) for what is shared.

## Getting the server

Every game release includes `FFServer-win-x64.zip` and `FFServer-linux-x64.zip` on the
[releases page](https://github.com/jeatheak/forgotten_frontier_amp/releases). Unzip one anywhere and run `FFServer`
(`FFServer.exe` on Windows). **The server and the game must be the same version**: update the server with each game
release.

On the first start the server writes `server.json` next to itself with the default settings. Edit that file, or pass
options on the command line; options on the command line win over the file (this is how hosting panels such as
[AMP](/hosting/amp/) drive it).

```
FFServer -port 2456 -password secret -name "Our Vale" -maxplayers 4 -world vale -seed 0 -difficulty Normal
```

## Settings

| Option | `server.json` field | Default | What it does |
| --- | --- | --- | --- |
| `-port` | `port` | 2456 | The one **TCP** port players connect to. Forward it on your router to play over the internet. |
| `-password` | `password` | (none) | Players need it to join. Set one whenever the port is open to the internet. |
| `-name` | `name` | The Forgotten Frontier | Shown to players when they join. |
| `-maxplayers` | `maxPlayers` | 4 | Players at once, 1 to 16. The game is balanced for small groups. |
| `-world` | `world` | vale | The world's save file, `saves/<world>.json`. A new name starts a new world; old worlds stay on disk. |
| `-seed` | `seed` | 0 | Seed of a **new** world (0 picks one at random). An existing world keeps its own seed. |
| `-difficulty` | `difficulty` | Normal | Builder, Easy, Normal or Hard, for every hero who joins whatever their own. A change applies to an existing world at the next start. Hardcore plays as Hard on a server. |
| `-moderators` | `moderators` | (none) | Comma separated hero names or client ids. The log shows each player's client id when they join; an id cannot be borrowed, a name can. |
| `-motd` | `motd` | (none) | A welcome line every player reads in the chat when they join. |
| `-autosave` | `autosaveMinutes` | 5 | Minutes between world saves (at least 0.5). The world is also saved when the last player leaves and when the server stops. |
| `-backups` | `backups` | 5 | Older copies of the world file kept beside it (0 to 100); `vale.json.1` is the newest. |
| `-backupminutes` | `backupMinutes` | 30 | Minutes between backups (at least 1). One is also kept on the first save after each start. |
| `-savedir` | `saveDir` | saves | Where worlds, backups and the ban list go. |
| `-bind` | `bind` | 0.0.0.0 | The address to listen on (all addresses by default). |
| `-far` | `farMeters` | 260 | Players further apart than this many metres get each other's movement, and creatures twice as far off, at a third of the rate. 0 turns it off. |
| `-config` | | server.json | Read another settings file instead. |

A port outside 1–65535, a bind address that is not an IP address or an unknown difficulty is reported in the log and
replaced by the default, so a typo never stops the server.

## Console commands

Type these in the server window (or the console of your hosting panel). A player can be named by session id, client id
or name; a unique start of a name is enough.

| Command | What it does |
| --- | --- |
| `list` (`players`, `who`) | Who is online. |
| `status` | Uptime, players, traffic and memory. |
| `kick <player> [reason]` | Disconnects a player. |
| `ban <player, client id or IP>` | Bans and disconnects. An online player is banned by client id and hero name. |
| `unban <entry>` / `bans` | Lifts a ban / lists the bans. |
| `mod <player>` / `unmod <player>` / `mods` | Makes or unmakes a moderator until the server restarts (use the moderators setting to keep it) / lists them. |
| `say <text>` | A line from the server in everyone's chat. |
| `motd <text>` | Changes the welcome message. |
| `save` | Saves the world now. |
| `backup` | Saves and keeps a backup now. |
| `time <day> <0..1>` | Sets the clock (0.25 is dawn, 0.5 noon). |
| `stop` (`quit`, `exit`) | Saves and shuts down. Ctrl+C does the same. |
| `help` | Lists the commands. |

Moderators can use a part of this from the in-game chat (`/kick`, `/ban`, `/unban`, `/bans`, `/say`, `/save`); every
player can type `/players` and `/help`. Moderators cannot kick or ban each other; the console can.

## Saves and backups

Worlds are JSON files in the save folder (`saves/vale.json` by default). Each save replaces the file safely, and the
backups (`vale.json.1`, `.2`, ...) are kept on the backup interval. To move a world to another server, stop the server
and copy its world file. Bans are kept in `saves/bans.txt`, one per line.

The world's clock only runs while someone is connected. Heroes are saved in the players' own game, not on the server;
the server remembers where each hero was for their next visit.

## Playing over the internet

- Forward the game port (TCP 2456 by default) on your router to the machine running the server, and allow it through
  its firewall.
- Set a password.
- Players type your address as `host` or `host:port` in **Join a world**.
