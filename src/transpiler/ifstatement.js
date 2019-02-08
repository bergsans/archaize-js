const { traverse } = require('estraverse');

const isIfStatement = (node) => node.type === 'IfStatement';

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

  let polyfill = undefined;

  if (node.test.type === 'BinaryExpression' && node.test.operator === '===') {
    node.test.operator = '==';
  } else if (node.test.type === 'CallExpression' && node.test.callee.property.name === 'includes') {
    
    let name = node.test.callee.object.name;
    let type = returnType(name, ast);
    if (type === 'ArrayExpression') {
        polyfill = 'POLYFILL_ARR_INCLUDES';
    } else {
        polyfill = 'POLYFILL_INCLUDES';
    }
  } else if (node.test.type === 'CallExpression' && node.test.callee.property.name === 'repeat') {
    polyfill = 'POLYFILL_REPEAT';
  } else if (node.test.type === 'CallExpression' && node.test.callee.property.name === 'startsWith') {
    polyfill = 'POLYFILL_STARTSWITH';
  } else if (node.test.type === 'CallExpression' && node.test.callee.property.name === 'endsWith') {
    polyfill = 'POLYFILL_ENDSWITH';
  } else if (node.test.type === 'CallExpression' && node.test.callee.property.name === 'find') {
    polyfill = 'POLYFILL_FIND';
  } else if (node.test.type === 'CallExpression' && node.test.callee.property.name === 'findIndex') {
    polyfill = 'POLYFILL_FIND_INDEX';
  }
  if (polyfill) {
    return [node, polyfill];
  } else {
    return node;
  }
}
module.exports = { isIfStatement, replaceIfStatement };

