const icons = ["./images/cherry.png", "./images/lemon.png", "./images/watermelon.png", "./images/grape.png", "./images/gold.png", "./images/diamond.png"];

let moneyWon;
let leftCol;
let midCol;
let rightCol;

const colOne = document.querySelector(".left");
const colTwo = document.querySelector(".middle");
const colThree = document.querySelector(".right");
const moneyEl = document.querySelector(".total");

document.querySelector("button").addEventListener("click", startRound);

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
    moneyWon = 0;

    colOne.appendChild(resultOne);

    colTwo.appendChild(resultTwo);

    colThree.appendChild(resultThree);

    render();
}

moneyWon = 0;

function startRound() {
    document.querySelector("audio").play();
    
    noGlow();
    document.querySelector("button").innerText = "PLAY NOW!";

    leftCol = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById("one").src = leftCol;

    midCol = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById("two").src = midCol;

    rightCol = icons[Math.floor(Math.random() * icons.length)];
    document.getElementById("three").src = rightCol;

    if ((leftCol === midCol) && (midCol === rightCol) && (rightCol === "./images/gold.png")) {
        moneyWon += 200;
        glow();
        document.querySelector("button").innerText = "CONGRATS!";
    }
    else if ((leftCol === midCol) && (midCol === rightCol) && (rightCol === "./images/diamond.png")) {
        moneyWon += 500;
        glow();
        document.querySelector("button").innerText = "CONGRATS!";
    }
    else if ((leftCol === midCol) && (midCol === rightCol)) {
        moneyWon += 100;
        glow();
        document.querySelector("button").innerText = "CONGRATS!";
    }
    else {
        moneyWon;
        document.querySelector("button").innerText = "TRY AGAIN?";
    }

    render();
}

function render() {
    moneyEl.innerText = `$ ${moneyWon}`;
}

function glow() {
    const winAlert = document.querySelector(".winnings");
    winAlert.style.boxShadow = "0 0 500px 50px #fff";
    colOne.style.boxShadow = "0 0 500px 50px #fff";
    colTwo.style.boxShadow = "0 0 500px 50px #fff";
    colThree.style.boxShadow = "0 0 500px 50px #fff";
}

function noGlow() {
    const normBox = document.querySelector(".winnings");
    normBox.style.boxShadow = "0 0";
    colOne.style.boxShadow = "0 0";
    colTwo.style.boxShadow = "0 0";
    colThree.style.boxShadow = "0 0";
}