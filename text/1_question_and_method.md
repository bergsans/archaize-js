# Purpose and method

The main purpose of this project is not scientific; the project merely
tries to replicate a small part of the inner workings of a transpiler - that
is, something we already know exists and works just fine. If I am able to 
reproduce a transpiler with the same (or similar, but not original) 
principles as others, it can't be said to be a scientific pursuit, at least not
of the higher order. If someone would make an essay trying to verify the
truthiness of gravity in physics, it would neither be a scientific pursuit (on the
other hand, if someone would falsify it or correct the most basic formulation, it
 would be a scientific revolution). 

Because of this, I feel no need to follow the patterns of scientific explication. With
that said, I will still try to be precise, make references when necessary and sometimes
use vocabulary from scientific discourse, namely computer science. Since I won't write
a scientific essay, I will put a larger focus on explaining what I do and how I did it
 than I otherwise would've done. My intention is to be reflective and analytical.

*With this project I aim to develop a transpiler that manages to re-phrase, so to speak,
a few of the ECMAScript 2015 (more commonly known as ES6) features with the syntax of ES5.*
The user will input JavaScript code, stored in a file, to a command-line interface (CLI)
and get it translated - if everything works out properly - to less modern JavaScript to
another file, specified by the user. This project will not cover all features.


## Method

Later on, I will describe what set of tools I'll use. But I believe it's possible to in
simple terms state how I'll proceed to manage the task. With great distance, the problem
is the identify **differences** in syntax between ES6 and ES5. With these differences as
a background, I will strive to find patterns; a pattern is general in some sense, and I
hypothesize that if I can find such a pattern for a given feature I'll be able to - at least
in theory - make rules for translating from the higher level of abstractions inherent in 
ES6 to ES5. 

I've chosen an experimental view on the problem. I have formulated some code covering 
a certain problem with both ES6 and ES6, then I've compared the syntax trees of both
code snippets using the BASH application diff and sdiff. In a sort, a compiler is an
advanced data transformer and the main difficulty of writing a compiler/transpiler is
to transform data according to specific rules. Surely this general formula could describe
any programming task (you always work with transformations of data), but I think that
the metaphor is more accurate in this case than in many others, if you don't take it
too literally.


## In a nutshell

In short, the purpose of this essay is not of scientific nature; it's more a proof of 
concept (and then you still would have to be quite liberal even then). My view on the 
purpose is twofold: firstly, I acquire knowledge of how compilers are built; secondly, I'm 
sharing this knowledge.

As far as my knowledge goes, there are few, if any, in-depth texts Online written in 
the context of JavaScript on how a transpiler is configured, combining concrete code
examples with 'theory'. There are quite a few texts on Babel, but none of them really 
deals with examples and only in very general terms explain the meaning of compilers.

