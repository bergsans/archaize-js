![logo](assets/logo.png)

## About
```
**This is Archaize JS:**

* ...a ES6 to ES5 transpiler (main part)
    * Feature list include the core of ES6
    *  Theory.  How a  transpiler  works  and why  they  are
important
* ...a NPM package
* ...a CLI to transpile JavaScript files
* ...a Minimalistic Web Solution 
    * Front-end (React)
    * Back-end (Node.js, Express & Socket.io)

*Archaize JS  is a transpiler  and is my web  developer exam
project (2019).*

```

## Installation

```
npm install

npm test

```


## Usage


#### CLI
<pre>
Usage: archaize [options]

Options:
  -V, --version            output the version number
  -a, --about              About Archaize JS
  -i, --input <filename>   Specify source code
  -o, --output <filename>  Specify output filename
  -m, --ast                AST analysis of file
  -t, --transpile          Transpile ES6 -> ES5
  -h, --help               output usage information

Examples:

</pre>
Saves Abstract Syntax Tree (AST) to file:

```
./archaize.js -i someCode.js -o code-analysis --ast
```

Prints AST to standard output:
```
./archaize.js -i someCode.js --ast
```

Transpiles inputted JavaScript code (file) to another file:
```
./archaize -i someES6Code.js -o someES5Code.js --transpile
```

#### NPM package

```
const { transpile } = require('archaize-js/index.js');

// to avoid issues, it's recommended to firstly develop
// a read file function that returns the source code.

const transpiledCode = transpile(someExpression);
console.log(transpiledCode);
```

#### Web

```
cd web && npm install && npm run start 

visit localhost:3000

```


## Folder structure

- /assets (images)
- /examples (transpiled code snippets - before/after)
- /src **>>> /helpers, /utils, /transpiler <<<**
- /tests (Jest - main functionality & **EPIC BUGS**)
- /text (essay on transpilers)



## Features

- [x] template literals
- [x] variable declarations
- [x] arrow functions
- [x] string method: repeat
- [x] string method: includes
- [x] string method: startsWith
- [x] string method: endsWith
- [x] array method: findIndex
- [x] array method: find
- [x] array method: includes
- [x] implement polyfills in AST   
- [x] operator: rest
- [x] operator: spread (array)
- [x] strict/type equality (===)
- [x] default parameter
- [x] property shorthand


## Issues

1) Check `npm test`

2) Check 'issues'


