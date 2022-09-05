// inline comment
/*this is a multyline comment*/
// 7 diffent data types
/*
undefined
null
boolean
strin
symbol
number and
object*/

var myName = "Akhil";
myName = 8;
//var can be used any where in your program
let fullName = "Akhil P Jose";
// let can be used any where in the scope of definiton of the program
const pi = 3.14;
//const stands for constant never change the value

var a;
var b =2;
console.log(a);
a=7;
b=a;
console.log(a);

//Uninitialized Variables
var a1;
var a2;
var a3;

a1= a1+1;
a2 = a2 + 5;
a3 = a3 + "String!";
console.log(a1); //Result NaN --> Not a Number
console.log(a2); // Result NaN --> Not a Number
console.log(a3); // Result --> undefinedString!

a1= 5;
a2 = 10;
a3 = "I am a ";
a1= a1+1;
a2 = a2 + 5;
a3 = a3 + "String!";
console.log(a1); //Result 6
console.log(a2);//Result 15
console.log(a3);//Result I am a Srting

// Case Sensitivity in Variables
//result in ReferenceError
//Camel case
//eg :- titleCaseOver = "a variable"

//Adding Numbers
var sum = 10 + 10
console.log(sum)
var myVar = 87;
myVar ++;
console.log(myVar);
var ourDecimal = 5.7;
console.log(ourDecimal*9);
var product  = 2.0 *2.5;
console.log(product);

var remainder;
remainder = 11/3;
//also known as modulus operator remainder operator