/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.repeat
 */

String.prototype.repeat = function(count) { 
  if (count == Number.POSITIVE_INFINITY) {
    throw new RangeError('Larger than Infinity.');
  } else if (count < 0) {
    throw new RangeError('Negative number');
  }

  var string = this;
  if (typeof count != 'number') {
    throw new TypeError('Not a number');
  }
  var content = string;
  count = parseInt(count, 10);
  if (count > 0 && count < Number.POSITIVE_INFINITY) {
    for (var i = 0; i < count; i++) {
      string += content;
    }
    return string;
  } else if (count == 0) {
    return content;
  } 
  return undefined;
};
module.exports = { String };
