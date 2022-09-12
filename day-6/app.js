//Returning Boolean values from functions
function isLess(a,b){
    return (a < b);
}
console.log(isLess(10,15));

//Return early pattern for functions
function abTest(a,b){
    if(a<0 || b<0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-10,2));

// Building Objects
var ourDog = {
    'name': 'Camper',
    'legs': 4,
    'tail': 'long',
    'friends': ['everything!']
};
console.log(ourDog);