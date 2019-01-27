const { debugMsg, redTxt } = require('dandy-ui');

const { generate } = require('escodegen');
const { parseScript } = require('esprima');
const { traverse, replace } = require('estraverse');
const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { isTemplateLiterals, replaceTemplateLiterals } = require('../transpiler/templateliteral.js');
const { isVariableDeclaration, replaceVariableDeclarations } = require('../transpiler/variabledeclaration.js');
const { isCallExpression, replaceCallExpression } = require('../transpiler/callexpression.js');
const { isFunctionDeclaration, replaceFunctionDeclaration } = require('../transpiler/functiondeclarator.js');
const { includesAST } = require('../transpiler/polyfills/AST/_ast_includes.js');

const makeAST = (expression) => parseScript(expression, { comment: true, loc: true });

function transpile(expression) {

  var ast = makeAST(expression);

  replace(ast, {
    enter: (node) => {
      if (isTemplateLiterals(node)) {
        let tempNode = replaceTemplateLiterals(node);      
        return tempNode;
      } else if (isVariableDeclaration(node)) {
        let tempNode = replaceVariableDeclarations(node);

        if (tempNode[1] === 'POLYFILL_INCLUDES') {
          let includesES6AST = JSON.stringify(includesAST)
          let parsed = JSON.parse(includesES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]
        } else {
          return tempNode;
        }
      } else if (isCallExpression(node)) {
        let tempNode = replaceCallExpression(node);
        return tempNode; 
      } else if (isFunctionDeclaration(node)) {
        let tempNode = replaceFunctionDeclaration(node);
        return tempNode;
      }
    }
  }); 
  return generate(ast);
}
/*
let c = readJSFile('../random_js_code.js');
let someCode = transpile(c);
console.log(someCode);
*/
module.exports = { makeAST, transpile };

