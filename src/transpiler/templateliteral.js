function replaceTemplateLiterals(node) {

  let newNode = { ...node }; 
 
  newNode.quasis = newNode.quasis.map((quasi) => ({
    type: 'Literal',
    value: quasi.value.raw,
    raw: `\"${quasi.value.raw}\"`,
    loc: quasi.loc
  }));
  const attributes = [...newNode.expressions, ...newNode.quasis]
    .sort((a, b) => (a.loc.start.line - b.loc.start.line) || (a.loc.start.column - b.loc.start.column));
  const translatedToES5 = attributes.reduce((a, b) => ({ 
    type: 'BinaryExpression',
    operator: '+',
    left: a,
    right: b
  }));
  return translatedToES5;
}
module.exports = { replaceTemplateLiterals };

