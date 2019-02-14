const { makeAST, transpile } = require('../../src/utils/utils.js');
const { readJSFile } = require('../../src/helpers/helpers.js');

test('expect composite code #2 to be transpiled', () => {

  const contentOfSnippet = readJSFile('tests/composites/snippets/mix_of_expressions_03.js');
  const archaizedCode = transpile(contentOfSnippet);
  
  const transpiledCode = `function filterKeyVal(key, value, arr) {
        return arr.filter(function (person) {
            return person[key] == value;
        });
    }
    var arrOfCharacters = [
        {
            name: 'Gandalf',
            wizard: true
        },
        {
            name: 'Aragorn',
            wizard: false
        },
        {
            name: 'Frodo',
            wizard: false
        }
    ];
    var list = filterKeyVal('wizard', true, arrOfCharacters);
    var anotherListOfWizards = [
        {
            name: 'Merlin',
            wizard: true
        },
        {
            name: 'Morgana',
            wizard: true
        }
    ];
    var completeList = [].concat(list, anotherListOfWizards);
    console.log(completeList);`;

  expect(archaizedCode).toEqual(transpiledCode);
});

