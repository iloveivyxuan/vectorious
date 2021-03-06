import v = require('..');
import { bench } from '../bench';

const r: (n: number) => v = (n: number): v => v.random(n);
bench(
  'v',
  'combine',
  (n: number): [v, v] => [v.random(n), v.random(n)],
  (x: v, y: v): void => {
    x.combine(y);
  },
  (x: v, y: v): void => {
    v.combine(x, y);
  }
);
