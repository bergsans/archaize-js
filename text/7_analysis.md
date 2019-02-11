# Analysis

The question I stated in the first chapter really doesn't get an answer in this text, not even in it's more narrow, more precise sense, how to handle the Abstract Syntax Tree and thus translate ES6 to ES5. I answer this question with the use of programming. I have, however, presented what's at stake concerning each included feature (the sections in chapter 6). These more have had the character of being notes. They focus the main 'problem' at hand, and gives present the feature and how it would be used - this to give a clue on how to actually solve the problem of transpiling that feature from ES6 to ES5.

This chapter will be more of a generalizing character. First, I want to say something on my view on 'design'. I think this is a really important aspect of programming. I can't say I've been able to follow the principles I state below but would have wanted to; actually, I believe these principles from the Unix philosophy, interpreted by Eric S. Raymond in Basics of the Unix Philosophy (https://homepage.cs.uri.edu/~thenry/resources/unix_art/ch01s06.html), focus the main problem of my code. 

```
Rule of Composition: Design programs to be connected to other programs.
Rule of Separation: Separate policy from mechanism; separate interfaces from engines.
Rule of Simplicity: Design for simplicity; add complexity only where you must.
(...)
Rule of Extensibility: Design for the future, because it will be here sooner than you think.
```
The proper way to handle the code-base would've been to narrow the concern of each task/function  (Unix-style) to a single purpose. If I had done like that from the beginning, in the end, I  would have saved time.  Now?  For each new feature, the haze and maze will grow ever more.

A code-base that would have been more Unix-like, would have been simpler to maintain and also possible to scale. The the main difficulty would've been to find ways to compose the functions, each feature would require in terms of other features and then construct a 'focus' (the feature at hand).

An example. `===`  occurs in lots of different places in programming, or rather - it _can_ occurs in lots of different places. We are used to this:

```
const isStringInArray = [...].includes('Am I here?')? 'yes' : 'no';
```

or... (don't mind the examples being silly)

```
if(1 === 1) {}
```

But... this is also correct JavaScript:
function someFunc(one = 1 === 1) {
console.log(one);
}
someFunc(); // true

My point is that without haven drawn a map beforehand (before really knowing the language), the architecture will soon be lost and a quite random building process initiated.




