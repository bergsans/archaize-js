const isFunctionDeclaration = (node) => (node.type === 'FunctionExpression') || (node.type === 'FunctionDeclaration');

function replaceFunctionDeclaration(node) {

  if(node.type === 'FunctionDeclaration' && node.params.find((el) => el.type === 'RestElement')) {
  
      let newParams = node.params.filter((param) => param.type !== 'RestElement');
      node.params = newParams;

      let funcArguments = {
        type: "VariableDeclaration",
        declarations: [{
          type: "VariableDeclarator",
          id: {
            type: "Identifier",
            name: "args"
          },
          init: {
            type: "CallExpression",
            callee: {
              type: "MemberExpression",
              computed: false,
              object: {
                type: "Identifier",
                name: "Object"
              },
              property: {
                type: "Identifier",
                name: "values"
              }
            },
            arguments: [{
              type: "Identifier",
              name: "arguments"
            }]
          }
        }],
        kind: "var"
      }
  
    let oldBody = [...node.body.body];
    node.body.body = [funcArguments, ...oldBody]

  }

  if(node.body.body) {
    const body = [...node.body.body];
    const callExpressionsInBody = body.filter((el) => el.type === 'ExpressionStatement');
    
    if(callExpressionsInBody) {
      let temp = [];
      callExpressionsInBody.forEach(expr => temp = [...temp, expr.expression.arguments]); 
      let exprArr = temp.flat();
 
      let matches = exprArr.some((el) => el.type === 'ThisExpression');
      
      if(matches) {
        let thisDeclared = {
          type: 'VariableDeclaration',
          declarations: [
            { 
              type: 'VariableDeclarator',
              id: {
                type: 'Identifier',
                name: 'self'
              },
              init: {
                type: 'Identifier',
                name: 'this'
              }
            }
          ],
          kind: 'var'
        };
        let declarations = [thisDeclared, ...node.body.body];
        node.body.body = declarations;
      }

    }

  }
  node.type = 'FunctionExpression';
  return node;
}
module.exports = { isFunctionDeclaration, replaceFunctionDeclaration };

