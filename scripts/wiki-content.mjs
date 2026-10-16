import { readFileSync } from 'node:fs';

// Use the same reference data for inline names, links and thumbnails throughout the wiki.
export default function wikiContent() {
  const { entities } = JSON.parse(readFileSync(new URL('../src/data/game-manifest.json', import.meta.url), 'utf8'));
  const refs = entities.filter(e => ['creature', 'station'].includes(e.kind));
  const byRoute = new Map(refs.map(e => [`/${e.page}/`, e]));
  const names = refs.flatMap(e => [e.name, ...(e.aliases || [])].map(name => [name, e])).sort((a,b) => b[0].length-a[0].length);
  const byName = new Map(names.map(([n,e])=>[n.toLowerCase(),e]));
  const pattern = names.length ? new RegExp(`\\b(${names.map(([name]) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b(?!['’]s\\b)`, 'gi') : null;
  const img = e => ({ type: 'element', tagName: 'img', properties: { src: e.thumbnail||e.image, alt: '', width: 40, height: 40, loading: 'lazy', decoding: 'async', className: ['reference-thumb'] }, children: [] });
  return tree => {
    function walk(node, blocked = false, scope = false) {
      if (!node.children) return;
      const skip = blocked || ['a','code','pre','h1','h2','h3','h4','button','script'].includes(node.tagName) || (node.properties?.className || []).some(c => ['entry-card','entity-intro','ingredient-list','feature-card'].includes(c));
      if (node.tagName === 'a' && byRoute.has(node.properties?.href) && !node.children.some(c => c.tagName === 'img')) {
        node.children.unshift(img(byRoute.get(node.properties.href)));
        node.properties.className = [...(node.properties.className || []), 'entity-link'];
      }
      scope=scope||['td','p'].includes(node.tagName);
      if (!skip && pattern && scope) {
        node.children = node.children.flatMap(child => {
          if (child.type !== 'text') return [child];
          let offset=0, out=[];
          for (const m of child.value.matchAll(pattern)) {
            out.push({type:'text',value:child.value.slice(offset,m.index)});
            const e=byName.get(m[0].toLowerCase());
            out.push({type:'element',tagName:'a',properties:{href:`/${e.page}/`,className:['entity-link']},children:[img(e),{type:'text',value:m[0]}]});
            offset=m.index+m[0].length;
          }
          return out.length ? [...out,{type:'text',value:child.value.slice(offset)}] : [child];
        });
      }
      for (const child of node.children) walk(child,skip,scope);
      if (node.tagName === 'table') {
        const original={...node};
        node.type='element'; node.tagName='div'; node.properties={className:['table-scroll'],tabIndex:0,role:'region',ariaLabel:'Scrollable reference table'}; node.children=[original];
      }
    }
    walk(tree);
  };
}
