/*
 *          ISSUES
 *                  
 *          This is a collection of tests that fails.
 *          
 *          Collecting these tasks in a separate file kind of breaks
 *          with the custom Jest way of organizing tests. However, in this
 *          case I think there are good reasons to excuse this behaviour. Normally,
 *          there are good reasons related to general understanding and 'readability'
 *          to follow practice in my view though. But I believe it's helps the 'reader'
 *          of this code-base to understand on what points the transpiler breaks, and since
 *          it won't be finished in time (it's a too large project to be completed in two months)
 *          I guess it will be handy to proceed in this manner. It would also be possible to 
 *          regard this as a future to-do list for Archaize JS.         
 *           
 */
const { transpile } = require('../../src/utils/utils.js');
const { readJSFile } = require('../../src/helpers/helpers.js');


/*
 *             Point of failure:
 *
 *             var theGreatGruffalonTest = function (arrayOfNames) {
 *                 return arrayOfNames.includes('Gruffalon') ? true : false;
 *             };
 *
 *             This getts returned inaccurately like this:
 *        
 *             var theGreatGruffalonTest = function (arrayOfNames) ({
 *                 return arrayOfNames.includes('Gruffalon') ? true : false;
 *             });
 *             
 *             >> ({ ... }} instead of { ... }
 */           
test('Expect composite function to be accurately transpiled to ES5', () => {
  const contentOfSnippet = readJSFile('tests/snippets/arrowfunctiondeclaration2.js');
	const archaizedCode = transpile(contentOfSnippet);

  const transpiledCode = `var theGreatGruffalonTest = function (arrayOfNames) {
    return arrayOfNames.includes('Gruffalon') ? true : false;
  };

var array = [
    'Gruffalon',
    'Little G.',
    'Virginia Woolf'
];
var isGruffalonIncluded = theGreatGruffalonTest(array);
console.log(isGruffalonIncluded);`;

  expect(archaizedCode).toEqual(transpiledCode);
});


/*
 *             Point of failure:
 *
 *             var completeList = [].concat(list, anotherListOfWizards);
 *            
 *             Returned:
 *
 *             var completeList = [].concat(list, []);
 */
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


/*
 *             Point of failure:
 *
 *             The polyfill doesn't handle the second and third (possible) parameter
 *
 */
test('Use of second parameter in find method', () => {
 
  const contentOfSnippet = readJSFile('tests/snippets/polyfill_find2.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = ``;
  expect(archaizedCode).toEqual(transpiledCode);

});


/*
 *             Point of failure:
 *
 *             The polyfill doesn't handle the second and third (possible) parameter
 *
 */
test('Use of second parameter in findIndex method', () => {
 
  const contentOfSnippet = readJSFile('tests/snippets/polyfill_findIndex2.js');
  const archaizedCode = transpile(contentOfSnippet);
  const transpiledCode = ``;
  expect(archaizedCode).toEqual(transpiledCode);

});


