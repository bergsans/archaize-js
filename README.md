![logo](assets/logo.png)

## Installation

```
npm install

npm test

```

## Usage

```
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

node archaize -i someCode.js -o code-analysis -m (will save AST as 'code-analysis.ast') 

node archaize -i someCode.js -m (displays colorized AST in terminal)

-*-*-*-*-*

not supported yet:

node archaize -i someES6Code.js -o someES5Code.js -t 

-*-*-*-*-*
```

## Folder structure

- /assets (images)
- /examples (transpiled code snippets - before/after)
- /src **>>> /helpers, /utils, /transpiler <<<** 
- /tests (Jest - main functionality)
- /text (essay on transpilers)

## TASKS
 

**General (code)**
- [x] Add basic functionality to CLI
- [x] Create 'only AST' output option
- [ ] Link transpile option writeToFile

**General (text)**
- [x] State question. About method & project scope
- [x] Introduction
- [x] The purpose of transpilers, or why transpiler matters
- [ ] How a compiler works in general terms (25% done)  
- [x] Abstract Syntax Tree
- [ ] Transformation 
- [ ] Summary
- [ ] General reflections. Difficulties, the future (...)
- [ ] Appendix


**Features (code)**
- [x] template literals 
- [x] variable declarations
- [x] arrow functions
- [x] string method: repeat
- [x] string method: includes
- [x] string method: startsWith
- [x] string method: endsWith
- [x] array method: find index
- [x] array method: find
- [x] array method: includes
- [x] implement polyfills in AST   
- [x] operator: rest 
- [x] operator: spread (array)
- [ ] operator: spread (obj)
- [x] strict/type equality (===)
- [x] default parameter
- [x] property shorthand
- [ ] class definition
 
**Features (text)**
- [x] template literals 
- [x] variable declarations
- [x] arrow functions 
- [x] polyfills
- [ ] operator: rest
- [ ] operator: spread
- [ ] operator: rest
- [ ] operator: spread
- [ ] strict/type equality (===)
- [ ] default parameter
- [ ] property shorthand

**Better tests**
- [ ] verify program correctness with complicated code examples

**Finishing step**
- [ ] Research how to Use npm link, add bin to package.json and write a new README with usage, installation and small documentation.

