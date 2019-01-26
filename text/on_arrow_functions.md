# Arrow Functions


## Background
When people speak about the advantages of fat arrows, arrow functions 
because of the `=>`, they tend to emphasize a) it's not as lengthy as a normal 
function and b) it's binding of (lexical) this. My personal opinion is that they're overused 
today. If you can't make the function really short and if it
doesn't handle `this` in any way, there's no need for arrow functions. 

As you know they can also be expressed in different ways. Beneath you'll find some 
examples on how you can write an arrow function, and according to be me `injectThisDate` 
should have been written as a 'normal' function, mainly because i believe it would have 
been more readable, as I see it. These examples constitute a selection of different cases 
of arrow functions and differences in how you can write them.


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

The main difficulty handling arrow functions in the context of a transpiler, 
is that the arrow function can be used in more than one context. This 
differentiates it from for instance a variable declaration. An arrow 
function can be anonymous, a parameter of another function and 
will, therefore, have another place in the hierarchy of the AST; it will be housed 
at another 'location'. Either (though) it's part of a variable declaration 
since all arrow function are binded to variables. 

In actual code, this makes no difference. A 'normal' function also have a name
(if it's not anonymous an only gets called in a certain context, as a part of 
a specific functionality) and transforms a value or values. But it will
nevertheless be sorted as a part of the variable declaration, rather than the 
function declaration. The arrow function declaration gets its name in the 
context of variable declaration.

Also, we must handle the `this` part. We must inject a variable (and it'll 
follow tradition and be named 'self') into the AST. If we look at how a `this` 
is used we can conclude that if we regard the functionality in which the 
`this` is used a child node, the variable named 'self' should belong to 
the parent. Therefore we must append a variable declaration to the parent node. 
Because it's easier and more efficient to traverse the 'tree' from top to 
bottom, we will look for any parent containing a child with an arrow function 
making use of `this`. If so is the case, we'll inject a variable declaration 
named 'self' that contains the (lexical) `this` so that 'self' would have 
this context stored before the program enters the child node. 








