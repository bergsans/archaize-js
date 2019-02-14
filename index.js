/*
 *            NPM Package
 *            By Claes-Magnus Bernson, 2019
 *
 *            Usage:
 *
 *            const { transpile } = require('archaize-js');
 *
 *            const transpiledCode = transpile(code);
 */

const { makeAST, transpile } = require('./src/utils/utils.js');

module.exports = {
  makeAST,
  transpile
};

