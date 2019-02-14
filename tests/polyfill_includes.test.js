const { transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Expect string method includes, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_includes.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `String.prototype.includes = function (searchStr, position) {
    var str = this;
    if (typeof searchStr != 'string') {
        throw new TypeError('Parameter must be string');
    }
    position = position || 0;
    var charsInString = str.split('');
    var len = charsInString.length;
    var searchStrLen = searchStr.length;
    for (var i = position; i < len; i++) {
        var tempString = '';
        var char = 0;
        while (char <= searchStrLen) {
            if (i + char < len) {
                var tempIndex = i + char;
                tempString += charsInString[tempIndex];
                if (tempString == searchStr) {
                    return true;
                }
            }
            char++;
        }
    }
    return false;
};
function test() {
    var whatever = 'test'.includes('s');
    if ('test2'.includes('2')) {
    }
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

