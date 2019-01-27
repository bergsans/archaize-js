const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('expect array method includes, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_arr_includes.js');
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
function test() {
    var arr = [
        'a',
        'b',
        'c',
        'd',
        'e'
    ];
    var i = arr.includes('a');
}`;

  expect(archaizedCode).toEqual(transpiledCode)
});
