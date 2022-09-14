let blackJack = false;
let isAlive = false;
cards = [];
let sum = 0;
let message = '';
let messageDisplay = document.getElementById('message-el');
let sumDisplay = document.getElementById('sum-el');
let cardDisplay = document.getElementById('cards-el');
// another method insted of getElementById is querySelector
// let sumDisplay = document.querySelector('#sum-el');

let player = {
    name: 'ABC',
    chips: 200
}

let playerDisplay = document.getElementById('player-el');
playerDisplay.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor((Math.random() * (13)) + 1);
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    }
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {

    cardDisplay.textContent = 'Card: ' + cards[0] + ' ' + cards[1];
    for (let i = 2; i < cards.length; i++) {
        cardDisplay.textContent += ' ' + cards[i];
    }
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

function newCard() {
    // console.log('Drawing a new card from the game');
    if (isAlive === true && blackJack == false) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
    else if (sum > 21) {
        alert("Oops!! You're out of game \n Press Start Game for New Game");
    } else if (sum == 21) {
        alert('You got Blackjack!!! \n Press Start Game for New Game');
    }
    else {
        alert('Press Start Game');
    }
}