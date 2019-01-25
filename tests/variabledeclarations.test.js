const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Variable declaration of let/const translated to var', () => {
  const content = readJSFile('tests/snippets/variabledeclaration.js');
  const archaizedCode = transpile(content);
  const expectedTranspilation = `var foo = 'bar';
var bar = 'foo';`;
  expect(archaizedCode).toEqual(expectedTranspilation);
}); 

