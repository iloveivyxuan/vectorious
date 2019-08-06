import { bench } from '../bench';

import { NDArray } from './';

const { random } = Math;
const r: (n: number) => NDArray = (n: number): NDArray =>
  new NDArray(new Float32Array(n)).fill(random);

bench(
  'NDArray',
  'cosh',
  (n: number): [NDArray] => [r(n)],
  (x: NDArray): void => {
    x.cosh();
  },
  (x: NDArray): void => {
    NDArray.cosh(x);
  }
);