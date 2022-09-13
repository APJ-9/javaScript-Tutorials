//Returning Boolean values from functions
function isLess(a, b) {
    return (a < b);
}
console.log(isLess(10, 15));

//Return early pattern for functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-10, 2));

// Building Objects
var ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tail': 'long',
    'friends': ['everything!']
};
console.log(ourDog);

//Accessing Object properties with dot notation
var testObj = {
    'hat': 'ballcap',
    'shirt': 'jersey',
    'shoes': 'cleats'
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
//Accessing object properties with Bracket Notation
var testObj1 = {
    'an entree': 'hamburger',
    'my side': 'veggies',
    'the drink': 'water'
};
var entreeValue = testObj1['an entree'];
var drinkValue = testObj1['the drink'];
console.log(drinkValue);

//Accessing Object properties with variables
var testObj2 = {
    12: 'akhil',
    16: 'Idukki',
    19: 'febin'
};

var playerNumber = 16;
var player = testObj2[playerNumber];
console.log(player);

// Updating Object Properties
ourDog.name = 'freeCodeCamp';
console.log(ourDog);

//Add new properties to an object
ourDog.bark = 'bow-bow';
console.log(ourDog);

//Delete properties from an object
delete ourDog.tail;
console.log(ourDog);

//Testing Objects for properties
var myObj = {
    'gift': 'pony',
    'pet': 'kitten',
    'bed': 'sleigh'
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return 'Not found';
    }
}

console.log(checkObj('gift'));
console.log(checkObj('giftx'));

//Manipulating Complex Objects
var myMusic = [
    {
        'artist': 'Billy Joel',
        'title': 'Piano Man',
        'release_year': 1973,
        'formats': ['CD', '8T', 'LP'],
        'gold': true
    },
    {
        'artist': 'Beau Carnes',
        'title': 'Cereal man',
        'release_year': 2003,
        'formats': ['CD', '8T', 'YOuTube Video'],
        'gold': true
    }
];

//Accessing Nested Objects
var myStorage = {
    'car': {
        'inside': {
            'glove box': 'maps',
            'passenger seat': 'crumbs'
        },
        'outside': {
            'trunk': 'jack'
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);

//Accessing Nestesd Arrays
var myPlants = [
    {
        type: 'flower',
        list: [
            'rose',
            'Tulip',
            'Dandelion'
        ]
    },
    {
        type: 'trees',
        list: [
            'fir',
            'pine',
            , 'birch'
        ]
    }
];
console.log(myPlants);
var secondTree = myPlants[1].list[1];
console.log(secondTree);

//While Loop
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//For loop
myArray = [];
// console.log(myArray);
for (i = 0; i < 5; i++) {
    myArray.push(i + 1);
}
console.log(myArray);
myArray = [];

//Iterate odd numbers with a for loop
for (i = 1; i < 10; i += 2) {
    myArray.push(i);
    //when i = 0 prints even numbers
}
console.log(myArray);
myArray = [];

//count backwards with a for loop
for (i = 10; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);
myArray = [];

//Iterate through an array with a for loop
var ourArray = [9, 10, 11, 12];
var ourTotal = 0;
for (var j = 0; j < ourArray.length; j++) {
    ourTotal += ourArray[j];
}
console.log(ourTotal);

//Nesting for loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

//Iterate with do while loops
myArray = [];
i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray);
//According to the logic the array must be empty since i is greater then 5 but here we use do ... while loop the loop executes once so that the array gets the value

//Generate Random Fractions
console.log(Math.random());

//Generate random whole numbers
console.log(Math.floor(Math.random() * 10 + 1));
//here we get random numbers from 1 to 10 
//when we only use multiply we get numbers from 0 to 9

//Generate random whole number within a range
function ourRandomRangeNumber(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRangeNumber(2, 15));

//Use the parseInt function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger('56'));
//convert string to integer

//use the parseint function with a radix
function convertToIntegerRadix(str) {
    return parseInt(str, 2);
}
console.log(convertToIntegerRadix('111'));

//Ternary Operator
//syntax :  condition ? statement-if -true : statement-if-false;
function checkEquals(a, b) {
    return a === b ? true : false;
    //    return a===b ;    //this line also returns the same result as above
}
console.log(checkEquals(2, 3));

//Use Multiple conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}
console.log(checkSign(10));


//we can use let and const to declare variables
//const --> read only variable
//Use capital letters for naming when using const so that we can easily understand that it is a constant and cant be change


//Scope of a variable using let and var
function checkScope() {
    "use strict";
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('inside block: '+i);
    }
    console.log('outside block: '+i);
    return i;
}
checkScope();

function checkScope1() {
    "use strict";
    // let i = 'function scope';
    if (true) {
        var i = 'block scope';
        console.log('inside block: '+i);
    }
    //end of block and remaining of function scope
    console.log('outside block: '+i);
    //here the i can be accessed when we use var to define the variable
    //result block scope prints 2 time
    return i;
}
checkScope1();

function checkScope2() {
    "use strict";
    // let cs2 = 'function scope';//the variable i is used before so that using variable i is not a good way.
    if (true) {
        let cs2 = 'block scope';
        console.log('inside block: '+cs2);
    }
//    console.log('outside block: '+cs2);
//returns an error // Uncaught ReferenceError: cs2 is not defined at checkScop2
// we have defined the cs2 variable inside the if block and we are trying to access it from outside the if block which produce an reference error
//   return cs2;
}
checkScope2();

const S = [5,7,2];
function editInPlace(){
    // S = [2,5,7]; //We can not change it like this insted of that we use
    S[0]=2;
    S[1]=5;
    S[2]=7;
}
console.log(S);
editInPlace();
console.log(S);

//Prevent Object Mutation
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS={
        PI:3.14
    };

    Object.freeze(MATH_CONSTANTS);
    //Object.freeze helps to freeze the object from updations and we can't change it anywhere in the program

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

