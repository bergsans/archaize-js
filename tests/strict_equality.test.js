const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Replace strict equality (===) with un-strict (==)', () => {

  const contentOfSnippet = readJSFile('tests/snippets/strict_equality.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `function thisOrThatFunc() {
    if (1 == 1) {
    }
    var a = 2 == 2;
    console.log(3 == 3);
    return 4 == 4;
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

