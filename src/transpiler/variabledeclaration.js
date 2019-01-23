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
node.declarations[0].init.type

  return { ...node, 
    kind: 'var' 
  };
}

module.exports = { isVariableDeclaration, replaceVariableDeclarations };
