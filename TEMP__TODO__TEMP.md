KNOWN BUGS.

if(someThing.includes('some')) {} doesn't work
...but let a = someThing.includes('some') do work

function testThis(...props) {} works
but an arrow function declaration doesn't work: const someFunc = (...props) => {}


TODO.

- add tests for CLI

- add EVIL tests (break the code!) Mental note: as of now, I think that
  the use of polyfills would produce duplicates? CHECK!!!

- add class definition & conditional ternary operator

- make more components in the web solution

- NPM publish
