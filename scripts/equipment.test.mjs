import test from 'node:test';
import assert from 'node:assert/strict';
import {gearValues,upgradeCosts,roundEven} from '../src/lib/equipment.mjs';
const axe={material:'Flint',upgradable:true,stats:{damage:9,chop:14,mine:0,armor:0,speed:.85,durability:130}};
test('Common +0 preserves base values and each level scales quality-adjusted values',()=>{
  const base=gearValues(axe,'Common',0),max=gearValues(axe,'Common',3);
  assert.equal(base.damage,9);assert.equal(base.durability,130);
  assert.ok(Math.abs(max.damage-11.7)<.00001);assert.equal(max.durability,228);
  assert.ok(Math.abs(max.speed-.91375)<.00001);
  const fine=gearValues(axe,'Fine',2);
  assert.ok(Math.abs(fine.chop-20.328)<.00001);assert.equal(fine.durability,207);
});
test('Durability follows Unity ties-to-even rounding',()=>{assert.equal(roundEven(162.5),162);assert.equal(roundEven(227.5),228);});
test('Upgrade materials merge duplicate items before quality rounding',()=>{
  assert.deepEqual(upgradeCosts(axe,'Masterwork',3),[{key:'Flint',count:8},{key:'Leather',count:4},{key:'Resin',count:4}]);
  assert.deepEqual(upgradeCosts({...axe,material:'Leather'},'Good',3),[{key:'Leather',count:8},{key:'Resin',count:3}]);
  assert.deepEqual(upgradeCosts({...axe,material:'IronBar'},'Crude',2),[{key:'IronBar',count:3},{key:'Leather',count:2},{key:'OakWood',count:1}]);
  assert.deepEqual(upgradeCosts({...axe,upgradable:false},'Common',1),[]);
});
test('Invalid calculator inputs are rejected',()=>{assert.throws(()=>gearValues(axe,'Rare',1));assert.throws(()=>gearValues(axe,'Fine',4));});
