let playerScore = 0;
let computerScore = 0;
let play = true;

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
    const message = document.querySelector("#message");

    if (playerSelection === computerSelection) {
        message.textContent = `It's a draw!`;
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') 
    ) {
        computerScore ++;
        const score = document.querySelector("#computer-score");
        score.textContent = computerScore;
        message.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`;
        checkScore();
    }

    if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
    ) {
        playerScore ++;
        const score = document.querySelector("#player-score");
        score.textContent = playerScore;
        message.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
        checkScore();
    }
}

function checkScore(){
    const message = document.querySelector("#message");
    const reset = document.querySelector('#reset');
    if (playerScore >= 5){
        message.textContent = `Congratulations! You won the game!`;
        reset.setAttribute('style', 'display: block');
        play = false;
    }

    if (computerScore >= 5){
        message.textContent = `Comiserations! You lost the game!`;
        reset.setAttribute('style', 'display:block');
        play = false;
    }
}

function resetGame(){
    playerScore = 0;
    document.querySelector("#player-score").textContent = 0;
    computerScore = 0;
    document.querySelector("#computer-score").textContent = 0;
    document.querySelector("#message").textContent = `Click a button to begin`
    document.querySelector("#reset").setAttribute('style', 'display:none')
    play = true;

}

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (play) {
            playRound(button.id, computerPlay());
        }
    })

})

const reset = document.querySelector("#reset");

reset.addEventListener('click', resetGame)