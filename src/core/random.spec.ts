import {
  deepStrictEqual,
  strictEqual,
} from 'assert';

import { random } from './random';

describe('(v) random', () => {
  it('should work as expected', () => {
    const x = random(3);

    strictEqual(3, x.length);
    deepStrictEqual([3], x.shape);
  });

  it('should work as expected', () => {
    const x = random(3, 3);

    strictEqual(9, x.length);
    deepStrictEqual([3, 3], x.shape);
  });
});
