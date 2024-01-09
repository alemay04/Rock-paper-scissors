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
let computerSelection = getComputerChoice()

function getPlayerChoice(){
    let choice = prompt("Rock, paper or scissors ?");
    let selection = choice.toLowerCase();
    if (selection === "rock"){
        //return selection;//
        console.log(selection);
    }
    else if(selection ==="paper"){
        //return selection;//
        console.log(selection);
    }
    else if(selection ==="scissors"){
        //return selection;//
        console.log(selection);
    }
    else {
        console.log("this value is invalid !");
    }

}
getPlayerChoice()
