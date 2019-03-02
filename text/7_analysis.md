# Analysis
<pre>
The  big  question I  stated  in  the first  chapter  really
doesn't get an  answer in this text. I  need more experience
and gain a deeper understanding of  the process at work in a
compiler  or  transpiler,  to  explain  everything  in  more
detail. As  I've  state  before,  I  believe that theory and 
practice goes best together. Therefore, if one would want to
grasp how a compiler works it's essential to  code one. This 
is also a long-term goal of mine.

The main question  of this essay is how  the Abstract Syntax
Tree  of  a  transpiler  works.  I  have  partly  implicitly
answered this in chapter six, but also by use of programming
(code, that is).  However, the sections of  chapter sex have
had the  character of  being notes. They  focus on  the main
'problem' at hand  and present the feature and  how it could
be used.  By doing  this the  reader gets a  clue on  how to
actually solve the problem  of transpiling that feature from
ES6 to  ES5. In this  chapter, I will shortly  say something
about that process.

To   me,  it   would  seem   that  different   parts  of   a
transpiler/compiler hold different  challenges. Each part is
equally important; it's a chain  and if one link would break
the others would follow. The transpiler would not work.

In the case of the  Abstract Syntax Tree, the real challenge
is  of an  abstract nature.  At this  stage, I  realize that
I  would  have  benefitted  greatly  from  drawing  a  'map'
describing all possible relations between different types of
expressions.  This kind  of map  could have  helped me  with
structure. The problem  is that no such  mapping of possible
relations  exists, as  of my  knowledge. But,  on the  other
hand, such  a map would have  had value for other  people. I
would not,  though, have  ended up  with one  map but  a map
book, I think.

When working  with a  feature I  have used  the applications
diff, sdiff or vimdiff to articulate the differences between
ES6  and  ES5. Based  on  the  inherent differences  in  the
respective Abstract  Syntax Tree, I've attempted  to produce
rules for transformation.  The aim with a  specific rule set
is  to  translate  -  transpile  -  from  ES6  to  a  syntax
compatible  with ES5  (and inject  addons/polyfills whenever
required).  Another  aim  is,  of course,  to  this  without
breaking other features. It's exactly  at this point a 'map'
would have  helped since this  business in some case  can be
quite labyrinthine.



## On Rules

I  have worked  with rules  in this  project. The  aim of  a
transpiler  is to  persist  the very  same semantic  meaning
of  the input  after  the 'transformation'  (the process  of
transpiling) in regard to the output; that is in relation to
how the  relation input-output  is asserted in  the language
transformed from.

This is  quite tricky.  I should've  written more  tests; in
fact, in the case of a transpiler, the merits of Test Driven
Development is  obvious (and I  have not used tests  in that
way). Before  working with a given  transformation, I should
have  very  clearly  mapped  out what  to  expect  from  the
transformation.  What to  expect can  be hard  to articulate
with tests, but I should have done a better job.

In a way, I guess  this process has similarities with proofs
in mathematics, although my knowledge of mathematics is very
limited. Still, given a general  formula of some sort I know
that  the proofs  -  procedures aiming  to  prove a  general
formula - might  have quite a different  appearance. I would
think (something I  cannot verify) that the  best proofs are
those that  is the easiest  to control and  understand; that
is,  rules whose  expected output  when applied  is easy  to
control.

Why is this speculation relevant? 

I  think it's  relevant  because  it communicates  something
essential about rules. I have  not proceeded in a scientific
manner, and have used the notion of 'rules' quite sloppy. In
this  text I  have  stated that  different  rule sets  might
produce  the same  output: this  is, I  think, true.  But it
says  nothing about  the quality  of the  rules, neither  is
it  obvious  how to  understand  what  a rule  is.  However,
unfortunately, I  lack knowledge of Computer  Science and it
would have been  vain to digest the presumably  vast body of
knowledge and  insights on these  matters in a  discipline I
have  yet to  study,  and  also write  about  and program  a
project.

I  should have  thought more  deeply on  these matters.  The
Greek  astronomer Ptolemaios  produced a  fascination theory
about the motions  of the bodies in our  solar system. Using
epi-circles  Ptolemais, with  high accuracy,  could describe
the  motions  with very  good  results.  But the  rules  are
obviously  not as  sophisticated  as the  rules produced  by
Kepler and  modern science. My solutions,  regrettably, have
more in common  with Ptolemaios, well I would  even say that
Ptolemaios did a better job.

Even though it's  possible to produce good  arguments on why
one  should hold  the belief  that different  rule sets  may
produce the same output (to me,  this is hard to doubt); the
quality of the rules and  the ways of controlling the output
of the rules  applied are important and I  can only conclude
that I  should have  prepared better for  this task.  I have
programmed more than I've studied 'theory' of compilers, and
in  the end,  I realize  that even  though I  really respect
and  value knowledge  and  'theory',  another proportion  of
'theory'-practice'  would have  made  Archaize  JS a  better
product.

It  is true  that I've  managed  quite a  few features.  But
Archaize JS is  a very flawed product. And  Why? Archaize JS
can handle some features, but for almost every feature there
are special  situations, edge cases  and so on  that produce
erroneous results.  This means  that the provided  rules are
only  partly  accurate,  and  partly  accurate  rules,  when
applied, produce a result that does not meet the standard of
persisting the same  semantic meaning. I also  think this is
important to  emphasize. On  a personal  level, I  regard my
project a  great success, but it's  also extremely important
to admit that - at the same time - it's a failure.

And yes,  even though I  am very proud of  my work, it  is a
failure. As  I see it, the  standard of a transpiler  - it's
'measurement'  of quality  -  is binary  in  relation to  an
overall  result  (something  I  think  is  a  somewhat  airy
standard, but still important),  but also (more importantly)
in relation to each and every feature. Either the transpiler
translates accurately,  or it doesn't. A  transpiler doesn't
have  the  privilege  of  a  human  translator,  whose  work
effort must be viewed  through grayscales, using qualitative
judgments  only correlated  to vague  praxis, grammars,  and
wordlists.  There is  no such  thing as  an almost  accurate
translation  (transformation,   transpilation);  either  the
semantic meaning persists or, as I've said, it doesn't.
 


  

 























</pre>

