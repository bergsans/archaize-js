const { makeAST, transpile } = require('../../src/utils/utils.js');
const { readJSFile } = require('../../src/helpers/helpers.js');

test('expect composite code #2 to be transpiled', () => {

  const contentOfSnippet = readJSFile('tests/composites/snippets/mix_of_expressions_02.js');
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
function thisOrThatFunc(name, age) {
    var name = name || 'John Doe';
    var arr = [
        'a',
        'b',
        'c',
        'd'
    ];
    var arr2 = [].concat(arr, ['e']);
    var arr3 = arr2.map(function (el) {
        return '_' + el + '';
    });
    var isElaInArr = arr3.find(function (el) {
        return el == 'a';
    });
}`;

  expect(archaizedCode).toEqual(transpiledCode)
});

