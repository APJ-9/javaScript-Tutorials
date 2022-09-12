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
