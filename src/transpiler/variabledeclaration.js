const isVariableDeclaration = (node) => (node.type === 'VariableDeclaration');

function replaceVariableDeclarations(node) {
  return { ...node, kind: "var" };
}

module.exports = { isVariableDeclaration, replaceVariableDeclarations };
