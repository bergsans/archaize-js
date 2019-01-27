const isFunctionDeclaration = (node) => (node.type === 'FunctionExpression');

function replaceFunctionDeclaration(node) {

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

