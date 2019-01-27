const { repeat } = require('../../src/transpiler/polyfills/repeat.js');

test('\"Hello, World!\" repeat string 3 times', () => {
  const string = "Hello, World!Hello, World!Hello, World!Hello, World!";
  expect('Hello, World!'.repeat(3)).toEqual(string);
});
/*
Doesn't work. Read up! 
test('Invalid range. Larger than Infinity', () => {
  expect(() => { "Hello, world".repeat(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) }).toThrow('Larger then Infinity');
});
*/
test('Invalid range. Negative number', () => {
  expect(() => { "Hello, world".repeat(-1) }).toThrow('Negative number');
});

test('Invalid type. Not a number', () => {
  expect(() => { "Hello, world".repeat("five") }).toThrow('Not a number');
});

