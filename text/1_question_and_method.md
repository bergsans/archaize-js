# Question

<pre>
This  essay tries  to answer  the question  on how  to build
a  transpiler,  using  modern JavaScript.  The  question  is
answered  using a  twofold course  of action:  a) by  use of
natural language (description,  analysis, reflection) and b)
by code (JavaScript).

My project  aims to  produce an ES6  to ES5  transpiler. The
transpiler will  have great similarities with  projects like
Babel.js. In fact, Babel.js has  been the point in the skies
I navigate towards, a North  star in the realm of JavaScript
transpilers. I  will concentrate  my energy on  the Abstract
Syntax Tree, to most interesting part, of a transpiler since
it's the 'hub' or 'nave' of the semantics - if you will, the
'logic' - in the process of transpiling source code.

In  the context  of Computer  Science, this  essay holds  no
value;  neither  does  the  code  part  of  the  project,  a
transpiler named Archaize  JS. Archaize JS is  to be thought
of as a demonstration, a proof of concept.

Is it  a scientific essay? Yes  and no. It is  scientific in
the sense  that it's  descriptive, analytical and  uses some
vocabulary  from Computer  Science. But  this essay  doesn't
intend to contribute to the  scientific body of knowledge on
transpilers. In a  way, it can though  still have scientific
value.  It  indirectly  helps  out  spreading  knowledge  on
transpilers.  And the  fact it  is less  advanced and  quite
flawed might  even be turned  to an advantage in  a didactic
context.
</pre>


## Method

<pre>
In a  sort, a compiler  is an advanced data  transformer and
the main  difficulty of writing a  compiler/transpiler is to
transform data according to specific rules.

With  great  distance, the  main  problem  and task  are  to
identify **differences**  in syntax between ES6  and ES5 and
resolve  them with  accurate translations.  I will  in short
strive to find patterns; a pattern is general in some sense,
and I hypothesize  that if I can find such  a pattern (for a
given feature) I'll be able to produce rules for translating
ES6  to ES5.  The  rules produced  is not  by  any means  in
themselves  to be  thought of  as 'necessary'.  Although the
expected output must be accurate. Another set of rules would
be able to produce the same output.

I've chosen an experimental  take on the problem. Confronted
with a problem, I've formulated some code covering a certain
problem. Then  I've compared the  syntax trees of  both code
snippets using  the BASH  applications diff and  sdiff. I've
also used Vims -d flag (`$vim -d file1.ast file2.asti`).
</pre>

### Outline of Strategy

* Write code covering a feature of ES6 not included in ES5
* Compare differences in the syntax tree
* Establish  rules that would be  necessary for transforming
differences in way  that would produce the  same end result,
identical output.
* Write code rules for transformation -> transform!


#### Limitations

<pre>
A transpiler  consists of many  parts (more on  this later),
and  I have  limited  myself to  working  with the  Abstract
Syntax Tree using the Esprima library.
</pre>


## Project Scope (features)

<pre>
The  Website [es6-features.org](es6-features.org)  lists all
features of  ES6. Archaize.js won't  be able to  handle more
than a handful of the present features. My goal is to finish
the features stated below. These features, I think, could be
regarded as core features of  ES6, and therefore have higher
priority than lesser known and used features.
</pre>
 
- template literals
- variable declarations
- arrow functions
- string method: repeat
- string method: includes
- string method: startsWith
- string method: endsWith
- array method: find index
- array method: find
- array method: includes
- operator: rest
- operator: spread (array)
- strict/type equality (===)
- default parameter

## Finished Product

* ...a ES6 to ES5 transpiler (main part)
    * Feature list include the core of ES6
    *  Theory.  How a  transpiler  works  and why  they  are
important
* ...a NPM package
* ...a CLI to transpile JavaScript files
* ...a Minimalistic Web Solution 
    * Front-end (React)
    * Back-end (Node.js, Express & Socket.io)



## In a nutshell

<pre>
In short,  the purpose  of this essay  is not  of scientific
nature;  it's more  a proof  of concept  (and even  then you
would  have to  be  quite liberal).  It's  also possible  to
regard  what  I  do  a  case  study,  the  equivalent  of  a
scientific experiment in a laboratory, performed in subjects
such as chemistry in high-school.

My  view  on  the  purpose is  double:  firstly,  I  acquire
knowledge of how compilers  are built; secondly, I'm sharing
this knowledge.

As far as my knowledge goes, there are few, if any, in-depth
texts Online written  in the context of JavaScript  on how a
transpiler is  configured, combining concrete  code examples
with 'theory'.  There are  quite a few  texts on  Babel, but
none of  them really  deals with examples  and only  in very
general terms explain the meaning of compilers.
</pre>




