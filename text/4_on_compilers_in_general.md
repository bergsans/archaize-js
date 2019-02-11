# Overview. How compilers work

<pre>
A  compiler  consists of  two  parts:  analysis (front  end)
and  synthesis (back  end).  Analysis of  the code  precedes
synthesis  in the  compiling process.  Before compiling  the
source code  is broken  into parts, enforcing  a grammatical
structure.   This   form   an  intermediate   structure   of
'abstractions' (a abstract  syntax tree), representations of
the source at hand.

If   the   compiler   finds   that  the   source   code   is
problematic/erroneous,  it will  halt  and  log the  warning
and/or errors. If the source,  on the other hand, is correct
(there  by not  guarteing it  actually works;  it can  still
include  major bugs),  it  produces a  symbol table  storing
data  present in  the code.  The synthesis  builds upon  the
representations  and the  symbol table  from the  front end,
producing a translation into a new code — the target code.

I  will explain  in  more  detail the  inner  workings of  a
compiler/transpiler more  properly later  on, but  the table
below should  provide a  basic understanding of  the subject
matter. I've  made the table  by melding figure 1.5  (p. 4),
1.6  (p.  5)  and  1.7  (p.  7)  in  Compilers,  Principles,
Techniques,  and Tools  (the  second edition,  2014) -  also
known as The Dragon book -  by Alfred V. Aho, Monica S. Lam,
Ravi Sethi & Jeffrey D. Ullman.

For  now, don't  bother much  about the  terminology to  the
left. Concentrate  on code  and how  it gets  transformed. I
believe the example to be quite self-explanatory.
</pre>

```
+----------------------------------+-----------------------------------+
|           ABSTRACTION            |              EXAMPLE              |
+----------------------------------+-----------------------------------+
|  character stream                |  let area = a**2                  |
|                 ↓                |                                   |
|  Lexical Analyzer                |                                   |
|                 ↓                |                                   |
|  token stream                    |  <let> <id,1> <=> <id,2> <**> <2> |
|                 ↓                |                                   |
|  Syntax Analyzer                 |         let                       |
|                 ↓                |          |                        |
|  syntax tree                     |          =                        |
|                 ↓                |        /   \                      |
|                                  |   <id,1>    **                    |
|                                  |         /    \                    |
|                                  |     <id,2>    2                   |
|                                  |                                   |
|  Semantic Analyzer               |                                   |
|                 ↓                |         let                       |
|                                  |          |                        |
|  syntax tree                     |          =                        |
|                 ↓                |      /       \                    |
|                                  |  <id,1>   <id,2> * int            |
|                                  |                     |             |
|                                  |                     2             |
|                                  |                                   |
|                 ↓                |                                   |
|  Intermediate Code Generator     |                                   |
|                 ↓                |                                   |
|  intermediate representation     |  id1 = id2 * int(2)               |
|                                  |                                   | 
|                 ↓                |                                   |
|  Machine-Interdependent          |                                   |
|  Code Optimizer                  |                                   | 
|                 ↓                |                                   |
|  intermediate representation     |  id1 = id2 * id2                  |
|                 ↓                |                                   |
|                                  |                                   |
|  Code Generator                  |                                   |
|                 ↓                |                                   |
|  target-machine code             |  Weird code, your name is...      |
|                 ↓                |  ...ASSEMBLER... (or something    |
|  Machine-Dependent               |  else)                            | 
|  Code Optimizer                  |                                   | 
|                 ↓                |                                   |
|  target-machine code             |  ... 010010000101011 ...          |
+---------------------------------+------------------------------------+
```

<pre>
So, a compiler consists of  front-end and a back-end (not to
be confused with how the words are used in web development).
Basically, the front-end handles the 'input' (source code of
some sort) and the back-end the 'output'.

You provide  the front-end with  code, the code  is analyzed
and  re-structured  according  to the  rules  (the  grammar)
of  the compiler/transpiler.  If  the  code doesn't  include
problematic  parts  (errors;  i.e.   some  variable  uses  a
reserved keyword) the compiler proceeds to the next phase or
step, the back-end.

The product of the back-end  transforms the code. It doesn't
change  its  'meaning'  or 'intend',  but  re-structure  the
code  to  another  'modality'.   That  modality  may  be  an
executable file, a  file the user can run. It  may also be a
transformation of the  code from a high-level  language to a
low-level  language, an  Assembler language.  In that  case,
you'd need an Assembler to  actually interpret and 'run' the
code, execute it. You  may or may or not also  make use of a
Linker;  a  Linker  hides  this  relationship  so  the  user
can  execute the  code  without having  to  bother about  an
interpreter.

A transpiler  always halts  before or  at the  Assembly part
(for  instance WebAssembly  halts  here).  But a  transpiler
might also translate between  different levels, which is the
case of my transpiler or of Babel.js.

The most important  thing for a compiler or  a transpiler is
to keep the intent, make sure that the semantics of the code
is preserved. Otherwise, the  developer would be clueless on
how the code would actually 'turn out'.

Let's say something  about the steps described  in the table
above.

* The lexical  analysis (also called a  scanner) handles the
input as a stream of characters. It takes the code apart and
then performs an analysis  on how it's structured. Different
languages make  use of  different delimiters.  Sometimes the
'use' of delimiters are referred to as 'tokenization'.

* After the lexical analysis,  the syntax analyzer checks if
every categorized item is valid  according to the rules (the
grammar) of the language. If the  code would use of the word
'private' (a keyword in many  languages) and the language of
the compiler  doesn't use  the 'private' keyword  this would
not be a valid expression. Each 'block' must be accurate, or
the construct would be faulty. This,  however - as I said in
the introduction - doesn't mean  that the code can run, that
the code  doesn't include bugs and  so on. I only  mean that
the code is accurate, it doesn't mean the semantics actually
produce  something  (to  us) 'meaningful'.  This,  i.e.,  is
**valid** code in JavaScript of ES6:

```
{}
```
This IIFE  doesn't **do** anything.  It will be  called when
interpreted, but  nothing 'happens'. These  distinctions are
important to  bear in mind  when relating to  programming in
general and compilers/transpiler in particular.

*  If the  code  is  valid according  to  the  rules of  the
language, the compiler/transpiler produce an Abstract Syntax
Tree (AST).  This part will  be covered in the  next chapter
in  some more  detail.  Shortly, the  AST holds  un-detailed
information on the application. The main function of the AST
is the 'bigger picture', how  different parts relate to each
other in  a tree-like  hierarchy. Just  like any  other tree
data structure,  it contains  nodes; each  node is  either a
parent and/or a  child. The end nodes are  often referred to
as 'leaves' in this context. All  this is done by a 'context
analysis'.  It's  enough  that  each  program  statement  is
accurate in itself, it must also  be valid in how it relates
to other parts of the architecture.

* Intermediate  Code Generator/Code Optimizer. I  guess this
part is not  mostly included in a transpiler.  In a compiler
this  phase adopts  the source  code to  the machine,  so to
speak. What's readable to us is not that important here; the
focus  is to  make changes  that would  help the  machine to
execude the code more efficient.  In the context of a normal
computer, this  means that the optimization  focus on memory
and performance  (speed). If  the programming  language i.e.
would include some kind of unneccessary abstraction it would
be replaced with more 'concrete' code.

* Code  generation. In a  computer, everything is  'code' in
some sense.  But there is  a 'semantic gap' between  what we
would  normally consider  readable and  the code  **of** the
machine. At  the childhood  of computers,  enthusiasts would
hardcode  these codes  to the  computer on  a pure  'system'
level. But  the lengthiness  of a programming  language like
Assembler pales  in comparison with  that kind of  codes. It
would  be still,  I guess,  be  code since  it would  follow
'rules', namely the  rules inherent in the  processor. I bet
there would  be quite a  few ones  and zeros to  express the
number five.






</pre>




