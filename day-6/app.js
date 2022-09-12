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
    'gift' : 'pony',
    'pet' : 'kitten',
    'bed' : 'sleigh'
};

function checkObj (checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    } else{
        return 'Not found';
    }
}

console.log(checkObj('gift'));
console.log(checkObj('giftx'));

//Manipulating Complex Objects
var myMusic = [
    {
        'artist' : 'Billy Joel',
        'title' : 'Piano Man',
        'release_year' : 1973,
        'formats' : ['CD','8T','LP'],
        'gold' : true
    },
    {
        'artist' : 'Beau Carnes',
        'title' : 'Cereal man',
        'release_year' : 2003,
        'formats' : ['CD','8T','YOuTube Video'],
        'gold' : true
    }
];

//Accessing Nested Objects
var myStorage = {
    'car': {
        'inside': {
            'glove box':'maps',
            'passenger seat' : 'crumbs'
        },
        'outside' : {
            'trunk' : 'jack'
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];
console.log(gloveBoxContents);