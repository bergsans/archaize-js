const { find } = require('../../src/transpiler/polyfills/find.js');

test('Is the number 1 included in array?', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let findOne = arr.find((el) => el === 1); 
  expect(findOne).toEqual(1);
});

