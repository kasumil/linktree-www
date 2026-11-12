import test from 'node:test';
import assert from 'node:assert/strict';
import {normalizeMediaUrl as normalize} from '../src/utils/media-url.mjs';
const cases = [
 ['https://example.com/a b.png','https://example.com/a%20b.png'],
 ['https://example.com/a%20b.png','https://example.com/a%20b.png'],
 ['https://example.com/a%2520b.png','https://example.com/a%2520b.png'],
 [' \n ` https://example.com/a b.png ` \t','https://example.com/a%20b.png'],
 ['```https://example.com/a b.png```','https://example.com/a%20b.png'],
 ['/qa/sample clip.mp4','/qa/sample%20clip.mp4'],
 [' ` /qa/sample%20clip.mp4 ` ','/qa/sample%20clip.mp4'],
 ['https://example.com/한 글.png','https://example.com/%ED%95%9C%20%EA%B8%80.png'],
 ['https://example.com/a`b.png','https://example.com/a%60b.png'],
 ['https://example.com/a.png?name=a%20b#preview','https://example.com/a.png?name=a%20b#preview'],
];
for(const [input,expected] of cases) test(`preserves URL meaning: ${JSON.stringify(input)}`,()=>{assert.equal(normalize(input),expected);assert.equal(normalize(normalize(input)),expected)});
for(const input of [null,undefined,42,'','   ','javascript:alert(1)','data:image/png;base64,abc','//other.example/a.png','https://user:pass@example.com/a.png','https://exa\nmple.com/a.png']) test(`rejects unsafe/malformed: ${JSON.stringify(input)}`,()=>assert.equal(normalize(input),''));

test('reject relative authority confusion',()=>assert.equal(normalize('/\\other.example/a.png'),''));
