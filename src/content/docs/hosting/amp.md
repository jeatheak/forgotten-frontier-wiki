---
title: "Hosting with CubeCoders AMP"
description: "Add the AMP template, create an instance, configure the server from the AMP panel and update it."
verification: verified
sources: ["Server/AMP/forgottenfrontier.kvp", "Server/AMP/forgottenfrontierconfig.json", "Server/AMP/forgottenfrontierports.json", "Server/AMP/forgottenfrontierupdates.json", "Server/AMP/manifest.json", "Server/AMP/README.md", "Server/SERVER.md", "Server/FFServer/ServerConfig.cs"]
---

[CubeCoders AMP](https://cubecoders.com/AMP) can host the [dedicated server](/hosting/dedicated-server/) with a
ready-made template. The template downloads the server, runs it with the settings from the AMP panel, notices when it is
ready and who joins and leaves, and stops it cleanly so the world is saved.

## Adding the template

1. In AMP open **Configuration → Instance Deployment → Configuration Repositories**.
2. Add `jeatheak/forgotten_frontier_amp:main` and press **Fetch**.
3. Refresh the page and create a new instance of **FF / The Forgotten Frontier**.
4. Open the game port (**TCP 2456** by default) in AMP's firewall and forward it on your router.
5. Press **Update** once to download the server, then **Start**.

The template and the game's downloads live in the same repository,
[jeatheak/forgotten_frontier_amp](https://github.com/jeatheak/forgotten_frontier_amp).

### Moving from the old repository

Templates up to version 5 came from `jeatheak/forgotten-frontier-releases`, which is retired. AMP cannot update an
instance from a repository with a hyphen in its name, so replace that configuration repository with
`jeatheak/forgotten_frontier_amp:main` and press **Fetch**. Then either create a new instance and copy the old
instance's `forgottenfrontier/saves` folder into it (with both instances stopped), or keep the old instance and set its
**Download Location** to the new address below.

## Settings

All of these are on the instance's settings page and are passed to the server on every start.

| AMP setting | Server option | Default | Notes |
| --- | --- | --- | --- |
| Server Name | `-name` | The Forgotten Frontier | Shown to players when they join. |
| Server Password | `-password` | (none) | Set one when the port is open to the internet. |
| Player Limit | `-maxplayers` | 4 | 1 to 16; the game is balanced for small groups. |
| Moderators | `-moderators` | (none) | Comma separated hero names or client ids. |
| Welcome Message | `-motd` | (none) | A line every player reads when they join. |
| World Name | `-world` | vale | A new name starts a new world; the old one is kept. |
| World Seed | `-seed` | 0 | For a new world only (0 = random). |
| Difficulty | `-difficulty` | Normal | Builder, Easy, Normal or Hard (Hardcore plays as Hard). |
| Autosave | `-autosave` | 5 | Minutes between world saves. |
| Backups | `-backups` | 5 | Older copies of the world file kept. |
| Backup Interval | `-backupminutes` | 30 | Minutes between backups. |
| Download Location | | `https://github.com/jeatheak/forgotten_frontier_amp/releases/latest/download` | Where **Update** fetches `FFServer-win-x64.zip` / `FFServer-linux-x64.zip`. |

The game port is AMP's **Game Port** (TCP, 2456 by default).

## Running it

- **Update** downloads the latest stable server. Draft and prerelease betas do not replace that download; beta testing
  requires manually selecting the matching game and server packages. Update the instance whenever a new stable game version is released: the game and
  the server must be the same version.
- **Stop** sends the server's `stop` command, which saves the world before it quits. From v0.23.0
  players are told the server is restarting, and their game offers **Rejoin** and keeps trying for about a minute.
- The console accepts every [server command](/hosting/dedicated-server/#console-commands).
- AMP's player list offers **Kick**, **Ban**, **Make Moderator** and **Remove Moderator** for anyone online. Moderators
  made this way last until the server restarts; put them in the **Moderators** setting to keep them.
- The world files are in the instance's `forgottenfrontier/saves` folder; back that folder up to keep your world.
