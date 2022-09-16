let fruits = ['apple', 'orange', 'apple', 'apple', 'orange',];
let appleShelf = document.getElementById('apple-shelf');
let orangeShelf = document.getElementById('orange-shelf');

//create a function that puts the apples onto appleShelf
//and the orange onto the orange shelf. Use a for loop,
// a conditional statement, and the textContent property

function sortFruits() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === 'apple') {
            appleShelf.textContent += fruits[i] + ' ';
        }
        else {
            orangeShelf.textContent += fruits[i] + ' ';
        }
    }
}

sortFruits();