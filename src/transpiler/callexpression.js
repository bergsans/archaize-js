const isCallExpression = (node) => (node.type === 'CallExpression');

function replaceCallExpression(node) {
   
  if (node.arguments.find((el) => el.type === 'ArrowFunctionExpression')) {

    node.arguments.forEach((arg, i) => {    
      if (arg.body.type !== 'BlockStatement') {
       
        let oldBody = { ...node.arguments[i].body };
        let newBody = { 
          type: 'BlockStatement',
          body: [
            {
              type: 'ReturnStatement',
              argument: { ...oldBody }
            } 
          ]
        };
        node.arguments[i].expression = false;
        node.arguments[i].body = newBody;
      } else {
        node.arguments[i].body.type = 'BlockStatement';
      }  
    node.arguments[i].type = 'FunctionExpression';

  });

  } 

  node.arguments.forEach((arg, i) => {
    if (arg.type === 'ThisExpression') {
      node.arguments[i].type = 'Identifier';
      node.arguments[i].name = 'self';
    } else if(arg.type === 'BinaryExpression') {
      node.arguments[i].operator = '==';
    }
  });
  
  return node;
}

module.exports = { isCallExpression, replaceCallExpression };



