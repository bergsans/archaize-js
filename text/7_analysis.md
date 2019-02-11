The  proper way  to handle  the code-base  would've been  to
narrow the  concern of each task/function  (Unix-style) to a
single purpose. If I had  done like that from the beginning,
in  the end  I  would have  saved time.  Now?  For each  new
feature, the haze and maze will grow ever more.

A code-base that would have  been more Unix-like, would have
been simpler  to maintain  and also  possible to  scale. The
main difficulty  would've been to  find ways to  compose the
functions,  perhaps  by  mapping  what  each  feature  would
require  in terms  of other  features and  then construct  a
'focus' (the feature at hand).

An  example. `===`  occurs in  lots of  different places  in
programming, or rather - it _can_ occur in lots of different
places. We are used to this:

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

My  point  is that  without  haven  drawn a  map  beforehand
(before really knowing the  language), the architecture will
soon be lost and a quite random building process initiated.




