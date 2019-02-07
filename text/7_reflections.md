# Reflections

As I state in the first chapter, I don't consider this essay being
'science'. This will be reflected in how I write about my project in
this chapter. I think of my writings more as of 'documentation' on
how I've worked, and an attempt to explain to myself (and others) how
a transpiler works.


## An anecdote

As a developer, I like to have the latest version of Node.js at hand. 
During the project, my computer crashed, and I had to resort to another 
computer at home. I've not used this computer for programming for a 
long time or had not anyway installed a new version of Node.js (11.x). 
When I cloned the GitHub repo and ran the tests some of them failed. I 
could at first not understand why, but later I realized that I had used 
a new feature of Node.js from the latest ECMA Specification (.flat). 
This method is not a fancy feature (it flattens multidimensional arrays), 
but it's a convenient feature that makes your life easier.

Because I worked with a transpiler of my own, I had not included Babel.js 
in some sort of build process as you'd normally do in a larger project. 
And this is why my code failed. It also clearly demonstrates a sort of 
blindness that many web developers face: presuming that because everything 
works out just fine on your machine (with the latest Node.js, the latest 
browsers and so on) that the code is unproblematic. But this is often not 
always the case of the random user. Also, servers don't always have the 
latest version of Node.js, because earlier dependencies might break.

To me, this anecdote from my project clearly expresses why transpilers 
matters. As I said earlier in this essay, I think of this in ethical terms. 
I would go as far as to say that it's an ethical imperative to make us of 
transpilers if you use new language features. Surely layout is indeed 
tremendously important. And misaligned elements (fixated with CSS) might 
cause serious problems. But the errors would more likely be on an 
aesthetical or interface even (bad enough though). 

On the other hand, if the behavior is invalid even more serious 
problem can emerge. I'm not saying that some aspect is more important 
than another; actually, I think there are good reasons to view 
applications as wholes. All I'm saying that the 'gravity' of a bug, 
I guess, could have a greater, more negative impact if the behavior 
would be faulty. And that this, arguably, means that you make use of 
transpilers. And if you use transpilers, as with all things, there 
can be gains of knowing the process, so to speak.


## Difficulties

A transpiler consists of many parts, I imagine being quite hard Ito 
program. I've used dependencies in every aspect for the included 
steps of a transpiler, beside the Abstract Syntax Tree. To me, the AST 
seems like the most fun part of a transpiler because it's in the 
AST 'something happens', it's the locus of **essential** data 
transformations of a transpiler - at least of a transpiler of modern 
to less modern JavaScript. However much I would've appreciated being 
able to handle the process as a whole, I would not have managed what 
I've done, given the time limit.

It's probable, with some knowledge of various parts of the process, 
that different parts constitute very distinct challenges. For instance, 
the lexical analysis of the front-end often relies heavenly upon 
complicated regular expressions. In the case of the AST, the 
difficulty is of another nature. Also, the outcome - viewed 
through the notion of readability - is very different. If you're 
not very good with advanced regular expressions, it would seem 
likely that it would be easier to read the transformations of 
the AST part.

Once you've solved how to transform a certain 'problem', adopt the 
inner workings to a new set of rules, the outcome is easy 
to comprehend. However working with complicated data, sometimes 
nested in a labyrinth fashion (to say the least), is hard. But when 
you've managed to find the 'path' from A to B in the tree hierarchy 
and written the code that matches the appropriate set of rules for 
a certain transformation, you end up with quite readable code. This 
is at least true if you acknowledge how complicated these 
kinds of processes can be. 

I believe this fact becomes evident if you would make major 
changes to the code, having to replace a rule with another and would 
face the issue of targeting something new and in another manner.

At the same time, I don't wont to stress the difficulties. If you use 
a dependency like Esprima,  much is free. With hard work, I imagine anyone 
can make a transpiler! But you'll -just like me - be stuck with 
data transformations for a while.


### On documentation, or lack thereof
At first, I used the minimalistic library [Acorn JS](https://github.com/acornjs/acorn). 
It seems great and I always enjoy the writings of the open source developer 
Marijn Haverbeke, the main developer of the project. But the lack of good 
documentation and examples made it hard for me, being a junior developer. 
Otherwise, I much would have enjoyed using Acorn for this project. I see no 
hinders for using it the same way as I've used Esprima, let the difficulty 
of using a 'smaller' dependency. There is more material on Esprima, and 
therefore I believe that a quite unexperienced developer like me 
would gain much from using it. 


## Concluding remarks
To learn about (and construct) a transpiler is an adventure. You don't 
only gain general knowledge on how (in the context of web front-end 
development) transpilers like TypeScript, Babel.js, ESLint (or CoffeeScript, 
ClojureScript, Elixir, ReasonML ...) works 'under the hood'; you also 
gain 'power' over the same process. Even if you won't develop anything 
as complex as Babel.js or TypeScript, you learn to use a very powerful 
instrument that can perform all sorts of tasks. Transpilers are everywhere.

My next step is to learn more about other parts of this process than working 
with the Abstract Syntax Tree, even though this is the mest - as of my 
knowledge - the most crucial step in a transpiler; it's here where the 
magic takes place. I also one day want to build my own (limited) compiler.

To me, it would seem quite 'instrumental' to speculate on how this would 'develop' you 
as a programmer. My guess though is that building a compiler or the whole 
process of a transpiler offer no short-term gains; however, it would 
seem reasonable to argue that the long-term effects on your skill set 
are enormous. I bet the same thing could be said about algorithms and 
data structures. 

Perhaps all the things mentioned could be compared with the discussion on 
the uses of the humanities? Unfortunately, this age seems to emphasize 'concrete' 
skills and disfavor 'general' abilities. But I'm very skeptical that it would 
be possible to be a good programmer without a general understanding of 
these matters. If you can't produce 'distance' to code, how would you be 
able to reason about it and make intelligent choices regarding the overall 
architecture? My guess is that this also would be true for the details.

Even though I think the reflections in the passage above are important, I've been 
fortunate enough to grow very fond of compilers/transpilers. Also, I think 
that transpilers (especially understanding Abstract Syntax Trees and be able to 
manipulate them) are very useful, even to a junior developer. Ok, I know this 
can be included in, for instance, ESLint but you have the ability to 
write 'logic' that identifies console logs, warns about un-used variables 
and so on. Depending on your project, you could tailor this and make 
the 'search and replace'-pattern specific to your project. Not bad.



