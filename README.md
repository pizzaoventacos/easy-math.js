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

console.log(math.add([1, 2, 3 , 4])); //also returns 10

console.log(math.subtr([1, 2, 3, 4])) //same as: ((1 - 2) - 3) - 4 - returns 8; subtracts (n1 - n2) = x, then subtracts x - n3, or, in this case, x - 3 = y, then subtracts y - n4, or y - 4, and returns when there are no more to loop through

console.log(math.div([1, 2, 3])) //divides the first 2 parameters(1 and 2), and gets 0.5; divides that by next param and returns what it has when there are no more params to loop through. this returns 0.1666...

console.log(math.multi('1, 2, 3, 4, 5')) //multiplies all parameters together, this returns 120.

console.log(math.pow('10, 2, 4')) //treated as parentheses; raises 1st param ^ 2nd param(10^2), and then raises the answer to the next param and repeats until there are no more parameters to loop through.
```
# Methods: 
> ## __add__ _- adds all of the numbers specified_
>>Parameters - array(required)
>>>type: string or array

>example: math.add([1, 2, 3, 4]) OR math.add('1, 2, 3 ,4') 1 STRING, the commas are inside the string, not representing new strings.

> ## __subtr__ - _subtracts all of the numbers specified in the same order_
>>Parameters - array(required)
>>>type: string or array

>example: math.subtr([1, 2, 3, 4]) - returns -8 (executes [(1-2)-3]-4)

> ## __multi__ - _multiplies all numbers specified_
>>Parameters - array(required)
>>>type: string or array

>example: math.multi([1, 2, 3, 4]) returns 24 (executes [(1 * 2) * 3] * 4)

> ## __div__ - _divides all numbers specified in the same order_
>>Parameters - array(required)
>>>type: string or array

>example: math.div([1, 2, 3, 4]) - returns 0.041666666666666664 (executes [(1 / 2) / 3] / 4)

> ## __pow__ - _raises array[0] to array[1] and raises that to the next parameter. - continues until there is nothing else to loop through(see example for better understanding)_
>>Parameters - array(required)
>>>type: string or array

>example: math.pow([5, 2, 3]) - returns 15625 (executes [5 ^ 2] ^ 3)(the same as: math.pow([5, math.multi([2, 3])])), which multiplies 2 and 3, getting 6, and raises 5 to that(5^6)

[Example](https://replit.com/@PizzaOvenTacos/Randomizer-Package)
