const isCallExpression = (node) => (node.type === 'CallExpression');

function replaceCallExpression(node) {

  if (node.arguments.includes('ArrowFunctionExpression')) {

    if (node.arguments[0].body.type !== 'BlockStatement') {
     
      let oldBody = { ...node.arguments[0].body };
      let newBody = { 
        type: 'BlockStatement',
        body: [
          {
            type: 'ReturnStatement',
            argument: { ...oldBody }
          } 
        ]
      };
      node.arguments[0].expression = false;
      node.arguments[0].body = newBody;
    } else {
      node.arguments[0].body.type = 'BlockStatement';
    }  
  node.arguments[0].type = 'FunctionExpression';
  }
  return node;
}

module.exports = { isCallExpression, replaceCallExpression };



