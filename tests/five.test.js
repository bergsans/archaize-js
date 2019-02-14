const { makeAST, transpile } = require('../src/utils/utils.js');
const { readJSFile } = require('../src/helpers/helpers.js');

const expected_output_of_the_integer_five = JSON.stringify(
  {
    'type': 'Program',
    'body': [
      {
        'type': 'ExpressionStatement',
        'expression': {
          'type': 'Literal',
          'value': 5,
          'raw': '5',
          'loc': {
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 1
            }
          }
        },
        'loc': {
          'start': {
            'line': 1,
            'column': 0
          },
          'end': {
            'line': 1,
            'column': 1
          }
        }
      }
    ],
    'sourceType': 'script',
    'loc': {
      'start': {
        'line': 1,
        'column': 0
      },
      'end': {
        'line': 1,
        'column': 1
      }
    },
    'comments': []
  }
);

test('Expect \"5\" with makeAST to equal the correct AST tree.', () => { 
  const actualASTForFive = JSON.stringify(makeAST('5'));
  expect(actualASTForFive).toEqual(expected_output_of_the_integer_five);
});

