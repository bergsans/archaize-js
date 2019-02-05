/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-array.prototype.find
 */

Array.prototype.find = function(f, thisArg) {
  var arr = this;
  
  if (typeof f != 'function') {
    throw new TypeError('Not a function');
  }
 
  if (thisArg) {
    arr = thisArg;
  } 

  for (var i = 0; i < arr.length; i++) {
    if (f(arr[i])) { // i, obj?
      return arr[i];
    }
  }
  return undefined;
};
module.exports = { Array };

