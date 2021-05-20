# easy-math.js
A javascript package that makes doing math operations very easy and simple
# How to Use: 
>npm install easy-math.js
>>both: [n1, n2, n3] and 'n1, n2, n3' (array and string) are supported as parameters.
>>>Global Rules: The operation is performed upon the first parameter and 0, or 1(multiplication and other operations like it, because if it was 0, it would always return 0(0 x anything = 0)), and then between the answer of that and the next parameter, effectively like using parenthesis, so for certain operations, like power, order matters tremendously.
## Example
```
const math = require('ez-math.js'); //importing the package
console.log(math.add('1, 2, 3, 4')); //returns 10
console.log(math.add([1, 2, 3 , 4])); //
console.log(math.subtr([1, 2, 3, 4])) //subtracts all parameters from 0, this returns -10
console.log(math.div([1, 2, 3])) //divides the first 2 parameters(1 and 2), and gets 0.5; divides that by next param and returns what it has when there are no more params to loop through. this returns 0.1666...
console.log(math.multi('1, 2, 3, 4, 5')) //multiplies all parameters together, this returns 120.
console.log(math.pow('10, 2, 4')) //treated as parentheses; raises 1st param ^ 2nd param(10^2), and then raises the answer to the next param and repeats until there are no more parameters to loop through.
```
[Example](https://replit.com/@PizzaOvenTacos/Randomizer-Package)
