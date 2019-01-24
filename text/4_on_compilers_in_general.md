# Overview. How compilers work

A compiler consists of two parts: analysis (front end) and synthesis (back end). 
Analysis of the code precedes synthesis in the compiling process. Before compiling 
the source code is broken into parts, enforcing a grammatical structure. This form an
intermediate structure of 'abstractions' (a abstract syntax tree), representations of 
the source at hand. 

If the compiler finds that the source code is problematic/erroneous, it will halt and 
log the warning and/or errors. If the source, on the other hand, is correct (there by
not guarteing it actually works; it can still include major bugs), it produces a symbol 
table storing data present in the code. The synthesis builds
upon the representations and the symbol table from the front end, producing a
translation into a new code — the target code.

I will explain in more detail the inner workings of a compiler/transpiler more 
properly later on, but the table below should provide a basic understanding of the
subject matter. I've made the table by melding figure 1.5 (p. 4), 1.6 (p. 5) and 
1.7 (p. 7) in Compilers, Principles, Techniques, and Tools (the second edition, 
2014) - also known as The Dragon book - by Alfred V. Aho, Monica S. Lam, 
Ravi Sethi & Jeffrey D. Ullman. 

For now, don't bother much about the terminology to the left. Concentrate on
code and how it gets transformed. I believe the example to be quite self-explanatory.


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

