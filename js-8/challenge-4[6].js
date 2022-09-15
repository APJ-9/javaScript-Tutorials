let hands = ['rock', 'paper', 'scissor'];

//Create a function that returns a random item from the array

function randomHands() {
    return Math.floor(Math.random() * 3);
}
for (let i = 0; i < 20; i++) {

    let indexVariable = (randomHands());
    console.log(hands[indexVariable]);
}