const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Expect arrow function to be converted to function', () => {
 
  const contentOfSnippet = readJSFile('tests/snippets/arrowfunctiondeclaration.js');
  const archaizedCode = transpile(contentOfSnippet);

  const transpiledCode = `var foo = function () {
    var self = this;
    var bar = 'The current date is ' + Date() + '. 2 + 2 = ' + (2 + 2) + '.';
    console.log(self, bar);
};`;

  expect(archaizedCode).toEqual(transpiledCode);
});

