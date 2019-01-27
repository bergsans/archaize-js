# Purpose and method

This essay tries to answer the question of how one could build a 
transpiler, using modern JavaScript. The question is answered using a twofold 
strategy: by use of natural language (description, analysis, reflection) and 
by code, programming language (JavaScript).

My project will produce an ES6 to ES5 transpiler and will have similarities 
with projects like Babel.js. In the context of Computer Science, this essay holds 
no value; neither does the code project, a transpiler named Archaize JS. Archaize JS 
is to be thought of as a demonstration, a proof of concept. The text describes 
this demonstrations using programming language terminology and also reflect
 on how a transpiler actually works.

Is it a scientific essay? Yes and no. It is scientific in the sense that it's 
descriptive, analytical and uses some vocabulary from Computer Science. This essay 
doesn't intend to contribute to the scientific body of knowledge on transpilers. In 
a way, it can still have scientic value. It indirectly helps out spreading knowledge 
on transpiler. And the fact it is less advanced and quite flawed might even be 
turned to an advantage in a didactic context.

The user will input JavaScript code, stored in a file, to a command-line 
interface (CLI) and get it translated - if everything works out properly - to 
less modern, 'archaized' (hence the name, Archaize JS, of my transpiler) JavaScript 
to another file, specified by the user. This project will not cover all features of 
ES6, and any few subroutines.


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
* array method: find
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


