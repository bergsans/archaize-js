# Purpose and method

The main purpose of this project is not scientific; the project merely
tries to replicate a small part of the inner workings of a transpiler - that
is, something we already know exists and works just fine. If I am able to 
reproduce a transpiler according to the same (or similar, but not by original means in 
any sense) principles as others, it can't be said to be a scientific pursuit, at least not
of the higher order. If someone would make an essay trying to verify the
truthiness of gravity in physics, it would neither be a scientific pursuit (on the
other hand, if someone would falsify it or correct the most basic formulation, it
would be a scientific revolution). As of my knowledge, the growth of knowledge is usually
included in the definition of a scientific essay - and I do nothing to contribute to the
scientific body of knowledge on transpilers with this essay. On the other hand, my 
intention is to contribute to the development community by explaining how a transpiler 
works and what kind of problems a transpiler always face.

Because of this, I feel no need to follow the patterns of scientific explication. With
that said, I will still try to be precise, make references when necessary and sometimes
use vocabulary from scientific discourse, namely computer science. Although I won't write
a scientific essay, I will put a large focus on explaining the problems I've faced and a
bit on how I've solved them. I will write less on my solutions than on the problems to be
solved, since I am hopeful that the code will be quite self-explanatory. My intention when
writing about these matters is to be reflective and analytical.

*With this project I aim to develop a transpiler that manages to re-phrase, so to speak,
a few of the ECMAScript 2015 (more commonly known as ES6) features with the syntax of ES5.*
The user will input JavaScript code, stored in a file, to a command-line interface (CLI)
and get it translated - if everything works out properly - to less modern, 'archaized' (hence
the name, Archaize JS, of my transpiler) JavaScript to another file, specified by the 
user. This project will not cover all features of ES6, and any few subroutines.


## Method

Later on, I will describe what set of tools I'll use. But I believe it's possible to, in
simple terms, state how I'll proceed to manage the task at hand. With great distance, the problem
is the identify **differences** in syntax between ES6 and ES5 (and resolve them with 
accurate translations). With these differences as a background, I will strive to find 
patterns; a pattern is general in some sense, and I hypothesize that if I can find such a 
pattern for a given feature I'll be able to - at least in theory - produce rules for translating 
from the higher level of abstractions inherent in ES6 to ES5. The rules produced is not by
any means in them selves to be thought of as 'necessary'. Although the expected output
must be accurate, another set of rules would be able to produce the same output.

I've chosen an experimental take on the problem. Confronted with a problem, I have 
formulated some code covering a certain problem with both ES6 and ES6, then I've compared 
the syntax trees of both code snippets using the BASH application diff and sdiff. In a 
sort, a compiler is an advanced data transformer and the main difficulty of writing a 
compiler/transpiler is to transform data according to specific rules. Surely this general 
formula could describe any programming task (you always work with transformations of data), 
but I think that the metaphor is more accurate in this case than in many others, if you 
don't take it literally.



## Project Scope

The Website [es6-features.org](es6-features.org) lists all features of ES6. Archaize.js
won't be able to handle more than a handful of the present features. My goal is to 
finish these features:

* variable declarations 
* template literals
* arrow functions
* string method: repeat
* string method: includes
* string method: startsWith
* string method: endsWith
* array method: find index
* operator: rest
* operator: spread


## In a nutshell

In short, the purpose of this essay is not of scientific nature; it's more a proof of 
concept (and then you would have to be quite liberal even then). It's also possible to
regard what I'll do as a case study, the equivalent of a scientific experiment in a 
laboratory, performed in subjects such as chemistry in high-school. 

My view on the purpose is twofold: firstly, I acquire knowledge of how compilers 
are built; secondly, I'm sharing this knowledge.

As far as my knowledge goes, there are few, if any, in-depth texts Online written in 
the context of JavaScript on how a transpiler is configured, combining concrete code
examples with 'theory'. There are quite a few texts on Babel, but none of them really 
deals with examples and only in very general terms explain the meaning of compilers.


