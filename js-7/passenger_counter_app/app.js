let count = 0;
let total = 0;
let countDisplay = document.getElementById('count-display');
let previousDisplay = document.getElementById('previous-display');
let totalDisplay = document.getElementById('total-count');
function increment() {
    count += 1;
    // console.log("button has clicked");
    countDisplay.innerText = count;
    // console.log(count);
}
function save() {
    // console.log('saved');
    // console.log(count);
    previousDisplay.textContent += count + ' - ';
    total += count;
    totalDisplay.innerHTML = total;
    count = 0;
    countDisplay.textContent = count;
}