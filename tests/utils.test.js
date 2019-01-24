const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

const expected_output_of_the_integer_five = JSON.stringify(
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": 5,
        "raw": "5",
        "loc": {
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 1
          }
        }
      },
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 1,
      "column": 1
    }
  },
  "comments": []
}
);


test('expect \"5\" with makeAST to equal the correct AST tree.', () => { 
  const actualASTForFive = JSON.stringify(makeAST('5'));
  expect(actualASTForFive).toEqual(expected_output_of_the_integer_five)
});

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


test('expect arrow functions to be converted to functions', () => {
 
  const contentOfSnippet = readJSFile('tests/snippets/arrowfunctiondeclaration.js');
  const archaizedCode = transpile(contentOfSnippet);

  const transpiledCode = `var foo = function () {
    var self = this;
    var bar = 'The current date is ' + Date() + '. 2 + 2 = ' + (2 + 2) + '.';
    console.log(self, bar);
};`;

  expect(archaizedCode).toEqual(transpiledCode)
});
/*
 * Because Jest tests *are* JavaScript code, executed by the Node.js interpretator
 * errornous syntax is impossible, while testing the function makeAST.
 *
 * This would **not** run:
 *
 * const someCode2 = JSON.stringify(makeAST('$ / @'));
 * test(`expect '$ / @ to be nonsensical, an error.`, () => {
 * expect(someCode2).toBe("error")
 * });
 *
 */
