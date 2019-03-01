# Archaize JS. Analysis
<pre>
When working  with a  feature I  have used  the applications
diff, sdiff or vimdiff to articulate the differences between
ES6  and  ES5. Based  on  the  inherent differences  in  the
respective Abstract  Syntax Tree, I've attempted  to produce
rules for transformation.  The aim with a  specific rule set
is  to  translate  -  transpile  -  from  ES6  to  a  syntax
compatible  with ES5  (and inject  addons/polyfills whenever
required).  Another  aim  is,  of course,  to  this  without
breaking other features.

The following chapter will contain a number of sections with
an identical structure. Each  section will first provide the
background of a  feature. It will describe  what the feature
does, how  it works and  give some code examples.  With this
background  at  hand,  the  problem  in  the  context  of  a
transpiler -  more specifically, in the  context of Archaize
JS -  will have some room.  In most cases, I  won't describe
any  solutions or  reflect  on the  problems  attached on  a
deeper level.

Sections will  topic each  feature, excluding  the polyfills
that will be gathered, clumped together under one umbrella.


- template literals
- variable declarations
- arrow functions
- string method: repeat
- string method: includes
- string method: startsWith
- string method: endsWith
- array method: findIndex
- array method: find
- array method: includes
- operator: rest
- operator: spread (array)
- strict/type equality (===)
- default parameter
- property shorthand























</pre>
