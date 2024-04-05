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
        return "You win! Rock beats Scissors - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose! Paper beats Rock - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lose! Rock beats Scissors - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You win! Scissors beats Paper - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lose! Scissors beats Paper - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win! Paper beats Rock - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    } else {
        return "Tie! Nobody wins - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
    }
}

function playGame () {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (i === 4 && (playerScore > computerScore)) {
            return "You win the game! Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (i === 4 && (playerScore < computerScore)) {
            return "You lose the game! Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (i === 4 && (playerScore === computerScore)) {
            return "You tied the game! Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        }
    }
}

let playerScore = 0;
let computerScore = 0;

console.log(playGame());