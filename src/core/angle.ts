import { NDArray } from './';

const { acos } = Math;

NDArray.angle = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): number =>
  NDArray.array<T>(x).angle(NDArray.array<T>(y));

NDArray.prototype.angle = function<T extends NDArray>(this: T, x: T): number {
  return acos(this.dot(x) / this.norm() / x.norm());
};
