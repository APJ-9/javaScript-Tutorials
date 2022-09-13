//Access Multi-Dimensional Arrays with indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[3][0][1];//Result =11
console.log(myData);

//Manipulate Array with push()
var ourArray = ['Akhil', 'J', 'cat'];
ourArray.push(['happy', 'joy']);
console.log(ourArray);
var thisArray = [['John', 23], ['cat', 2]];
console.log(thisArray);

//Manipulate Array with pop()
var removedVar = ourArray.pop();
console.log(ourArray);
console.log(removedVar);

//Manipulate Array with shift()
//shift() --> used to remove 1st element from the array
removedVar = ourArray.shift();
console.log(ourArray);
console.log(removedVar);

//Manipulate Array with unshift()
//similar to push() but insert at the front
ourArray.unshift('Hello');
console.log(ourArray);

//Functions
function ourFunction() {
    console.log('hello world !');
}
ourFunction();

//Passing Values to functions with arguments
function newFunction(a, b) {
    console.log(a - b);
}
newFunction(10, 6);

//Global scope and functions
var myGlobal = 59;
function fun1() {
    var oopsGlobal = 23;
    // if we don't put var in front of the oopsGlobal it become global variable

}

function fun2() {
    var output = "";
    if (typeof myGlobal != 'undefined') {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//local scope and examples

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
//console.log(myVar); 
//Result app.js:69 Uncaught ReferenceError: myVar is not defined

//Global vs local scope in functions
var outer = "OUTER Variable"
function myFunctionNew() {
    var outer = "INNER Variable"
    return outer;
}
console.log(myFunctionNew());
console.log(outer);

//Return a value from a function with return
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(100));

//Understanding undefined value returned from a function
var sum = 0;
function addThree() {
    sum = sum + 3;
    //Here we don't need any return function because the sum variable is declared as a global variable
}
function addFive() {
    sum += 5;
}
console.log(addThree());//Result is undefined
console.log(addFive()); //Result is undefined

//Assignment with a returned value
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);
var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Boolean Values
//booleans are another data types in javaScript
function welcomeToBooleans() {
    return false;
}
console.log(welcomeToBooleans());

//Use conditional logic with if statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrFalse(true));

//Comparison with the equality operator
function testEqual(val) {
    if (val === 12) {
        return "Equal";
    }
    return "not equal";
}
console.log(testEqual("12"));

function compareEquality(a, b) {
    if (a == b) {
        return 'equal';
    }
    return 'not equal';
}
console.log(compareEquality(10, '10'));

//comparision with the inequality operator
function compareNotEqual(val) {
    if (val !== 17) {
        return 'not equal';
    }
    return 'equal';
}

console.log(compareNotEqual('17'));
console.log(compareNotEqual(17));
//Other equality < <= >= >

//And/or operators
function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return 'yes';
        }
    }
    return 'no';
}
console.log(testLogicalAnd(10));

function testLogicalUsingAnd(val) {
    if (val <= 50 && val >= 25) {
        return 'yes using AND';
    }
    return 'no';
}
console.log(testLogicalUsingAnd(30));

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return 'Outside';
    }
    return 'Inside';
}
console.log(testLogicalOr(3));

//Else if Statements

function testElseIf(val) {
    if (val > 10) {
        return 'greater than 10';
    }
    else if (val < 5) {
        return 'Smaller than 5';
    }
    else {
        return 'between 5 and 10';
    }
}
console.log(testElseIf(7));

//Logical Order in If Else Statement
function orderMyLogic(val){
    if (val < 10){
        return 'Less than 10';
    }
    else if(val < 5){
        return 'Less than 5';
    }
    else {
        return 'Greater than or equal to 10';
    }
}
console.log(orderMyLogic(3));//Result is "Less than 10" but the expected result is "Less than 5"
// This is due to the logical ordring of the if else statements
function orderMyLogicCorrect(val){
    if (val < 5){
        return 'Less than 5';
    }
    else if(val < 10){
        return 'Less than 10';
    }
    else {
        return 'Greater than or equal to 10';
    }
}
console.log(orderMyLogicCorrect(3));
