const isFunctionDeclaration = (node) => (node.type === 'FunctionExpression');

function replaceFunctionDeclaration(node) {
  if(node.body.body) {
    const body = [...node.body.body];
    const callExpressionsInBody = body.filter((el) => el.type === 'ExpressionStatement');
    
    if(callExpressionsInBody) {
      let temp = [];
      callExpressionsInBody.forEach(expr => temp = [...temp, expr.expression.arguments]); 
      let matches = temp.find((el) => el[0].type === 'ThisExpression');
      
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

