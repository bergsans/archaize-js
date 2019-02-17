const logo = require('./logo');
const { redTxt, greenTxt, whiteTxt } = require('dandy-ui'); 
const fs = require('fs');

/*
 * helper function that places text(s) within a box,
 * using dandy-ui.
 */
function createContent(...strings) {
  return [...logo.arr, ...strings];
}

/*
 * returns the contents of file
 *
 */
function readJSFile(filename) {
  try {
    return fs.readFileSync(filename, 'UTF8');
  } catch(error) {
    redTxt(error);
  }
}

/*
 * write contents to a file
 *
 */
function writeToFile(filename, contents, fileEnding) {
  let output = contents;
  let name = `${filename.replace(/\./g, '')}.${fileEnding}`;
  try {
    fs.writeFileSync(name, output);
    const stdout = fileEnding === 'js'? `Transpiled JS saved to ${name}` : `AST saved to ${name}`;
    greenTxt(stdout);
  } catch(error) {
    redTxt(error);
  }
}

/*
 * prints colorized AST
 */
function printAST(ast) {
  const raw = JSON.stringify(ast, null, 2);
  let arrOfS = raw.split('\n');
  arrOfS.forEach((s) => {
    let strings = s.split('');
    let count = countWhiteSpace(strings);
    let color = returnColor(count);
    let terminalWidth = process.stdout.columns;
    let strLen = s.length;
    let remainder = terminalWidth - strLen;
    let whiteSpaceToEndOfLine = ' '.repeat(remainder);
    let strToPrint = `${s}${whiteSpaceToEndOfLine}`;
    whiteTxt(strToPrint, color);
  });
}

/*
 * colors used in Dandy-UI
 */
function returnColor(n) {
  const colors = ['black', 'purple', 'blue', 'cyan', 'purple', 'green', 'red'];
  let table = [];
  for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 6; j++) {
      table = [...table, colors[j]];  
    }
  }
  let c = (n - 1) >= 0? n - 1 : 0;
  return table[c];
}

/*
 * returns white space
 */
function countWhiteSpace(strOfArr) {
  let color = 0;
  for(let i = 0; i < strOfArr.length; i++) {
    if (strOfArr[i] === ' ') { color++; }
    else { break; }
  }
  return color;
}

module.exports = { 
  createContent,
  readJSFile,
  writeToFile,
  printAST
};

