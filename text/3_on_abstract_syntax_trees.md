# The Abstract Syntax Tree

In this project the real work begin *after* the Abstract Syntax Tree, AST, since
it use [Esprima](https://www.npmjs.com/package/esprima) for this. Let's begin with 
what is before a AST. Any compiler or transpiler starts out with streams
of characters. The streams of characters constitute the program code. 

Consider this (ES6) JavaScript code:

```

function addNums(...nums) {
  return nums.reduce((a, b) => a + b);
}

console.log(`2 + 2 = ${addNums(2, 2)}`); 
// output: 2 + 2 = 4

```
Esprima includes both a lexical analyzer (a tokenizer) and a syntax analyzer (another word for AST).
Somewhere in its inner workings it starts out with by performing a lexical analysis of
the code. A lexical analysis breaks down the code to atoms, the smallest possible semantic 
units of the code, and creates a symbolic table for all sorts of declared names (in the case 
above: nums, a and b). The 'atoms' would include 'keywords' like function, return, 
reduce etc. In the end of this process a token stream emerges. I guess you could see it
as a sort of word-list of 'words' present in the program code.

The next step is called syntax analysis and creates the AST. For purposes of understanding
I think it's valuable to contemplate the difference between something abstract and concrete.
Something abstract or abstractions in general are only possible as derivations from
something concrete; it provide a 'distance' and brings about the essentials from the
concrete subject matter, its essence, while ignoring what's trivial depending on the context.
When code is considered in the syntax analysis, it focus on the semantics of the 
programming language, ignoring for instance the visual elements of a code. In most
programming languages (Python being a exception) intendations (tabs) are 
for 'us', not the machine - it's not a essential part of the code to the machine. The
same thing is true also for the 'concrete' syntax of a language. Most programming languages
use functions, but in an AST how a programming language actually programmaticly requires 
the user to spell it is trivial (func or function...).

These kind of abstractions are necessary for the compiler, enabling a way to translate
from one language to another. Acorn writes its AST for a function like this:

```
{
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "addNums"
}
```

As you can see, an AST much resemble any JSON object with data. Everything have
a key and value; a value can also be another key holding other values. One differencethough is that an AST imply a stricter hierchy. It always have only one root node. 

Esprima use [ESTree](https://github.com/estree/estree) 
