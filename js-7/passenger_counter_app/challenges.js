//Challenge - 1
//create two variables, firstName and lastName
let firstName = 'Akhil';
let lastName = 'Jose';

//Concatenate the two variables into a third variable called fullName
let fullName = firstName + ' ' + lastName;

//Log fullName into console
console.log(fullName);

//Challenge - 2
//creates a function that logs out "hi there, Akhil" when called
let greetings = 'Hi there';
function greets(name) {
    console.log(greetings + ', ' + name + '!');
}
greets('Linda');

//challenge - 3
let myPoints = 3;

//create two functions, add3Points() and remove1Point(), and have them
//add/remove points to/from the myPoints variable
function add3Points() {
    myPoints += 3;
}
function remove1Point() {
    myPoints -= 1;
}

//call the functions to the line below logs out 10

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

//Challenge - 4
//Try to predict what each of the lines will log out
console.log('2' + 2);//22
console.log(11 + 7);//18
console.log(6+'5');//65
console.log('my points: '+5+9);//my points: 59
console.log(2+2);//4
console.log('11'+'14');//1114