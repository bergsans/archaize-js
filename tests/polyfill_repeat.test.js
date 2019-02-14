const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('Expect endsWith method, used with variable declaration, to generate polyfill', () => {

  const contentOfSnippet = readJSFile('tests/snippets/polyfill_repeat.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `String.prototype.repeat = function (count) {
    if (count == Number.POSITIVE_INFINITY) {
        throw new RangeError('Larger than Infinity.');
    } else if (count < 0) {
        throw new RangeError('Negative number');
    }
    var string = this;
    if (typeof count != 'number') {
        throw new TypeError('Not a number');
    }
    var content = string;
    count = parseInt(count, 10);
    if (count > 0 && count < Number.POSITIVE_INFINITY) {
        for (var i = 0; i < count; i++) {
            string += content;
        }
        return string;
    } else if (count == 0) {
        return content;
    }
    return undefined;
};
function test() {
    var whatever = 'test'.repeat(10);
}`;

  expect(archaizedCode).toEqual(transpiledCode);
});

