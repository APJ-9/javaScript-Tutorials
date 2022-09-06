var num;
num=9;
if (num % 2== 0){
    console.log("even");
}
else{
    console.log("odd");
}

var a;
a=0;
a+=12;
a-=5;
a*=5;

console.log(a);

//Declare string variables
var firstName = "Akhil";
var lastName = 'Jose';
var myString = `this is a string`;
console.log(firstName,lastName,myString);

//Escaping Literal Quotes in Strings
var mtStr = " I am a \"double quoted\" string inside \"double quotes\"";
console.log(mtStr);

//Escape sequence
/* ************
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f form feed
*****/

//Plus Operator concatanition
var ourStr = "I come first. " + "I come second.";
console.log(ourStr);

//Plus Equals Operators
var myStr = "this is start. "
myStr += "This is the end."
console.log(myStr);
myStr = "My name is " + firstName;
console.log(myStr);
myStr += " ";
myStr += lastName;
console.log(myStr);

//Find length of string
strLen = myStr.length;
console.log(strLen);
console.log(myStr[5]);