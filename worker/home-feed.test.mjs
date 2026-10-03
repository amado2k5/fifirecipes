import assert from 'node:assert/strict';
import worker, { layoutFrom } from './home-feed.js';

const variants = [
  { hero: 'a', rows: [{ key: 'featured', title: 'F', items: ['b', 'c', 'a'] }, { key: 'kids', title: 'K', items: ['k1'] }] }
];
const out = layoutFrom(variants);
assert.deepEqual(out.rows[0].items, ['a', 'b', 'c']);
assert.deepEqual(out.rows[1], variants[0].rows[1]);

const calls = [];
globalThis.fetch = async (input) => {
  const u = String(input.url ?? input);
  calls.push(u);
  if (u.includes('feed-variants')) return new Response(JSON.stringify({ variants }));
  return new Response('static');
};
const res = await worker.fetch(new Request('https://fifi.cooking/data/tv/feed/en.json?v=abc'));
assert.equal(res.headers.get('cache-control'), 'no-store');
assert.equal((await res.json()).rows[0].items[0], 'a');
assert.equal(await (await worker.fetch(new Request('https://fifi.cooking/data/tv/index/en.json'))).text(), 'static');
console.log('ok');
