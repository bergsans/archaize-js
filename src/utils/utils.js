const { readJSFile, writeToFile } = require('../helpers/helpers.js');
const { parseScript } = require('esprima');
const { debugMsg, redTxt } = require('dandy-ui');
const { traverse } = require('estraverse');
const { isTemplateLiteral, manipulateTemplateLiteral } = require('../transpiler/templateliteral.js');

const makeAST = (expression) => parseScript(expression);

function transpile(expression) {
  const code = readJSFile('../random_js_code.js');

  const analysis = makeAST(code);

  if(analysis.type === 'Program') {
    traverse(analysis, {
      enter: (node) => {
        if(isTemplateLiteral(node)) {
          manipulateTemplateLiteral(node);
        }  
      }
    });
  } else {
    redTxt('This is not ES2015/ES6 code.');
    process.exit(1);
  }
  writeToFile("templateliterals", analysis);
}
transpile("");

module.exports = { makeAST, transpile };

