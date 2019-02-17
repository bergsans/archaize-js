const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Expect find method, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_find.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `Array.prototype.find = function (f, thisArg) {
    var arr = this;
    if (typeof f != 'function') {
        throw new TypeError('Not a function');
    }
    if (thisArg) {
        arr = thisArg;
    }
    for (var i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
};
function test() {
    var arr = [
        1,
        2,
        3,
        4,
        5
    ];
    var ifNumFiveInArr = arr.find(function (el) {
        return el == 5;
    });
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

