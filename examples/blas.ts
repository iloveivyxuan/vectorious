import { array } from '../src/core/array';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {
  throw new Error('no blas support!');
}

const a = array([[1, 2, 3]]);
const b = array([[3], [2], [1]]);

console.log(`a: ${a}`);
console.log(`b: ${b}`);

// Sum of absolute values
const sum: number = nblas.sasum(3, a.data, 1);
console.log(`sasum: ${sum}`);

// Dot product
const dot: number = nblas.sdot(3, a.data, 1, b.data, 1);
console.log(`sdot: ${dot}`);

// Memory swap
nblas.sswap(3, a.data, 1, b.data, 1);
console.log(`a: ${a}`);
console.log(`b: ${b}`);

// See http://www.netlib.org/blas/ for a complete list of routines
