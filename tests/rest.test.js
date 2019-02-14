const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Remove rest operator in function declaration, replace param with argument object', () => {

  const contentOfSnippet = readJSFile('tests/snippets/func_rest.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = `function test() {
    var args = Object.values(arguments);
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

test('Remove rest operator in variable arrow function declaration, replace with arg obj', () => {

  const contentOfSnippet = readJSFile('tests/snippets/var_declaration_rest.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = `var randomFunc = function (a) {
    var args = Object.values(arguments);
};`;

  expect(archaizedCode).toEqual(transpiledCode);
});

test('Test if more params are possible to include (someVar, ...params)', () => {

  const contentOfSnippet = readJSFile('tests/snippets/rest_with_many_params.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = `function someFunc(param) {
    var args = Object.values(arguments);
    console.log(args);
    console.log(param);
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

