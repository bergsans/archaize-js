function thisOrThatFunc(name = 'John Doe', age) {

  let arr = ['a', 'b', 'c', 'd'];
  let arr2 = [...arr, 'e'];
  let arr3 = arr2.map((el) => `_${el}`);
  let isElaInArr = arr3.find((el) => el === 'a');
}

