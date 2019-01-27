/*
TODO: Check if polyfill is already added to file.

*/
const isMethodES6 = (node, mName) => (node.declarations[0] 
     && node.declarations[0].init 
     && node.declarations[0].init.callee 
     && node.declarations[0].init.callee.property 
     && node.declarations[0].init.callee.property.name
     && node.declarations[0].init.callee.property.name === mName);
 
const isVariableDeclaration = (node) => (node.type === 'VariableDeclaration');

let namesIds = [];

function replaceVariableDeclarations(node) {

  let idName = node.declarations[0].id.name;
  namesIds = [...namesIds, idName];

  if (namesIds.filter((elIdName) => elIdName === idName).length > 1) {
    const count = namesIds.filter((elIdName) => elIdName === idName).length;
    node.declarations[0].id.name = `${idName}${count}`;
  }  

  node.declarations[0].init.type = node.declarations[0].init.type === 'ArrowFunctionExpression'? 
        'FunctionExpression'
        : 
        node.declarations[0].init.type;

  let polyfill = undefined;

  if (isMethodES6(node, 'includes')) {
    polyfill = 'POLYFILL_INCLUDES' 
  } else if (isMethodES6(node, 'startsWith')) {
    polyfill = 'POLYFILL_STARTSWITH';
  } else if (isMethodES6(node, 'endsWith')) {
    polyfill = 'POLYFILL_ENDSWITH';
  } else if (isMethodES6(node, 'repeat')) {
    polyfill = 'POLYFILL_REPEAT';
  } 

  if (polyfill) {
    return [{ ...node, 
      kind: 'var' 
    },polyfill];
  } else {
    return { ...node, 
      kind: 'var' 
    };
  }
}
module.exports = { isVariableDeclaration, replaceVariableDeclarations };

