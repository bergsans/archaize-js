const { debugMsg } = require('dandy-ui');


const isTemplateLiterals = (node) => (node.type === 'TemplateLiteral');

function replaceTemplateLiterals(node) {

  node.quasis = node.quasis.map((quasi, i) => {
    let literal = {
      type: "Literal",
      value: quasi.value.raw,
      raw: `\"${quasi.value.raw}\"`,
      loc: quasi.loc
    };
    return literal;
  });

  let rawEls = [...node.expressions, ...node.quasis];
  let els = rawEls.sort((a, b) => (a.loc.start.column - b.loc.start.column));

  const asES5 = rawEls.reduce((a, b) => ({ 
    type: "BinaryExpression",
    operator: "+",
    left: a,
    right: b
  })); 
  
  return asES5;
}

module.exports = { isTemplateLiterals, replaceTemplateLiterals };
