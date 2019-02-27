const { traverse } = require('estraverse');

const isMethodES6 = (node, methodName, index) => (node.declarations[index]
     && node.declarations[index].init
     && node.declarations[index].init.callee
     && node.declarations[index].init.callee.property
     && node.declarations[index].init.callee.property.name
     && node.declarations[index].init.callee.property.name === methodName);

function returnType(name, ast) {
  let type = undefined;
  traverse(ast, {
    enter: (node) => {
      if(node.type === 'VariableDeclaration') {
        if(node.declarations[0].id.name === name) {
          type = node.declarations[0].init.type;
        }
      }
    }
  });
  return type;
}

let namesIds = [];

function replaceVariableDeclarations(node, ast) {
  let polyfill = undefined;

  let newNode = { ...node };

  newNode.declarations.forEach((declaration, i) => {

    if (declaration.init && declaration.init.type === 'BinaryExpression' && declaration.init.operator === '===') {
      declaration.init.operator = '==';
    } else if (declaration.init && declaration.init && declaration.init.type === 'ArrayExpression' && declaration.init.elements
         && declaration.init.elements.find((el) => el.type === 'SpreadElement')) {

      let newEls = declaration.init.elements.filter((el) => el.type !== 'SpreadElement');
      let spread = declaration.init.elements.filter((el) => el.type === 'SpreadElement');
      let tempNode =  {
        type: 'VariableDeclaration',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: declaration.id.name,

            },
            init: {
              type: 'CallExpression',
              callee: {
                type: 'MemberExpression',
                computed: false,
                object: {
                  type: 'ArrayExpression',
                  elements: [],

                },
                property: {
                  type: 'Identifier',
                  name: 'concat',

                }
              },
              arguments: [
                {
                  type: 'Identifier',
                  name: spread[i].argument.name
                },
                {
                  type: 'ArrayExpression',
                  elements: newEls
                }
              ]
            }
          }
        ],
        kind: 'var'
      };
      newNode = tempNode;
    }

    let idName = declaration.id.name;
    namesIds = [...namesIds, idName];
    if (namesIds.filter((elIdName) => elIdName === idName && returnType(elIdName) === 'VariableDeclaration').length > 1) {
      const count = namesIds.filter((elIdName) => elIdName === idName).length;
      declaration.id.name = `${idName}${count}`;
    }

    if (declaration.init.type === 'ArrowFunctionExpression') {

      declaration.init.type = 'FunctionExpression';
/*      
      if(declaration.init.body && declaration.init.body.type !== 'BlockStatement') {
   
          let oldBody = { ...declaration.init.body };
          let newBody = { 
            type: 'BlockStatement',
            body: [
              {
                type: 'ReturnStatement',
                argument: { ...oldBody }
              } 
            ]
          };
          declaration.init.body.expression = false;
          declaration.init.body = newBody;

      }
*/
      if(declaration.init.params.some((param) => param.type === 'RestElement')) {
        let newParams = declaration.init.params.filter((param) => param.type !== 'RestElement');
        declaration.init.params = newParams;
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
        
        let oldBody = declaration.init.body.length > 0? [...declaration.init.body] : null;

        if(oldBody) {
          declaration.init.body.body = [funcArguments, ...oldBody];
        } else {
          declaration.init.body.body = [funcArguments];
        }
    
      }
    } else if (declaration.init.type === 'ObjectExpression') {
      declaration.init.properties.forEach((props) => props.shorthand = false);
    }

    if (isMethodES6(newNode, 'includes', i)) {
      let name = declaration.init.callee.object.name;
      let type = returnType(name, ast);
      if (type === 'ArrayExpression') {
        polyfill = 'POLYFILL_ARR_INCLUDES';
      } else {
        polyfill = 'POLYFILL_INCLUDES';
      }
    } else if (isMethodES6(newNode, 'startsWith', i)) {
      polyfill = 'POLYFILL_STARTSWITH';
    } else if (isMethodES6(newNode, 'endsWith', i)) {
      polyfill = 'POLYFILL_ENDSWITH';
    } else if (isMethodES6(newNode, 'repeat', i)) {
      polyfill = 'POLYFILL_REPEAT';
    } else if (isMethodES6(newNode, 'find', i)) {
      polyfill = 'POLYFILL_FIND';
    } else if (isMethodES6(newNode, 'findIndex', i)) {
      polyfill = 'POLYFILL_FIND_INDEX';
    }
  });

  if (polyfill) {
    return [{
      ...newNode,
      kind: 'var' }, 
    {
      polyfillType: polyfill }
    ];
  } else {
    return { ...newNode,
      kind: 'var'
    };
  }
}
module.exports = { replaceVariableDeclarations };

