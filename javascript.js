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

function playRound () {
    let playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        console.log("You win! Rock beats Scissors - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        console.log("You lose! Paper beats Rock - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        console.log("You lose! Rock beats Scissors - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        console.log("You win! Scissors beats Paper - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        console.log("You lose! Scissors beats Paper - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        console.log("You win! Paper beats Rock - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else {
        console.log("Tie! Nobody wins - Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    }
}

function playGame () {
    for (let i = 0; i < 5; i++){
        playRound(); 
    }
    if (playerScore > computerScore) {
        console.log("You win the game! Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerScore < computerScore) {
        console.log("You lose the game! Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    } else if (playerScore === computerScore) {
        console.log("You tied the game! Score: You (" + playerScore + ") - Computer (" + computerScore + ")");
    }
}

let playerScore = 0;
let computerScore = 0;

playGame();