/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.startswith
 */

String.prototype.startsWith = function(searchStr, position) {
  var string = this;
  var len = string.length;
  var searchStrLen = searchStr.length;

  if(position) {
    if (typeof position == 'number') {
      position = parseInt(position, 10);
      if(position < 0) {
        throw new RangeError('Negative number.');
      } else if((position + searchStrLen) > len) {
        throw new Error('Start position larger than string length');
      }
    } else {
      throw new TypeError('Not a number');
    }
  } else {
    position = 0;
  } 
  
  var compareString = string.slice(position, searchStrLen);

  if(compareString == searchStr) {
    return true;
  } else {
    return false;
  }
};
module.exports = { String };

