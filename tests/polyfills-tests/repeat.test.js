const { repeat } = require('../../src/transpiler/polyfills/repeat.js');

test('\"Hello, World!\" repeat string 3 times', () => {
  const string = "Hello, World!Hello, World!Hello, World!Hello, World!";
  expect('Hello, World!'.repeat(3)).toEqual(string);
});

test('Invalid range. Negative number', () => {
  expect(() => { "Hello, world".repeat(-1) }).toThrow('Negative number');
});

test('Invalid type. Not a number', () => {
  expect(() => { "Hello, world".repeat("five") }).toThrow('Not a number');
});

