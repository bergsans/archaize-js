const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Remove spread operator and use alt approach', () => {

  const contentOfSnippet = readJSFile('tests/snippets/arr_spread.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `var arr = [
    1,
    2,
    3,
    4
];
var arr2 = [].concat(arr, [
    5,
    6,
    7,
    8,
    9
]);`
  expect(archaizedCode).toEqual(transpiledCode)
});

