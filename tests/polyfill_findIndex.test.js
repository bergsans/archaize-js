const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Expect findIndex method, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_findIndex.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  // NOTE: fix ===
  const transpiledCode = `Array.prototype.findIndex = function (f, thisArg) {
    var arr = this;
    var len = arr.length;
    if (typeof f != 'function') {
        throw new TypeError('Not a function');
    }
    if (thisArg) {
        arr = thisArg;
    }
    for (var i = 0; i < len; i++) {
        if (f(arr[i])) {
            return i;
        }
    }
    return -1;
};
function test() {
    var arr = [
        1,
        2,
        3,
        4,
        5
    ];
    var i = arr.findIndex(function (el) {
        return el == 5;
    });
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

