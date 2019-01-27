const { debugMsg, redTxt } = require('dandy-ui');

const { generate } = require('escodegen');
const { parseScript } = require('esprima');
const { replace } = require('estraverse');
const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { isTemplateLiterals, replaceTemplateLiterals } = require('../transpiler/templateliteral.js');
const { isVariableDeclaration, replaceVariableDeclarations } = require('../transpiler/variabledeclaration.js');
const { isCallExpression, replaceCallExpression } = require('../transpiler/callexpression.js');
const { isFunctionDeclaration, replaceFunctionDeclaration } = require('../transpiler/functiondeclarator.js');
const { includesAST } = require('../transpiler/polyfills/AST/_ast_includes.js');
const { startsWithAST } = require('../transpiler/polyfills/AST/_ast_startsWith.js');
const { endsWithAST } = require('../transpiler/polyfills/AST/_ast_endsWith.js');
const { repeatAST } = require('../transpiler/polyfills/AST/_ast_repeat.js');
const { findAST } = require('../transpiler/polyfills/AST/_ast_find.js');
const { findIndexAST } = require('../transpiler/polyfills/AST/_ast_findIndex.js');
const { arr_includesAST } = require('../transpiler/polyfills/AST/_ast_arr_includes.js');

const makeAST = (expression) => parseScript(expression, { comment: true, loc: true });

function transpile(expression) {

  var ast = makeAST(expression);

  replace(ast, {
    enter: (node) => {
      if (isTemplateLiterals(node)) {
        let tempNode = replaceTemplateLiterals(node);      
        return tempNode;
      } else if (isVariableDeclaration(node)) {
        let tempNode = replaceVariableDeclarations(node, ast);
        if (tempNode[1] === 'POLYFILL_INCLUDES') {
          let includesES6AST = JSON.stringify(includesAST)
          let parsed = JSON.parse(includesES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0];
        } else if (tempNode[1] === 'POLYFILL_STARTSWITH') {
          let startsWithES6AST = JSON.stringify(startsWithAST)
          let parsed = JSON.parse(startsWithES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]; 
       } else if (tempNode[1] === 'POLYFILL_ENDSWITH') {
          let endsWithES6AST = JSON.stringify(endsWithAST)
          let parsed = JSON.parse(endsWithES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]; 
       } else if (tempNode[1] === 'POLYFILL_REPEAT') {
          let repeatES6AST = JSON.stringify(repeatAST)
          let parsed = JSON.parse(repeatES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]; 
       } else if (tempNode[1] === 'POLYFILL_FIND') {
          let findES6AST = JSON.stringify(findAST)
          let parsed = JSON.parse(findES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]; 
       } else if (tempNode[1] === 'POLYFILL_FIND_INDEX') {
          let findIndexES6AST = JSON.stringify(findIndexAST)
          let parsed = JSON.parse(findIndexES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]; 
       } else if (tempNode[1] === 'POLYFILL_ARR_INCLUDES') {
          let arr_includesES6AST = JSON.stringify(arr_includesAST)
          let parsed = JSON.parse(arr_includesES6AST)
          ast.body = [parsed, ...ast.body];
          return tempNode[0]; 
       }else {
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
let c = readJSFile('../transpiler/polyfills/arr_includes.js');
let someCode = makeAST(c);
writeToFile("arr_includes", someCode);
*/
/*
let c = readJSFile('../random_js_code.js');
let someCode = transpile(c);
writeToFile("equal", makeAST(c))//someCode);
*/
//console.log(someCode);

module.exports = { makeAST, transpile };

