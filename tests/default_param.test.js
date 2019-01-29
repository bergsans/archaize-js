const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('expect default parameter to be converted', () => {

  const contentOfSnippet = readJSFile('tests/snippets/default_param.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `function printGreetingPhrase(greeting, name) {
    var greeting = greeting || 'Hello there, ';
    console.log('Greet message: ' + greeting + ' ' + name + '!');
}`;

  expect(archaizedCode).toEqual(transpiledCode)
});
