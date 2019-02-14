function replaceReturnStatement(node) {
  const { type, operator } = node.argument;
  if (type === 'BinaryExpression' && operator === '===') {
    node.argument.operator = '==';
  }
  return node;
}
module.exports = { replaceReturnStatement  };


