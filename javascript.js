//PSEUDOCODE

//Generate random "rock", "paper", "scissors" selection (getComputerChoice)
    //Generate random number
    //Assign number to "rock", "paper", or "scissors" depending on the value
//Take in prompt from player (playerSelection)
    //Check that playerSelection is valid (case insensitive)
        //If so, play game
        //If not, return error message and request new playerSelection
//Keep track of wins for player and computer
//Compare playerSelection and computerSelection and determine who wins (playGame)
    //If player wins, add 1 to playerScore, add 1 to gamesPlayed, display message and play again
    //If computer wins, add 1 to computerScore, add 1 to gamesPlayed, display message and play again
    //If tie, just display message and play again
//Check # of games played (playRound)
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