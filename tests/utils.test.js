const { makeAST, transpile } = require('../src/utils/utils.js');

const expected_output_of_the_integer_five = JSON.stringify(
  { 'type':'Program',
    'start':0,
    'end':1,
    'body':[
      {
        'type':'ExpressionStatement',
        'start':0,
        'end':1,
        'expression': {
          'type':'Literal',
          'start':0,
          'end':1,
          'value':5,
          'raw':'5'
      }
    }
  ],
  'sourceType':'script'
});


test(`expect '5' to equal the corresponding AST tree.`, () => { 
  const someCode1 = JSON.stringify(makeAST('5'));
  expect(someCode1).toBe(expected_output_of_the_integer_five)
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
