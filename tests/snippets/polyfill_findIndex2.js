function test() {
  const arr = [1, 2, 3, 4, 5];
  const i = arr.findIndex((el, i) => !isNaN(el[i])); 
}

