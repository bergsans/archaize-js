```
********************************************************************************************************

                                           NOTES ON COMPILERS

********************************************************************************************************
```

## Introduction

This essay is my way to substantiate how my transpiler works. To manage
this task, it seems reasonable to first explain what a compiler is?

Often a compiler is viewed as a magic box. You put something into it, and 
then gets an executable file. But a compiler is merely a translator. It 
takes an input (some source code) and outputs a translation of this code 
in the form of another code; for instance an executable file, or at least 
a code that's closer to the ones and zeros of the metal. The compiler is able
to make this happens by a translation based on rules, a grammar. 

We can now give some kind of answer to the question stated above. If a compiler
translates one code to a code in another language (it may be an executable, but
it can also be some other kind of code); a transpiler translates (or rather
transforms) the code *within* the same language. The transpiler changes the code 
in some way without, so to speak, uttering the same 'meaning' in an - with regard 
to the original code - alien tongue. The term for this in the context of natural 
languages would be 'paraphrase', I guess. Anyhow, let's for the time being equate 
compiler and transpiler and continue with an exposition on what a compiler is by 
comparing programming languages with natural languages.

In contrary to grammars of natural languages, the grammar of a compiler
is exactly as precise as it is 'intended'. In fact, otherwise it would
break the chain of translation: each level of 'abstraction' must in
the end be possible to level down to a precise, unambiguous 'system'
level (10010100 ...) or anyway a code closer to this state. 

The direction of the motion is in this sense per definition always the same. 
A compiler translates a high-level language to less abstract expressions of the
same 'meaning', 'intend'. Something which provide an intuitive explanation
of the lengthiness of the Assembler programming language code, a language closer 
to the system core than for instance C, a language which is, relatively 
speaking, closer to the core than for instance JavaScript.

Therefore we must ask: What it is grammar? A natural language sentence may 
include the same words but have different meanings because of the formal structure 
of the sentence, the way the words are arranged and how they appear (their 
modus of temporality etc.); a sentence has a number of words, separated 
by different types of delimiters that constitute a border; pauses in speech 
acts and different punctuation marks in modern text. But the sentence
*is* not the words within the boundary - it *is* a number of words placed
in a certain *structure*. Rules determine the order of words,
accentuate what they mean by giving them endings (or other transformations)
and produce context. 

To make a compiler's grammar work, it need the same kind of structure - but 
with the advantage of being able to ignore the ambiguousness of the 'cultural' 
(the human) dimension. A 'sentence' in code is grammarly speaking either, 
given a context, either unambiguously correct or it's incorrect; something 
that may or not be true concerning grammars of natural languages. Because of
the fussiness of natural languages and the 'cultural' dimension, a analysis
of the grammar of a sentence (as well as the usage of it in speech or text) 
in some, but not all, cases relies on interpretation. An interpretation always 
imply that it's understanding of a subject matter might be wrong. 

This is not the case with compilers; the grammar of a compiler must provide 
a set of definite rules. An expression can only have *one* meaning in the 
context of the grammar; but with that sad it might not be the case that 
the application actually do precisely what the developer intended it to do. 
However, the application does exactly do what the code intends it to do. 
Therefore i.e. the notion of a bug, provided that the application at all 
executes, is a conflict between what the application is told to do by the code
and what the developer wants it to do (something else).

A transpiler on the other hand have a grammar with rules concerning how to 
change the code within the language, without ever leaving it. Up to the point
of code generation a compiler and a transpiler includes the exact same procedure.
It's only the output that slightly differ; slightly regarding from a theoretical
point of view though.

The purpose of a transpiler is to (in quite general terms) to contract or expand the 
'meaning' of the code, thus make it longer or shorter. In the realm of 
JavaScript, Babel JS is most famous and also the 'norm' - the canon - which I 
will try to mimic. 

Babel JS translates (transpiles) JavaScript written with features from more 
modern (ECMAScript) specifications of the language to older. The purpose is to
serve the user, regardless of his or her browser version. I believe this motivation
is ethical and a praiseworthy ideal in the spirit of the Web as it was envisioned
by Tim Berners-Lee, its inventor.

Too me it's strange how one could *not* be interested in how a compiler works,
if you're a application developer that is. On the other hand, I always want to go
the roots of a subject matter that interest me and totally ignore some things
that (perhaps) *should* interest me. This text has a twofold purpose: its
main purpose is solely to explain what a compiler *is* in a manner that I 
myself can understand; secondly to share this explanation with other junior
developers. It's my belief, still to be proved to myself, that insight into how
a compiler works will deepen your understanding on how to use programming 
languages in general. 


/ Claes-Magnus Bernson

