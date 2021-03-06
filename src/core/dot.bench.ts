import v = require('..');
import { bench } from '../bench';

bench(
  'v',
  'dot',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.dot(y);
  },
  (x: v, y: v): void => {
    v.dot(x, y);
  }
);
