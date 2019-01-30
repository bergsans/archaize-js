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

