const { startsWith } = require('../../src/transpiler/polyfills/startsWith.js');

test('Does \"Hello, World!\" start with \"Yellow\"?', () => {
  const string = "Hello, World!";
  expect(string.startsWith('World')).toBeFalsy();
});

test('Does \"Hello, World!\" start with \"Hello\"?', () => {
  const string = "Hello, World!";
  expect(string.startsWith('Hello')).toBeTruthy();
});

test('Invalid range', () => {
  expect(() => { 'Hello, world'.startsWith('Hell', -1) }).toThrow('Negative number.');
});

test('Invalid range', () => {
  expect(() => { 'Hello, world!'.startsWith('Hell', 999)} ).toThrow('Start position larger than string length');
});

test('Invalid parameter. Type error', () => {
  expect(() => { 'Hello, World!'.startsWith('He', 'five') }).toThrow('Not a number');
});

