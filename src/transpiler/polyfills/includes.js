/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.includes
 */

String.prototype.includes = function(searchStr, position) { 
  var str = this;

  if(typeof searchStr != 'string') {   
    throw new TypeError('Parameter must be string');
  }

  position = position || 0;
  var charsInString = str.split('');
  var len = charsInString.length;
  var searchStrLen = searchStr.length

  for (var i = position; i < len; i++) {
    var tempString = '';
    var char = 0;
    while (char <= searchStrLen) {
      if ((i + char) < len) {
        var tempIndex = i + char;
        tempString += charsInString[tempIndex];
        if (tempString == searchStr) {
          return true;
        }
      }
      char++;
    }
  }
  return false;
}
module.exports = { String };

