/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.startswith
 */

String.prototype.startsWith = function(searchTerm, start) {
  if(start) {
    if (typeof start == 'number') {
      start = parseInt(start, 10);
      if(start < 0) {
        throw new TypeError('Negative number.');
      }
    }
  } else {
    start = 0;
  } 
  var string = this;
  var compareString = string.slice(start, searchTerm.length);
  if(compareString == searchTerm) {
    return true;
  } else {
    return false;
  }
}
module.exports = { String };

