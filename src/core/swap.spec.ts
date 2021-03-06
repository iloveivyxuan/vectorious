import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) swap', () => {
  it('should throw error if index out of bounds', () => {
    const x: v = v.array([[1, 2], [3, 4]]);

    throws(() => { x.swap(-1, 0); }, Error);
    throws(() => { x.swap(0, -1); }, Error);
    throws(() => { x.swap(2, 0); }, Error);
    throws(() => { x.swap(0, 2); }, Error);
  });

  it('should work as expected', () => {
    const x: v = v.array([[1, 2], [3, 4], [5, 6]]);

    x.swap(0, 1);
    deepStrictEqual(v.array([[3, 4], [1, 2], [5, 6]]), x);
    x.swap(1, 2);
    deepStrictEqual(v.array([[3, 4], [5, 6], [1, 2]]), x);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 2], [3, 4], [5, 6]]);

    deepStrictEqual(v.array([[3, 4], [1, 2], [5, 6]]), v.swap(x, 0, 1));
  });
});
