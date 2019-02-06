# Reflections

## Difficulties
A transpiler consists of many parts, I imagine being quite hard to 
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



