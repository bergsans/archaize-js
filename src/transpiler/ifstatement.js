const isIfStatement = (node) => node.type === 'IfStatement';

function replaceIfStatement(node) {
  if(node.test.type === 'BinaryExpression' && node.test.operator === '===') {
    node.test.operator = '==';
  }
  return node;
}
module.exports = { isIfStatement, replaceIfStatement };

