const isReturnStatement = (node) => node.type === 'ReturnStatement'; 

function replaceReturnStatement(node) {
  if(node.argument.type === 'BinaryExpression' && node.argument.operator === '===') {
    node.argument.operator = '==';
  }

  return node;
}
module.exports = { isReturnStatement, replaceReturnStatement  };

