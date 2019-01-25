/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-array.prototype.find
 */

Array.prototype.find = function(testFind, thisArg) {
  var arr = this;
  if(thisArg) {
    arr = thisArg;
  }

  for(var i = 0; i < arr.length; i++) {
    if(testFind(arr[i]), i, obj) {
      return arr[i];
    }
  }
  return undefined;
}
module.exports = { Array };

