const { makeAST, transpile } = require('../../src/utils/utils.js');
const { readJSFile } = require('../../src/helpers/helpers.js');

test('expect composite code #3 to be transpiled', () => {

  const contentOfSnippet = readJSFile('tests/composites/snippets/mix_of_expressions_04.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = ``;

  expect(archaizedCode).toEqual(transpiledCode);
});

