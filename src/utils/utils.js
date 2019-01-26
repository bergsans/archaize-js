const { debugMsg, redTxt } = require('dandy-ui');

const { generate } = require('escodegen');
const { parseScript } = require('esprima');
const { traverse, replace } = require('estraverse');

const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { isTemplateLiterals, replaceTemplateLiterals } = require('../transpiler/templateliteral.js');
const { isVariableDeclaration, replaceVariableDeclarations } = require('../transpiler/variabledeclaration.js');
const { isCallExpression, replaceCallExpression } = require('../transpiler/callexpression.js');
const { isFunctionDeclaration, replaceFunctionDeclaration } = require('../transpiler/functiondeclarator.js');

const makeAST = (expression) => parseScript(expression, { comment: true, loc: true });

function transpile(expression) {

  const ast = makeAST(expression);

  replace(ast, {
    enter: (node) => {
      if (isTemplateLiterals(node)) {
        let tempNode = replaceTemplateLiterals(node);      
        return tempNode;
      } else if (isVariableDeclaration(node)) {
        let tempNode = replaceVariableDeclarations(node);
        return tempNode;
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
module.exports = { makeAST, transpile };

