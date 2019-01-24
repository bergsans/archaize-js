String.prototype.includes2 = function(searchTerm) {
  var string = this;
  var charsInMsg = string.split("");
  for (var i = 0; i < charsInMsg.length; i++) {
    var tempString = "";
    var char = 0;
    while (char <= 27) {
      if ((i + char) < charsInMsg.length) {
        var tempIndex = i + char;
        tempString += charsInMsg[tempIndex];
        if (tempString == searchTerm) {
          return true;
        }
      }
      char++;
    }
  }
  return false;
}


