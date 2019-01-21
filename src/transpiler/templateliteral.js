const isTemplateLiteral = (node) => (node.type === 'TemplateLiteral');

function manipulateTemplateLiteral(node) {

  let literals = [];
  let binaries = [];

  node.quasis.forEach((quasi, i) => {

    let literal = {
            type: "Literal",
            value: quasi.value.raw,
            raw: `\"${quasi.value.raw}\"` };
    literals = [...literals, literal]
  });

  node.expressions.forEach((expression, i) => {
    if(expression.type === 'BinaryExpression') {  
      binaries = [...binaries, expression]; 
      
    } else if(expression.type === 'Identifier') {
    
    } else if(expression.type === 'ArrowFunctionExpression') {

    }
  });
  console.log(literals, binaries);
}

module.exports = { isTemplateLiteral, manipulateTemplateLiteral };
