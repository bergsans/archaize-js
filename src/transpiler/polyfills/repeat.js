/*
 * https://tc39.github.io/ecma262/#sec-string-objects
 *
 */

String.prototype.repeat2 = function(n) {
  if(isNaN(n)) {
    throw new RangeError('Not a number');
  }
  var string = this;
  var content = this;
  n = Math.round(n);
  if(n > 0 && n < Infinity) {
    for(var i = 0; i < n; i++) {
      string += content;
    }
    return string;
  } else if(n === 0) {
    return content;
  } else if(n >= Infinity) {
    throw new RangeError('Larger than Infinity.');
  } else {
    return undefined;
  }
}
console.log("test".repeat2(10));
