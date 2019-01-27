const isMethodES6 = (node, mName, i) => (node.declarations[i] 
     && node.declarations[i].init 
     && node.declarations[i].init.callee 
     && node.declarations[i].init.callee.property 
     && node.declarations[i].init.callee.property.name
     && node.declarations[i].init.callee.property.name === mName);

const isVariableDeclaration = (node) => (node.type === 'VariableDeclaration');

let namesIds = [];

function replaceVariableDeclarations(node) {
  let polyfill = undefined;

  node.declarations.forEach((d, i) => {
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
      polyfill = 'POLYFILL_INCLUDES' 
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

