/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.endswith
 */

String.prototype.endsWith = function(searchTerm, end) {
  var string = this;
  var compareString = "";
  if(!end) {
    string.slice((string.length - searchTerm.length), string.length);
  } else if(end) {
    if(isNaN(end)) {
      throw new TypeError('Parameter not a number');
    } else if(end < 0) {
      throw new TypeError('Negative number');
    }
      else {
      end = parseInt(end, 10);
      string.slice((string.length - searchTerm.length), end);
    }
  }
  if(compareString == searchTerm) {
    return true;
  } else {
    return false;
  }
}
module.exports = { String };

