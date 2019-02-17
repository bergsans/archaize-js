function replaceFunctionDeclaration(node) {
  
	let newNode = { ...node };	

  if (newNode.type === 'FunctionDeclaration' && newNode.params.find((el) => el.type === 'AssignmentPattern')) {

    newNode.params.forEach((param, i) => {
      if (param.type === 'AssignmentPattern') {
        newNode.params[i] = { type: 'Identifier', name: param.left.name };
        let newVarInBody = {
          type: 'VariableDeclaration',
          declarations: [
            {
              type: 'VariableDeclarator',
              id: {
                type: 'Identifier',
                name: param.left.name
              },
              init: {
                type: 'LogicalExpression',
                operator: '||',
                left: {
                  type: 'Identifier',
                  name: param.left.name
                },
                right: {
                  type: 'Literal',
                  value: param.right.value,
                  raw: param.right.raw
                }
              }
            }
          ],
          kind: 'var'
        };
        let oldBody = [...newNode.body.body];
        newNode.body.body = [newVarInBody, ...oldBody];
      }
    });
  } else if (newNode.type === 'FunctionDeclaration' && newNode.params.find((el) => el.type === 'RestElement')) {

    let restElIndex = newNode.params.findIndex((el) => el.type === 'RestElement');
    let tempName = newNode.params[restElIndex].argument.name;

    for(let el of newNode.body.body) {
      if(el.type === 'ExpressionStatement') {
        el.expression.arguments.forEach((el) => {
          if(el.name === tempName) {
            el.name = 'args';
          }
        });
      } else if(el.type === 'ReturnStatement') {
        if(el.argument.callee.object.name === tempName) {
          el.argument.callee.object.name = 'args';
        }
      }
    }

    let newParams = newNode.params.filter((param) => param.type !== 'RestElement');
    newNode.params = newParams;
    let funcArguments = {
      type: 'VariableDeclaration',
      declarations: [{
        type: 'VariableDeclarator',
        id: {
          type: 'Identifier',
          name: 'args'
        },
        init: {
          type: 'CallExpression',
          callee: {
            type: 'MemberExpression',
            computed: false,
            object: {
              type: 'Identifier',
              name: 'Object'
            },
            property: {
              type: 'Identifier',
              name: 'values'
            }
          },
          arguments: [{
            type: 'Identifier',
            name: 'arguments'
          }]
        }
      }],
      kind: 'var'
    };
    let oldBody = [...newNode.body.body];
    newNode.body.body = [funcArguments, ...oldBody];
  }
  if (newNode.body && newNode.body.body) {
    const body = [...newNode.body.body];
    const callExpressionsInBody = body.filter((el) => el.type === 'ExpressionStatement');
    if (callExpressionsInBody) {
      let temp = [];
      callExpressionsInBody.forEach(expr => temp = [...temp, expr.expression.arguments]);
      let temp2 = [].concat(...temp);
      let matches = temp2.some((el) => el.type === 'ThisExpression');
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
        let declarations = [thisDeclared, ...newNode.body.body];
        newNode.body.body = declarations;
      }
    }
  }
  newNode.type = 'FunctionExpression';
  return newNode;
}
module.exports = { replaceFunctionDeclaration };

