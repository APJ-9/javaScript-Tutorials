let firstCard = 6;
let secondCard = 10;
let blackJack = false;
let isAlive = true;
cards =[firstCard,secondCard];
let sum = firstCard + secondCard;
let message = '';
let messageDisplay = document.getElementById('message-el');
let sumDisplay = document.getElementById('sum-el');
let cardDisplay = document.getElementById('cards-el');
// another method insted of getElementById is querySelector
// let sumDisplay = document.querySelector('#sum-el');

function startGame(){
    renderGame();
}


function renderGame() {

    cardDisplay.textContent = 'Card: ' + cards[0] + ' - ' + cards[1];
    sumDisplay.textContent = 'Sum: ' + sum;
    if (sum < 21) {
        // console.log('Draw a new card');
        message = 'Draw a new card';
    } else if (sum === 21) {
        // console.log("Wohoo! You've got Blackjack");
        message = "You've got Blackjack";
        blackJack = true;
    } else {
        // console.log("You're out of the game");
        message = "You've out of the game";
        isAlive = false;
    }
    // console.log(blackJack);
    messageDisplay.textContent = message;
}
//Cash Out !

function newCard(){
    console.log('Drawing a new card from the game');
    let newCard = 5;
    sum += newCard;
    renderGame();
}