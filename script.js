// function getComputerChoice
// randomly return rock, paper or scissors
// generate random number 1 to 3
// return choice accordingly

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }
    
    if (choice === 1) {
        return "Paper";
    }

    return "Scissors";
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
        return "Computer wins. Rock loses to paper.";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win. Rock beats scissors.";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Computer wins. Paper loses to scissors.";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win. Paper beats rock.";
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Computer wins. Scissors lose to rock.";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win. Scissors beat paper.";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));