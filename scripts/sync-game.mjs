import { readFile, writeFile, mkdir, readdir, copyFile, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { referencePages } from './reference-pages.mjs';
import { qualities, gearValues, scalingStats, statLabels, display } from '../src/lib/equipment.mjs';

const wiki = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
const rootArg = args.indexOf('--game-root');
const game = path.resolve(rootArg >= 0 ? args[rootArg + 1] : path.join(wiki, '..'));
const check = args.includes('--check');
const read = p => readFile(path.join(game, p), 'utf8');
const hash = data => createHash('sha256').update(data).digest('hex');
const slug = s => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const clean = s => s.replace(/<[^>]+>/g, '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const str = (s, key) => {
  const match = s.match(new RegExp(`\\b${key}\\s*=\\s*("(?:\\\\.|[^"\\\\])*")`));
  return match ? JSON.parse(match[1]) : undefined;
};
const num = (s, key, fallback) => {
  const m = s.match(new RegExp(`\\b${key}\\s*=\\s*(-?\\d+(?:\\.\\d+)?)f?\\b`));
  return m ? Number(m[1]) : fallback;
};
const en = (s, key, type, fallback) => s.match(new RegExp(`\\b${key}\\s*=\\s*${type}\\.(\\w+)`))?.[1] || fallback;
// Walk balanced initializers; nested arrays/lambdas and braces inside strings must not end an entity.
function objects(source, type) {
  const result = [];
  const pattern = new RegExp(`new ${type}\\s*\\{`, 'g');
  for (let match; (match = pattern.exec(source));) {
    const start = pattern.lastIndex - 1;
    let depth = 0, quoted = false, escaped = false, line = false, block = false, end;
    for (end = start; end < source.length; end++) {
      const c = source[end], next = source[end + 1];
      if (line) { if (c === '\n') line = false; continue; }
      if (block) { if (c === '*' && next === '/') { block = false; end++; } continue; }
      if (quoted) { if (escaped) escaped = false; else if (c === '\\') escaped = true; else if (c === '"') quoted = false; continue; }
      if (c === '/' && next === '/') { line = true; end++; continue; }
      if (c === '/' && next === '*') { block = true; end++; continue; }
      if (c === '"') quoted = true;
      else if (c === '{') depth++;
      else if (c === '}' && --depth === 0) break;
    }
    if (depth) throw new Error(`Unclosed ${type} initializer`);
    result.push(source.slice(start, end + 1));
    pattern.lastIndex = end + 1;
  }
  return result;
}
function switchStrings(source, method, type) {
  const body = source.split(`string ${method}(`)[1]?.split('};')[0];
  if (!body) throw new Error(`Cannot find ${type}.${method}`);
  return Object.fromEntries([...body.matchAll(new RegExp(`${type}\\.(\\w+)\\s*=>\\s*("(?:\\\\.|[^"\\\\])*")`, 'g'))].map(m => [m[1], JSON.parse(m[2])]));
}
function enumValues(source, type) {
  const body = source.match(new RegExp(`enum ${type}\\s*\\{([^}]+)\\}`))?.[1];
  if (!body) throw new Error(`Cannot find enum ${type}`);
  return body.replace(/\/\/[^\n]*/g, '').split(',').map(s => s.trim()).filter(Boolean);
}
const itemSource = 'Assets/Scripts/Core/Items.cs';
const gearSource = 'Assets/Scripts/Core/Gear.cs';
const recipeSource = 'Assets/Scripts/World/Crafting.cs';
const itemText = await read(itemSource), gearText = await read(gearSource), recipeText = await read(recipeSource);
const foundGearText=await read('Assets/Scripts/World/HallvardTrail.cs');
const names = switchStrings(itemText, 'Name', 'Item'), descriptions = switchStrings(itemText, 'Desc', 'Item');
const items = enumValues(itemText, 'Item').map(key => ({ id: `item:${key}`, kind: 'item', key, name: names[key] || key, description: descriptions[key] || '', source: itemSource, page: `equipment/items/${slug(key)}` }));
const gears = objects(gearText, 'GearDef').map(s => {
  const key = str(s, 'id');
  if (!key || !str(s, 'name')) throw new Error('Gear initializer is missing its id/name');
  const stats = Object.fromEntries(['tier', 'damage', 'chop', 'mine', 'speed', 'armor', 'poise', 'durability'].map(k => [k, num(s, k, { tier: 1, speed: 1, poise: 1, durability: 100 }[k] || 0)]));
  const gearKind=en(s,'kind','GearKind'), unique=/unique\s*=\s*true/.test(s);
  const foundQuality=unique?foundGearText.match(new RegExp(`GearDB.Get\\("${key}"\\), Quality\\.(\\w+)`))?.[1]||'Common':null;
  return { id: `gear:${key}`, kind: 'gear', key, name: str(s, 'name'), description: str(s, 'desc') || '', gearKind, upgradable: !unique&&!['Charm','Instrument'].includes(gearKind), slot: en(s, 'slot', 'GearSlot', 'MainHand'), material: en(s, 'material', 'Item'), unique, foundQuality, stats, source: gearSource, page: `equipment/gear/${slug(key)}` };
});
const recipeKeys = new Set();
const recipes = objects(recipeText, 'Recipe').map(s => {
  const gear = str(s, 'gear'), item = en(s, 'item', 'Item');
  const name = gear ? gears.find(g => g.key === gear)?.name : str(s, 'name');
  const station = en(s, 'station', 'Station');
  const cost = [...s.matchAll(/C\(Item\.(\w+),\s*(\d+)\)/g)].map(m => ({ item: `item:${m[1]}`, count: Number(m[2]) }));
  if (!name || !station || !cost.length) throw new Error('Unsupported recipe: update the exporter before syncing.');
  // two recipes for the same thing at one station (Lichen Tea makes Warming Draughts) keep apart by name
  let key = `${gear || item || slug(name)}-${station}`;
  if (recipeKeys.has(key)) key = `${slug(name)}-${station}`;
  recipeKeys.add(key);
  return { id: `recipe:${key}`, kind: 'recipe', name, station, count: num(s, 'count', 1), minLevel: num(s, 'minLevel', 1), result: gear ? `gear:${gear}` : item ? `item:${item}` : null, cost, conditional: /blocked\s*=/.test(s), forgeTier: Number((s.match(/Forging\.Why\((\d)\)/) || [])[1] || 0), description: str(s, 'desc') || '', source: recipeSource, page: `crafting/recipes/${slug(key)}` };
});
const entities = [...items, ...gears, ...recipes];
const byId = new Map(entities.map(e => [e.id, e]));
if (byId.size !== entities.length) throw new Error('Duplicate entity ids');
const link = id => { const e = byId.get(id); if (!e) throw new Error(`Unknown reference ${id}`); return `[${clean(e.name)}](/${e.page}/)`; };
const outputs = new Map();
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const stationNames = { Hand: 'By hand', Workbench: 'Workbench', HerbTable: "Herbalist’s table", Forge: 'Forge', Hearth: 'Hearth', Stonecutter: 'Stonecutter' };
const slotNames = { MainHand: 'Main hand', Head: 'Head', Chest: 'Chest', Shoulders: 'Shoulders', Arms: 'Arms', Charm: 'Charm' };
for (const e of entities) {
  const iconKey = e.kind === 'item' ? e.key : e.kind === 'gear' ? `gear_${e.key}` : e.result ? (e.result.startsWith('gear:') ? e.result.replace('gear:', 'gear_') : e.result.replace('item:', '')) : e.name === 'Ember Relic' ? 'RelicEmber' : 'Attunement';
  e.image = `/images/icons/${iconKey.replaceAll('_', '-').toLowerCase()}.png`;
}
const artwork = (e, className = '', lazy = true, decorative = false) => `<img class="${className}" src="${e.image}" alt="${decorative ? '' : escape(e.name)}" width="192" height="192" loading="${lazy ? 'lazy' : 'eager'}" decoding="async" />`;
const intro = (e, eyebrow, text = e.description) => `<div class="entity-intro"><div class="entity-art">${artwork(e, '', false)}</div><div><p class="eyebrow">${escape(eyebrow)}</p><p class="entity-description">${escape(text)}</p></div></div>`;
const cards = list => `<div class="entry-grid">${list.map(e => `<a class="entry-card" href="/${e.page}/">${artwork(e, '', true, true)}<span><strong>${escape(e.name)}</strong><small>${escape(e.kind === 'recipe' ? stationNames[e.station] + (e.minLevel > 1 ? ` · Level ${e.minLevel}` : '') : e.kind === 'gear' ? e.gearKind === 'Armor' ? 'Armour' : e.gearKind : e.kind==='station'?'Crafting station':e.kind==='creature'?'Creature reference':'Item')}</small></span><span class="entry-arrow" aria-hidden="true">↗</span></a>`).join('')}</div>`;
const ingredients = r => `<ul class="ingredient-list">${r.cost.map(c => { const item = byId.get(c.item); return `<li><a href="/${item.page}/">${artwork(item, '', true, true)}<span>${escape(item.name)}</span><strong><span class="sr-only">Quantity: </span>${c.count}</strong></a></li>`; }).join('')}</ul>`;
const badges = r => `<div class="recipe-meta">${r.station==='Hand'?'<span>By hand</span>':`<a class="station-badge" href="/${byId.get(`station:${r.station}`).page}/"><img src="${byId.get(`station:${r.station}`).image}" alt="" width="36" height="36" />${escape(stationNames[r.station])}</a>`}${r.station !== 'Hand' ? `<span>Station level ${r.minLevel}</span>` : ''}<span>${r.result ? `Makes ${r.count}` : 'One-time rite'}</span></div>`;
const craftPreview = r => `<section class="craft-preview"><div class="craft-preview-heading"><a href="/${r.page}/">${escape(r.name)}</a>${badges(r)}</div>${ingredients(r)}</section>`;
function page(file, title, description, sources, body) {
  outputs.set(`src/content/docs/${file}.md`, `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\nverification: verified\nsources: ${JSON.stringify(sources)}\n---\n\n<!-- Generated by scripts/sync-game.mjs. Edit the game or exporter, then sync. -->\n\n${body}\n`);
}
const table = (heads, rows) => `| ${heads.join(' | ')} |\n| ${heads.map(() => '---').join(' | ')} |\n${rows.map(r => `| ${r.join(' | ')} |`).join('\n')}`;
await referencePages({read,num,str,slug,page,table,entities,byId,outputs,ingredients,cards});
outputs.set('src/data/equipment-calculator.json',JSON.stringify({gears,items:items.map(({key,name,image,page})=>({key,name,image,page})),stations:entities.filter(e=>e.kind==='station').map(({key,name,image,page})=>({key,name,image,page}))},null,2)+'\n');
for (const e of items) {
  const made = recipes.filter(r => r.result === e.id);
  const used = recipes.filter(r => r.cost.some(c => c.item === e.id));
  page(e.page, e.name, `Uses and crafting for ${e.name}.`, [e.source, recipeSource], `${intro(e, 'Items & supplies')}\n\n## How to make it\n\n${made.length ? made.map(craftPreview).join('\n') : 'Gather, loot or obtain this item in the world. It has no direct crafting recipe.'}\n\n## What you can make\n\n${used.length ? cards(used) : 'This item is not an ingredient in the crafting recipe list.'}\n\n[Browse all items](/equipment/items/)`);
}
for (const e of gears) {
  const statLabels = { tier: 'Tier', damage: 'Damage', chop: 'Chopping', mine: 'Mining', speed: 'Attack speed', armor: 'Armour', poise: 'Poise multiplier', durability: 'Durability' };
  const relevant = Object.entries(e.stats).filter(([k,v]) => v > 0 && !(['Armor', 'Charm', 'Instrument'].includes(e.gearKind) && ['speed', 'poise', 'damage', 'chop', 'mine'].includes(k)) && !(e.gearKind === 'Charm' && k === 'durability'));
  const stats = `<dl class="stat-grid">${relevant.map(([k,v]) => `<div><dt>${statLabels[k]}</dt><dd>${v}${k === 'poise' ? '×' : ''}</dd></div>`).join('')}</dl>`;
  const scaling=e.gearKind==='Charm'?'Charms have fixed bonuses and cannot be upgraded.':e.unique?`Found at **${e.foundQuality}** quality, +0; it cannot be upgraded.\n\n${table(['Stat','Found value'],scalingStats(e).map(k=>[statLabels[k],display(gearValues(e,e.foundQuality,0)[k])]))}`:`Values below exclude skills, perks, buffs, wear and combat conditions. Stats are shown to two decimal places; maximum durability uses the game’s rounding. ${e.upgradable?'Upgrade levels +0 through +3 are shown.':'This instrument cannot be upgraded; quality only is shown.'}\n\n${scalingStats(e).map(k=>`### ${statLabels[k]}\n\n${table(['Quality',...Array.from({length:e.upgradable?4:1},(_,l)=>`+${l}`)],Object.keys(qualities).map(q=>[q,...Array.from({length:e.upgradable?4:1},(_,l)=>display(gearValues(e,q,l)[k]))]))}`).join('\n\n')}`;
  page(e.page, e.name, `Statistics by quality and upgrade level, plus crafting for ${e.name}.`, [e.source, recipeSource,'Assets/Scripts/World/Upgrades.cs','Assets/Scripts/World/HallvardTrail.cs'], `${intro(e, `${e.gearKind === 'Armor' ? 'Armour' : e.gearKind} · ${slotNames[e.slot]}`)}\n\n${stats}\n\n<p class="wiki-note">Common-quality base values. Skills, quality, upgrades and perks can change the final result.</p>\n\n## Quality and upgrade levels\n\n${scaling}\n\n[Calculate stats and upgrade materials](/equipment/calculator/?gear=${e.key})\n\n## Crafting\n\n${recipes.filter(r => r.result === e.id).map(craftPreview).join('\n') || 'This equipment is found in the world rather than crafted.'}\n\n[Learn about quality and upgrades](/equipment/)`);
}
for (const e of recipes) {
  const special = e.name === 'Coracle' ? 'You can carry only one coracle: the recipe is closed while one is in your bag.' : e.name === 'Ember Relic' ? 'Mira must first be recruited. This rite can only be performed once.' : e.name === 'Echo Attunement' ? 'A one-time rite; cannot be repeated once attuned.' : e.name === "Keepers' Key" ? 'Only after the Keepers’ trials: all four outer lands walked, a barrow Warden slain, a watchtower lit, and the Gale and Ember relics. One key at a time, and none once the Courtyard seal is broken.' : e.forgeTier === 4 ? 'Gear tier IV (ember steel, since v0.33.0): only once the Ancient Guardian has fallen and a ward stone of the Ashen Wilds burns again. See the rune forge guide.' : e.forgeTier === 5 ? 'Gear tier V (ashsteel, since v0.33.0): only once tier IV is open and the Dominion’s rite has been learned at the Last Forge in the Black City. See the rune forge guide.' : '';
  if (e.conditional && !special) throw new Error(`Explain recipe condition for ${e.name}`);
  page(e.page, e.name, `Recipe, ingredients and station for ${e.name}.`, [e.source], `${intro(e, 'Crafting recipe', e.description || byId.get(e.result)?.description || '')}\n\n${badges(e)}\n\n## Ingredients\n\n${ingredients(e)}\n\n${special ? `<p class="wiki-note">${escape(special)}</p>\n\n` : ''}${e.result ? `**Result:** ${e.count} × ${link(e.result)}.\n\n` : ''}<p class="wiki-note">Hold each ingredient at least once to discover the recipe. You also need the required station and level.</p>\n\n[Crafting guide](/crafting/) · [All recipes](/crafting/recipes/)`);
}
page('equipment/items/index', 'Items and consumables', 'Every stackable item in the current game source.', [itemSource], 'Materials for your next home. Food for your next journey. Explore every item and see what you can make with it.\n\n' + cards([...items].sort((a,b) => a.name.localeCompare(b.name))));
page('equipment/gear/index', 'Equipment catalog', 'Tools, weapons, armour, charms and instruments.', [gearSource], 'Choose your tools, find your fighting style and prepare for the wilds. Select a piece to see its stats and ingredients.\n\n' + [...new Set(gears.map(e => e.gearKind))].map(kind => `## ${kind === 'Armor' ? 'Armour' : kind}\n\n${cards(gears.filter(e => e.gearKind === kind))}`).join('\n\n'));
page('crafting/recipes/index', 'All recipes', 'Ingredients and station requirements for every crafting recipe.', [recipeSource], 'From your first flint axe to the old forge rites. Pick a recipe to see what you need.\n\n' + Object.entries(stationNames).map(([key,name]) => `## ${name}\n\n${cards(recipes.filter(e => e.station === key))}`).join('\n\n'));
const changes = (await read('CHANGELOG.md')).replace(/^# Changelog[\s\S]*?(?=^## )/m, '');
page('updates/index', 'Game updates', 'Player-facing game changelog, synchronized from the game.', ['CHANGELOG.md'], changes);

// Watch all gameplay code and player-facing docs so a change cannot silently bypass a freshness check.
async function files(dir) {
  const entries = await readdir(path.join(game, dir), { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? files(`${dir}/${e.name}`) : [`${dir}/${e.name}`]))).flat();
}
const watched = [...(await files('Assets/Scripts')).filter(p => p.endsWith('.cs')), ...(await files('Server/FFServer')).filter(p => p.endsWith('.cs') && !/\/(obj|bin)\//.test(p)), 'CHANGELOG.md', 'Server/SERVER.md'];
const sourceHashes = Object.fromEntries(await Promise.all(watched.sort().map(async p => [p, hash(await readFile(path.join(game, p)))])));
const images = JSON.parse(await readFile(path.join(wiki, 'src/data/images.json'), 'utf8'));
for (const entry of images) {
  const target = `public${entry.path}`;
  let bytes;
  try { bytes = await readFile(path.join(game, entry.source)); }
  catch (error) {
    if (error.code !== 'ENOENT') throw error;
    // Curated pictures are part of the wiki; raw capture sessions need not exist in every game checkout.
    bytes = await readFile(path.join(wiki, target));
  }
  sourceHashes[entry.source] = hash(bytes);
  outputs.set(target, bytes);
}
const version = (await read('Assets/Scripts/Net/Shared/SaveTypes.cs')).match(/const string Text\s*=\s*"([^"]+)"/)?.[1];
if (!version || !items.length || !gears.length || !recipes.length) throw new Error('Game extraction is incomplete');
let commit = null;
try { commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: game, encoding: 'utf8' }).trim(); } catch { /* source archive */ }
const manifest = { schemaVersion: 1, gameVersion: version, sourceCommit: commit, basis: 'Implemented local game source; working tree may contain unreleased changes.', sourceHashes, entities, generatedFiles: [...outputs.keys()].sort() };
outputs.set('src/data/game-manifest.json', JSON.stringify(manifest, null, 2) + '\n');
let previous;
try { previous = JSON.parse(await readFile(path.join(wiki, 'src/data/game-manifest.json'), 'utf8')); } catch { /* first sync */ }
let different = 0;
for (const [file, content] of outputs) {
  let current;
  try { current = await readFile(path.join(wiki, file)); } catch { /* new file */ }
  const expected = Buffer.isBuffer(content) ? content : Buffer.from(content);
  if (current?.equals(expected)) continue;
  different++;
  if (check) console.error(`Stale: ${file}`);
  else { await mkdir(path.dirname(path.join(wiki, file)), { recursive: true }); await writeFile(path.join(wiki, file), expected); }
}
for (const old of previous?.generatedFiles || []) {
  if (outputs.has(old)) continue;
  // Only prune generated Markdown; never delete arbitrary paths from a manifest.
  if (!/^src\/content\/docs\/[a-z0-9/_-]+\.md$/.test(old)) throw new Error(`Review obsolete output manually: ${old}`);
  different++;
  if (check) console.error(`Obsolete: ${old}`);
  else await unlink(path.join(wiki, old)).catch(e => { if (e.code !== 'ENOENT') throw e; });
}
if (check && different) { console.error('Review affected guides and images, run npm run sync, then validate and build.'); process.exitCode = 1; }
else console.log(`${check ? 'Fresh' : 'Synchronized'}: ${items.length} items, ${gears.length} equipment definitions, ${recipes.length} recipes; ${different} files changed.`);
if (check) {
  const { spawnSync } = await import('node:child_process');
  const result = spawnSync(process.execPath, [path.join(wiki, 'scripts/review-guides.mjs'), '--check', '--game-root', game], { stdio: 'inherit' });
  if (result.status !== 0) process.exitCode = 1;
}
