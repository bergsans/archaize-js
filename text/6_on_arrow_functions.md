# Arrow Functions


## Background. What's an arrow function?

<pre>
The advantage of fat arrows,  arrow functions because of the
`=>`, resides in a) it's not as lengthy as a normal function
and b) it's binding of (lexical) this.

An  arrow function  can be  expressed in  quite a  few ways.
Beneath you'll  find some examples  on how you can  write an
arrow  function. These  examples constitute  a selection  of
different use  cases of  arrow functions and  differences in
how you can write them.
</pre>

#### Type A (an example). The shorthand part.

```
const totalSum = (...nums) => nums.reduce((a, b) => a + b);

const sayHiTo = (name) => `Hi ${name}!`;

const sayHelloTo = name => `Hello ${name}!`;

const injectThisDate = (string, pos) => {
  if(typeof pos !== 'number' || typeof string !== 'string') {
    return -1;
  } else if(pos > 0 && pos < (string.length - 1)) {
   let firstPartOfString = string.slice(0, pos);
   let lastPartOfString = string.slice(pos, string.length);
   return `${firstPartOfString}${Date()}${lastPartOfString}`; 
  } else {
    return undefined;
  }
}; 
const somethingToSayAtBreakfast = `Todays date () might be last 
day before Earth spinns out of orbit and enter an voyage throughout space.`;
console.log(injectThisDate(, 13));
/*"Todays date (Sat Jan 26 2019 08:20:42 GMT+0100 (Central European Standard 
Time)) might be last day before Earth spinns out of orbit and enter
 an voyage throughout space." :)*/

const authors = [{name:'Virginia Woolf', maritalStatus: 'Mrs.'},
 {name:'Alice Munroe', maritalStatus:'Ms.'}];
const formalAuthorNames = authors.map((author) => `${author.maritalStatus} ${author.name}`);
```

#### Type B (an example). The `this` part.

```
// Example from http://exploringjs.com/es6/ch_arrow-functions.html

function UiComponent() {
  const button = document.getElementById('myButton');
  button.addEventListener('click', () => {
    console.log('CLICK');
    this.handleClick(); // lexical `this`
  });
}

// But with an example on how it would've been written before:
function UiComponent2() {
  const button = document.getElementById('myButton');
  var self = this;
  button.addEventListener('click', function() {
    console.log('CLICK');
    self.handleClick(); // lexical `this`
  });
}

```

### Problem
<pre>
The main difficulty handling  arrow functions in the context
of a transpiler,  is that the arrow function can  be used in
more  than  one context.  This  differentiates  it from  for
instance  a  variable  declaration. An  arrow  function  can
be  anonymous, a  parameter  of another  function and  will,
therefore,  can  have  lots  of  diffent  locations  in  the
hierarchy of the AST.

In  actual  code,  this  makes  no  difference.  A  'normal'
function also  have a name  (if it's not anonymous  and only
gets called  in a certain context,  as a part of  a specific
functionality) and transforms a value or many values. But it
will  nevertheless  be sorted  as  a  part of  the  variable
declaration, rather than the function declaration. The arrow
function  declaration  gets  its  name  in  the  context  of
variable declaration.

Also,  we must  handle the  `this`  part. We  must inject  a
variable (and  it'll follow  tradition and be  named 'self')
into the  AST. If  we look at  how a `this`  is used  we can
conclude that  if we regard  the functionality in  which the
`this`  is used  a  child node,  the  variable named  'self'
should  belong to  the parent.  Therefore we  must append  a
variable declaration to the parent node. Because it's easier
and  more  efficient to  traverse  the  'tree' from  top  to
bottom, we will look for  any parent containing a child with
an arrow function making use of `this`. If this is the case,
we'll  inject  a  variable  declaration  named  'self'  that
contains the (lexical) `this` so that 'self' would have this
context stored before the program enters the child node.
</pre>




