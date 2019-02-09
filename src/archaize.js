#!/usr/bin/env node

/*
 * Dependencies
 * 
 */
const program = require('commander');
const {
  boxify,
  greenTxt,
  redTxt
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
 * Commander.js provide cli functionality
 *
 */
{
  program
    .version('0.5.0')
    .option('-a, --about', 'about Archaize JS')
    .option('-i, --input <filename>', 'specify source code')
    .option('-o, --output <filename>', 'specify output filename')
    .option('-m, --ast', 'AST analysis of file')
    .option('-t, --transpile', 'transpile ES6 -> ES5')
    .parse(process.argv);

  if(program.about) {
    const text = createContent('V. 0.5.0', 'Claes-Magnus Bernson, 2019');
    boxify(text);
    process.exit(0);
  } else if(program.input && program.transpile) {
    let outputFilename = program.output;
    let fileContents = readJSFile(program.input);

    try {
      const transpiledCode = transpile(fileContents);
      program.output?
        writeToFile(outputFilename, transpiledCode, 'js')
        :
        greenTxt(transpiledCode);
    }
    catch(e) {
      boxify(['Erronous code. Unable to transpile'], 'red', 'white');
      redTxt(e);
    }

    process.exit(0);
  } else if(program.input && program.ast) {
    let filecontents = readJSFile(program.input);
    let outputFilename = program.output;
    program.output?
      writeToFile(outputFilename, makeAST(filecontents), 'ast')
      :
      printAST(makeAST(filecontents));
    process.exit(0);
  }
  program.help();
}

