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