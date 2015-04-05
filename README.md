# Vectorious

![npm version](https://img.shields.io/npm/v/vectorious.svg?style=flat-square) ![npm downloads](https://img.shields.io/npm/dm/vectorious.svg?style=flat-square) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat-square)

Vectorious is a generalized n-dimensional matrix and vector library written in JavaScript, which can be used both in node.js and the browser.

Install with ```npm``` or download ```dist/vectorious-2.0.0.js```

```bash
$ npm install vectorious
```

Test with

```bash
$ mocha
```

## Extensions

* [vectorious-solve](https://github.com/mateogianolio/vectorious-solve) - Solves linear systems of equations of the form Ax = B.
* [vectorious-plot](https://github.com/mateogianolio/vectorious-plot) - Generates a two-dimensional SVG plot from two input vectors.

## Usage

The constructors of both ```Matrix``` and ```Vector``` are designed to be flexible, so they can be initialized using several different arguments.

```javascript
var vectorious = require('vectorious');

var vector,
    matrix;

vector = new vectorious.Vector();
// { values: [], length: 0 }

matrix = new vectorious.Matrix();
// { rows: [] }

vector = vectorious.Vector.zeros(5);
// { values: [0, 0, 0, 0, 0], length: 5 }

vector = new vectorious.Vector(1, 2, 3, 4, 5);
// { values: [1, 2, 3, 4, 5], length: 5 }

matrix = new vectorious.Matrix(vector);
// { rows: [ { values: [1, 2, 3, 4, 5], length: 5 } ] }

matrix = vectorious.Matrix.zeros(2, 2);
/* {
  rows: [
    { values: [0, 0], length: 2 },
    { values: [0, 0], length: 2 }
  ]
} */

var input = [
  [1, 2],
  [3, 4]
];

matrix = new vectorious.Matrix(input);
/* {
  rows: [
    { values: [1, 2], length: 2 },
    { values: [3, 4], length: 2 }
  ]
} */
```

Now that you've got a hang of the basics, let me show you a useful application example.

```javascript
var time = vectorious.Vector.range(0, Math.PI / 12, Math.PI);
/* {
  values: 
   [ 0,
     0.2617993877991494,
     0.5235987755982988,
     0.7853981633974483,
     1.0471975511965976,
     1.308996938995747,
     1.5707963267948963,
     1.8325957145940457,
     2.0943951023931953,
     2.356194490192345,
     2.6179938779914944,
     2.879793265790644 ],
  length: 12 } */

var sine = time.map(Math.sin);
/* {
  values: 
   [ 0,
     0.25881904510252074,
     0.49999999999999994,
     0.7071067811865475,
     0.8660254037844386,
     0.9659258262890682,
     1,
     0.9659258262890684,
     0.8660254037844387,
     0.7071067811865476,
     0.49999999999999994,
     0.2588190451025206 ],
  length: 12 } */
```

## Vector

The following vector operations and methods are implemented in ```vector.js```.

* [```add```](#vector_add)
* ```subtract```
* ```scale```
* ```normalize```
* ```dot```
* ```magnitude```
* ```angle```
* ```project```
* ```zeros```
* ```ones```
* ```range```
* ```equals```
* ```get```
* ```min```
* ```max```
* ```set```
* ```combine```
* ```push```
* ```map```
* ```each```
* ```toString```
* ```toArray```

<p id="vector_add"></p>
```javascript
// (Vector, Vector) => (Vector)
Vector.add = function(a, b)
Vector.prototype.add = function(vector)
```

Add two vectors together.

```javascript
// (Vector, Vector) => (Vector)
Vector.subtract = function(a, b)
Vector.prototype.subtract = function(vector)
```

Subtract two vectors.

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.scale = function(scalar)
```

Multiply a vector by a [scalar](http://en.wikipedia.org/wiki/Scalar_multiplication).

```javascript
// (Vector) => (Vector)
Vector.prototype.normalize = function()
```

[Normalize](http://en.wikipedia.org/wiki/Unit_vector) a vector.

```javascript
// (Vector, Vector) => (Number)
Vector.dot = function(a, b)
Vector.prototype.dot = function(vector)
```

Get [dot product](http://en.wikipedia.org/wiki/Dot_product) of two vectors.

```javascript
// (Vector) => (Number)
Vector.prototype.magnitude = function()
```

Get [magnitude (norm)](http://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm) of vector.

```javascript
// (Vector, Vector) => (Angle)
Vector.add = function(a, b)
Vector.prototype.angle = function(vector)
```

Get the angle (in radians) between two vectors.

```javascript
// (Vector, Vector) => (Vector)
Vector.project = function(a, b)
Vector.prototype.project = function(vector)
```

[Project](http://en.wikipedia.org/wiki/Vector_projection) a vector onto another vector.

```javascript
// (Number) => (Vector)
Vector.zeros = function(count)
```

Create a vector of ```count``` zeros.

```javascript
// (Number) => (Vector)
Vector.ones = function(count)
```

Create a vector of ```count``` ones.

```javascript
// (Number, [Number], Number) => (Vector)
Vector.range = function(start, [step], end)
```

Create a vector containing the range from ```start``` to ```end``` in steps of ```step``` (optional).

```javascript
// (Vector, Vector) => (Boolean)
Vector.equals = function(a, b)
Vector.prototype.equals = function(vector)
```

Compare two vectors.

```javascript
// (Vector, Number) => (Number)
Vector.prototype.get = function(index)
```

Get value of an element at ```index```.

```javascript
// (Vector, Number) => (Number)
Vector.prototype.min = function()
```

Get the minimum value of a vector.

```javascript
// (Vector, Number) => (Number)
Vector.prototype.max = function()
```

Get the maximum value of a vector.

```javascript
// (Vector, Number, Number) => (Vector)
Vector.prototype.set = function(index, value)
```

Set value of an element at ```index```.

```javascript
// (Vector, Vector) => (Vector)
Vector.combine = function(a, b)
Vector.prototype.combine = function(vector)
```

Combines two vectors.

```javascript
// (Vector, Number) => (Vector)
Vector.prototype.push = function(value)
```

Pushes ```value``` into the vector.

```javascript
// (Vector, Function) => (Vector)
Vector.prototype.map = function(callback)
```

Maps a function ```callback``` to all elements of the vector.

```javascript
// (Vector, Function) => (Vector)
Vector.prototype.each = function(callback)
```

Calls ```callback(value, index)``` for each element in the vector.

```javascript
// (Vector) => (String)
Vector.prototype.toString = function()
```

Convert vector to string.

```javascript
// (Vector) => (Array)
Vector.prototype.toArray = function()
```

Convert vector to array.

## Matrix

The following matrix operations and methods are implemented in ```matrix.js```.

* ```add```
* ```subtract```
* ```scale```
* ```multiply```
* ```transpose```
* ```inverse```
* ```gauss```
* ```diag```
* ```augment```
* ```trace```
* ```identity```
* ```zeros```
* ```ones```
* ```equals```
* ```get```
* ```set```
* ```swap```
* ```map```
* ```each```
* ```toString```
* ```toArray```

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.add = function(a, b)
Matrix.prototype.add = function(matrix)
```

[Add](http://en.wikipedia.org/wiki/Matrix_addition) two matrices together.

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.subtract = function(a, b)
Matrix.prototype.subtract = function(matrix)
```

Subtract two matrices.

```javascript
// (Matrix, Number) => (Matrix)
Matrix.prototype.scale = function(scalar)
```

Multiply all elements in matrix with a [scalar](http://en.wikipedia.org/wiki/Matrix_multiplication#Scalar_multiplication).

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.multiply = function(a, b)
Matrix.prototype.multiply = function(matrix)
```

[Multiply](http://en.wikipedia.org/wiki/Matrix_multiplication#Matrix_product_.28two_matrices.29) two matrices together.

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.transpose = function()
```

[Transpose](http://en.wikipedia.org/wiki/Transpose) a matrix.

```javascript
// (Matrix, Boolean) => (Matrix)
Matrix.prototype.gauss = function()
```

Convert a matrix to [reduced row echelon (RREF)](http://en.wikipedia.org/wiki/Row_echelon_form#Reduced_row_echelon_form) form using [Gauss-Jordan eliminiation](http://en.wikipedia.org/wiki/Gaussian_elimination).

```javascript
// (Matrix) => (Matrix)
Matrix.prototype.inverse = function()
```

Get the [inverse](http://en.wikipedia.org/wiki/Invertible_matrix) of any invertible square matrix using [Gauss-Jordan elimination](http://en.wikipedia.org/wiki/Gaussian_elimination#Finding_the_inverse_of_a_matrix).

```javascript
// (Matrix) => (Vector)
Matrix.prototype.diag = function()
```

Get [matrix diagonal](http://en.wikipedia.org/wiki/Main_diagonal) as a ```Vector```.

```javascript
// (Matrix, Matrix) => (Matrix)
Matrix.augment = function(a, b)
Matrix.prototype.augment = function(matrix)
```

Create an [augmented matrix](http://en.wikipedia.org/wiki/Augmented_matrix).

```javascript
// (Matrix) => (Number)
Matrix.prototype.trace = function()
```

Get [matrix trace](http://en.wikipedia.org/wiki/Trace_(linear_algebra)) (the sum of the diagonal).

```javascript
// (Number) => (Matrix)
Matrix.identity = function(size)
```

Create an [identity matrix](http://en.wikipedia.org/wiki/Identity_matrix).

```javascript
// (Number, Number) => (Matrix)
Matrix.zeros = function(i, j)
```

Create an ```i x j``` matrix of zeros.

```javascript
// (Number, Number) => (Matrix)
Matrix.ones = function(i, j)
```

Create an ```i x j``` matrix of ones.

```javascript
// (Matrix, Matrix) => (Boolean)
Matrix.equals = function(a, b)
Matrix.prototype.equals = function(matrix)
```

Compare two matrices.

```javascript
// (Matrix, Number, Number) => (Number)
Matrix.prototype.get = function(i, j)
```

Get element at row ```i```, column ```j```.

```javascript
// (Matrix, Number, Number, Number) => (Matrix)
Matrix.prototype.set = function(i, j, value)
```

Set the value of an element at row ```i```, column ```j```.

```javascript
// (Matrix, Number, Number) => (Matrix)
Matrix.prototype.swap = function(i, j)
```

Swaps the position of rows ```i``` and ```j```.

```javascript
// (Matrix, Function) => (Matrix)
Matrix.prototype.map = function(callback)
```

Maps a function ```callback``` to all elements of the matrix.

```javascript
// (Matrix, Function) => (Matrix)
Matrix.prototype.each = function(callback)
```

Calls ```callback(row, index)``` for each row in the matrix.

```javascript
// (Matrix) => (String)
Matrix.prototype.toString = function()
```

Convert matrix to string.

```javascript
// (Matrix) => (Array)
Matrix.prototype.toArray = function()
```

Convert matrix to array.