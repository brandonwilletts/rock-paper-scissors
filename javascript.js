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

function playRound (buttonClick) {
    let playerSelection = buttonClick;
    let computerSelection = getComputerChoice();

    const roundResult = document.querySelector("#roundResult");
    const score = document.querySelector("#score");
    const gameResult = document.querySelector("#gameResult");

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++
            roundResult.textContent = "You win! Rock beats Scissors"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++
            roundResult.textContent = "You lose! Paper beats Rock"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++
            roundResult.textContent = "You lose! Rock beats Scissors"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore++
            roundResult.textContent = "You win! Scissors beats Paper"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++
            roundResult.textContent = "You lose! Scissors beats Paper"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++
            roundResult.textContent = "You win! Paper beats Rock"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        } else {
            roundResult.textContent = "Tie! Nobody wins"
            score.textContent = "Current Score: You (" + playerScore + ") - Computer (" + computerScore + ")";
        }
    }
    checkWin(playerScore, computerScore);
}

function checkWin(playerScore, computerScore) {
    if (playerScore === 5) {
        gameResult.textContent = "You win the game!";
    } else if (computerScore === 5) {
        gameResult.textContent = "You lose the game!";
    }
}

let playerScore = 0;
let computerScore = 0;

const playerButtons = document.querySelector("#playerButtons");
playerButtons.addEventListener("click", (event) => {
    playRound(event.target.id);
});