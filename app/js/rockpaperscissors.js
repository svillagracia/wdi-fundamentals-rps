////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

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

function getPlayerMove(move) {
    return getInput();
}

function getComputerMove(move) {
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var x = 'rock';
    var y = 'paper';
    var z = 'scissors';
    if (playerMove == x && computerMove == z) {
        return ('You win!');
    }
    else if (playerMove == y && computerMove == x) {
        return ('You win!');
    }
    else if (playerMove == z && computerMove == y) {
        return ('You win!');
    }
    else if (playerMove == x && computerMove == y) {
        return ('You lose...')
    }
    else if (playerMove == y && computerMove == z) {
        return ('You lose...')
    }
    else if (playerMove == z && computerMove == x) {
        return ('You lose...')
    }
    else (playerMove === computerMove) {
        ('Draw!')
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    } while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(winner)
            if (winner === "You win!") { //user victory
                console.log(playerMove + " beats " + computerMove + "!");
                playerWins++;
                console.log("Score:" + playerWins + " to " + computerWins + ".")
            } else if (winner === "You lose...") { //computer victory
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
return (playerWins, computerWins);
}

playToFive();