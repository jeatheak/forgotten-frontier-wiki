// Mirrors Gear.Q, Damage/Chop/Mine/Armor, Speed and MaxDurability (C# single precision).
export const qualities={Crude:0.85,Common:1,Good:1.12,Fine:1.21,Masterwork:1.33};
const f=Math.fround, mul=(a,b)=>f(f(a)*f(b)), add=(a,b)=>f(f(a)+f(b));
export function roundEven(n) {const lo=Math.floor(n),part=n-lo;return part===.5 ? lo+(lo%2) : Math.round(n);}
export function gearValues(gear,quality,level) {
  if(!(quality in qualities)||!Number.isInteger(level)||level<0||level>3)throw new Error('Invalid quality or upgrade level');
  const s=gear.stats,q=mul(qualities[quality],add(1,mul(.1,level)));
  return {damage:mul(s.damage,q),chop:mul(s.chop,q),mine:mul(s.mine,q),armor:mul(s.armor,q),speed:mul(s.speed,add(1,mul(add(q,-1),.25))),durability:roundEven(mul(mul(s.durability,add(.7,mul(.3,qualities[quality]))),add(1,mul(.25,level))))};
}
export function upgradeCosts(gear,quality,level) {
  if(!gear.upgradable||level<1||level>3)return [];
  const costs=new Map(),add=(k,n)=>costs.set(k,(costs.get(k)||0)+n),m=gear.material;
  add(m,(m==='Wood'?[3,5,8]:m==='Tusk'?[1,2,2]:m==='Ashsteel'?[1,2,3]:[2,3,4])[level-1]);
  if(m==='IronBar'){add('Leather',level===1?1:2);if(level===2)add('OakWood',1);if(level===3)add('Crystal',1);}
  // v0.33: ember steel and ashsteel take an ash-pelt binding, brimstone, and at +3 obsidian or a soul ember
  else if(m==='EmberSteel'||m==='Ashsteel'){add('AshPelt',level===1?1:2);if(level>=2)add('Brimstone',level);if(level===3)add(m==='Ashsteel'?'SoulEmber':'Obsidian',m==='Ashsteel'?1:2);}
  else{add(level===1?'Flax':'Leather',level===1?2:level===2?1:2);if(level===3)add('Resin',2);}
  const factor={Crude:.75,Common:1,Good:1.25,Fine:1.5,Masterwork:2}[quality];
  return [...costs].map(([key,n])=>({key,count:Math.max(1,Math.ceil(addFloat(mul(n,factor),-.01)))}));
}
const addFloat=(a,b)=>f(f(a)+f(b));
export const statLabels={damage:'Damage',chop:'Chopping',mine:'Mining',armor:'Armour',speed:'Attack speed multiplier',durability:'Maximum durability'};
export const display=n=>Number(n.toFixed(2)).toString();
export const scalingStats=g=>Object.keys(statLabels).filter(k=>g.stats[k]>0&&!(['Armor','Charm','Instrument'].includes(g.gearKind)&&k==='speed')&&!(g.gearKind==='Charm'&&k==='durability'));
