const { transpile } = require('../../src/utils/utils.js');
const { readJSFile } = require('../../src/helpers/helpers.js');

test('Expect code #2 to be transpiled', () => {

  const contentOfSnippet = readJSFile('tests/composites/snippets/mix_of_expressions_01.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `var arr = [
    1,
    2,
    3,
    4
];
var someE6Function = function (arr, string) {
    var modifiedValues = arr.map(function (el) {
        return el * 2;
    });
    var newStr = 'This a template literal: ' + string + '...';
};`;

  expect(archaizedCode).toEqual(transpiledCode);
});

