const { debugMsg, redTxt } = require('dandy-ui');

const { generate } = require('escodegen');
const { parseScript } = require('esprima');
const { traverse, replace } = require('estraverse');

const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { isTemplateLiterals, replaceTemplateLiterals } = require('../transpiler/templateliteral.js');
const { isVariableDeclaration, replaceVariableDeclarations } = require('../transpiler/variabledeclaration.js');


/*
 * function return the Abstract Syntax Tree (AST)
 */
const makeAST = (expression) => parseScript(expression);

/*
 * 
 */

function transpile(expression) {
  const code = readJSFile('../random_js_code.js');

  const ast = makeAST(code);

  if(ast.type === 'Program') {
    replace(ast, {
      enter: (node) => {
        if(isTemplateLiterals(node)) {
          let tempNode = replaceTemplateLiterals(node);      
          return tempNode;
        } else if(isVariableDeclaration(node)) {
          let tempNode = replaceVariableDeclarations;
          return tempNode;
        }  
      }
    });
  } else {
    redTxt('This is not ES2015/ES6 code. Nothing to transpile.');
    process.exit(1);
  }
  
  console.log(generate(ast));
  writeToFile('templateliterals2', ast);
}
transpile("");

module.exports = { makeAST, transpile };

