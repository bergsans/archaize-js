/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.endswith
 */

String.prototype.endsWith = function(searchTerm, end) {
  var string = this;
  end = end || string.length;
  var compareString = string.slice((end - searchTerm.length), end); 
  if(compareString == searchTerm) {
    return true;
  } else {
    return false;
  }
}
module.exports = { String };

