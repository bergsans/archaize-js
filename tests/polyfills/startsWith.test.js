const { startsWith } = require('../../src/transpiler/polyfills/startsWith.js');

test('Does \"Hello, World!\" start with \"Yellow\"?', () => {
  const string = "Hello, World!";
  expect(string.startsWith('World')).toBeFalsy();
});

test('Does \"Hello, World!\" start with \"Hello\"?', () => {
  const string = "Hello, World!";
  expect(string.startsWith('Hello')).toBeTruthy();
});

