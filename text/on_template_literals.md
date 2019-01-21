# On template literals

A template literal in ES6 admits embedded expressions in strings. You can embed variables, 
functions or general expressions (for instance mathematics).

This is an example:

```
const firstName = "Luke";
const surName = "Skywalker";
const name = `${firstName} ${surName}`;

```

Before the advent of ES6, you'd write it like this:

```
var firstName = "Luke";
var surName = "Skywalker";
var name = firstName + " " + surName;

```

This means, that between *each* expression a 'joining' procedure would have to
be in place. With the terminology of ESTree, you'd call this a 'Binary Expression'.
It could, of course, be some other kind of binary expression, if you handle non-strings
(3 - 2 and so on).

The syntax tree for template literals is a bit different from that of a h
The problem at hand, if you want to write a polyfill is that you must inject a b



