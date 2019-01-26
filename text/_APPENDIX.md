# APPENDIX

## On CLI's

CLI is an acronym for Command-line Interface. A CLI can include
aspects of GUI, a Graphical User Interface, but is anyhow centered
around a text, not graphical elements such as buttons and menus. In a
GUI we navigate by using the mouse or with some kind of keyboard shorthand.

Most people seem to think this *always* means progress. But I don't agree. The 
benefits of a CLI can be quite large, especially in the BASH of Linux. How would you
create or rename 100 files quickly using a GUI? Most likely you wouldn't.

In this case, though I've chosen a CL(U)I to be able to focus on the main 
task, namely to write parts of a transpiler. I could - of course - use this
together with a CLI. And this touches upon another important thing about
the command-line; it's built to let applications inter-connect. In the Linux
environment, this is called piping.

I or someone else would include Archaize JS (well, that would have to be a 
a future version that covers all features and even then it would not be 
recommended at all; Babel.js is by lightyears a better option) in a project
there is two (actually three, but I don't count the child processes of Node.js here)
main options:

* By using the Archaize JS NPM package and by using the functionality of
`makeAST` and `transpile`.

* Or by including the CLI in package.json; something I would recommend.

Archaize JS uses Commander.js to handle the CLI part of the application. 
Commander.js provides excellent functionality for CLI's. Writing your own
CLI is more complicated than one might think and would involve quite a few
complicated Regular Expressions and lots of `if-else` expressions. My guess
is that you don't wont to bother about that. When writing a CLI you most of the
time want to focus on the 'logic', the problem your application wants to solve.
My contention is that there are good reasons to honor the tradition of the Unix 
Philosophy when writing these kind of application. *Do one thing and do it 
well.* If you see to it that the application is 'linkable', that other 
applications can 'pipe' it, you've created a small part of a larger eco-system. 
