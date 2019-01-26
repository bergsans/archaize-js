/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-array.prototype.findindex
 */

Array.prototype.findIndex = function(f, thisArg) {
  var arr = this;
  var len = arr.length;

  if(typeof f != 'function') {
    throw new TypeError('Not a function');
  }
  if(thisArg) {
    arr = thisArg;
  }

  for(var i = 0; i < len; i++) {
    if(f(arr[i])) { // i, obj
      return i;
    }
  }
  return -1;
}
module.exports = { Array };

