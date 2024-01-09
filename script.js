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
//console.log(getComputerChoice())//
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
            return "Player Wins !";
        }
        else{
            scoreComputer++;
            return "Computer Wins !";
        }
    }
    else if (computerSelection ==="paper"){
        if (playerSelection==="paper"){
            return "It's a tie !";
        }
        else if (playerSelection==="scissors"){
            scorePlayer++;
            return "Player Wins !";
        }
        else{
            scoreComputer++;
            return "Computer Wins !";
        }
    }
    else if (computerSelection ==="scissors"){
        if (playerSelection==="scissors"){
            return "It's a tie !";
        }
        else if (playerSelection==="rock"){
            scorePlayer++;
            return "Player Wins !";
        }
        else{
            scoreComputer++;
            return "Computer Wins !";
        }
    }
    else {
        console.log("there is a problem :(")
    }
}

//computerSelection = getComputerChoice();
//playerSelection = getPlayerChoice();


//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(computerSelection,playerSelection));
//console.log(scoreComputer);
//console.log(scorePlayer);

function game(){
    for (let i = 1;i<=5;i++){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();

        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(computerSelection,playerSelection));

        console.log(scoreComputer);
        console.log(scorePlayer);
    }
    if (scoreComputer>scorePlayer){
        console.log("Computer Wins the Game !");
    }
    else if (scorePlayer>scoreComputer){
        console.log("Player Wins the Game !")
    }
    else {
        console.log("It's a big Tie !")
    }
}
scoreComputer=0;
scorePlayer=0;

game()