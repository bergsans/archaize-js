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

  node.declarations.forEach((d, i) => {

    if(d.init && d.init && d.init.type === 'ArrayExpression' && d.init.elements 
         && d.init.elements.find((el) => el.type === 'SpreadElement')) {
  
      let newEls = d.init.elements.filter((el) => el.type !== 'SpreadElement');
      let spread = d.init.elements.filter((el) => el.type === 'SpreadElement');

      let newNode =  {
        type: "VariableDeclaration",
          declarations: [
            {
              type: "VariableDeclarator",
              id: {
                type: "Identifier",
                name: d.id.name,
           
              },
              init: {
                type: "CallExpression",
                 callee: {
                  type: "MemberExpression",
                  computed: false,
                  object: {
                    type: "ArrayExpression",
                    elements: [],
            
                  },
                  property: {
                    type: "Identifier",
                    name: "concat",
           
                  }
                },
                arguments: [
                  {
                    type: "Identifier",
                    name: spread[0].argument.name
                  },
                  {
                    type: "ArrayExpression",
                    elements: newEls 
                  }
                ]
              }
            }
          ],
          kind: "var"
        };
        node = newNode; 
          
    } 

    let idName = d.id.name;
    namesIds = [...namesIds, idName];

    if (namesIds.filter((elIdName) => elIdName === idName).length > 1) {
      const count = namesIds.filter((elIdName) => elIdName === idName).length;
      d.id.name = `${idName}${count}`;
    }  

    d.init.type = d.init.type === 'ArrowFunctionExpression'? 
          'FunctionExpression'
          : 
          d.init.type;

    if (isMethodES6(node, 'includes', i)) {
      let name = d.init.callee.object.name;
      let type = returnType(name, ast);
      if(type === 'ArrayExpression') {
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

