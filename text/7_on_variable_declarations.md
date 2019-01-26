# Variable Declaration


## Background

JavaScript has data types of the same kind as most other programming 
languages: `boolean`, `null`, `undefined`, `strings`, `numbers` and as of ES6 also `symbols`. 
A contrast though to for instance C or Rust, is that JavaScript is loosely 
typed. You are not locked to the data type of your variable declaration; something that 
can be equally dynamic and useful as problematic and confusing.

With ES6 it's possible to use `let` and `const`, as well as the pre-ES6 `var` to 
declare values. The difference resides in what scope the variable and its inherent 
value have. Also, there is a difference between `let` and `const`, `const` being (sort 
of) constant in most cases. 


### Problem
*The question relevant to us, is if the scoping matter in the case of a transpiler? And the 
short answer is no, or kind of.*

The most simple way to investigate this - as a proof of 
concept - is to look at some code examples, firstly explaining the difference and then 
explaining why it's not problematic (in the context of a transpilers main task, at 
least) to translate from ES6 'down to' ES5.

It's possible to determine the scope of a declared value by investigating 'blocks'. This 
will illustrate the differences and later on why they're not that important in this 
specific context. What I write about blocks and scopes is heavily incluenced by 
the section Static Scope and Block Structure in the Dragon-book (p. 28 - 33).


```
{                                             start > | *BLOCK 1* |
  let a = 0;                                          | *BLOCK 1* |
    {                                         start > | *BLOCK 2* |
       let a = 1;                                     | *BLOCK 2* |
       if(a >= 1) {                           start > | *BLOCK 3* |
         console.log("inside scope a: ", a);          | *BLOCK 3* |
       }                                        end < | *BLOCK 3* |
    }                                           end < | *BLOCK 2* | 
  console.log("outside scope, a: ", a);               | *BLOCK 1* | 
}                                               end < | *BLOCK 1* |
// output: "inside scope, a: 1", "outside scope, a: 0".
```

At first, a value named 'a' is declared and assigned the value of 1. This
declaration takes place inside a lexical scope. The next declaration of the
'a'-value, a value assigned to an identifier who share the same name as the other
'a'-value, takes place in another scope. Therefore no conflict arises.

On the other hand, this code would produce an error:

```
{
  let a = 0;
    {
       console.log("previously declared value a: ", a);
       let a = 1;
       console.log("inside scope a: ", a);
    }
  console.log("outside scope a:", a);
}
```

This code attempts to output something that is not yet declared. The fact
that, there *is* a existing, previously declared value named 'a' doesn't matter, since
'a' is in another scope. 

`let` and `const` have another scope than `var`, or rather can have.
This means that the blocks above would not be the same - or rather, that their 'meaning'
would be another. In the example below the `var` would actually be `available` for
and identifying and can thus be assigned a parameter and unproblematically log: ed.


```
{
  var a = 0;
    {
      console.log(a)
    }
}
```

Too me it seems that even though the blocks in this example are visually marked
and indicate bounds, they could - at least here - be ignored when
'interpreting' the code. 

In the context of JavaScript, quite a few developers argue that there are 
obvious advantages to the `let` keyword; you can *see* the limits for a 
declared value right away (or rather, more easily). One could, 
however, make some kind of case for using `var` for global values, even though
this is also possible with `let` and `const`.

JavaScript code is interpreted according to the ECMAScript Specification.
How this is done may vary between interpreters. The block analysis is necessary for
lexical scoping; and the analysis is possible because of the identifiers and 
their values are stored in the symbol table.

In C/C++ & Rust you can explicitly choose how to assign parameters;
you can do this by directly assigning a value (call by value) or by setting a 
reference (call by reference) with an asterisk. The reference
is to the location in the memory, holding the identifier and its value.
A call by value is a copy of a value. 

While using JavaScript you can't highlight how to assign parameters
explicitly with an asterisk. If you don't take special precautions
when copying an Object, you will end up with the scenario presented here,
since the assignment implicitly will occur by reference:

```
let a = { value: 0 };
let b = a;
b.value = 1;
console.log(`a: ${a.value}`)
// output: "a: 1"
```

To make a reference by value with modern JavaScript, thus making
a deep copy you can write:

```
let a = { value: 0 };
let b = a;
b.value = 1;
console.log(`a: ${a.value}`);
// output: "a: 1"
let c = { ...a };
c.value = 2;
console.log(`a: ${a.value}`);
// output: "a: 1" (still...)


*But nothing of this really changes everything*, partly because JavaScript 
is a loosely typed language. In all cases described above, we could 
replace `let` and `const` with `var`. The purpose with `let` and `const` would 
(of course) be lost, but that's not true for the opposite. To translate from `var` 
to `let` and fully make use of the advantages of `let` would be complex; you 
would have to make a scope analysis and rearrange the code if it were to be truly 
meaningful. And even then these changes would only make sense to the human reader, 
not the 'ghost in the machine' (the interpreter). The advantage is only 
in the scoping.

There *can* be a problem here though. Even though it is possible to reuse 
variable names, this would not be to recommend. Depending on the scope, you can use 
the same variable name declared with `let` or `const` (i.e. for the index of a classic 
for-loop). Simply converting each `let` and `const` to `var` might cause 
problems, simply because the potential problems would only stand in relation to 
the developers' intention. To put it plainly: the code would still run. This 
could, of course, be solved with some kind of re-naming strategy (if a name 
conflict arises, then rename the variable...). 

This is how Babel.js seems to solve the problem stated above:

```
{
  var a = 0;
    {
       console.log("previously declared value a: ", a);
       var _a = 1;
       console.log("inside scope a: ", _a);
    }
  console.log("outside scope a:", a);
}
```
(The solution from [the Babel.js Online transpiler](https://babeljs.io/) as of 2019-01-22.)

To me, the purpose of the limited scoping and the immutability of `const`(1) *is* the 
limits, that they establish limits lacking in JavaScript. This is also the case with 
TypeScript. Sometimes borders and limits make your life as a developer simpler, even 
though you *can* do without them.

Archaize.js, the transpiler I develop as a proof of concept, anyhow don't navigate between 
these possibilities. It would have been interesting though to make a transpiler that 
actually would acknowledge this.


-------------------------------------------------------------------------------------
1) Immutability can also - in modern JavaScript - be accomplished with 
   the `freeze` method of Object. It is, however, possible to the same in ES5 by
   use of the `defineProperty` in Object. Setting the change-is-possible-flags to
   false, would include more of a ceremony though. 





















