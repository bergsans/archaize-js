# Analysis
<pre>
The  big  question I  stated  in  the first  chapter  really
doesn't get an  answer in this text. I  need more experience
and gain a deeper understanding of  the process at work in a
compiler  or  transpiler,  to  explain  everything  in  more
detail.

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






















</pre>

