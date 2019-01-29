const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Variable declaration of let/const translated to var', () => {
  const content = readJSFile('tests/snippets/object_shorthand.js');
  const archaizedCode = transpile(content);
  const expectedTranspilation = `var a = 1;
var b = 2;
var c = {
    a: a,
    b: b
};`;
  expect(archaizedCode).toEqual(expectedTranspilation);
}); 

