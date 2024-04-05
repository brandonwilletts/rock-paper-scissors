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
        playerScore++
        return "You Win! Rock beats Scissors - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You Lose! Paper beats Rock - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You Lose! Rock beats Scissors - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You Win! Scissors beats Paper - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You Lose! Scissors beats Paper - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You Win! Paper beats Rock - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else {
        return "Tie! Nobody wins - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    }
}

function playGame () {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

let playerScore = 0;
let computerScore = 0;

playGame();