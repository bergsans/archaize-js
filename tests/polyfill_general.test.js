const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Check that the use of a pollyfilled method does not duplicate (injects the polyfill twice)', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_general.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `Array.prototype.includes = function (searchStr, fromIndex) {
    var arr = this;
    var len = arr.length;
    if (len == 0) {
        return false;
    }
    fromIndex = fromIndex || 0;
    for (var i = fromIndex; i < len; i++) {
        if (arr[i] == searchStr) {
            return true;
        }
    }
    return false;
};
var arr = [
    'a',
    'b',
    'c'
];
if (arr.includes('c')) {
}
let arr2 = [
    1,
    2,
    3
];
if (arr.includes(2)) {
}`;

  expect(archaizedCode).toEqual(transpiledCode)
});

