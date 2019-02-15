/*
 * Dependencies
 *
 */

// External dependencies
const { generate } = require('escodegen');
const { parseScript } = require('esprima');
const { replace } = require('estraverse');

// Internal dependencies
const { replaceTemplateLiterals } = require('../transpiler/templateliteral.js');
const { replaceVariableDeclarations } = require('../transpiler/variabledeclaration.js');
const { replaceCallExpression } = require('../transpiler/callexpression.js');
const { replaceFunctionDeclaration } = require('../transpiler/functiondeclarator.js');
const { replaceIfStatement } = require('../transpiler/ifstatement.js'); 
const { replaceReturnStatement } = require('../transpiler/returnstatement.js');
const { includesAST } = require('../transpiler/polyfills/AST/_ast_includes.js');
const { startsWithAST } = require('../transpiler/polyfills/AST/_ast_startsWith.js');
const { endsWithAST } = require('../transpiler/polyfills/AST/_ast_endsWith.js');
const { repeatAST } = require('../transpiler/polyfills/AST/_ast_repeat.js');
const { findAST } = require('../transpiler/polyfills/AST/_ast_find.js');
const { findIndexAST } = require('../transpiler/polyfills/AST/_ast_findIndex.js');
const { arr_includesAST } = require('../transpiler/polyfills/AST/_ast_arr_includes.js');


/*
 * Generate AST (including comments and locations)
 */
const makeAST = (expression) => parseScript(expression, { comment: true, loc: true });

/*
 * Transpile AST to Code
 *
 */
function transpile(expression) {

  let isPolyfillPresent = {
    'POLYFILL_ARR_INCLUDES': false,
    'POLYFILL_INCLUDES': false,
    'POLYFILL_REPEAT': false,
    'POLYFILL_FIND': false,
    'POLYFILL_FIND_INDEX': false,
    'POLYFILL_STARTSWITH': false,
    'POLYFILL_ENDSWITH': false
  };
  
  const mappingsOfPolyfillAST = {
    'POLYFILL_ARR_INCLUDES': arr_includesAST,
    'POLYFILL_INCLUDES': includesAST,
    'POLYFILL_REPEAT': repeatAST,
    'POLYFILL_FIND': findAST,
    'POLYFILL_FIND_INDEX': findIndexAST,
    'POLYFILL_STARTSWITH': startsWithAST,
    'POLYFILL_ENDSWITH': endsWithAST
  };


  let ast = makeAST(expression);

  replace(ast, {
    enter: (node) => {
      let tempNode = workWithNode(node, ast);    

      if(Array.isArray(tempNode)) {

        let  polyfill  = tempNode[1].polyfillType;

        if(!isPolyfillPresent[polyfill]) {
          isPolyfillPresent = { ...isPolyfillPresent, [polyfill]: true };
          const polyfillAST = mappingsOfPolyfillAST[polyfill];
          const includesES6AST = JSON.stringify(polyfillAST);
          const parsed = JSON.parse(includesES6AST);
          ast.body = [parsed, ...ast.body];  
        }
        return tempNode[0]; 
      } else {
        return tempNode;
      }
    
    }
  }); 
  return generate(ast);
}


/*
 * Helper method for conditions 
 * 
 * 
 * The sole purpose is to avoid a massive block
 * of if-else statements
 */
function workWithNode(node, ast) {

  const { type } = node;

  const nodeTypes = {
    VariableDeclaration: () => replaceVariableDeclarations(node),
    CallExpression: () => replaceCallExpression(node),
    FunctionExpression: () => replaceFunctionDeclaration(node),
    FunctionDeclaration: () => replaceFunctionDeclaration(node),
    IfStatement: () => replaceIfStatement(node, ast),
    ReturnStatement: () => replaceReturnStatement(node),
    TemplateLiteral: () => replaceTemplateLiterals(node),
    VariableDeclaration: () => replaceVariableDeclarations(node, ast)
  };
  return (nodeTypes[type]? nodeTypes[type]() : node);
}

// Export functions to NPM package (<root>/index.js)
module.exports = { makeAST, transpile };

