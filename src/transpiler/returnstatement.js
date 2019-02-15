function replaceReturnStatement(node) {

  let newNode = { ...node };
  const { type, operator } = newNode.argument;
  if (type === 'BinaryExpression' && operator === '===') {
    newNode.argument.operator = '==';
  }
  return newNode;
}
module.exports = { replaceReturnStatement  };

