/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-array.prototype.findindex
 */

Array.prototype.findIndex = function(findTest, thisArg) {
  var arr = this;
  if(thisArg) {
    arr = thisArg;
  }

  for(var i = 0; i < arr.length; i++) {
    if(findTest(arr[i]), i, obj) {
      return i;
    }
  }
  return -1;
}
module.exports = { Array };

