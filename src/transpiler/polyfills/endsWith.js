String.prototype.endsWith2 = function(searchTerm) {
  var string = this;
  var compareString = string.slice((string.length - searchTerm.length), string.length);
  if(compareString == searchTerm) {
    return true;
  } else {
    return false;
  }
}
