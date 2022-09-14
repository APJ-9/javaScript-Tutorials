//Challenge -1
//check if the person is eligible for a birthday card from the king! (100)

let age = 100;

//if less than 100       -> "Not eligible"
//else if exactly 100    -> "Here is your birthday card from the king!"
//else                   -> "you have already gotten one"

if (age < 100) {
    console.log('not eligible');
} else if (age === 100) {
    console.log('Here is your Birthday card from king!');
} else {
    console.log('You have already gotten one');
}

//Challenge -2
console.log(4 === 3); //false
console.log(5 > 2);   //true
console.log(12 > 12); //false
console.log(3 < 0);   //false
console.log(3 >= 3);  //true
console.log(11 <= 11);    //true
console.log(3 <= 2);  //false

//Challenge -3 Arrays
let featuredPost = [
    'Checkout my Netflix clone',
    'Here is the code for my project',
    'I have just relaunched my protfolio'
];

let per = ['Akhil',35,'pizza'];
console.log(per);