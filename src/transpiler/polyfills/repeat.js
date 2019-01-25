/*
 * https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.repeat
 */

String.prototype.repeat = function(count) {
  if (isNaN(count)) {
    throw new RangeError('Not a number');
  }
  var string = this;
  var content = this;
  count = Math.round(count);
  if (count > 0 && count < Infinity) {
    for (var i = 0; i < count; i++) {
      string += content;
    }
    return string;
  } else if (count == 0) {
    return content;
  } else if (count >= Infinity) {
    throw new RangeError('Larger than Infinity.');
  } else if (count < 0) {
    throw new RangeError('Negative number');
  }
  return undefined;
}
module.exports = { String };
