Array.prototype.findIndex2 = function(arr, findTest) {
  for(var i = 0; i < arr.length; i++) {
    if(findTest(arr[i])) {
      return i;
    }
  }
  return false;
}
