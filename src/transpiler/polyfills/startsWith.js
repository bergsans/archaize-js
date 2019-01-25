/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.startswith
 */

String.prototype.startsWith = function(searchTerm, start) {
  var string = this;
  if(start) {
    if (typeof start == 'number') {
      start = parseInt(start, 10);
      if(start < 0) {
        throw new RangeError('Negative number.');
      } else if(start > string.length) {
        throw new Error('Start position larger than string length');
      }
    } else {
      throw new TypeError('Not a number');
    }
  } else {
    start = 0;
  } 
  var compareString = string.slice(start, searchTerm.length);
  if(compareString == searchTerm) {
    return true;
  } else {
    return false;
  }
}
module.exports = { String };

