//console.log("Hello World !")//

function getComputerChoice(){
    let number = Math.floor(Math.random()* 3)
    if (number == 0){
        return "rock"
    }
    else if (number == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

//Still good :)//

function getPlayerChoice(){
    let choice = prompt("Rock, paper or scissors ?");
    let selection = choice.toLowerCase();
    if (selection === "rock" || selection === "paper" || selection === "scissors"){
        return selection;
        //console.log(selection);
    }
    else {
        console.log("this value is invalid !");
    }

}
//looking good so far//

function playRound(computerSelection, playerSelection){
    
    if (computerSelection ==="rock"){
        if (playerSelection==="rock"){
            return "It's a tie !";
        }
        else if (playerSelection==="paper"){
            scorePlayer++;
            scoreP.textContent =  scorePlayer;
            return "Player Wins !";
        }
        else{
            scoreComputer++;
            scoreC.textContent =  scoreComputer;
            return "Computer Wins !";
        }
    }
    else if (computerSelection ==="paper"){
        if (playerSelection==="paper"){
            return "It's a tie !";
        }
        else if (playerSelection==="scissors"){
            scorePlayer++;
            scoreP.textContent =  scorePlayer;
            return "Player Wins !";
        }
        else{
            scoreComputer++;
            scoreC.textContent =  scoreComputer;
            return "Computer Wins !";
        }
    }
    else if (computerSelection ==="scissors"){
        if (playerSelection==="scissors"){
            return "It's a tie !";
        }
        else if (playerSelection==="rock"){
            scorePlayer++;
            scoreP.textContent =  scorePlayer;
            return "Player Wins !";
        }
        else{
            scoreComputer++;
            scoreC.textContent =  scoreComputer;
            return "Computer Wins !";
        }
    }
    else {
        console.log("there is a problem :(")
    }
}
function win(){
    if (scoreComputer === 5){
        alert("Computer wins the Game");
    }
    else if (scorePlayer === 5){
        alert("Player wins the Game");
    }
}

const rockChoice = document.querySelector("#rockBtn");
const paperChoice = document.querySelector("#paperBtn");
const scissorsChoice = document.querySelector("#scissorsBtn");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const scoreP = document.querySelector("#playerScore");
const scoreC = document.querySelector("#computerScore");
const result = document.querySelector("#result");

let scoreComputer = 0;
let scorePlayer = 0;
scoreC.textContent= scoreComputer;
scoreP.textContent= scorePlayer;

player.textContent = "Player " ;
computer.textContent = "Computer ";


rockChoice.addEventListener('click', () =>{

     const computerSelection = getComputerChoice()
     const playerSelection = "rock";
     player.textContent = "Player : " + playerSelection;
     computer.textContent = "Computer : "  + computerSelection;
     result.textContent = playRound(computerSelection, playerSelection);
     win()
    
})

paperChoice.addEventListener('click', () =>{

    const computerSelection = getComputerChoice()
    const playerSelection = "paper";
    player.textContent = "Player : " + playerSelection;
    computer.textContent = "Computer : "  + computerSelection;
    result.textContent = playRound(computerSelection, playerSelection);
    win()
})

scissorsChoice.addEventListener('click', () =>{   
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    player.textContent = "Player : " + playerSelection;
    computer.textContent = "Computer : "  + computerSelection;
    result.textContent = playRound(computerSelection, playerSelection);
    win()
})




