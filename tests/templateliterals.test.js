const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

test('expect template literals to be translated to literals', () => {

  const contentOfSnippet = readJSFile('tests/snippets/templateliterals.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `var wiz = {
    name: 'Gandalf',
    alias: 'Mithrandir',
    age: 3000
};
var str = 'The wise wizard ' + wiz.name + ', ' + wiz.age + ', years old and is also called ' + wiz.alias + '.';
console.log(str);
console.log('Text written by by C-M, ' + Date() + '.');`;

  expect(archaizedCode).toEqual(transpiledCode)
});
