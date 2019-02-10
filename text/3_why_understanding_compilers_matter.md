# Purpose, or why transpilers matter

<pre>
Even  though a  scientific  essay should  be objective,  the
motivation for writing  an essay is **not**,  neither is the
importance of the subject itself. Much of the last centuries
debate in  the philosophy  and the social  sciences revolved
around  questions on  the value  of a  certain pursuit.  The
general  consensus,  I  think,  was that  there  are  better
reasons to the  relativize these matters and  relate them to
social norms  than to ignore these  matters. Your scientific
pursuit might be pure(although it's  likely not, or at least
partly not), but the consequences  of the same pursuit might
lead to things you did not wish for. Sometimes the pale cast
of thought  - to contradict  the Hamlet of Shakespeare  - is
quite good.

In  the  year  2019,  transpilers are  more  important  than
ever.  And  why?  Because  we  need  and  want  the  Web  to
be  inclusive,  and  in  the   context  ofthe  Web  and  Web
development this is spelled backward compatibility. This has
also  been the  spirit  of the  Web  since its  origination.
As  Tim   Berners-Lee,the  inventor  of  the   Web,  [stated
it](https://www.w3.org/People/Berners-Lee/1996/ppf.html)1996 
"information  must be  available on all platforms, including 
future ones".

If you want to use modern JavaScript, it's important to make
use of  a transpiler,  otherwise you'll most  likely exclude
users  with  old  Web-browsers.  To me,  there's  a  ethical
dimension to this, but for companies and organizations there
also might  be economical motifs  for backward-compatibility
(otherwise you face the risk of losing potential customers).

A    quick     glance    at    [The     ES6    Compatability
Table](https://kangax.github.io/compat-table/es6/)   clearly
demonstrates  the need  for  backward-compatibility and  the
only way of  using some functions, is to  use 'polyfills'. A
polyfill  is a  snippet  of code  with  the same  'semantic'
meaning  as  another  code  snippet, but  with  a  divergent
'formulation' that  works in  older browsers. Its  intent is
the same, but the syntax differs.

Before   the  arrival   of   good  JavaScript   transpilers,
developers  had   to  make   fall-backs  so  that   the  Web
application  would work  on old  browsers, or  with browsers
lacking some aspect of  the JavaScript language. A classical
example  would  be  the   poly-fills  developers  wrote  for
Internet Explorer.

After      the      advent     of      transpilers      like
[Babel.js](https://babeljs.io/),  poly-fills  is  (probably)
not used as often. Instead,  you include Babel.js in a build
environment like Webpack (or  use it manually), to transpile
code. The benefits  of this are that the  developer can take
full  advantage of  the  latest  language features,  without
having to bother about browser compatibility.

Because  of  all   of  this,  it's  important   as  well  as
interesting  (at  least  if  you have  a  curious  mind)  to
understand how a transpiler  actually works. In programming,
the best way to gain a deeper understanding is often said to
Do It Yourself.

To me, this  means that you must acquire  both a theoretical
understanding  of the  subject  matter as  well,  as do  the
required programming.  Otherwise, you'll fumble in  the dark
and can't communicate what you do; I would even say that you
don't know what you're doing - theory matters.

My transpiler, named  Archaize JS, will neither  be the best
or even good nor  support full functionality for transpiling
ES6 to ES5. But it will be a functional transpiler.




</pre>
