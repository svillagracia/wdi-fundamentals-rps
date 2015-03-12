////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    var = move;
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return getPlayerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    var = move;
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return getComputerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock"); {
        if (computerMove === "rock") {
            winner = "tie";
        }
        else if (computerMove === "paper") {
            winner = "computer";
        }
        else if (computerMove === "scissors") {
            winnder = "player";
        }
    } else if (playerMove === "paper"); {
        if (computerMove === "rock") {
            winner = "player";
        }
        else if (computerMove === "paper") {
            winner = "tie";
        }
        else if (computerMove === "scissors") {
            winner = "computer";
        }
    } else if (playerMove === "scissors"); {
        if (computerMove === "rock") {
            winner = "player";
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    } while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
            if (getWinner(playerMove, computerMove) === "player") { //user victory
                console.log(playerMove + " beats " + computerMove + "!");
                playerWins++;
                console.log("Score:" + playerWins + " to " + computerWins + ".")
            } else if (getWinner(playerMove, computerMove) === "computer") { //computer victory
                console.log(playerMove + " loses to " + computerMove + "!");
                computerWins++;
                console.log("Score:" + playerWins + " to " + computerWins + ".")
            } else {
                console.log(playerMove + " and " + computerMove + "is a draw.")
                console.log("Score:" + playerWins + " to " + computerWins + ".")
            }
    } 
    if (playerWins === 5) {
        console.log("You won!");
    } else if (computerWins === 5){
        console.log("You lose!");
    }
return [playerWins, computerWins];
}

