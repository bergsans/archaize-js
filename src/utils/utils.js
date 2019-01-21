const { generate } = require('escodegen');
const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { parseScript } = require('esprima');
const { debugMsg, redTxt } = require('dandy-ui');
const { traverse, replace } = require('estraverse');
const { isTemplateLiterals, manipulateTemplateLiterals } = require('../transpiler/templateliteral.js');

const makeAST = (expression) => parseScript(expression);

function transpile(expression) {
  const code = readJSFile('../random_js_code.js');

  const ast = makeAST(code);

  if(ast.type === 'Program') {
    replace(ast, {
      enter: (node) => {
        if(isTemplateLiterals(node)) {
          let tempNode = manipulateTemplateLiterals(node);      
          return tempNode;
        }  
      }
    });
  } else {
    redTxt('This is not ES2015/ES6 code. Nothing to transpile.');
    process.exit(1);
  }
  
  console.log(generate(ast));
  writeToFile("templateliterals2", ast);
}
transpile("");

module.exports = { makeAST, transpile };

