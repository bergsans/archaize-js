const { includes } = require('../../src/transpiler/polyfills/includes.js');

test('Is \"Wordly\" included in \"Hello, World!\"?', () => {
  const str = 'Hello, World!';
  expect(str.includes('Worldly')).toBeFalsy();
});

test('Is \"World\" included in \"Hello, World!\"?', () => {
  const str = 'Hello, World!';
  expect(str.includes('World')).toBeTruthy();
});

test('Invalid parameter. Parameter is not of type string', () => {
  expect(() => { 'Hello World'.includes(5); }).toThrow('Parameter must be string');
});

