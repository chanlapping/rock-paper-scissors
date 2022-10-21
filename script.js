
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }
    
    if (choice === 1) {
        return "paper";
    }

    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return "Draw";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "Computer";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "Player";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Player";
    }
}


function endGame() {
    btns.forEach(btn => btn.disabled = true);
    newGameBtn.disabled = false;
}

function newGame() {
    newGameBtn.disabled = true;
    playerScore = 0;
    computerScore = 0;
    btns.forEach(btn => btn.disabled = false); 
    playerDisplay.textContent = '';
    computerDisplay.textContent = '';
    scoreDisplay.textContent = '';
    resultDisplay.textContent = '';
    matchDisplay.textContent = '';
}

const icons = {
    rock: '&#9994;',
    paper: '&#9995;',
    scissors: '&#9996;'
};

const btns = document.querySelectorAll('.choice');
const newGameBtn = document.querySelector('#new-game');
const display = document.querySelector('#display');
const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const resultDisplay = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
const matchDisplay = document.querySelector('#match');

let playerScore = 0;
let computerScore = 0;

btns.forEach(btn => btn.addEventListener('click', (e) => {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    if (winner === 'Player') {
        playerScore++;
        winner += ' wins';
    } else if (winner === 'Computer') {
        computerScore++;
        winner += ' wins';
    }

    playerDisplay.innerHTML = e.target.innerHTML;
    computerDisplay.innerHTML = icons[computerSelection];
    resultDisplay.textContent = winner;
    scoreDisplay.textContent = 'player ' + playerScore + ' Computer ' + computerScore;

    if (playerScore === 5) {
        matchDisplay.textContent = 'Player wins the game.';
        endGame();
    }

    if (computerScore === 5) {
        matchDisplay.textContent = 'Computer wins the game.';
        endGame();
    }
    
}));

newGameBtn.addEventListener('click', newGame);

newGame();