// function getComputerChoice
// randomly return rock, paper or scissors
// generate random number 1 to 3
// return choice accordingly

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

// function playRound
// input: player selection, computer selection
// return a string - declaring who is the winner
// player selection should be case insensitive

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
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

// game function
// play 5 rounds
// keep scores. report winner at the end.
// display result of each round
// use prompt to get player selection

// player score = 0, computer score = 0
// loop 5 times:
//   get user selection
//   get computer choice
//   play one round, show result
//   update scores
// determine final result
// log winner

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What is your choice? (rock, paper or scissors)");
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        if (winner === "Player") {
            playerScore++;
            console.log("You win. " + playerSelection + " beats " + computerSelection);
        } else if (winner === "Computer") {
            computerScore++;
            console.log("You lose. " + playerSelection + " loses to " + computerSelection);
        } else {
            console.log("Draw.");
        }
    }
    console.log("final scores");
    console.log("you: " + playerScore);
    console.log("Computer: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You win.");
    } else if (playerScore < computerScore) {
        console.log("You lose.");
    } else {
        console.log("Draw");
    }
}

game();