/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.includes
 */

String.prototype.includes = function(searchTerm, start) { 
  var string = this;
  start = start || 0;
  /*
  if(typeof searchTerm != 'string' || typeof start != 'number') {
    throw new TypeError('Invalid parameter(s)');
  }
  */
  var charsInString = string.split('');
  for (var i = start; i < charsInString.length; i++) {
    var tempString = '';
    var char = 0;
    while (char <= searchTerm.length) {
      if ((i + char) < charsInString.length) {
        var tempIndex = i + char;
        tempString += charsInString[tempIndex];
        if (tempString == searchTerm) {
          return true;
        }
      }
      char++;
    }
  }
  return false;
}
module.exports = { String };

