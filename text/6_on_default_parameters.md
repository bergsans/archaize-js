# Default parameters

The   possibility   of   default  parameters   in   function
definitions is also one of ES6 'shorthands'.

´´´
function someFunc(a = 'a', b = 'b') {
  console.log(a, b) 
}
someFunc(); // a, b
´´´

Its use is  that you don't have to bother  about setting the
variable if  it's 'void'.  A 'void' parameter  in JavaScript
gets  assigned to  `undefined`. Pre-ES6,  you would  set the
parameter  to a  default value  in the  body of  the defined
function.

### Problems
I  can't see  any major  problem attached  to this  feature.
What's important is  to inject the default value  at the top
of the function body,  otherwise, problems (of course) could
arise when using it.





