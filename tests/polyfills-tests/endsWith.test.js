const { endsWith } = require('../../src/transpiler/polyfills/endsWith.js');

test('Does \"Hello, World!\" end with \"Hello\"?', () => {
  const string = 'hello world';
  expect(string.endsWith('Hello')).toBeFalsy();
});

test('endsWith method in if statement', () => {
  const string = 'Hello, World!';
  const searchStr = 'World!';
  let isSearchStrIncluded = false;
  if (string.endsWith(searchStr)) {
	  isSearchStrIncluded = true;
  }
  expect(isSearchStrIncluded).toBeTruthy();			
});

test('Does \"Hello, World\" end with \"World\"?', () => {
  const string = 'Hello, World!';
  expect(string.endsWith('World!')).toBeTruthy();
});

test('Throw Error. Invalid parameter', () => {
  expect(() => {'Hello, World!'.endsWith(5);}).toThrow('Type error: search term parameter must be of type string');
});

