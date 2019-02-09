const { traverse } = require('estraverse');

const isMethodES6 = (node, mName, i) => (node.declarations[i]
     && node.declarations[i].init
     && node.declarations[i].init.callee
     && node.declarations[i].init.callee.property
     && node.declarations[i].init.callee.property.name
     && node.declarations[i].init.callee.property.name === mName);

const isVariableDeclaration = (node) => (node.type === 'VariableDeclaration');

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

  node.declarations.forEach((declr, i) => {
    if (declr.init && declr.init.type === 'BinaryExpression' && declr.init.operator === '===') {
      declr.init.operator = '==';
    } else if (declr.init && declr.init && declr.init.type === 'ArrayExpression' && declr.init.elements
         && declr.init.elements.find((el) => el.type === 'SpreadElement')) {

      let newEls = declr.init.elements.filter((el) => el.type !== 'SpreadElement');
      let spread = declr.init.elements.filter((el) => el.type === 'SpreadElement');
      let newNode =  {
        type: 'VariableDeclaration',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: declr.id.name,

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
                  name: spread[0].argument.name
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
      node = newNode;
    }

    let idName = declr.id.name;
    namesIds = [...namesIds, idName];
    if (namesIds.filter((elIdName) => elIdName === idName && returnType(elIdName) === 'VariableDeclaration').length > 1) {
      const count = namesIds.filter((elIdName) => elIdName === idName).length;
      declr.id.name = `${idName}${count}`;
    }
    if (declr.init.type === 'ArrowFunctionExpression') {
      declr.init.type = 'FunctionExpression';

/*
      if(declr.init.params.some((param) => param.type === 'RestElement')) {
    let newParams = declr.init.params.filter((param) => param.type !== 'RestElement');
    declr.init.params = newParams;
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
    
    let oldBody = declr.init.body.length > 0? [...declr.init.body] : null;

    if(oldBody) {
      declr.init.body.body = [funcArguments, ...oldBody]
    } else {
      declr.init.body.body = [funcArguments];
    }
    **/
      
    } else if (declr.init.type === 'ObjectExpression') {
      declr.init.properties.forEach((props) => props.shorthand = false);
    }

    if (isMethodES6(node, 'includes', i)) {
      let name = declr.init.callee.object.name;
      let type = returnType(name, ast);
      if (type === 'ArrayExpression') {
        polyfill = 'POLYFILL_ARR_INCLUDES';
      } else {
        polyfill = 'POLYFILL_INCLUDES';
      }
    } else if (isMethodES6(node, 'startsWith',i)) {
      polyfill = 'POLYFILL_STARTSWITH';
    } else if (isMethodES6(node, 'endsWith',i)) {
      polyfill = 'POLYFILL_ENDSWITH';
    } else if (isMethodES6(node, 'repeat',i)) {
      polyfill = 'POLYFILL_REPEAT';
    } else if (isMethodES6(node, 'find',i)) {
      polyfill = 'POLYFILL_FIND';
    } else if (isMethodES6(node, 'findIndex',i)) {
      polyfill = 'POLYFILL_FIND_INDEX';
    }
  });
  if (polyfill) {
    return [{ ...node,
      kind: 'var'
    }, polyfill];
  } else {
    return { ...node,
      kind: 'var'
    };
  }
}
module.exports = { isVariableDeclaration, replaceVariableDeclarations };

