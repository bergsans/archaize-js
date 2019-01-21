It's possible to determine the scope of a declared
value by investigating 'blocks'.

```
{                                       start > | *BLOCK 1* |
  let a = 0;                                    | *BLOCK 1* |
    {                                   start > | *BLOCK 2* |
       let a = 1;                               | *BLOCK 2* |
       console.log("inside scope a: ", a);      | *BLOCK 2* |
    }                                     end < | *BLOCK 2* | 
  console.log("outside scope a:", a);           | *BLOCK 1* | 
}                                         end < | *BLOCK 1* |
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
that, there *is* an existing, previously declared value named 'a' doesn't matter, since
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
'interpreting' the code. In the context of JavaScript, quite a few developers
argue that there are obvious advantages to the `let` keyword; you can *see*
the limits for a declared value right away (or rather, more easily). One could, 
however, make some kind of case for using `var` for global values, even though
this is also possible with `let` and `const`.

JavaScript code is interpreted according to the ECMAScript Specification.
How this is done may vary between interpreters (V8 is of this day the fastest
interpreter of JavaScript; that is, its code optimizing strategies are
superior to i.e. SpiderMonkeys). The block analysis is necessary for
lexical scoping; and the analysis is possible because of the identifiers and 
their values are stored in a Symbol Table.

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

























