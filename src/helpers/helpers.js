const logo = require('./logo');
const { redTxt, greenTxt } = require('dandy-ui'); 
const fs = require('fs');

/*
 * helper function that places text(s) within a box,
 * using dandy-ui.
 */
function createContent(...strings) {
  return [...logo.arr, ...strings];
}

/*
 * returns the content of file
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
 * write content to a file
 *
 */
function writeToFile(filename, contents) {
  let output = JSON.stringify(contents, null, 2);
  let name = `${filename.replace(/\./g, '')}.ast`;
  try {
    fs.writeFileSync(name, output);
    const stdout = `AST saved to ${name}`;
    greenTxt(stdout);
  } catch(error) {
    redTxt(error);
  }
}

module.exports = { 
  createContent,
  readJSFile,
  writeToFile
};

