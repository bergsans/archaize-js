# On property shorthands

The property shorthand of ES6 admits declaring keys whose 
value is a reference to a variable with the same name as the key.

```
let a = 1;
let b = 2;
let obj = { a, b };
console.log(obj); // { a: 1, b: 2 }
```

### Problems
Solving the AST transformation of this feature can be handled 
by 'explicitivity'. Instead of relying on the JavaScript engine 
to handle this inference, you just provide the reference. 
Thus doing it compatible with ES5: `let obj = {a: a, b: b}`.

 
