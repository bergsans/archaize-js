const isCallExpression = (node) => (node.type === 'CallExpression');

function replaceCallExpression(node) {
   
  if (node.arguments.includes('ArrowFunctionExpression')) {

    node.arguments.forEach((arg) => {    
      if (arg.body.type !== 'BlockStatement') {
       
        let oldBody = { ...arg.body };
        let newBody = { 
          type: 'BlockStatement',
          body: [
            {
              type: 'ReturnStatement',
              argument: { ...oldBody }
            } 
          ]
        };
        arg.expression = false;
        arg.body = newBody;
      } else {
        arg.body.type = 'BlockStatement';
      }  
    arg.type = 'FunctionExpression';

  });

  } 

  node.arguments.forEach((arg) => {
    if(arg.type.includes("ThisExpression")) {
      arg.type = 'Identifier';
      arg.name = 'self';
    }
  });
  
  return node;
}

module.exports = { isCallExpression, replaceCallExpression };



