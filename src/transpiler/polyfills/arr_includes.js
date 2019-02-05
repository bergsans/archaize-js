/*
 * https://tc39.github.io/Array.prototype.includes/
 *
 */

Array.prototype.includes = function(searchStr, fromIndex) {
  var arr = this;
  var len = arr.length;
  if (len == 0) {
    return false;
  }
  
  fromIndex = fromIndex || 0;
  
  for (var i = fromIndex; i < len; i++) {
    if(arr[i] == searchStr) {
      return true;
    }
  }
  return false;
};
module.exports = { Array };


