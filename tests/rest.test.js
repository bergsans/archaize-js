const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Remove rest operator in function declaration, replace param with argument object', () => {

  const contentOfSnippet = readJSFile('tests/snippets/func_rest.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = `function test() {
    var args = Object.values(arguments);
}`;

  expect(archaizedCode).toEqual(transpiledCode)
});

test('Remove rest operator in variable arrow function declaration, replace with arg obj', () => {

  const contentOfSnippet = readJSFile('tests/snippets/var_declaration_rest.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = `var randomFunc = function (a) {
    var args = Object.values(arguments);
};`;

  expect(archaizedCode).toEqual(transpiledCode)
});



