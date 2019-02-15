const { traverse } = require('estraverse');

/* 
 * Returns type of Node. This function is not optimal.
 * It reproduces the traverse logic from start; it should
 * be possible to narrow this down to relevant scoping in the future.
 * 
 */
function returnType(name, ast) {
  let type = undefined;
  traverse(ast, {
    enter: (node) => {
      if(node.type === 'VariableDeclaration') {
        if(node.declarations[0].id.name === name) {
          type = node.declarations[0].init.type;
        }
      }
    }
  });
  return type;
}

function replaceIfStatement(node, ast) {

  let newNode = { ...node };

  let polyfill = undefined;

  if (newNode.test.type === 'BinaryExpression' && newNode.test.operator === '===') {
    newNode.test.operator = '==';
  } else if (newNode.test.type === 'CallExpression' && newNode.test.callee.property.name === 'includes') {
    
    let name = newNode.test.callee.object.name;
    let type = returnType(name, ast);
    if (type === 'ArrayExpression') {
      polyfill = 'POLYFILL_ARR_INCLUDES';
    } else {
      polyfill = 'POLYFILL_INCLUDES';
    }
  } else if (newNode.test.type === 'CallExpression' && newNode.test.callee.property.name === 'repeat') {
    polyfill = 'POLYFILL_REPEAT';
  } else if (newNode.test.type === 'CallExpression' && newNode.test.callee.property.name === 'startsWith') {
    polyfill = 'POLYFILL_STARTSWITH';
  } else if (newNode.test.type === 'CallExpression' && newNode.test.callee.property.name === 'endsWith') {
    polyfill = 'POLYFILL_ENDSWITH';
  } else if (newNode.test.type === 'CallExpression' && newNode.test.callee.property.name === 'find') {
    polyfill = 'POLYFILL_FIND';
  } else if (newNode.test.type === 'CallExpression' && newNode.test.callee.property.name === 'findIndex') {
    polyfill = 'POLYFILL_FIND_INDEX';
  }
  if (polyfill) {
    return [
      {
        ...newNode 
      },{ 
        polyfillType: polyfill
      }
    ];
  } else {
    return newNode;
  }
}
module.exports = { replaceIfStatement };


