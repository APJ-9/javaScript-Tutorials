//Access Multi-Dimensional Arrays with indexes
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = myArray[3][0][1];//Result =11
console.log(myData);

//Manipulate Array with push()
var ourArray = ['Akhil','J','cat'];
ourArray.push(['happy','joy']);
console.log(ourArray);
var thisArray = [['John',23],['cat',2]];
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
function ourFunction(){
    console.log('hello world !');
}
ourFunction();

//Passing Values to functions with arguments
function newFunction(a,b){
    console.log(a-b);
}
newFunction(10,6); 

//Global scope and functions
var myGlobal = 59;
function fun1(){
    var oopsGlobal = 23;
    // if we don't put var in front of the oopsGlobal it become global variable

}

function fun2(){
    var output = "";
    if(typeof myGlobal != 'undefined'){
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

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
//console.log(myVar); 
//Result app.js:69 Uncaught ReferenceError: myVar is not defined

//Global vs local scope in functions
var outer = "OUTER Variable"
function myFunctionNew(){
    var outer = "INNER Variable"
    return outer;
}
console.log(myFunctionNew());
console.log(outer);

//Return a value from a function with return
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(100));

//Understanding undefined value returned from a function
var sum =0;
function addThree(){
    sum = sum + 3;
    //Here we don't need any return function because the sum variable is declared as a global variable
}
function addFive(){
    sum+=5;
}
console.log(addThree());//Result is undefined
console.log(addFive()); //Result is undefined

//Assignment with a returned value
var changed = 0;

function change(num){
    return (num+5)/3;
}
changed = change(10);
console.log(changed);
var processed = 0;
function processArg(num){
    return (num + 3)/5;
}
processed = processArg(7);
console.log(processed);

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));