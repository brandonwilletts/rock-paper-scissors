//PSEUDOCODE

//Compare playerSelection and computerSelection and determine who wins (playGame)
    //If player wins, add 1 to playerScore, add 1 to gamesPlayed, display message and play again
    //If computer wins, add 1 to computerScore, add 1 to gamesPlayed, display message and play again
    //If tie, just display message and play again
//Check # of games played (playRound)
    //Keep track of wins for player and computer
    //If < 5, keep playing
    //If === 5, compare playerWins to computerWins, return the winner, and display message

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;
    switch (randomNumber) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else {
        return "Tie! Nobody wins";
    }
}

const playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
