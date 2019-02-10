# Background


## Rest

In JavaScript ES6, the `rest`  operator makes it possible to
collect an arbitrarily large number of parameters, stated in
the function definition. It would look like this:

```
function addNums(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(addNums(1,1,1,1,1)) // 5
```

This  feature surelymakes  your  life easier,  but the  main
functionality is not unique. In ES5 you could have written a
function with the same semantic meaning:

```
function addNums() {
  var nums = Object.values(arguments);
  return nums.reduce(function(a, b) { return a + b; });
}
console.log(addNums(1,1,1,1,1)) // 5
```

(Object.values is ES5 and arguments is a object containing a
key for each parameter expressed in a function call.)

This would also be a case that therefore can be solved using
polyfills, although  the polyfill,  in this case,  is rather
small.


## Array spread
You can do something very  similar when handling arrays. The
same is true for objects but  that would be out of the scope
of this project since it's a feature of ECMAScript 2017.

The array spread  operator makes it possible to  use a handy
shorthand (and doesn't have to use the concat method):

```
const humanCharacters = ['Luke Skywalker', 'Princess Leia', 'Darth Vader'];

const robotCharacters = ['C3PO', 'RJD2'];

const humansAndRobots = [...humanCharacters, ...robotCharacters];
```

### Problem
When replacing the rest  operator in the function definition
you have  to make use  of the arguments object,  you'll also
need to inject the values  method inherit in Object (or some
other  solution) at  the first  line  to make  sure that  no
function make use  of any of the parameters  included in the
function definition.

A problem that might arise  would be if other parameters are
included in the function definition.

```
function someFunc(param1, param2, ...allOtherParams) {}
```

In that case  you need to exclude those  from arguments when
using  the object  arguments  array,  otherwise, they'll  be
duplicated.  The arguments  object contains  all parameters,
including (in the example above) param1 and param2.





