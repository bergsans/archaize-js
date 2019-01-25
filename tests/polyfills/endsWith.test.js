const { endsWith } = require('../../src/transpiler/polyfills/endsWith.js');

test('Does \"Hello, World!\" end with \"Hello\"?', () => {
  const string = "hello world";
  expect(string.endsWith('Hello')).toBeFalsy();
});

test('Does \"Hello, World\" end with \"World\"?', () => {
  const string = "Hello, World!";
  expect(string.endsWith('World!')).toBeTruthy();
});

