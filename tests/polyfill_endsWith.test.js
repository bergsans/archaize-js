const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Expect endsWith method, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_endsWith.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `String.prototype.endsWith = function (searchStr, endPosition) {
    var string = this;
    endPosition = endPosition || string.length;
    var searchLength = searchStr.length;
    if (typeof searchStr != 'string') {
        throw new TypeError('Type error: search term parameter must be of type string');
    }
    var compareString = string.slice(endPosition - searchLength, endPosition);
    if (compareString == searchStr) {
        return true;
    } else {
        return false;
    }
};
function test() {
    var whatever = 'test'.endsWith('s');
    if ('test2'.endsWith('2')) {
    }
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

