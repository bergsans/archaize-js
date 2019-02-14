const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('expect startsWith method, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_startsWith.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `String.prototype.startsWith = function (searchStr, position) {
    var string = this;
    var len = string.length;
    var searchStrLen = searchStr.length;
    if (position) {
        if (typeof position == 'number') {
            position = parseInt(position, 10);
            if (position < 0) {
                throw new RangeError('Negative number.');
            } else if (position + searchStrLen > len) {
                throw new Error('Start position larger than string length');
            }
        } else {
            throw new TypeError('Not a number');
        }
    } else {
        position = 0;
    }
    var compareString = string.slice(position, searchStrLen);
    if (compareString == searchStr) {
        return true;
    } else {
        return false;
    }
};
function test() {
    var whatever = 'test'.startsWith('s');
    if ('test2'.startsWith('2')) {
    }
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

