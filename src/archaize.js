#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const { 
  boxify
} = require('dandy-ui');
const { 
  createContent, 
  readJSFile, 
  writeToFile,
  printAST
} = require('./helpers/helpers');
const { 
  makeAST, 
  transpile
} = require('./utils/utils');

/*
 * IIFE using commander.js to provide cli functionality
 *
 */
{
  program
    .version('0.5.0')
    .option('-a, --about', 'About Archaize JS')
    .option('-i, --input <filename>', 'Specify source code')
    .option('-o, --output <filename>', 'Specify output filename')
    .option('-m, --ast', 'AST analysis of file') 
    .option('-t, --transpile', 'Transpile ES6 -> ES5')   
    .parse(process.argv);

  if(program.about) {
    const text = createContent('V. 0.5.0', 'Claes-Magnus Bernson, 2019');
    boxify(text);
    process.exit(0);
  } else if(program.input && program.transpile) {
    let fileContents = readJSFile(program.input);
    transpile(fileContents);
    process.exit(0);
  } else if(program.input && program.ast) {
    let filecontents = readJSFile(program.input);
    let outputFilename = program.output;
    program.output?
      writeToFile(outputFilename, makeAST(filecontents))
      :
      printAST(makeAST(filecontents));
      process.exit(0);
  }
  
  program.help();
}
