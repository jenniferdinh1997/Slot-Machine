//Define the constants
const icons = ["./images/cherry.png", "./images/lemon.png", "./images/watermelon.png", "./images/grape.png", "./images/gold.png", "./images/diamond.png"];

//State variables
let moneyWon;
let leftCol;
let midCol;
let rightCol;

//Select the elements on the DOM that we'll have to update
const colOne = document.querySelector(".left");
const colTwo = document.querySelector(".middle");
const colThree = document.querySelector(".right");
const moneyEl = document.querySelector(".total");

//Add event listeners
document.querySelector("button").addEventListener("click", startRound);

//Functions
//sets the initial values of the state functions 
leftCol = icons[Math.floor(Math.random() * icons.length)];
let resultOne = document.createElement("img");
resultOne.setAttribute("id", "one");
resultOne.src = leftCol;

midCol = icons[Math.floor(Math.random() * icons.length)];
let resultTwo = document.createElement("img");
resultTwo.setAttribute("id", "two");
resultTwo.src = midCol;

rightCol = icons[Math.floor(Math.random() * icons.length)];
let resultThree = document.createElement("img");
resultThree.setAttribute("id", "three");
resultThree.src = rightCol;

window.onload = function init() {
    moneyWon = 0; //initial balance

    colOne.appendChild(resultOne);

    colTwo.appendChild(resultTwo);

    colThree.appendChild(resultThree);

    render();
}

// what happens each time user restarts the round
moneyWon = 0;

function startRound() {
    leftCol = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById("one").src = leftCol;

    midCol = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById("two").src = midCol;

    rightCol = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById("three").src = rightCol;

    if (leftCol === midCol && midCol === rightCol && rightCol === "./images/gold.png") {
        moneyWon += 200;
        glow();
    }
    else if (leftCol === midCol && midCol === rightCol && rightCol === "./images/diamond.png") {
        moneyWon += 500;
        glow();
    }
    else if (leftCol === midCol && midCol === rightCol) {
        moneyWon += 100;
        glow();
    }
    else {
        moneyWon;
    }

    render();
}

function render() {
    moneyEl.innerText = `$ ${moneyWon}`;
}

//what happens when the player wins money
function glow() {
    const winAlert = document.querySelector(".winnings");
    winAlert.style.boxShadow = "0 0 500px #fff";
}