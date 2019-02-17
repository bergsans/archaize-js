# ES5 polyfills


## Background
<pre>
Archaize JS includes ES6 subroutine features. In the case of
a subroutine,  the problem is  not to transform  an existing
Abstract Syntax  Tree, adapt  it to match  a changed  set of
criteria. Every time ES6 code makes use of a new subroutine,
in this case, some method, we must inject this functionality
to the ES5 code.

We must  add a function,  a 'polyfill' that solves  the same
problem and  in the  same way.  This polyfill  function must
also accept the same parameters and so on.

JavaScript is not *a* thing, it's several things. We tend to
speak  of  it  as  it  is one  thing  only  for  reasons  of
convenience.  JavaScript is  interpreted  in real-time,  you
can't compile it an end up with some sort of executable file
(unless you make use of  some kind of 'external' framework).
This true for the browser, as well as for Node.js. Sometimes
it's  unclear what  actually  belongs to  the language,  and
what's an 'alien' implementation.

Can we  i.e. say that `addEventListener`,  a browser method,
is a part  of JavaScript, `CreateEvent` in  Node.js are part
of the  language although these functionalities  don't exist
on  the  'other' side?  Or  what  about different  'machine'
libraries  (Nodebot.js) or  Virtual Reality-libraries?  They
may  have  basic subroutines  that  are  dependent on  their
'modality', the specific context at hand.

JavaScript  is  a  living  language,  just  like  a  natural
language in a sense. If I  would write my own engine and add
a  feature  to  the  language,  it would  also  be  part  of
JavaScript. This is actually often the case, thus the tables
on compatibility  at MDN. No one  can 'own' it to  the full.
But with  this said, just  as with a natural  language there
are standardizations. THE  ECMAScript Specification provides
a mean to establish the lowest common denominators, although
this is not either totally true. Often it takes years before
all engines  have implemented the new  features described in
the specification. And as I  said, the specification is only
concerned with lowest common denominators.

If  a  new  Node.js  release would  include  an  environment
specific  functionality,  it  got  nothing to  do  with  the
ECMAScript  Specification.  Node.js  also  doesn't  have  to
implement  all  the  features   of  the  Specification,  the
Specification  is not  'binding'  in any  formal sense.  The
specification is more  of a series of suggestions  on how to
standardize JavaScript features.  It suggests *conventions*,
just like for instance grammars of natural language.
</pre>


## Code
<pre>
Each polyfill included in this  transpiler include a link to
the relevant section of  the ECMAScript specification at the
top of the sourecode.























</pre>




