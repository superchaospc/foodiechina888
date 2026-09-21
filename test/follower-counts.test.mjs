import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('shows 4.4M Facebook followers and a matching 12.8M total', () => {
  const countsBlock = html.match(/const COUNTS = \{([\s\S]*?)\};/);
  assert.ok(countsBlock, 'COUNTS block is present');

  const counts = Object.fromEntries(
    [...countsBlock[1].matchAll(/(\w+):\s+(\d+)/g)].map(([, platform, count]) => [
      platform,
      Number(count),
    ]),
  );

  assert.equal(counts.facebook, 4_400_000);
  assert.equal(Object.values(counts).reduce((sum, count) => sum + count, 0), 12_800_000);
  assert.match(
    html,
    /<span class="stat-num">12\.8M<\/span>\s*<span class="stat-label">Total followers across all platforms<\/span>/,
  );
});
