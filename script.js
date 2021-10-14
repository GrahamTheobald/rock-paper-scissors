let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    let option = options[Math.floor(Math.random() * 3)];
    
    return option;
}

function playerSelection() { 
    let option;   
    while (option !== 'rock' && option !== 'paper' && option !== 'scissors'){
        option = prompt("Choose between Rock, Paper, or Scissors:").toLowerCase();
    }

    return option;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!")
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') 
    ) {
        computerScore ++
        console.log(`You Lost! ${computerSelection} beats ${playerSelection}`)
    }

    if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
        playerScore ++ 
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        playRound(playerSelection(), computerPlay());        
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You are the winner after 5 rounds!")
    }
    else {
        console.log("Comiserations! The computer defeated you after 5 rounds!")
    }
}

game()