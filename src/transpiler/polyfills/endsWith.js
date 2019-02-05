/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.endswith
 */

String.prototype.endsWith = function(searchStr, endPosition) {
  var string = this;
  endPosition = endPosition || string.length;
  var searchLength = searchStr.length;

  if(typeof searchStr != 'string') { 
    throw new TypeError('Type error: search term parameter must be of type string');
  } 

  var compareString = string.slice((endPosition - searchLength), endPosition);
  if(compareString == searchStr) {
    return true;
  } else {
    return false;
  }
};
module.exports = { String };

