const { includes } = require('../../src/transpiler/polyfills/includes.js');

test('Is \"Wordly\" included in \"Hello, World!\"?', () => {
  const string = "Hello, World!";
  expect(string.includes("Worldly")).toBeFalsy();
});

test('Is \"World\" included in \"Hello, World!\"?', () => {
  const string = "Hello, World!";
  expect(string.includes("World")).toBeTruthy();
});

