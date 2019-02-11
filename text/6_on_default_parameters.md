# Default parameters

<pre>
The   possibility   of   default  parameters   in   function
definitions is also one of ES6 'shorthands'.
</pre>
´´´
function someFunc(a = 'a', b = 'b') {
  console.log(a, b) 
}
someFunc(); // a, b
´´´
<pre>
Its use is  that you don't have to bother  about setting the
variable if  it's 'void'.  A 'void' parameter  in JavaScript
gets  assigned to  `undefined`. Pre-ES6,  you would  set the
parameter  to a  default value  in the  body of  the defined
function.
</pre>

### Problems
<pre>
I  can't see  any major  problem attached  to this  feature.
What's important is  to inject the default value  at the top
of the function body,  otherwise, problems (of course) could
arise when using it.





</pre>




