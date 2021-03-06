import { NDArray } from './';

NDArray.log1p = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).log1p();

NDArray.prototype.log1p = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log1p(d1[i]);
  }

  return this;
};
