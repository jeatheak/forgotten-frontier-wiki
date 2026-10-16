import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const wiki = fileURLToPath(new URL('../', import.meta.url));
const root = path.join(wiki, 'src/content/docs');
export async function pages(dir = root) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(e => e.isDirectory() ? pages(path.join(dir, e.name)) : /\.mdx?$/.test(e.name) ? [path.join(dir, e.name)] : []))).flat();
}
export function metadata(content, file) {
  const front = content.replaceAll('\r\n', '\n').match(/^---\n([\s\S]*?)\n---(?:\n|$)/)?.[1];
  if (!front) throw new Error(`Missing frontmatter: ${file}`);
  const field = name => front.match(new RegExp(`^${name}: (.+)$`, 'm'))?.[1];
  if (!field('title') || !field('description') || !['verified', 'review-needed', 'scaffold'].includes(field('verification'))) throw new Error(`Invalid metadata: ${file}`);
  let sources;
  try { sources = JSON.parse(field('sources')); } catch { throw new Error(`sources must be a JSON array: ${file}`); }
  if (!sources?.length || sources.some(s => typeof s !== 'string' || s.includes('..') || path.isAbsolute(s))) throw new Error(`Invalid source paths: ${file}`);
  return { sources, verification: field('verification') };
}
export async function validate() {
  const all = await pages();
  const routes = new Set(all.map(f => '/' + path.relative(root, f).replaceAll('\\', '/').replace(/\.mdx?$/, '').replace(/(?:^|\/)index$/, '')));
  const images = JSON.parse(await readFile(path.join(wiki, 'src/data/images.json'), 'utf8'));
  const imagePaths = new Set();
  for (const e of images) {
    if (!e.source || !e.version || !e.alt || !e.caption || !/^\/images\/(?:[a-z0-9-]+\/)*[a-z0-9.-]+$/.test(e.path) || e.path.includes('..') || imagePaths.has(e.path)) throw new Error('Invalid/duplicate image metadata');
    imagePaths.add(e.path);
    await access(path.join(wiki, 'public', e.path));
  }
  for (const file of all) {
    const content = await readFile(file, 'utf8');
    metadata(content, file);
    if (/verification: scaffold/.test(content)) throw new Error(`Unfilled scaffold: ${file}`);
    for (const m of content.matchAll(/<(img|a)\b[^>]*?\b(src|href)="([^"]+)"/g)) {
      const target = m[3].split('#')[0];
      if (m[1] === 'img') {
        if (!imagePaths.has(target)) throw new Error(`Uncatalogued image ${target}: ${file}`);
      } else if (target.startsWith('/') && !routes.has(target.replace(/\/$/, '') || '/') && !imagePaths.has(target)) {
        throw new Error(`Broken HTML page link ${target}: ${file}`);
      }
    }
    for (const m of content.matchAll(/(!?)\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)) {
      const target = m[2].split('#')[0];
      if (!target || /^(https?:|mailto:)/.test(target)) continue;
      if (m[1]) {
        if (!imagePaths.has(target)) throw new Error(`Uncatalogued image ${target}: ${file}`);
      } else {
        const from = '/' + path.relative(root, file).replaceAll('\\', '/').replace(/\.mdx?$/, '').replace(/\/index$/, '/');
        const route = new URL(target, `https://wiki.invalid${from.endsWith('/') ? from : from + '/'}`).pathname.replace(/\/$/, '') || '/';
        if (!routes.has(route)) throw new Error(`Broken page link ${target}: ${file}`);
      }
    }
  }
  const manifest = JSON.parse(await readFile(path.join(wiki, 'src/data/game-manifest.json'), 'utf8'));
  if (manifest.schemaVersion !== 1 || !manifest.gameVersion || !manifest.sourceHashes || !manifest.entities?.length) throw new Error('Incomplete game manifest');
  const ids = new Set();
  for (const e of manifest.entities) {
    if (!e.id || ids.has(e.id) || !e.name || !routes.has('/' + e.page) || !manifest.sourceHashes[e.source] || !imagePaths.has(e.image)) throw new Error(`Invalid entity/image: ${e.id}`);
    ids.add(e.id);
  }
  for (const e of manifest.entities.filter(e => e.kind === 'recipe')) {
    if(e.station!=='Hand'&&!ids.has(`station:${e.station}`))throw new Error(`Missing station: ${e.id}`);
    if (e.result && !ids.has(e.result)) throw new Error(`Missing result: ${e.id}`);
    for (const c of e.cost) if (!ids.has(c.item) || c.count < 1) throw new Error(`Invalid cost: ${e.id}`);
  }
  for(const e of manifest.entities.filter(e=>e.kind==='creature')) {
    if(!imagePaths.has(e.thumbnail))throw new Error(`Missing creature thumbnail: ${e.id}`);
    if(!e.stats?.health||!e.attacks?.length||!e.drops?.length)throw new Error(`Incomplete creature: ${e.id}`);
    for(const drop of e.drops)if(!ids.has(drop.item)||!drop.quantity||!drop.chance||!drop.condition)throw new Error(`Invalid creature loot: ${e.id}`);
  }
  console.log(`Validated ${all.length} pages, ${ids.size} entities and ${images.length} images.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await validate();
