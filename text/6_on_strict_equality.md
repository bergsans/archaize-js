# On Strict (in)equality


## Background
<pre>
Strict equality is impossible in ES5. You **can** do it on a
global  level  with a  polyfill,  with  a customized  Object
method (defineProperty).  But in a  local scope it  can't be
done.

In ES6 this code would print 'TRUE':
</pre>
```
let number = 5;
let numberStr = '5';

number === numberStr?
  console.log('TRUE') 
  : 
  console.log('FALSE');
```
<pre>
But  if you  would replace  `===` with  `==` it  would print
'FALSE'.  Because JavaScript  is  a  dynamically typed  it's
possible, if  the variable declaration did  not use `const`,
to re-define the data type:
</pre>
```
numberStr = 5;
console.log(typeof numberStr)
```

### Problem
<pre>
The  main  difficulty here  is  that  the application  using
strict equality  only can use in  a development environment.
Or  rather, it  can  only  truly benefit  from  it. If  type
checking is  relevant later on,  it must be done  in another
fashion.  I guess  this  doesn't  have to  be  a problem  at
all  (especially not  since the  transpilation takes  places
afterward), but I also presume it can be a problem depending
on how the code base is transfigured.

I, therefore, see  no way to guarantee  that a transpilation
would  fully  respect  this   feature.  Even  though  strict
equality  is possible  (with polyfills)  on a  global level,
it's  not -  as  I  said earlier  -  possible  in the  local
scope. I  presume it would  possible to solve this,  but the
strategy  would  have to  more  complicated  than you  might
think  at first.  My 'solution'  is no  real solution,  I've
merely replaced each occurrence  of strict equality with its
unstrict counterpart.
</pre>




