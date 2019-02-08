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
  }
  if (polyfill) {
    return [node, polyfill];
  } else {
    return node;
  }
}
module.exports = { isIfStatement, replaceIfStatement };

