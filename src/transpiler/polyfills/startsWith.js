String.prototype.startsWith2 = function(searchTerm) {
  var string = this;
  var compareString = string.slice(0, searchTerm.length);
  if(compareString == searchTerm) {
    return true;
  } else {
    return false;
  }
}

