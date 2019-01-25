const { findIndex } = require('../../src/transpiler/polyfills/findIndex.js');

test('Find index of element in arry', () => {
  const arr = [0,1,2,3,4,5,6,7,8,9];
  const i = arr.findIndex((el) => el === 5);
  expect(i).toEqual(5);
});
