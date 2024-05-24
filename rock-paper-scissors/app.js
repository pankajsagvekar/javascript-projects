const comChoiceDisplay = document.querySelector("#com-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const choice = document.querySelectorAll("button");
let userChoice;
let comChoice;
let result;

choice.forEach(choice => choice.addEventListener('click', (e) =>{
    userChoice = e.target.id; //this gets id of buttont
    userChoiceDisplay.innerHTML = userChoice;

    computerChoice();
    getResult();
}));

function computerChoice() {
    const randNums = Math.floor(Math.random() * 3) + 1; //+1 because the choice starts from 0
    console.log(randNums);

    if (randNums == 1) {
        comChoice = "rock";
    }
    if(randNums == 2){
        comChoice = "paper";
    }
    else{
        comChoice = "scissors";
    }
    comChoiceDisplay.innerHTML = comChoice;
}

function getResult() {
    if(comChoice == userChoice){
        result = "Draw";
    }
    if(comChoice === 'rock' && userChoice === 'paper'){
        result = "You Won!";
    }
    if(comChoice === 'rock' && userChoice === 'scissors'){
        result = 'You Lost!';
    }
    if(comChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lost'
    }
    if(comChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Won';
    }
    if(comChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Won';
    }
    if(comChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lost';
    }
    resultDisplay.innerHTML = result;
}
