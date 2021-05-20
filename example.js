/*This package, in addition to being used for simple math, can also be used for multiple step equations.
Dreading doing some homework, try this package!
Word problem: 
Jonathan has 2 more dollars than Jim. Jim has $x^2, where x^3 = 8. Jerry has 7 more dollars than Jonathan. How many dollars does Jerry have?
This is how you may write an algebraic expression representing this problem:
*/
const math = require('ez-math.js');
x = math.pow([8, 1/3]) //takes the cuberoot and solves for x; x = 2
Jim = math.pow([x, 2]) //squares x; returns 4
Jon = Jim + 2; //Jonathan has 2 more dollars than Jim
Jer = Jon + 7; //Jerry has 7 more dollars than Jonathan.
console.log(`Jonathan has ${Jer} dollars.`) //Jonathan has 6 dollars.
//This can be helpful, but it is a lot of steps! we can also write it as this so that it has less steps;
const math = require('ez-math.js');
Jer = math.add([math.pow([math.pow([8, 1/3]), 2]), 2, 7]) //looks confusing when looking back, but it gives you the right answer and it is easier when you write it.
/*
Steps:
1. Takes the cube root of 8 (8^1/3) and sets x = to 2.
2. Raises x to the 2nd (2^2), making x 4.
3. Adds 2 to X, representing how much Jonathan has(6), and adds 7 more to that, representing how much money Jerry has.(13)
*/
console.log(`Jonathan has ${Jer} dollars.`) //Jonathan has 6 dollars.
//I am aware that this is supposed to be simple and easy to use, but it is!
//without this package, using the standard js math operations would look something like this:
jer = (((Math.cbrt(8))**2)+2)+7
