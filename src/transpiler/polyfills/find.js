Array.prototype.find2 = function(arr, testFind) {
  for(var i = 0; i < arr.length; i++) {
    if(testFind(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}
