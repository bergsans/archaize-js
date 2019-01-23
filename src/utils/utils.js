const { debugMsg, redTxt } = require('dandy-ui');

const { generate } = require('escodegen');
const { parseScript } = require('esprima');
const { traverse, replace } = require('estraverse');

const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { isTemplateLiterals, replaceTemplateLiterals } = require('../transpiler/templateliteral.js');
const { isVariableDeclaration, replaceVariableDeclarations } = require('../transpiler/variabledeclaration.js');

const makeAST = (expression) => parseScript(expression, { comment: true, loc: true});

function transpile(expression) {

  const code = readJSFile('../random_js_code.js');

  const ast = makeAST(code);

  replace(ast, {
    enter: (node) => {
      if (isTemplateLiterals(node)) {
        let tempNode = replaceTemplateLiterals(node);      
        return tempNode;
      } else if(isVariableDeclaration(node)) {
        let tempNode = replaceVariableDeclarations(node);
        return tempNode;
      }  
    }
  }); 

  console.log(generate(ast));
  writeToFile('templateliterals', ast);
}
transpile("");

module.exports = { makeAST, transpile };

